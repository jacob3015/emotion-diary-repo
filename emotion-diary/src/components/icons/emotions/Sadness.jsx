import Icon from "../Icon.jsx";

const Sadness = ({
                     title = "sadness",
                     className = "icon sadness",
                     isDecoration = false
                 }) => {
    return (
        <Icon title={title} className={className} isDecoration={isDecoration}>
            <circle cx="24" cy="24" r="20" fill="currentColor" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="18" cy="22" r="6" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="30" cy="22" r="6" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="24" y1="22" x2="24" y2="22" stroke="#111" strokeWidth="2" />
            <line x1="12" y1="22" x2="6" y2="22" stroke="#111" strokeWidth="2" />
            <line x1="36" y1="22" x2="42" y2="22" stroke="#111" strokeWidth="2" />
            <circle cx="18" cy="22" r="2" fill="#111" />
            <circle cx="30" cy="22" r="2" fill="#111" />
            <path d="M14 33q10-6 20 0" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 28c2 2 0 4-1 6c3-1 4-4 1-6z" fill="#BBD4FF" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
    );
}

export default Sadness;