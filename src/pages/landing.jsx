import NavBar from "../components/landing/Navbar";
import Content from "../components/landing/contentLanding";

function Landing() {
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-tone to-pink-tone p-4">
        <NavBar />
        <Content />
      </div>
    </>
  );
}

export default Landing;
