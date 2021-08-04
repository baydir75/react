import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      isEmailOK: false,
      emailStyle: "form-control is-invalid",
      isPasswordOK: false,
      passwordStyle: "form-control is-invalid",
      isDisabled: true,
      isSubmitted: false,
      display: "d-block",
      displayAlert: "d-none alert alert-success"
    }

    this.validateEmail = this.validateEmail.bind(this)
    this.validatePassword = this.validatePassword.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.sendForm = this.sendForm.bind(this)
  }


  validateEmail(e) {
    if (emailValidator.test(e.target.value)) {
      this.setState(prevState => {
        return {
          ...prevState,
          isEmailOK: true,
          emailStyle: "form-control is-valid"
        }

      })
      if (this.state.isPasswordOK === true) {
        this.setState(prevState => {
          return {
            ...prevState,
            isDisabled: false
          }
        })
      }
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          isEmailOK: false,
          emailStyle: "form-control is-invalid"
        }
      })
    }
  }

  validatePassword(e) {
    if (passwordValidator.test(e.target.value)) {
      this.setState(prevState => {
        return {
          ...prevState,
          isPasswordOK: true,
          passwordStyle: "form-control is-valid"
        }
      })
      if (this.state.is === true) {
        this.setState(prevState => {
          return {
            ...prevState,
            isDisabled: false
          }
        })
      }
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          isPasswordOK: false,
          passwordStyle: "form-control is-invalid"
        }
      })
    }
  }

  submitForm() {
    if (this.state.isEmailOK === true && this.state.isPasswordOK === true) {
      this.setState(prevState => {
        return {
          ...prevState,
          isDisabled: false
        }
      })
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          isDisabled: true
        }
      })
    }
  }

  sendForm(e) {
    if (this.state.isEmailOK === true && this.state.isEmailOK === true) {
    e.preventDefault();
    this.setState(prevState => {
      return {
        ...prevState,
        display: "d-none",
        displayAlert: "d-block alert alert-success",
      }
    })
  }
  }

  render() {
    return (

      <div >
        <form className={this.state.display} onSubmit={this.sendForm}>
          <label className="form-label">Email Address</label>
          <input className={this.state.emailStyle} onChange={this.validateEmail} type="text" name="emailAddress" />
          <label className="form-label">Password</label>
          <input className={this.state.passwordStyle} onChange={this.validatePassword} type="password" name="password" />
          <input type="submit" disabled={this.state.isDisabled} onClick={this.submitForm} className="bn btn-primary" value="Submit" />
        </form>
        <div className={this.state.displayAlert}>
          <p>Form submitted !</p>
        </div>
      </div>
    )
  }
}

export default App;