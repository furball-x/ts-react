import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute } from '@/components'
import Home from '@/features/home'
import PlatformLayout from '@/layouts/PlatformLayout'
import Login from '@/features/login/Login'

import './antd.less'

function App() {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />

      <PrivateRoute path="/platform">
        <PlatformLayout />
      </PrivateRoute>

      <Route path="/login" component={Login} />
    </Switch>
  )
}

export default hot(App)
