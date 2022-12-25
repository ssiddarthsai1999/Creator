// import React, { useEffect } from 'react'
// import "./Profile.css"
// import Post from '../components/Post'
// import { getSingleUser } from '../redux/slice/userSlice'
// import { useSelector,useDispatch } from 'react-redux'
// import { useParams } from 'react-router-dom'
// function Profile() {
//     const {specificuser,user} =useSelector((state)=>({...state.user}))
//     const dispatch= useDispatch()
// const id= user._id
//     useEffect(()=>{
// dispatch(getSingleUser(id))
//     },[id])
 


//   return (
//     <div className='text-black'>


//     <div className=' mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 flex shadow-lg '>
//     <div className='leftbar p-5 h-fit'>
//     <h1 className='pb-4 font-bold'>User Details</h1>
//     <h3 className='pb-2 font-bold'  >UserName: <span className='font-light'>{user.username}</span></h3>
//     <h3 className='pb-2 font-bold'  >Role: <span className='font-light'>{user.role}</span></h3>
//     <h3 className='pb-2 font-bold'  >City: <span className='font-light'>{user.city}</span></h3>
//     <h3 className='pb-2 font-bold'>Country: <span className='font-light'>{user.country}</span></h3>
//     <h3 className='pb-2 font-bold'>Gender: <span className='font-light'>{user.gender}</span></h3>
//  <h3 className='pb-2 font-bold'>DOB: <span className='font-light'>{user.dob}</span></h3>
//  <h3 className='pb-11 font-bold'>Age: <span className='font-light'>23</span></h3>
//  </div>
//     <div className='rightbar'>
//     <div className='topdetails flex justify-evenly'>
// <h3 className='p-5 '>Followers <br></br>{user.followers}</h3>
// <h3 className='p-5'>Following <br></br>{user.following}</h3>
// <div className='profileimg '>

//     <img className=' lg:w-52 sm:w-52 pt-4 md:w-52 ' src={user.img} alt="" />
//     <h4 className='justify-center flex '>{user.name}</h4>
// </div>
// <h3 className='p-5'>Questions <br></br>{user.questions}</h3>
// <h3 className='p-5'>Answered <br></br> {user.answered}</h3>
//     </div>
//     <div>
// <h3 className='flex  justify-center pt-4 pb-5'>{user.description} </h3>
// </div>
//     </div></div>
// <Post/>
// </div>

//   )
// }

// export default Profile