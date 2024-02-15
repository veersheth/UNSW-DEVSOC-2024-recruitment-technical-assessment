import React from "react";
import "../styles/Sidebar.css";
import { BookOpenIcon, ShieldCheckIcon, BarsArrowUpIcon, UserCircleIcon, ArrowRightEndOnRectangleIcon, MoonIcon } from '@heroicons/react/24/outline';
import unilectives from "../assets/unilectives.svg";

function Sidebar() {
    return <div className="sidebar">
        <ul className="sidebar-upper">
            <li><img src={unilectives} className="logo" alt="Unilectives" /></li>
            <hr></hr>
            <li className="nav-item"><BookOpenIcon /></li>
            <li className="nav-item"><ShieldCheckIcon /></li>
        </ul>
        <ul className="sidebar-lower">
            <li className="nav-item" style={{transform: "rotate(90deg)"}}><BarsArrowUpIcon /></li>
            <li className="nav-item"><UserCircleIcon /></li>
            <li className="nav-item"><MoonIcon /></li>
            <li className="nav-item"><ArrowRightEndOnRectangleIcon /></li>
        </ul>
    </div>
}

export default Sidebar;