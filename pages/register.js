import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
      // Initialize your form data fields here
      // For example:
      email: '',
      username:'',
      confirmpassword:'',
      password: '',
      contact:'',
      isAdmin:false
      // Add other form fields as needed
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('/api/regUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // Handle success, maybe redirect or show a success message
          console.log('Form data successfully submitted!');
        } else {
          // Handle errors
          console.error('Error submitting form data:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting form data:', error);
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    return (<>    
    <div className='row d-flex align-items-center rounded-5' style={{maxWidth:"800px", margin:"0 auto"}}>    
      
      {/* login component  */}
      <div className='text-center col-lg-6 col-sm-6 p-4 '>    
      <img src='register.jpg' className='d-block rounded-5' style={{width:"100%",height:"auto"}}></img>
      </div>
  
  {/* login component  */}
  <div className='col-sm-6 glassEff mt-5 col-md-6 col-lg-6 p-4'>    
      <h3 className='text-center mb-4'>Register your account </h3>
      <form onSubmit={handleSubmit} id='formElement'>
        <input
          type="text"
          name="username"
          className='form-control mt-2'
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          className='form-control mt-2'
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="number"
          name="contact"
          className='form-control mt-2'
          value={formData.contact}
          onChange={handleInputChange}
          placeholder="Contact"
        />
        <input
          type="password"
          name="password"
          className='form-control mt-2'
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmpassword"
          className='form-control mt-2'
          value={formData.confirmpassword}
          onChange={handleInputChange}
          placeholder="Confirm Password"
        />              
        <button type="submit" className='btn btn-success btn-block btn-sm mt-3 w-100 fw-bold'>Sign Up</button>
      </form>
      <div className='mt-2'>
          <a href='/login' style={{textDecoration:"none"}}>Already have an account? Sign In</a>
      </div>
      </div>
  
  </div>
      </>);
  };

export default Register