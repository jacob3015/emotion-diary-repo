import Icon from "../Icon.jsx";

const ArrowLeftCircle = ({
                             title = "arrow left circle",
                             className = "icon arrow-left-circle",
                             isDecoration = false
                         }) => {
    return (
        <Icon title={title} className={className} isDecoration={isDecoration}>
            <path d="M24 16L16 24M16 24L24 32M16 24H32M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
    );
}

export default ArrowLeftCircle;