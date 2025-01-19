import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EditProfile from "./Components/EditeProfileComponent/EditProfile";
import LogInForm from "./Components/LogInForm/LogInForm";
import "./App.css";
import "./index.css";

function App() {
    return (
        <Router>
            <div className="App">
                {/* Navigation Links */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Edit Profile</Link>
                        </li>
                        <li>
                            <Link to="/login">Log In</Link>
                        </li>
                    </ul>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<EditProfile />} />
                    <Route path="/login" element={<LogInForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
