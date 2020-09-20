import React,{useState} from 'react'
import {connect} from 'react-redux'

 const Main = (props) => {
     console.log(props.details)
     const[path,setPath]=useState('https://image.tmdb.org/t/p/w500//')
    return (
        <div>
            <div className="img-div">
                <img className="" src={path+props.details.poster_path} alt=""/>
            </div>

            <div className="details-div">
                <p><em>Title:{props.details.original_title}</em></p>
                <p><em>Popularity:{props.details.popularity}</em></p>
                <p><em>Release Date:{props.details.release_date}</em></p>
       
                   </div>

                   <div className="overview">
                <p><em>{props.details.overview}</em></p>
                   </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{

        details:state.first.dataId
    }

}

export default connect(mapStateToProps)(Main)


