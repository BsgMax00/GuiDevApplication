import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Teambuilder from './Pages/Teambuilder';
import TeamViewer from './Pages/TeamViewer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Teambuilder/>}/>
        <Route path="/TeamViewer" element={<TeamViewer/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;