import "./Update.css";
import NavigationWritable from "../../components/navigation/NavigationWritable.jsx";
import DailyEmotionSelectable from "../../components/daily-emotion/DailyEmotionSelectable.jsx";
import DailyContentsWritable from "../../components/daily-contents/DailyContentsWritable.jsx";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import dailyService from "../../service/DailyService.js";
import {useNavigate, useParams} from "react-router-dom";
import {useMemo, useState} from "react";

const Update = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const {data} = useQuery({
        queryKey: ["daily", id],
        queryFn: () => dailyService.find(id),
        enabled: !!id,
        placeholderData: {id: id, emotion: null, content: null, createdAt: null, updatedAt: null}
    });

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: dailyService.update,
        onSuccess: async (updated) => {
            queryClient.setQueryData(["daily", id], updated);
            await queryClient.invalidateQueries({queryKey: ["dailies"]});
            navigate("/home");
        }
    });

    const update = () => {
        if (!selected || !written) return;

        mutation.mutate({
            id: id,
            emotion: selected,
            content: written,
        });
    }

    const [selected, setSelected] = useState(data.emotion);
    const select = (emotion) => {
        setSelected(emotion);
    }

    const [written, setWritten] = useState(data.content);
    const write = (content) => {
        setWritten(content);
    }

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
        <div className="update">
            <NavigationWritable date={date} upsert={update}/>
            <DailyEmotionSelectable selected={selected} select={select}/>
            <DailyContentsWritable written={written} write={write}/>
        </div>
    );
};

export default Update;