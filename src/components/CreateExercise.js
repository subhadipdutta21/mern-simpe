import React, { useEffect } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'

const CreateExercise = () => {

    const [username, setUsername] = React.useState([])
    const [desc, setDesc] = React.useState('')
    const [duration, setDuration] = React.useState('')
    const [date, setDate] = React.useState('')
    const [currentUser, setCurrentUser] = React.useState('')


    useEffect(() => {
        axios.get('http://localhost:5000/users/').then(res => {
            let names = []
            if (res.data.length > 0) {
                res.data.map(data => names.push(data.username))
            }
            console.log(names)
            setUsername(names)
        })
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(currentUser, desc, duration, date)
        const exercise = {
            username: currentUser,
            description: desc,
            duration,
            date
        }

        axios.post('http://localhost:5000/exercises/add/', exercise)
            .then(res => console.log(res.data))
    }


    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select
                        //  ref="userInput"
                        required
                        className="form-control"
                        value={currentUser}
                        onChange={e => setCurrentUser(e.target.value)}
                    >
                        {
                            username.map(function (user) {
                                return <option
                                    key={user}
                                    value={user}>{user}
                                </option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                        required
                        className="form-control"
                        name="desc"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input
                        type="text"
                        className="form-control"
                        name='duration'
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            name='date'
                            selected={date}
                            onChange={e => setDate(e)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default CreateExercise