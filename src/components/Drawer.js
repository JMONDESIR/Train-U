import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountIcon from '@material-ui/icons/AccountCircle';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import WorkoutCard from './workout/WorkoutCard';
import AddWorkout from "./home/AddWorkout"
import EditWorkout from "./home/EditWorkout"
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNewRounded';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

class MiniDrawer extends React.Component {

    state = {
        openDrawer: false,
        openDialog: false,
        editWorkout: false,
        selectedWorkout: {},
    }

    handleDrawerOpen = () => {
        this.setState({ openDrawer: true });
    }

    handleDrawerClose = () => {
        this.setState({ openDrawer: false });
    }
    handleClickOpen = () => {
        this.setState({ openDialog: true });
    }

    handleClose = () => {
        this.setState({ openDialog: false });
    }

    addWorkout = () => {
        this.setState({ openDialog: true })
    }

    handleDelete = (id) => {
        this.props.handleDelete(id)
    }

    handleEdit = (id) => {
        this.props.handleEdit(id)
    }

    openCreateExerciseForm = () => {
        this.props.openCreateExerciseForm()
    }

    handleEdit = id => {
        const selectedWorkout = this.props.workouts.filter(workout => workout.id === id)
        this.setState({
            editWorkout: true,
            selectedWorkout: selectedWorkout[0]
        }, () => console.log(this.state))
    }

    handleEditClose = () => {
        this.setState({ editWorkout: false });
    }

    getUpdatedWorkouts = (id) => {
        // if there is no id present, then we must be adding instead of editing
        if (!id || id == null) {
            // pass the selected workout from an edit to the parent
            this.props.getUpdatedWorkouts(this.state.selectedWorkout.groupId)
        } else {
            // call the passed argument onto the update function from AddWorkout
            this.props.getUpdatedWorkouts(id)
        }
    }

    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.openDrawer,
                    })}
                >
                    <Toolbar disableGutters={!this.state.openDrawer}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, {
                                [classes.hide]: this.state.openDrawer,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            TRAIN - U
            </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: this.state.openDrawer,
                        [classes.drawerClose]: !this.state.openDrawer,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: this.state.openDrawer,
                            [classes.drawerClose]: !this.state.openDrawer,
                        }),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>

{/* Menu icons are generated by database information */}

                        {this.props.navList.map((navOption, i) =>
                            navOption.icon === "Add" ?
                                (
                                    <ListItem button key={i} onClick={() => this.addWorkout()}>
                                        <ListItemIcon>
                                            <AddIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={navOption.label} />
                                    </ListItem>
                                )
                                :
                                (
                                    // click event for getting workouts from parent component
                                    <ListItem button key={i} onClick={() => this.props.handleClick(navOption.id)}>
                                        <ListItemIcon>
                                            <Icon>
                                                {/* Navigation images  */}
                                                <img height="25" src={require(`../assets/images/${navOption.icon}`)} alt="muscle groups" />
                                            </Icon>
                                        </ListItemIcon>
                                        <ListItemText primary={navOption.label} />
                                    </ListItem>
                                )
                        )}
                    </List>
                    <Divider />
                    <List>
                        <ListItem button>
                            <AccountIcon className="mr4" />
                            <ListItemText primary={"Account"} />
                        </ListItem>
                        <ListItem button onClick={this.props.handleSignOut}>
                            <PowerSettingsNew className="mr4" />
                            <ListItemText primary={"Sign Out"} />
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />

                    {/* Render the exercise cards when an icon is clicked or else, display the welcome message. Ternary evaluates for the spacific user ID matching the current logged in user.  */}

                    {this.props.iconClicked ?
                        this.props.workouts.map((workout, i) =>
                            this.props.currentUser.id === workout.userId || workout.userId === 1 ?
                                <WorkoutCard currentUserId={this.props.currentUser.id} handleEdit={this.handleEdit} handleDelete={this.handleDelete} workout={workout} key={i} /> : <div key={i} />
                        ) : (
                            <div>
                                <h1>Welcome, {this.props.currentUser.userName}</h1>
                                <p>To get started, select an icon to the left.</p>
                            </div>
                        )}

                    <AddWorkout getUpdatedWorkouts={this.getUpdatedWorkouts} handleClose={this.handleClose} open={this.state.openDialog} />
                    <EditWorkout getUpdatedWorkouts={this.getUpdatedWorkouts} workout={this.state.selectedWorkout} handleEditClose={this.handleEditClose} handleClose={this.handleClose} open={this.state.editWorkout} />

                </main>
            </div >
        );
    }
}

MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(MiniDrawer);