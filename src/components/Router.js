import React from 'react'
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Home';
import FormikForm from './FormikForm';
import ReduxForm from './ReduxForm';
import List from './List';

const Router = () => {
  return (
    <BrowserRouter>
      <nav>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/formik/42">Formik</Link></div>
        <div><Link to="/redux_form/50">Redux Form</Link></div>
        <div><Link to="/list">List</Link></div>
      </nav>
      <Switch>
        <Route path="/formik/:id" component={FormikForm}/>
        <Route path="/redux_form/:id" component={ReduxForm}/>
        <Route path="/list" component={List}/>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
