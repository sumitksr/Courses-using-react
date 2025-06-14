import React from 'react'

export default function Filter(props) {
  return (
    <div>
      {props.filterData.map((data) => {
        return (
          <button key={data.id}>
            {data.title}
          </button>
        );
      })}
    </div>
  );
}
