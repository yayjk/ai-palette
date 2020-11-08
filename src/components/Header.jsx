import React from 'react'
import {connect} from "react-redux"
import { HighlightedText } from '../styledComponents/Typography'
import startcase from 'lodash.startcase'
import styled from 'styled-components'

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aliceblue;

    h1{
        text-align: center;
    }
`;

//A dynamic component which shows the header or title of graph based on the 
//selected filters
const Header = ({country, product, startDate, endDate}) => {
    return (
        <HeaderStyle>
            <h1>
                Engagement Graph for 
                <HighlightedText>{' ' + startcase(product) + ' '}</HighlightedText>
                in 
                <HighlightedText>{' ' + startcase(country)}</HighlightedText>
            </h1>
            <h2>
                From 
                <HighlightedText>{' ' + startcase(startDate) + ' '}</HighlightedText> 
                to 
                <HighlightedText>{' ' + startcase(endDate)}</HighlightedText>
            </h2>
        </HeaderStyle>
    )
}

const mapStateToProps = state => {
    const {country, product, startDate, endDate} = state.filterReducer;
    return {country, product, startDate, endDate}
}

export default connect(mapStateToProps)(Header)
