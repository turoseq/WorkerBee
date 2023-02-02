import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
import {getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";


export function read() {

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
  var app = initializeApp(firebaseConfig);
  var analytics = getAnalytics(app);
  var db = getFirestore(app);

  async function getResults(db) {
    const resultRef = collection(db, 'results');
    const resultsSnapshot = await getDocs(resultRef);
    const result = resultsSnapshot.docs.map(doc => doc.data());
    console.log(result);
    return result;
  }
const dbvalue = getResults(db);
var temp = document.getElementById("xd");
temp.innerHTML = dbvalue;

   
}

