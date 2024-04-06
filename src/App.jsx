import "./App.css";
import NavbarComp from "./components/reusable/orgComp/NavbarComp";
import CreateEventForm from "./pages/CreateEventForm";
import Login from "./pages/Login";
import OrganizerEvents from "./pages/OrganizerEvents";
import OrganizerHome from "./pages/OrganizerHome";
import Signup from "./pages/Signup";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
