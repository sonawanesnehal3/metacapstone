import Heading from "../sections/headingPages/Heading";
import ReservationForm from "../sections/aboutPages/reservePages/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
