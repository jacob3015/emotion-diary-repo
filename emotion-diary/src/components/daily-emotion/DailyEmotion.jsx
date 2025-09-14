import "./DailyEmotion.css";
import {Anger, Anxiety, Disgust, Joy, Sadness} from "../icons/index.js";
import {TITLE} from "../../constants/index.js";

const DailyEmotion = ({emotion}) => {
    const isJoy = emotion === "joy";
    const isAnger = emotion === "anger";
    const isSadness = emotion === "sadness";
    const isAnxiety = emotion === "anxiety";
    const isDisgust = emotion === "disgust";

    return (
        <div className="daily-emotion">
            <div className="title">{TITLE.DAILY.EMOTION}</div>
            <div className={`emotion-image ${emotion}`}>
                { isJoy && <Joy className={"size-128 color-yellow"}/> }
                { isAnger && <Anger className={"size-128 color-red"}/> }
                { isSadness && <Sadness className={"size-128 color-blue"}/> }
                { isAnxiety && <Anxiety className={"size-128 color-purple"}/> }
                { isDisgust && <Disgust className={"size-128 color-green"}/> }
            </div>
        </div>
    );
};

export default DailyEmotion;