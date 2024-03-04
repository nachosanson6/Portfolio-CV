import React from "react";
import "./Filter.css";
import skillsData from "./../../jsons/skills.json";

const Filter = ({ onSkillToggle }) => {
    const handleSkillToggle = (skillName) => {
        onSkillToggle(skillName);
    };

    return (
        <div className="filter">
            {skillsData.map(skill => (
                <div className="skillCheckbox" key={skill.name}>
                    <label>
                        <input type="checkbox" onChange={() => handleSkillToggle(skill.filter_name)} />
                        {skill.name}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Filter;
