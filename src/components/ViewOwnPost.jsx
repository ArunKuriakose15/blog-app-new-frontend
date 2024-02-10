import React from 'react'
import NavBar from './NavBar'

const ViewOwnPost = () => {
    return (
        <div>

            <NavBar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <div className="card">
                                    <div className="card-header">Post
                                    </div>
                                    <div className="card-body">
                                        <blockquote className="blockquote mb-0">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus tenetur quibusdam. Voluptas voluptatum aperiam ipsa eius quis fugit perspiciatis ratione unde, alias similique repudiandae sunt expedita! Nemo, consequatur minima.</p>
                                            <footer className="blockquote-footer"> </footer>
                                        </blockquote>
                                        <p className="card-text"><small>Posted on date</small></p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewOwnPost