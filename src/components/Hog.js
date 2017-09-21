import React from 'react'

class Hog extends React.Component {

  render(){
    return(
      <div className="ui card">
        <div className="content">
          <h1>{ this.props.info.name} </h1>
        </div>
        <div className="ui slide reveal content">
          <div className="visible content">
            <img src="./hog-imgs/cherub.jpg" className="ui small image"/>
          </div>
          <div className="hidden content">
            <h3>Specialty: { this.props.info.specialty} </h3>
            <h3>Greased: { this.props.info.greased === false ? "No" : "Yes"} </h3>
            <h3>Weight Ratio: { this.props.info["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] } </h3>
            <h3>Highest Medal Achieved: {this.props.info["highest medal achieved"] }</h3>
          </div>
        </div>
      </div>
    )
  }

}

export default Hog
