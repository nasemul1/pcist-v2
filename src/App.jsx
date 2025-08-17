import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BlogList from './pages/BlogList'
import SingleBlog from './components/SingleBlog'
import UpcomingEvents from './pages/UpcomingEvents'
import ContestTracker from './pages/ContestTracker'
import Contact from './pages/Contact'
import Login from './pages/auth-folder/Login'
import Register from './pages/auth-folder/Register'
import EmailVerification from './pages/auth-folder/EmailVerification'
import AddInformation from './pages/auth-folder/AddInformation'
import OjHelp from './pages/auth-folder/OjHelp'
import Profile from './pages/Profile'
import SendForgotPassCode from './pages/auth-folder/SendForgotPassCode'
import VerifyForgotPassCode from './pages/auth-folder/VerifyForgotPassCode'
import AdminPanel from './pages/Admin-Panel/AdminPanel'
import AddEvent from './pages/Admin-Panel/AddEvent'
import ListEvents from './pages/Admin-Panel/ListEvents'
import Members from './pages/Admin-Panel/Members'
import RenewMembership from './pages/Admin-Panel/RenewMembership'
import Settings from './pages/Admin-Panel/Settings'

const App = () => {

  const location = useLocation();

  const hideNavbarRoutes = ['/login', '/register', '/mail-verify', '/add-information', '/oj-help', '/send-forgot-pass-code', '/verify-forgot-pass-code'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="mx-auto relative">
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        {/*<Route path='/blog' element={<BlogList />}></Route>*/}
        {/*<Route path='/blog/:id' element={<SingleBlog />}></Route>*/}
        <Route path='/events' element={<UpcomingEvents />}></Route>
        <Route path='/contest' element={<ContestTracker />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/mail-verify' element={<EmailVerification />}></Route>
        <Route path='/add-information' element={<AddInformation />}></Route>
        <Route path='/oj-help' element={<OjHelp />}></Route>
        <Route path='/send-forgot-pass-code' element={<SendForgotPassCode />}></Route>
        <Route path='/verify-forgot-pass-code' element={<VerifyForgotPassCode />}></Route>

        // admin
        <Route path="/admin-panel" element={<AdminPanel />}>
          <Route path="add" element={<AddEvent />} />
          <Route path="list" element={<ListEvents />} />
          <Route path="members" element={<Members />} />
          <Route path="renew" element={<RenewMembership />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      {!shouldHideNavbar && <Footer />}
    </div>
  )
}

export default App