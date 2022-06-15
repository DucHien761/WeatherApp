import React from "react";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import WeatherDetail from "./WeatherDetail";

jest.mock("axios");

describe("WeatherDetail", () => {
  test("fetches weather data from an API and displays them", async () => {
    const weather = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=bde9f95555d3c5f1f74ca65c15176909"
    );
  });

  test("fetches stories from an API and fails", async () => {
  axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<WeatherDetail />);

   
  });
});
