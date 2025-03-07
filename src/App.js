import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Teambuilder from './Pages/Teambuilder';
import Teamviewer from './Pages/Teamviewer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Teambuilder/>}/>
        <Route path="/Teamviewer" element={<Teamviewer/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;