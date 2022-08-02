import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes(CakeContainer) - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
const mapStateToProps = state => {
    debugger
    return{
        numOfCakes:state.numOfCakes//selector
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake:() =>dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)
