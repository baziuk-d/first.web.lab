import React from 'react';
import './HolidayFinder.css';
import Select from "../../common/Select/Select";
import FormButton from "../../common/FormButton/FormButton";

const HolidayFinder = () => {
    const options = ["option1", "option2", "option3", "option4"];
    
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="holidayFinder">
                <Select name="Location" options={options} onChange={() => {}} />
                <Select name="Activity" options={options} onChange={() => {}} />
                <Select name="Grade" options={options} onChange={() => {}} />
                <Select name="Date" options={options} onChange={() => {}} />
            </label>
            <FormButton name="Explore" />
        </form>
    );
};

export default HolidayFinder;
