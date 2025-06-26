import { EmailAuthCredential } from 'firebase/auth/web-extension'
// creates object called user so that the uid can be used to save data to specific people
export let user = $state({
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
})

// use this to create a plan object thingy THIS DOSENT SEEM RIGHT
export let plan = $state({
  uid: '',
  degrees: [],
})
