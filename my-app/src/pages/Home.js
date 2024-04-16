import { makeStyles } from '@material-ui/core';
import React from 'react';
import "../App.css";


const useStyles = makeStyles((theme) => ({
  menuItems: {
    cursor: 'pointer', 
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%', 
  },
}));


function HomePage() {
    const classes = useStyles();
    return (
      <div className="App">
       
      
     <div>
        Home
     </div>
      </div>
    );
}

export default HomePage;