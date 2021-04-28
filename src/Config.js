import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCLuVzPR9-XVbcmND9X0kD35dscbOU30Lg",
    authDomain: "vobox-es.firebaseapp.com",
    projectId: "vobox-es",
    storageBucket: "vobox-es.appspot.com",
    messagingSenderId: "949773828107",
    appId: "1:949773828107:web:bc97d3c106ab6984c6070e"
};

const connectFirebase = Firebase.initializeApp(firebaseConfig);

export const Config = {
    connectFirebase
}