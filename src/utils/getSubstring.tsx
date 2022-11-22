export const getSubstring = (string: string, char: string) => {
  return [string.replace(/[.,:;-]/g, '').split(' ').filter(e => e[0] === char).join(', ')]
}