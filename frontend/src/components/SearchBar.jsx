import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import "../styles/SearchBar.css";

function SearchBar() {
    const [isFocused, setIsFocused] = useState(false);

    const handleSearchBarClick = () => {
        setIsFocused(true);
    }

    const handleDismiss = () => {
        setIsFocused(false);
    }

    return (
        <div className="search-bar-container">
            <div className="search-bar" onClick={handleSearchBarClick}>
                <MagnifyingGlassIcon className="search-icon"/>
                Search for a course e.g. COMP1511
            </div>
            <div className={`search-window ${isFocused ? 'visible' : ''}`}>
                <button className="dismiss-search" onClick={handleDismiss}>Dismiss</button>
            </div>
        </div>
    );
}

export default SearchBar;