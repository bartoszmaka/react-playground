import React from 'react';
import { connect } from 'react-redux';

import ThemeContext from '../contexts/themeContext';
import { getCurrentUser } from '../redux/selectors/appState';
import { setCurrentUserRole } from '../redux/actions/appState';

const SELECTABLE_ROLES = ['user', 'admin']

const Settings = ({user, setCurrentUserRole}) => {
  const handleRoleSelect = event => {
    const { value } = event.target
    setCurrentUserRole(value)
  }

  return (
    <div>
      <h5>Settings</h5>
      <p>A lot of checkboxes and buttons...</p>

      <p>Current User:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <form>
        <label>
          Current Role:
          <select onChange={handleRoleSelect} value={user.role}>
            {SELECTABLE_ROLES.map(roleName => <option value={roleName}>{roleName}</option>)}
          </select>
        </label>
      </form>
      <ThemeContext.Consumer>
        {({toggleTheme}) => (
          <label>
            Dark Theme
            <button type="button" onClick={toggleTheme}>Toggle Theme</button>
          </label>
        )}
      </ThemeContext.Consumer>
    </div>
  )
}

const mapStateToProps = state => ({
  user: getCurrentUser(state)
})

const mapDispatchToProps = {
  setCurrentUserRole
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
