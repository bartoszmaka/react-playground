import React, { useState } from 'react'
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import { isEqual } from 'lodash';

import ThemeContext, { themes } from '../contexts/themeContext';
import Home from './Home';
import FormikForm from './FormikForm';
import ReduxForm from './ReduxForm';
import Settings from './Settings';
import List from './List';

const Router = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.light)
  const toggleTheme = () => {
    isEqual(currentTheme, themes.light)
     ? setCurrentTheme(themes.dark)
     : setCurrentTheme(themes.light)
  }

  const styles = {
    color: currentTheme.foreground,
    backgroundColor: currentTheme.background,
    padding: '8px',
    minHeight: '100vh',
  }

  const linkStyles = {
    color: currentTheme.foreground,
    marginRight: '20px',
  }

  return (
    <div style={styles}>
      <BrowserRouter>
        <div>
          <nav>
            <Link style={linkStyles} to="/">Home</Link>
            <Link style={linkStyles} to="/formik/42">Formik</Link>
            <Link style={linkStyles} to="/redux_form/50">Redux Form</Link>
            <Link style={linkStyles} to="/list">List</Link>
            <Link style={linkStyles} to="/settings">Settings</Link>
          </nav>
          <button type="button" onClick={toggleTheme}>Toggle Theme</button>
        </div>

        <ThemeContext.Provider value={{theme: currentTheme, toggleTheme: toggleTheme}}>
          <Switch>
            <Route path="/formik/:id" component={FormikForm}/>
            <Route path="/redux_form/:id" component={ReduxForm}/>
            <Route path="/list" component={List}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/" component={Home} />
          </Switch>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default Router
