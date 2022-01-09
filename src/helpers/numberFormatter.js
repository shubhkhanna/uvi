export default function numFormat(num) {
  if (num > 999 && num < 1000000) {
    // convert to k for number from > 1000 < 1 million
    return (num / 1000).toFixed(1) + 'k';
  } else if (num > 1000000) {
    // convert to m for number from > 1 million
    return (num / 1000000).toFixed(1) + 'm';
  } else if (num < 1000) {
    // if value < 1000, nothing to do
    return num;
  }
}
