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
  const day = new Date();
  try {
    await addDoc(tasksCollection, {
      spaceId: task.spaceId,
      owner: auth.currentUser.uid,
      name: task.name,
      description: task.description,
      date: day.getTime(),
      dueDate: task.dueDate,
      priority: task.priority,
      status: "To Do",
      lastEdit: 0,
    });
    return
  } catch (e) {
    console.log(e);
  }
  finally {
    return
  }
};

export const getUserTasks = async (currentSpaceId) => {
  const tasks = [];
  const query = await getDocs(tasksCollection);
  query.forEach((doc) => {
    if (
      doc.data().owner === auth.currentUser.uid &&
      doc.data().spaceId === currentSpaceId
    )
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

export const deleteTask = async (id) => {
  try {
    await deleteDoc(doc(tasksCollection, id));
  } catch (e) {
    console.log(e);
  }
};

export const updateTaskName = async (id, name) => {
  try {
    await updateDoc(doc(tasksCollection, id), {
      name: name,
      lastEdit: new Date().getTime(),
    });
    return
  } catch (e) {
    console.log(e);
  }
};

export const updateTaskDescription = async (id, description) => {
  try {
    await updateDoc(doc(tasksCollection, id), {
      description: description,
      lastEdit: new Date().getTime(),
    });
    return
  } catch (e) {
    console.log(e);
  }
};

export const updateTaskDueDate = async (id, dueDate) => {
  try {
    await updateDoc(doc(tasksCollection, id), {
      dueDate: dueDate,
      lastEdit: new Date().getTime(),
    });
    return
  } catch (e) {
    console.log(e);
  }
} 

export const updateTaskPriority = async (id, priority) => {
  try {
    await updateDoc(doc(tasksCollection, id), {
      priority: priority,
      lastEdit: new Date().getTime(),
    });
    return
  } catch (e) {
    console.log(e);
  }
};

export const updateTaskStatus = async (id, status) => {
  try {
    await updateDoc(doc(tasksCollection, id), {
      status: status,
      lastEdit: new Date().getTime(),
    });
    return
  } catch (e) {
    console.log(e);
  }
};

export const handelStatusColor = (status) => {
  if (status === "To Do") return ["lime","bg-lime-500"];
  else if (status === "In Progress") return ["teal","bg-teal-400"];
  else if (status === "Done") return ["green","bg-green-500"];
  return ["lime","bg-lime-400"];
};

export const handelPriorityColor = (priority) => {
  if (priority === "Low") return "bg-cyan-400";
  else if (priority === "Medium") return "bg-yellow-700";
  else if (priority === "High") return "bg-red-600";
  else if (priority === "None") return "bg-gray-400";
  return "bg-gray-400";
};

export const handelPriorityFlag = (priority) => {
  if (priority === "Low") return "/img/cyan-flag.png";
  else if (priority === "Medium") return "/img/yellow-flag.png";
  else if (priority === "High") return "/img/red-flag.png";
  else if (priority === "None") return "/img/gray-flag.png";
  return "/img/gray-flag.png";
}

export const handelDates = (date) => {
  const day = new Date(date);
  const time = day.toLocaleTimeString().slice(0, -3)
  // add pm or am
  if (time.slice(0, 2) > 12) {
    return day.toDateString() + " " + (time.slice(0, 2) - 12) + time.slice(2) + " PM";
  }
  else if (time.slice(0, 2) === 12) {
    return day.toDateString() + " " + time + " PM";
  }
  else if (time.slice(0, 2) === 0) {
    return day.toDateString() + " " + (time.slice(0, 2) + 12) + time.slice(2) + " AM";
  }
  else {
    return day.toDateString() + " " + time + " AM";
  }
}

export const handelInputDateInsert = (timestamp) => {
  const dateObject = new Date(timestamp);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const day = String(dateObject.getDate()).padStart(2, '0');
  const hours = String(dateObject.getHours()).padStart(2, '0');
  const minutes = String(dateObject.getMinutes()).padStart(2, '0');
  
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
  return formattedDate;
}