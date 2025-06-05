export class InactiveUserError extends Error {
  constructor(identifier: string) {
    super(`The user "${identifier} is inactive.`)
  }
}
