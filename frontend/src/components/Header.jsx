import React, { useState } from "react";
import "../styles/Header.css";

function Header() {
    const colors = ["#1479f2", "#ff4d55", "#ded718", "#73ff77", "#57eeff", "#f27dff"];
    const [colorIndex, setColorIndex] = useState(0);

    const handleClick = () => {
        setColorIndex((colorIndex + 1) % colors.length);
    };

    return (
        <div id="header">
            DevSoc presents
            <h1 
                id="website-name" 
                style={{ color: colors[colorIndex], transition: 'color 1s' }} 
                onClick={handleClick}
            >
                unilectives
            </h1>
            <p className="website-description">
                Your one-stop shop for UNSW course and elective reviews.
            </p>
        </div>
    );
}

export default Header;