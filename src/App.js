import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from 'components/sidebar/sidebar'
import Content from 'components/content'
import Player from 'components/player'

import styles from 'assets/styles/app.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <div className={styles.main}>
          <Sidebar />
          <Content />
        </div>
        <Player />
      </Router>
    </div>
  )
}

export default App
