import React from 'react'
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { userValidation } from './validation'



function RegisterForm() {
    const {register, submit,errors}= useForm({
        resolver:yupResolver(userValidation),
    })
const submitForm=(data)=>{
console.log(data)
}

  return (
    <div>

<form action="" onSubmit={submit(submitForm)}>
<label htmlFor="email">Email</label>
<input type="email" name='email' placeholder=' JohnDoe@gmail.com' id='email' ref={register}/>
<p>{errors.email?.message}</p>
<label htmlFor="password]">Password</label>
<input type="password" name='password' placeholder=' 123456qwerty' id='password' ref={register}/>
<p>{errors.password?.message}</p>
<button>Submit</button>



</form>






    </div>
  )
}

export default RegisterForm