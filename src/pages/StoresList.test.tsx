import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import StoresList from "./StoresList";

describe("StoresList", () => {
  beforeEach(() => {
    const reactRedux = require("react-redux");
    jest.spyOn(reactRedux, "useSelector").mockReturnValue([]);
  });

  it("renders StoresList Component", () => {
    render(<StoresList />, { wrapper: MemoryRouter });
  });
});
