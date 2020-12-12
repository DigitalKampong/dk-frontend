import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Hawker from '../../types/Hawker';

interface Props{
    hawker: Hawker;
}

const HawkerCard : React.FunctionComponent<Props> = (props: Props) => {
    const{hawker} = props;
    return(
        <div>
            Airport Road Food Centre
        </div>
    )
}

export default HawkerCard;