// Add/Edit workout
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GroupManager from "../../modules/GroupManager"
import DialogActions from '@material-ui/core/DialogActions';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

const user = JSON.parse(sessionStorage.getItem("credentials"))

class OutlinedTextFields extends React.Component {

    // is the props being passed from the "Edit" form? (isEdit=true)  If so, use stored DB information, else, render blank fields
    state = {
        userId: this.props.isEdit === true ? this.props.workout.userId : user.id,
        img: this.props.isEdit === true ? this.props.workout.img : "",
        groups: [],
        name: this.props.isEdit === true ? this.props.workout.name : "",
        description: this.props.isEdit === true ? this.props.workout.description : "",
        groupId: this.props.isEdit === true ? this.props.workout.groupId : 0,
        link: this.props.isEdit === true ? this.props.workout.link : "",
        id: this.props.isEdit === true ? this.props.workout.id : 0
    }

    componentDidMount() {

        GroupManager.getAll().then(groups => {
            this.setState({
                groups: groups
            })
        })
    }

    handleFieldChange = (event) => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    }

    // handleChange function copied from the Kenel exercise stricktly to populate the selected group name
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    newExercise = evt => {
        evt.preventDefault();
        if (this.state.groupId === "") {
            window.alert("Please select a group");
        } else {
            const workout = {
                name: this.state.name,
                description: this.state.description,
                img: this.state.img,
                link: this.state.link,
                userId: this.state.userId,
                groupId: this.state.groupId
            }
            GroupManager.addWorkout(workout).then(() => this.props.getUpdatedWorkouts(workout.groupId)
            ).then(() => this.props.handleClose())
        }
    }

    updateExercise = evt => {
        // prevents a redirect/action on submit
        evt.preventDefault();

        if (this.state.groupId === "") {
            window.alert("Please select a muscle group");
        } else {
            const workout = {
                name: this.state.name,
                description: this.state.description,
                img: this.state.img,
                link: this.state.link,
                userId: this.state.userId,
                groupId: this.state.groupId,
                id: this.state.id
            }
            GroupManager.updateWorkout(workout)
                .then(() => this.props.getUpdatedWorkouts()
                )
                .then(() => this.props.handleClose())
        }
    }

    render() {

        const filteredGroups = this.state.groups.filter(group => group.icon !== "Add")
        const { classes } = this.props;
        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">

                    <TextField
                        id="name"
                        htmlFor="name"
                        label="Name"
                        style={{ margin: 8 }}
                        placeholder="Enter exercise name"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleFieldChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={this.state.name}
                    />
                    <TextField
                        id="img"
                        label="Image"
                        style={{ margin: 8 }}
                        placeholder="Add image URL"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleFieldChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={this.state.img}
                    />
                    <TextField
                        id="description"
                        label="Description"
                        style={{ margin: 8 }}
                        placeholder="Enter a brief description"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleFieldChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={this.state.description}
                    />
                    <TextField
                        id="link"
                        label="Video"
                        style={{ margin: 8 }}
                        placeholder="Add a link to the video of this exercise"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleFieldChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={this.state.link}
                    />
                    <TextField
                        id="groupId"
                        select
                        label="Muscle Group"
                        className={classes.textField}
                        value={this.state.groupId}
                        onChange={this.handleChange}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Select the muscle group"
                        margin="normal"
                        variant="outlined"
                        name="groupId"
                    >
                        {filteredGroups.map((group, i) => (
                            <MenuItem key={i} id="groupId" value={group.id} option={group.label}>
                                {group.label}
                            </MenuItem>
                        ))}
                    </TextField>



                </form>
                <div><DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">
                        Cancel
            </Button>
                    <Button onClick={this.props.isEdit ? this.updateExercise : this.newExercise} color="primary">
                        {this.props.isEdit ? "Update" : "Create"}
                    </Button>
                </DialogActions></div>
            </div>
        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields)