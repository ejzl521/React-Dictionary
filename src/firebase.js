//firebase.js
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDJPzzrqfsUtxb0pLo1uB4s312AnSD_lis",
    authDomain: "react-dict-d8f18.firebaseapp.com",
    projectId: "react-dict-d8f18",
    storageBucket: "react-dict-d8f18.appspot.com",
    messagingSenderId: "7700040900",
    appId: "1:7700040900:web:55e7c0fb6c17dff4864d91",
    measurementId: "G-FQMHB4NVXE"
  };

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };