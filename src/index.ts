
interface Team {
  name: string,
  points: number
}
export const getResults = (division: Team[], n: number) => {
  // Your code here
  if (division.length < n * 2) {
    return 'Promotion and relegation will not work. Too small number of teams'
  }

  const sortedNameList = division
    .sort((a: Team, b: Team) => b.points - a.points)
    .map(({ name }) => name)

  const promoted = sortedNameList.slice(0, n).join('\n')
  const renegaded = sortedNameList.slice(-n).join('\n')
  return `Promote:\n${promoted}\n\nRelegate:\n${renegaded}`
};
