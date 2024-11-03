import { useEffect, useState } from "react";
import ButtonList from "./ButtonList/ButtonList";
import Fields from "./Fields";
import list from "./data/list";

const RichTextEditor = ({ submitCallback }) => {
  const [isVisibile, setIsVisibile] = useState(false);
  const [field, setField] = useState(list?.[0].type || "text");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState({ type: "text", content: "" });

  const handleToggle = () => {
    setIsVisibile((prevState) => !prevState);
  };

  const handleSubmit = () => {
    if (content?.content || content?.type == "bar") {
      submitCallback(content);
    }
  };

  return (
    <div className="w-full flex items-center space-x-1">
      <div className=" flex relative flex-none flex-col items-center space-y-1">
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
        {/* List Shown Here Starts*/}
        <div className="relative w-full">
          <ButtonList setImage={setImage} setField={setField} isVisibile={isVisibile}></ButtonList>
        </div>
        {/* List Shown Here Ends*/}
      </div>
      <Fields image={image} setContent={setContent} field={field}></Fields>
      <button onClick={handleSubmit} className="text-white bg-gray-700 p-2 rounded-full shadow-md active:scale-90">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
        </svg>
      </button>
    </div>
  );
};

export default RichTextEditor;
