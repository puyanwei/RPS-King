import { shallow } from "vue-test-utils";
import RPS from "../src/components/RPS";

describe("RPS component", () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(RPS, {});
  });

  it("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  });
});
