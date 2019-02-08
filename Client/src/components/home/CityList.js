import React, {Component} from 'react'

const showCity = ({list,details},clickButtonAction) => {
    if(list){
       
        return list.map((item, index)=>{
            return (
                
                    <div className="d-inline-block p-2">
                        <div className="card">
                            <img className="card-img-top" src={`/images/city/${item.Name}.jpg`} alt="city_image"/>
                            
                            <div className="card-body">
                                <img class="flag" src={`/images/maps/${item.Country}.png`}/>
                                <h5 className="card-title">
                                  <a href="{item.City_Link}" target="_blank" class="city_name">{item.Name}</a><h6 class="country">
                                  <i>{item.Country}</i></h6></h5>
                                <p className="card-text">
                                    
                                <span className="badge badge-info">Population: {item.Population}</span>
                                    
                                </p>
                              
                                <a href="#" className="btn btn-success" data-toggle="modal" 
                              data-target={'#city'+index}  onClick={() => clickButtonAction(item.Name)}>
                                    See Details
                                </a>
                            </div>
                        </div>
                        <div className="modal" id={'city'+index}>
                            <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h4 className="modal-title">
                                    <img class="flag" src={`/images/maps/${item.Country}.png`}/>
                                    {item.Name}
                                    ({item.Country})
                                        
                                </h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                
                                <div className="modal-body">
                                        <span className="badge badge-warning">Population: {item.Population}</span><br/>
                                        <p>{details}<a className="know_More" href={item.City_Link} target="_blank">Know More</a></p>
                                        
                                </div>
                                
                                <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                    </div>
            )
        })
    }
}

// Component to display Weather
class CityList extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
          isHidden: false
        }
      }
      clickButtonAction = (data) => {
        this.props.cityDetail(data)
      }

      toggleHidden() {
        this.setState({ isHidden: !this.state.isHidden });
      }
    

    render(){
        console.log(this.props)
    
        return (
            <div className="container">
                <div className="row">
                    <div className="home-latest">
                        {showCity(this.props,this.clickButtonAction)}

                    </div>
                </div>
            </div>
        );
    }
};

export default CityList;