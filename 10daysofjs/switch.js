function getLetter(s) {
  const reg = new RegExp(/[a-z]{1,100}/);
  if (!reg.test(s)) {
    return null;
  }
  let letter;
  // shame on you for making me write this...
  switch (s[0]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      letter = 'A';
      break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
      letter = 'B';
      break;
    case 'h':
    case 'i':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
      letter = 'C';
      break;
    case 'n':
    case 'p':
    case 'q':
    case 'r':
    case 's':
    case 't':
    case 'v':
    case 'w':
    case 'x':
    case 'y':
    case 'z':
      letter = 'D';
      break;
  }

  return letter;
}
