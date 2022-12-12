// Import the functions you need from the SDKs you need
"use strict";
import { initializeApp } from "firebase/app";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";

import { isAdmin } from "./addinfo";

const formDivRef = document.querySelector(".formInput");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFJEYkyjLPKiINvDPPHnVXHJT5q1mWo7A",
  authDomain: "urkstrong-5d465.firebaseapp.com",
  databaseURL: "https://urkstrong-5d465-default-rtdb.firebaseio.com",
  projectId: "urkstrong-5d465",
  storageBucket: "urkstrong-5d465.appspot.com",
  messagingSenderId: "422349636540",
  appId: "1:422349636540:web:6e20659c8e292b95a361b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const provider = new GithubAuthProvider();

document.querySelector(".loginJS").addEventListener("click", signIn);
function signIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(token);
      console.log(credential);
      console.log(user.uid);

      if (user.uid === "KcXUsbUEOMMsDuD5LsyEDy2Sdk73") {
        alert("admin hello");
        let isAdmin = true;
        formDivRef.classList.remove("hidden");
        console.log(isAdmin);

        //____________________________________________________________________//

        const form = document.forms.inputJS;

        form.addEventListener("submit", (event) => {
          event.preventDefault();
          if (isAdmin) {
            const indexOblast = event.currentTarget.chooseoblast.selectedIndex;
            console.log(indexOblast);
            let upperBubble = document.getElementById("upperBubble").value;
            let lowerBubble = document.getElementById("lowerBubble").value;
            console.log(upperBubble, lowerBubble);
          } else {
            console.log("not admin");
          }
        });
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
}

async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

async function postData(db) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
