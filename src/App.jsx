import "./App.css";
import AdminNav from "./components/admin/adminNav";
import NavbarComp from "./components/reusable/orgComp/NavbarComp";
import UserNav from "./components/user/UserNav";
import AdminHome from "./pages/AdminHome";
import CreateEventForm from "./pages/CreateEventForm";
import Login from "./pages/Login";
import OrganizerEvents from "./pages/OrganizerEvents";
import OrganizerHome from "./pages/OrganizerHome";
import Signup from "./pages/Signup";
import UserHome from "./pages/UserHome";
import Landing from "./pages/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
        <Route path="/organizer" element={<NavbarComp />}>
          <Route path="home" element={<OrganizerHome />}/>
          <Route path="events" element={<OrganizerEvents />}/>
          <Route path="events/create" element={<CreateEventForm/>}/>
          {/* <Route path="/Home" element={<OrganizerHome />}/> */}
          </Route>
          <Route path="/admin" element={<AdminNav />}>
          <Route path="home" element={<AdminHome />}/>
          </Route>
          <Route path="/user" element={<UserNav />}>
          <Route path="home" element={<UserHome />}/>
          </Route>
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
