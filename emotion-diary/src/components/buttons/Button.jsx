import './Button.css'

const Button = ({
    className = 'button',
    icon,
    text,
    isLeading,
    isDisabled,
    onClick
                }) => {
    const hasIcon = !!icon;
    const hasText = !!text;

    return (
        <button className={className} onClick={onClick} disabled={isDisabled}>
            {/* icon + text */}
            {hasIcon && hasText ? (
                isLeading ? (
                    <>
                        <>{icon}</>
                        <>{text}</>
                    </>
                ) : (
                    <>
                        <>{text}</>
                        <>{icon}</>
                    </>
                )
            ) : hasIcon ? (
                /* icon only */
                <>{icon}</>
            ) : hasText ? (
                /* text only */
                <>{text}</>
            ) : null}
        </button>
    );
}

export default Button;