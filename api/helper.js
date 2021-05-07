const encodeString = (S1) => {
  if (S1.length <= 1) return S1;
  else {
    let newString = "";
    count = 0;
    let i = 0,
      j = 0;
    while (i < S1.length && j < S1.length) {
      while (j < S1.length && S1[i] == S1[j]) {
        count++;
        j++;
      }
      if (count == 1) newString += S1[i];
      else newString += S1[i] + String(count);
      count = 0;
      i = j;
    }
    return newString;
  }
};

const decodeString = (S1) => {
  if (S1.length <= 1) return S1;
  else {
    let newString = "";
    let prev = S1[0];
    let count = "";
    for (let i = 1; i < S1.length; i++) {
      if (isNaN(Number(S1[i]))) {
        newString += prev.repeat(Number(count == "" ? "1" : count));
        prev = S1[i];
        count = "";
      } else {
        count += S1[i];
      }
    }
    if (prev != "") newString += prev.repeat(Number(count == "" ? "1" : count));
    return newString;
  }
};
module.exports = { encodeString, decodeString };
