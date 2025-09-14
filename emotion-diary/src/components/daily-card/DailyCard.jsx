import "./DailyCard.css";
import Button from "../buttons/Button.jsx";
import {Anger, Anxiety, Disgust, Joy, Sadness} from "../icons/index.js";
import {useNavigate} from "react-router-dom";

const DailyCard = ({daily}) => {
    const navigate = useNavigate();

    const {id, emotion, content, createdAt} = daily;

    const isJoy = emotion === "joy";
    const isAnger = emotion === "anger";
    const isSadness = emotion === "sadness";
    const isAnxiety = emotion === "anxiety";
    const isDisgust = emotion === "disgust";

    return (
        <div className="daily-card">
            <div className={"card-image " + emotion}>
                { isJoy && <Joy className={"size-128 color-yellow"}/> }
                { isAnger && <Anger className={"size-128 color-red"}/> }
                { isSadness && <Sadness className={"size-128 color-blue"}/> }
                { isAnxiety && <Anxiety className={"size-128 color-purple"}/> }
                { isDisgust && <Disgust className={"size-128 color-green"}/> }
            </div>
            <div className="card-contents">
                <div className="title">{createdAt.substring(0, 10)}</div>
                <div className="content">{content}</div>
                <Button text={"보기"} onClick={() => navigate(`/${id}`)}/>
            </div>
        </div>
    );
}

export default DailyCard;