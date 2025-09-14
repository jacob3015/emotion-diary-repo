import Icon from "../Icon.jsx";

const Joy = ({
                 title = "joy",
                 className = "icon joy",
                 isDecoration = false
             }) => {
    return (
        <Icon title={title} className={className} isDecoration={isDecoration}>
            <circle cx="24" cy="24" r="20" fill="currentColor" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 7c4-4 14-4 20 0c-5-1-10 0-15 2" fill="#2E6EE6" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="16.5" cy="22" r="2.2" fill="#111" />
            <circle cx="31.5" cy="22" r="2.2" fill="#111" />
            <path d="M14 29q10 8 20 0" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38 12l2 3l3 2l-3 2l-2 3l-2-3l-3-2l3-2z" fill="#ffffff" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
    );
}

export default Joy;