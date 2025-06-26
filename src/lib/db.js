// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDoc, doc, setDoc } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { user, plan } from '$lib/state.svelte.js'

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

// adds degree to firebase
export async function addplan(degree) {
  const planDoc = await addDoc(collection(db, 'plans', user.uid), degree)
}
// removes plan from the cart
export async function removeplan(index) {
  plan.degrees = [...plan.degrees.slice(0, index), ...plan.degrees.slice(index + 1)]
}

export async function saveplan() {
  const userDoc = await setDoc(doc(db, 'plans', user.uid), plan)
}

export async function getplan() {
  // Get the plan document for the given UID
  const planRef = doc(db, 'plans', user.uid)
  const planSnap = await getDoc(planRef)

  if (planSnap.exists()) {
    // Get the plan data
    const planData = planSnap.data()

    // and set the plans state with the data
    plan.uid = planData.uid
    plan.degrees = planData.degrees
    // planData.degrees.forEach((planDoc) => {
    //   plan.degrees = [...plan.degrees, planDoc.data()]
    // })
  } else {
    alert('No saved plan!')
  }
}
// Signs in a user with Google authentication.
export async function login() {
  const result = await signInWithPopup(auth, provider)

  user.uid = result.user.uid
  user.email = result.user.email
  user.displayName = result.user.displayName
  user.photoURL = result.user.photoURL

  // Save the  state to local storage as well so that it persists across page reloads
  let data = JSON.stringify(user)
  localStorage.setItem('user', data)

  // Set the bests state with the logged in user's UID
  getplan()
}

export async function logout() {
  // Clear the user state
  user.uid = null
  user.email = null
  user.displayName = null
  user.photoURL = null

  // clear the plan state
  plan.uid = null
  plan.degrees = [
    {
      uid: '',
      degrees: [],
    },
  ]

  // Clear local storage
  localStorage.removeItem('user')

  // Sign out from Firebase
  await signOut(auth)
}
