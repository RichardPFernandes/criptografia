import Encriptar from "./components/Encriptar";
import Decriptar from "./components/Descriptar.jsx";

const App = () => {
    return (
        <div className="App">
            <h1>Cryptography App</h1>
            <Encriptar />
            <Decriptar />
        </div>
    );
};

export default App;
