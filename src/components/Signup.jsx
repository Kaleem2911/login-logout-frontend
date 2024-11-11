import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post('http://localhost:3000/api/auth/register', {
                username,
                email,
                password
            },
        {
            withCredentials: true
        }
        )
            navigate('/login')
        } catch (error) {
            setError("Registration failed")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-400 to-blue-500">
            <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-2xl">
                <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Sign Up</h2>
                {error && <p className="text-red-500 text-center mb-6 font-medium">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-base font-semibold text-gray-700 mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-base font-semibold text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-base font-semibold text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition ease-in-out duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-6 text-center text-base text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">Login</a>
                </p>
            </div>
        </div>
    )
}

export default Signup
