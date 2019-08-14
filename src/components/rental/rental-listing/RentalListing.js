import React from "react";
import { RentalList } from "./RentalList";
import { connect } from "react-redux";

//actions

import * as actions from "actions";

class RentalListing extends React.Component {
  //component did mount
  componentWillMount() {
    this.props.dispatch(actions.fetchRentals());
  }

  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title">Your Home All Around the World</h1>
        <RentalList rentals={this.props.rentals} />
      </section>
    );
  }
}

//this will give access to the state,
//so the component can use it as a props
function mapStateToProps(state) {
  return {
    //this is going to be my props
    rentals: state.rentals.data
  };
}

//connecting the state props to the component

export default connect(mapStateToProps)(RentalListing);

//now RentalList can use the state as its props
