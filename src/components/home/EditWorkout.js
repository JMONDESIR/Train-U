import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CreateExerciseForm from "./CreateExerciseForm"
export default class FormDialog extends React.Component {

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">TRAIN - U</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Edit this workout
            </DialogContentText>

                        <CreateExerciseForm getUpdatedWorkouts={this.props.getUpdatedWorkouts} isEdit={true} workout={this.props.workout} handleClose={this.props.handleEditClose} />
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}