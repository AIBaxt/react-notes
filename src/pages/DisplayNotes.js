import { React, useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardHeader, CardContent, makeStyles, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    cardStyle: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20
    }
});

const DisplayNote = props => {
    const classes = useStyles();
    const [notesList, setNotesList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotesList(data));
    }, [])

    const deleteHandler = async (id) => {
        await fetch('http://localhost:8000/notes/' + id, {
            method: 'DELETE'
        })

        const tmpArr = notesList.filter(note => note.id !== id)
        setNotesList(tmpArr);
    };


    return (
        <Container>
            <Grid container>
                {notesList.slice(0).reverse().map(note => (
                    <Grid item key={note.id} xs={12} md={6} lg={4}>
                        <Card className={classes.cardStyle}>
                            <CardHeader title={note.title} subheader={note.category} action={<IconButton onClick={() => deleteHandler(note.id)}><DeleteIcon /></IconButton>} />
                            <CardContent>
                                <Typography>
                                    {note.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default DisplayNote;