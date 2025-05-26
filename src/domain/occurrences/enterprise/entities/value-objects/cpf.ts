import { isCPF } from 'brazilian-values'

export class CPF {
  public value: string

  private constructor(value: string) {
    this.value = value
  }

  equals(other: CPF): boolean {
    return this.value === other.value
  }

  static create(cpf: string) {
    const sanitizedCPF = cpf.replace(/\D/g, '')
    const isValid = isCPF(sanitizedCPF)

    if (!isValid) {
      throw new Error('Invalid CPF.')
    }

    return new CPF(sanitizedCPF)
  }
}
