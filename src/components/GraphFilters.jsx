import React, { useState } from 'react'
import { dateOptions } from '../constant'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
    selectCountry,
    selectProduct,
    selectStartDate,
    selectEndDate
} from '../redux/actions'
import startCase from 'lodash.startcase'

//Filter Styles
const GraphFilterStyles = styled.div`
    padding: 1rem;

    #filters{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        
        .filterField{
            display: flex;
            flex-direction: column;

            label{
                margin-bottom: 0.5rem;
            }
            select{
                padding: 0.5rem;
                margin-bottom: 1rem;
                border-radius: 4px;
            }
        }
    }

    #errors{
        margin-top: 0.5rem;
        color: red;
        font-size: 0.9rem;
        font-style: italic;
    }
`

const GraphFilters = ({
    selectCountry,
    selectProduct,
    selectStartDate,
    selectEndDate,
    country,
    product,
    startDate,
    endDate
}) => {
    //Local Component States (For validation purposes)
    const [startDateError, setStartDateError] = useState(false)
    const [endDateError, setEndDateError] = useState(false)

    //handling filter changes
    //country filter
    const handleCountry = (selected) => selectCountry(selected);

    //start date filter + validation
    const handleStartDate = (selected) => {
        setEndDateError(false) 
        if (selected >= endDate) setStartDateError(true)
        else {
            selectStartDate(selected)
            setStartDateError(false);
        }
    };

    //end date filter + validation
    const handleEndDate = (selected) => {
        setStartDateError(false)
        if (selected <= startDate) setEndDateError(true)
        else {
            selectEndDate(selected)
            setEndDateError(false);
        }
    };

    //product filter
    const handleProduct = (selected) => selectProduct(selected);

    return (
        <GraphFilterStyles>
            <h4>Graph Filters</h4>
            <div id="filters">
                <div className="filterField">
                    <label>Country</label>
                    <select value={country} onChange={(e) => handleCountry(e.target.value)}>
                        <option value="singapore">Singapore</option>
                        <option value="india">India</option>
                    </select>
                </div>
                <div className="filterField">
                    <label>Start Date</label>
                    <select value={startDate} onChange={(e) => handleStartDate(e.target.value)}>
                        {dateOptions.map(option => <option key={option} value={option}>{startCase(option)}</option>)}
                    </select>
                </div>
                <div className="filterField">
                    <label>End Date</label>
                    <select value={endDate} onChange={(e) => handleEndDate(e.target.value)}>
                        {dateOptions.map(option => <option key={option} value={option}>{startCase(option)}</option>)}
                    </select>
                </div>
                <div className="filterField">
                    <label>Prouct</label>
                    <select value={product} onChange={(e) => handleProduct(e.target.value)}>
                        <option value="suit">Suit</option>
                        <option value="shoes">Shoes</option>
                        <option value="jacket">Jacket</option>
                    </select>
                </div>
            </div>
            <div id="errors">
                {
                    (startDateError || endDateError) && 
                    <span>Please select a suitable start/end date</span>
                }   
            </div>
        </GraphFilterStyles>
    )
}

const mapStateToProps = state => {
    const {country, product, startDate, endDate} = state.filterReducer;
    return { country, product, startDate, endDate }
}

export default connect(
    mapStateToProps, 
    {
        selectCountry,
        selectProduct,
        selectStartDate,
        selectEndDate
    }
)(GraphFilters) 
