import { useState } from "react";

const Link = ({ setContent }) => {
  const [link, setLink] = useState("");

  const handleLinkChange = (e) => {
    setLink(e.target.value);
    const content = {
      type: "link",
      content: e.target.value,
    };
    setContent(content);
  };

  return (
    <a href={link || "#"} className="w-full p-1 border-2 rounded-md text-center" target={link ? "_blank" : "_self"}>
      <input
        type="text"
        value={link}
        onChange={handleLinkChange}
        placeholder="Paste your link Here..."
        className={`bg-transparent -z-0 w-full p-2 text-blue-900 underline rounded-md focus:outline-none ${link ? "cursor-pointer" : ""}`}
      ></input>
    </a>
  );
};

export default Link;
