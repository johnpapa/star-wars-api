module.exports = {
  getMatch: getMatch
};

function getMatch(list, id) {
  const matches = list.filter(item => item.id === id);
  const match = matches.length ? match[0] : {};
  return match;
}
