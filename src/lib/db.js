// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBsNd9QV1labAC-Y14K-dPTdirDeGrCcWc',
  authDomain: 'universe-dd379.firebaseapp.com',
  projectId: 'universe-dd379',
  storageBucket: 'universe-dd379.firebasestorage.app',
  messagingSenderId: '701935632825',
  appId: '1:701935632825:web:76f7b267906bd6fad87668',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// initialise cloud firebase and get a refrence to the surver
const db = getFirestore(app)

// initialize firebase authenticationand get a refrence to the service
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

// Saves a person object to the database.

// export async function addClassroom(classroom) {
//   const personDoc = await addDoc(collection(db, 'classrooms'), classroom)
// }

// // Gets all the classrooms from the database.
// export async function getClassrooms() {
//   let classroomDocs = await getDocs(collection(db, 'classrooms'))

//   let classrooms = []

//   classroomDocs.forEach((classroomDoc) => {
//     classrooms = [...classrooms, classroomDoc.data()]
//   })
//   return classrooms
// }

// Saves a person object to the database.

export async function addplan(plan) {
  const personDoc = await addDoc(collection(db, 'plans'), plan)
}

// Gets all the plans from the database.
export async function getplans() {
  let planDocs = await getDocs(collection(db, 'plans'))

  let plans = []

  planDocs.forEach((planDoc) => {
    plans = [...plans, planDoc.data()]
  })
  return plans
}
// Signs in a user with Google authentication.
export async function login() {
  const result = await signInWithPopup(auth, provider)
  console.log('User signed in:', result.user)
}
