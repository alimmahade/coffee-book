import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-232px)]"></div>
      <Footer />
    </>
  );
};

export default MainLayout;
