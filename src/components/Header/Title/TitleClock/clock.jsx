import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ClockBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const DaysBlock = styled.div`
  text-align: center;
`;
function Clock(props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      return clearInterval(timer);
    }, 1000);
  });

  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const Time = new Intl.DateTimeFormat("en-US", options).format(time);
  const timeunit = time.getHours() <= 11 ? "AM" : "PM";
  const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  const minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const second =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();

  return (
    <ClockBlock>
      <DaysBlock>
        <p>TODAY</p>
        <p>{Time}</p>
      </DaysBlock>
      <div>
        {timeunit}&nbsp;
        {hours}:{minutes}:{second}
      </div>
    </ClockBlock>
  );
}

export default Clock;
