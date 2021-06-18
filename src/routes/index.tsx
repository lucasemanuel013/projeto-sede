
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Detalhes from '../pages/Detalhes'

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Dashboard} />
    <Route path='/detalhes/:campeao' exact component={Detalhes} />
  </Switch>
)

export default Routes
