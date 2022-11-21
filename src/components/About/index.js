// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const head = isDarkTheme ? 'head' : ''
      const about = isDarkTheme ? 'about' : ''
      return (
        <div className={about}>
          <img src={imageUrl} alt="about" />
          <h1 className={head}>About</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
