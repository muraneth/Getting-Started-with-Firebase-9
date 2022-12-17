import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {

    authDomain: "test-b8d18.firebaseapp.com",
    databaseURL: "https://test-b8d18-default-rtdb.firebaseio.com",
    projectId: "test-b8d18",
    storageBucket: "test-b8d18.appspot.com",
    messagingSenderId: "399622639678",
    appId: "1:399622639678:web:2eaa3e78adbf7d4ee2016f",
    measurementId: "G-FCW38NXT7X"
}

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'books')

// get collection data
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log("aa");
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })