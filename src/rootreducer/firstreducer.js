
import React from 'react'

const initState={
    data:[],
    data1:"hello-hi",
    dataId:{},
    isdisp:false
}
//reducer function with state and action
const firstreducer=(state=initState,action)=>{
    switch(action.type){
        case 'GET_DATA':
            return {
                ...state,
                data:action.payload
            }
        case 'SEND_ID':
            return{
                ...state,
                dataId:state.data.find((item)=>item.id==action.payload)
            }
        case 'SET_DISP':
            return{
                ...state,
                isdisp:action.payload
            }
        case 'RESET_DISP':
            return{
                ...state,
                isdisp:action.payload
            }
        case 'NO_DATA':
            return{
                ...state,
                data:action.payload
            }

        default:
            return state

    }


}

export default firstreducer