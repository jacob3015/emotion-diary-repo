import {useLocation, useNavigationType} from "react-router-dom";
import {useEffect} from "react";

const ScrollTopOnPush = () => {
    const location = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        if (navigationType === "POP" || location.hash) return;
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
    }, [location, navigationType]);
};

export default ScrollTopOnPush;