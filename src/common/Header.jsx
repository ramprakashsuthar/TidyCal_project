import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light p-lg-3">
                <div class="container-fluid">

                    <div class="d-flex align-items-center">
                        <Link to={'/dashboard'} class="tidycalLogoIcon tidycalLogo ms-0 ms-md-1 d-inline-block"></Link>
                    </div>

                    <button class="navbar-toggler border-0 px-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav justify-content-between align-items-center col text-center">
                            <div aria-hidden="true"></div>
                            <div class="d-flex flex-column flex-lg-row">
                                <Link to={'/dashboard'} class="nav-link small mx-2 active" aria-current="page" >Booking Types</Link >
                                <Link to={'/datepolls'} class="nav-link small mx-2 ">Date Polls</Link >
                                <Link to={'/mybooking'} class="nav-link small mx-2 ">My Bookings</Link >
                                <Link to={'/mycontact'} class="nav-link small mx-2 ">My Contacts</Link >
                                <div class="pb-3 mt-3 border-top d-lg-none"></div>
                                <a class="nav-link small mx-2 d-inline-block d-lg-none " href="">Settings</a>
                                <a class="nav-link small mx-2 d-inline-block d-lg-none " href="">Integrations</a>
                                <a class="nav-link small mx-2 d-inline-block d-lg-none " href="">Directory</a>
                                <a class="nav-link small mx-2 d-inline-block d-lg-none" href="">Pricing</a>
                                <a class="nav-link small mx-2 d-inline-block d-lg-none" href="" target="_blank">Roadmap</a>
                                <a class="nav-link small mx-2 d-inline-block d-lg-none" href="" target="_blank">Feature requests</a>
                                <a class="nav-link small mx-2 d-inline-block d-lg-none" href="">Help</a>
                                <form method="POST" action="">
                                    <input type="hidden" name="_token" value="" />
                                    <a href="" class="nav-link small mx-2 d-inline-block d-lg-none">
                                        Logout
                                    </a>
                                </form>

                            </div>
                            <div class="d-flex flex-column flex-lg-row align-items-center">
                                <div class="mt-2 mb-3 my-lg-0">
                                    <a href="" class="small text-decoration-none" target="_blank"><strong>Upgrade $29 lifetime access!</strong></a>
                                </div>

                                <div class="d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-center ms-lg-3 mt-3 mt-lg-0 mb-0">

                                    <div class="d-flex flex-column flex-lg-row align-items-center position-relative">
                                        <div class="profilepic me-2 mb-2 mb-lg-0">
                                            <img src="https://www.gravatar.com/avatar/81fbaaead17eefcf2e2a058a6b01053a?d=404&amp;s=200" />
                                        </div>
                                        <a href="" class="stretched-link nav-link p-0">
                                            <div class="userName nav-username d-none d-lg-block text-truncate">Ramprakash</div>
                                            <div class="userName nav-username d-block d-lg-none">Ramprakash</div>
                                        </a>
                                    </div>
                                    <div class="d-flex align-items-center my-2 my-lg-0">

                                    </div>
                                </div>

                                <div class="ms-lg-3 small text-secondary position-relative reveal-child mb-3 mb-lg-0 d-flex align-items-center">

                                    <span class="text-tiny me-1">EARNINGS:</span> $0.00
                                    <div class="position-absolute rounded-3 border bg-white p-3 shadow reveal-child-child nav-earnings-banner">
                                        Use a chargeable booking type to start earning money with TidyCal.
                                    </div>

                                </div>

                                <div class="dropdown d-none d-lg-block">
                                    <button class="btn px-2 btn-outline-light border-0 ms-3" type="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-lg-end">
                                        <li><a class="dropdown-item" href="">Settings</a></li>
                                        <li><a class="dropdown-item" href="">Integrations</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="" target="_blank">Directory</a></li>
                                        <li><a class="dropdown-item" href="" target="_blank">Pricing</a></li>
                                        <li><a class="dropdown-item" href="" target="_blank">Roadmap</a></li>
                                        <li><a class="dropdown-item" href="" target="_blank">Feature requests</a></li>
                                        <li><a class="dropdown-item" href="">Help</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li>
                                            <form method="POST" action="">
                                                <input type="hidden" />
                                                <a href="" class="dropdown-item">
                                                    Logout
                                                </a>
                                            </form>
                                        </li>
                                    </ul>
                                </div>




                            </div>
                        </div>


                    </div>

                </div>
            </nav>
        </>
    )
}
