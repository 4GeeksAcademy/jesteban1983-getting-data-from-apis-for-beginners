async function solve(baseUrl) {
  // Your code here
  const response = await fetch(`${baseUrl}/items/2`);
  const data = await response.json();
  return data.data.item.profile["full name"];
}

// Do not change anything below this line
module.exports = solve;
