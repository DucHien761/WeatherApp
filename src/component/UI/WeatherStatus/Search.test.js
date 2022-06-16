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

import { getByPlaceholderText, screen } from "@testing-library/dom";

describe("search", () => {
  test("update when change input value", async () => {
    const setQuery = jest.fn((value) => {});
    const { getByPlaceholderText } = render(<WeatherStatus  />);

    const searchInput = screen.getByPlaceholderText("type the city");

    fireEvent.change(searchInput, { target: { value: "denver" } });

    expect(searchInput.value).toBe("denver");
  });
});
    