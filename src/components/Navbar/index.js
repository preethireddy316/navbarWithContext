// Write your code here
/* eslint-disable react/no-unknown-property */
/* eslint-disable prettier/prettier */
// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const ul=isDarkTheme?"wite-text":"dark-text"
      
      const themeChange = () => {
        toggleTheme()
      }
      const nav = isDarkTheme ? 'nav' : ''
      return (
        <nav className={`k ${nav}`}>
          <img src={websiteLogo} alt="website logo" />
          <ul className="u">
            <li className="l">
              <Link className={ul} to="/">Home</Link>
            </li>
            <li>
              <Link className={ul} to="/about">About</Link>
            </li>
          </ul>
          <button type="button" testid="theme" onClick={themeChange} className="button1">
            <img src={themeUrl} alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
