
// import Footer from "./Footer";

import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
  return (

    <>
      <div className="mx-auto max-w-[1920px] " >

        <Navbar />

        {children}
        <Footer />
      </div>
    </>

  );
};

export default Layout;
