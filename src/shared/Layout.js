import { AppBar, Toolbar, Button, Typography, IconButton, makeStyles, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { useHistory } from 'react-router';
import { FullscreenExit } from '@material-ui/icons';
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
    }
});

const Layout = props => {

    const classes = useStyles();
    const history = useHistory();

    const linksList = [
        {
            text: 'Notes Display',
            path: '/'
        },
        {
            text: 'New Note',
            path: '/create'
        }
    ];

    return (
        <div>
            {/* Appbar */}
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        React-Notes
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