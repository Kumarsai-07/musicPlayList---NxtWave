import {Component} from 'react'
import {MdSearch} from 'react-icons/md'

import ListItem from '../PlayListItem'

import './index.css'

class PlayList extends Component {
  constructor(props) {
    super(props)
    const {initialTracksList} = props

    this.state = {
      searchInput: '',
      tracksList: initialTracksList,
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteTrack = id => {
    const {tracksList} = this.state
    const deletedResults = tracksList.filter(track => track.id !== id)
    this.setState({tracksList: deletedResults})
  }

  renderNotFound = () => (
    <div className="no-Songs-found-container">
      <p className="not-found-text">No Songs Found</p>
    </div>
  )

  render() {
    const {searchInput, tracksList} = this.state
    console.log(tracksList)
    const filteredResults = tracksList.filter(eachTrack =>
      eachTrack.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <>
        <div className="playlist-bg-container">
          <h1 className="name">Ed Sheeran</h1>
          <p className="caption">Singer</p>
        </div>
        <div className="playlist-container">
          <div className="label-container">
            <h1 className="heading">Songs Playlist</h1>
            <div className="seach-input-container">
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
              <MdSearch className="search-icon" />
            </div>
          </div>
          <ul className="track-list-container">
            {filteredResults.map(eachItem => (
              <ListItem
                tracksListDetails={eachItem}
                key={eachItem.id}
                deleteTrack={this.onDeleteTrack}
              />
            ))}
            {filteredResults.length === 0 && this.renderNotFound()}
          </ul>
        </div>
      </>
    )
  }
}

export default PlayList
