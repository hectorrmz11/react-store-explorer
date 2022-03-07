import { render } from "@testing-library/react";
import { mount } from "enzyme";
import StoresSearchBar from "./StoresSearchBar";

describe("StoresSearchBar", () => {
  const onChange = jest.fn();

  const event = {
    preventDefault() {},
    target: { value: "the-value" },
  };

  it("should render StoresSearchBar component", () => {
    render(<StoresSearchBar onChanged={onChange} />);
  });

  it("should trigger onChange fn when input changes", () => {
    const searchBar = mount(<StoresSearchBar onChanged={onChange} />);

    searchBar.find("input").simulate("change", event);

    expect(onChange).toHaveBeenNthCalledWith(1, event.target.value);
  });
});
