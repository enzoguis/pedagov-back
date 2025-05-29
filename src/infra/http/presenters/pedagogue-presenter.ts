import { Pedagogue } from '@/domain/occurrences/enterprise/entities/pedagogue'

export class PedagoguePresenter {
  static toHTTP(pedagogue: Pedagogue) {
    return {
      id: pedagogue.id,
      name: pedagogue.name,
      role: pedagogue.role,
    }
  }
}
