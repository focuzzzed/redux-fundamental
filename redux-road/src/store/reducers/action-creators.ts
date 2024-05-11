// import axios, { AxiosInstance } from "axios";
// import { User } from "../../models/user.interface";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { AppDispatch } from "../store";


// //legacy

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (err) {
//     isError(err);
//     dispatch(userSlice.actions.usersFetchingError(err.message))
//   }
// }

// // redux-thunk

// export const fetchUsers = createAsyncThunk<void, string, {
//   dispatch: AppDispatch,
//   state: AppStore,
//   extra: AxiosInstance,
// }>(
//   'users/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/usesrs');
//       return response.data;
//     } catch {
//       return thunkAPI.rejectWithValue('Can not load users data!!!');
//     }
//   }
// )