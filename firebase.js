// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnybV84DeyzU5f-8Yf5HYqpVR4jiDeJWo",
  authDomain: "aqms-website-a64fd.firebaseapp.com",
  databaseURL: "https://aqms-website-a64fd-default-rtdb.firebaseio.com", // Add this if you're using Realtime Database
  projectId: "aqms-website-a64fd",
  storageBucket: "aqms-website-a64fd.appspot.com",
  messagingSenderId: "195191603638",
  appId: "1:195191603638:web:eea4a8005841ef9377c117",
  measurementId: "G-4T2H5VFYR4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Initialize Realtime Database
const database = getDatabase(app);

// Export Firebase modules
export { app, analytics, database };
