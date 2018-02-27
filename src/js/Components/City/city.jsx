import React from 'react';

class City extends React.Component {
  render() {
const {search} = this.props
    return (
      <div>

        <div className="col-12" >

          <div className="card border border-info">

            <div className="card-header alert-primary City Information">City Information</div>

            <div className="card-body">
              <div className="container">
                <div className=" text-center weatherDisplay">
                  <h1 className="display-7 text-center">{search.city && search.city.name}</h1>
                  <p className="lead text-center font-weight-bold">lat/long: {search.city && search.city.coord.lat} / {search.city && search.city.coord.lon} </p>

                  <div className="card-Block">
                    <div className="row">
                      <div className="col-4 my-2 text-center">Temperature(F)
                            <p className="text-success">{search.list && search.list[0].main.temp}F</p>
                      </div>
                      <div className="col-4 my-2 text-center">Pressure
                            <p className="text-success">{search.list && search.list[0].main.pressure}</p>
                      </div>
                      <div className="col-4 my-2 text-center">Humidity
                            <p className="text-success">{search.list && search.list[0].main.humidity}%</p>
                      </div>
                      <div className="col-4 my-2 text-center">Lowest Temp(F)
                            <p className="text-success">{search.list && search.list[0].main.temp_min}F</p>
                      </div>
                      <div className="col-4 my-2 text-center">Highest Temp(F)
                            <p className="text-success">{search.list && search.list[0].main.temp_max}F</p>
                      </div>
                      <div className="col-4 my-2 text-center">Wind Speed
                            <p className="text-success">{search.list && search.list[0].wind.speed}mph</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default City;