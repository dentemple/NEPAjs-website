/*
  Misc. Javascript functions
*/

export function convertUtcToLocalDateString(utc) {
  const date = new Date(utc);
  return date.toLocaleString();
}
