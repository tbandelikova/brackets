module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 == 0) {
    let config = bracketsConfig.slice(0);
    let input = str.split('');
    let stack = [];

    input.map(el => toStack(el));

    function toStack(bracket) {
      if (config.map(item => item[0] == bracket).includes(true)) {
        if (config.map(item => item[1] == bracket).includes(true)) {
          checkSame(bracket);
        } else {
          stack.push(bracket);
        }
      } else {
        config.find(el => el.includes(bracket))[0] === stack[stack.length - 1] && stack.pop();
      }
    }

    function checkSame(bracket) {
      stack.length == 0 ? stack.push(bracket) : stack[stack.length - 1] === bracket ? stack.pop() : stack.push(bracket);
    }

    return stack.length == 0;
  }
  return false;
}
