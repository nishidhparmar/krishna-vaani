import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            heroSection: {
                askWithFaith: "(Ask with faith)",
                title: "Hear Gita-guided answers like Krishna would counsel.",
                description:
                    "Krishna Vaani is your gentle daily companion for your family’s questions — scripture-aligned, child-friendly, and multilingual.",
                button: "Experience Krishna",
            },
            queSection: {
                askWithFaith: "(Ask with faith)",
                title: "Ask from the heart. Receive counsel rooted in the Gita.",
                questions: {
                    q1: "Krishna, how can I find true happiness?",
                    q2: "Krishna, how should I deal with expectations from my work?",
                    q3: "Krishna, why do I feel hurt when others don’t respect me?",
                },
            },
            buildingInPublicSection: {
                title: "Building in public - watch this week’s demo clip and see what’s new.",
                subtitle: "New families join every week.",
                button: "Get Early Invite",
            },
            whatYouGetSection: {
                title: "What you get",
                button: "Get Early Invite",
                cards: {
                    card1: {
                        title: "Daily Wisdom",
                        subtitle: "Receive Gita-inspired insights every day.",
                    },
                    card2: {
                        title: "Guided Conversations",
                        subtitle: "Engage in gentle, scripture-aligned talks.",
                    },
                    card3: {
                        title: "Family Connection",
                        subtitle: "Bring spiritual clarity to your home.",
                    },
                    card4: {
                        title: "Multilingual Support",
                        subtitle: "Experience Krishna Vaani in your own language.",
                    },
                },
            },
            stepByStepSection: {
                title: "Respectful, scripture-aligned guidance - step by step",
                advisory: "Advisory note: Advisory only, not a substitute for your deity, guru, or spiritual authority",
                steps: {
                    step1: {
                        title: "Understand",
                        description: "Understand your question in plain language.",
                    },
                    step2: {
                        title: "Research",
                        description: "Explore scripture and scholarly insights.",
                    },
                    step3: {
                        title: "Reflect",
                        description: "Interpret with care and wisdom.",
                    },
                    step4: {
                        title: "Guide",
                        description: "Offer respectful, step-by-step guidance.",
                    },
                },
            },
            guideSection: {
                title: "Let Krishna’s counsel guide your day - one loving answer at a time.",
                button: "Get Early Invite",
            },
            faqSection: {
                title: "Frequently Asked Questions",
                faqs: {
                    faq1: {
                        question: 'Does it answer "like Krishna would" literally?',
                        answer: 'Krishna Vaani offers Krishna-inspired counsel grounded in the Bhagavad-Gita—no new revelation.',
                    },
                    faq2: {
                        question: 'Is this a replacement for the deity or my guru?',
                        answer: 'No. It supports devotion and learning. Your deity, guru, and community remain central.',
                    },
                    faq3: {
                        question: 'Will there be hardware?',
                        answer: 'Later, invite-only. Today, enjoy a beautiful mobile and voice experience.',
                    },
                    faq4: {
                        question: 'Privacy and family safety?',
                        answer: 'Family Mode is on by default. There are no ads. You control what is saved.',
                    },
                },
            },
            greetingSection: {
                jaiShreeKrishna: "Jai Shree Krishna",
            },
        },
    },
    hi: {
        translation: {
            heroSection: {
                askWithFaith: "(श्रद्धा से पूछें)",
                title: "कृष्ण की तरह गीता-निर्देशित उत्तर सुनें।",
                description:
                    "कृष्ण वाणी आपके परिवार के प्रश्नों के लिए एक कोमल दैनिक साथी है — शास्त्र-सम्मत, बाल-मैत्रीपूर्ण और बहुभाषी।",
                button: "कृष्ण का अनुभव करें",
            },
            queSection: {
                askWithFaith: "(श्रद्धा से पूछें)",
                title: "हृदय से पूछें। गीता में निहित उपदेश प्राप्त करें।",
                questions: {
                    q1: "कृष्ण, मैं सच्चा सुख कैसे पा सकता हूँ?",
                    q2: "कृष्ण, मुझे अपने काम से जुड़ी अपेक्षाओं का सामना कैसे करना चाहिए?",
                    q3: "कृष्ण, जब दूसरे मेरा सम्मान नहीं करते तो मुझे दुख क्यों होता है?",
                },
            },
            buildingInPublicSection: {
                title: "सार्वजनिक रूप से निर्माण - इस सप्ताह का डेमो क्लिप देखें और जानें क्या नया है।",
                subtitle: "हर सप्ताह नए परिवार जुड़ते हैं।",
                button: "जल्दी निमंत्रण प्राप्त करें",
            },
            whatYouGetSection: {
                title: "आपको क्या मिलेगा",
                button: "जल्दी निमंत्रण प्राप्त करें",
                cards: {
                    card1: {
                        title: "दैनिक ज्ञान",
                        subtitle: "हर दिन गीता से प्रेरित अंतर्दृष्टि प्राप्त करें।",
                    },
                    card2: {
                        title: "मार्गदर्शित वार्तालाप",
                        subtitle: "शास्त्र-सम्मत और सौम्य संवादों में शामिल हों।",
                    },
                    card3: {
                        title: "परिवारिक जुड़ाव",
                        subtitle: "अपने घर में आध्यात्मिक स्पष्टता लाएं।",
                    },
                    card4: {
                        title: "बहुभाषी समर्थन",
                        subtitle: "अपनी भाषा में कृष्ण वाणी का अनुभव करें।",
                    },
                },
            },
            stepByStepSection: {
                title: "सौम्य, शास्त्र-सम्मत मार्गदर्शन - चरण दर चरण",
                advisory: "सलाह नोट: केवल सलाह है, आपके देवता, गुरु या आध्यात्मिक प्राधिकरण का विकल्प नहीं।",
                steps: {
                    step1: {
                        title: "समझें",
                        description: "अपने प्रश्न को सरल भाषा में समझें।",
                    },
                    step2: {
                        title: "अनुसंधान करें",
                        description: "शास्त्र और विद्वानों की अंतर्दृष्टि का पता लगाएं।",
                    },
                    step3: {
                        title: "चिंतन करें",
                        description: "सावधानी और बुद्धिमत्ता के साथ व्याख्या करें।",
                    },
                    step4: {
                        title: "मार्गदर्शन दें",
                        description: "सम्मानपूर्वक, चरण-दर-चरण मार्गदर्शन प्रदान करें।",
                    },
                },
            },
            guideSection: {
                title: "कृष्ण की उपदेश आपके दिन को मार्गदर्शित करें - एक स्नेहपूर्ण उत्तर एक समय में।",
                button: "जल्दी निमंत्रण प्राप्त करें",
            },
            faqSection: {
                title: "अक्सर पूछे जाने वाले प्रश्न",
                faqs: {
                    faq1: {
                        question: 'क्या यह "कृष्ण की तरह" वास्तव में उत्तर देता है?',
                        answer: 'कृष्ण वाणी भगवद-गीता में आधारित कृष्ण-प्रेरित मार्गदर्शन प्रदान करता है — कोई नई प्रकटि नहीं।',
                    },
                    faq2: {
                        question: 'क्या यह मेरे देवता या गुरु का विकल्प है?',
                        answer: 'नहीं। यह भक्ति और सीख का समर्थन करता है। आपका देवता, गुरु और समुदाय केंद्रीय बने रहते हैं।',
                    },
                    faq3: {
                        question: 'क्या हार्डवेयर होगा?',
                        answer: 'बाद में, केवल निमंत्रण पर। आज, एक सुंदर मोबाइल और वॉइस अनुभव का आनंद लें।',
                    },
                    faq4: {
                        question: 'गोपनीयता और परिवार की सुरक्षा?',
                        answer: 'डिफ़ॉल्ट रूप से फैमिली मोड चालू है। कोई विज्ञापन नहीं। आप नियंत्रित करते हैं कि क्या सहेजा जाए।',
                    },
                },
            },
            greetingSection: {
                jaiShreeKrishna: "जय श्री कृष्ण",
            },
        },
    },
};




i18n
    .use(LanguageDetector) // detect user language automatically
    .use(initReactI18next) // bind i18n to React
    .init({
        resources,
        interpolation: {
            escapeValue: false, // React already prevents XSS
        },
        detection: {
            // Optional: customize language detection order
            // order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
            // caches: ["localStorage"], // cache selected language
        },
    });

export default i18n;
