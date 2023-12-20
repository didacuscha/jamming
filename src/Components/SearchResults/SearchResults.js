import React from "react";
import styles from "./SearchResults.module.css";
import { TrackList } from "../TrackList/TrackList";

export class SearchResults extends React.Component {
    render() {
        return (
            <div className={styles.SearchResults}>
                {/* <!-- Add a TrackList component --> */}
                <TrackList tracks={this.props.searchResults} 
                    onAdd={this.props.onAdd}
                    isRemoval={false}
                />
            </div>          
        );
    }
}