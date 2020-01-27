import React from 'react';

import ThemeContext from '../contexts/themeContext';

const Settings = () => {
  return (
    <div>
      <h5>Settings</h5>
      <p>A lot of checkboxes an buttons...</p>
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

export default Settings
