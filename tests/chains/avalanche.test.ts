import { expect } from 'chai'
import { chains } from '../../src'

describe('Avalanche chain tests', function () {
  const avalanche = chains.avalanche

  it('Has correct name', () => {
    expect(avalanche.name).to.be.equal('Avalanche', 'Invalid chain name')
  })

  it('Has correct code', () => {
    expect(avalanche.code).to.be.equal('AVALANCHE', 'Invalid chain code')
  })

  it('Has correct native asset', () => {
    expect(avalanche.nativeAsset).to.be.equal('AVAX', 'Invalid native asset')
  })

  it('Has correct fee unit', () => {
    expect(avalanche.fees.unit).to.be.equal('gwei', 'Invalid fee unit')
  })

  it('Has correct number of confirmations', () => {
    expect(avalanche.safeConfirmations).to.be.equal(5, 'Invalid number of confirmation')
  })

  it('Provides correct address validation', () => {
    const validAddress = ['avax10nfrs8ja5sg44664s302y5rany28zmy0s48d86', 'avax1k30tskunzxr2tmapy8p4y0ujn2802yr3743679']

    validAddress.forEach((a: string) => {
      expect(avalanche.isValidAddress(a)).to.be.true
    })

    const invalidAddress = ['9eed84cfc2ac0068dd8fc10b8b3b71c8d0f74cfd09211e036bdb8561c264747', 'somewallet']
    invalidAddress.forEach((a: string) => {
      expect(avalanche.isValidAddress(a)).to.be.false
    })
  })

  it('Provides correct address formatting', () => {
    const address = ['fuji1kvg7f6ppmkdu7w2frckh29ttsz7287nejkmlyc']

    address.forEach((a: string, index: number) => {
      expect(avalanche.formatAddress(a)).to.be.equal(address[index])
    })
  })

  it('Provides correct tx validation', () => {
    const validTxHash =
      '8pRdygzR8Zk9oMYmqiyzUpqJQnFmaAnMLniexycNLavr_9eed84cfc2ac0068dd8fc10b8b3b71c8d0f74cfd09211e036bdb8561c2647472'
    expect(avalanche.isValidTransactionHash(validTxHash)).to.be.true

    const validTxHashInvalidSigner =
      '8pRdygzR8Zk9oMYmqiyzUpqJQnFmaAnMLniexycNLavr_9eed84cfc2ac0068dd8fc10b8b3b71c8d0f74cfd09211e036bdb8561c264747'
    expect(avalanche.isValidTransactionHash(validTxHashInvalidSigner)).to.be.false

    const invalidTxHashValidSigner =
      '8pRdygzR8Zk9oMYmqiyzUpqJQnFmaAnMLniexycNLa_9eed84cfc2ac0068dd8fc10b8b3b71c8d0f74cfd09211e036bdb8561c2647472'
    expect(avalanche.isValidTransactionHash(invalidTxHashValidSigner)).to.be.false

    const invalidTxHashInvalidSigner =
      '8pRdygzR8Zk9oMYmqiyzUpqJQnFmaAnMLniexycNLa_9eed84cfc2ac0068dd8fc10b8b3b71c8d0f74cfd09211e036bdb8561c264747'
    expect(avalanche.isValidTransactionHash(invalidTxHashInvalidSigner)).to.be.false
  })

  it('Provides correct tx formatting', () => {
    const txHash =
      '8pRdygzR8Zk9oMYmqiyzUpqJQnFmaAnMLniexycNLavr_9eed84cfc2ac0068dd8fc10b8b3b71c8d0f74cfd09211e036bdb8561c2647472'
    expect(avalanche.formatTransactionHash(txHash)).to.be.equal(txHash)
  })
})
