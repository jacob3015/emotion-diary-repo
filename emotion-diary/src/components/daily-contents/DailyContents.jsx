import "./DailyContents.css";
import {TITLE} from "../../constants/index.js";

const DailyContents = ({content}) => {
    return (
        <div className="daily-contents">
            <div className="title">{TITLE.DAILY.CONTENTS}</div>
            <div className="contents">{content}</div>
        </div>
    );
};

export default DailyContents;