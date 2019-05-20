// Drawer
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CreateExerciseForm from "./CreateExerciseForm"

export default class FormDialog extends React.Component {

    getUpdatedWorkouts = (id) => this.props.getUpdatedWorkouts(id)

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
                            Enter your workout information
            </DialogContentText>

                        <CreateExerciseForm getUpdatedWorkouts={this.getUpdatedWorkouts} isEdit={false} workout={{}} handleClose={this.props.handleClose} />
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

// Create Ex Form