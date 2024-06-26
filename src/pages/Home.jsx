import React from 'react'
import Delivery from '../components/Delivery';
import Banner from '../components/Banner';
import Sales from '../components/Sales';
import Category from '../components/Category';
import BestSelling from '../components/BestSelling';
import Enhance from '../components/Enhance';
import ExploreProduct from '../components/ExploreProduct';
import Arrival from '../components/Arrival';

const Home = () => {
    return (
        <>
            <Banner />
            <Sales />
            <Category />
            <BestSelling />
            <Enhance />
            <ExploreProduct />
            <Arrival />
            <Delivery />
        </>
    )
}

export default Home