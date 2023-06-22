import { auth, googleProvider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider).then(() => {
      window.location.href = "/manager";
    });
  } catch (error) {
    console.log(error);
  }
};
