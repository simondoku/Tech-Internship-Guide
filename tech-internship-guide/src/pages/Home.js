import React from 'react';
import { TabGroup } from '../components/Tab';


export const Home = () => {
    return(
        <>
            <h3 className='text-primary'>Unlock Your Internship Adventure:<br/>Your Ultimate Guide to Tech Succes Begins Here!</h3>
            <p>A colletions of all resources you need to land your first Computer Science Internship</p>
            
            <TabGroup />
        </>
    );
};
