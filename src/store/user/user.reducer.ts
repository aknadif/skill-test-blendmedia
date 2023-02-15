import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserInitialState} from "@/types/user";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

const initialState: UserInitialState = {
    users:{
        isLoading: false,
        isError: false,
        isSuccess: false,
        errorMessage: '',
        data: [],
        selectedUser: '',
    },
};

export const resolveGetAllUsers = createAsyncThunk(
    'user/resolveGetAllUsers',
    async () => {
        try {
            return await fetch(`${API_URL}/users`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => response.json())
        } catch (error) {
            return error;
        }
    }
)

export const resolveDeleteUser = createAsyncThunk(
    'user/resolveDeleteUser',
    async (id: string) => {
        try {
            return await fetch(`${API_URL}/users/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => response.json())
        } catch (error) {
            return error;
        }
    }
)
export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    extraReducers: (builder) => {
        // Get All Users
        builder.addCase(resolveGetAllUsers.pending, (state) => {
            state.users.isLoading = true;
            state.users.isError = false;
        });
        builder.addCase(resolveGetAllUsers.fulfilled, (state: any, {payload}) => {
            state.users.isLoading = false;
            state.users.isSuccess = true;
            state.users.data = payload?.data;
        });
        builder.addCase(resolveGetAllUsers.rejected, (state, {payload}: any) => {
            state.users.isLoading = false;
            state.users.isError = true;
            state.users.errorMessage = payload?.message || 'Something went wrong';
        });

        // Delete User
        builder.addCase(resolveDeleteUser.pending, (state) => {
            state.users.isLoading = true;
            state.users.isError = false;
        });
        builder.addCase(resolveDeleteUser.fulfilled, (state: any, {payload}) => {
            state.users.isLoading = false;
            state.users.isSuccess = true;
        });
        builder.addCase(resolveDeleteUser.rejected, (state, {payload}: any) => {
            state.users.isLoading = false;
            state.users.isError = true;
            state.users.errorMessage = payload?.message || 'Something went wrong';
        });
    },
    reducers: {
        setSelectedUser: (state, {payload}) => {
            state.users.selectedUser = payload;
        }
    },
});

export const {
    setSelectedUser,
} = userSlice.actions;
export default userSlice.reducer;
