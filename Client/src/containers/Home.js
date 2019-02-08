import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cityList,cityDetails } from '../actions'
import { bindActionCreators } from 'redux';

// COMPONENTS
import CityList from '../components/home/CityList'


class Home extends Component {

    componentDidMount(){
        console.log('calling action')
        this.props.cityList();
    }

    filterNews(keyword){
        console.log("home coming", keyword)
        this.props.cityDetails(keyword);
    }



    render() {
        return (
            <div>
                <CityList list={this.props.citylist.citylist} 
                         cityDetail={(data) => this.filterNews(data)}
                         details={this.props.citylist.citydetail}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('forMST',state)
    return {
        citylist:state.citylist,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({cityList,cityDetails}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
