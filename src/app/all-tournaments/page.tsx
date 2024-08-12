import React from "react";
import AllTournamnets from "../Components/AllTournaments/AllTournamnets";
import RegistrationDates from "../Components/Events/RegistrationDates";
import OtherEvents from "../Components/AllTournaments/OtherEvents";

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
