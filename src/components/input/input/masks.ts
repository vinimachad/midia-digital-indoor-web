export const masks = {
  none: '',
  phone: '(99) 9 9999-9999'
}

export default function unmask(value: string) {
  return value.replace(/\D/g, '')
}

export const maskToPhoneNumber = (value: string | undefined) => {
  if (!value) return ''
  return value
    .replace(/[\D]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2 ')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{4})(\d+?)/, '$1')
}
