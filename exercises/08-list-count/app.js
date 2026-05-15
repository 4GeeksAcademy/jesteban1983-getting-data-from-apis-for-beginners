async function solve(baseUrl) {
  // Your code here
  const response = await fetch(`${baseUrl}/items`);
  const data = await response.json();
  return data.data.count;
}

// Do not change anything below this line
module.exports = solve;
