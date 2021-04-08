const processInputValue = (value: string): string =>
  value.replace(/\s\s+/g, " ").trim();

export default processInputValue;
