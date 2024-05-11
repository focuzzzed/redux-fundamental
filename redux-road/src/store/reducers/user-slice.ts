import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/user.interface"
// import { fetchUsers } from "./action-creators";


interface UserState {
  users: User[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<User[]>) {
      state.isLoading = false;
      state.error = '';
      state.users = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //   .addCase(fetchUsers.pending, (state) => {
  //     state.isLoading = true;
  //   })
  //   .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
  //       state.isLoading = false;
  //       state.error = '';
  //       state.users = action.payload
  //   })
  //   .addCase(fetchUsers.rejected, (state, action: PayloadAction<unknown>) => {
  //       state.isLoading = false;
  //       state.error = String(action.payload);
  //   })
  // }
})