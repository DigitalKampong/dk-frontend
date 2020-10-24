import React from 'react';
import SiteHeader from '../components/SiteHeader/SiteHeader';
import { getAllStalls } from '../services/stall';

const HomePage: React.FunctionComponent = () => {
  getAllStalls().then(response => {
    console.log(response.data);
  });
  return (
    <>
      <SiteHeader></SiteHeader>
      Hello World!
    </>
  );
};

export default HomePage;