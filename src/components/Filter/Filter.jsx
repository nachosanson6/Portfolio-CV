import React, { useState } from "react";
import "./Filter.css";
import skillsData from "./../../jsons/skills.json";
import { FaFilter } from "react-icons/fa";

const Filter = ({ onSkillToggle, onTextFilterChange }) => {
    const [showCheckboxes, setShowCheckboxes] = useState(false);
    const [projectNameFilter, setProjectNameFilter] = useState("");
    const isMobileDevice = window.innerWidth <= 768;

    const handleSkillToggle = (skillName) => {
        onSkillToggle(skillName);
    };

    const toggleCheckboxes = () => {
        setShowCheckboxes(!showCheckboxes);
    };

    const handleProjectNameChange = (event) => {
        const value = event.target.value;
        setProjectNameFilter(value);
        onTextFilterChange(value);
    };

    return (
        <div className="filter">
            <div className="projectFilter">
                <input
                    type="text"
                    placeholder={isMobileDevice ? "Buscar por nombre" : "Buscar por nombre del proyecto"}
                    value={projectNameFilter}
                    onChange={handleProjectNameChange}
                />
                <button className="filterButton" onClick={toggleCheckboxes}>
                    <FaFilter className="filterIcon" />
                </button>
            </div>
            <div className={`checkboxesContainer ${showCheckboxes ? "show" : ""}`}>
                {skillsData.map(skill => (
                    <div className="skillCheckbox" key={skill.name}>
                        <label>
                            <input type="checkbox" onChange={() => handleSkillToggle(skill.filter_name)} />
                            {skill.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;
