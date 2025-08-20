import {MdDelete} from 'react-icons/md'

import './index.css'

const ListItem = props => {
  const {tracksListDetails, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = tracksListDetails

  const onDeleteTrack = () => {
    deleteTrack(id)
  }

  return (
    <li className="song-list-container">
      <div className="track-container">
        <img src={imageUrl} alt="track" className="track-img" />
        <div>
          <p className="song-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={onDeleteTrack}
          data-testid="delete"
        >
          <MdDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default ListItem
