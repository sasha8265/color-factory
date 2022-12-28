import './App.css';
import { BrowserRouter } from "react-router-dom";
import ColorRoutes from "./ColorRoutes";
import NavBar from "./Nav";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <ColorRoutes />
            </BrowserRouter>
        </div>
    );
}

export default App;
