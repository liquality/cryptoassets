import base58 from 'bs58'

const BASE58_LENGTH = 32

export const isValidHex = (hash: string) => /^([A-Fa-f0-9]{64})$/.test(hash)
export const toLowerCaseWithout0x = (hash: string) => hash.toLowerCase().replace(/0x/g, '')

export const isBase58 = (hash: string, separator?: string) => {
  try {
    if (separator) {
      return base58.decode(hash.split(separator)[0]).length === BASE58_LENGTH
    }
    return base58.decode(hash).length === BASE58_LENGTH
  } catch (e) {
    return false
  }
}
