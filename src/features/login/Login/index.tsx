import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { Button } from 'antd'
import { useLoginMutation } from '@/redux/api/auth'
import { setCredentials } from '@/features/login/authSlice'

const Login: FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation<{
    referrer: Location
  }>()
  const [login, { isLoading }] = useLoginMutation()
  const referrer = location?.state?.referrer || '/'

  console.log('referrer', referrer)

  const handleLogin = async () => {
    try {
      const res = await login({ u: 'user' }).unwrap()
      dispatch(setCredentials(res))
      history.push(referrer)
    } catch (e) {}
  }

  return (
    <div>
      <div>Login Page</div>
      <Button onClick={handleLogin}>login</Button>
    </div>
  )
}

export default Login
