import { useEffect } from "react";

const Bar = ({ fieldType, setContent }) => {
  useEffect(() => {
    const content = {
      type: "bar",
      content: "",
    };
    setContent(content);
  }, [fieldType]);
  return (
    <div className="w-full flex space-x-2 items-center justify-center p-3">
      <div className="w-2/5 h-1 rounded-md bg-gray-500"></div>
      <div className="w-4 h-4 rounded-full bg-gray-500"></div>
      <div className="w-4 h-4 rounded-full bg-gray-500"></div>
      <div className="w-4 h-4 rounded-full bg-gray-500"></div>
      <div className="w-2/5 h-1 rounded-md bg-gray-500"></div>
    </div>
  );
};

export default Bar;
