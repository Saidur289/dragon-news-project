import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNav from "../layout/LeftNav";
import RightNav from "../layout/RightNav";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
           <Header></Header>
           <section className="w-11/12 mx-auto">
           <LatestNews></LatestNews>
           </section>
            </header>
            <nav className="w-11/12 mx-auto">
            <Navbar></Navbar>

            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap">
            <aside className="left col-span-3">
                <LeftNav></LeftNav>
            </aside>
            <section className="col-span-6">
                <Outlet></Outlet>
            </section>
            <aside className="right col-span-3">
                <RightNav></RightNav>
            </aside>

            </main>
        </div>
    );
};

export default HomeLayout;