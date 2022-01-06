import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import EditUser from './pages/EditUser'; 

function App() {
  return (
     <Router>
       <div>
         <Navbar/>
         <Routes>
           <Route exact path="/" element={<Home/>} />
           <Route exact path="/user/add" element={<AddUser/>} />
           <Route exact path="/contact-me" element={<Contact/>} />
           <Route path="/user/edit" element={<EditUser/>}/>
           <Route path="*" element={<NotFound/>}/>
         </Routes>
         
       </div>
     </Router>
  );
}

export default App;
