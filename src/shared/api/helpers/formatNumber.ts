export const formatNumber = (num: number): string => {
  if (num < 1_000_000) {
    return num.toLocaleString();
  } else {
    const millions = num / 1_000_000;
    if (millions % 1 === 0) {
      return `${millions}m`;
    } else {
      return `${millions.toFixed(1)}m`;
    }
  }
}