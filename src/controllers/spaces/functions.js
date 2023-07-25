import { db, storage, auth } from "../../config/firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  or,
  orderBy,
  where,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const spacesCollection = collection(db, "spaces");

export const createSpace = async (space) => {
  const day = new Date();
  const imagePath = `spaces/${day.getTime() + "-" + space.img.name}`;
  const storageRef = ref(storage, imagePath);
  await uploadBytes(storageRef, space.img);
  const url = await getDownloadURL(storageRef);

  try {
    await addDoc(spacesCollection, {
      owner: auth?.currentUser?.uid,
      name: space.name,
      description: space.description,
      date: day.getTime(),
      url: url,
      path: imagePath,
    })
      .then(() => {
        getUserSpaces()
          .then((spaces) => {
            const newSpace = spaces.find((spc) => spc.name === space.name);
            window.location.href = `/manager/space/${newSpace.id}`;
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  } catch (e) {
    console.log(e);
  }
};

export const getUserSpaces = async () => {
  const spaces = [];

  const query = await getDocs(spacesCollection);
  query.forEach((doc) => {
    if (doc.data().owner === auth?.currentUser?.uid)
      spaces.push({ ...doc.data(), id: doc.id });
  });
  // order by date descending
  spaces.sort((a, b) => a.date - b.date);
  return spaces;
};

export const getUserSpace = async (id) => {
  const query = await getDoc(doc(spacesCollection, id));
  return query.data();
};
