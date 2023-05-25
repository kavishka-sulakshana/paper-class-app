// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDUoMCzyNp4PzdJ_QpdTNlr7-GqTdzoymY",
    authDomain: "paper-class.firebaseapp.com",
    projectId: "paper-class",
    storageBucket: "paper-class.appspot.com",
    messagingSenderId: "386960413885",
    appId: "1:386960413885:web:210f18741195090f9093d4",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
