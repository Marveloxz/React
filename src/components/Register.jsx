import React, { Component } from "react"

class Register extends Component {
    render() {
        return (
<div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <h2 className="title">Registration Form</h2>
              <form method="POST">
                <div className="row row-space">
                  <div className="col-12">
                    <div className="input-group">
                      <label className="label">Username</label>
                      <input className="input--style-4" type="text" name="username" />
                    </div>
                  </div>
                  </div>
                  <div className="row row-space">
                  <div className="col-12">
                    <div className="input-group">
                      <label className="label">Email</label>
                      <input className="input--style-4" type="text" name="email" />
                    </div>
                  </div>
                  </div>
                  <div className="row row-space">
                  <div className="col-12">
                    <div className="input-group">
                      <label className="label">Password</label>
                      <input className="input--style-4" type="text" name="password" />
                    </div>
                  </div>
                  </div>

                <div className="p-t-15">
                  <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        )
    }
}

export default Register