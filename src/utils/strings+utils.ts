/* eslint-disable @typescript-eslint/no-unused-vars */
interface String {
  toCapitalize(): string
}

String.prototype.toCapitalize = function (): string {
  const splitedText = this.split(' ')
  const capitalizedText = splitedText.map((text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
  })
  return capitalizedText.join(' ')
}
