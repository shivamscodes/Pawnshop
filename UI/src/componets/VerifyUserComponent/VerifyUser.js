import { useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';

function Verifyuser()
{
    const params = useParams();

    useEffect(()=>{
    
        axios.get(__userapiurl+"fetch",{
            params : {"email":params.email}
          }).then((result)=>{
            if(result.data.info[0].__v===0)
                {
                    axios.patch(__userapiurl+"update",
                        {"condition_obj":{"email":params.email},"content_obj":{"status":1,"__v":1}}
                      ).then(()=>{
                        window.location.href="/login";      
                    });    
                }  
            else
                {
                    window.location.href="/login";
                }    
          }).catch((error)=>{
            console.log(error);
        });
    
    },[params.email]);
    
    return(
        <></>
    )
}

export default Verifyuser;
