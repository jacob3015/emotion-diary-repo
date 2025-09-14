import {Outlet, ScrollRestoration} from "react-router-dom";
import Footer from "../components/footer/Footer.jsx";
import {ArrowUp} from "../components/icons/index.js";
import Button from "../components/buttons/Button.jsx";
import ScrollTopOnPush from "../app/ScrollTopOnPush.jsx";

const Layout = () => {

    return (
        <div>
            <Outlet/>
            <Footer/>
            <Button icon={<ArrowUp className={"size-48"}/>}
                    className={"button go-to-top"}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}/>
            <ScrollRestoration/>
            <ScrollTopOnPush/>
        </div>
    );
};

export default Layout;