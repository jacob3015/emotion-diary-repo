import "./Detail.css";
import NavigationDetail from "../../components/navigation/NavigationDetail.jsx";
import DailyEmotion from "../../components/daily-emotion/DailyEmotion.jsx";
import DailyContents from "../../components/daily-contents/DailyContents.jsx";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import dailyService from "../../service/DailyService.js";
import {useMemo} from "react";

const Detail = () => {
    const {id} = useParams();

    const {data} = useQuery({
        queryKey: ["daily", id],
        queryFn: () => dailyService.find(id),
        enabled: !!id,
        placeholderData: {id: id, emotion: null, content: null, createdAt: null, updatedAt: null}
    });

    const date = useMemo(() => {
        if (!data.createdAt) {
            return {
                year: '1970',
                month: '01',
                day: '01'
            }
        }

        return {
            year: data.createdAt.substring(0, 4),
            month: data.createdAt.substring(5, 7),
            day: data.createdAt.substring(8, 10)
        }
    }, [data.createdAt]);

    return (
        <div className="detail">
            <NavigationDetail date={date} id={id}/>
            <DailyEmotion emotion={data.emotion}/>
            <DailyContents content={data.content}/>
        </div>
    );
};

export default Detail;