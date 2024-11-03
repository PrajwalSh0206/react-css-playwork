import { useRef, useState } from "react";
import list from "../data/list";

const ButtonList = ({ isVisibile, setField, setImage }) => {
  const [btnList, setBtnList] = useState(list);
  const [prevIndex, setPrevIndex] = useState(0);
  const fileInput = useRef();

  const handleClick = (index) => {
    let lst = btnList;
    if (prevIndex != index) {
      lst[prevIndex].isActive = false;
      setPrevIndex(index);
      lst[index].isActive = true;
      setBtnList(lst);
      setField(lst[index].type);
    }

    // Only For Image Click
    if (lst[index].type == "image") {
      fileInput.current.click();
    }
    setImage(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex absolute flex-col space-y-1">
      {btnList.map((data, index) => (
        <button
          key={data.type}
          onClick={() => handleClick(index)}
          className={`p-2 relative rounded-full border-gray-200 border-2 transform duration-300 transition-transform ${isVisibile ? "scale-100" : "scale-0"} ${
            data.isActive ? "bg-gray-600 text-white" : ""
          }`}
        >
          {/* Image Handling */}
          {data.type == "image" && (
            <input
              ref={fileInput}
              onChange={handleImageChange}
              className="p-2 absolute invisible w-fit z-100 h-fit"
              type="file"
              accept=".png,.svg,.jpg"
            ></input>
          )}
          {data.image}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
