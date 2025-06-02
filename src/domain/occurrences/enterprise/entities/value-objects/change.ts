import { ValueObject } from '@/core/entities/value-object'

export interface ChangeProps {
  field: string
  value: unknown
}

export class Change extends ValueObject<ChangeProps> {
  get field() {
    return this.props.field
  }

  get value() {
    return this.props.value
  }

  static create(props: ChangeProps) {
    return new Change(props)
  }

  static createMany(raw: ChangeProps[]): Change[] {
    return raw.map(Change.create)
  }

  static toPrimitives(changes: Change[]): ChangeProps[] {
    return changes.map((change) => ({
      field: change.field,
      value: change.value,
    }))
  }
}
