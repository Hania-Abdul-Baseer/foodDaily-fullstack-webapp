import "../pages/app.css";
import Footer from "./footer/Footer";
import { FormHome } from "./forms/FormHome";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";

export default function MyApp() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      {/* <FormHome /> */}
    </>
  );
}
