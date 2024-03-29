import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()

    const [input, setInput] = new useState(
        {
            email:"",
            password:""
        }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3001/api/blog/signin", input).then((response) => {
            console.log(response.data)

            if (response.data.status == "invalid user") {
                alert("Invalid Email")
                setInput(
                    {
                        email:"",
                        password:""
                    }
                )

            } else if(response.data.status == "invalid password") {
                alert("Invalid Password")
                setInput(
                    {
                        email:"",
                        password:""
                    }
                )
            }
            else{
                console.log(response.data.userData._id)
                sessionStorage.setItem("userId",response.data.userData._id)
                navigate("/add")
            }
            
        })
    }
    return (
        <div>


            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="card mb-3 cen glass" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Login</h5>
                                        <p className="card-text">
                                            <label htmlFor="" className="form-label">Email</label>
                                            <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                                        </p>
                                        <p className="card-text">
                                            <label htmlFor="" className="form-label">Password</label>
                                            <input type="password" className="form-control" name="password" value={input.password} onChange={inputHandler} />
                                        </p>
                                        <p className="card-text">
                                        <button className="btn btn-primary" onClick={readValues}>Login</button>
                                        </p>
                                        <p className="card-text">
                                        New User  <Link to="/signup"><small className="text-body-secondary" >Click Here</small></Link> 
                                            </p>
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

export default Login