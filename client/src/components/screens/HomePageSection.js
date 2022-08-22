import React from 'react'
import './HomePageSection.css'
import SearchBar from './SearchBar'
import BookData from '../../data.json'
import BasicDatePicker from './BasicDatePicker'
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
function HomePageSection() {
  return (
   <div className='home-image'>
        <div className='row search-bar' > 
           <div className='col-12 col-md-3 search-sub mb-4 '>
             <SearchBar placeholder={"Leaving From"}  data={BookData}/></div> 
           <div className='col-12 col-md-3 search-sub mb-4' >  
           <SearchBar placeholder={"Going To"}  data={BookData}/></div> 
          
           <div className='col-12 col-md-3 search-date ms-2'> <BasicDatePicker/></div> 
           {/* <div className='btn btn-primary col-12 col-md-3 search-subs ms-2'> Search</div> */}
           </div>
                   
        </div>
  )
}

export default HomePageSection