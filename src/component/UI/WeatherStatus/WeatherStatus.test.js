import React from "react";
import axios from "axios";
import {
  fireEvent,
  userEvent,
  change,
  render,
  getByLabelText,
} from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import WeatherStatus from "./WeatherStatus";

import { screen } from "@testing-library/dom";

jest.mock("axios");

describe("WeatherStatus", () => {
  test("fetches weather data from an API and displays them", async () => {
    const weather = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=bde9f95555d3c5f1f74ca65c15176909"
    );
  });
  test("fetches stories from an API and fails", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<WeatherStatus />);
  });
});
