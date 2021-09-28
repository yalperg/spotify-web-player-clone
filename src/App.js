import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from 'components/sidebar/sidebar'
import ResizeBar from 'components/sidebar/resizebar'

function App() {
  return (
    <Router>
      <ResizeBar>
        <Sidebar />
      </ResizeBar>
    </Router>
  )
}

export default App
