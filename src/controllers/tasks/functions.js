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

const tasksCollection = collection(db, "tasks");

export const createTask = async (task) => {
  try {
    await addDoc(tasksCollection, {
      spaceId: task.spaceId,
      owner: auth.currentUser.uid,
      name: task.name,
      description: task.description,
      dueDate: task.dueDate,
      dueTime: task.dueTime,
      priority: task.priority,
      status: "To Do",
      lastEdit: "",
    });
  } catch (e) {
    console.log(e);
  }
};

export const getUserTasks = async () => {
  const tasks = [];
  const query = await getDocs(tasksCollection);
  query.forEach((doc) => {
    if (doc.data().owner === auth.currentUser.uid)
      tasks.push({ ...doc.data(), id: doc.id });
  });
  // order by date descending
  tasks.sort((a, b) => a.date - b.date);
  return tasks;
};

export const getUserTask = async (id) => {
  const query = await getDoc(doc(tasksCollection, id));
  return query.data();
};

export const handelPriority = (priority) => {
  if (priority === "Low") return "bg-cyan-400 border-cyan-200";
  else if (priority === "Medium") return "bg-yellow-600 border-yellow-400";
  else if (priority === "High") return "bg-red-600 border-red-400";
  return "bg-gray-400 border-gray-300";
};
