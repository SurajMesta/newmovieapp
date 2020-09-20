import React ,{useState}from 'react'
import {connect} from 'react-redux'

 const MovieList = (props) => {
     console.log(props.data)
     console.log(props.data.length)

    //  path to the image url image
     const[path,setPath]=useState('https://image.tmdb.org/t/p/w500//')
     
    return (
        <div>
            {props.data.length!==0 ?(   <div >
       
         {/* mapping through the data recieved via global state */}
       { props.data.map((item)=>{
           return(
               <div className="details" key={item.id} onClick={()=>{
                   console.log(item.id)
                   //dispatching the actions to redux
                   props.sendId(item.id)
                   props.setDisp()

                   
               }}>
                   {item.poster_path!==null?( <div className="img-det">
              
              <img alt="img" src={path+item.poster_path}/>
            
              </div>):(null)}

           
              
               

           </div>

           )
       })}


 
   </div>):(null)}
        </div>
      
       
     
    )
}

//binding the state to props
const mapStateToProps=(state)=>{
    return{
        data:state.first.data
    }

}
// dispatching the action to reducer
const mapDispatchToProps=(dispatch)=>{
    return{
        sendId:(id)=>{
            dispatch({type:'SEND_ID',payload:id})

        },
        setDisp:()=>{
            dispatch({type:"SET_DISP",payload:true})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieList)
