import { useEffect, useState } from "react";
import RichTextEditor from "./components/RichTextEditor/RichTextEditor";

const App = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    console.log(content);
  }, [content]);
  return (
    <div className="h-screen w-screen bg-gray-100 p-2">
      <RichTextEditor submitCallback={setContent}></RichTextEditor>
    </div>
  );
};

export default App;
