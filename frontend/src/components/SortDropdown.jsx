import React from "react";
import "../styles/SortDropdown.css";
import { ChevronDownIcon } from "@heroicons/react/24/outline";


const SortDropdown = () => {
    return (
        <div className="sort-dropdown">
            Sort by
            <ChevronDownIcon className="sort-dropdown-icon" />
            {/* <select id="sort">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select> */}
        </div>
    );
}

export default SortDropdown;