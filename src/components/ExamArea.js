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
        <div className="workarea">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs">
                <Tab label="Attend Exam" {...a11yProps(0)} className="tab"  />
                <Tab label="Schedule Exam" {...a11yProps(1)} className="tab" />
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