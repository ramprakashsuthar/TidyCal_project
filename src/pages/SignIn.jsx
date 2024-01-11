import React from 'react'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <>
            <section className='container-fluid '>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <div class="text-center w-100 mt-4 mb-4 mt-md-4 mb-md-5 fw-light h5">
                                <a class="tc-logo-nav tidycalLogo ms-0 ms-md-1 d-inline-block" href="https://tidycal.com" aria-label="TidyCal"></a>

                            </div>

                            <form>
                                <input type="hidden" name="" value="" />
                                <div class="card justify-content-start">
                                    <div class="p-3 border-bottom">
                                        <h1 class="h3 fw-light mb-0 text-center">Login</h1>
                                    </div>
                                    <div class="p-3 p-sm-4">
                                        <div class="mb-4">
                                            <label for="email" class="form-label fw-bold">Your email:</label>
                                            <input type="email" name="email" id="email" class="form-control" autocomplete="email" required="" autofocus=""/>
                                        </div>
                                        <div class="mb-4">
                                            <label for="password" class="form-label fw-bold">Your password:</label>
                                            <input type="password" name="password" id="password" class="form-control" autocomplete="current-password" required=""/>
                                        </div>
                                        <div class="mb-4">
                                            <div class="form-check">
                                                <input class="form-check-input" name="remember" type="checkbox" id="remember_me"/>
                                                    <label class="form-check-label" for="remember_me">
                                                        Remember me
                                                    </label>
                                            </div>
                                        </div>

                                        <Link to={'/dashboard'} type="submit" class="btn btn-primary w-100 mb-3">Login →</Link>

                                        <div class="d-flex align-items-center mb-3">
                                            <div class="col pt-1 mb-1 border-bottom"></div>
                                            <div class="text-secondary fst-italic mx-3 small">Or:</div>
                                            <div class="col pt-1 mb-1 border-bottom"></div>
                                        </div>

                                        <a class="btn border-primary w-100 mb-4">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <img height="23" class="me-3" src="https://tidycal.com/img/integration-logo-google.png"/>
                                                    <span class="">Login with Google</span>
                                                    <div aria-hidden="true"></div>
                                            </div>
                                        </a>

                                        <div class="d-flex align-items-center justify-content-between flex-wrap">
                                            <a class="my-2 small text-decoration-none me-3">
                                                Forgot your password?
                                            </a>

                                            <a class="my-2 small text-decoration-none">Not registered?</a>
                                        </div>

                                    </div>


                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
  )
}
