import '../styles/alert.css'

const Alert = ({alert}) => {
  const { msg, error} = alert
  return (
    <div className={`alert ${error && 'alert-error'}`}>{msg}</div>
  )
}

export default Alert