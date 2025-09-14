import Icon from "../Icon.jsx";

const Disgust = ({
                     title = "disgust",
                     className = "icon disgust",
                     isDecoration = false,
                 }) => {
    return (
        <Icon title={title} className={className} isDecoration={isDecoration}>
            <circle cx="24" cy="20" r="18" fill="currentColor" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <ellipse cx="18" cy="20" rx="3" ry="2.2" fill="#fff" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <ellipse cx="30" cy="20" rx="4.5" ry="2.6" fill="#fff" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="18" cy="20" r="1.2" fill="#111" />
            <circle cx="30" cy="20" r="1.2" fill="#111" />
            <path d="M25 15l4-2M28 14l4-1M31 14l4 0" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 28q6 2 16-2" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 36h20l-10 10z" fill="#1B8A5A" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
    );
}

export default Disgust;