import { EmailAuthCredential } from 'firebase/auth/web-extension'

export let user = $state({
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
})
// use this to create a plan object thingy

// export let cart = $state(
//   (plan = [
//     {
//       uni: '',
//       name: '',
//       cost: '',
//       location: '',
//       minors: [],
//       prerequisites: '',
//     },
//   ])
// )
