import React from 'react'
import {
    Tabs,
    withStyles,
    makeStyles,
    Tab,
    useTheme,
    Box,
    Typography,
    Breadcrumbs} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

const WorkArea = () => {
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

    const theme = useTheme();

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        padding: {
          padding: theme.spacing(3),
        },
        demo2: {
          backgroundColor: '#1f4068',
          height:'auto',
          borderRadius:'10px'
        },
      }));

    const StyledTabs = withStyles({
        indicator: {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          '& > span': {
            maxWidth: 60,
            width: '100%',
            backgroundColor: 'white',
          },
        },
      })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
      
      const StyledTab = withStyles((theme) => ({
        root: {
          textTransform: 'none',
          color: '#fff',
          fontWeight: theme.typography.fontWeightRegular,
          fontSize: theme.typography.pxToRem(15),
          marginRight: theme.spacing(1),
          '&:focus': {
            opacity: 1,
          },
        },
      }))((props) => <Tab disableRipple {...props} />);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      const handleChangeIndex = (index) => {
        setValue(index);
      };
      
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function a11yProps(index) {
        return {
          id: `full-width-tab-${index}`,
          'aria-controls': `full-width-tabpanel-${index}`,
        };
      }

    return (
        <div className="workarea">
            <div className={classes.demo2}>
                <Breadcrumbs>
                    <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs ">
                        <StyledTab label="Attend Exam" {...a11yProps(0)}/>
                        <StyledTab label="Schedule Exam" {...a11yProps(1)} />
                    </StyledTabs>
                </Breadcrumbs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                    Item One
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                    </TabPanel>
                </SwipeableViews>
            </div>
        </div>
    )
}

export default WorkArea;
