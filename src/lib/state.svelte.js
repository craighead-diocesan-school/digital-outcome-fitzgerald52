import { EmailAuthCredential } from 'firebase/auth/web-extension'

export let user = $state({
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
})
