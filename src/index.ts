// jscout.ts

import { find } from "./find";
import { update } from "./update";
import { isValid } from "./isValid";
import { fix } from "./fix";
import { IJscout } from "./jscout.interface";

const jscout: IJscout = {
  find,
  update,
  isValid,
  fix,
};

export default jscout;
export { find, update, isValid, fix };
