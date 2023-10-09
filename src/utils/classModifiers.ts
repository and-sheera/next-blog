export function classModifiers(
  baseName: string,
  mods: string | undefined
): string {
  let allMods = ''
  if (typeof mods !== 'undefined' && mods) {
    const modsList = mods.split(',')
    for (const element of modsList) {
      allMods +=
        element.trim()[0] === '-'
          ? ' ' + baseName + element.trim()
          : ' ' + element.trim() + '__' + baseName
    }
    allMods = allMods.trim()
  }
  return allMods
}
