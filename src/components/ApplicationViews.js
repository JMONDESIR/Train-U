import { Route } from 'react-router-dom'
import React, { Component } from "react"
// import { withRouter } from 'react-router'
import Home from "./home/Home"
import Group from "../modules/Group"
import ChestList from "./chest/ChestList"
import BackList from "./back/BackList"
import ShouldersList from "./shoulders/ShouldersList"
import ArmsList from "./arms/ArmsList"
import AbsList from "./abs/AbsList"
import LegsList from "./legs/LegsList"
import CardioList from "./cardio/CardioList"

import Pushups from "./chest/Pushups"

export default class ApplicationViews extends Component {

    state = {
        "home": [],
        "groups": [],
        "chest": [],
        "back": [],
        "shoulders": [],
        "arms": [],
        "abs": [],
        "legs": [],
        "cardio": []
    }

    //===============MOUNTED COMPONENTS===============//
    componentDidMount() {
        Group.getAll().then(groups => {
            this.setState({
                groups: groups
            })
        })

}
        // Groups.getChest().then(chest => {
        //     this.setState({
        //         chest: chest
        //     })
        // })
        // Groups.getBack().then(back => {
        //     this.setState({
        //         back: back
        //     })
        // })
        // Groups.getShoulders().then(shoulders => {
        //     this.setState({
        //         shoulders: shoulders
        //     })
        // })
        // Groups.getArms().then(arms => {
        //     this.setState({
        //         arms: arms
        //     })
        // })
        // Groups.getAbs().then(abs => {
        //     this.setState({
        //         abs: abs
        //     })
        // })
        // Groups.getLegs().then(legs => {
        //     this.setState({
        //         legs: legs
        //     })
        // })
        // Groups.getCardio().then(cardio => {
        //     this.setState({
        //         cardio: cardio
        //     })
        // })

    //-----------------------------------------------------------------------------------------------
    render() {
        return (
            <React.Fragment>
                <Route
                    exact path="/" render={props => {
                        return <Home  {...props} home={this.state.home} />
                    }}
                />
                <Route
                    path="/chest" render={props => {
                        return <ChestList  {...props} chest={this.state.chest} />
                    }}
                />
                <Route path="/chest/pushups" render={(props) => {
                    return <Pushups {...props} />
                }} />
                <Route
                    path="/back" render={props => {
                        return <BackList  {...props} back={this.state.back} />
                    }}
                />
                <Route
                    path="/shoulders" render={props => {
                        return <ShouldersList  {...props} shoulders={this.state.shoulders} />
                    }}
                />
                <Route
                    path="/arms" render={props => {
                        return <ArmsList  {...props} arms={this.state.arms} />
                    }}
                />
                <Route
                    path="/abs" render={props => {
                        return <AbsList  {...props} abs={this.state.abs} />
                    }}
                />
                <Route
                    path="/legs" render={props => {
                        return <LegsList  {...props} legs={this.state.legs} />
                    }}
                />
                <Route
                    path="/cardio" render={props => {
                        return <CardioList  {...props} cardio={this.state.cardio} />
                    }}
                />
            </React.Fragment>
        )
    }
}
