import './App.css';
import UserList from './components/UserList';
import UserCreate from './components/UserCreate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Edit from './components/Edit';





function App() {
  return (
    <div className="App">
     <h3 className ="app-name"> User Management App</h3>
     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/create-user" element={<UserCreate/>} />
        <Route path="/edit-user/:id" element={<Edit/>} />
        {/* <Route path="/users" component={Users} /> */}
      </Routes>
    </BrowserRouter>

   

   
 
    </div>
  );
}

export default App;
