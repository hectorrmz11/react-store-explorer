import { shallow } from "enzyme";
import {
  bannersStub,
  statesStub,
  storeStub,
  timezonesStub,
} from "../../test/test";
import StoreForm from "./StoreForm";
import * as reactRedux from "react-redux";

describe("StoreForm", () => {
  const onFormSubmitted = jest.fn();
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  beforeEach(() => {
    useSelectorMock
      .mockReturnValueOnce(bannersStub)
      .mockReturnValueOnce(statesStub)
      .mockReturnValueOnce(timezonesStub);
  });

  afterEach(() => {
    useSelectorMock.mockClear();
  });

  it("renders StoreForm Component banners", () => {
    shallow(<StoreForm onFormSubmitted={onFormSubmitted} store={storeStub} />);
  });
});
