//Imports
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
    //Required States
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('todo')

    const classes = useStyles();

    const submitHandler = event => {
        event.preventDefault();

        if (title && description) {
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ title, description, category })
            });
        }
    };

    return (
        <Container>
            <Typography variant="h6" color="textSecondary">Create a new Note</Typography>
            <form noValidate onSubmit={submitHandler}>
                <TextField className={classes.tField} fullWidth label="Title" variant="outlined" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <TextField className={classes.tField} fullWidth label="Description" variant="outlined" multiline rows={3} required value={description} onChange={(e) => setDescription(e.target.value)} />
                <FormControl className={classes.tField}>
                    <FormLabel>Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
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