async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/overview`);
  const data = await response.json();
  return data.user.profile.name;
}

// Do not change anything below this line
module.exports = solve;
