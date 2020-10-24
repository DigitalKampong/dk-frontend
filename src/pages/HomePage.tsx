import React from 'react';
import SiteHeader from '../components/SiteHeader/SiteHeader';
import { getAllStores } from '../services/store';

const HomePage: React.FunctionComponent = () => {
  getAllStores().then(response => {
    console.log(response.data);
  });
  return (
    <>
      <SiteHeader></SiteHeader>
    </>
  );
};

export default HomePage;