import "./Navigation.css";
import {useMemo} from "react";
import Button from "../buttons/Button.jsx";
import {ArrowLeftCircle, ArrowRightCircle, Calendar} from "../icons/index.js";

/**
 * Navigation on home page
 */
const NavigationHome = ({shiftMonths, yearMonth, currIdx, minIdx, maxIdx}) => {
    /**
     * formatted year and month
     */
    const formattedYearMonth = useMemo(() => {
        return `${yearMonth.year}-${String(yearMonth.month).padStart(2, '0')}`
    }, [yearMonth]);


    return (
        <div className="navigation">
            <Button icon={<ArrowLeftCircle className={"size-48"}/>}
                    onClick={() => shiftMonths(-1)}
                    isDisabled={currIdx <= minIdx}/>
            <div className="title-contents">
                <div className="title">{formattedYearMonth}</div>
                <Calendar className={"size-48"}/>
            </div>
            <Button icon={<ArrowRightCircle className={"size-48"}/>}
                    onClick={() => shiftMonths(1)}
                    isDisabled={currIdx >= maxIdx}/>
        </div>
    );
};

export default NavigationHome;