import React from 'react'

const SignIn = () => {
  return (
    <div>
    <div class="container-fluid">
      <div class="row vertical-center">
          <form class="col-xs-8 col-xs-offset-2  col-sm-6 col-sm-offset-3 col-md-4 col-sm-offset-4 col-lg-2 col-lg-offset-5">
            <h1>Sign In</h1>
            <p>
              <label class="sr-only" for="">Email Address</label>
              <input class="form-control" type="email" placeholder="Email Address" required autofocus/>
            </p>
            <p>
              <label class="sr-only" for="">Password</label>
              <input class="form-control" type="email" placeholder="Password" required/>
            </p>
            <p class="checkbox">
              <label><input type="checkbox"/>Remember Me</label>
            </p>
            <button class="btn btn-primary btn-block" type="sumbit">Sign In</button>
          </form>
      </div>
    </div>
    </div>
  )
}

export default SignIn
