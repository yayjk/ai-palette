import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { VictoryChart, VictoryTheme, VictoryLine, VictoryAxis, VictoryLabel, VictoryTooltip, createContainer } from 'victory'
import {singapore} from '../assets/singapore'
import {india} from '../assets/india'

//A date filter. Given the data, startdate, and endate, 
//a new filtered data set is returned
const dateFilter = (data, startDate, endDate) => {
    return data.filter(
            dataPoint => 
                    ((dataPoint.x >= startDate) && (dataPoint.x <= endDate))
            )
}

//The main graph component which shows the data based on the filters set
//Listening to data changes from redux (for country and product)
const Graph = ({country, product, startDate, endDate}) => {
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        switch(country){
            case 'singapore': {
                const final = dateFilter(singapore[product], startDate, endDate)
                setGraphData(final)
                break;
            }
            case 'india': {
                const final = dateFilter(india[product], startDate, endDate)
                setGraphData(final)
                break;
            }
            default: {
                setGraphData(singapore.suit)
            }
        }
    }, [country, product, startDate, endDate])

    const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");
    
    return (
        <div>
            <VictoryChart 
                height={200} 
                theme={VictoryTheme.material}
                padding={{ top: 10, bottom: 50, right: 50, left: 35 }}
                fixLabelOverlap={true}
                containerComponent={
                    <VictoryZoomVoronoiContainer 
                    labels={({ datum }) => `${datum.x}, ${datum.y}`}
                    />
                }   
            >
                <VictoryAxis
                    dependentAxis={true}
                />
                <VictoryAxis
                    axisLabelComponent={<VictoryLabel />}
                    style={{
                        tickLabels: {fonSize: 1, padding: 12, angle: -45}
                    }}
                />
                <VictoryLine data={graphData} domain={{y: [0,90]}} labelComponent={<VictoryTooltip />}/>
            </VictoryChart>
        </div>
    )
}

const mapStateToProps = (state) => {
    const {country, product, startDate, endDate} = state.filterReducer;
    return {country, product, startDate, endDate}
} 

export default connect(mapStateToProps)(Graph)
