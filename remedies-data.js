const remediesDatabase = {
    acne: {
        en: {
            name: "Acne",
            description: "Acne is a common skin condition characterized by pimples, blackheads, and whiteheads.",
            remedy: "Tea Tree Oil & Honey Mask",
            ingredients: [
                "2-3 drops of tea tree oil",
                "1 tablespoon of raw honey",
                "1/2 teaspoon of lemon juice"
            ],
            instructions: [
                "Mix tea tree oil with honey",
                "Add lemon juice and stir well",
                "Apply to affected areas for 15-20 minutes",
                "Rinse with warm water",
                "Apply twice daily for best results"
            ],
            precautions: [
                "Do a patch test before full application",
                "Avoid if allergic to honey or tea tree oil",
                "Do not use on sensitive skin without dilution",
                "Consult dermatologist if acne worsens"
            ]
        },
        ta: {
            name: "முகப்பருக்கள்",
            description: "முகப்பருக்கள் ஒரு பொதுவான தோல் நிலை ஆகும் இது பருக்கள், கறுப்பு புள்ளிகள் மற்றும் வெள்ளை புள்ளிகளால் வகைப்படுத்தப்படுகிறது.",
            remedy: "தேயிலை மரம் எண்ணெய் & தேன் முகமூடி",
            ingredients: [
                "2-3 சொட்டுகள் தேயிலை மரம் எண்ணெய்",
                "1 கட்டளை தேன்",
                "1/2 தேனொட்டி எலுமிச்சை சாறு"
            ],
            instructions: [
                "தேயிலை மரம் எண்ணெய் தேனுடன் கலக்கவும்",
                "எலுமிச்சை சாறு சேர்த்து நன்கு கலக்கவும்",
                "பாதிக்கப்பட்ட பகுதிகளில் 15-20 நிமிடங்களுக்கு பயன்படுத்தவும்",
                "சூடான நீரால் கழுவவும்",
                "சிறந்த முடிவுகளுக்கு தினமும் இரண்டு முறை பயன்படுத்தவும்"
            ],
            precautions: [
                "முழு பயன்பாட்டிற்கு முன்பு ஒரு பேட்ச் சோதனை செய்யவும்",
                "தேன் அல்லது தேயிலை மரம் எண்ணெயில் ஒவ்வாமை இருந்தால் தவிர்க்கவும்",
                "நீர்த்ததல் இல்லாமல் உணர்வுশীல தோலில் பயன்படுத்த வேண்டாம்",
                "முகப்பருக்கள் மோசமாகிவிட்டால் தோல் நிபுணரை ஆலோசிக்கவும்"
            ]
        }
    },
    eczema: {
        en: {
            name: "Eczema",
            description: "Eczema is an inflammatory skin condition causing itching, redness, and dryness.",
            remedy: "Oatmeal & Coconut Oil Bath",
            ingredients: [
                "1 cup of ground oatmeal",
                "2 tablespoons of coconut oil",
                "Warm bath water"
            ],
            instructions: [
                "Add ground oatmeal to warm bathwater",
                "Mix in coconut oil until well combined",
                "Soak in the bath for 15-20 minutes",
                "Gently pat skin dry",
                "Apply moisturizer while skin is still damp"
            ],
            precautions: [
                "Use lukewarm water, not hot water",
                "Test for allergies to oatmeal first",
                "Avoid if coconut oil causes reactions",
                "Consult doctor for severe eczema"
            ]
        },
        ta: {
            name: "ஆறினை",
            description: "ஆறினை ஒரு அழற்சி தோல் நிலை ஆகும் இது சிரிப்பு, சிவப்பு மற்றும் உலர்வை ஏற்படுத்துகிறது.",
            remedy: "ஓட்ஸ் & தேங்காய் எண்ணெய் குளி",
            ingredients: [
                "1 கப் அரைக்கப்பட்ட ஓட்ஸ்",
                "2 கட்டளைகள் தேங்காய் எண்ணெய்",
                "சூடான குளி நீர்"
            ],
            instructions: [
                "அரைக்கப்பட்ட ஓட்ஸ் சூடான குளி நீரில் சேர்க்கவும்",
                "தேங்காய் எண்ணெய் கலந்து நன்கு கலக்கவும்",
                "15-20 நிமிடங்களுக்கு குளியில்浸させவும்",
                "தோலை மெல்லிய பாவனையுடன் உலர்த்தவும்",
                "தோல் இன்னும் ஈரமாக இருக்கும் போது மாய்சுரைசர் பயன்படுத்தவும்"
            ],
            precautions: [
                "சூடான நீர் அல்ல, வெதுவெதுப்பான நீர் பயன்படுத்தவும்",
                "முதலில் ஓட்ஸ்க்கு ஒவ்வாமை சோதிக்கவும்",
                "தேங்காய் எண்ணெய் எதிர்வினை ஏற்படுத்தினால் தவிர்க்கவும்",
                "கடுமையான ஆறினைக்கு டாக்டரை ஆலோசிக்கவும்"
            ]
        }
    },
    psoriasis: {
        en: {
            name: "Psoriasis",
            description: "Psoriasis is a chronic autoimmune skin condition causing red, scaly patches.",
            remedy: "Aloe Vera & Turmeric Paste",
            ingredients: [
                "2 tablespoons of aloe vera gel",
                "1 teaspoon of turmeric powder",
                "1 teaspoon of honey"
            ],
            instructions: [
                "Extract fresh aloe vera gel",
                "Mix turmeric powder with aloe vera",
                "Add honey and mix well",
                "Apply to affected areas",
                "Leave for 20-30 minutes then rinse"
            ],
            precautions: [
                "Turmeric may stain skin temporarily",
                "Test for allergies first",
                "Avoid if turmeric causes irritation",
                "See dermatologist for severe cases"
            ]
        },
        ta: {
            name: "தோல் விஷம்",
            description: "தோல் விஷம் ஒரு நாள்பட்ட தன்-நோயெதிர்ப்பு தோல் நிலை ஆகும் சிவப்பு, தேவலாம் புள்ளிகளை ஏற்படுத்துகிறது.",
            remedy: "அலோவேரா & மஞ்சள் பேஸ்ட்",
            ingredients: [
                "2 கட்டளைகள் அலோவேரா ஜெல்",
                "1 தேனொட்டி மஞ்சள் தூள்",
                "1 தேனொட்டி தேன்"
            ],
            instructions: [
                "புதிய அலோவேரா ஜெல் பிரித்தெடுக்கவும்",
                "மஞ்சள் தூளை அலோவேராவுடன் கலக்கவும்",
                "தேன் சேர்த்து நன்கு கலக்கவும்",
                "பாதிக்கப்பட்ட பகுதிகளில் பயன்படுத்தவும்",
                "20-30 நிமிடங்களுக்கு விட்டு விட்டு கழுவவும்"
            ],
            precautions: [
                "மஞ்சள் தோலை தற்காலிகமாக கறையாக்கலாம்",
                "முதலில் ஒவ்வாமை சோதிக்கவும்",
                "மஞ்சள் கடுமைப்படுத்தினால் தவிர்க்கவும்",
                "கடுமையான நிபந்தனைகளுக்கு தோல் நிபுணரை பார்க்கவும்"
            ]
        }
    },
    dermatitis: {
        en: {
            name: "Dermatitis",
            description: "Dermatitis is skin inflammation causing redness, swelling, and itching.",
            remedy: "Chamomile Tea Compress",
            ingredients: [
                "2 chamomile tea bags",
                "Warm water",
                "Clean cloth"
            ],
            instructions: [
                "Brew chamomile tea in warm water",
                "Let tea cool to comfortable temperature",
                "Soak cloth in the tea",
                "Apply to affected areas for 10-15 minutes",
                "Use 2-3 times daily"
            ],
            precautions: [
                "Ensure water is not too hot",
                "May cause allergic reaction in some people",
                "Avoid if you're allergic to chamomile",
                "Consult doctor if inflammation persists"
            ]
        },
        ta: {
            name: "தோல் அழற்சி",
            description: "தோல் அழற்சி தோல் வீக்கம் ஆகும் சிவப்பு, ফूப்பு மற்றும் சிரிப்பை ஏற்படுத்துகிறது.",
            remedy: "கேமோமைல் தேய் சுக்குவைப்பு",
            ingredients: [
                "2 கேமோமைல் தேய் பைகள்",
                "சூடான நீர்",
                "சுத்தமான துணி"
            ],
            instructions: [
                "கேமோமைல் தேயை சூடான நீரில் கொதிக்க வைக்கவும்",
                "தேயை வசதியான வெப்பநிலையில் ঠান்டா செய்யவும்",
                "துணியை தேயில் ஊற வைக்கவும்",
                "பாதிக்கப்பட்ட பகுதிகளில் 10-15 நிமிடங்களுக்கு பயன்படுத்தவும்",
                "தினமும் 2-3 முறை பயன்படுத்தவும்"
            ],
            precautions: [
                "நீர் மிக சூடாக இல்லை என்பதை உறுதி செய்யவும்",
                "சில மக்களில் ஒவ்வாமை எதிர்வினை ஏற்படலாம்",
                "கேமோமைலுக்கு ஒவ்வாமை இருந்தால் தவிர்க்கவும்",
                "வீக்கம் தொடர்ந்தால் டாக்டரை ஆலோசிக்கவும்"
            ]
        }
    },
    rosacea: {
        en: {
            name: "Rosacea",
            description: "Rosacea causes persistent facial redness, visible blood vessels, and small bumps.",
            remedy: "Green Tea & Cucumber Mask",
            ingredients: [
                "1 brewed green tea bag",
                "1/2 cucumber, blended",
                "1 tablespoon of honey"
            ],
            instructions: [
                "Brew green tea and let cool",
                "Blend cucumber into paste",
                "Mix green tea with cucumber and honey",
                "Apply to face for 15 minutes",
                "Rinse with cool water"
            ],
            precautions: [
                "Use cool or room temperature water",
                "Avoid hot water and extreme temperatures",
                "Test ingredients for allergies",
                "Avoid spicy foods and alcohol"
            ]
        },
        ta: {
            name: "ரோசாசியா",
            description: "ரோசாசியா நிரந்தர முக சிவப்பு, காணக்கூடிய இரத்த நாளங்கள் மற்றும் சிறிய கூட்டங்களை ஏற்படுத்துகிறது.",
            remedy: "பச்சை தேய் & வெள்ளரி முகமூடி",
            ingredients: [
                "1 கொதிக்க வைக்கப்பட்ட பச்சை தேய் பை",
                "1/2 வெள்ளரி, கலக்கப்பட்ட",
                "1 கட்டளை தேன்"
            ],
            instructions: [
                "பச்சை தேயை கொதிக்க வைத்து ஠ান்டா செய்யவும்",
                "வெள்ளரியை பேஸ்ட்டாக கலக்கவும்",
                "பச்சை தேயை வெள்ளரி மற்றும் தேனுடன் கலக்கவும்",
                "15 நிமிடங்களுக்கு முகத்தில் பயன்படுத்தவும்",
                "குளிர்ந்த நீரால் கழுவவும்"
            ],
            precautions: [
                "குளிர்ந்த அல்லது அறை வெப்பநிலை நீர் பயன்படுத்தவும்",
                "சூடான நீர் மற்றும் உச்ச வெப்பநிலை தவிர்க்கவும்",
                "ஒவ்வாமை பொருட்களை சோதிக்கவும்",
                "மசாலா உணவுகள் மற்றும் ஆல்கஹால் தவிர்க்கவும்"
            ]
        }
    },
    vitiligo: {
        en: {
            name: "Vitiligo",
            description: "Vitiligo is a condition causing loss of skin pigmentation leading to white patches.",
            remedy: "Ginger & Black Cumin Oil Massage",
            ingredients: [
                "1 tablespoon of ginger paste",
                "2 tablespoons of black cumin oil",
                "Rose water (few drops)"
            ],
            instructions: [
                "Mix ginger paste with black cumin oil",
                "Add a few drops of rose water",
                "Massage gently on affected areas",
                "Leave for 30 minutes",
                "Rinse with lukewarm water"
            ],
            precautions: [
                "May cause burning sensation initially",
                "Test on small area first",
                "Seek dermatologist for medical treatment",
                "Can take months to show results"
            ]
        },
        ta: {
            name: "வெள்ளை தேமல்",
            description: "வெள்ளை தேமல் தோல் பிगமெंटेशन இழப்பை ஏற்படுத்துகிறது வெள்ளை புள்ளிகள் வரை.",
            remedy: "இஞ்சி & கருப்பு சீரகம் எண்ணெய் மசாஜ்",
            ingredients: [
                "1 கட்டளை இஞ்சி பேஸ்ட்",
                "2 கட்டளைகள் கருப்பு சீரகம் எண்ணெய்",
                "ரோஜா நீர் (சில சொட்டுகள்)"
            ],
            instructions: [
                "இஞ்சி பேஸ்ட்டை கருப்பு சீரகம் எண்ணெய்க்கு கலக்கவும்",
                "ரோஜா நீரின் சில சொட்டுகள் சேர்க்கவும்",
                "பாதிக்கப்பட்ட பகுதிகளில் மெல்லிய மசாஜ் செய்யவும்",
                "30 நிமிடங்களுக்கு விட்டு விடவும்",
                "வெதுவெதுப்பான நீரால் கழுவவும்"
            ],
            precautions: [
                "ஆரம்பத்தில் எரிச்சல் உணர்வு ஏற்படலாம்",
                "முதலில் சிறிய பகுதিতে சோதிக்கவும்",
                "மருத்துவ சிகிச்சைக்கு தோல் நிபுணரை பார்க்கவும்",
                "பலன் முடிவு காட்ட மாதங்கள் ஆகலாம்"
            ]
        }
    },
    fungal_infection: {
        en: {
            name: "Fungal Infection",
            description: "Fungal infections cause itching, burning, red rashes, and scaling.",
            remedy: "Apple Cider Vinegar & Tea Tree Oil",
            ingredients: [
                "2 tablespoons of apple cider vinegar",
                "3-4 drops of tea tree oil",
                "Water"
            ],
            instructions: [
                "Mix apple cider vinegar with equal parts water",
                "Add tea tree oil drops",
                "Apply to affected area twice daily",
                "Leave for 10-15 minutes before rinsing",
                "Keep area clean and dry"
            ],
            precautions: [
                "Do not apply on broken skin",
                "May cause stinging sensation",
                "Test on small area first",
                "Consult doctor if infection spreads"
            ]
        },
        ta: {
            name: "பூஞ்சை தொற்று",
            description: "பூஞ்சை தொற்று சிரிப்பு, எரிச்சல், சிவப்பு தகர மற்றும் அளைப்பை ஏற்படுத்துகிறது.",
            remedy: "ஆப்பிள் சைடர் வினிகர் & தேயிலை மரம் எண்ணெய்",
            ingredients: [
                "2 கட்டளைகள் ஆப்பிள் சைடர் வினிகர்",
                "3-4 சொட்டுகள் தேயிலை மரம் எண்ணெய்",
                "நீர்"
            ],
            instructions: [
                "ஆப்பிள் சைடர் வினிகரை சம பகுதி நீருடன் கலக்கவும்",
                "தேயிலை மரம் எண்ணெய் சொட்டுகள் சேர்க்கவும்",
                "தினமும் இரண்டு முறை பாதிக்கப்பட்ட பகுதிக்கு பயன்படுத்தவும்",
                "கழுவுவதற்கு முன் 10-15 நிமிடங்கள் விட்டு விடவும்",
                "பகுதி சுத்தம் மற்றும் உலர்ந்து வைக்கவும்"
            ],
            precautions: [
                "உடைந்த தோலில் பயன்படுத்த வேண்டாம்",
                "கடி உணர்வு ஏற்படலாம்",
                "முதலில் சிறிய பகுதிতে சோதிக்கவும்",
                "தொற்று பரவினால் டாக்டரை ஆலோசிக்கவும்"
            ]
        }
    },
    urticaria: {
        en: {
            name: "Urticaria (Hives)",
            description: "Urticaria causes sudden appearance of red, itchy welts on the skin.",
            remedy: "Baking Soda & Oatmeal Paste",
            ingredients: [
                "3 tablespoons of baking soda",
                "2 tablespoons of ground oatmeal",
                "Water to make paste"
            ],
            instructions: [
                "Mix baking soda and ground oatmeal",
                "Add water gradually to form paste",
                "Apply directly to itchy areas",
                "Leave for 10-15 minutes",
                "Rinse with lukewarm water"
            ],
            precautions: [
                "Do not scratch affected areas",
                "Avoid hot water",
                "Wear loose clothing",
                "Seek medical help if symptoms persist"
            ]
        },
        ta: {
            name: "வீக்கமான புள்ளிகள்",
            description: "வீக்கமான புள்ளிகள் கணைய தோல்பર சிவப்பு, சிரிப்பு வீக்கங்கள் திடீரே தோன்றுவதை ஏற்படுத்துகிறது.",
            remedy: "பேக்கிங் சோடா & ஓட்ஸ் பேஸ்ட்",
            ingredients: [
                "3 கட்டளைகள் பேக்கிங் சோடா",
                "2 கட்டளைகள் அரைக்கப்பட்ட ஓட்ஸ்",
                "பேஸ்ட் செய்ய நீர்"
            ],
            instructions: [
                "பேக்கிங் சோடா மற்றும் அரைக்கப்பட்ட ஓட்ஸ் கலக்கவும்",
                "பேஸ்ட் உருவாக்க தயாரமாக நீர் சேர்க்கவும்",
                "சிரிப்பு பகுதிகளில் நேரடியாக பயன்படுத்தவும்",
                "10-15 நிமிடங்களுக்கு விட்டு விடவும்",
                "வெதுவெதுப்பான நீரால் கழுவவும்"
            ],
            precautions: [
                "பாதிக்கப்பட்ட பகுதிகளை சொரிந்து விடாதீர்கள்",
                "சூடான நீர் தவிர்க்கவும்",
                "தளர்வான ஆடைகள் அணியவும்",
                "அறிகுறிகள் தொடர்ந்தால் மருத்துவ உதவி பெறவும்"
            ]
        }
    },
    warts: {
        en: {
            name: "Warts",
            description: "Warts are small, raised bumps caused by viral infection, usually on hands and feet.",
            remedy: "Apple Cider Vinegar Soak",
            ingredients: [
                "Apple cider vinegar",
                "Warm water",
                "Cotton ball or cloth"
            ],
            instructions: [
                "Soak affected area in warm water for 5 minutes",
                "Dry the area completely",
                "Soak cotton ball in apple cider vinegar",
                "Apply to wart and cover with bandage",
                "Repeat daily for 2-3 weeks"
            ],
            precautions: [
                "Avoid contact with unaffected skin",
                "May cause temporary discoloration",
                "Do not apply on face",
                "See doctor if wart doesn't improve"
            ]
        },
        ta: {
            name: "மருக்கள்",
            description: "மருக்கள் ஒரு வைரல் தொற்றால் ஏற்படும் சிறிய, உயர்ந்த கூட்டங்கள், பொதுவாக கைகள் மற்றும் பாதங்களில்.",
            remedy: "ஆப்பிள் சைடர் வினிகர் ஊற",
            ingredients: [
                "ஆப்பிள் சைடர் வினிகர்",
                "சூடான நீர்",
                "பருத்தி பந்து அல்லது துணி"
            ],
            instructions: [
                "பாதிக்கப்பட்ட பகுதி சூடான நீரில் 5 நிமிடங்களுக்கு ஊற வைக்கவும்",
                "பகுதியை முற்றிலும் உலர்த்தவும்",
                "பருத்தி பந்தை ஆப்பிள் சைடர் வினிகரில் ஊற வைக்கவும்",
                "மருவிற்கு பயன்படுத்தி பேண்டேஜ் மூடவும்",
                "2-3 வாரங்களுக்கு தினமும் மீண்டும் செய்யவும்"
            ],
            precautions: [
                "பாதிக்கப்படாத தோலுடன் தொடர்பு தவிர்க்கவும்",
                "தற்காலிக நிறமாற்ற ஏற்படலாம்",
                "முகத்தில் பயன்படுத்த வேண்டாம்",
                "மருவு மேம்பாட்டுத் தெரியவில்லை என்றால் டாக்டரைப் பார்க்கவும்"
            ]
        }
    }
};

function getRemedy(issueKey) {
    return remediesDatabase[issueKey] || null;
}

function getAllIssues() {
    return Object.keys(remediesDatabase);
}
