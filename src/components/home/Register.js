import React from "react";
import "../../assets/css/register.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../action/action";


const Register = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formError, setFormError] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [success, setSuccess] = useState(false)
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
    })

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setFormError(() => (validate(credentials)))
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        setFormError(() => (validate(credentials)))
        setIsSubmit(true)
        if (Object.keys(formError).length === 0 && isSubmit) {
            dispatch(registerUser(credentials))
            setSuccess(true)
        }
    }

    useEffect(() => {
        if (success) {
            alert("Registered successfully!")
            navigate('/login')
        }
    }, [success])

    const validate = (value) => {

        const errors = {}
        const emailRegex = /^([a-z]+[\.-\d]*)@([a-z-]+)\.([a-z\-]{2,8})(\.[a-z]{2,8})?$/
        const passwordRegex = /^[a-zA-Z0-9]{8,20}$/
        const nameRegex = /^[a-zA-Z ]+$/
        const contactRegex = /^[6-9]{1}[0-9]{9}$/

        if (!value.username) {
            errors.username = "*Username is required"
        }
        else if (!nameRegex.test(value.username)) {
            errors.username = "*Name should contain only alphabets and space"
        }
        if (!value.email) {
            errors.email = "*Email is required"
        }
        else if (!emailRegex.test(value.email)) {
            errors.email = "*Invalid email"
        }
        if (!value.phone) {
            errors.phone = "*Contact is required"
        }
        else if (!contactRegex.test(value.phone)) {
            errors.phone = "*Contact should contain 10 digits and start with 6/7/8/9"
        }
        if (!value.password) {
            errors.password = "*Password is required"
        }
        else if (!passwordRegex.test(value.password)) {
            errors.password = "*Password should have max of 20 and min of 8 characters and no special characters"
        }
        if (!value.confirmPassword) {
            errors.confirmPassword = "*This field is required"
        }
        else if (value.password !== value.confirmPassword) {
            errors.confirmPassword = "*Confirm password does not match with the original password"
        }
        return errors
    }


    return (
        <div className="register">
            <h1>Register New User</h1>
            <div className="registerContainer">
                <form className="form">
                    <div className="registerItems">
                        <div className="registerItem">
                            <label> Username:</label>
                            <input type="text" name="username" value={credentials.username} onChange={(e) => handleChange(e)}  />
                            <span className="error">{formError.username}</span>
                        </div>
                        <div className="registerItem">
                            <label>Email:</label>
                            <input type="text" name="email" value={credentials.email} onChange={(e) => handleChange(e)} />
                            <span className="error">{formError.email}</span>
                        </div>
                        <div className="registerItem">
                            <label>Password:</label>
                            <input type="password" name="password" value={credentials.password} onChange={(e) => handleChange(e)}  />
                            <span className="error">{formError.password}</span>
                        </div>
                        <div className="registerItem">
                            <label>Confirm Password:</label>
                            <input type="password" name="confirmPassword" value={credentials.confirmPassword} onChange={(e) => handleChange(e)} />
                            <span className="error">{formError.confirmPassword}</span>
                        </div>
                        <div className="registerItem">
                            <label>Contact:</label>
                            <input type="number" name="phone" value={credentials.phone} onChange={(e) => handleChange(e)}  min={0} />
                            <span className="error">{formError.phone}</span>
                        </div>
                    </div>
                </form>
            </div >
            <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)} className="formSubmit">Submit</button>
            <button type="submit" value="Submit" onClick={() => navigate('/login')} className="goToLogin">Go to login</button>
        </div >
    )
}

export default Register;