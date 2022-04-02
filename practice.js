var firebaseConfig = {
    apiKey: "AIzaSyCfpPNtc-LaXb8Z6dNVZIz0W27GF4NYCOQ",
    authDomain: "class-test-6700b.firebaseapp.com",
    databaseURL: "https://class-test-6700b-default-rtdb.firebaseio.com",
    projectId: "class-test-6700b",
    storageBucket: "class-test-6700b.appspot.com",
    messagingSenderId: "743723949325",
    appId: "1:743723949325:web:597f4dc9e3ae8e1e5c2444"
};


firebase.initializeApp(firebaseConfig);

function adduser() {
    username = document.getElementById("username").value;
    firebase.database().ref("/").child(username).update({
        purpose: "addinguser"
    });
}