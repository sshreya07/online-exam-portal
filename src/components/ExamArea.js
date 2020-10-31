import React, {useState} from 'react'
import {
Tabs,
Tab,
Box,
Typography
} from '@material-ui/core';

const ExamArea = () => {
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={2}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    }

    return (
        <div>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs">
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </div>
    )
}

export default ExamArea;