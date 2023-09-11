export function isDayTime(): Boolean {
  const hours: number = new Date().getHours();
  return hours > 6 && hours < 18;
}