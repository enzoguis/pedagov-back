export class PedagogueAlreadyExistsError extends Error {
  constructor(identifier: string) {
    super(`Pedagogue "${identifier}" already exists.`)
  }
}
