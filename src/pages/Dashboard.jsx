import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Dashboard() {
    return (
        <>
            <Header />
            <section className='container-fluid '>
                <div class="w-100 d-block pb-4 pb-sm-5 mb-md-1"></div>
                <div class="container">

                    <div class="row justify-content-center booking-types-container">

                        <div class="col-12 col-lg-11">

                            <div class="d-flex flex-wrap align-items-center">
                                <h1 class="h3 fw-bold d-inline me-3 mb-0">Booking types</h1>

                                <div class="col-12 col-xl mt-4 mt-xl-0">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap">

                                        <a href="" class="btn btn-outline-primary mb-3 mb-md-0">+ Create new booking type</a>

                                        <div class="mb-3 mb-md-0">
                                            <a class="btn btn-outline-secondary me-2 mb-2 mb-md-0" data-bs-target="#embed-booking-page-modal" href="" role="button" data-bs-toggle="modal">
                                                Embed booking page <div class="icon-info ms-1">?</div>
                                            </a>
                                            <a href="" class="btn btn-outline-secondary mb-2 mb-md-0" target="_blank">View your bookings page ↗</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-100 d-block mb-md-5 pb-3 pb-sm-2 pb-xl-4"></div>

                            <div class="row flex-wrap justify-content-start gx-lg-5 gx-xl-4 gx-xxl-5">
                                <div class="col-12 col-md-6 col-xl-4 mb-4 pb-xxl-3">
                                    <div class="shadow rounded-3">
                                        <div class="px-4 pt-4">
                                            <h2 class="h5 fw-bold mb-4 line-clamp line-clamp-3">
                                                15 Minute Meeting
                                            </h2>
                                            <div class="d-flex justify-content-between border-bottom pb-1 mb-3 flex-wrap">
                                                <a href="" class="small text-decoration-none fw-bold text-truncate col target-blank" target="_blank">
                                                    /15-minute-meeting
                                                </a>
                                                <input style={{ opacity: '0', fontSize: '1px', top: '50px', left: '50px', position: 'absolute' }} type="text" value="" />
                                                <button id="" class="btn btn-link btn-sm text-decoration-none p-0 ms-4">Copy link</button>
                                            </div>

                                            <form>
                                                <input type="hidden" name="" value="" />
                                                <div class="form-check form-switch mb-3">
                                                    <input class="form-check-input" type="checkbox" />
                                                    <label class="form-check-label small" >Booking is OFF</label>
                                                </div>
                                            </form>

                                            <div class="d-flex flex-wrap mb-2">


                                                <div class="col-12 col-sm-6 d-flex align-items-center mb-2">
                                                    <div style={{ width: '25px' }}>
                                                        <img class="d-inline-block" src="https://assets.tidycal.com/img/icon-clock.svg" alt="Duration" />
                                                    </div>
                                                    <div>
                                                        <small>15 minutes</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border-top px-4">
                                            <div class="w-100 d-block"></div>
                                            <div class="gradient-white-top gradient-white-bottom">
                                                <div class="pt-3 pb-4 btype-description-container">
                                                    <div class="btype-description-preview">
                                                        Book a meeting with me for 15 minutes!
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="px-4 py-2 border-top d-flex align-items-center justify-content-between flex-wrap">
                                            <div class="text-secondary me-3 py-2">Share:</div>
                                            <div class="col d-flex justify-content-between align-items-center">
                                                <a href="" target="_blank">
                                                    <img class="my-2 mx-2" src="https://assets.tidycal.com/img/share-icon-message.svg" alt="Share as a message" />
                                                </a>
                                                <a href="" target="_blank">
                                                    <img class="my-2 mx-2" src="https://assets.tidycal.com/img/share-icon-email.svg" alt="Share as an email" />
                                                </a>
                                                <a href="" target="_blank">
                                                    <img class="my-2 mx-2" src="https://assets.tidycal.com/img/share-icon-linkedin.svg" alt="Share on linkedin" />
                                                </a>
                                                <a href="" target="_blank">
                                                    <img class="my-2 mx-2" src="https://assets.tidycal.com/img/share-icon-facebook.svg" alt="Share on facebook" />
                                                </a>
                                                <a href="" target="_blank" >
                                                    <img class="my-2 mx-2" src="https://assets.tidycal.com/img/share-icon-twitter.svg" alt="Share on twitter" />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="px-4 py-3 border-top d-flex justify-content-between">
                                            <a role="button" data-bs-toggle="modal" class="text-decoration-none d-block text-secondary me-3">
                                                Embed on Website
                                            </a>
                                            <a role="button" data-bs-toggle="modal" class="text-decoration-none d-block text-secondary">
                                                Embed in Email
                                            </a>
                                        </div>
                                        <div class="px-4 py-3 border-top">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="col text-start">
                                                    <form class="d-inline">
                                                        <input type="hidden" />
                                                        <button type="button" class="btn btn-link text-danger text-decoration-none text-secondary w-auto p-0" style={{ margin: 'auto 0 auto auto' }}>Delete
                                                        </button>
                                                    </form>
                                                </div>

                                                <div class="col text-center">
                                                    <a href="" class="text-decoration-none d-block">Clone</a>
                                                </div>

                                                <div class="col text-end">
                                                    <a href="" class="text-decoration-none d-block">Edit</a>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="modal fade" id="embed-booking-page-modal" tabindex="-1" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="d-flex pt-3 pe-3 justify-content-end">
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="px-4 pb-4">
                                                <h1 class="h4 fw-light border-bottom pb-3 mb-3">
                                                    Embed this booking page on your website
                                                </h1>
                                                <div class="mb-4">
                                                    <p class="mb-3">Copy the code below and paste inside your website's HTML files:</p>
                                                    <textarea class="form-control font-monospace" rows="4" style={{ fontSize: '.8rem' }} readonly="">&lt;div class="tidycal-embed" data-path="ramprakashsuthr2014/15-minute-meeting"&gt;&lt;/div&gt;
                                                        &lt;script src="https://assets.tidycal.com/js/embed.js" async&gt;&lt;/script&gt;</textarea>
                                                </div>
                                                <div class="d-flex justify-content-center">
                                                    <button class="btn btn-outline-primary mx-2" data-bs-dismiss="modal">Close</button>
                                                    <button class="btn btn-primary mx-2" type="button">Copy Code</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal fade p-0" id="embed-on-email-modal-457906" tabindex="-1" aria-hidden="true">
                                    <div class="modal-dialog modal-fullscreen">
                                        <div class="modal-content overflow-auto">
                                            <div class="sticky-top bg-white">
                                                <div class="d-flex pt-3 pe-3 justify-content-end">
                                                    <button class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ zIndex: '9999' }}></button>
                                                </div>
                                                <div class="border-bottom px-4 mt-n4">
                                                    <h1 class="h6 small mb-2">Embed booking options to an email</h1>
                                                    <div class="text-secondary pb-3 lh-1"><small>Booking type: <i>15 Minute Meeting</i></small></div>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="p-0">
                                                    <iframe class="w-100 email-bookings-selector" style={{ minHeight: 'calc(100vh - 6rem)', overflow: 'hidden', height: '0px' }} src="" scrolling="no"></iframe>
                                                </div>
                                                <div class="d-flex justify-content-center p-3 d-none">
                                                    <button class="btn btn-outline-secondary border-0 mx-2" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-xl-4 mb-4 pb-xxl-3">
                                    <div class="shadow rounded-3">
                                        <div class="px-4 pt-4">
                                            <h2 class="h5 fw-bold mb-4 line-clamp line-clamp-3">
                                                30 Minute Meeting
                                            </h2>
                                            <div class="d-flex justify-content-between border-bottom pb-1 mb-3 flex-wrap">
                                                <a href="" class="small text-decoration-none fw-bold text-truncate col target-blank" target="_blank">
                                                    /30-minute-meeting
                                                </a>
                                                <input style={{ opacity: '0', fontSize: '1px', top: '50px', left: '50px', position: 'absolute' }} type="text" value="" />
                                                <button class="btn btn-link btn-sm text-decoration-none p-0 ms-4">Copy link</button>
                                            </div>

                                            <form>
                                                <input type="hidden" name="_token" />
                                                <div class="form-check form-switch mb-3">
                                                    <input class="form-check-input" type="checkbox" />
                                                    <label class="form-check-label small" for="check457907 ">Booking is OFF</label>
                                                </div>
                                            </form>

                                            <div class="d-flex flex-wrap mb-2">


                                                <div class="col-12 col-sm-6 d-flex align-items-center mb-2">
                                                    <div style={{ width: '25px' }}>
                                                        <img class="d-inline-block" src="https://assets.tidycal.com/img/icon-clock.svg" alt="Duration" />
                                                    </div>
                                                    <div>
                                                        <small>30 minutes</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border-top px-4">
                                            <div class="w-100 d-block"></div>
                                            <div class="gradient-white-top gradient-white-bottom">
                                                <div class="pt-3 pb-4 btype-description-container">
                                                    <div class="btype-description-preview">
                                                        Book a meeting with me for 30 minutes!
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="px-4 py-2 border-top d-flex align-items-center justify-content-between flex-wrap">
                                            <div class="text-secondary me-3 py-2">Share:</div>
                                            <div class="col d-flex justify-content-between align-items-center">
                                                <a href="" target="_blank" >
                                                    <img class="my-2 mx-2" src="https://assets.tidycal.com/img/share-icon-message.svg" alt="Share as a message" />
                                                </a>
                                                <a href="" target="_blank">
                                                    <img class="my-2 mx-2" src="https://assets.tidycal.com/img/share-icon-email.svg" alt="Share as an email" />
                                                </a>
                                                <a href="" target="_blank" >
                                                    <img class="my-2 mx-2" src="https://assets.tidycal.com/img/share-icon-linkedin.svg" alt="Share on linkedin" />
                                                </a>
                                                <a href="" target="_blank">
                                                    <img class="my-2 mx-2" src="https://assets.tidycal.com/img/share-icon-facebook.svg" alt="Share on facebook" />
                                                </a>
                                                <a href="" target="_blank" >
                                                    <img class="my-2 mx-2" src="https://assets.tidycal.com/img/share-icon-twitter.svg" alt="Share on twitter" />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="px-4 py-3 border-top d-flex justify-content-between">
                                            <a role="button" data-bs-toggle="modal" data-bs-target="#embed-on-website-modal-457907" class="text-decoration-none d-block text-secondary me-3" onclick="gtag('event', 'click', {'event_label': 'embed_booking_type_modal'})">
                                                Embed on Website
                                            </a>
                                            <a role="button" data-bs-toggle="modal" data-bs-target="#embed-on-email-modal-457907" class="text-decoration-none d-block text-secondary" onclick="">
                                                Embed in Email
                                            </a>
                                        </div>
                                        <div class="px-4 py-3 border-top">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="col text-start">
                                                    <form class="d-inline" method="post" action="https://tidycal.com/dashboard/booking-types/457907/delete">
                                                        <input type="hidden" />
                                                        <button type="button" class="btn btn-link text-danger text-decoration-none text-secondary w-auto p-0" style={{ margin: 'auto 0 auto auto' }}>Delete
                                                        </button>
                                                    </form>
                                                </div>

                                                <div class="col text-center">
                                                    <a href="" class="text-decoration-none d-block">Clone</a>
                                                </div>

                                                <div class="col text-end">
                                                    <a href="" class="text-decoration-none d-block">Edit</a>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="modal fade" id="embed-on-website-modal-457907" tabindex="-1" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="d-flex pt-3 pe-3 justify-content-end">
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="px-4 pb-4">
                                                <h1 class="h4 fw-light border-bottom pb-3 mb-3">
                                                    Embed this booking page on your website
                                                </h1>
                                                <div class="mb-4">
                                                    <p class="mb-3">Copy the code below and paste inside your website's HTML files:</p>
                                                    <textarea class="form-control font-monospace" rows="4" style={{ fontSize: '0.8rem' }} readonly="">&lt;div class="tidycal-embed" data-path="ramprakashsuthr2014/30-minute-meeting"&gt;&lt;/div&gt;
                                                        &lt;script src="https://assets.tidycal.com/js/embed.js" async&gt;&lt;/script&gt;</textarea>
                                                </div>
                                                <div class="d-flex justify-content-center">
                                                    <button class="btn btn-outline-primary mx-2" data-bs-dismiss="modal">Close</button>
                                                    <button class="btn btn-primary mx-2" type="button">Copy Code</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal fade p-0" id="embed-on-email-modal-457907" tabindex="-1" aria-hidden="true">
                                    <div class="modal-dialog modal-fullscreen">
                                        <div class="modal-content overflow-auto">
                                            <div class="sticky-top bg-white">
                                                <div class="d-flex pt-3 pe-3 justify-content-end">
                                                    <button class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{zIndex:'9999'}}></button>
                                                </div>
                                                <div class="border-bottom px-4 mt-n4">
                                                    <h1 class="h6 small mb-2">Embed booking options to an email</h1>
                                                    <div class="text-secondary pb-3 lh-1"><small>Booking type: <i>30 Minute Meeting</i></small></div>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="p-0">
                                                    <iframe class="w-100 email-bookings-selector" style={{ minHeight: 'calc(100vh - 6rem)', overflow: 'hidden', height: '0px' }} src="" scrolling="no"></iframe>
                                                </div>
                                                <div class="d-flex justify-content-center p-3 d-none">
                                                    <button class="btn btn-outline-secondary border-0 mx-2" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-xl-4 mb-4 pb-xxl-3">
                                    <div class="shadow rounded-3">
                                        <div class="px-4 pt-4">
                                            <h2 class="h5 fw-bold mb-4 line-clamp line-clamp-3">
                                                60 Minute Meeting
                                            </h2>
                                            <div class="d-flex justify-content-between border-bottom pb-1 mb-3 flex-wrap">
                                                <a href="" class="small text-decoration-none fw-bold text-truncate col target-blank" target="_blank">
                                                    /60-minute-meeting
                                                </a>
                                                <input style={{ opacity: '0', fontSize: '1px', top: '50px', left: '50px', position: 'absolute' }} type="text" value="" />
                                                <button class="btn btn-link btn-sm text-decoration-none p-0 ms-4" >Copy link</button>
                                            </div>

                                            <form >
                                                <input type="hidden" />
                                                <div class="form-check form-switch mb-3">
                                                    <input class="form-check-input" type="checkbox" />
                                                    <label class="form-check-label small" for=" ">Booking is OFF</label>
                                                </div>
                                            </form>

                                            <div class="d-flex flex-wrap mb-2">

                                                <div class="col-12 col-sm-6 d-flex align-items-center mb-2">
                                                    <div style={{ width: '25px' }}>
                                                        <img class="d-inline-block" src="https://assets.tidycal.com/img/icon-clock.svg" alt="Duration" />
                                                    </div>
                                                    <div>
                                                        <small>1 hour</small>
                                                    </div>
                                                </div>

                                                <div class="col-12 col-sm-6 d-flex align-items-center mb-2">
                                                    <div style={{ width: '25px' }}>
                                                        <img class="d-inline-block" src="https://assets.tidycal.com/img/icon-money.svg" alt="Price" />
                                                    </div>
                                                    <div>
                                                        <small>$60.00  </small>
                                                    </div>
                                                </div>




                                            </div>


                                        </div>

                                        <div class="border-top px-4">
                                            <div class="w-100 d-block"></div>
                                            <div class="gradient-white-top gradient-white-bottom">
                                                <div class="pt-3 pb-4 btype-description-container">
                                                    <div class="btype-description-preview">
                                                        Book a meeting with me for 60 minutes!
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="px-4 py-2 border-top d-flex align-items-center justify-content-between flex-wrap">
                                            <div class="text-secondary me-3 py-2">Share:</div>
                                            <div class="col d-flex justify-content-between align-items-center">
                                                <a href="" target="_blank">
                                                    <img class="my-2 mx-2" src="https://assets.tidycal.com/img/share-icon-message.svg" alt="Share as a message" />
                                                </a>
                                                <a href="" target="_blank">
                                                    <img class="my-2 mx-2" src="https://assets.tidycal.com/img/share-icon-email.svg" alt="Share as an email" />
                                                </a>
                                                <a href="" target="_blank">
                                                    <img class="my-2 mx-2" src="https://assets.tidycal.com/img/share-icon-linkedin.svg" alt="Share on linkedin" />
                                                </a>
                                                <a href="" target="_blank" >
                                                    <img class="my-2 mx-2" src="https://assets.tidycal.com/img/share-icon-facebook.svg" alt="Share on facebook" />
                                                </a>
                                                <a href="" target="_blank" >
                                                    <img class="my-2 mx-2" src="https://assets.tidycal.com/img/share-icon-twitter.svg" alt="Share on twitter" />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="px-4 py-3 border-top d-flex justify-content-between">
                                            <a role="button" data-bs-toggle="modal" class="text-decoration-none d-block text-secondary me-3" >
                                                Embed on Website
                                            </a>
                                            <a role="button" data-bs-toggle="modal" class="text-decoration-none d-block text-secondary">
                                                Embed in Email
                                            </a>
                                        </div>
                                        <div class="px-4 py-3 border-top">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="col text-start">
                                                    <form class="d-inline" >
                                                        <input type="hidden" />
                                                        <button type="button" class="btn btn-link text-danger text-decoration-none text-secondary w-auto p-0" style={{ margin: 'auto 0 auto auto' }}>Delete
                                                        </button>
                                                    </form>
                                                </div>

                                                <div class="col text-center">
                                                    <a href="" class="text-decoration-none d-block">Clone</a>
                                                </div>

                                                <div class="col text-end">
                                                    <a href="" class="text-decoration-none d-block">Edit</a>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="modal fade" tabindex="-1" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="d-flex pt-3 pe-3 justify-content-end">
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="px-4 pb-4">
                                                <h1 class="h4 fw-light border-bottom pb-3 mb-3">
                                                    Embed this booking page on your website
                                                </h1>
                                                <div class="mb-4">
                                                    <p class="mb-3">Copy the code below and paste inside your website's HTML files:</p>
                                                    <textarea class="form-control font-monospace" rows="4" style={{fontSize: '.8rem'}} id="copy-embed-code-457908" readonly="">&lt;div class="tidycal-embed" data-path="ramprakashsuthr2014/60-minute-meeting"&gt;&lt;/div&gt;
                                                        &lt;script src="https://assets.tidycal.com/js/embed.js" async&gt;&lt;/script&gt;</textarea>
                                                </div>
                                                <div class="d-flex justify-content-center">
                                                    <button class="btn btn-outline-primary mx-2" data-bs-dismiss="modal">Close</button>
                                                    <button class="btn btn-primary mx-2" type="button" >Copy Code</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal fade p-0" tabindex="-1" aria-hidden="true">
                                    <div class="modal-dialog modal-fullscreen">
                                        <div class="modal-content overflow-auto">
                                            <div class="sticky-top bg-white">
                                                <div class="d-flex pt-3 pe-3 justify-content-end">
                                                    <button class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ zIndex: '9999' }}></button>
                                                </div>
                                                <div class="border-bottom px-4 mt-n4">
                                                    <h1 class="h6 small mb-2">Embed booking options to an email</h1>
                                                    <div class="text-secondary pb-3 lh-1">
                                                        <small>Booking type: <i>60 Minute Meeting</i></small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="p-0">
                                                    <iframe class="w-100 email-bookings-selector" style={{ minHeight: 'calc(100vh - 6rem)', overflow: 'hidden', height: '0px' }} src="" scrolling="no"></iframe>
                                                </div>
                                                <div class="d-flex justify-content-center p-3 d-none">
                                                    <button class="btn btn-outline-secondary border-0 mx-2" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
    )
}
