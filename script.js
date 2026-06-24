let currentStream = null;
let selectedImage = null;

// Skin Detection Model
const skinIssuePatterns = {
    acne: {
        keywords: ['pimple', 'bump', 'red spot', 'whitehead', 'blackhead'],
        colorRanges: { r: [200, 255], g: [100, 150], b: [100, 150] },
        confidence: 0
    },
    eczema: {
        keywords: ['dry', 'flaky', 'inflamed', 'irritated'],
        colorRanges: { r: [180, 255], g: [80, 150], b: [80, 150] },
        confidence: 0
    },
    psoriasis: {
        keywords: ['scale', 'patch', 'thick', 'silvery'],
        colorRanges: { r: [200, 255], g: [100, 140], b: [100, 140] },
        confidence: 0
    },
    dermatitis: {
        keywords: ['inflamed', 'swollen', 'red', 'irritated'],
        colorRanges: { r: [210, 255], g: [80, 130], b: [80, 130] },
        confidence: 0
    },
    rosacea: {
        keywords: ['persistent redness', 'visible vessels', 'flushed'],
        colorRanges: { r: [220, 255], g: [100, 140], b: [100, 140] },
        confidence: 0
    },
    vitiligo: {
        keywords: ['white patch', 'pigmentation loss', 'depigmented'],
        colorRanges: { r: [240, 255], g: [240, 255], b: [240, 255] },
        confidence: 0
    },
    fungal_infection: {
        keywords: ['itchy', 'burning', 'scaling', 'rash'],
        colorRanges: { r: [190, 255], g: [100, 160], b: [100, 160] },
        confidence: 0
    },
    urticaria: {
        keywords: ['welts', 'hives', 'raised bumps'],
        colorRanges: { r: [210, 255], g: [90, 140], b: [90, 140] },
        confidence: 0
    },
    warts: {
        keywords: ['bump', 'hard', 'dome-shaped', 'cauliflower'],
        colorRanges: { r: [150, 220], g: [120, 200], b: [120, 200] },
        confidence: 0
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    populateDashboard();
});

function setupEventListeners() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchTab(e.target.getAttribute('data-tab'));
        });
    });

    // Camera controls
    document.getElementById('start-camera-btn').addEventListener('click', startCamera);
    document.getElementById('capture-btn').addEventListener('click', captureAndAnalyze);
    document.getElementById('stop-camera-btn').addEventListener('click', stopCamera);

    // Upload controls
    document.getElementById('upload-btn').addEventListener('click', () => {
        document.getElementById('image-input').click();
    });

    document.getElementById('image-input').addEventListener('change', handleImageUpload);
    document.getElementById('analyze-upload-btn').addEventListener('click', analyzeUploadedImage);

    // Dashboard
    document.getElementById('issue-select').addEventListener('change', (e) => {
        displayRemedy(e.target.value);
    });

    // Close results
    document.querySelector('.close-results-btn').addEventListener('click', closeResults);

    // Drag and drop
    const uploadArea = document.querySelector('.upload-area');
    if (uploadArea) {
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.style.background = 'rgba(76, 175, 80, 0.3)';
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.style.background = 'rgba(76, 175, 80, 0.1)';
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                document.getElementById('image-input').files = files;
                handleImageUpload({ target: document.getElementById('image-input') });
            }
        });
    }
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
}

async function startCamera() {
    try {
        currentStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } }
        });

        const video = document.getElementById('camera-video');
        video.srcObject = currentStream;

        document.getElementById('start-camera-btn').style.display = 'none';
        document.getElementById('capture-btn').style.display = 'inline-block';
        document.getElementById('stop-camera-btn').style.display = 'inline-block';
        document.getElementById('camera-permission-alert').style.display = 'none';
    } catch (error) {
        document.getElementById('camera-permission-alert').style.display = 'block';
        console.error('Camera error:', error);
    }
}

function stopCamera() {
    if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
        currentStream = null;
    }

    document.getElementById('start-camera-btn').style.display = 'inline-block';
    document.getElementById('capture-btn').style.display = 'none';
    document.getElementById('stop-camera-btn').style.display = 'none';
}

async function captureAndAnalyze() {
    const video = document.getElementById('camera-video');
    const canvas = document.getElementById('camera-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);

    canvas.toBlob((blob) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            selectedImage = e.target.result;
            analyzeImage();
        };
        reader.readAsDataURL(blob);
    });
}

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            selectedImage = event.target.result;
            const img = document.getElementById('preview-img');
            img.src = selectedImage;
            document.getElementById('preview-container').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

function analyzeUploadedImage() {
    analyzeImage();
}

