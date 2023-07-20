import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
function InputFile({ id = "", required = false }) {
  
  const handleFileChange = (e) => {
    const span = document.getElementById("dropzone-file-text");
    if (e.target.files[0]) {
      span.innerHTML = e.target.files[0].name;
    } else {
      span.innerHTML = "Click to upload";
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <AiOutlineCloudUpload className="text-4xl text-gray-400 dark:text-gray-500" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span id="dropzone-file-text" className="font-semibold">
              Click to upload
            </span>
            {/* or drag and drop */}
          </p>
        </div>
        <input
          id={id}
          name={id}
          type="file"
          className="opacity-0 absolute z-[-1]"
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleFileChange}
          required={required} 
        />
      </label>
    </div>
  );
}

export default InputFile;
