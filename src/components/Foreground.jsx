/* eslint-disable react/prop-types */
import Card from "./Card";
import { useRef } from "react";

import { useSelector } from "react-redux";
export default function Foreground() {
  const currArray = useSelector((state) => state.todoArrayInitial);
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="flex gap-5 flex-wrap p-5 fixed w-full h-full top-20 left-0 z-[3]"
    >
      {currArray.length > 0 &&
        currArray.map(
          (item) => item && <Card reference={ref} data={item} key={item.id} />
        )}
    </div>
  );
}
