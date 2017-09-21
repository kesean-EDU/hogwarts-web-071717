import React from 'react'
import Hog from './Hog.js'

class HogList extends React.Component {

  render(){
    return(
      <div className="ui cards">
        {this.props.hogs.map((hog, index)=><Hog key={index} info={hog}/>)}
      </div>
    )
  }
}

export default HogList
