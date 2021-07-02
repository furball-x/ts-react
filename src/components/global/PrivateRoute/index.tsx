import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { user } = useAuth()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { referrer: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
