
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCLZyvoeTub6DhqEaARWYexDBSb7CYzv9s",
    authDomain: "kwitter-7d929.firebaseapp.com",
    projectId: "kwitter-7d929",
    storageBucket: "kwitter-7d929.appspot.com",
    messagingSenderId: "126426572166",
    appId: "1:126426572166:web:b6229b8f6b1c4182047807",
    measurementId: "G-0W2YLQL9SP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  
  