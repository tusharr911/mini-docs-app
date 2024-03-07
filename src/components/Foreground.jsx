/* eslint-disable react/prop-types */
import Card from "./Card";
import { useRef } from "react";

export default function Foreground({ dataArr, handleDelete }) {
  const ref = useRef(null);
  function handleDeleteById(id) {
    handleDelete(id);
  }

  return (
    <div
      ref={ref}
      className="flex gap-5 flex-wrap p-5 fixed w-full h-full top-20 left-0 z-[3]"
    >
      {dataArr.map((item) => (
        <Card
          reference={ref}
          data={item}
          key={item.id}
          handleDelete={handleDeleteById}
        />
      ))}
    </div>
  );
}
