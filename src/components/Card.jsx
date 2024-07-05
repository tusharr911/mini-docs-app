/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { RiSave2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState } from "react";
import html2pdf from "html2pdf.js";
import {
  handleDelete,
  handleUpdate,
  handleToggleComplete,
} from "../../Store/TodoSlice";
import { useDispatch } from "react-redux";

function Card({ data, reference }) {
  const dispatch = useDispatch();
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const [todoText, setTodoText] = useState(data.desc);

  function handleCancelButton(id) {
    dispatch(handleDelete({ id }));
  }
  function toggleCompleted(id) {
    dispatch(handleToggleComplete({ id }));
  }
  function updatingTodoCallback(event) {
    setTodoText(event.target.value);
  }
  function saveChange(id) {
    const trimmedText = todoText.trim();
    if (trimmedText !== "") {
      dispatch(handleUpdate({ id, trimmedText }));
    }
    setIsTodoEditable(false);
  }

  function handleDownload() {
    const contentToDownload = `
        <div>
            <p><strong>Description:</strong> ${data.desc}</p>
            <p><strong>Due Date:</strong> ${data.date}</p>
            <p><strong>Completed status:</strong> ${
              data.completed ? "Completed" : "Not Yet"
            }</p>
            <p>${"‎ "}</p>
        </div>
        
        
    `;

    const options = {
      margin: 10,
      filename: `${data.desc}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .from(contentToDownload)
      .set(options)
      .toPdf()
      .get("pdf")
      .then(function (pdf) {
        const blob = pdf.output("blob");
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${data.desc}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }

  //   w-60 h-72
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 30 }}
      className={`flex-shrink-0 relative w-56 h-72 rounded-[45px] text-white py-8 px-8 overflow-hidden ${
        data.completed
          ? "bg-green-400 bg-opacity-60"
          : "bg-zinc-900 bg-opacity-90"
      }`}
    >
      <div className="flex justify-between items-center">
        <span
          className="cursor-pointer"
          onClick={() => !data.completed && setIsTodoEditable(!isTodoEditable)}
        >
          {isTodoEditable ? (
            <RiSave2Line onClick={() => saveChange(data.id)} />
          ) : (
            <FaRegEdit />
          )}
        </span>
        <MdOutlineCancel
          className="text-xl cursor-pointer"
          onClick={() => handleCancelButton(data.id)}
        />
      </div>

      {/* <p className="text-sm font-semibold mt-5 leading-tight "> {data.desc}</p> */}

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
          <h5>{data.date}</h5>
          <span
            // onClick={updateClose}
            className="h-7 w-7 flex justify-center items-center bg-zinc-600 rounded-full cursor-pointer"
            onClick={handleDownload}
          >
            {<LuDownload size=".7em" />}
          </span>
        </div>
        <div className={`tag w-full pb-5  flex  justify-center items-center`}>
          <h3
            className="text-sm font-semibold cursor-pointer "
            onClick={() => toggleCompleted(data.id)}
          >
            {data.completed ? "Completed" : data.tagTitle}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
