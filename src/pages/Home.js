import { Table, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ContactCard from '../components/ContactCard';
import NavBar from '../components/NavBar';
import '../css/Home.css';
import {Technology_DataSet1} from '../Json/DataSet';
import {Health_data1} from '../Json/HealthCareData';
const Home = () => {

    const [active , setActive]=useState(2);

    return (
        <>
        <div className="home" >
                     <div style={{ display:"flex",justifyContent:"center",alignContent:"center"}}>
                         <div style={{height:"45px",width:"40px" ,backgroundColor:"white", marginTop:"40px", marginBottom:"70px",marginRight:"-20px"}} />
                         <Typography  variant="h3" color="white"  fontFamily="Abhaya Libre"  fontWeight="800" textAlign="center">
                            <br/> Flexible & Scalable <br/>Datasets data dataset{" "}
                        </Typography>
                    </div>
            
        
           <div style={{display:"flex", justifyContent:"center"  , marginTop:150 }}>
                <div onClick={()=>setActive(1)} style={{cursor:"pointer"}} >
                {
                active == 1? <img alt="Technology" src="https://res.cloudinary.com/amrit180/image/upload/v1634827765/tech_1_pm9w5z.png"
                  style={{width:150,height:70 , boxShadow:'0 4px 22px rgba(0,0,0,.4)'}}
                /> : (<img style={{width:150,height:70 }} src='https://res.cloudinary.com/amrit180/image/upload/v1634826413/techoff_wto72g.jpg'/>
                )}
                    
                </div>
                
                <div onClick={()=>setActive(2)} style={{cursor:"pointer"}}>
                   {active == 2 ? <img alt="Professional" src="https://res.cloudinary.com/amrit180/image/upload/v1634827765/pro_1_tolibr.png" style={{width:150,height:70 , boxShadow:'0 4px 22px rgba(0,0,0,.4)'}}
                /> : (<img style={{width:150,height:70}} src='https://res.cloudinary.com/amrit180/image/upload/v1634828209/pro_off_kqf7vr.jpg'/>
                ) }
                </div>
                <div onClick={()=>setActive(3)} style={{cursor:"pointer"}}>
                    {
                        active==3? <img 
                        alt="Factory"
                        src="https://res.cloudinary.com/amrit180/image/upload/v1634827765/factory_1_uo5z2p.png" 
                        style={{width:150,height:70 , boxShadow:'0 4px 22px rgba(0,0,0,.4)'}}/>
                        :(<img style={{width:150,height:70}} src="https://res.cloudinary.com/amrit180/image/upload/v1634826413/factoryoff_tcqboq.jpg"/>)
                    }
                </div>
                <div onClick={()=>setActive(4)} style={{cursor:"pointer"}}>
                    {
                        active==4? <img 
                        alt="HealthCare"
                        src="https://res.cloudinary.com/amrit180/image/upload/v1634827765/health_1_hyqjtf.png" 
                        style={{width:150,height:70 , boxShadow:'0 4px 22px rgba(0,0,0,.4)'}}/>
                        :(<img  style={{width:150,height:70}} src='https://res.cloudinary.com/amrit180/image/upload/v1634826413/healthoff_kjg4s3.jpg'/>)
                    }
                    
                </div>
                <div onClick={()=>setActive(5)} style={{cursor:"pointer"}} >
                    {
                        active==5?  <img 
                        alt="World"
                        src="https://res.cloudinary.com/amrit180/image/upload/v1634827765/world_2_vlvovt.png" 
                        style={{width:150,height:70 , boxShadow:'0 4px 22px rgba(0,0,0,.4)'}}/>
                        :(<img  style={{width:150,height:70}} src="https://res.cloudinary.com/amrit180/image/upload/v1634826413/worldoff_bym8do.jpg"/>)
                    }
                   
                </div>
            </div>

           <div style={{marginTop:"200vh" , width:"50%" }}>
           <table style={{ width:"90%" , border:"1px solid #000"}}>
           <thead style={{textAlign:"center" , height:"40px"}}>
                  <tr>
                   <th  scope="col"
                    style={{background:"#C4C4C4"   }}>
                        Title
                        </th>
                   <th scope="col" 
                   style={{background:"#0094FF" , width:"20%" , color:"#fff", fontWeight:"800"}}>
                       Contacts
                       </th>
                  </tr>
                  </thead> 
    {/*TABLE BODY*/}
    <tbody>
{ Technology_DataSet1.map ((v,i)=>{
 return(
    <tr key={i}>
    <td style={{paddingLeft:12,
    backgroundColor:
     i % 2 ==0 ? "rgba(184 , 184 , 184 , .3)" :"rgba(196 ,196, 196, 0.5)",
    }}
    >{v.title}</td>
    <td style={{textAlign:"center"  
    ,
    backgroundColor:
     i % 2 ==0 ? "rgba(0,149,255 , .9)" :"rgba(0,143,255, 0.55)",
     color:"#fff" , fontWeight:"600" , height:40
}}>{v.contacts}</td>
   </tr>
 )
} )}
    </tbody>
           </table>
           </div>     
           <table style={{ marginTop:"1510px", width:"40%", marginRight:"200px" , border:"1px solid #000"}}>
               <thead style={{textAlign:"center" , height:"40px"}} >
                   <tr>
                       <th scope="col"
                       style={{background:"#C4C4C4"  ,width:"100%"  }}
                       >Title</th>
                       <th scope="col"
                         style={{background:"#0094FF" , width:"50%" , color:"#fff", fontWeight:"800"}}>
                             Contacts</th>
                   </tr>
               </thead>
<tbody>
{Health_data1.map ((v,i)=>{
 return(
    <tr key={i}>
    <td style={{paddingLeft:12,
    backgroundColor:
     i % 2 ==0 ? "rgba(184 , 184 , 184 , .3)" :"rgba(196 ,196, 196, 0.5)",
    }}
    >{v.title}</td>
    <td style={{textAlign:"center"  ,
    backgroundColor:
     i % 2 ==0 ? "rgba(0,149,255 , .9)" :"rgba(0,143,255, 0.55)",
     color:"#fff" , fontWeight:"600" , height:40
}}>{v.contacts}</td>
   </tr>
 )
} )}  
</tbody>
               </table>    
            </div>
            <ContactCard/> 

           
       </>     
    );
};


export default Home

