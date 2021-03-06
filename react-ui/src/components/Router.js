import { Link, Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { get, isEqual } from 'lodash';
import React, { useState, Suspense } from 'react'

import { getCurrentUser } from '../redux/selectors/appState';
import Boundary from '../wrappers/Boundary';
import Home from './Home';
import LoginCallback from './LoginCallback';
import ThemeContext, { themes } from '../contexts/themeContext';
import PrettyLink from './reusable/PrettyLink';

const FormikForm = React.lazy(() => import('./FormikForm'))
const ReduxForm = React.lazy(() => import('./ReduxForm'))
const Settings = React.lazy(() => import('./Settings'))
const List = React.lazy(() => import('./List'))
const HugeList = React.lazy(() => import('./HugeList'))
const Admin = React.lazy(() => import('./Admin'))
const ErrorBoundary = React.lazy(() => import('./ErrorBoundary'))
const RequestCancellation = React.lazy(() => import('./RequestCancellation'))
const ModalsPage = React.lazy(() => import('./ModalsPage'))
const Login = React.lazy(() => import('./Login'))
const Movies = React.lazy(() => import('./Movies'))
const Backgrounds = React.lazy(() => import('./Backgrounds'))
const Accordions = React.lazy(() => import('./Accordions'))

const Router = ({ currentRole }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.dark)
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
            <PrettyLink theme={linkStyles} to="/">Home</PrettyLink>
            <PrettyLink theme={linkStyles} to="/formik/42">Formik</PrettyLink>
            <PrettyLink theme={linkStyles} to="/redux_form/50">Redux Form</PrettyLink>
            <PrettyLink theme={linkStyles} to="/list">List</PrettyLink>
            <PrettyLink theme={linkStyles} to="/huge-list">Huge List</PrettyLink>
            <PrettyLink theme={linkStyles} to="/settings">Settings</PrettyLink>
            <PrettyLink theme={linkStyles} to="/admin">Admin Panel</PrettyLink>
            <PrettyLink theme={linkStyles} to="/error">Error Boundaries</PrettyLink>
            <Link style={linkStyles} to="/cancellation">Request</Link>
            <Link style={linkStyles} to="/specialization">Specialization</Link>
            <Link style={linkStyles} to="/oauth/login" >OAuth</Link>
            <Link style={linkStyles} to="/movies">Movies</Link>
            <Link style={linkStyles} to="/backgrounds">Backgrounds</Link>
            <Link style={linkStyles} to="/accordions">Accordions</Link>
          </nav>
          <button type="button" onClick={toggleTheme}>Toggle Theme</button>
        </div>

        <ThemeContext.Provider value={{theme: currentTheme, toggleTheme: toggleTheme}}>
          <Suspense fallback={<div>Component is loading</div>}>
            <Switch>
              <Route path="/formik/:id" component={FormikForm}/>
              <Route path="/redux_form/:id" component={ReduxForm}/>
              <Route path="/list" component={List}/>
              <Route path="/huge-list" component={HugeList}/>
              <Route path="/settings" component={Settings}/>
              <Route path="/error" render={(routeProps) => (
                <Boundary>
                  <ErrorBoundary/>
                </Boundary>
              )}/>
              <Route
                path="/admin"
                render={renderProps => (
                  (currentRole === 'admin')
                    ? <Admin {...renderProps} />
                    : <Redirect to='/' />
                )}
              />
              <Route path="/cancellation" component={RequestCancellation} />
              <Route path="/specialization" component={ModalsPage} />
              <Route path="/oauth/login" component={Login} />
              <Route path="/oauth/callback" component={LoginCallback} />
              <Route path="/movies" component={Movies} />
              <Route path="/backgrounds" component={Backgrounds} />
              <Route path="/accordions" component={Accordions} />
              <Route path="/" component={Home} />
            </Switch>
          </Suspense>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = state => ({
  currentRole: get(getCurrentUser(state), 'role', 'guest'),
})

export default connect(mapStateToProps)(Router)
