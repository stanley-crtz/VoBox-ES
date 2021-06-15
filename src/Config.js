import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBgjdc1oU50kDPM_NDASjZ3a2h3yfImuMk",
    authDomain: "svoes-ba458.firebaseapp.com",
    databaseURL: "https://svoes-ba458-default-rtdb.firebaseio.com",
    projectId: "svoes-ba458",
    storageBucket: "svoes-ba458.appspot.com",
    messagingSenderId: "712285857396",
    appId: "1:712285857396:web:a54a2148b4ec068a239321"
  }

const connectFirebase = Firebase.initializeApp(firebaseConfig);

export const Config = {
    connectFirebase
}
