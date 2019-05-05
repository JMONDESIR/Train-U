import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Menu from '../menu/Menu'
import WorkoutContainer from './WorkoutContainer';

export default class Home extends Component {

        render() {
                return (
                        <div>
                                <Menu links={this.props.links} handleClick={this.props.handleClick} />
                                <WorkoutContainer workouts={this.props.workouts}/>
                        </div>
                )
        }
}
