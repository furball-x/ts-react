import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@/redux/api/auth'
import type { RootState } from '@/redux/store'

interface AuthState {
  user: User | null
  token: string | null
}

const initialState: AuthState = {
  user: null,
  token: null,
}

// Then, handle actions in your reducers:
const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    setCredentials: (
      state,
      {
        payload: { user, token },
      }: PayloadAction<{ user: User; token: string }>,
    ) => {
      state.user = user
      state.token = token
    },
  },
})

export const { setCredentials } = slice.actions

export const selectCurrentUser = (state: RootState) => state.auth.user
export default slice.reducer
