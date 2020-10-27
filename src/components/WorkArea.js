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
Button,
Modal,
Fade,
Backdrop,
Input,
FormControl,
Radio,
FormControlLabel,
RadioGroup} from '@material-ui/core';
import CreateQues from './CreateQues';

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

  const useStylesmodal = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classModal = useStylesmodal();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen1 = () => {
      setOpen1(true);
    };
  
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
                      <Button variant="outlined" onClick={handleOpen}>Create Question Bank</Button><br/><br/><br/>
                      <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classModal.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                              timeout: 500,
                            }}
                          >
                            <Fade in={open}>
                              <div className={classModal.paper}>
                                <h2 id="transition-modal-title">Schedule Exam</h2>
                                <p id="transition-modal-description">
                                  <table>
                                    <tbody>
                                      <tr><td>Exam Type</td><td>
                                        <FormControl>
                                        <FormControlLabel value="end" control={<Radio color="primary" />} label="Objective" />
                                        </FormControl></td></tr>
                                      <tr><td>Exam Name</td><td><Input type="text"></Input></td></tr>
                                      <tr><td>Course Name and Id</td><td><Input type="text"></Input></td><td><Input type="text"></Input></td></tr>
                                      <tr><td>Exam Date</td><td><Input type="date"></Input></td></tr>
                                      <tr><td>Start Time</td><td><Input type="time"></Input>24-hour Clock</td></tr>
                                      <tr><td>Duration</td><td><Input type="text"></Input>minutes</td></tr>
                                      <tr><td>No of Questions</td><td><Input type="text"></Input></td></tr>
                                      <td><Button variant="contained" onClick={handleOpen1}>Next</Button></td><CreateQues open={open1} />
                                      </tbody>
                                  </table>
                                </p>
                              </div>
                            </Fade>
                          </Modal>
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
                </Paper>
            </div>
        </div>
    )
}

export default WorkArea;

