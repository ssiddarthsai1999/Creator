// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getSingleUser, followUsers } from "../redux/slice/userSlice";
// import { Link, useParams } from "react-router-dom";
// function Test() {
//         const { id } = useParams();
//         const dispatch = useDispatch();
//         const { specificuser, user,allusers } = useSelector((state) => ({ ...state.user }));

//             useEffect(() => {
//         dispatch(getSingleUser(id));

//     }, []);
//   return (
//     <div className='text-black'>
    
// <h3>{specificuser.username}</h3>
    
    
    
//     </div>
//   )
// }

// export default Test