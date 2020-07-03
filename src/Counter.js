import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseCount, decreaseCount } from './redux/action'

function Counter(props) {
    const { increaseCount, decreaseCount } = props;
    
    const formatter = new Intl.NumberFormat('id-ID');

    return(
        <div className="count-area">
            {
                !props.country ? null :
                <div className="country">
                    <h1>Covid-19 : <span>{ props.country.country }</span></h1>
                    <h3><span>{ formatter.format(props.country.cases) }</span> Kasus</h3>
                    <h3><span>{ formatter.format(props.country.recovered) }</span> Sembuh</h3>
                    <h3><span>{ formatter.format(props.country.deaths) }</span> Meninggal</h3>
                </div>
            }
            <div className="counter">Counter: <span>{props.count}</span></div>
            <button id="subtract" onClick={decreaseCount}>Substract</button>
            <button id="add" onClick={increaseCount} >Add</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.count,
        country: state.country
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ increaseCount, decreaseCount }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)