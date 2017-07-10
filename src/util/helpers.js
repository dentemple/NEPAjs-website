export function fromJSONtoString(str) {
  return JSON.stringify(str, null, 2);
}

export function fromJSONtoDate(utc) {
  const d = new Date(utc);
  let formattedDate =
    d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
  const hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
  const minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
  const formattedTime = hours + ":" + minutes;

  return (formattedDate = formattedDate + " " + formattedTime);
}
