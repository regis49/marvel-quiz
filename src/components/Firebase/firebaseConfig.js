import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const config = {
  apiKey: "AIzaSyBHaoUqHRLvDTVygWnXG1_ElGymaBA4kIE",

  authDomain: "quiz-marvel-55457.firebaseapp.com",

  projectId: "quiz-marvel-55457",

  storageBucket: "quiz-marvel-55457.appspot.com",

  messagingSenderId: "342422396007",

  appId: "1:342422396007:web:bd191a409b1d53ccbe88c2",
};

const app = initializeApp(config);
export const auth = getAuth(app);
