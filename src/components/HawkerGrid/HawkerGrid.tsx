import React from 'react';
import { Grid,Image } from 'semantic-ui-react';
import Hawker from '../../types/Hawker';
import HawkerCard from '../HawkerCard/HawkerCard'

interface Props{
    hawkerList:Hawker[];
}

const HawkerGrid: React.FunctionComponent<Props> = (props : Props) => {
    const {hawkerList} = props;
    return(
        <div>
            {hawkerList.map( x => {
                return (
                    <Grid className = "hawker-grid" columns = {12}>
                        <HawkerCard hawker = {x} />
                    </Grid>
                )
            })};
        </div>
    )

};

export default HawkerGrid;