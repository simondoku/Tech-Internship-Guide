import React from 'react';
import { TabGroup } from '../components/Tab';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Home = () => {
    return(
        <>
            <Navbar />
            <TabGroup />
            <Footer />
        </>
    );
};
