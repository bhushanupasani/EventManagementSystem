import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login2(){


    const init = {
        username:"",
        password:""
    }

    const reducer = (state, action) => {
            switch(action.type)
            {
                case 'update':
                    return {...state , [action.fld]:action.val}
                case 'reset':
                    return init;    
            }
    }

    const[info, dispatch] = useReducer(reducer, init) ;
    const[msg, setMsg] = useState("");
    const navigate = useNavigate();

    const sendData=(e) =>{
        e.preventDefault();

        const reqOptions={

            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(info)
        }
        fetch("http://localhost:7020/api/Logins/chkLogin",reqOptions)
        .then(resp=>{if(resp.ok){
        console.log(resp.status);
        return resp.text();
        }
        else{
          console.log(resp.status);
          throw new Error("Server error");
        }
        })
        .then(text=>text.length ? JSON.parse(text):{})
        .then(obj => {
            if(Object.keys(obj).length === 0)
             {
                setMsg("Wrong Username/Password");
                alert("Please Enter Username & Password");
             }
             else
             {
                 
                 localStorage.setItem("loggedUser",JSON.stringify(obj));
                 
                        if(obj.role.role_id === 1)
                        {
                                navigate("/admin");
                        }
                        else if(obj.role.role_id === 2 )
                        {
                            navigate("/tourmgr");
                        }
                        else if(obj.role.role_id === 3)
                        {
                            navigate("/tourist");
                        }
                    
             }
        })
       // .catch ((error) => alert("Server error"))
    }


    return(
         
    
     <div className='container'>
     <form>
       <div className='mb-3'>
           <h1>Sign in</h1>
         <label htmlFor="username">username: </label>
         <input
           type="text"
           id="username"
           value={info.username}
           onChange={(e)=> {dispatch({type:'update', fld:'username', val:e.target.value})}} 
           placeholder='enter username'
         
           required
         />
         
       </div>
       <div className='mb-3'>
         <label htmlFor="password">Password:</label>
         <input
           type="password"
           id="password"
           value={info.password}
           onChange={(e)=> {dispatch({type:'update', fld:'password', val:e.target.value})}}
           placeholder='enter password'
           required
         />
       </div>
      {/*} <div className='mb-2'>
           <input type='checkbox' className='custom-control custom-checkbox id="check'></input>
           <label htmlFor='check' className='custom-input-label'>Remember me</label>
    </div> */}
     
       <div >
         <button type="submit" onClick={(e)=> {sendData(e)}}>Sign in</button>
         <button type="reset" onClick={() => {dispatch({type:'reset'})}}>  Reset </button>
       </div>
       <p className='text-right'>
         <ul>
        <li> <a href='/login'>Forget Password</a></li>
         <li><a href='/register'>Sign up</a></li>
         </ul>
       </p>
     </form>
     <p>{JSON.stringify(info)}</p>
     <p>{msg}</p>
    </div>
          
    
    );
};