import logo from "./logo.svg";
import "./App.css";
import PasswordGenerator from "./modules/PasswordGenerator";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <h1 className="card-title text-center">Password Generator</h1>
                <PasswordGenerator />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
