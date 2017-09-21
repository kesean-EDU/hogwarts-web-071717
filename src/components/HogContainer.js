import React from 'react'
import HogList from './HogList'
import Hogs from '../porkers_data.js'


class HogContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      hogs: Hogs,
      filteredHogs: [],
      greaseOption: "All"
    }
  }


  sort = (e) => {
    let newHogs = this.state.hogs.sort((prev, next) => {
      if (prev[e.target.value] < next[e.target.value]) return -1
      if (prev[e.target.value] > next[e.target.value]) return 1
      return 0
    })

    this.setState({
      filteredhogs: newHogs
    })
  }

  greaseChecker = (e) => {
    if (e.target.value === "All") {
      this.greaseFilter("Greased")
    }else if (e.target.value === "Greased") {
      this.greaseFilter("Not Greased")
    }else {
      this.greaseFilter("All")
    }
  }

  greaseFilter(option){
    let filter = []

    if(option === "Greased"){
      filter = this.state.hogs.filter((hog) => { return hog.greased === true})
    }

    if(option === "Not Greased"){
      filter = this.state.hogs.filter((hog) => { return hog.greased === false})
    }

    this.setState({
      greaseOption: option,
      filteredHogs: filter
    })
  }

  render(){
    return(
      <div>
        <button className="Name Sort" onClick={this.sort} value="name">Sort Names</button>
        <button className="Weight Sort" onClick={this.sort} value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water">Sort Weights</button>
        <button className="Greased?" onClick={this.greaseChecker} value={this.state.greaseOption}>{this.state.greaseOption}</button>
        <br />
        <br />
        <div>
          <HogList hogs={this.state.filteredHogs.length === 0 ? this.state.hogs : this.state.filteredHogs}/>
        </div>
      </div>
    )
  }
}

export default HogContainer
