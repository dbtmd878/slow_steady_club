import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const ClockBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

  return (
    <ClockBlock>
      <div>
        <p>TODAY</p>
        <p>{Time}</p>
      </div>
      <div>
        {timeunit}&nbsp;
        {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
      </div>
    </ClockBlock>
  );
}

export default Clock;
