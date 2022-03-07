import { render, screen } from "@testing-library/react";
import StoreListItem from "./StoreListItem";

describe("StoreListItem", () => {
  const props = {
    title: "Example",
    text: "Value",
  };

  it("renders StoreListItem Component", () => {
    render(<StoreListItem title={props.title} text={props.text} />);
  });

  it("renders title on Component", () => {
    render(<StoreListItem title={props.title} text={props.text} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  it("renders text on Component", () => {
    render(<StoreListItem title={props.title} text={props.text} />);

    expect(screen.getByText(props.text)).toBeInTheDocument();
  });
});
