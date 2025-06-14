import React from "react";

const Filter = (props) => {
  // console.log(props);
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
      {props.filterData.map((data) => (
        <button
          className={`text-lg px-4 py-2 rounded-md font-medium text-white transition-all duration-200
            ${
              category === data.title
                ? "bg-blue-600 border-2 border-white"
                : "bg-gray-800 hover:bg-gray-700"
            }
          `}
          key={data.id}
          onClick={() => filterHandler(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
