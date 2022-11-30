import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../shared/Constant";


const initialState = {
  user: {},
  users: [],
  isAdmin: false,
  loading: true,
};

// export const registerUser = createAsyncThunk (
//   "user/registerNewUser",
//   async (user) => {
//     return function (dispatch) {
//        await axios
//             .post(`${baseUrl}/authenticate/register`, user)
//             .then((res) => {
//                 dispatch(userRegistered)
//                 return res.data
//                 alert('User registered successfully')
//             })
//             .catch((err) => {
//                 console.log("error : ",err)
//             })
//     }
//   }

// )

// export const loginUser = createAsyncThunk(
//   "user/loginPerson",
//   async (user) => {
//     return function (dispatch) {
//         await axios
//             .post(`${baseUrl}/authenticate/login`, user)
//             .then((res) => {
//                 dispatch(userLoggedIn(res.data.details))
//                 console.log("response data : ", res.data)
//                 sessionStorage.setItem('token', res.data.token)
//                 sessionStorage.setItem('role', res.data.isAdmin)
//                 dispatch(isAdmin(res.data.isAdmin))
//                 return res.data
//             })
//             .catch(err => {
//                 console.log("error : ", err)
//             })
//     }
//   }
// )

export const UserSlice = createSlice({
  //   name: "user",
  //   initialState: {
  //     isAdmin: false,
  //     user: null
  //   },

  //   reducers: {
  //     login: (state) => {
  //       state.user = state.user;
  //       state.isAdmin = true;
  //     },
  //     logout: (state) => {
  //       state.user = null;
  //       state.isAdmin = false;
  //     }
  //   }
  // });

  name: "user",
  initialState,
  // : {
  //       isAdmin: false,
  //       user: null
  //     },
  reducers: {
    registerNewUser: (state) => {
      state.loading = false
    },
    loginPerson: (state) => {
      state.user = state.user;
      state.loading = false;
      // state.isAdmin = true;
    },
    isAdminPerson: (state) => {
      state.user = state.user;
      state.loading = false;
      state.isAdmin = true;
    }
  },
})


const { reducer, actions } = UserSlice;
export const { registerNewUser, loginPerson, isAdminPerson } = actions;
export const selectUser = (state) => state.user.isAdmin
export default reducer;
