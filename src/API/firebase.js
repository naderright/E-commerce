// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain:process.env.NEXT_PUBLIC_authDomain ,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId:process.env.NEXT_PUBLIC_measurementId
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBYng2VtGm5wRMljDPyInwGc0wWrg8py0k",
//   authDomain: "authfirebase-ab2ad.firebaseapp.com",
//   projectId: "authfirebase-ab2ad",
//   storageBucket: "authfirebase-ab2ad.firebasestorage.app",
//   messagingSenderId: "895544155957",
//   appId: "1:895544155957:web:d0ffbc0d016cc28d41f67c",
//   measurementId: "G-K30FGR11LE"
// };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);