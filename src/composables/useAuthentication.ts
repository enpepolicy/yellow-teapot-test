import { ref } from 'vue'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getAuth,
  onAuthStateChanged
} from 'firebase/auth'

import { notifyError } from '@/composables/useNotification'

function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

const isLoggedIn = ref(false)

function initializeFirebaseAuth() {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log(user)
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
}

function signInUser() {
  const provider = new GoogleAuthProvider()
  return signInWithPopup(getAuth(), provider).catch((error) => {
    notifyError(error?.message || 'There was an Error')
  })
}

async function signOutUser() {
  const auth = getAuth()
  return await signOut(auth)
}

export {
  initializeFirebaseAuth,
  signInUser,
  signOutUser,
  isLoggedIn,
  getCurrentUser
}
