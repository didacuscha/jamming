import React from "react";
import styles from "./SearchBar.module.css";

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={ term: "" };
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(e) {
        this.setState({ term: e.target.value })
    }

    render() {
        return (
            <div className={styles.SearchBar}>
                <input placeholder="Enter A Song, Album, or Artist" onChange={(e) => this.handleTermChange(e)} />
                <button className={styles.SearchButton} onClick={this.search}>SEARCH</button>
            </div>          
        );
    }
}