import { shallow } from "enzyme";
import StoresTableHeader from "./StoresTableHeader";

describe("StoresTableHeader", () => {
  const onRequestSort = jest.fn();

  it("renders StoresTableHeader Component", () => {
    shallow(
      <StoresTableHeader
        onRequestSort={onRequestSort}
        order="asc"
        orderBy="vanityName"
      />
    );
  });
});
