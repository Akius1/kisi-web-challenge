
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@mui/material/styles";



export const useStyle = makeStyles({
    root:{

    },
    buttons:{
        background: 'linear-gradient(45deg, #FE688B, #FF835E)',
        border: 0,
        marginBottom: 15,
        borderRadius: 20,
        color: 'white',
        padding: '20px 50px',
    },
    navStyle:{
        backgroundColor: '#222647',
        color: 'rgb(255, 255, 255)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: '20px 50px',
         width: '100%',
         height:'65px' ,
         boxSizing: 'border-box',
        // flexShrink: 0,
        // position: 'sticky',
        // zIndex: 1100,
        // top: '0px',
        // left: 'auto',
        // right: '0px',
    },
    textField: {
        width: '300px',
        display:'flex' ,
        alignItems: 'center',
        height: '40px',

        "& .MuiFormLabel-root": {
          
          },

          "& .MuiInputLabel-root" :{
          
          }
    },
    input: {
        width: '100%',
        padding: 0,
        margin:0 ,
        height:'40px',
        backgroundColor:'white',
    }

});

export const theme = createTheme({

});