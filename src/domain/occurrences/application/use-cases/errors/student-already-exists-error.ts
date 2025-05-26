export class StudentAlreadyExistsError extends Error {
  constructor() {
    super('Student already exists with this CPF.')
  }
}
