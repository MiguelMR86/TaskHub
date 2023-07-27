import { auth, googleProvider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";

// Function to sign in with google
// * If user is correctly loged in, it will redirect to manager page
export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider).then(() => {
      window.location.href = "/manager";
    });
  } catch (error) {
    console.log(error);
  }
};

// Function to check if user is loged in
// * If user is loged in, it will reload the user data to get the latest data
// * If user is not loged in, it will redirect to login page
export const isLogedIn = async () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      return
    }
    else {
      window.location.href = "/"
    }
  })
}

// Function to sign out
// * It will sign out the user and redirect to login page
export const signOut = () => {
  auth.signOut()
  window.location.href = "/"
}