const URL = "http://localhost:5002"

export default {
        getAll() {
                return fetch(`${URL}/groups`)
                        .then(data => data.json())
        },
        getWorkoutByMuscleGroup(id) {
                return fetch(`${URL}/workouts?groupId=${id}`)
                        .then(data => data.json())
        },
        getWorkoutById(id) {
                return fetch(`${URL}/workouts?id=${id}`)
                        .then(data => data.json())
        },
        deleteWorkout(id) {
                return fetch(`${URL}/workouts/${id}`, {
                        method: "DELETE",
                        headers: {
                                "Content-Type": "application/json"
                        }
                })
        },
        addWorkout(workout) {
                return fetch(`${URL}/workouts`, {
                        method: "POST",
                        headers: {
                                "content-type": "application/json"
                        },
                        body: JSON.stringify(workout)
                })
        },
        updateWorkout(editedWorkout) {
                return fetch(`${URL}/workouts/${editedWorkout.id}`, {
                        method: "PUT",
                        headers: {
                                "Content-Type": "application/json"
                        },
                        body: JSON.stringify(editedWorkout)
                })
        }, ///////////////////////////////////////
        getAllUsers() {
                return fetch(`${URL}/users`)
                        .then(data => data.json())
        },
        addUser(user) {
                return fetch(`${URL}/users`, {
                        method: "POST",
                        headers: {
                                "content-type": "application/json"
                        },
                        body: JSON.stringify(user)
                })
        }
}