import React, { useState } from 'react';

const Forms = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userInfo, setUserInfo] = useState([]);

    const handleChange = (e, name) => {
        if (name === "firstName") {
            setFirstName(e.target.value);
        } else if (name === "email") {
            setEmail(e.target.value);
        } else if (name === "password") {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userObj = {
            firstName,
            email,
            password
        };
        setUserInfo(prevState => [...prevState, userObj]);
    };
    console.log(userInfo);

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div><input type='text' name='firstName' id='firstName' placeholder='Enter your first name' value={firstName} onChange={(e) => handleChange(e, "firstName")} /></div>
                    <div><input type='email' name='email' id='email' placeholder='enter your email' value={email} onChange={(e) => handleChange(e, "email")} /></div>
                    <div><input type='password' name='password' id='password' placeholder='enter your password' value={password} onChange={(e) => handleChange(e, "password")} /></div>
                    <div><button>Submit</button></div>
                    <hr />
                    <div className='usertext'>
                        {userInfo.map((eachUser, index) => (
                            <div key={index}>
                                <p>{eachUser.firstName}</p>
                                <p>{eachUser.email}</p>
                                <p>{eachUser.password}</p>
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Forms;
