import { AppBar, Toolbar, Button, Typography, IconButton, makeStyles, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { useHistory } from 'react-router';
import { FullscreenExit, Note, NoteAdd } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;


const useStyles = makeStyles({

    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
    },

    drawerPaper: {
        width: drawerWidth
    },
    layout: {
        backgroundColor: '#F9F9F9',
    },
    appBar: {
        backgroundColor: 'white',
        width: `calc(100% - ${drawerWidth}px)`
    }
});

const Layout = props => {

    const classes = useStyles();
    const history = useHistory();

    const linksList = [
        {
            text: 'Notes',
            icon: <Note color="primary" />,
            path: '/'
        },
        {
            text: 'New Note',
            icon: <NoteAdd color="primary" />,
            path: '/create'
        }
    ];

    return (
        <div className={classes.layout}>
            {/* Appbar */}
            <AppBar elevation={2} className={classes.appBar}>
                <Toolbar>
                    <Typography color="textPrimary">
                        Welcome to your notes app!
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* Side Drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.root}>
                    <Typography variant="h5">
                        React Notes
                    </Typography>
                </div>

                <List>
                    {linksList.map(link => (
                        <ListItem key={link.text} button onClick={() => history.push(link.path)}>
                            <ListItemIcon>{link.icon}</ListItemIcon>
                            <ListItemText primary={link.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            {/* Children Components */}
            <div>
                {props.children}
            </div>
        </div >
    );
};

export default Layout;