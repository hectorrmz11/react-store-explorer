import { render, unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import { createMemoryHistory } from "history";

let container: any = null;
let history;

describe("Header", () => {
  beforeEach(() => {
    // mock push function
    history = createMemoryHistory();
    history.push = jest.fn();

    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should render with Store Explorer title", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
      container
    );

    expect(container.textContent).toBe("Store Explorer");
  });
});
