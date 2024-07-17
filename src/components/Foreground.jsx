/* eslint-disable react/prop-types */
import Card from "./Card";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoSliceSelector } from "../../Store/TodoSlice";
import service from "../appwrite/config";
import { initializeTodos } from "../../Store/TodoSlice";
import { AuthSliceSelector } from "../../Store/authSlice";
import authService from "../appwrite/auth";

export default function Foreground() {
  const { userData } = useSelector(AuthSliceSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchDataFromAppWrite() {
      try {
        //by adding userData.$id in the getPosts query we will make sure only the todos created by the user are fetched
        const userInfo = await authService.getCurrentUser();
        if (userInfo) {
          const data = await service.getPosts(userData?.$id);
          if (data) {
            const todoArray = data.documents;
            dispatch(initializeTodos({ todoArray }));
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchDataFromAppWrite();
  }, []);

  const currArray = useSelector(TodoSliceSelector);
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="flex gap-5 flex-wrap p-5 fixed w-full h-full top-20 left-0 z-[3]"
    >
      {currArray?.length > 0 &&
        userData &&
        currArray
          // .filter((todo) => todo.userId === userData.$id)
          .map(
            (item) =>
              item && (
                <Card reference={ref} data={item} key={item.text + item.$id} />
              )
          )}
    </div>
  );
}
