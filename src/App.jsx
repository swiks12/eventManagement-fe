import "./App.css";
import AdminNav from "./components/admin/adminNav";
import NavbarComp from "./components/reusable/orgComp/NavbarComp";
import UserNav from "./components/user/UserNav";
import AdminHome from "./pages/AdminHome";
import AdminRequest from "./pages/AdminRequest";
import CreateEventForm from "./pages/CreateEventForm";
import Login from "./pages/Login";
import OrganizerEvents from "./pages/OrganizerEvents";
import OrganizerHome from "./pages/OrganizerHome";
import Signup from "./pages/Signup";
import UserEvent from "./pages/UserEvent";
import UserHome from "./pages/UserHome";
import Landing from "./pages/landing";
import IndividualEvent from "./pages/IndividualEvent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateEventForm from "./pages/updateEventForm";
import UserExplore from "./pages/UserExplore";
import Success from "./pages/Success";
import Attendee from "./pages/Attendee";
import PaymentOrg from "./pages/PaymentOrg";

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
          <Route path="attendee" element={<Attendee />}/>
          <Route path="payment" element={<PaymentOrg/>}/>
          <Route path="events" element={<OrganizerEvents />}/>
          <Route path="events/create" element={<CreateEventForm/>}/>
          <Route path="update/:id" element={<UpdateEventForm />}/>

          {/* <Route path="/Home" element={<OrganizerHome />}/> */}
          </Route>
          <Route path="/admin" element={<AdminNav />}>
          <Route path="home" element={<AdminHome />}/>
          <Route path="requests" element={<AdminRequest />}/>

          </Route>
          <Route path="/user" element={<UserNav />}>
          <Route path="home" element={<UserHome />}/>
          <Route path="events" element={<UserEvent />}/>
          <Route path="explore" element={<UserExplore />}/>
          <Route path="success/:id" element={<Success />}/>
          <Route path="events/:id" element={<IndividualEvent />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
