// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      login: {
        title: "Login",
        emailLabel: "Email Address",
        emailPlaceholder: "email@domain.com",
        passwordLabel: "Password",
        passwordPlaceholder: "Password",
        loginButton: "Login",
        loggingIn: "Logging in...",
        noAccount: "Don't have an account?",
        register: "Register",
        backHome: "Back to Home",
        unexpectedResponse: "Unexpected response from server.",
        loginFailed: "Invalid email or password"
      },
      register: {
        title: "Register",
        subtitle: "Create an account for Dishy.",
        firstName: "First Name",
        firstNamePlaceholder: "Firstname",
        lastName: "Last Name",
        lastNamePlaceholder: "Lastname",
        username: "Username",
        usernamePlaceholder: "Username",
        email: "Email Address",
        emailPlaceholder: "email@domain.com",
        password: "Password",
        passwordPlaceholder: "Password",
        registerButton: "Register",
        alreadyHaveAccount: "Already have an account?",
        login: "Login",
        backHome: "Back to Home",
        registrationFailed: "Registration failed"
      },
      auth: {
        title: "Ask for Recipes at Dishy!!",
        description: "You are confused about what to cook? No problem! Dishy is here to help. Just type in the ingredients you have, and Dishy will help you create a recipe easily.",
        whatCanYouDoTitle: "What can you do here?",
        whatCanYouDoList1: [
          "Find cooking ideas using the ingredients you already have in your pantry.",
          "Save the cooking ideas you've created."
        ],
        whatCanYouDoList2: [
          "Check out awesome recipes created by AI.",
          "Get new inspiration for your meals."
        ],
        closingText: "So, no more stressing over what to cook! Dishy bro is ready to help you."
      },
      faq: {
        title: "Frequently Asked Questions (FAQ)",
        item1: {
          question: "1. Why Use AI?",
          answer: "Because with AI, CookWizard can provide cooking ideas that match the ingredients you have. No hassle—just type in the ingredients, and voila! You have got a new recipe!"
        },
        item2: {
          question: "2. How Much Does It Cost?",
          answer: "The good news is, you can enjoy CookWizard without spending a single penny! Yup, all the features and goodness of CookWizard are free for you to use."
        },
        item3: {
          question: "3. How Does CookWizard Help Me?",
          answer: "CookWizard will be your best friend in the kitchen! You can find cooking ideas, save recipes, and check out awesome recipes created by AI. Everything becomes easier with CookWizard!"
        },
        item4: {
          question: "4. So, What’s the Difference Compared to Chatting on ChatGPT or Other AI?",
          answer: "The difference is, with CookWizard, you can do more than just ask for suggestions about the ingredients you have. You can save your favorite recipes, check out recipes from other users, and get new inspiration every day! So, besides making cooking more fun, you can also get awesome recipes from our community!"
        }
      },
      footer: {
        left: {
          title: "DISHY",
          tagline: "Your Personal Cooking Master"
        },
        center: {
          title: "Explore Us",
          links: {
            about: "About",
            privacy: "Privacy Policy",
            terms: "Terms & Conditions"
          }
        },
        right: {
          title: "Connect Us",
          email: "support@dishy.com",
          phone: "+91 1234567890",
          address: "Chennai, India"
        },
        copyright: "© 2025 All rights reserved. Dishy"
      // Add more keys for other parts of your website if needed.
    },
    header: {
        title: "Dishy",
        nav: {
          home: "Home",
          login: "Login",
          register: "Register"
        }
      },
      hero: {
        title: "Your Personal Cooking Master",
        question1: "Are you hungry? Want to cook but feeling confused?",
        question2: "What do you want to cook with the limited ingredients you have?",
        question3: "You want to cook, but...",
        list: [
          "Limited Ingredients",
          "Concerns About Dish Variations",
          "Difficulty Choosing a Menu",
          "Ran Out of Ideas for What to Cook"
        ],
        createRecipeButton: "Create Recipe"
      },
      results: {
        title: "Search Results",
        filterLabel: "Filter:",
        filterOptions: {
          all: "All",
          veg: "Veg",
          nonVeg: "Non-Veg"
        },
        noResults: "No results found. Try searching again.",
        viewRecipe: "View Recipe",
        loadMore: "Load More",
        endMessage: "🎉 End of results! 🎉"
    },
    
      },
      searchIngredient: {
        title: "Add Ingredients to Find New Recipes",
        ingredientPlaceholder: "Eg. Chicken",
        selectCuisine: "Select Cuisine",
        optionAny: "Any",
        optionIndian: "Indian",
        optionMexican: "Mexican",
        optionChinese: "Chinese",
        optionItalian: "Italian",
        optionJapanese: "Japanese",
        optionFrench: "French",
        optionThai: "Thai",
        optionMiddleEastern: "Middle Eastern",
        optionVietnamese: "Vietnamese",
        optionKorean: "Korean",
        optionBurmese: "Burmese",
        submitButton: "Submit",
        noResults: "No recipes found. Try different ingredients!"
      },
      searchDish: {
        welcome: "Welcome @Username",
        inputPlaceholder: "Search Any Dish e.g., Biryani",
        selectCuisine: "Select Cuisine",
        submitButton: "Submit",
        noResults: "No recipes found. Try a different dish name!"
      },
      testimonials: {
        title: "What our customers think"
        // Note: The testimonial quotes are hard-coded in the component.
      },
      swipeCarousel: {
        altText: "Delicious Food"
      },
      whyCard: {
        title: "Why Dishy",
        card1: {
          title: "Find Ideas Easily",
          description: "No more overthinking! Just type in the ingredients you have, and Dishy will give you cooking ideas that fit perfectly!"
        },
        card2: {
          title: "Awesome Recipes from All over World",
          description: "Want to try unique recipes? Dishy has a collection of awesome recipes created directly by Professionals."
        },
        card3: {
          title: "Save Cooking Ideas",
          description: "You can save all the cooking ideas you’ve created, so you don’t have to rummage through your pantry again."
        },
        card4: {
          title: "Delicious Recipes from All over World",
          description: "From practical recipes to special dishes, Dishy will be your main source of inspiration for your meals!"
        }
      },
      visitDish: {
        loading: "Loading...",
        ingredients: "Ingredients",
        equipment: "Equipment",
        instructions: "Instructions",
        nutrition: "Nutritional Information"
      }
    },
  ta: {
    translation: {
      login: {
        title: "உள்நுழைவு",
        emailLabel: "மின்னஞ்சல் முகவரி",
        emailPlaceholder: "email@domain.com",
        passwordLabel: "கடவுச்சொல்",
        passwordPlaceholder: "கடவுச்சொல்",
        loginButton: "உள்நுழைவு",
        loggingIn: "உள்நுழைகிறது...",
        noAccount: "கணக்கு இல்லை?",
        register: "பதிவு செய்யவும்",
        backHome: "முதல்பக்கத்திற்கு",
        unexpectedResponse: "சர்வரில் இருந்து எதிர்பாராத பதில்.",
        loginFailed: "தவறான மின்னஞ்சல் அல்லது கடவுச்சொல்"
      },
      register: {
        title: "பதிவு",
        subtitle: "Dishy-க்கு ஒரு கணக்கை உருவாக்குங்கள்.",
        firstName: "முதல் பெயர்",
        firstNamePlaceholder: "முதல் பெயர்",
        lastName: "கடைசி பெயர்",
        lastNamePlaceholder: "கடைசி பெயர்",
        username: "பயனர்பெயர்",
        usernamePlaceholder: "பயனர்பெயர்",
        email: "மின்னஞ்சல் முகவரி",
        emailPlaceholder: "email@domain.com",
        password: "கடவுச்சொல்",
        passwordPlaceholder: "கடவுச்சொல்",
        registerButton: "பதிவு",
        alreadyHaveAccount: "ஏற்கனவே கணக்கு உள்ளதா?",
        login: "உள்நுழைக",
        backHome: "முதல்பக்கத்திற்கு"
      },
      auth: {
        title: "Dishy-ல் உணவுக்கான பரிந்துரைகளை கேளுங்கள்!!",
        description: "நீங்கள் என்ன சமைக்க வேண்டும் என்று குழப்பமா? பிரச்சனை இல்லை! Dishy உதவ தயாராக இருக்கிறது. உங்கள் கையிலுள்ள பொருட்களை உள்ளிடுங்கள், Dishy உங்களுக்கு எளிதில் ஒரு சமையல் குறிப்பை உருவாக்க உதவும்.",
        whatCanYouDoTitle: "இங்கு நீங்கள் என்ன செய்ய முடியும்?",
        whatCanYouDoList1: [
          "உங்கள் பாண்ட்ரியில் ஏற்கனவே உள்ள பொருட்களை பயன்படுத்தி சமையல் யோசனைகளை கண்டறியுங்கள்.",
          "நீங்கள் உருவாக்கிய சமையல் யோசனைகளை சேமியுங்கள்."
        ],
        whatCanYouDoList2: [
          "AI உருவாக்கிய அற்புத சமையல் குறிப்புகளைப் பார்க்கவும்.",
          "உங்கள் உணவுக்கு புதிய ஆன்டர்ப்பிரேரணையைப் பெறவும்."
        ],
        closingText: "எனவே, இனி என்ன சமைக்க வேண்டும் என்று கவலைப்பட வேண்டாம்! Dishy நண்பன் உங்களுக்கு உதவ தயாராக இருக்கிறார்."
      },
      faq: {
        title: "அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQ)",
        item1: {
          question: "1. ஏன் AI பயன்படுத்த வேண்டும்?",
          answer: "AI மூலம், CookWizard உங்கள் கையிலுள்ள பொருட்களுக்கு ஏற்ப சமையல் யோசனைகளை வழங்க முடியும். எளிமையானது—உங்கள் பொருட்களை உள்ளிடுங்கள், பிறகு! உங்களுக்கு ஒரு புதிய சமையல் குறிப்பும்!"
        },
        item2: {
          question: "2. இதற்கு எவ்வளவு செலவு?",
          answer: "நல்ல செய்தி என்னவென்றால், CookWizard-ஐ ஒரு பணமும் செலவிடாமல் அனுபவிக்க முடியும்! ஆம், CookWizard-இன் அனைத்து அம்சங்களும் இலவசம்."
        },
        item3: {
          question: "3. CookWizard எனக்கு எப்படி உதவுகிறது?",
          answer: "CookWizard சமையலறையில் உங்கள் சிறந்த நண்பராக இருக்கும்! நீங்கள் சமையல் யோசனைகளை கண்டறிந்து, குறிப்புகளை சேமித்து, AI உருவாக்கிய அற்புத சமையல் குறிப்புகளைப் பார்க்கலாம். CookWizard மூலம் எல்லாம் எளிதாகிவிடும்!"
        },
        item4: {
          question: "4. ChatGPT அல்லது பிற AI உடன் சான்று பேச்சின் வித்தியாசம் என்ன?",
          answer: "வித்தியாசம் என்னவென்றால், CookWizard, உங்கள் கையிலுள்ள பொருட்களை பற்றி யோசனைகள் கேட்குவதற்கு மட்டுமல்ல; நீங்கள் உங்கள் பிடித்த குறிப்புகளை சேமித்து, பிற பயனர்களின் குறிப்புகளைப் பார்க்கலாம், மேலும் தினசரி புதிய ஆன்டர்ப்பிரேரணையைப் பெறலாம்! எனவே, சமையலை ரசிக்க மட்டும் அல்ல, CookWizard-இன் சமூகத்திடமிருந்தும் அற்புத குறிப்புகளைப் பெறலாம்!"
        }
      },
      footer: {
        left: {
          title: "DISHY",
          tagline: "உங்கள் தனிப்பட்ட சமையல் ஆசான்"
        },
        center: {
          title: "எங்களை ஆராய்க",
          links: {
            about: "பற்றி",
            privacy: "தனியுரிமை கொள்கை",
            terms: "விதிமுறைகள் & நிபந்தனைகள்"
          }
        },
        right: {
          title: "தொடர்பு கொள்ளுங்கள்",
          email: "support@dishy.com",
          phone: "+91 1234567890",
          address: "சென்னை, இந்தியா"
        },
        copyright: "© 2025 அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. Dishy"
      // Add more keys for other parts of your website if needed.
    },
    header: {
        title: "Dishy",
        nav: {
          home: "முகப்பு",
          login: "உள்நுழைவு",
          register: "பதிவு"
        }
      },
      hero: {
        title: "உங்கள் தனிப்பட்ட சமையல் ஆசான்",
        question1: "உங்களுக்கு பொறுமையா? சமைக்க விரும்புகிறீர்களா, ஆனால் குழப்பமா?",
        question2: "உங்களிடம் உள்ள குறைந்த பொருட்களால் என்ன சமைக்க விரும்புகிறீர்கள்?",
        question3: "நீங்கள் சமைக்க விரும்புகிறீர்கள், ஆனால்...",
        list: [
          "குறைந்த பொருட்கள்",
          "உணவு வகைகளில் வித்தியாசம் பற்றி கவலை",
          "மெனு தேர்வு செய்வதில் சிரமம்",
          "சமைக்க என்ன செய்வது என எண்ணமுடிவடையவில்லை"
        ],
        createRecipeButton: "சமையல் குறிப்பை உருவாக்கவும்"
      },
      results: {
        title: "தேடல் முடிவுகள்",
        filterLabel: "வடிகட்டி:",
        filterOptions: {
          all: "அனைத்தும்",
          veg: "சைவம்",
          nonVeg: "சைவமற்றது"
        },
        noResults: "முடிவுகள் எதுவும் கிடைக்கவில்லை. மீண்டும் தேட முயற்சிக்கவும்.",
        viewRecipe: "சமையல் குறிப்பை பார்க்க",
        loadMore: "மேலும் ஏற்று",
        endMessage: "🎉 முடிவுகள் முடிந்தது! 🎉"
    },
    searchIngredient: {
        title: "புதிய சமையல் குறிப்புகளை கண்டறிய பொருட்களை சேர்க்கவும்",
        ingredientPlaceholder: "உதாரணம்: கோழி",
        selectCuisine: "சமையல் வகையை தேர்ந்தெடுக்கவும்",
        optionAny: "ஏதேனும்",
        optionIndian: "இந்திய",
        optionMexican: "மெக்ஸிகன்",
        optionChinese: "சீன",
        optionItalian: "இத்தாலிய",
        optionJapanese: "ஜப்பானிய",
        optionFrench: "பிரஞ்சு",
        optionThai: "தாய்",
        optionMiddleEastern: "மத்திய கிழக்கு",
        optionVietnamese: "வியட்நாமிய",
        optionKorean: "கொரிய",
        optionBurmese: "பர்மீஸ்",
        submitButton: "சமர்ப்பிக்கவும்",
        noResults: "எந்த சமையல் குறிப்பும் கிடைக்கவில்லை. வேறு பொருட்களை முயற்சிக்கவும்!"
      },
      searchDish: {
        welcome: "வரவேற்பு @Username",
        inputPlaceholder: "எந்தவொரு உணவையும் தேடவும், உதாரணம்: பிரியாணி",
        selectCuisine: "சமையல் வகையை தேர்ந்தெடுக்கவும்",
        submitButton: "சமர்ப்பிக்கவும்",
        noResults: "எந்த சமையல் குறிப்பும் கிடைக்கவில்லை. வேறு உணவுப் பெயரை முயற்சிக்கவும்!"
      },
      testimonials: {
        title: "எங்கள் வாடிக்கையாளர்கள் என்ன நினைக்கின்றனர்"
      },
      swipeCarousel: {
        altText: "சுவையான உணவு"
      },
      whyCard: {
        title: "ஏன் Dishy?",
        card1: {
          title: "எளிதாக யோசனைகளை கண்டறியுங்கள்",
          description: "அதிகமாக சிந்திக்க வேண்டாம்! உங்களிடம் உள்ள பொருட்களை உள்ளிடுங்கள், Dishy உங்களுக்கு பொருத்தமான சமையல் யோசனைகளை வழங்கும்!"
        },
        card2: {
          title: "உலகம் முழுவதும் இருந்து அற்புத சமையல் குறிப்புகள்",
          description: "தனித்துவமான சமையல் குறிப்புகளை முயற்சிக்க விரும்புகிறீர்களா? Dishy நேரடியாக வல்லுநர்களால் உருவாக்கப்பட்ட அற்புத சமையல் குறிப்புகளின் தொகுதியைக் கொண்டுள்ளது."
        },
        card3: {
          title: "சமையல் யோசனைகளை சேமியுங்கள்",
          description: "நீங்கள் உருவாக்கிய அனைத்து சமையல் யோசனைகளையும் சேமிக்க முடியும், அதனால் மீண்டும் உங்கள் பொருட்களை தேட வேண்டியதில்லை."
        },
        card4: {
          title: "உலகம் முழுவதும் இருந்து சுவையான சமையல் குறிப்புகள்",
          description: "நடவடிக்கையான சமையல் குறிப்புகளிலிருந்து சிறப்பு உணவுகள் வரை, Dishy உங்கள் உணவுக்கு முக்கியமான ஆன்டர்ப்பிரேரணை ஆதாரம் ஆகும்!"
        }
    },
    visitDish: {
        loading: "ஏற்றுகிறது...",
        ingredients: "பொருட்கள்",
        equipment: "சாதனங்கள்",
        instructions: "வழிமுறைகள்",
        nutrition: "போஷண தகவல்"
      }
    

    

}
  }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",          // set default language
    fallbackLng: "en",  // fallback language if key is missing in selected language
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
  });

export default i18n;