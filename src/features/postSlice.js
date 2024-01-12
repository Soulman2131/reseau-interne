import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Aller boire un verre",
    content: "Je serai ravi d'aller boire unn verre",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "Aller au cinéma",
    content: "Je serai ravi d'aller au cinéma",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, { payload }) {
        state.push(payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    emojisAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const ifPostExists = state.find((post) => post.id === postId);
      if (ifPostExists) {
        ifPostExists.reactions[reaction]++;
      }
    },
  },
});
export const selectedAllPosts = (state) => state.posts;

export const { postAdded, emojisAdded } = postSlice.actions;
export default postSlice.reducer;
