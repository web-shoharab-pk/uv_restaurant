import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import BreakFast from './BreakFast';
import Dessert from './Dessert';
import Dinner from './Dinner';
import Drinks from './Drinks';
import Lunch from './Lunch';
import Special from './Special';
// import "react-tabs/style/react-tabs.css";
import './styles.css';


const FoodMenu = () => {
    return (
        <div className="container"> 
        <br />
            <h2 style={{color: '#fff'}}>
                Popular <span style={{ color: "#fc5200" }}>Foods</span>
            </h2>
            <Tabs>
                <TabList>
                    <Tab>
                        <p>TODAY'S SPECIAL</p>
                    </Tab>
                    <Tab>
                        <p>BREAKFAST</p>
                    </Tab>
                    <Tab>
                        <p>LUNCH</p>
                    </Tab>
                    <Tab>
                        <p>DINNER</p>
                    </Tab>
                    <Tab>
                        <p>DESSERT</p>
                    </Tab>
                    <Tab>
                        <p>DRINKS</p>
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className="panel-content">
                        <Special />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="panel-content">
                        <BreakFast />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="panel-content">
                        <Lunch />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="panel-content">
                        <Dinner />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="panel-content">
                        <Dessert />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="panel-content">
                        <Drinks />
                    </div>
                </TabPanel>
            </Tabs>
            <br /><br />
        </div>
    );
};

export default FoodMenu;