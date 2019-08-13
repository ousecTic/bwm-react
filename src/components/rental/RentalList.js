import React from "react";
import { RentalCard } from "./RentalCard";
import { connect } from "react-redux";

//actions

import * as actions from "../../actions/index";

class RentalList extends React.Component {
  //this is going to display the amount of rental cards depending on the number of array
  renderRentals = () => {
    return this.props.rentals.map((rental, index) => (
      <RentalCard key={index} colNum="col-md-3 col-xs-6" rental={rental} />
    ));
  };

  //component did mount
  componentWillMount() {
    this.props.dispatch(actions.fetchRentals());
  }

  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title">Your Home All Around the World</h1>
        <div className="row">{this.renderRentals()}</div>
      </section>
    );
  }
}

//this will give access to the state,
//so the component can use it as a props
function mapStateToProps(state) {
  return {
    rentals: state.rentals.data
  };
}

//connecting the state props to the component

export default connect(mapStateToProps)(RentalList);

//now RentalList can use the state as its props
