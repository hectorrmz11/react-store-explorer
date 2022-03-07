import { render } from "@testing-library/react";
import StoreForm from "./StoreForm";

describe("StoreForm", () => {
  beforeEach(() => {
    const reactRedux = require("react-redux");
    jest.spyOn(reactRedux, "useSelector").mockReturnValue([]);
  });

  it("renders StoreForm Component", () => {
    render(<StoreForm />);
  });
});
