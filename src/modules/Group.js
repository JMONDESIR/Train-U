const URL = "http://localhost:5002"

export default {
        getAll() {
                return fetch(`${URL}/groups`)
                        .then(data => data.json())
        },
        getGroups(id) {
                return fetch(`${URL}/workouts?groupId=${id}`)
                        .then(data => data.json())
        }
        // getBack() {
        //         return fetch(`${URL}/workouts?groupId=2`)
        //                 .then(data => data.json())
        // },
        // getShoulders() {
        //         return fetch(`${URL}/workouts?groupId=3`)
        //                 .then(data => data.json())
        // },
        // getArms() {
        //         return fetch(`${URL}/workouts?groupId=4`)
        //                 .then(data => data.json())
        // },
        // getAbs() {
        //         return fetch(`${URL}/workouts?groupId=5`)
        //                 .then(data => data.json())
        // },
        // getLegs() {
        //         return fetch(`${URL}/workouts?groupId=6`)
        //                 .then(data => data.json())
        // },
        // getCardio() {
        //         return fetch(`${URL}/workouts?groupId=7`)
        //                 .then(data => data.json())
        // }
}