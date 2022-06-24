
// import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

const Layout = ({ children }) => {
  return (
    <div className="">
      <>
        <Navbar2 />
        {children}
        {/* <Footer /> */}
      </>
    </div>
  );
};

export default Layout;
