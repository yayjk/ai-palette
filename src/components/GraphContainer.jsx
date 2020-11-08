import React from 'react'
import Graph from './Graph'
import GraphFilters from './GraphFilters'
import styled from 'styled-components'

const GraphContainerStyle = styled.div`
    display: grid;
    grid-template-columns: 75% 25%;

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
    }
`

//A basic container component consisting of  graph and graphfilters
export const GraphContainer = () => {
    return (
        <GraphContainerStyle>
            <Graph />
            <GraphFilters />
        </GraphContainerStyle>
    )
}
