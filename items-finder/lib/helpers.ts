/**
 *
 * These functions does not belongs to any module but they are very useful
 *
 * function to format a amount by currency
 * @params amount number
 * @params currency string
 * @params lang string
 * @return numberFormat string
 */
export function formatAmount(amount, currency, lang = 'es-ar') {
  if (!amount) {
    return ''
  }

  const numberFormat = amount.toLocaleString(lang, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  })
  return numberFormat
}
