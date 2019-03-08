import React, {Fragment} from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import { getCharacters } from '../actions'; // import actions

import { CharacterList } from "../components";


class CharacterListView extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     characters:[]
  //   }
  // }
  // state = {
  //   characters:[],
  //   fetching:''
  // }
  // constructor() {
  //   super();
  // }


  componentDidMount() {
    // call our action
    this.props.getCharacters();
    // this.setState({
    //   characters:this.props
    // });
    // console.log(this.state)
  }

  render() {
    if (this.props.fetching) { // return something here to indicate that you are fetching data
      return (

        <section className="loading-page">
          <Loader type='Ball-Triangle' color='#ff0000' height='50%' weight='50%' />
          <h3>Loading Characters</h3>
        </section>

      )
      
    }
    if (this.props.error) {
      return (

        <section className="loading-page">
          <Loader type='Ball-Triangle' color='#ff0000' height='50%' weight='50%' />
          <h3>Error Loading Characters</h3>
          <code>{this.props.error}</code>
        </section>

      )
    }
    // console.log(this.state)
    // console.log(this.props)
    return (
      <Fragment>
        <section className="character-list">
          <CharacterList characters={this.props.characters} />
        </section>
      </Fragment>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
})

export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
