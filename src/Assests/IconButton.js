import { useState } from "react";

const IconButton = ({ children, hoverColor }) => {
    const [hovercolor, setHovercolor] = useState("transperant");
    return (
        <span
            className="iconbutton"
            onMouseOver={() => setHovercolor(hoverColor)}
            onMouseLeave={() => setHovercolor("transperant")}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                minWidth: "min(40px,max-content)",
                minHeight: "max-content",
                transition: "all 0.2s ease-in-out",
                backgroundColor: `var(--${hovercolor})`,
            }}
        >
            {children}
        </span>
    )
}

export default IconButton