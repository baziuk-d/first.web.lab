import React from 'react';
import './Select.css';

const Select = (props) => {
    return (
        <select className="select" defaultValue="" onChange={props.onChange}>
            <option value="">{props.name}</option>
            {props.options.map((value, index) => (
                <option key={index} value={value}>{value}</option>
            ))}
        </select>
    );
};

export default Select;
