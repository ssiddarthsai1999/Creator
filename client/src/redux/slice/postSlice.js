import {
    createAsyncThunk,
    createSlice,
    rejectWithValue,
} from "@reduxjs/toolkit";

import * as api from "../api";

//.......................................
export const createPost = createAsyncThunk(
    "/post/create",
    async ({ updatedFormValues, toast, navigate }, { rejectWithValue }) => {
        try {
            const response = await api.createPost(updatedFormValues);

            toast.success("Post uploaded successfully", {
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

export const getPosts = createAsyncThunk(
    "/post/view",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.getPosts();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
//.......................................
export const getUserPost = createAsyncThunk(
    "/post/userpost/:id",
    async (otherUserId, { rejectWithValue }) => {
        try {
            const response = await api.getPosts(otherUserId);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
//.......................................

export const likePosts = createAsyncThunk(
    "/post/like/:id",
    async ({ postid, userId }, { rejectWithValue }) => {
        try {
            const response = await api.likePosts(postid, userId);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
);
//.......................................
export const getSinglePost = createAsyncThunk(
    "/post/view/:id",
    async (id, { rejectWithValue }) => {
        try {
            const response = await api.getSinglePost(id);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
//.......................................

export const updateAnswer = createAsyncThunk(
    "/post/update /:id",
    async ({ id, formValues, navigate, toast }, { rejectWithValue }) => {
        try {
            const response = await api.updateAnswer(formValues, id);
            toast.success("Answer uploaded successfully", {
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
//.......................................
const postSlice = createSlice({
    name: "post",
    initialState: {
        post: [],
        userpost: [],
        singlePost: {},
        loading: false,
        error: "",
    },
    //.......................................

    extraReducers: {
        [createPost.pending]: (state, action) => {
            state.loading = true;
        },
        [createPost.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = action.payload;
        },
        [createPost.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //--------------------------------------------------------------
        [getUserPost.pending]: (state, action) => {
            state.loading = true;
        },
        [getUserPost.fulfilled]: (state, action) => {
            state.loading = false;

            state.userpost = action.payload;
        },
        [getUserPost.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //--------------------------------------------------------------
        [getPosts.pending]: (state, action) => {
            state.loading = true;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = action.payload;
        },
        [getPosts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //--------------------------------------------------------------

        [likePosts.pending]: (state, action) => {},
        [likePosts.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [likePosts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        //--------------------------------------------------------------
        [getSinglePost.pending]: (state, action) => {
            state.loading = true;
        },
        [getSinglePost.fulfilled]: (state, action) => {
            state.loading = false;
            state.singlePost = action.payload;
        },
        [getSinglePost.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //--------------------------------------------------------------

        [updateAnswer.pending]: (state, action) => {},
        [updateAnswer.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [updateAnswer.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        //--------------------------------------------------------------
    },
});
export default postSlice.reducer;
