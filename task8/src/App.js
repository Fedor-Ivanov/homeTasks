import React from 'react'
import './App.css'
import './normalize.css'
import AppBar from '@material-ui/core/AppBar';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'
import Tables from './components/tables/Tables/Tables'
import Waiters from './components/waiters/Waiters/Waiters'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


function App() {


  return (
    <>
      <Router>
        <div className="center">
          <AppBar position="sticky">
            <ButtonGroup variant="contained" color="primary">
              <Button>
                <NavLink activeClassName='active-link' className='nav-link' exact to='/'>Home</NavLink>
              </Button>
              <Button>
                <NavLink activeClassName='active-link' className='nav-link' to='/tables'>Tables</NavLink>
              </Button>
              <Button>
                <NavLink activeClassName='active-link' className='nav-link' to='/waiters'>Waiters</NavLink>
              </Button>
            </ButtonGroup>
          </AppBar>
        </div>
        <Container>
          <Switch>
            <Route path="/tables">
              <Tables />
            </Route>
            <Route path="/waiters">
              <Waiters />
            </Route>
            <Route path="/">
              <h1 className='title'>welcome to your Restaurant Manager</h1>
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  )
}

export default App