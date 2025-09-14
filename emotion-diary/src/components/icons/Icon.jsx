import './Icon.css'

/**
 * Base component for svg icons
 *
 * @param {string} title - aria label
 * @param {string} className - style
 * @param {JSX.Element|JSX.Element[]} children - vector path
 * @param {boolean} isDecoration - decoration flag
 * @returns {JSX.Element}
 * @constructor
 */

const Icon = ({
                  title,
                  className,
                  children,
                  isDecoration
              }) => {
    const ariaProps = isDecoration
        ? { role: "presentation", "aria-hidden": "true" }
        : { role: "img", "aria-label": title };

    return (
        <div className={className}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                {...ariaProps}
            >
                {children}
            </svg>
        </div>
    );
}

export default Icon