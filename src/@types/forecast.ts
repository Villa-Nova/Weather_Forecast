import { WeatherIconsKeysProps } from "../utils/weatherIcons";

export interface WeatherAPIResponseProps {
  list: List[];
};

interface List {
  dt_txt: string;
  pop: number;
  main: Main,
  wind: Wind,
  weather: Weather[];
}[];

export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
  humidity: number;
  temp_kf: number;
};

export interface Wind {
  speed: number;
};

export interface Weather {
  main: WeatherIconsKeysProps;
  description: string;
}[];