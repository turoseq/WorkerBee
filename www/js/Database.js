import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import {getFirestore, collection, addDoc, getDocs, where, query} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

var firebaseConfig = {
    apiKey: "AIzaSyDFh5Tm9oXp8cJoqeg8TWUsBJagxN5IkgU",
    authDomain: "workerbee-803c9.firebaseapp.com",
    databaseURL: "https://workerbee-803c9-default-rtdb.firebaseio.com",
    projectId: "workerbee-803c9",
    storageBucket: "workerbee-803c9.appspot.com",
    messagingSenderId: "1026662715736",
    appId: "1:1026662715736:web:0fcb107e9895bb61b8d52d",
    measurementId: "G-HZMJ2ZC29H"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();

  async function read() {
    try{
      const q = query(collection(db, "results"));
      const querySnapshot = await getDocs(q);
      const results = [];
      querySnapshot.forEach((doc) => results.push(doc.data()));
      return results;
    } catch (e)
    {
      console.error("Error fetching: ", e);
    }
  }

  async function save(name, points) {
    try{
      const docRef = await addDoc(collection(db, "results"), {
        Name: name,
        Points: points
      });
      console.log("name saved: " + name)
      console.log("Document written in ID: ", docRef.id);
    }catch (e)
    {
      console.error("Error saving", e);
    }
  }



window.FirebaseSave = save;
window.FirebaseRead = read;