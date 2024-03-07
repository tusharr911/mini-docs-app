/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useTodoContextHook } from "../../Store/Store";
function Background() {
  const { handleAddTodo } = useTodoContextHook();
  const todoTextRef = useRef("");
  const todoDateRef = useRef("");
  function handleAddBtn() {
    if (!todoTextRef.current.value || !todoDateRef.current.value) return;
    handleAddTodo({
      text: todoTextRef.current.value,
      date: todoDateRef.current.value,
    });
  }
  return (
    <>
      <header className="h-20 w-full text-zinc-600 ">
        <form className="w-full max-w-md mx-auto py-4">
          <div className="flex items-center border-b border-teal-500 py-2 gap-4">
            <input
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="What are you upto?"
              aria-label="Full name"
              ref={todoTextRef}
            />
            <input
              type="date"
              className="flex-shrink-0 border-transparent border-4 text-white border-teal-500 hover:border-teal-700 text-sm py-1 px-2 rounded bg-teal-500 hover:bg-teal-700 transition-all"
              ref={todoDateRef}
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded transition-all	"
              type="button"
              onClick={handleAddBtn}
            >
              Add Todo
            </button>
          </div>
        </form>
      </header>

      <div className="fixed w-full h-screen z-[2]">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] tracking-tight leading-none font-semibold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
