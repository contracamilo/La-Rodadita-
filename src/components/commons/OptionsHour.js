import React from 'react'

const SelectHour = ({ id, text, handleChange, classN }) => (
        <div>
            <label htmlFor={id}>{text}</label>
            <select id={id} className={classN} onChange={handleChange}>
                <option value="" defaultValue>00:00 am</option>
                <option value="12:00 am">12:00 am</option>
                <option value="01:00 am">01:00 am</option>
                <option value="02:00 am">02:00 am</option>
                <option value="03:00 am">03:00 am</option>
                <option value="04:00 am">04:00 am</option>
                <option value="05:00 am">05:00 am</option>
                <option value="06:00 am">06:00 am</option>
                <option value="07:00 am">07:00 am</option>
                <option value="08:00 am">08:00 am</option>
                <option value="09:00 am">09:00 am</option>
                <option value="10:00 am">10:00 am</option>
                <option value="11:00 am">11:00 am</option>
                <option value="12:00 pm">12:00 pm</option>
                <option value="01:00 pm">01:00 pm</option>
                <option value="02:00 pm">02:00 pm</option>
                <option value="03:00 pm">03:00 pm</option>
                <option value="04:00 pm">04:00 pm</option>
                <option value="05:00 pm">05:00 pm</option>
                <option value="06:00 pm">06:00 pm</option>
                <option value="07:00 pm">07:00 pm</option>
                <option value="08:00 pm">08:00 pm</option>
                <option value="09:00 pm">09:00 pm</option>
                <option value="10:00 pm">10:00 pm</option>
                <option value="11:00 pm">11:00 pm</option>
            </select>
        </div>
)

export default SelectHour
