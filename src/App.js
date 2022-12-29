import './App.css';
import { BrowserRouter } from "react-router-dom";
import ColorRoutes from "./ColorRoutes";
// import NavLinks from "./Nav";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ColorRoutes />
                {/* <NavLinks /> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
