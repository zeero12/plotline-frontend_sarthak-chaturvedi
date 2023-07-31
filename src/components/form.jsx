import React from 'react'
import { useFormik } from 'formik'


function Form() {
  
    const formik = useFormik({
        initialValues: {
          department:'', 
          cpf:'', 
          name:'',  
          designation:'', 
          phone:'', 
          email:'', 

        }
    })
  
   console.log('Fome Values', formik.values)
    return (
    <div>
       <section class = "container"/>
          <header>New Activity</header>
          <form action="#" className = "form">

        <div class="input-box">   
            <label htmlFor='department'>Department</label>
            <input type='text' id='department' name='department' placeholeder="Enter the department name" onChange={formik.handleChange} value={formik.values.department}/>
        </div>

        <div class="input-box"> 
             <label htmlFor='cpf'>CPF-No.</label>
             <input type='text' id='cpf' name='cpf' onChange={formik.handleChange} value={formik.values.cpf}/>
        </div>

        <div class="input-box"> 
             <label htmlFor='name'>Name</label>
             <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>
        </div>

        <div class="input-box"> 
             <label htmlFor='designation'>Designation</label>
             <input type='text' id='designation' name='designation' onChange={formik.handleChange} value={formik.values.designation}/>
        </div>

        <div class="input-box"> 
             <label htmlFor='phone'>Phone No.</label>
             <input type='number' id='phone' name='phone' onChange={formik.handleChange} value={formik.values.phone}/>
        </div>

        <div class="input-box"> 
             <label htmlFor='email'>E-Mail</label>
             <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
        </div>

       <button>Submit</button>
      
       </form>
    </div>
  )
}

export default Form