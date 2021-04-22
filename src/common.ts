import base58 from 'bs58'

const BASE58_LENGTH = 32

export const isValidHex = (hash: string) => /^([A-Fa-f0-9]{64})$/.test(hash)
export const toLowerCaseWithout0x = (hash: string) => hash.toLowerCase().replace(/0x/g, '')
export const isValidNearAddress = (address: string) => address.endsWith('.near') || /^[0-9a-fA-F]{64}$/.test(address)

export const isValidNearTx = (hash: string) => {
  try {
    const [txHash, address] = hash.split('_')
    return base58.decode(txHash).length === BASE58_LENGTH && isValidNearAddress(address)
  } catch (e) {
    return false
  }
}
