import "./Navigation.css";
import Button from "../buttons/Button.jsx";
import {EditNote, RotateCcw} from "../icons/index.js";
import {BUTTON} from "../../constants/index.js";
import {useNavigate} from "react-router-dom";

const NavigationDetail = ({id, date}) => {
    const navigate = useNavigate();

    return (
        <div className="navigation">
            <Button icon={<RotateCcw className={"size-48"}/>}
                    text={BUTTON.MOVE_PAGE.BACK}
                    isLeading={true}
                    onClick={() => navigate("/home")}/>
            <div className="title-contents">
                <div className="title">{date.year}년 {date.month}월 {date.day}일</div>
            </div>
            <Button text={BUTTON.MOVE_PAGE.UPDATE}
                    icon={<EditNote className={"size-48"}/>}
                    isLeading={false}
                    onClick={() => navigate(`/${id}/edit`)}/>
        </div>
    );
};

export default NavigationDetail;