import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from 'components/sidebar/sidebar'
import Content from 'components/content'

function App() {
  return (
    <Router>
      <Sidebar />
      <Content />
    </Router>
  )
}

export default App
