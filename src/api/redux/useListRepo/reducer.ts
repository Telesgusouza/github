import { createSlice } from "@reduxjs/toolkit";
import { IListRepo } from "../../interface";

const initialState: { listRepo: IListRepo } = {
  listRepo: {
    avatar: null,
    followers: 0,
    following: 0,
    location: "",

    title: "",
    description: "",

    listData: [],
  },
};

export const useDataRepo = createSlice({
  name: "list repo",
  initialState,
  reducers: {
    listRepo: (state, action) => {
      state.listRepo = action.payload;
    },
  },
});

export const { listRepo } = useDataRepo.actions;
export default useDataRepo.reducer;
