import { mount } from "enzyme";
import { storeStub } from "../../test/test";
import StoresTable from "./StoresTable";

describe("StoresTable", () => {
  const onStoreClicked = jest.fn();
  const onDeleteStoreClicked = jest.fn();
  const onEditStoreClicked = jest.fn();
  const onViewMoreClicked = jest.fn();

  const stores = [storeStub];

  it("renders StoresTable Component", () => {
    mount(
      <StoresTable
        onStoreClicked={onStoreClicked}
        onDeleteStoreClicked={onDeleteStoreClicked}
        onEditStoreClicked={onEditStoreClicked}
        onViewMoreClicked={onViewMoreClicked}
        stores={stores}
      />
    );
  });
});
