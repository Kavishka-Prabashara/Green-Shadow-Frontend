import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

export default function Navbar() {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    return (
        <nav className="bg-green-700 text-white p-4 flex justify-between">
            <div className="flex gap-4">
                <Link to="/" className="font-bold">GreenShadow</Link>
                <Link to="/crop">Crop</Link>
                <Link to="/vehicle">Vehicle</Link>
                <Link to="/equipment">Equipment</Link>
                <Link to="/field">Field</Link>
                <Link to="/user">User</Link>
            </div>
            <div>
                {user ? (
                    <button
                        onClick={() => dispatch(logout())}
                        className="bg-red-500 px-3 py-1 rounded"
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <Link to="/login" className="mr-3">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
}
