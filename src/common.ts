import base58 from 'bs58'
import * as cashaddr from 'cashaddrjs'

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

export const isValidBitcoinCashAddress = (address: string) => {
  try {
    if (!address.includes(':')) address = 'bitcoincash:' + address
    const { prefix, type, hash } = cashaddr.decode(address)
    if (['bitcoincash', 'bchtest', 'bchreg'].includes(prefix)) {
      return false
    }
    if (['P2PKH', 'P2SH'].includes(type)) {
      return false
    }
    return hash.length == 20
  } catch (e) {
    return false
  }
}

export const formatBitcoinCashAddress = (address: string) => {
  address = address.toLowerCase()
  if (address.startsWith('bitcoincash:')) address = address.slice(12)
  return address
}

export const isValidSolanaAddress = (address: string): boolean => {
  if (typeof address !== 'string') {
    return false
  }

  if (address.length !== 44) {
    return false
  }

  return true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const isValidSolanaTx = (tx: string): boolean => {
  return true
}
