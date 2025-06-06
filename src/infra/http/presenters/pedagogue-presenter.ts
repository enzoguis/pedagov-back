import { Pedagogue } from '@/domain/occurrences/enterprise/entities/pedagogue'

export class PedagoguePresenter {
  static toHTTP(pedagogue: Pedagogue) {
    return {
      id: pedagogue.id.value,
      name: pedagogue.name,
      status: pedagogue.status,
      role: pedagogue.role,
    }
  }
}
