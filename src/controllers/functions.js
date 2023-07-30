// Function to handle the status color and text
// * It will return an array with the color and text in tailwindcss format
export const handelStatusColor = (status) => {
  if (status === "To Do") return ["lime", "bg-lime-500"];
  else if (status === "In Progress") return ["teal", "bg-teal-400"];
  else if (status === "Done") return ["green", "bg-green-500"];
  return ["lime", "bg-lime-400"];
};

// Function to handle the status bg color
// * It will return the bg color in tailwindcss format
export const handelPriorityColor = (priority) => {
  if (priority === "Low") return "bg-cyan-400";
  else if (priority === "Medium") return "bg-yellow-700";
  else if (priority === "High") return "bg-red-600";
  else if (priority === "None") return "bg-gray-400";
  return "bg-gray-400";
};

// Function to handle the status img
// * It will return the img path
export const handelPriorityFlag = (priority) => {
  if (priority === "Low") return "/img/cyan-flag.png";
  else if (priority === "Medium") return "/img/yellow-flag.png";
  else if (priority === "High") return "/img/red-flag.png";
  else if (priority === "None") return "/img/gray-flag.png";
  return "/img/gray-flag.png";
};

// Function to handle the dates format
// * It will return the date in a readable format (ex: 12/12/2021 12:00 PM)
export const handelDates = (date) => {
  const day = new Date(date);
  const time = day.toLocaleTimeString().slice(0, -3);
  // add pm or am
  if (time.slice(0, 2) > 12) {
    return (
      day.toDateString() + " " + (time.slice(0, 2) - 12) + time.slice(2) + " PM"
    );
  } else if (time.slice(0, 2) === 12) {
    return day.toDateString() + " " + time + " PM";
  } else if (time.slice(0, 2) === 0) {
    return (
      day.toDateString() + " " + (time.slice(0, 2) + 12) + time.slice(2) + " AM"
    );
  } else {
    return day.toDateString() + " " + time + " AM";
  }
};

// Function to handle the input date format
// * It will return the date in format datetime-local (ex: 2021-12-12T12:00)
export const handelInputDateInsert = (timestamp) => {
  const dateObject = new Date(timestamp);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");
  const hours = String(dateObject.getHours()).padStart(2, "0");
  const minutes = String(dateObject.getMinutes()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
  return formattedDate;
};
