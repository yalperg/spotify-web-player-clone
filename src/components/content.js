import { Switch, Route } from "react-router-dom"
import styles from 'assets/styles/content.module.scss'

const Content = () => {
  return ( 
    <div className={styles.content}>
      <Switch>
        <Route exact path="/">Home</Route>
        <Route  path="/search">Search</Route>
        <Route  path="/collection/playlists">Playlists</Route>
        <Route  path="/create">Create</Route>
        <Route  path="/collection/tracks">Liked Songs</Route>
      </Switch>
    </div>
   )
}
 
export default Content