import { db, storage, auth } from "../../config/firebase";
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

const spacesCollection = collection(db, "spaces");

export const createSpace = async (space) => {
    const day = new Date();
    const imagePath = `spaces/${day.getTime() + "-" + space.img.name}`
    const storageRef = ref(storage, imagePath);
    await uploadBytes(storageRef, space.img);
    const url = await getDownloadURL(storageRef);
   
    try{
        console.log(auth.currentUser.uid);
        await addDoc(spacesCollection, {
            owner: auth.currentUser.uid,
            name: space.name,
            description: space.description,
            url: url,
            path: imagePath,
        });
        console.log("Created")
    }
    catch(e){
        console.log(e);
    }
}

