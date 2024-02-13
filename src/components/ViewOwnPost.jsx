import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewOwnPost = () => {
    const [input, setInput] = new useState(
        {
            userId: sessionStorage.getItem("userId")
        }
    )
    const [output, setOutput] = useState([]);

    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3001/api/post/viewown", input).then((response) => {
            setOutput(response.data)
            console.log(response.data)

        })
    }
    useEffect(() => { readValues() }, [])

    const deletePost = (id) => {
        let data = { "_id": id }
        axios.post("http://localhost:3001/api/post/delete",data).then((response)=>{
            if(response.data.status=="success"){
                alert("Post deleted")
                readValues()
            }
            else{
                alert("Something went wrong ...")
            }
        })
    }

    return (
        <div>

            <NavBar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {
                                output.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                            <div className="card">
                                                <div className="card-header">Post
                                                </div>
                                                <div className="card-body">
                                                    <blockquote className="blockquote mb-0">
                                                        <p>{value.post}</p>
                                                        <footer className="blockquote-footer"> </footer>
                                                    </blockquote>
                                                    <p className="card-text"><small>Posted on {value.postedDate}</small></p>
                                                    <button className="btn btn-danger" onClick={() => { deletePost(value._id) }} >Delete</button>
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

export default ViewOwnPost