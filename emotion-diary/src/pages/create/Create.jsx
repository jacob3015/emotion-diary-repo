import "./Create.css";
import NavigationWritable from "../../components/navigation/NavigationWritable.jsx";
import DailyContentsWritable from "../../components/daily-contents/DailyContentsWritable.jsx";
import DailyEmotionSelectable from "../../components/daily-emotion/DailyEmotionSelectable.jsx";
import {useMemo, useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import dailyService from "../../service/DailyService.js";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);
    const [written, setWritten] = useState("");

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: dailyService.create,
        onSuccess: async (created) => {
            queryClient.setQueryData(["daily", created.id], created);
            await queryClient.invalidateQueries({queryKey: ["dailies"]});
            navigate("/home");
        }
    });

    const create = () => {
        if (!selected || !written) return;

        mutation.mutate({
            emotion: selected,
            content: written,
        });
    }

    const today = useMemo(() => {
        const date = new Date();
        return {
            year: date.getFullYear(),
            month: String(date.getMonth() + 1).padStart(2, '0'),
            day: String(date.getDate()).padStart(2, '0')
        };
    }, []);

    const selectEmotion = (emotion) => {
        setSelected(emotion);
    }

    const writeContents = (contents) => {
        setWritten(contents);
    }

    return (
        <div className="create">
            <NavigationWritable date={today} upsert={create}/>
            <DailyEmotionSelectable selected={selected} select={selectEmotion}/>
            <DailyContentsWritable written={written} write={writeContents}/>
        </div>
    );
};

export default Create;