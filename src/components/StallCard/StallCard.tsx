import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';
import Stall from '../../types/Stall';
import './StallCard.css';

interface Props {
    stall: Stall
}

const StallCard: React.FunctionComponent<Props> = (props: Props) => {
    const { stall } = props;
    return (
        <Card>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{stall.name}</Card.Header>
                <Card.Meta>
                    $2.50/pax
                </Card.Meta>
                <Card.Meta>
                    <Rating icon='star' defaultRating={Math.floor(stall.rating)} maxRating={5} disabled/>
                    <span>({stall.rating ? stall.rating : "N/A"})</span>
                </Card.Meta>
                <Card.Meta>
                    <span>
                        {stall.HawkerCentre.name}
                    </span>
                    <span className="view-map-link">
                        View Map
                    </span>
                </Card.Meta>
            </Card.Content>
        </Card>
    )
}

export default StallCard;