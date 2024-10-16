import  React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext)

    const handleCubmit = (e) => {
        e.preventDefault()
        setUser({ username, password });
    }


    return (
		<div>
			<h2>Login</h2>

			<input
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				type="text"
				plcaseholder="username"
			/>

			<br />

			<input
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type="text"
				plcaseholder="password"
			/>

			<br />

			<button onClick={handleCubmit}>Login</button>
		</div>
	);
}

export default Login