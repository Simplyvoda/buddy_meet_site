import { Landing } from "./components/Landing.js";
import { Users } from "./components/Users.js";
import { UserProfile } from "./components/UserProfile";
import { Error404 } from "./components/Error404.js";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Users/:UserId" element={<UserProfile/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>

  );
}

export default App;