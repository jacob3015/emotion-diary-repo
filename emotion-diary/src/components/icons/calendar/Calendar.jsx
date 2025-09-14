import Icon from "../Icon.jsx";

/**
 * Calendar
 *
 * <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
 * <path d="M32.5 4V12M16.5 4V12M6.5 20H42.5M10.5 8H38.5C40.7091 8 42.5 9.79086 42.5 12V40C42.5 42.2091 40.7091 44 38.5 44H10.5C8.29086 44 6.5 42.2091 6.5 40V12C6.5 9.79086 8.29086 8 10.5 8Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
 * </svg>
 *
 * @param title
 * @param className
 * @param isDecoration
 * @returns {JSX.Element}
 * @constructor
 */
const Calendar = ({
                      title = "calendar",
                      className = "icon calendar",
                      isDecoration = false,
                  }) => {
    return (
        <Icon title={title} className={className} isDecoration={isDecoration}>
            <path d="M32.5 4V12M16.5 4V12M6.5 20H42.5M10.5 8H38.5C40.7091 8 42.5 9.79086 42.5 12V40C42.5 42.2091 40.7091 44 38.5 44H10.5C8.29086 44 6.5 42.2091 6.5 40V12C6.5 9.79086 8.29086 8 10.5 8Z" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
    );
}

export default Calendar;