import escapeRegExp from 'escape-string-regexp'

export const searchMyFriendsForName = (query, friends = []) => {
  const match = new RegExp(escapeRegExp(query), 'i')
  const searchNames = friends.filter(friend => match.test(friend.name))
  return searchNames
}
