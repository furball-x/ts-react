import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginApi, LoginApiRes } from '@/services/auth'

export const fetchLogin = createAsyncThunk('auth/login', async () => {
  const res = await loginApi({ u: 'furball' })
  return res.data
})

// Then, handle actions in your reducers:
const authSlice = createSlice({
  name: 'users',
  initialState: { userToken: '' },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchLogin.fulfilled,
      (state, action: PayloadAction<LoginApiRes>) => {
        state.userToken = action.payload.token
      },
    )
  },
})

export default authSlice
