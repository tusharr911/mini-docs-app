import { useDispatch } from "react-redux";
import { handleAddTodo } from "../../Store/TodoSlice";
import { useForm } from "react-hook-form";
import { Input, Button } from "./Index";
import service from "../appwrite/config";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { AuthSliceSelector } from "../../Store/authSlice";
function CreatePost() {
  const { userData } = useSelector(AuthSliceSelector);

  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  async function addTodo(data) {

    try {
      const response = await service.createPost({
        text: data.text,
        slug: nanoid(),
        date: data.date,
        completedStatus: false,
        userId: userData.$id,
      });

      if (response) {
        
        dispatch(handleAddTodo(response));
      }
    } catch (error) {
      console.log("Appwrite Service Error:: addTodo", error);
    }

    reset();
  }
  return (
    <form
      className="flex items-center border-b border-teal-500 py-2 gap-4"
      onSubmit={handleSubmit(addTodo)}
    >
      <Input
        type="text"
        placeholder="What are you upto?"
        className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
        {...register("text", { required: true })}
      />

      <Input
        type="date"
        className="flex-shrink-0 border-transparent border-4 text-white border-teal-500 hover:border-teal-700 text-sm py-1 px-2 rounded bg-teal-500 hover:bg-teal-700 transition-all"
        {...register("date", { required: true })}
      />
      <Button
        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded transition-all	"
        type="submit"
      >
        Add Todo
      </Button>
    </form>
  );
}

export default CreatePost;