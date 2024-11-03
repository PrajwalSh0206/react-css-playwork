const Image = ({ imgSrc }) => {
  return (
    <div className="flex flex-col w-full items-center p-5 space-y-3">
      {imgSrc && (
        <div className="w-64 flex flex-col space-y-3">
          <img src={imgSrc} className="max-h-96 rounded-md"></img>
          <input
            type="text"
            className="bg-gray-200 border-gray-400 border-2 w-full p-3 focus:outline-none rounded-md text-gray-600"
            placeholder="Enter Caption Here"
          ></input>
        </div>
      )}
    </div>
  );
};

export default Image;
