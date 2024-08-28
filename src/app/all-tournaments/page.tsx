import React from "react";
import AllTournamnets from "../Components/AllTournaments/AllTournamnets";
import OtherEvents from "../Components/AllTournaments/OtherEvents";
import RegistrationDates from "../Components/events/RegistrationDates";

const AllTournaments = () => {
  return (
    <>
      <AllTournamnets />
      <RegistrationDates />
      <OtherEvents />
    </>
  );
};

export default AllTournaments;
