import React, { Fragment } from 'react';
import LeftNav from './LeftNav';
import Navbar from './Navbar';
import ScheduleExam from './ScheduleExam';
import {
    Button,
    Input,
    Modal
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Exams = () => {
    const pin = 654321;

    // document.getElementById("door").style.display = 'none';

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const move = () => {
        setOpen(false);
        let pwd = document.getElementById("pinInput").value;
        console.log(pwd);
        if(parseInt(pwd) === pin){
            document.getElementById("pwd").style.display = 'none';
            document.getElementById("door").style.display = 'flex';
            document.getElementById("door").style.justifyContent = 'center';
            document.getElementById("door").style.alignContent = 'center';
            document.getElementById("door").style.paddingBlock = '10rem';

          }else{
              alert("Oops! you don't have authority to post exams");
          }
    }

      const body = (
        <div  style={block}>
          <h2 id="simple-modal-title" style={{color:'white'}} >PassWord</h2><br/>
          <div>
          <Input style={{paddingBlock:'1rem'}} id="pinInput"></Input>&ensp;&ensp;
          <Button type="submit" onClick={move} style={{padding:'1rem 3rem',backgroundColor:'#fff',color:'#000'}}>submit</Button>
          </div>
        </div>
      );

    return (
        <Fragment>
            <Navbar/>
            <LeftNav/>
            <div style={block} id="pwd">
                <Button variant="contained" type="button" onClick={handleOpen}>
                    Click to Enter Passcode
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
            </div>
            <div id="door" style={block2}><Link to="/createExam" style={{textDecoration:'none'}}><Button variant="contained"><h4>Hello Admin!<br/> You Can Get In</h4></Button></Link></div>
            {/* <ScheduleExam/> */}
        </Fragment>
    )
}

export default Exams;

const block = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingBlock:'10rem',
    flexDirection:'column'
}
const block2 = {
    display: 'none',
}