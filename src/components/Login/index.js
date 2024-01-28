// Write your JS code here
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const {history} = props
  const onLogin = () => {
    Cookies.set(
      'jwt_token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y',
      {expires: 30},
    )
    history.replace('/')
  }
  return (
    <div className="aboutcontainer">
      <h1 className="aboutroute">Please Login</h1>
      <button type="button" className="samplepara" onClick={onLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login
