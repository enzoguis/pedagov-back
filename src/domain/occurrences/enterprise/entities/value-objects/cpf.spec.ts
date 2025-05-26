import { CPF } from './cpf'

describe('Value Object: CPF', () => {
  it('should return a new CPF if the string is a valid cpf', () => {
    const cpf = CPF.create('043.576.920-08')

    expect(cpf.value).toBe('04357692008')
  })

  it('should return an error if the string is a valid cpf', () => {
    expect(() => CPF.create('043.576.920-07')).toThrowError('Invalid CPF.')
  })
})
