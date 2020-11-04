import React from 'react'
import {
    Input,
    FormControlLabel,
    Radio,
    Button,
    FormControl,
    RadioGroup,
    Card,
    CardContent,
    TextField,
    CardHeader
} from '@material-ui/core'

const CreateQues = (props) => {
    const [open1, setOpen1] = React.useState(false);
    const [value,setValue] = React.useState(null);

    const handleChangeradio = (event) => {
        setValue(event.target.value);
      };

    //   const handleOpen1 = () => {
    //     setOpen1(true);
    //   };
  
    //   const handleClose1 = () => {
    //     setOpen1(false);
    //   };

    return (
      <div className="workarea">
        <div className="tabAlign">
        <Card>
        <CardHeader title="Schedule Exam"> </CardHeader>
        <CardContent>
        <p id="transition-modal-description">
        <table>
          <tbody>
            <tr><td>Question</td><td><TextField required id="standard-required" label="question" variant="outlined" size="small" type="text" /></td></tr><br/><br/>
            <tr><td>options</td><td>
            <FormControl component="fieldset" >
              <RadioGroup name="" value={value} onChange={handleChangeradio} style={{display:"inline-flex",flexWrap:"wrap",flexFlow:"row"}}>
                <FormControlLabel value="A" control={<Radio />} label="A" /><Input type="text"/>
                <FormControlLabel value="B" control={<Radio />} label="B" /><Input type="text"/>
                <FormControlLabel value="C" control={<Radio />} label="C" /><Input type="text"/>
                <FormControlLabel value="D" control={<Radio />} label="D" /><Input type="text"/>
              </RadioGroup>
            </FormControl></td></tr>
            <td><Button variant="contained">Submit</Button></td>
          </tbody>
        </table>
        </p>
        </CardContent>
        </Card>
        </div>
      </div>
    )
}

export default CreateQues
