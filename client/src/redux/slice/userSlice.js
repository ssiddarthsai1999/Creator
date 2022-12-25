import {
    createAsyncThunk,
    createSlice,
    rejectWithValue,
} from "@reduxjs/toolkit";

import * as api from "../api";

//.......................................
export const registerUser = createAsyncThunk(
    "/auth/register",
    async ({ formValues, toast, navigate }, { rejectWithValue }) => {
        try {
            const response = await api.registerUser(formValues);

            toast.success("Registration Successful", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return response.data;
        } catch (error) {
            toast.error(error.response.data, {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return rejectWithValue(error.response.data);
        }
    }
);
//.......................................
export const loginUser = createAsyncThunk(
    "user/login",
    async ({ formValues, toast, navigate }, { rejectWithValue }) => {
        try {
            const response = await api.loginUser(formValues);

            toast.success("Login Successful", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            navigate("/");
            return response.data;
        } catch (error) {
            toast.error(error.response.data, {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return rejectWithValue(error.response.data);
        }
    }
);
//.......................................
export const getAllUsers = createAsyncThunk(
    "/user/find",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.getAllUsers();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
//.......................................
export const getSingleUser = createAsyncThunk(
    "/user/:id",
    async (id, { rejectWithValue }) => {
        try {
            const response = await api.getSingleUser(id);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

//.......................................
export const searchAllUsers = createAsyncThunk(
    "/user/search",
    async ({ searchTerm }, { rejectWithValue }) => {
        try {
            const response = await api.searchAllUsers(searchTerm);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

//.......................................

export const updateUser = createAsyncThunk(
    "/user/update /:id",
    async ({ id, toast, formValues, navigate }, { rejectWithValue }) => {
        try {
            const response = await api.updateUser(formValues, id);

            toast.success("User updated successfully", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate(`/`);
            return response.data;
        } catch (error) {
            toast.error(error.response.data, {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return rejectWithValue(error.response.data);
        }
    }
);
//.......................................
export const followUsers = createAsyncThunk(
    "/user/follow/:id",
    async ({ otheruserid, yourId }, { rejectWithValue }) => {
        try {
            const response = await api.followUsers(otheruserid, yourId);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
);
//.......................................
export const updatequestions = createAsyncThunk(
    "/user/follow/:id",
    async ({ otheruserid, yourId }, { rejectWithValue }) => {
        try {
            const response = await api.updatequestions(otheruserid, yourId);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
);
//.......................................

//.......................................
const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        allusers: [],
        specificuser: {},

        loading: false,
        error: "",
    },
    //.......................................
    reducers: {
        setLogout: (state, action) => {
            state.user = null;
            localStorage.clear();
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
    //.......................................
    extraReducers: {
        [registerUser.pending]: (state, action) => {
            state.loading = true;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.loading = false;

            localStorage.setItem(
                "profile",
                JSON.stringify({ ...action.payload })
            );
            state.user = action.payload;
            //     localStorage.clear()
            // window.reload()
        },
        [registerUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //--------------------------------------------------------------
        [loginUser.pending]: (state, action) => {
            state.loading = true;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.loading = false;

            localStorage.setItem(
                "profile",
                JSON.stringify({ ...action.payload })
            );
            state.user = action.payload;
        },
        [loginUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //--------------------------------------------------------------
        [getAllUsers.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.allusers = action.payload;
        },
        [getAllUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //--------------------------------------------------------------
        [getSingleUser.pending]: (state, action) => {
            state.loading = true;
        },
        [getSingleUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.specificuser = action.payload;
        },
        [getSingleUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //--------------------------------------------
        [updateUser.pending]: (state, action) => {
            state.loading = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false;
            const {
                arg: { id },
            } = action.meta;
            if (id) {
                console.log(action);
                state.specificuser = state.specificuser.map((item) =>
                    item._id === id ? action.payload : item
                );
            }
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        //--------------------------------------------------------------
        [searchAllUsers.pending]: (state, action) => {
            state.loading = true;
        },
        [searchAllUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.allusers = action.payload;
        },
        [searchAllUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //--------------------------------------------
        [followUsers.pending]: (state, action) => {},
        [followUsers.fulfilled]: (state, action) => {
            state.loading = false;
            const {
                arg: { _id },
            } = action.meta;
            if (_id) {
                console.log(action);
                state.allusers = state.allusers.map((item) =>
                    item._id === _id ? action.payload : item
                );
            }
        },
        [followUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        //--------------------------------------------------------------
    },
});
export default userSlice.reducer;
export const { setLogout, setUser } = userSlice.actions;
