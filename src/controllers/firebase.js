import { auth, googleProvider, db, storage } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { useAuthState } from "react-firebase-hooks/auth";

// USER FUNCTIONS

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

// Function to sign out
// * It will sign out the user and redirect to login page
export const signOut = () => {
  auth.signOut();
  window.location.href = "/";
};

export const getUser = () => {
  const [user, loading] = useAuthState(auth);
  return [user, loading];
};

// SPACES FUNCTIONS

const spacesCollection = collection(db, "spaces");

// Function to create a new space
// * It will create a new space in the database
// * It will upload the image to the storage
// * It will redirect to the new space page
export const createSpace = async (space) => {
  const day = new Date();
  const date = day.getTime();
  const imagePath = `spaces/${day.getTime() + "-" + space.img.name}`;
  const storageRef = ref(storage, imagePath);
  await uploadBytes(storageRef, space.img);
  const url = await getDownloadURL(storageRef);

  try {
    await addDoc(spacesCollection, {
      owner: auth?.currentUser?.uid,
      name: space.name,
      date: date,
      url: url,
      path: imagePath,
    }).then(() => {
      getUserSpaces(auth?.currentUser?.uid).then((spaces) => {
        const newSpace = spaces.find((s) => s.date == date);
        console.log(newSpace)
        window.location.href = `/manager/space/${newSpace.id}`;
      });
    });
  } catch (e) {
    console.log(e);
  } finally {
    return;
  }
};

// Function to get all spaces from a user
// * It will return an array with all the spaces from the user
export const getUserSpaces = async (userId) => {
  try {
    const stateQuery = query(spacesCollection, where("owner", "==", userId));
    const querySnapshot = await getDocs(stateQuery);
    const spaces = [];
    querySnapshot.forEach((doc) => {
      spaces.push({ ...doc.data(), id: doc.id });
    });
    // order by date desc
    spaces.sort((a, b) => b.date - a.date);
    return spaces;
  } catch (e) {
    console.log(e);
  }
};

export const getUserSpaceByName = async (userId, name) => {
  const stateQuery = query(
    spacesCollection,
    where("owner", "==", userId),
    where("name", "==", name)
  );
  const querySnapshot = await getDocs(stateQuery);
  let space = null;
  querySnapshot.forEach((doc) => {
    space = { ...doc.data(), id: doc.id };
  });
  return space;
};

// TASKS FUNCTIONS

const tasksCollection = collection(db, "tasks");

// Function to create a new task
// * It will create a new task in the database
export const createTask = async (task) => {
  const day = new Date();
  try {
    await addDoc(tasksCollection, {
      spaceId: task.spaceId,
      name: task.name,
      description: task.description,
      date: day.getTime(),
      dueDate: task.dueDate,
      priority: task.priority,
      status: "To Do",
      lastEdit: 0,
      subtasks: [],
    });
  } catch (e) {
    console.log(e);
  } finally {
    return;
  }
};

// Function to get all tasks from a user
// * It will return an array with all the tasks
export const getUserTasks = async (spaceId) => {
  const tasks = [];
  const stateQuery = query(tasksCollection, where("spaceId", "==", spaceId));
  const querySnapshot = await getDocs(stateQuery);
  querySnapshot.forEach((doc) => {
    tasks.push({ id: doc.id, ...doc.data() });
  });
  // order by date descending
  tasks.sort((a, b) => a.date - b.date);
  return tasks;
};

// Function to get a task from a user
// * It will return the task with the given id
export const getUserTask = async (id) => {
  const query = await getDoc(doc(tasksCollection, id));
  return query.data();
};

// Function to delete a task
// * It will delete the task with the given id
export const deleteTask = async (id) => {
  try {
    await deleteDoc(doc(tasksCollection, id));
  } catch (e) {
    console.log(e);
  }
};

// All the update functions will update the task last edit date

// Function to update a task name
// * It will update the task name with the given id
export const updateTaskName = async (id, name) => {
  try {
    await updateDoc(doc(tasksCollection, id), {
      name: name,
      lastEdit: new Date().getTime(),
    });
    return;
  } catch (e) {
    console.log(e);
  }
};

// Function to update a task description
// * It will update the task description with the given id
export const updateTaskDescription = async (id, description) => {
  try {
    await updateDoc(doc(tasksCollection, id), {
      description: description,
      lastEdit: new Date().getTime(),
    });
    return;
  } catch (e) {
    console.log(e);
  }
};

// Function to update a task due date
// * It will update the task due date with the given id
export const updateTaskDueDate = async (id, dueDate) => {
  try {
    await updateDoc(doc(tasksCollection, id), {
      dueDate: dueDate,
      lastEdit: new Date().getTime(),
    });
    return;
  } catch (e) {
    console.log(e);
  }
};

// Function to update a task priority
// * It will update the task priority with the given id
export const updateTaskPriority = async (id, priority) => {
  try {
    await updateDoc(doc(tasksCollection, id), {
      priority: priority,
      lastEdit: new Date().getTime(),
    });
    return;
  } catch (e) {
    console.log(e);
  }
};

// Function to update a task status
// * It will update the task status with the given id
export const updateTaskStatus = async (id, status) => {
  try {
    await updateDoc(doc(tasksCollection, id), {
      status: status,
      lastEdit: new Date().getTime(),
    });
    return;
  } catch (e) {
    console.log(e);
  }
};

// Function to update a task subtasks
// * It will update the task subtasks with the given id
export const updateTaskSubtasks = async (id, subtasks) => {
  try {
    await updateDoc(doc(tasksCollection, id), {
      subtasks: subtasks,
      lastEdit: new Date().getTime(),
    });
    return;
  } catch (e) {
    console.log(e);
  }
};
