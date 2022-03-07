import { render } from "@testing-library/react";
import { storeStub } from "../../test/test";
import DeleteModal from "./DeleteModal";

describe("DeleteModal", () => {
  const open = false;
  const onClose = jest.fn();
  const onStoreDelete = jest.fn();

  it("renders DeleteModal Component", () => {
    render(
      <DeleteModal
        store={storeStub}
        open={open}
        onClose={onClose}
        onStoreDelete={onStoreDelete}
      />
    );
  });
});
