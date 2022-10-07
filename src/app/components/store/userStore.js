import { atom } from "recoil";

const userState = atom({
  key: "userState", // unique ID (with respect to other atoms/selectors)
  default: { firstName: "", lastName: "", role: "" }, // default value (aka initial value)
});

export { userState };
