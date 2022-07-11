import React from 'react';

function Login(props) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    }

    return (
        <div>
            <h1>Fitnesse</h1>
            <form action="userauth" method="post"></form>
                <div className='img'>
                    <h1>Login Content Img Here</h1>
                </div>
            <div className='container'>
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder='Enter username' name='uname' required></input>
                <label htmlFor="psw"><b>Password</b></label>
                <input type="text" placeholder='Enter password' name='psw' required></input>
                <button type="submit">Login</button>
                <label>
                    <p>Remember me</p>
                    <input type="checkbox" checked={checked} onChange={handleChange}></input> 
                </label>
            </div>
        </div>
    );
}

export default Login;