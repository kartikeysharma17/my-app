import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState();
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert()
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "grey";
      document.getElementById("myBox").style.backgroundColor = "lightblue";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      document.getElementById("myBox").style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");



    }

  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">
          {/* <About/> */}
          <Routes>
            <Route path='/about' element={<About />} />

            <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyse " my-3 />
            } />

          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
