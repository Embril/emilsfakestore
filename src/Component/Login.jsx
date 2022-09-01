import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { authenticateFailed, authenticateSuccess } from '../redux/action'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Login = () => {
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState()
  const [failedAuthentication, setFailedAuthentication] = useState()
  const state = useSelector((state) => state.handleActions)

  const dispatch = useDispatch()

  const authenticate = async () => {
    try {
      // const response = await fetch('https://fakestoreapi.com/auth/login', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     username: userName,
      //     password: password,
      //   }),
      // })
      if (userName == 'emil' && password == 'emil')
        dispatch(authenticateSuccess('Emil'))
      else dispatch(authenticateFailed('Wrong Password'))
    } catch (error) {
      console.warn(error)
      dispatch(authenticateFailed('Wrong Password'))
    }
  }
  console.log(state)
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div
                className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5"
                style={{ textAlign: 'center' }}
              >
                <form style={{ width: '23rem' }}>
                  <h3
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: '1px' }}
                  >
                    Log in
                  </h3>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example18"
                      className="form-control form-control-lg"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <label className="form-label" for="form2Example18">
                      Username
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example28"
                      className="form-control form-control-lg"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="form-label" for="form2Example28">
                      Password
                    </label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-info btn-lg btn-block"
                      type="button"
                      onClick={() => authenticate()}
                    >
                      Login
                    </button>
                  </div>
                  {state.errorMessage && (
                    <span style={{ color: 'red' }}>{state.errorMessage}</span>
                  )}

                  {state.loginSuccess && state.userDisplayName && (
                    <span style={{ color: 'green' }}>
                      Hi, {state.userDisplayName}
                    </span>
                  )}

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-muted" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <p>
                    Don't have an account?{' '}
                    <Link to="/register" className="btn btn-outline-dark">
                      <i className="fa "></i> Register
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block  ">
              <img
                src="https://images.ctfassets.net/rxqefefl3t5b/6I2vL9f0IVsDQ8qFgdrxH7/7660c4bab3116a4a04025d5c4802efa5/Virgin-Red-online-shopping-offers.jpg"
                alt="Login image"
                className="w-100 vh-100"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'left',
                  width: '50%',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Login
