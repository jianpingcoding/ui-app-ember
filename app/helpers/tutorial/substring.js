// import Helper from "@ember/component/helper";

// export default class Substring extends Helper {
//   compute([string], { start, length }) {
//     return string.substr(start || 0, length);
//   }
// }

import { helper } from '@ember/component/helper';

// {{substring @username start=0 length=1}}
function substring([string], { start, length }) {
  return string.substr(start || 0, length);
}

// {{substring @username 0 1}}
// function substring(args) {
//   let [string, start, length] = args;
//   return string.substr(start, length);
// }

// {{substring @username 0 1}}
// function substring([string, start, length]) {
//   return string.substr(start, length);
// }

export default helper(substring);
