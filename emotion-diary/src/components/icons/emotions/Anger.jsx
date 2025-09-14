import Icon from "../Icon.jsx";

const Anger = ({
                   title = "anger",
                   className = "icon anger",
                   isDecoration = false,
               }) => {
    return (
        <Icon title={title} className={className} isDecoration={isDecoration}>
            <rect x="8" y="14" width="32" height="28" rx="6" fill="currentColor" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 22l8-3M26 19l8 3" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="18" cy="25" r="2.2" fill="#111" />
            <circle cx="30" cy="25" r="2.2" fill="#111" />
            <rect x="14" y="32" width="20" height="8" fill="#fff" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="20" y1="32" x2="20" y2="40" stroke="#111" strokeWidth="2" />
            <line x1="28" y1="32" x2="28" y2="40" stroke="#111" strokeWidth="2" />
            <path d="M24 6c-3 3-4 6-2 9c2-2 4-2 6 0c2-3 1-6-4-9z" fill="#FF7A00" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
    );
}

export default Anger;