'use strict'

function unix_2_utc(unix_time) {
  // Convert from seconds to milliseconds (UTC)

  let time = new Date(unix_time * 1000);
  return time
}

function unix_2_local(unix_time) {
  return unix_2_utc(unix_time).toLocaleDateString("es-ES");
}

function main() {
  console.log(unix_2_local(1622713175));
  console.log(unix_2_utc(1622713175));
}

main();
