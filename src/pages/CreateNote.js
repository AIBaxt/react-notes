import { useState } from 'react';
import { Container, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    tField: {
        marginTop: 10,
        marginBottom: 10,
        display: 'block'
    }
});

const CreateNote = props => {

    const classes = useStyles();

    const submitHandler = event => {
        event.preventDefault();
    };


    return (
        <Container>
            <Typography variant="h6" color="textSecondary">Create a new Note</Typography>
            <form noValidate onSubmit={submitHandler}>
                <TextField className={classes.tField} fullWidth label="Title" variant="outlined" required />
                <TextField className={classes.tField} fullWidth label="Description" variant="outlined" multiline rows={3} required />

                <FormControl className={classes.tField}>
                    <FormLabel>Category</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value="work" label="Work" control={<Radio />} />
                        <FormControlLabel value="todo" label="Todo" control={<Radio />} />
                        <FormControlLabel value="reminder" label="Reminder" control={<Radio />} />
                    </RadioGroup>
                </FormControl>

                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
        </Container>
    );

};

export default CreateNote;