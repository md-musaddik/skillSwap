import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";


const HomeLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <main className="min-h-screen w-11/12 mx-auto">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;