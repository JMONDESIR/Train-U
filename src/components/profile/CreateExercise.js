import React, { Component } from 'react'
import GroupManager from "../../modules/GroupManager"

export default class CreateExercise extends Component {

        state = {
                userId: [],
                groups:[],
                exerciseName: [],
                description: [],
                groupId: []
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

        newExercise = evt => {
                evt.preventDefault();
                if (this.state.groupId === "") {
                        window.alert("Please select a group");
                } else {
                        const workout = {
                                        name: this.state.exerciseName,
                                        description: this.state.description,
                                        img: null,
                                        link: "http://www.somelink.com",
                                        userId: this.state.userId,
                                        groupId: parseInt(this.state.groupId)
                        }
                        GroupManager
                                .addWorkout(workout)
                                .then(() => this.props.history.push("/profile"));
                }
        }
        render() {
                return (
                                <form>
                                        <div>
                                                <label htmlFor="exerciseName">Exercise Name</label>
                                                <input
                                                        type="text"
                                                        required
                                                        className="form-control"
                                                        id="exerciseName"
                                                        placeholder="Enter an exercise name"
                                                        onChange={this.handleFieldChange}
                                                />
                                        </div>
                                        <div>
                                                <label htmlFor="description">Description</label>
                                                <textarea
                                                        type="text"
                                                        required
                                                        className="form-control"
                                                        id="description"
                                                        placeholder="Enter a workout description"
                                                        onChange={this.handleFieldChange}
                                                />
                                        </div>
                                        <div>
                                                <label htmlFor="link">Link</label>
                                                <input
                                                        type="text"
                                                        required
                                                        className="form-control"
                                                        id="link"
                                                        placeholder="Copy and paste a video URL for this workout"
                                                        onChange={this.handleFieldChange}
                                                />
                                        </div>
                                        <div className="form-group">
                                                <label htmlFor="muscleGroup">Muscle Group</label>
                                                <select
                                                        defaultValue=""
                                                        name="muscleGroup"
                                                        id="groupId">
                                                        <option value="">Select the muscle group</option>
                                                        {this.state.groups.map(group => (
                                                                <option key={group.id} id={group.id} value={group.id}>
                                                                        {group.name}
                                                                </option>
                                                        ))}
                                                </select>
                                        </div>
                                        <button type="submit" onClick={this.newExercise}>Submit</button>
                                </form>
                )
        }
}
