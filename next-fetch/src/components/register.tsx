"use client"

import { Field, Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup'

const RegisterSchema = Yup.object().shape({
    username: Yup.string().required("username is required"),
    email: Yup.string().email("invalid email format").required("email is required"),
    password: Yup.string().min(3,"password must be 3 characters at minimum").required("password is required")
})

interface FormValues{
    username:string;
    email:string;
    password:string
}

export default function FormRegister(){
    const initialValue: FormValues = {username:'',email:'',password:''}
    const handleAdd = async(user: FormValues) =>{
        try {
            await fetch("http://localhost:2000/users",{
                method: 'POST',
                body: JSON.stringify(user),
                
            })
            alert('user berhasil ditambahkan!')
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <div className='flex justify-center'>
<div className='p-8 bg-green-700 mt-10 w-[500px] rounded-md shadow-lg'>
    <h1 className='text-2xl font-bold mb-4 text-center text-white '>Register Form</h1>
    <Formik
    initialValues={initialValue}
    validationSchema={RegisterSchema}
    onSubmit={(values, action) =>{
        handleAdd(values);
        action.resetForm()
    }}
    >
{(props:FormikProps<FormValues>) =>{
    const {handleChange,values,touched,errors} = props
    return(
        <Form className='space-y-5'>
            <div>
                <label htmlFor="username" className='block'>Username:</label>
                <Field
                type="text"
                name="username"
                onChange={handleChange}
                value={values.username}
                className="border border-black mb- block w-[400px] rounded-md mt-1"
                />
                {touched.username && errors.username ?(
                    <div className='text-red-500 text-xs'>{errors.username}</div>
                ): null}
            </div>
            <div>
                <label htmlFor="email" className='block'>Email:</label>
                <Field
                type="text"
                name="email"
                onChange={handleChange}
                value={values.email}
                className="border border-black block w-[400px] rounded-md mt-1"
                placeholder="email"
                />
                {touched.email && errors.email ?(
                    <div className='text-red-500 text-xs'>{errors.email}</div>
                ): null}
            </div>
            <div>
                <label htmlFor="password" className='block'>Password:</label>
                <Field
                type="text"
                name="password"
                onChange={handleChange}
                value={values.password}
                className="border border-black block w-[400px] rounded-md mt-1 mb-5"
                />
                {touched.password && errors.password ?(
                    <div className='text-red-500 text-xs'>{errors.password}</div>
                ): null}
            </div>
            <button type = "submit" className='bg-black text-white w-[400px] h-[30px] rounded-md'>
                Register
            </button>
        </Form>
    )
}}
    </Formik>
</div>
        </div>
    )
}