import { SIGBREAK } from 'constants';
import React, { useEffect, useState } from 'react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import { getAllProducts } from '../../services/product';
import { Button, Item } from 'semantic-ui-react';


const IndividualHawker : React.FunctionComponent = () => {
    
    return(
    <>
    <SiteHeader></SiteHeader>
    <div  className ="hawker-item" >
    <Item.Group>
        <Item>
            <Item.Image size ='large' src ="https://react.semantic-ui.com/images/wireframe/image.png"></Item.Image>
            <Item.Content>
                <Item.Header>
                    Airport Road Food Centre
                </Item.Header>
            </Item.Content>
        </Item>
    </Item.Group>
    </div>
    </>
    )
};

export default IndividualHawker;