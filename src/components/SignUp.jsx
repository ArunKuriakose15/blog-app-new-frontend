import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()

    const [input, setInput] = new useState(
        {
            name: "",
            age: "",
            phone: "",
            address: "",
            pincode: "",
            email: "",
            password: ""
        }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3001/api/blog/signup", input).then((response) => {
            console.log(response.data)

            if (response.data.status == "success") {
                alert("Registration Success")
                navigate("/")
            }
            else {
                alert("Something went wrong ...")
                setInput(
                    {
                        name: "",
                        age: "",
                        phone: "",
                        address: "",
                        pincode: "",
                        email: "",
                        password: ""
                    }
                )
            }
        })
    }
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <h1>Registration</h1>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" name="age" value={input.price} onChange={inputHandler} />

                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Address</label>
                                <input type="text" className="form-control" name="address" value={input.address} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Pincode</label>
                                <input type="text" className="form-control" name="pincode" value={input.pincode} onChange={inputHandler} />

                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />

                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" value={input.password} onChange={inputHandler} />

                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-primary" onClick={readValues}>Submit</button>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <Link to='/'>Back To Login </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp