import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  toggleSubscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  renderAuthButton = () => {
    const {isSubscribe} = this.state

    return (
      <button onClick={this.toggleSubscribe} className="subscribe-btn">
        {isSubscribe ? 'Subscribed' : 'Subscribe'}
      </button>
    )
  }

  render() {
    return (
      <div className="bg-welcome-container">
        <h1 className="greeting-title">Welcome</h1>
        <p className="thankyou-greet">Thank you!Happy Learning</p>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default Welcome
