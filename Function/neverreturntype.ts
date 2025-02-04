function makeError1(message: string): never {
  throw new Error(message);
}

//wrong
function makeError2(message: string): never {
  return undefined;
  throw new Error(message);
}
