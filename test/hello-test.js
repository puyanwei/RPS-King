import { shallow } from "@vue/test-utils";
import Hello from "../src/components/hello.vue";

describe("Hello.vue", () => {
  it("testing that hello world appears on the page", () => {
    const wrapper = shallow(Hello);
    const message = wrapper.find("h1").text();
    expect(message).toBe("hello world");
  });
});
