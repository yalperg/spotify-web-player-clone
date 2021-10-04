export default function getHours() {
  const date = new Date()
  const time = date.getHours()

  if(time >= 5 && time < 12) {
    return 'Good morning'
  } else if (time >= 12 && time <= 18) {
    return 'Good afternoon'
  } else {
    return 'Good evening'
  }
}