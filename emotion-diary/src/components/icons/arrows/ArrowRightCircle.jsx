import Icon from "../Icon.jsx";

const ArrowRightCircle = ({
                              title = "arrow right circle",
                              className = "icon arrow-right-circle",
                              isDecoration = false
                         }) => {
    return (
        <Icon title={title} className={className} isDecoration={isDecoration}>
            <path d="M24 32L32 24M32 24L24 16M32 24H16M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
    );
}

export default ArrowRightCircle;