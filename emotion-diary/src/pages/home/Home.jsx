import "./Home.css";
import Button from "../../components/buttons/Button.jsx";
import {ChevronDown, EditNote} from "../../components/icons/index.js";
import DailyCard from "../../components/daily-card/DailyCard.jsx";
import NavigationHome from "../../components/navigation/NavigationHome.jsx";
import {BUTTON} from "../../constants/index.js";
import {useQuery} from "@tanstack/react-query";
import dailyService from "../../service/DailyService.js";
import {useNavigate} from "react-router-dom";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";

const Home = () => {
    const navigate = useNavigate();

    /**
     * limitation for year and month, its final
     */
    const limits = useMemo(() => {
        const now = new Date();
        return {
            minYear: 1970,
            maxYear: now.getFullYear(),
            minMonth: 1,
            maxMonth: now.getMonth() + 1,
        };
    }, []);

    /**
     * converts year and month to index, its function
     */
    const toIndex = useCallback((year, month) => {
        return year * 12 + month - 1;
    }, []);

    /**
     * converts index to year and month, its function
     */
    const toYearMonth = useCallback((index) => {
        return {
            year: Math.floor(index / 12),
            month: index % 12 + 1,
        };
    }, []);

    /**
     * minimum index of year and month, its final
     */
    const minIndex = useMemo(() => toIndex(limits.minYear, limits.minMonth), [limits, toIndex]);

    /**
     * maximum index of year and month, its final
     */
    const maxIndex = useMemo(() => toIndex(limits.maxYear, limits.maxMonth), [limits, toIndex]);

    /**
     * year and month, its state
     */
    const [yearMonth, setYearMonth] = useState(() => {
        const date = new Date();
        return { year: date.getFullYear(), month: date.getMonth() + 1};
    });

    const { data } = useQuery({
        queryKey: ["dailies", yearMonth.year, yearMonth.month],
        queryFn: () => dailyService.findAll(yearMonth.year, yearMonth.month),
    });

    /**
     * formatted year and month
     */
    const formattedYearMonth = useMemo(() => {
        return `${yearMonth.year}-${String(yearMonth.month).padStart(2, '0')}`
    }, [yearMonth]);

    /**
     * fetch data when year and month updated
     */
    useEffect(() => {
        // console.log(formattedYearMonth);
    }, [formattedYearMonth]);

    /**
     * sum for delta, its reference
     */
    const pending = useRef(0);

    /**
     * update year and month when pending delta exits, its function
     */
    const flush = useCallback(() => {
        const deltaSnapped = pending.current;
        if (!deltaSnapped) return;

        pending.current = 0;
        setYearMonth(({year, month}) => {
            const currentIdx = toIndex(year, month);
            const nextIdx = Math.max(minIndex, Math.min(maxIndex, currentIdx + deltaSnapped));
            return toYearMonth(nextIdx);
        });
    }, [minIndex, maxIndex, toIndex, toYearMonth]);

    /**
     * request animation frame id, its reference
     */
    const rafId = useRef(0);

    /**
     * clean rafId, its cleaning effect
     */
    useEffect(() => {
        return () => {
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
                rafId.current = 0;
            }
        };
    }, []);

    /**
     * request flush to next frame animation, its function
     */
    const scheduleFlush = useCallback(() => {
        if (rafId.current) return;
        rafId.current = requestAnimationFrame(() => {
            rafId.current = 0;
            flush();
        });
    }, [flush]);

    /**
     * add delta to its reference and schedule flush, its function that handles on click event
     */
    const shiftMonths = useCallback((delta) => {
        pending.current += delta;
        scheduleFlush();
    }, [scheduleFlush]);

    /**
     * flag for disable the buttons, its flag
     */
    const currIdx = toIndex(yearMonth.year, yearMonth.month);

    return (
        <div className="home">
            <NavigationHome shiftMonths={shiftMonths}
                            yearMonth={yearMonth}
                            currIdx={currIdx}
                            minIdx={minIndex}
                            maxIdx={maxIndex}/>
            <div className="top-buttons">
                <Button text={BUTTON.SORT.LATEST} icon={<ChevronDown className={"size-48"}/>}/>
                <Button icon={<EditNote className={"size-48"}/>}
                        text={BUTTON.MOVE_PAGE.CREATE}
                        isLeading={true}
                        className={"button with-icon wide"}
                        onClick={() => navigate("/new")}/>
            </div>
            <div className="daily-card-group">
                {
                    Array.isArray(data) && data.map((daily) => {
                        return <DailyCard key={daily.id} daily={daily}/>;
                    })
                }
            </div>
        </div>
    );
}

export default Home