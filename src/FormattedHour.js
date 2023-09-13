import React from "react";

export default function FormattedHour(props) {
  let timeNow = new Date();
  let localTime = timeNow.getTime();
  let localOffset = timeNow.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let cityDateCode = utc + 1000 * props.hour;
  let cityDate = new Date(cityDateCode);
  let hours = cityDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = timeNow.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {hours}:{minutes}
    </div>
  );
}

/*To get UTC

export default function FormattedHour(props) {
  let hours = props.hour.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {hours}:{minutes}
    </div>
  );
}*/
