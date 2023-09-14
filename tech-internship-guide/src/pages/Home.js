import React from 'react';
import { TabGroup } from '../components/Tab';


export const Home = () => {
    return(
        <>
            <div className='text-center mb-5 mt-4'>
                <h3 className='text-primary'>Unlock Your Internship Adventure:<br/>Your Ultimate Guide to Tech Succes Begins Here!</h3>
                <p className='text-light'>A colletions of all resources you need to land your first Computer Science Internship</p>
            </div>
            
            <TabGroup />
        </>
    );
};
