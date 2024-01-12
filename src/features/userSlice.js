import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Aaliyah" },
  { id: "1", name: "Ciara" },
  { id: "2", name: "Kéziah" },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export const selectedAllUsers = (state) => state.users;
export default userSlice.reducer;
