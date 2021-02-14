
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

function addRoom()
		{
			room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

      localStorage.setItem("room_name" , room_name)

      window.location = "kwitter_page_html";
		}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log ("Room Name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code

       function redirectToRoomName(name)
       {
         console.log(name) ;
         localStorage.setItem("room_name" , name)
         window.location = "kwitter_page_html";
       }
       function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
            window.location = "index.html";
        }
        

      });});}
getData();
