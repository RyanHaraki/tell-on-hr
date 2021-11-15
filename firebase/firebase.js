import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(config);
var db = getFirestore();
const issuesCollection = collection(db, "issues");

function addIssue(text) {
  addDoc(issuesCollection, {
    text: text,
    response: "",
    active: true,
  });
}

export { app, db, addIssue };
