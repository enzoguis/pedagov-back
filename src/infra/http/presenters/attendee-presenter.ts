import { Attendee } from '@/domain/occurrences/enterprise/entities/attendee'

export class AttendeePresenter {
  static toHTTP(attendee: Attendee) {
    return {
      id: attendee.id.value,
      name: attendee.name,
    }
  }
}
