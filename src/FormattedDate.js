import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let timeNow = new Date();
  let localTime = timeNow.getTime();
  let localOffset = timeNow.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let cityDateCode = utc + 1000 * props.date;
  let cityDate = new Date(cityDateCode);
  let day = days[cityDate.getDay()];
  let month = months[cityDate.getMonth()];
  let date = cityDate.getDate();

  return (
    <div>
      {day},&nbsp; {month} {date}
    </div>
  );
}

/*To get UTC

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];  

  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();

  return (
    <div>
      {day},&nbsp;{month} {date}
    </div>
  );*/
