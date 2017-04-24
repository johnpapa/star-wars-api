module.exports = {
  getMatch: getMatch
};

function getMatch(list, id) {
  context.log(list);
  context.log(id);
  const matches = list.filter(item => item.id === id);
  context.log(matches);
  const match = matches.length ? match[0] : {};
  context.log(match);
  return match;
}
