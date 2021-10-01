import { useHistory } from 'react-router'
import { NextIcon } from 'assets/icons/icons'

const NextBtn = () => {
  const history = useHistory()

  const goForwardHandler = () => {
    history.goForward()
  }

  return (
    <button onClick={goForwardHandler}>
      <NextIcon />
    </button>
  )
}

export default NextBtn
