import React from 'react'
import {
    Tabs,
    withStyles,
    makeStyles,
    Tab,
    useTheme,
    Box,
    Typography,
    Breadcrumbs,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
TableCell,
Button} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

const WorkArea = () => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
      
  return (
    <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`}aria-labelledby={`full-width-tab-${index}`} {...other} >
      {value === index && (
        <Box p={2}>
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
      borderRadius:'10px',
      width:'90%'
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
      id: `full-width-tab-${index}`, 'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  function createData(exam, course, id, date, time, duration) {
    return { exam, course, id, date, time, duration };
  }

  function ecreateData(exam, course, id, date, time, duration,score) {
    return { exam, course, id, date, time, duration,score };
  }
  
  const rows = [
    createData('mid sem', 'DSA', '#301', '20/9/20', '11:00 a.m', '1hr'),
    createData('mid sem', 'DSA', '#301', '20/9/20', '11:00 a.m', '1hr'),
    createData('mid sem', 'DSA', '#301', '20/9/20', '11:00 a.m', '1hr'),
    
  ];

  const erows = [
    ecreateData('mid sem', 'DSA', '#301', '20/9/20', '11:00 a.m', '1hr', '06'),
    ecreateData('mid sem', 'DSA', '#301', '20/9/20', '11:00 a.m', '1hr', '10'),
    ecreateData('mid sem', 'DSA', '#301', '20/9/20', '11:00 a.m', '1hr', '03'),
    
  ];

    return (
        <div className="workarea">
            <div className={classes.demo2}>
                <Breadcrumbs>
                    <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs ">
                        <StyledTab label="Attend Exam" {...a11yProps(0)}/>
                        <StyledTab label="Schedule Exam" {...a11yProps(1)} />
                    </StyledTabs>
                </Breadcrumbs>
                <Paper>
                  <SwipeableViews
                      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                      index={value}
                      onChangeIndex={handleChangeIndex} >
                      <TabPanel value={value} index={0} dir={theme.direction}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Exam Name</StyledTableCell>
                            <StyledTableCell align="right">Course Name</StyledTableCell>
                            <StyledTableCell align="right">Course Id</StyledTableCell>
                            <StyledTableCell align="right">Exam Date</StyledTableCell>
                            <StyledTableCell align="right">Start Time</StyledTableCell>
                            <StyledTableCell align="right">Duration</StyledTableCell>
                            <StyledTableCell align="right">Score</StyledTableCell>

                          </TableRow>
                        </TableHead>
                        <TableBody>
                            {erows.map((row) => (
                              <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                  {row.exam}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.course}</StyledTableCell>
                                <StyledTableCell align="right">{row.id}</StyledTableCell>
                                <StyledTableCell align="right">{row.date}</StyledTableCell>
                                <StyledTableCell align="right">{row.time}</StyledTableCell>
                                <StyledTableCell align="right">{row.duration}</StyledTableCell>
                                <StyledTableCell align="right">{row.score}</StyledTableCell>

                              </StyledTableRow>
                            ))}
                        </TableBody>
                      </Table>
                      </TabPanel>
                      <TabPanel value={value} index={1} dir={theme.direction}>
                      <Button variant="outlined">Create Question Bank</Button><br/><br/><br/>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Exam Name</StyledTableCell>
                            <StyledTableCell align="right">Course Name</StyledTableCell>
                            <StyledTableCell align="right">Course Id</StyledTableCell>
                            <StyledTableCell align="right">Exam Date</StyledTableCell>
                            <StyledTableCell align="right">Start Time</StyledTableCell>
                            <StyledTableCell align="right">Duration</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                              <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                  {row.exam}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.course}</StyledTableCell>
                                <StyledTableCell align="right">{row.id}</StyledTableCell>
                                <StyledTableCell align="right">{row.date}</StyledTableCell>
                                <StyledTableCell align="right">{row.time}</StyledTableCell>
                                <StyledTableCell align="right">{row.duration}</StyledTableCell>
                              </StyledTableRow>
                            ))}
                        </TableBody>
                      </Table>
                      </TabPanel>
                </SwipeableViews>
                </Paper>
            </div>
        </div>
    )
}

export default WorkArea;
