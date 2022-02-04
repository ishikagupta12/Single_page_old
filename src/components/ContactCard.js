import { Button, Paper, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EmailIcon from '@mui/icons-material/Email';
import '../css/ContactCard.css'
import React from 'react'

const ContactCard = () => {
    return (
        <>
          <div style={{marginTop:"1000px",display:"flex",justifyContent:"center",alignContent:"center",minHeight:350}}>
               <Paper elevation={13} style={{width:"65%",display:"flex",minHeight:350}}>
                    <div className="card" style={{backgroundColor:"black" ,height:400,width:"40%"}}>
                       <div >
                            <img src='../asset/contact.jpg' />
                       </div>
                       <Typography variant="h6" style={{textAlign:"left",marginLeft:"70px",color:"white",fontWeight:"600"}}>
                           NEXUS <br/> Informatics
                       </Typography>]
                       <Typography variant="h6" style={{textAlign:"left",marginLeft:"40px",color:"white",fontWeight:"600"}}>
                           Get in touch <br/> with us now lorem
                       </Typography>
                       <Typography  style={{textAlign:"left",marginLeft:"40px",color:"white",fontWeight:"200"}}>
                           Lorem ipsum dolor sit carey doit geta <br/> cresh fruko dete gaji kote mixsum
                       </Typography>
                      <left> <hr style={{color:"white",width:"100px" ,marginRight:"210px",marginTop:"50px"}}></hr></left>
                     <div> <div style={{display:"flex"}}><LocalPhoneIcon fontSize="medium" style={{color:"white",marginLeft:"40px"}}/> <div style={{color:"white",fontWeight:"400",marginLeft:"2%"}}>{" "}+917633022221{" "}</div></div>
                      <div style={{display:"flex"}}><br/><EmailIcon fontSize="medium" style={{color:"white",marginLeft:"40px",marginTop:"2%"}}/><div style={{color:"white",fontWeight:"400",marginTop:"2%",marginLeft:"2%"}}>{" "}SUPPORT@SMTHG.COM{" "}</div></div>
                    
                    </div>
                    </div>
               <div style ={{background:"#fff", height:400, width:"60%"}}>
                   <Typography variant="h6" fontWeight="700" textAlign="center" marginTop="20">
                       Contact Us
                       </Typography>
                       <div style={{display:"flex" , justifyContent:"center"}}>
                           <input type="text"  placeholder="First Name*"  
                           style={{margin:15 , 
                           background:"rgba(196 ,196, 196, 0.5)"}}/>

                           <input type="text" placeholder="Last Name*"  style={{margin:15 , background:"rgba(196 ,196, 196, 0.5)"}}/>
                           <AccountCircleIcon  style={{position:"absolute", color:"#7c89b1" , marginTop:"19px"  ,margin:10 , marginLeft:"170px"  , fontSize:"20px"}}/>
                        
                       </div>
                       <div style={{display:"flex" , justifyContent:"center"}}>
                           <input type="text"  placeholder="Business Email*" style={{margin:15 , background:"rgba(196 ,196, 196, 0.5)"}}/>
                           {/*<MailOutlineIcon style={{position:"absolute" , fontSize:"20px" ,color:"#7c89b1",
                            marginTop:"12px", 
                           marginRight:"150px" }}/> */}
                           <input type="text" placeholder="Business Phone*"  style={{margin:15 , background:"rgba(196 ,196, 196, 0.5)"}}/>
                           <LocalPhoneIcon  style={{position:"absolute", color:"#7c89b1" , marginTop:"19px"  ,margin:10 , marginLeft:"170px"  , fontSize:"20px"}}/>
                       </div>

                       <div style={{display:"flex" , justifyContent:"center"}}>
                           <input type="text"  placeholder="Company Name*"style={{width:"65%",marginTop:"20px" , background:"rgba(196 ,196, 196, 0.5)" }}  />
                           <ApartmentIcon style={{position:"absolute", color:"#7c89b1" , marginTop:"23px"  ,margin:10 , marginLeft:"170px"  , fontSize:"20px"}} />
                       </div>

                       <div style={{display:"flex" , justifyContent:"center"}}>
                           <textarea type="text"  placeholder="Your message"style={{width:"65%",height:"120px", background:"rgba(196 ,196, 196, 0.5)" , marginTop:"20px"}}  />
                       </div>
                      <div style={{display:"flex" , justifyContent:"center"}}>
                      <Button variant="contained" style={{width:"80%",color:"#000",background:"#fff",border:"2px", fontWeight:"600px" , margin:20}} >Submit </Button>
                      </div>
               </div>
               
               </Paper> 
          </div>
        </>
    )
}

export default ContactCard
