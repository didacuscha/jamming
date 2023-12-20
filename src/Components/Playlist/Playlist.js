import React from "react";
import { TrackList } from "../TrackList/TrackList";
import styles from "./Playlist.module.css";

export class Playlist extends React.Component {

  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <div className={styles.Playlist}>
        <input defaultValue={"New Playlist"} onChange={this.handleNameChange} />
        {/* <!-- Add a TrackList component --> */}
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
        <button className={styles["Playlist-save"]} onClick={this.props.onSave} >
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

