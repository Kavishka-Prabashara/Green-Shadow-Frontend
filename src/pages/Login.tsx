import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/userSlice";
import api from "../api/axios.ts";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await api.post("/user/login", { email, password });
            dispatch(loginSuccess({ email: res.data.email }));
            alert("Login successful");
        } catch {
            alert("Login failed");
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-2xl mb-4 font-bold text-green-700">Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-green-600 text-white p-2 rounded">Login</button>
            </form>
        </div>
    );
};

export default Login;
