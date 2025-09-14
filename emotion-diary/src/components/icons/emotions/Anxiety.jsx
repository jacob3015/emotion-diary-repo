import Icon from "../Icon.jsx";

const Anxiety = ({
                  title = "anxiety",
                  className = "icon anxiety",
                  isDecoration = false,
              }) => {
    return (
        <Icon title={title} className={className} isDecoration={isDecoration}>
            <rect x="17" y="6" width="16" height="36" rx="8" fill="currentColor" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="21" cy="20" r="2" fill="#fff" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="29" cy="20" r="2" fill="#fff" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="21" cy="20" r="1" fill="#111" />
            <circle cx="29" cy="20" r="1" fill="#111" />
            <path d="M19 30l4 2l4-2l4 2" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 38l6-3l6 3l-6 3z" fill="#5D3D8B" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 12c4-4 8-6 10-6" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
    );
}

export default Anxiety;