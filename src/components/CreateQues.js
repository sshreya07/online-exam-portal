import React from 'react'
import {
    Input,
    FormControlLabel,
    Radio,
    Button,
    Modal,
    FormControl,
    RadioGroup,
    Fade,
    Backdrop,
    makeStyles
} from '@material-ui/core'

const CreateQues = (props) => {
    const [open1, setOpen1] = React.useState(false);
    const [value,setValue] = React.useState('');

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

    const handleChangeradio = (event) => {
        setValue(event.target.value);
      };

    //   const handleOpen1 = () => {
    //     setOpen1(true);
    //   };
  
      const handleClose1 = () => {
        setOpen1(false);
      };
    return (
        <div>
            <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classModal.modal}
                            open={open1}
                            onClose={handleClose1}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                              timeout: 500,
                            }}
                          >
                            <Fade in={open1}>
                              <div className={classModal.paper}>
                                <h2 id="transition-modal-title">Schedule Exam</h2>
                                <p id="transition-modal-description">
                                  <table>
                                    <tbody>
                                      <tr><td>Question</td><td><Input type="text"></Input></td></tr>
                                      <tr><td>options</td><td>
                                      <FormControl component="fieldset">
                                        <RadioGroup name="" value={value} onChange={handleChangeradio}>
                                          <FormControlLabel value="" control={<Radio />} label="" /><Input type="text"/>
                                          <FormControlLabel value="" control={<Radio />} label="" /><Input type="text"/>
                                          <FormControlLabel value="" control={<Radio />} label="" /><Input type="text"/>
                                          <FormControlLabel value="" control={<Radio />} label="" /><Input type="text"/>
                                        </RadioGroup>
                                      </FormControl></td></tr>
                                      <td><Button variant="contained">Submit</Button></td>
                                    </tbody>
                                  </table>
                                </p>
                              </div>
                            </Fade>
                          </Modal>
                                    
        </div>
    )
}

export default CreateQues
