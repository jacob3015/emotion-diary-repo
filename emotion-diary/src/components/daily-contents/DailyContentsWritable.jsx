import "./DailyContents.css";
import {useEffect, useRef} from "react";
import {TITLE} from "../../constants/index.js";

const DailyContentsWritable = ({written, write}) => {
    const writableRef = useRef(null);

    useEffect(() => {
        const writable = writableRef.current;

        const autoResize = (elem) => {
            elem.style.height = "auto";
            elem.style.height = elem.scrollHeight + "px";
        };

        autoResize(writable);

        const inputHandler = () => autoResize(writable);
        writable.addEventListener("input", inputHandler);

        return () => writable.removeEventListener("input", inputHandler);
    }, []);

    return (
        <div className="daily-contents">
            <div className="title writable">{TITLE.DAILY.CONTENTS}</div>
            <textarea ref={writableRef}
                      className="contents writable"
                      placeholder="..."
                      onChange={(e) => write(e.target.value)}
                      value={written}/>
        </div>
    );
};

export default DailyContentsWritable;