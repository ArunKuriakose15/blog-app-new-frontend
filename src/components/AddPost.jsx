import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddPost = () => {
    const [input, setInput] = new useState(
        {
            post:""
        }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3001/api/post/add", input).then((response) => {
            console.log(response.data)

            if (response.data.status == "success") {
                alert("Posted")
            }
            else {
                alert("Something went wrong ...")
                setInput(
                    {
                        post:""
                    }
                )
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

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Post</label>
                                <input type="text" className="form-control" name="post" value={input.post} onChange={inputHandler} />

                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-danger" onClick={readValues}>ADD</button>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPost