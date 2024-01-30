import "./App.css";
import Nav from "./components/nav/nav";
import AboutDetails from "./components/aboutDetails";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element={ <Nav />}/>
           <Route path="/aboutDetails" element={<AboutDetails />} />
            <Route path="/" element={<Nav />} />
            

        </Routes>
    </div>
  );
}

export default App;
