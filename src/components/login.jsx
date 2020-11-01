import React, { Component } from "react"
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {onUserLogin} from "../Action/authAction"


class Login extends Component {
  onButtonClick = () => {
      var username = this.refs.username.value
      var password = this.refs.pass.value 
      console.log(username,password)
      //alert('test')
      this.props.onUserLogin({username, password})
  }

  renderError = () => {
      if (this.props.error.length > 0) {
          return <p className="alert alert-danger">{this.props.error};</p>
      }
  }

  renderButton = () => {
      if (this.props.loading === true) {
          return (
              <div>
                  <i className="fa fa-spinner fa-spin"/>
              </div>
          )
      }
      return (
               <button onClick={this.onButtonClick}>
                                        Sign in
                </button>
        
      )
  }

    render() {
        if(this.props.email === ""){
            return (
                <div>
                    <div className="limiter">
                        <div className="container-login100">
                            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                                <form className="login100-form validate-form">
                                    <span className="login100-form-title p-b-33">
                                        Account Login
                  </span>
                                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                        <input className="input100" type="text" name="username" ref="username" placeholder="Username" />
                                        <span className="focus-input100-1" />
                                        <span className="focus-input100-2" />
                                    </div>
                                    <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                                        <input className="input100" type="password" name="pass" ref="pass" placeholder="Password" />
                                        <span className="focus-input100-1" />
                                        <span className="focus-input100-2" />
                                    </div>
                                    <div className="container-login100-form-btn m-t-20">
                                       {this.renderError()}
                                       {this.renderButton()}
                                    </div>
                                    <div className="text-center p-t-45 p-b-4">
                                        <span className="txt1">
                                            Forgot
                    </span>
                                        <a href="#" className="txt2 hov1">
                                            Username / Password?
                    </a>
                                    </div>
                                    <div className="text-center">
                                        <span className="txt1">
                                            Create an account?
                    </span>
                                        <a href="#" className="txt2 hov1">
                                            Sign up
                    </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
    
                </div>
            )
        }
        
        else if (this.props.email !== ""){
            return <Redirect to="/"/>
        }

    }
}

const mapStateToProps = (state) => {
    console.log(state.auth)
    return{
        username: state.auth.username,
        email: state.auth.email,
        error: state.auth.error

    }
}

export default connect(mapStateToProps,{onUserLogin})(Login)