// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', error: false, errorMsg: ''}

  getUserInput = event => {
    this.setState({userName: event.target.value})
  }

  getUserPassword = event => {
    this.setState({password: event.target.value})
  }

  getSucces = () => {
    const {history} = this.props
    history.replace('/')
  }

  getFailure = msg => {
    this.setState({error: true, errorMsg: msg})
  }

  getSubmit = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const data = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
    }

    const response = await fetch(url, options)
    const responseData = await response.json()

    if (response.ok === true) {
      this.getSucces()
    } else {
      this.getFailure(responseData.error_msg)
    }
  }

  render() {
    const {userName, password, error, errorMsg} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="image"
          alt="website login"
        />
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="logoimage"
            alt="website logo"
          />
          <form onSubmit={this.getSubmit}>
            <div className="label-container">
              <label htmlFor="username" className="user">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="user-input"
                value={userName}
                onChange={this.getUserInput}
              />
            </div>
            <div className="label-container">
              <label htmlFor="password" className="user">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="user-input"
                value={password}
                onChange={this.getUserPassword}
              />
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            {error && <p>{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
