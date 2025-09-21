import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/HomePage";
import User from "./pages/UserPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Crop from "./pages/CropPage";
import Vehicle from "./pages/VehiclePage";
import Equipment from "./pages/EquipmentPage";
import Field from "./pages/FieldPage";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<User />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/crop" element={<Crop />} />
                <Route path="/vehicle" element={<Vehicle />} />
                <Route path="/equipment" element={<Equipment />} />
                <Route path="/field" element={<Field />} />
            </Routes>
        </Router>
    );
}
