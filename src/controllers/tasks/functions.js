import { db, storage, auth } from "../../config/firebase";
import { collection, getDocs, getDoc, addDoc, doc, deleteDoc, updateDoc, or, orderBy, where } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

const tasksCollection = collection(db, "tasks");

export const createTask = async (task) => {
    const day = new Date();
    // const imagePath = `tasks/${day.getTime() + "-" + task.img.name}`
    // const storageRef = ref(storage, imagePath);
    // await uploadBytes(storageRef, task.img);
    // const url = await getDownloadURL(storageRef);
    
    try{
        await addDoc(tasksCollection, {
            spaceID: task.spaceID,
            taskID: task.taskID,
            owner: auth.currentUser.uid,
            date: day.getTime(),
            lastEdit: day.getTime(),
            name: task.name,
            description: task.description,
            status: task.status,
            dueDate: task.dueDate,
            });
    }
    catch(e){
        console.log(e);
    }
}

export const getUserTasks = async () => {
    const tasks = [];
    const query = await getDocs(tasksCollection,
        where("owner", "==", auth?.currentUser?.uid));
        query.forEach((doc) => {
            tasks.push({ ...doc.data(), id: doc.id });
        });
    // order by date descending
    tasks.sort((a, b) => a.date - b.date);
    return tasks;
}

export const getUserTask = async (id) => {
    const query = await getDoc(doc(tasksCollection, id));
    return query.data();
}