import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import axios from "axios";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=19.075983&lon=72.877655&appid=a8a2d720fa166493dd402f9fe3ed9fc5&units=metric`;

const WeatherScreen = () => {
  const [weather, setWeather] = useState("");

  const fetchWeather = async () => {
    try {
      const res = await axios.get(url);

      const data = res.data;
      console.log(data);
      setWeather(data);
    } catch (error: any) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Error status:", error.response.status);
        console.error("Error details:", error.response.data);

        // Handle specific status codes
        if (error.response.status === 404) {
          console.error("City not found");
        } else if (error.response.status === 500) {
          console.error("Server error");
        }
      } else if (error.request) {
        // Request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something else caused the error
        console.error("Error:", error.message);
      }
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (!weather) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Text>{JSON.stringify(weather)}</Text>
    </View>
  );
};
export default WeatherScreen;
