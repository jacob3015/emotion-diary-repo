import "./DailyEmotion.css";
import {Anger, Anxiety, Disgust, Joy, Sadness} from "../icons/index.js";
import {TITLE} from "../../constants/index.js";

const DailyEmotionSelectable = ({selected, select}) => {
    return (
        <div className="daily-emotion">
            <div className="title selectable">{TITLE.DAILY.EMOTION}</div>
            <div className="emotion-image-group">
                <label className={`emotion-image selectable disgust ${selected === 'disgust' ? 'selected' : ''}`}>
                    <input type="radio"
                           name="emotion"
                           value="disgust"
                           checked={selected === 'disgust'}
                           onChange={() => select('disgust')} hidden/>
                    <Disgust className={"size-128 color-green"}/>
                    <div className="title">{TITLE.EMOTION.DISGUST}</div>
                </label>
                <label className={`emotion-image selectable sadness ${selected === 'sadness' ? 'selected' : ''}`}>
                    <input type="radio"
                           name="emotion"
                           value="sadness"
                           checked={selected === 'sadness'}
                           onChange={() => select('sadness')} hidden/>
                    <Sadness className={"size-128 color-blue"}/>
                    <div className="title">{TITLE.EMOTION.SADNESS}</div>
                </label>
                <label className={`emotion-image selectable joy ${selected === 'joy' ? 'selected' : ''}`}>
                    <input type="radio"
                           name="emotion"
                           value="joy"
                           checked={selected === 'joy'}
                           onChange={() => select('joy')} hidden/>
                    <Joy className={"size-128 color-yellow"}/>
                    <div className="title">{TITLE.EMOTION.JOY}</div>
                </label>
                <label className={`emotion-image selectable anger ${selected === 'anger' ? 'selected' : ''}`}>
                    <input type="radio"
                           name="emotion"
                           value="anger"
                           checked={selected === 'anger'}
                           onChange={() => select('anger')} hidden/>
                    <Anger className={"size-128 color-red"}/>
                    <div className="title">{TITLE.EMOTION.ANGER}</div>
                </label>
                <label className={`emotion-image selectable anxiety ${selected === 'anxiety' ? 'selected' : ''}`}>
                    <input type="radio"
                           name="emotion"
                           value="anxiety"
                           checked={selected === 'anxiety'}
                           onChange={() => select('anxiety')} hidden/>
                    <Anxiety className={"size-128 color-purple"}/>
                    <div className="title">{TITLE.EMOTION.ANXIETY}</div>
                </label>
            </div>
        </div>
    );
};

export default DailyEmotionSelectable;