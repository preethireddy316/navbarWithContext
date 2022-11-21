// Write your code here
// Write your code here
import './index.css'
// Write your code here
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const head = isDarkTheme ? 'head' : ''
      const home = isDarkTheme ? 'home' : ''

      return (
        <div className={home}>
          <img src={imageUrl} alt="home" />
          <h1 className={head}>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
