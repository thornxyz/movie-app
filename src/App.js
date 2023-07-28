import React from 'react';
import { HashRouter, Routes,Route  } from 'react-router-dom';
import NavbarWrapper from './NavbarWrapper';

import Home from './pages/home';
import Location from './pages/location';
import User from './pages/user';
import Ticket from './pages/ticket';
import Phase1Page from './pages/phases/phase1';
import Phase2Page from './pages/phases/phase2';
import Phase3Page from './pages/phases/phase3';
import Phase4Page from './pages/phases/phase4';

function App() {
  return (
    <HashRouter>
      <NavbarWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/user" element={<User />} />
          <Route path="/phase1" element={<Phase1Page />} />
          <Route path="/phase2" element={<Phase2Page />} />
          <Route path="/phase3" element={<Phase3Page />} />
          <Route path="/phase4" element={<Phase4Page />} />
        </Routes>
      </NavbarWrapper>
    </HashRouter>
  );
}

export default App;
