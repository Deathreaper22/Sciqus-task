import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    // Initialize your form data fields here
    // For example:
    email: '',
    password: '',
    // Add other form fields as needed
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth', {
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
    <img src='login.jpg' className='d-block rounded-5' style={{width:"100%",height:"auto"}}></img>
    </div>

{/* login component  */}
<div className='col-sm-6 glassEff col-md-6 col-lg-6 p-4'>    
    <h3 className='text-center mb-4'>Sign in to your account </h3>
    <form onSubmit={handleSubmit} id='formElement'>
      <input
        type="text"
        name="email"
        className='form-control'
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        className='form-control mt-2'
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
      />      
      <button type="submit" className='btn btn-success btn-block btn-sm mt-3 w-100 fw-bold'>Login</button>
    </form>
    <div className='mt-2'>
        <a href='/api/forgotPwd' style={{textDecoration:"none"}}>Forgot Password ?</a>
    </div>
    </div>

</div>
    </>);
};

export default Login