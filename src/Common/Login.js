import * as React from "react";
import "./Login.css";
import Button from '@mui/material/Button';

import { GlobalContext } from "../GlobalData";

export default function Login() {


  console.log("Login");

  const { HospitalId,setHospitaId} = React.useContext(GlobalContext)

const [temHospitalId,setId] = React.useState("");
const [password,setPassword] = React.useState("");
const [resMessage,setResMessage] = React.useState("")



  console.log(temHospitalId,password)

  

  async function fetchUrl(){

    let res = await fetch(`https://exlfit6t23.execute-api.us-east-1.amazonaws.com/ver1/loignstatus?id=${temHospitalId}&pass=${password}`)
    let data = await res.json();

    if (data['message'] == "sucess"){
        setHospitaId(temHospitalId)
    }
    else{setResMessage(data['message'])}
    

}






    

  return (  
    <div className="LoginWrapper" style={{marginTop:"100px"}}>
      <div className="wrapper">
        <div className="title-text">
          <div className="title login">HOSPITAL   LOGIN</div>
        </div>
        <div className="form-container">
          <div className="form-inner">
            <form action="" method="post" className="login">
              <div className="field">
                <input type="text" placeholder="Hospital_id" onChange={(e)=>{setId(e.target.value)}} required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} required />
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <a>{resMessage}</a>
              <div style={{marginTop:"10px"}}>
              <Button variant="contained" color="success" size="large" 
              fullWidth="true" onClick={  fetchUrl}>Login</Button> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