async function analyzeImage() {
    showLoading(true);

    try {
        // Create image object
        const img = new Image();
        img.onload = async () => {
            // Analyze image for skin issues
            const results = detectSkinIssues(img);
            showLoading(false);
            displayResults(results);
        };
        img.src = selectedImage;
    } catch (error) {
        console.error('Analysis error:', error);
        showLoading(false);
    }
}

function detectSkinIssues(img) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Resize for better analysis
    canvas.width = 300;
    canvas.height = 300;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Apply Sobel edge detection for texture analysis
    const sobelResult = applySobelEdgeDetection(imageData, canvas.width, canvas.height);
    const edgeStrength = sobelResult.strength;

    // Advanced skin analysis
    let analysis = {
        redness: 0,
        dryness: 0,
        bumpiness: 0,
        scaling: 0,
        whiteness: 0,
        inflammation: 0,
        texture: [],
        colorDistribution: {}
    };

    // Analyze every pixel for detailed detection
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Calculate skin tone baseline
        const avg = (r + g + b) / 3;
        const rDiff = r - avg;
        const gDiff = g - avg;
        const bDiff = b - avg;

        // 1. REDNESS DETECTION (Acne, Dermatitis, Rosacea)
        if (r > g + 30 && r > b + 30) {
            analysis.redness += 1;
            analysis.inflammation += 2;
        }

        // 2. DRYNESS/SCALING (Eczema, Psoriasis)
        if (r > 200 && g > 150 && b > 100 && (r - b > 60)) {
            analysis.dryness += 1;
            analysis.scaling += 1;
        }

        // 3. TEXTURE/BUMPINESS (Acne, Warts)
        const pixelBrightness = (r + g + b) / 3;
        analysis.texture.push(pixelBrightness);
        if (Math.abs(rDiff) > 40 || Math.abs(gDiff) > 40 || Math.abs(bDiff) > 40) {
            analysis.bumpiness += 1;
        }

        // 4. WHITE PATCHES (Vitiligo)
        if (r > 235 && g > 235 && b > 235) {
            analysis.whiteness += 1;
        }

        // 5. UNEVEN PIGMENTATION (Multiple conditions)
        if ((r > 200 && g < 120) || (r > 200 && b < 120)) {
            analysis.inflammation += 1;
        }
    }

    // Calculate percentages
    const totalPixels = data.length / 4;
    const rednessPercent = (analysis.redness / totalPixels) * 100;
    const drynessPercent = (analysis.dryness / totalPixels) * 100;
    const bumpinessPercent = (analysis.bumpiness / totalPixels) * 100;
    const whitePercent = (analysis.whiteness / totalPixels) * 100;
    const inflationPercent = (analysis.inflammation / totalPixels) * 100;

    // Calculate texture variance for bumpy skin
    const textureVariance = calculateVariance(analysis.texture);

    const detectedIssues = [];

    // ACNE DETECTION (Red bumps, uneven texture, high edge strength)
    if (rednessPercent > 6 && (bumpinessPercent > 4 || edgeStrength > 3) && textureVariance > 700) {
        const confidence = Math.min(95, (rednessPercent * 3.5 + bumpinessPercent * 2.5 + (textureVariance / 120) + edgeStrength) / 7);
        detectedIssues.push({
            issue: 'acne',
            confidence: Math.round(confidence)
        });
    }

    // ECZEMA DETECTION (Dry, scaly, inflamed patches)
    if (drynessPercent > 10 && inflationPercent > 8 && edgeStrength > 2) {
        const confidence = Math.min(92, (drynessPercent * 3.5 + inflationPercent * 2.5 + edgeStrength) / 6);
        detectedIssues.push({
            issue: 'eczema',
            confidence: Math.round(confidence)
        });
    }

    // PSORIASIS DETECTION (Scaling, thick appearance, redness, texture)
    if (drynessPercent > 13 && rednessPercent > 10 && edgeStrength > 3) {
        const confidence = Math.min(90, (drynessPercent * 2.8 + rednessPercent * 2.2 + edgeStrength * 0.8) / 5);
        detectedIssues.push({
            issue: 'psoriasis',
            confidence: Math.round(confidence)
        });
    }

    // DERMATITIS DETECTION (Swelling, redness, inflammation, texture variation)
    if (rednessPercent > 9 && inflationPercent > 10 && edgeStrength > 2.5) {
        const confidence = Math.min(88, (rednessPercent * 3.2 + inflationPercent * 2.8 + edgeStrength) / 6);
        detectedIssues.push({
            issue: 'dermatitis',
            confidence: Math.round(confidence)
        });
    }

    // ROSACEA DETECTION (Persistent redness, visible vessels=edges, less dry)
    if (rednessPercent > 18 && rednessPercent < 50 && drynessPercent < 8 && edgeStrength > 2) {
        const confidence = Math.min(85, (rednessPercent * 2.2 + edgeStrength * 1.5) / 3.7);
        detectedIssues.push({
            issue: 'rosacea',
            confidence: Math.round(confidence)
        });
    }

    // VITILIGO DETECTION (White patches, pigment loss, smooth)
    if (whitePercent > 4 && rednessPercent < 3 && drynessPercent < 5) {
        const confidence = Math.min(90, whitePercent * 8);
        detectedIssues.push({
            issue: 'vitiligo',
            confidence: Math.round(confidence)
        });
    }

    // FUNGAL INFECTION DETECTION (Red, scaling, irregular edges)
    if (rednessPercent > 7 && drynessPercent > 9 && edgeStrength > 2.5) {
        const confidence = Math.min(82, (rednessPercent * 2.5 + drynessPercent * 2 + edgeStrength * 1.2) / 5.7);
        detectedIssues.push({
            issue: 'fungal_infection',
            confidence: Math.round(confidence)
        });
    }

    // URTICARIA DETECTION (Welts, bumps, high texture variance, edges)
    if (bumpinessPercent > 7 && rednessPercent > 6 && textureVariance > 800 && edgeStrength > 3) {
        const confidence = Math.min(80, (bumpinessPercent * 3 + rednessPercent * 2 + (textureVariance / 150) + edgeStrength) / 6.15);
        detectedIssues.push({
            issue: 'urticaria',
            confidence: Math.round(confidence)
        });
    }

    // WARTS DETECTION (Hard bumps, very uneven texture, strong edges)
    if (bumpinessPercent > 10 && textureVariance > 1000 && edgeStrength > 4) {
        const confidence = Math.min(78, (bumpinessPercent * 2.5 + (textureVariance / 130) + edgeStrength * 1.5) / 4);
        detectedIssues.push({
            issue: 'warts',
            confidence: Math.round(confidence)
        });
    }

    // Remove duplicates and keep highest confidence
    const issueMap = new Map();
    detectedIssues.forEach(issue => {
        if (!issueMap.has(issue.issue) || issueMap.get(issue.issue).confidence < issue.confidence) {
            issueMap.set(issue.issue, issue);
        }
    });

    let finalIssues = Array.from(issueMap.values());

    // If no strong detection, provide educated guess based on dominant characteristics
    if (finalIssues.length === 0) {
        if (rednessPercent > 5) {
            finalIssues.push({
                issue: 'acne',
                confidence: Math.round(Math.min(75, 45 + rednessPercent * 1.5))
            });
        } else if (drynessPercent > 8) {
            finalIssues.push({
                issue: 'eczema',
                confidence: Math.round(Math.min(72, 50 + drynessPercent))
            });
        } else if (bumpinessPercent > 5) {
            finalIssues.push({
                issue: 'acne',
                confidence: Math.round(Math.min(68, 40 + bumpinessPercent * 3))
            });
        } else {
            finalIssues.push({
                issue: 'acne',
                confidence: 35
            });
        }
    }

    return finalIssues.sort((a, b) => b.confidence - a.confidence).slice(0, 3);
}

