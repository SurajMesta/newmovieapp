import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import{makeStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'
import axios from 'axios'



 const Moviesearch = (props) => {
    const[search,setSearch]=useState("")
    const[data,setData]=useState([])

    const oninputChange=(val)=>{
    
            setSearch(val)
        
       
       
        console.log(search)
        

    }

    //for handling the submit action
    const onSubmit=   (e)=>{
        e.preventDefault()
        if(search!==""){
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9a519b7df122492b4ac52efb0f1a76a0&query=${search}`).then((datas)=>{
                setData(datas.data.results)
                    
                    props.datadisp(datas.data.results)
                    props.setDisp()
                
            
              
                
                console.log(datas.data.results)
            }).catch((err)=>{
                console.log(err)
            })

        }
        else{
            window.alert('Please Enter a Value')

        }
    
   


      
        
       
     
  
       
    }
    //material-ui makestyles to define random styles
    const useStyles=makeStyles({
        backstyle:{
            backgroundColor:'green'
        }
    })
    const classes=useStyles()

    
    return (
       
        <div className="form-div">
                  <form className="form1"  onSubmit={(e)=>{
                onSubmit(e)
            }}>
                <div className="para-div"> <p>Movie-Name</p> </div>
           
             <div className="text-fld"  >
               
                  <TextField className="txt" id="standard-basic" name="text" label="" value={search} onChange={(e)=>{
                     oninputChange(e.target.value)
                 }}/>
             </div>
             <div className="btn-div" >
                 <Button className={classes.backstyle} id="btn-submit" type="submit" variant="contained" color="primary">Submit</Button>
             </div>
            </form>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        datadisp:(data)=>{
            dispatch({type:'GET_DATA',payload:data})

        },
        setDisp:()=>{
            dispatch({type:'RESET_DISP',payload:false})
        },
       
    }

}

//connecting the component to redux
export default connect(null,mapDispatchToProps)(Moviesearch)
