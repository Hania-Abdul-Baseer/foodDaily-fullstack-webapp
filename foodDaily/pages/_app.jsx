import "../pages/app.css";
import { FormHome } from "./forms/FormHome";
import Navbar from "./navbar/Navbar";
import Result from  "./result/Result"
import Footer from "./footer/footer"

export default function MyApp() {
  return (
    <>
      <Navbar />
      {/* <FormHome /> */}
      <Result></Result>
      <Footer></Footer>
    </>
  );
}
