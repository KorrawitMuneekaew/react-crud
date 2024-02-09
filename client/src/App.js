import User from './User';
import Navbar from './Navbar';
import { Routes, Route,  } from 'react-router-dom';
import UserCreate from './UserCreate';
import UserUpdate from './UserUpdate';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<User />}/>
        <Route path="create" element={<UserCreate />} />
        <Route path="update/:id" element={<UserUpdate/>}  />
      </Routes>
    </div>
  );
}

export default App;
