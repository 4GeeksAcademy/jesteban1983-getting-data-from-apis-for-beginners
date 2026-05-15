async function solve(baseUrl) {
  // Your code here
  const response = await fetch(`${baseUrl}/overview`);
  const data = await response.json();
  return data.data.orders[0].customer["full name"];
}

// Do not change anything below this line
module.exports = solve;
