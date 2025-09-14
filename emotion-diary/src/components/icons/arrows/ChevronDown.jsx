import Icon from "../Icon.jsx";

/**
 * Chevron down
 *
 * <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
 * <path d="M12 18L24 30L36 18" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
 * </svg>
 *
 * @param title
 * @param className
 * @param isDecoration
 * @returns {JSX.Element}
 * @constructor
 */
const ChevronDown = ({
                         title = "chevron down",
                         className = "icon chevron-down",
                         isDecoration = false,
                     }) => {
    return (
        <Icon title={title} className={className} isDecoration={isDecoration}>
            <path d="M12 18L24 30L36 18" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
    );
}

export default ChevronDown;