import { nanoid } from "nanoid";

export const tagTitleDefault = "Mark as Completed";
export const initialState = {
  todoArrayInitial: [
    {
      id: nanoid(),
      desc: "Buy some groceries",
      date: "2024-02-15",
      completedStatus: false,
      tagTitle: tagTitleDefault,
    },

    {
      id: nanoid(),
      desc: "Water the plants",
      date: "2024-01-08",
      completedStatus: false,
      tagTitle: tagTitleDefault,
    },
  ],
};
