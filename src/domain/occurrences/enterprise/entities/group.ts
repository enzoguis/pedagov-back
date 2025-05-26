import { AggregateRoot } from '@/core/entities/aggregate-root'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import { GroupStudentList } from './group-student-list'

export enum GroupShiftsEnum {
  MORNING = 'morning',
  AFTERNOON = 'afternoon',
  NIGHT = 'night',
}

export type GroupShiftsType = keyof typeof GroupShiftsEnum

export interface GroupProps {
  name: string
  shift: GroupShiftsEnum
  teacherId: UniqueEntityID
  students: GroupStudentList
}

export class Group extends AggregateRoot<GroupProps> {
  get name() {
    return this.props.name
  }

  get shift() {
    return this.props.shift
  }

  get teacherId() {
    return this.props.teacherId
  }

  get students() {
    return this.props.students
  }

  get numberOfStudents() {
    return this.props.students.currentItems.length
  }

  set name(name: string) {
    this.props.name = name
  }

  set teacherId(teacherId: UniqueEntityID) {
    this.props.teacherId = teacherId
  }

  set students(students: GroupStudentList) {
    this.props.students = students
  }

  set shift(shift: GroupShiftsEnum) {
    this.props.shift = shift
  }

  static create(props: Optional<GroupProps, 'students'>, id?: UniqueEntityID) {
    const group = new Group(
      {
        ...props,
        students: props.students ?? new GroupStudentList(),
      },
      id
    )

    return group
  }
}
