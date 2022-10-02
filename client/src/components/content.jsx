import { useState, useRef } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'

import Profile from 'views/profile'
import Search from 'views/search'
import Playlist from 'views/playlist'
import Home from 'views/home'
import Artists from 'views/top-artists'
import Tracks from 'views/top-tracks'

import Header from 'components/header/header'

import styles from 'assets/styles/layout/content.module.scss'

const Content = () => {
  const [opacity, setOpacity] = useState()
  const [bg, setBg] = useState({
    default: '#121212',
    pages: '#121212',
    home: '#393639',
  })
  const ref = useRef()
  const location = useLocation()

  const bgColor = location.pathname === '/' ? bg.home : bg.pages
  const background = {
    background: `linear-gradient(to bottom, ${bgColor}, ${bg.default}, ${bg.default}, ${bg.default})`,
  }
  
  const scrollHandler = () => {
    let cord = (ref.current.scrollTop / 190).toFixed(2)

    if (Number(cord) > 1) {
      setOpacity(1)
    } else {
      setOpacity(Number(cord))
    }
  }

  return (
    <div
      ref={ref}
      style={background}
      className={styles.content}
      onScroll={scrollHandler}>
      <Header opacity={opacity} bgColor={bgColor} />
      <Switch>
        <Route exact path='/'>
          <Home
            bg={bg}
            setBg={setBg}
          />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route exact path='/collection'>
          <Redirect to='/collection/top-artists' />
        </Route>
        <Route path='/collection/top-artists'>
          <Artists />
        </Route>
        <Route path='/collection/top-tracks'>
          <Tracks />
        </Route>
        <Route path='/user/:id'>
          <Profile />
        </Route>
        <Route path='/playlist/:id'>
          <Playlist />
        </Route>
      </Switch>
    </div>
  )
}

export default Content
