import { PedagogueWithEmail } from '@/domain/occurrences/enterprise/entities/value-objects/pedagogue-with-email'

export class PedagogueWithEmailPresenter {
  static toHTTP(pedagogue: PedagogueWithEmail) {
    return {
      id: pedagogue.pedagogueId.value,
      email: pedagogue.email,
      name: pedagogue.name,
      status: pedagogue.status,
      role: pedagogue.role,
    }
  }
}
