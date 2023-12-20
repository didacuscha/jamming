import React from "react";
import styles from "./Track.module.css";

export class Track extends React.Component {
  // missing constructor that eventually will get evaporated since it has to be done with function components
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

    addTrack() {
      this.props.onAdd(this.props.track);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action" onClick={() => this.removeTrack()}>-</button>
        } else {
            return <button className="Track-action" onClick={() => this.addTrack()}>+</button>
        }
    }

    removeTrack() {
      this.props.onRemove(this.props.track)
    }

    render() {
        return (
            <div className={styles.Track}>
              <div className={styles["Track-information"]}>
                {/* <h3><!-- track name will go here --></h3> */}
                <h3>{this.props.track.name}</h3>
                {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
                <p>{this.props.track.artist} | {this.props.track.album} </p>
              </div>
              {/* <button class="Track-action"><!-- + or - will go here --></button> */}
              {this.renderAction()}
            </div>
          );
    }   
}
