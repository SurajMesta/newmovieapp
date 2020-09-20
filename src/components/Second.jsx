import React from 'react'
import MovieList from './MovieList'
import Main from './Main'
import {connect} from 'react-redux'


const Second=(props)=>{
    return(
        <div className="sec-div">
            <div className=" movie-list">
                {props.statedata.length!==0?(   <MovieList/>):(null)}
         
           
            </div>
            {/* to display the details content */}
            {props.stateval?(  <div className="det-sel">
            <Main/>
            </div>):(null)}
          
            
        </div>

    )
}
const mapStateToProps=(state)=>{
    return{
        stateval:state.first.isdisp,
        statedata:state.first.data
    }

}

export default connect(mapStateToProps)(Second) 