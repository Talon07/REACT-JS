import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARebQXEHyvJxbaKyWyF3gwpE41UeXhlCw",
  authDomain: "pixel-react2023.firebaseapp.com",
  projectId: "pixel-react2023",
  storageBucket: "pixel-react2023.appspot.com",
  messagingSenderId: "162168818546",
  appId: "1:162168818546:web:f8ee64fcaca2bb13b92beb",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
