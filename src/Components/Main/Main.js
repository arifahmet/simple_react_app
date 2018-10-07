import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import AddUser from '../AddUser/AddUser'
import SearchUser from '../SearchUser/SearchUser';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path="/AddUser" component={AddUser} />
      <Route exact path="/SearchUser" component={SearchUser} />
    </Switch>
  </main>
)

export default Main