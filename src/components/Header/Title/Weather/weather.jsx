import { useEffect, useState } from "react";

const locationObj = async (location) => {
  const apiKey = "46f06c49a8454d151366c136ec5bee2b";
  if (!location) return;
  const { latitude, longitude } = location.coords;

  const result_1 = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
  );
  const result_2 = await result_1.json();
  return result_2;
};

function Weather(props) {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const navigetor = navigator.geolocation.getCurrentPosition((item) => {
      locationObj(item).then((item) => setLocation(item));
    });
  }, []);

  if (Object.keys(location).length === 0) return;
  return location;
}

export default Weather;
