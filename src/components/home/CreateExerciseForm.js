import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
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

class OutlinedTextFields extends React.Component {

    state = {
        userId: "",
        image: "",
        groups: [],
        exerciseName: "",
        description: "",
        groupId: 0,
        link: ""
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
        console.log(stateToChange)
        this.setState(stateToChange);
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    newExercise = evt => {
        evt.preventDefault();
        if (this.state.groupId === "") {
            window.alert("Please select a group");
        } else {
            const workout = {
                name: this.state.exerciseName,
                description: this.state.description,
                img: this.state.image,
                link: this.state.link,
                userId: this.state.userId,
                groupId: this.state.groupId
            }
            GroupManager.addWorkout(workout).then(() => this.props.handleClose())
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">

                    <TextField
                        id="exerciseName"
                        htmlFor="exerciseName"
                        label="Name"
                        style={{ margin: 8 }}
                        placeholder="Enter exercise name"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleFieldChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="image"
                        label="Image"
                        style={{ margin: 8 }}
                        placeholder="Add image URL"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleFieldChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
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
                    />
                    <TextField
                        id="groupId"
                        select
                        label="Muscle Group"
                        className={classes.textField}
                        value={this.state.groups}
                        onChange={this.handleChange}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        inputProps={{
                            name: 'age',
                            id: 'age-simple',
                          }}
                        helperText="Select the muscle group"
                        margin="normal"
                        variant="outlined"
                        name="groupId"
                    >
                        {this.state.groups.map((group, i) => (
                            <MenuItem key={i} id="groupId" value={group.id} option={group.label}>
                                {group.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    {/* <Button variant="contained" color="primary" className="button" onClick={this.newExercise}>
                    Add Workout
      </Button> */}


                </form>
                <div>                                    <DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">
                        Cancel
            </Button>
                    <Button onClick={this.newExercise} color="primary">
                        Create
            </Button>
                </DialogActions></div>
            </div>
        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);