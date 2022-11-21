// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const cls = isDarkTheme ? 'not-found' : ''
      const head = isDarkTheme ? 'head' : ''
      const para = isDarkTheme ? 'para' : ''
      return (
        <>
          <div className={cls}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={head}>Lost Your Way</h1>
            <p className={para}>We cannot seem to find the page</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
