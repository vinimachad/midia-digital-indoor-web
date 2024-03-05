export const masks = {
  none: '',
  phone: '(99) 9 9999-9999'
}

export default function unmask(value: string) {
  return value.replace(/\D/g, '')
}
