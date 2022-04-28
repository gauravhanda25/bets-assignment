import React, { useState, useEffect } from "react";
import { BrowserRouter, useNavigate, Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import { toast } from "react-toastify";
import ToastUI from "bets-components/ToastUI/ToastUI.js";

const Login = () => {
    const navigate = useNavigate();
    const [formDetails, setFormDetails] = useState({
        email: "",
        password: "",
    });

    const mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const validateEmail = formDetails.email.match(mailformat);

    const loginUser = useStoreActions((actions) => actions.bets.loginUser);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails({
            ...formDetails,
            [name]: value,
        });
    };
    
    const login = async () => {
        if (formDetails.email === "") {
            toast.error(
                <ToastUI message={"Email is required"} type={"Error"} />,
                {
                    toastId: "toast-show",
                }
            );
            return false;
        }
        if (formDetails.password === "") {
            toast.error(
                <ToastUI message={"Password cannot be empty"} type={"Error"} />,
                {
                    toastId: "toast-show",
                }
            );
            return false;
        }
        let response = await loginUser(formDetails);
        if(response) {
            navigate('/home');
        }
    };

    return (
        <div className="container">
            <div className="form">
                <h1>Sign in</h1>
                <div className="form-content">
                    <div className="input-wrapper email-wrapper">
                        <input
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="text"
                            value={formDetails.email}
                            onChange={(e) => handleChange(e)}
                        />
                        {formDetails.email && !validateEmail && (
                            <>
                                <span className="error">
                                    Invalid email address
                                </span>
                            </>
                        )}
                    </div>
                    <div className="input-wrapper">
                        <input
                            id="password"
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={formDetails.password}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <br />
                    <div className={`button ${!validateEmail ? 'disable' : ''}`} onClick={validateEmail ? login : null}>
                        Log in
                    </div>
                    <br />
                    <div>
                        <Link to="/public-home" >Skip to Unauthenticated Home>></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Login);
