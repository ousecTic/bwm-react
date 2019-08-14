import React from "react";
import { RentalCard } from "./RentalCard";

//actions

export class RentalList extends React.Component {
  //this is going to display the amount of rental cards depending on the number of array
  renderRentals = () => {
    return this.props.rentals.map((rental, index) => (
      <RentalCard key={index} colNum="col-md-3 col-xs-6" rental={rental} />
    ));
  };

  render() {
    return <div className="row">{this.renderRentals()}</div>;
  }
}