// Helper function to calculate variance
function calculateVariance(arr) {
    if (arr.length === 0) return 0;
    const mean = arr.reduce((a, b) => a + b) / arr.length;
    const variance = arr.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / arr.length;
    return variance;
}

function applySobelEdgeDetection(imageData, width, height) {
    const data = imageData.data;
    const edges = new Float32Array(width * height);
    
    const sobelX = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
    const sobelY = [-1, -2, -1, 0, 0, 0, 1, 2, 1];
    
    let edgeStrength = 0;
    let maxEdge = 0;
    
    for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
            let gx = 0, gy = 0;
            
            for (let ky = -1; ky <= 1; ky++) {
                for (let kx = -1; kx <= 1; kx++) {
                    const idx = ((y + ky) * width + (x + kx)) * 4;
                    const gray = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
                    
                    gx += gray * sobelX[(ky + 1) * 3 + (kx + 1)];
                    gy += gray * sobelY[(ky + 1) * 3 + (kx + 1)];
                }
            }
            
            const magnitude = Math.sqrt(gx * gx + gy * gy);
            edges[y * width + x] = magnitude;
            edgeStrength += magnitude > 50 ? 1 : 0;
            maxEdge = Math.max(maxEdge, magnitude);
        }
    }
    
    return {
        edges: edges,
        strength: (edgeStrength / (width * height)) * 100,
        maxEdge: maxEdge
    };
}

