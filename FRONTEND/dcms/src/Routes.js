import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import EventsPage from './Components/EventsPage';
import AdminPage from './Components/AdminPage';
import MembersPage from './Components/AdminFunctions/MembersPage';
import MTypePage from './Components/AdminFunctions/MTypePage';
import AdminFunctionsPage from './Components/AdminFunctionsPage';
import InsertMTypePage from './Components/AdminFunctions/InsertMTypePage';

import UpdateMTypePage from './Components/AdminFunctions/UpdateMTypePage';

import UsersPage from './Components/AdminFunctions/UsersPage';

import InstructorsPage from './Components/AdminFunctions/InstructorsPage';
import UpdateInstructorsPage from './Components/AdminFunctions/UpdateInstructorsPage';  
import InsertInstructorsPage from './Components/AdminFunctions/InsertInstructorsPage';
import InsertMembersPage from './Components/AdminFunctions/InsertMembersPage';
import UpdateMembersPage from './Components/AdminFunctions/UpateMembersPage';
import Gallery from './Components/LandingPageComponents/Gallery';
import ContactUs from './Components/LandingPageComponents/ContactForm';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/adminfunctions" element={<AdminFunctionsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/mtype" element={<MTypePage />} />
        <Route path="/insertmtype" element={<InsertMTypePage />} />
        <Route path='/updatemtype/:id' element={<UpdateMTypePage />} />
        <Route path="/instructors" element={<InstructorsPage />} />
        <Route path='/updateinstructors/:id' element={<UpdateInstructorsPage />} /> 
        <Route path="/insertinstructors" element={<InsertInstructorsPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/insertmembers" element={<InsertMembersPage />} />
        <Route path='/updatemembers/:id' element={<UpdateMembersPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

