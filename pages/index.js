import CustNav from "../Components/CustNav"

export default function index(){
  return(
  <><CustNav/>
  <div>  
    
    <div className="card mt-4 ms-3 rounded-pill py-3 px-5" style={{maxWidth:'40em', float:"left"}}>
    <h2 className="card-title text-center ms-3 pt-3">Feature 1</h2>
    <p className="card-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div className="card mt-5 me-3 rounded-pill py-3 px-5" style={{maxWidth:'40em', float:"right"}}>
    <h2 className="card-title text-center pt-3">Feature 2</h2>
    <p className="card-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    
  </div>
  </>)
}