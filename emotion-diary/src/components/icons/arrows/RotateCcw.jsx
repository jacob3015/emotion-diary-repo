import Icon from "../Icon.jsx";

/**
 * Rotate ccw
 *
 * <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
 * <path d="M2 7.9999V19.9999M2 19.9999H14M2 19.9999L11.28 11.2799C14.0418 8.52274 17.6249 6.73784 21.4894 6.19413C25.3538 5.65042 29.2903 6.37737 32.7057 8.26543C36.1211 10.1535 38.8303 13.1004 40.4252 16.6621C42.0202 20.2238 42.4144 24.2074 41.5484 28.0126C40.6825 31.8178 38.6034 35.2386 35.6243 37.7594C32.6452 40.2802 28.9275 41.7646 25.0314 41.9888C21.1354 42.2131 17.272 41.165 14.0233 39.0027C10.7747 36.8403 8.31679 33.6807 7.02 29.9999" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
 * </svg>
 *
 * @param title
 * @param className
 * @param isDecoration
 * @returns {JSX.Element}
 * @constructor
 */
const RotateCcw = ({
                       title = "rotate ccw",
                       className = "icon rotate-ccw",
                       isDecoration = false,
                 }) => {
    return (
        <Icon title={title} className={className} isDecoration={isDecoration}>
            <path d="M2 7.9999V19.9999M2 19.9999H14M2 19.9999L11.28 11.2799C14.0418 8.52274 17.6249 6.73784 21.4894 6.19413C25.3538 5.65042 29.2903 6.37737 32.7057 8.26543C36.1211 10.1535 38.8303 13.1004 40.4252 16.6621C42.0202 20.2238 42.4144 24.2074 41.5484 28.0126C40.6825 31.8178 38.6034 35.2386 35.6243 37.7594C32.6452 40.2802 28.9275 41.7646 25.0314 41.9888C21.1354 42.2131 17.272 41.165 14.0233 39.0027C10.7747 36.8403 8.31679 33.6807 7.02 29.9999" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
    );
}

export default RotateCcw;