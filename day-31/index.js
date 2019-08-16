function useArguments() {
  return [...arguments].reduce((acc, num) => acc + num, 0);
}
