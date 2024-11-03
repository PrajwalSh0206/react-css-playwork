import { useState } from "react";
import ButtonList from "./ButtonList/ButtonList";

const RichTextEditor = () => {
  const [isVisibile, setIsVisibile] = useState(false);

  const handleToggle = () => {
    setIsVisibile((prevState) => !prevState);
  };

  return (
    <div className="w-full flex items-start space-x-1">
      {/* List Shown Here Starts*/}
      <div className=" flex relative flex-none flex-col items-center p-3 space-y-1">
        <button className="bg-white p-2 rounded-full border-gray-200 border-2" onClick={handleToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`size-5 transform transition-transform ${isVisibile ? "rotate-45" : ""}`}
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <ButtonList isVisibile={isVisibile}></ButtonList>
      </div>
      <textarea
        placeholder="Enter your text here ..."
        className="w-full p-3 text-gray-500 border-2 outline-none focus:border-gray-400 min-h-20 max-h-24 rounded-md"
      ></textarea>
      {/* List Shown Here Ends*/}
    </div>
  );
};

export default RichTextEditor;