function displayResults(results) {
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = '';

    // Add analysis summary
    const summaryHTML = `
        <div class="result-item">
            <h4>📊 ${translate("Analysis Results")}</h4>
            <p style="color: #666; font-size: 0.9em;">Analysis complete. Detected ${results.length} potential condition(s).</p>
        </div>
    `;
    resultsContent.innerHTML = summaryHTML;

    results.forEach((result, idx) => {
        const remedy = getRemedy(result.issue);
        const content = currentLanguage === 'en' ? remedy.en : remedy.ta;

        const resultHTML = `
            <div class="result-item">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <h4>${idx + 1}. ${translate(result.issue)}</h4>
                    <span style="background: #4CAF50; color: white; padding: 5px 10px; border-radius: 20px; font-weight: bold;">${result.confidence}%</span>
                </div>
                
                <div style="background: #f0f0f0; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                    <strong>${translate("Description")}:</strong>
                    <p style="margin: 5px 0; font-size: 0.9em;">${content.description}</p>
                </div>

                <div style="background: #e8f5e9; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                    <strong>✨ ${translate("Recommended Remedy")}:</strong>
                    <p style="margin: 5px 0; font-weight: bold; color: #2e7d32;">${content.remedy}</p>
                </div>
                
                <div class="remedy-ingredients">
                    <strong>📋 ${translate("Ingredients")}:</strong>
                    ${content.ingredients.map(ing => `<div style="margin: 5px 0; font-size: 0.9em;">✓ ${ing}</div>`).join('')}
                </div>
                
                <div class="remedy-ingredients">
                    <strong>📖 ${translate("Instructions")}:</strong>
                    ${content.instructions.map((inst, i) => `<div style="margin: 5px 0; font-size: 0.9em;"><strong>${i + 1}.</strong> ${inst}</div>`).join('')}
                </div>
                
                <div class="remedy-ingredients" style="border-left: 4px solid #ff9800;">
                    <strong>⚠️ ${translate("Precautions")}:</strong>
                    ${content.precautions.map(prec => `<div style="margin: 5px 0; font-size: 0.85em; color: #d32f2f;">• ${prec}</div>`).join('')}
                </div>
            </div>
        `;

        resultsContent.innerHTML += resultHTML;
    });

    document.getElementById('results-section').style.display = 'block';
    document.body.classList.add('showing-results');
}

function displayRemedy(issueKey) {
    if (!issueKey) {
        document.getElementById('remedy-display').innerHTML = '';
        return;
    }

    const remedy = getRemedy(issueKey);
    const content = currentLanguage === 'en' ? remedy.en : remedy.ta;

    const remedyHTML = `
        <div class="remedy-card">
            <h3>${content.name}</h3>
            <p><strong>${translate("Description")}:</strong> ${content.description}</p>
            <p><strong>${translate("Recommended Remedy")}:</strong> ${content.remedy}</p>
            
            <div class="remedy-ingredients">
                <strong>${translate("Ingredients")}:</strong>
                ${content.ingredients.map(ing => `<div>• ${ing}</div>`).join('')}
            </div>
            
            <div class="remedy-ingredients">
                <strong>${translate("Instructions")}:</strong>
                ${content.instructions.map((inst, idx) => `<div>${idx + 1}. ${inst}</div>`).join('')}
            </div>
            
            <div class="remedy-ingredients">
                <strong>${translate("Precautions")}:</strong>
                ${content.precautions.map(prec => `<div>• ${prec}</div>`).join('')}
            </div>
        </div>
    `;

    document.getElementById('remedy-display').innerHTML = remedyHTML;
}

function populateDashboard() {
    const select = document.getElementById('issue-select');
    const issues = getAllIssues();

    issues.forEach(issue => {
        const option = document.createElement('option');
        option.value = issue;
        option.textContent = translate(issue);
        select.appendChild(option);
    });
}

function showLoading(show) {
    document.getElementById('loading-spinner').style.display = show ? 'block' : 'none';
    if (show) {
        document.body.classList.add('showing-results');
    }
}

function closeResults() {
    document.getElementById('results-section').style.display = 'none';
    document.body.classList.remove('showing-results');
}

// Update language for remedy display
const originalSetLanguage = window.setLanguage;
window.setLanguage = function(lang) {
    originalSetLanguage.call(window, lang);
    
    // Update dashboard select labels
    const select = document.getElementById('issue-select');
    const issues = getAllIssues();
    issues.forEach((issue, idx) => {
        if (select.options[idx + 1]) {
            select.options[idx + 1].textContent = translate(issue);
        }
    });

    // Update displayed remedy if one is showing
    const currentIssue = select.value;
    if (currentIssue) {
        displayRemedy(currentIssue);
    }
};
