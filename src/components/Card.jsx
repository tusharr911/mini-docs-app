/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { RiSave2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState } from "react";
import handleDownload from "./DownloadTodo";
import {
  handleDelete,
  handleUpdate,
  handleToggleComplete,
} from "../../Store/TodoSlice";
import { useDispatch } from "react-redux";
import service from "../appwrite/config";

function Card({ data, reference }) {
  const dispatch = useDispatch();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoText, setTodoText] = useState(data.text);
  async function handleCancelButton(id) {
    const status = await service.deletePost(id);
    if (status) {
      dispatch(handleDelete({ id }));
    }
  }
  async function toggleCompleted(id) {
    const updatedStatus = !data.completedStatus;
    const updatedPost = { ...data, completedStatus: updatedStatus };
    const status = await service.updatePost(id, updatedPost);
    if (status) {
      dispatch(handleToggleComplete({ id }));
    }
  }
  function updatingTodoCallback(event) {
    setTodoText(event.target.value);
  }
  async function saveChange(id) {
    const trimmedText = todoText.trim();
    if (trimmedText !== "") {
      const updatedPost = { ...data, text: trimmedText };
      const status = await service.updatePost(id, updatedPost);
      if (status) {
        dispatch(handleUpdate({ id, trimmedText }));
      }
    }
    setIsTodoEditable(false);
  }

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 30 }}
      className={`flex-shrink-0 relative w-56 h-72 rounded-[45px] text-white py-8 px-8 overflow-hidden ${
        data.completedStatus
          ? "bg-green-400 bg-opacity-60"
          : "bg-zinc-900 bg-opacity-90"
      }`}
    >
      <div className="flex justify-between items-center">
        <span
          className="cursor-pointer"
          onClick={() =>
            !data.completedStatus && setIsTodoEditable(!isTodoEditable)
          }
        >
          {isTodoEditable ? (
            <RiSave2Line onClick={() => saveChange(data.$id)} />
          ) : (
            <FaRegEdit />
          )}
        </span>
        <MdOutlineCancel
          className="text-xl cursor-pointer"
          onClick={() => handleCancelButton(data.$id)}
        />
      </div>

      {/* <p className="text-sm font-semibold mt-5 leading-tight "> {data.text}</p> */}

      <textarea
        className="text-white bg-transparent outline-none pt-3 resize-none"
        type="text"
        rows={5}
        value={todoText}
        onChange={(e) => updatingTodoCallback(e)}
        readOnly={!isTodoEditable}
      />

      <div className="footer absolute w-full  bottom-0 left-0 ">
        <div className="flex justify-between items-center mb-3 py-3 px-8">
          <h5>{new Date(data.date).toISOString().split("T")[0]}</h5>
          <span
            // onClick={updateClose}
            className="h-7 w-7 flex justify-center items-center bg-zinc-600 rounded-full cursor-pointer"
            onClick={() => handleDownload(data)}
          >
            {<LuDownload size=".7em" />}
          </span>
        </div>
        <div className={`tag w-full pb-5  flex  justify-center items-center`}>
          <h3
            className="text-sm font-semibold cursor-pointer "
            onClick={() => toggleCompleted(data.$id)}
          >
            {data.completedStatus ? "Completed" : "Mark as Complete"}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;