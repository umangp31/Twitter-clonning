import fs from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBioDIGR2vhDDOcWly0cUTDKhwplEmf4-A",
    authDomain: "twitter-clone-cad28.firebaseapp.com",
    projectId: "twitter-clone-cad28",
    storageBucket: "twitter-clone-cad28.appspot.com",
    messagingSenderId: "279564142164",
    appId: "1:279564142164:web:57426f17c8e08939618fc1"
};
const firebaseapp = fs.initializeApp(firebaseConfig);
const auth = firebaseapp.auth();
const storageBucket = fs.storage();
var Googleprovider = new fs.auth.GoogleAuthProvider();
export { Googleprovider,storageBucket };
export default auth;
