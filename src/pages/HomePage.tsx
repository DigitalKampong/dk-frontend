import React, { useEffect, useState } from 'react';
import FoodGrid from '../components/FoodGrid/FoodGrid';
import SiteHeader from '../components/SiteHeader/SiteHeader';
import { getAllProducts } from '../services/product';
import './HomePage.css';

const HomePage: React.FunctionComponent = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getAllProducts().then(response => {
      setProducts(response.data);
    });
  } ,[]);

  return (
    <>
      <SiteHeader></SiteHeader>
      <div className="site-content">
        <FoodGrid foodList={products} />
      </div>
    </>
  );
};

export default HomePage;