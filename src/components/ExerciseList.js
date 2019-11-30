import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Exercise = props => {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0, 10)}</td>
            <td>
                <Link to={'/edit/'+props.exercise._id}> Edit </Link> |
                <a href='#' onClick={() => props.deleteExercise(props.exercise._id)}>Delete</a>
            </td>
        </tr>
    )
}

const ExerciseList = () => {

    const [exercises, setExercises] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                setExercises(response.data)
                console.log(response.data)
            })
    }, [])

    const deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(res => {
                setExercises(exercises.filter(element => element._id !== id))
            })
    }

    const exList = () => {
        return (
            exercises.length > 0 && exercises.map(currentexercise => {
                return <Exercise exercise={currentexercise} deleteExercise={deleteExercise} key={currentexercise._id} />
            })
        )
    }

    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exList()}
                </tbody>
            </table>
        </div>
    );
}

export default ExerciseList;