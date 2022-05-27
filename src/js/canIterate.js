export default function canIterate(value) {
  if (value && value[Symbol.iterator]) {
    return true;
  }
  return false;
}
