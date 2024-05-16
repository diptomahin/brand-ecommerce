import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Description = ({ product }) => {
    const { description } = product
    return (
        <div className='w-8/12 card card-side  shadow-xl p-10'>
            <Tabs>
                <TabList className='font-semibold'>
                    <Tab>Description</Tab>
                    <Tab>Reviews</Tab>
                    <Tab>Shipping</Tab>
                    <Tab>About Seller</Tab>
                </TabList>
                <hr />
                <TabPanel className='mt-5 text-black'>
                    <h2>{description}</h2>
                </TabPanel>
                <TabPanel>
                    <h2>No reviews yet !</h2>
                </TabPanel>
                <TabPanel>
                    <h2>No info available !</h2>
                </TabPanel>
                <TabPanel>
                    <h2>No info available !</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Description;