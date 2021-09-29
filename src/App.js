import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from 'components/sidebar/sidebar'
import Content from 'components/content'
import Player from 'components/player'

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Content />
      </div>
      <Player />
    </Router>
  )
}

export default App
