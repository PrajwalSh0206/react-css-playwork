import { useEffect, useState } from "react";

const Image = ({ imgSrc, setContent }) => {
  const [caption, setCaption] = useState("");

  useEffect(() => {
    if (imgSrc) {
      const content = {
        type: "image",
        content: imgSrc,
        caption,
      };
      setContent(content);
    }
  }, [imgSrc]);

  const handleKeyEvent = (e) => {
    setCaption(e.target.value);
  };

  return (
    <div className="flex flex-col w-full items-center p-5 space-y-3">
      {imgSrc && (
        <div className="min-w-64 flex flex-col space-y-3">
          <img src={imgSrc} className="max-h-96 rounded-md"></img>
          <input
            type="text"
            value={caption}
            onChange={handleKeyEvent}
            className="bg-gray-200 border-gray-400 border-2 w-full p-3 focus:outline-none rounded-md text-gray-600"
            placeholder="Enter Caption Here"
          ></input>
        </div>
      )}
    </div>
  );
};

export default Image;
