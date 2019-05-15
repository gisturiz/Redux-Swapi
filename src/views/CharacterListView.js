import React from "react";
import { connect } from "react-redux";
import { getInfo } from '../actions';
import { CharacterList } from "../components";
import Loader from "react-loader-spinner";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getInfo();
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      <Loader type="Rings" color="#00BFFF" height="90" width="60" />
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.isFetching
});

export default connect(
  mapStateToProps, 
  { getInfo }
)(CharacterListView);
