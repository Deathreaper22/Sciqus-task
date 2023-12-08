
export default function CustNav(){
    return(<>

<div className="bg-info p-3 d-flex justify-content-around">
    <h1>Welcome to Student Management Portal </h1>   
    <div className="d-inline mt-2">
      <a href="/login" className="btn btn-warning btn mx-3 ">Login</a>
      <a href="/register" className="btn btn-warning btn">Register</a>
    </div>                 
  </div> 

    </>)
}