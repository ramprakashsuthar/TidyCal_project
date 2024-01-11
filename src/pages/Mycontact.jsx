import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Mycontact() {
    return (
        <>
            <Header />
            <div class="w-100 d-block pb-4 pb-sm-5 mb-md-1"></div>
            <div class="container">
                <div class="row justify-content-center">

                    <div class="col-12 col-lg-11">

                        <div class="d-flex flex-wrap align-items-center">
                            <h1 class="h3 fw-bold d-inline me-3 mb-3 mb-md-0">Contacts <small class="text-secondary">0</small></h1>

                            <div class="col-12 col-md">
                                <div class="d-flex align-items-center justify-content-between justify-content-md-end flex-wrap">
                                    <div class="me-3">
                                        <form>
                                            <input type="text" class="form-control" placeholder="Search" name="s" value=""/>
                                        </form>
                                    </div>
                                    <a href="" class="btn btn-outline-primary">Export contacts</a>
                                </div>
                            </div>
                        </div>

                        <div class="w-100 d-block mb-2 mb-sm-4 pb-4"></div>

                        <div class="table-responsive mb-4">
                            <table class="table align-middle">
                                <thead>
                                    <tr>
                                        <th class="small fw-normal text-secondary border-0 border-bottom border-1 ps-0">Contact</th>
                                        <th class="small fw-normal text-secondary text-center">Bookings</th>
                                        <th class="small fw-normal text-secondary">Created</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody class="border-top">
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}
