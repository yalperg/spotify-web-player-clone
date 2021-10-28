export default function convert(value) {
  const min = Math.floor(value / 60)
  const sec = !(value % 60) ? '00' : (value % 60) < 10 ? `0${value % 60}` : value % 60
  
  return min + ':' + sec
}
