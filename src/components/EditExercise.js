// import React from 'react';
// import axios from 'axios'

// const EditExercise = () => {
//     const [users, setUsers] = React.useState([])
//     const [desc, setDesc] = React.useState('')
//     const [duration, setDuration] = React.useState('')
//     const [date, setDate] = React.useState('')
//     const [currentUser, setCurrentUser] = React.useState('')


//     React.useEffect(() => {
//         axios.get('http://localhost:5000/users/')
//             .then(res => {
//                 let names = []
//                 if (res.data.length > 0) {
//                     res.data.map(data => names.push(data.username))
//                 } 
//                 setUsers(names)
//             })
//     }, [])

//     const onSubmit =()=>{

//     }

//     return (
//         <div>
//             <h3>Edit your exercise</h3>
//             <form onSubmit={onSubmit}>
//                 <div className="form-group">
//                     <label>Username: </label>
//                     <select
//                         //  ref="userInput"
//                         required
//                         className="form-control"
//                         value={currentUser}
//                         onChange={e => setCurrentUser(e.target.value)}
//                     >
//                         {
//                             username.map(function (user) {
//                                 return <option
//                                     key={user}
//                                     value={user}>{user}
//                                 </option>;
//                             })
//                         }
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label>Description: </label>
//                     <input type="text"
//                         required
//                         className="form-control"
//                         name="desc"
//                         value={desc}
//                         onChange={e => setDesc(e.target.value)}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Duration (in minutes): </label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name='duration'
//                         value={duration}
//                         onChange={e => setDuration(e.target.value)}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Date: </label>
//                     <div>
//                         <DatePicker
//                             name='date'
//                             selected={date}
//                             onChange={e => setDate(e)}
//                         />
//                     </div>
//                 </div>

//                 <div className="form-group">
//                     <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default EditExercise;