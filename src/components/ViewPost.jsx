import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewPost = () => {
    const [data, setData] = new useState([])

    const getData = () => {
        axios.get("http://localhost:3001/api/post/viewall").then((response) => {
            setData(response.data)
        })
    }
    useEffect(() => { getData() }, [])
    return (
        <div>

            <NavBar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {
                                data.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                                            <div className="card">
                                                <div className="card-header">Post
                                                </div>
                                                <div className="card-body">
                                                    <blockquote className="blockquote mb-0">
                                                        <p>{value.post}</p>
                                                        <footer className="blockquote-footer">{value.userId.name}</footer>
                                                    </blockquote>
                                                    <p className="card-text"><small>Last updated at {value.postedDate}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewPost