import React, {
  Component
} from `react`
import {
  login
} from `./UserFunctions`

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: ``,
      password: ``,

    }
    this.onChange = this.onChange.bimd(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()

    const User = {
      email: this.state.email,
      password: this.state.password
    }
  }
}