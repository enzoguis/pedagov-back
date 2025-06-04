import { PedagogueRoleType } from '@/domain/occurrences/enterprise/entities/pedagogue'
import { SetMetadata } from '@nestjs/common'

export const ROLES_KEY = 'roles'
export const Roles = (...roles: PedagogueRoleType[]) =>
  SetMetadata(ROLES_KEY, roles)
