export function getMatch(list, id) {
  const matches = list.filter(item => item.id === id);
  const match = matches.length ? matches[0] : {};
  return match;
}
