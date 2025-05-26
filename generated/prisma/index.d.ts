
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Pedagogue
 * 
 */
export type Pedagogue = $Result.DefaultSelection<Prisma.$PedagoguePayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Occurrence
 * 
 */
export type Occurrence = $Result.DefaultSelection<Prisma.$OccurrencePayload>
/**
 * Model OccurrenceHistory
 * 
 */
export type OccurrenceHistory = $Result.DefaultSelection<Prisma.$OccurrenceHistoryPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Attachment
 * 
 */
export type Attachment = $Result.DefaultSelection<Prisma.$AttachmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GroupShift: {
  MORNING: 'MORNING',
  AFTERNOON: 'AFTERNOON',
  NIGHT: 'NIGHT'
};

export type GroupShift = (typeof GroupShift)[keyof typeof GroupShift]


export const OccurrenceType: {
  DISCIPLINE: 'DISCIPLINE',
  ABSENCES: 'ABSENCES',
  TARDINESS: 'TARDINESS',
  UNIFORM: 'UNIFORM'
};

export type OccurrenceType = (typeof OccurrenceType)[keyof typeof OccurrenceType]


export const TeacherStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type TeacherStatus = (typeof TeacherStatus)[keyof typeof TeacherStatus]

}

export type GroupShift = $Enums.GroupShift

export const GroupShift: typeof $Enums.GroupShift

export type OccurrenceType = $Enums.OccurrenceType

export const OccurrenceType: typeof $Enums.OccurrenceType

export type TeacherStatus = $Enums.TeacherStatus

export const TeacherStatus: typeof $Enums.TeacherStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedagogue`: Exposes CRUD operations for the **Pedagogue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedagogues
    * const pedagogues = await prisma.pedagogue.findMany()
    * ```
    */
  get pedagogue(): Prisma.PedagogueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.occurrence`: Exposes CRUD operations for the **Occurrence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Occurrences
    * const occurrences = await prisma.occurrence.findMany()
    * ```
    */
  get occurrence(): Prisma.OccurrenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.occurrenceHistory`: Exposes CRUD operations for the **OccurrenceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OccurrenceHistories
    * const occurrenceHistories = await prisma.occurrenceHistory.findMany()
    * ```
    */
  get occurrenceHistory(): Prisma.OccurrenceHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Pedagogue: 'Pedagogue',
    Group: 'Group',
    Occurrence: 'Occurrence',
    OccurrenceHistory: 'OccurrenceHistory',
    Student: 'Student',
    Teacher: 'Teacher',
    Attachment: 'Attachment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "pedagogue" | "group" | "occurrence" | "occurrenceHistory" | "student" | "teacher" | "attachment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Pedagogue: {
        payload: Prisma.$PedagoguePayload<ExtArgs>
        fields: Prisma.PedagogueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedagogueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedagoguePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedagogueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedagoguePayload>
          }
          findFirst: {
            args: Prisma.PedagogueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedagoguePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedagogueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedagoguePayload>
          }
          findMany: {
            args: Prisma.PedagogueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedagoguePayload>[]
          }
          create: {
            args: Prisma.PedagogueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedagoguePayload>
          }
          createMany: {
            args: Prisma.PedagogueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedagogueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedagoguePayload>[]
          }
          delete: {
            args: Prisma.PedagogueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedagoguePayload>
          }
          update: {
            args: Prisma.PedagogueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedagoguePayload>
          }
          deleteMany: {
            args: Prisma.PedagogueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedagogueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedagogueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedagoguePayload>[]
          }
          upsert: {
            args: Prisma.PedagogueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedagoguePayload>
          }
          aggregate: {
            args: Prisma.PedagogueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedagogue>
          }
          groupBy: {
            args: Prisma.PedagogueGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedagogueGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedagogueCountArgs<ExtArgs>
            result: $Utils.Optional<PedagogueCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Occurrence: {
        payload: Prisma.$OccurrencePayload<ExtArgs>
        fields: Prisma.OccurrenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OccurrenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OccurrenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload>
          }
          findFirst: {
            args: Prisma.OccurrenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OccurrenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload>
          }
          findMany: {
            args: Prisma.OccurrenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload>[]
          }
          create: {
            args: Prisma.OccurrenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload>
          }
          createMany: {
            args: Prisma.OccurrenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OccurrenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload>[]
          }
          delete: {
            args: Prisma.OccurrenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload>
          }
          update: {
            args: Prisma.OccurrenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload>
          }
          deleteMany: {
            args: Prisma.OccurrenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OccurrenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OccurrenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload>[]
          }
          upsert: {
            args: Prisma.OccurrenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrencePayload>
          }
          aggregate: {
            args: Prisma.OccurrenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOccurrence>
          }
          groupBy: {
            args: Prisma.OccurrenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<OccurrenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.OccurrenceCountArgs<ExtArgs>
            result: $Utils.Optional<OccurrenceCountAggregateOutputType> | number
          }
        }
      }
      OccurrenceHistory: {
        payload: Prisma.$OccurrenceHistoryPayload<ExtArgs>
        fields: Prisma.OccurrenceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OccurrenceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrenceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OccurrenceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrenceHistoryPayload>
          }
          findFirst: {
            args: Prisma.OccurrenceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrenceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OccurrenceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrenceHistoryPayload>
          }
          findMany: {
            args: Prisma.OccurrenceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrenceHistoryPayload>[]
          }
          create: {
            args: Prisma.OccurrenceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrenceHistoryPayload>
          }
          createMany: {
            args: Prisma.OccurrenceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OccurrenceHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrenceHistoryPayload>[]
          }
          delete: {
            args: Prisma.OccurrenceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrenceHistoryPayload>
          }
          update: {
            args: Prisma.OccurrenceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrenceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.OccurrenceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OccurrenceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OccurrenceHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrenceHistoryPayload>[]
          }
          upsert: {
            args: Prisma.OccurrenceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccurrenceHistoryPayload>
          }
          aggregate: {
            args: Prisma.OccurrenceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOccurrenceHistory>
          }
          groupBy: {
            args: Prisma.OccurrenceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<OccurrenceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.OccurrenceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<OccurrenceHistoryCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Attachment: {
        payload: Prisma.$AttachmentPayload<ExtArgs>
        fields: Prisma.AttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    pedagogue?: PedagogueOmit
    group?: GroupOmit
    occurrence?: OccurrenceOmit
    occurrenceHistory?: OccurrenceHistoryOmit
    student?: StudentOmit
    teacher?: TeacherOmit
    attachment?: AttachmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    students: number
    teacher: number
    Occurrence: number
    OccurrenceHistory: number
    pedagogue: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | UserCountOutputTypeCountStudentsArgs
    teacher?: boolean | UserCountOutputTypeCountTeacherArgs
    Occurrence?: boolean | UserCountOutputTypeCountOccurrenceArgs
    OccurrenceHistory?: boolean | UserCountOutputTypeCountOccurrenceHistoryArgs
    pedagogue?: boolean | UserCountOutputTypeCountPedagogueArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOccurrenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccurrenceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOccurrenceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccurrenceHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPedagogueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedagogueWhereInput
  }


  /**
   * Count Type PedagogueCountOutputType
   */

  export type PedagogueCountOutputType = {
    occurrences: number
  }

  export type PedagogueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    occurrences?: boolean | PedagogueCountOutputTypeCountOccurrencesArgs
  }

  // Custom InputTypes
  /**
   * PedagogueCountOutputType without action
   */
  export type PedagogueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedagogueCountOutputType
     */
    select?: PedagogueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedagogueCountOutputType without action
   */
  export type PedagogueCountOutputTypeCountOccurrencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccurrenceWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    students: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | GroupCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type OccurrenceCountOutputType
   */

  export type OccurrenceCountOutputType = {
    attendees: number
    students: number
    occurrenceHistories: number
    attachments: number
  }

  export type OccurrenceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendees?: boolean | OccurrenceCountOutputTypeCountAttendeesArgs
    students?: boolean | OccurrenceCountOutputTypeCountStudentsArgs
    occurrenceHistories?: boolean | OccurrenceCountOutputTypeCountOccurrenceHistoriesArgs
    attachments?: boolean | OccurrenceCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * OccurrenceCountOutputType without action
   */
  export type OccurrenceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccurrenceCountOutputType
     */
    select?: OccurrenceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OccurrenceCountOutputType without action
   */
  export type OccurrenceCountOutputTypeCountAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OccurrenceCountOutputType without action
   */
  export type OccurrenceCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * OccurrenceCountOutputType without action
   */
  export type OccurrenceCountOutputTypeCountOccurrenceHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccurrenceHistoryWhereInput
  }

  /**
   * OccurrenceCountOutputType without action
   */
  export type OccurrenceCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    Occurrences: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Occurrences?: boolean | StudentCountOutputTypeCountOccurrencesArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountOccurrencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccurrenceWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    Occurrences: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Occurrences?: boolean | TeacherCountOutputTypeCountOccurrencesArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountOccurrencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccurrenceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    temporaryPassword: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    temporaryPassword: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    temporaryPassword: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    temporaryPassword?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    temporaryPassword?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    temporaryPassword?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    temporaryPassword: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    temporaryPassword?: boolean
    students?: boolean | User$studentsArgs<ExtArgs>
    teacher?: boolean | User$teacherArgs<ExtArgs>
    Occurrence?: boolean | User$OccurrenceArgs<ExtArgs>
    OccurrenceHistory?: boolean | User$OccurrenceHistoryArgs<ExtArgs>
    pedagogue?: boolean | User$pedagogueArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    temporaryPassword?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    temporaryPassword?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    temporaryPassword?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "temporaryPassword", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | User$studentsArgs<ExtArgs>
    teacher?: boolean | User$teacherArgs<ExtArgs>
    Occurrence?: boolean | User$OccurrenceArgs<ExtArgs>
    OccurrenceHistory?: boolean | User$OccurrenceHistoryArgs<ExtArgs>
    pedagogue?: boolean | User$pedagogueArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      students: Prisma.$StudentPayload<ExtArgs>[]
      teacher: Prisma.$TeacherPayload<ExtArgs>[]
      Occurrence: Prisma.$OccurrencePayload<ExtArgs>[]
      OccurrenceHistory: Prisma.$OccurrenceHistoryPayload<ExtArgs>[]
      pedagogue: Prisma.$PedagoguePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      temporaryPassword: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends User$studentsArgs<ExtArgs> = {}>(args?: Subset<T, User$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teacher<T extends User$teacherArgs<ExtArgs> = {}>(args?: Subset<T, User$teacherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Occurrence<T extends User$OccurrenceArgs<ExtArgs> = {}>(args?: Subset<T, User$OccurrenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OccurrenceHistory<T extends User$OccurrenceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$OccurrenceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccurrenceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedagogue<T extends User$pedagogueArgs<ExtArgs> = {}>(args?: Subset<T, User$pedagogueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedagoguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly temporaryPassword: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.students
   */
  export type User$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * User.teacher
   */
  export type User$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    cursor?: TeacherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * User.Occurrence
   */
  export type User$OccurrenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occurrence
     */
    omit?: OccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceInclude<ExtArgs> | null
    where?: OccurrenceWhereInput
    orderBy?: OccurrenceOrderByWithRelationInput | OccurrenceOrderByWithRelationInput[]
    cursor?: OccurrenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OccurrenceScalarFieldEnum | OccurrenceScalarFieldEnum[]
  }

  /**
   * User.OccurrenceHistory
   */
  export type User$OccurrenceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccurrenceHistory
     */
    select?: OccurrenceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccurrenceHistory
     */
    omit?: OccurrenceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceHistoryInclude<ExtArgs> | null
    where?: OccurrenceHistoryWhereInput
    orderBy?: OccurrenceHistoryOrderByWithRelationInput | OccurrenceHistoryOrderByWithRelationInput[]
    cursor?: OccurrenceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OccurrenceHistoryScalarFieldEnum | OccurrenceHistoryScalarFieldEnum[]
  }

  /**
   * User.pedagogue
   */
  export type User$pedagogueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedagogue
     */
    select?: PedagogueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedagogue
     */
    omit?: PedagogueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedagogueInclude<ExtArgs> | null
    where?: PedagogueWhereInput
    orderBy?: PedagogueOrderByWithRelationInput | PedagogueOrderByWithRelationInput[]
    cursor?: PedagogueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedagogueScalarFieldEnum | PedagogueScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Pedagogue
   */

  export type AggregatePedagogue = {
    _count: PedagogueCountAggregateOutputType | null
    _min: PedagogueMinAggregateOutputType | null
    _max: PedagogueMaxAggregateOutputType | null
  }

  export type PedagogueMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type PedagogueMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type PedagogueCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type PedagogueMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PedagogueMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PedagogueCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type PedagogueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedagogue to aggregate.
     */
    where?: PedagogueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedagogues to fetch.
     */
    orderBy?: PedagogueOrderByWithRelationInput | PedagogueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedagogueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedagogues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedagogues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedagogues
    **/
    _count?: true | PedagogueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedagogueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedagogueMaxAggregateInputType
  }

  export type GetPedagogueAggregateType<T extends PedagogueAggregateArgs> = {
        [P in keyof T & keyof AggregatePedagogue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedagogue[P]>
      : GetScalarType<T[P], AggregatePedagogue[P]>
  }




  export type PedagogueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedagogueWhereInput
    orderBy?: PedagogueOrderByWithAggregationInput | PedagogueOrderByWithAggregationInput[]
    by: PedagogueScalarFieldEnum[] | PedagogueScalarFieldEnum
    having?: PedagogueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedagogueCountAggregateInputType | true
    _min?: PedagogueMinAggregateInputType
    _max?: PedagogueMaxAggregateInputType
  }

  export type PedagogueGroupByOutputType = {
    id: string
    userId: string
    _count: PedagogueCountAggregateOutputType | null
    _min: PedagogueMinAggregateOutputType | null
    _max: PedagogueMaxAggregateOutputType | null
  }

  type GetPedagogueGroupByPayload<T extends PedagogueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedagogueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedagogueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedagogueGroupByOutputType[P]>
            : GetScalarType<T[P], PedagogueGroupByOutputType[P]>
        }
      >
    >


  export type PedagogueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    occurrences?: boolean | Pedagogue$occurrencesArgs<ExtArgs>
    _count?: boolean | PedagogueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedagogue"]>

  export type PedagogueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedagogue"]>

  export type PedagogueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedagogue"]>

  export type PedagogueSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type PedagogueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["pedagogue"]>
  export type PedagogueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    occurrences?: boolean | Pedagogue$occurrencesArgs<ExtArgs>
    _count?: boolean | PedagogueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedagogueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PedagogueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PedagoguePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedagogue"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      occurrences: Prisma.$OccurrencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["pedagogue"]>
    composites: {}
  }

  type PedagogueGetPayload<S extends boolean | null | undefined | PedagogueDefaultArgs> = $Result.GetResult<Prisma.$PedagoguePayload, S>

  type PedagogueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedagogueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedagogueCountAggregateInputType | true
    }

  export interface PedagogueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedagogue'], meta: { name: 'Pedagogue' } }
    /**
     * Find zero or one Pedagogue that matches the filter.
     * @param {PedagogueFindUniqueArgs} args - Arguments to find a Pedagogue
     * @example
     * // Get one Pedagogue
     * const pedagogue = await prisma.pedagogue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedagogueFindUniqueArgs>(args: SelectSubset<T, PedagogueFindUniqueArgs<ExtArgs>>): Prisma__PedagogueClient<$Result.GetResult<Prisma.$PedagoguePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedagogue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedagogueFindUniqueOrThrowArgs} args - Arguments to find a Pedagogue
     * @example
     * // Get one Pedagogue
     * const pedagogue = await prisma.pedagogue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedagogueFindUniqueOrThrowArgs>(args: SelectSubset<T, PedagogueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedagogueClient<$Result.GetResult<Prisma.$PedagoguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedagogue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedagogueFindFirstArgs} args - Arguments to find a Pedagogue
     * @example
     * // Get one Pedagogue
     * const pedagogue = await prisma.pedagogue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedagogueFindFirstArgs>(args?: SelectSubset<T, PedagogueFindFirstArgs<ExtArgs>>): Prisma__PedagogueClient<$Result.GetResult<Prisma.$PedagoguePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedagogue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedagogueFindFirstOrThrowArgs} args - Arguments to find a Pedagogue
     * @example
     * // Get one Pedagogue
     * const pedagogue = await prisma.pedagogue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedagogueFindFirstOrThrowArgs>(args?: SelectSubset<T, PedagogueFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedagogueClient<$Result.GetResult<Prisma.$PedagoguePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedagogues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedagogueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedagogues
     * const pedagogues = await prisma.pedagogue.findMany()
     * 
     * // Get first 10 Pedagogues
     * const pedagogues = await prisma.pedagogue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedagogueWithIdOnly = await prisma.pedagogue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedagogueFindManyArgs>(args?: SelectSubset<T, PedagogueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedagoguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedagogue.
     * @param {PedagogueCreateArgs} args - Arguments to create a Pedagogue.
     * @example
     * // Create one Pedagogue
     * const Pedagogue = await prisma.pedagogue.create({
     *   data: {
     *     // ... data to create a Pedagogue
     *   }
     * })
     * 
     */
    create<T extends PedagogueCreateArgs>(args: SelectSubset<T, PedagogueCreateArgs<ExtArgs>>): Prisma__PedagogueClient<$Result.GetResult<Prisma.$PedagoguePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedagogues.
     * @param {PedagogueCreateManyArgs} args - Arguments to create many Pedagogues.
     * @example
     * // Create many Pedagogues
     * const pedagogue = await prisma.pedagogue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedagogueCreateManyArgs>(args?: SelectSubset<T, PedagogueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedagogues and returns the data saved in the database.
     * @param {PedagogueCreateManyAndReturnArgs} args - Arguments to create many Pedagogues.
     * @example
     * // Create many Pedagogues
     * const pedagogue = await prisma.pedagogue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedagogues and only return the `id`
     * const pedagogueWithIdOnly = await prisma.pedagogue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedagogueCreateManyAndReturnArgs>(args?: SelectSubset<T, PedagogueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedagoguePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedagogue.
     * @param {PedagogueDeleteArgs} args - Arguments to delete one Pedagogue.
     * @example
     * // Delete one Pedagogue
     * const Pedagogue = await prisma.pedagogue.delete({
     *   where: {
     *     // ... filter to delete one Pedagogue
     *   }
     * })
     * 
     */
    delete<T extends PedagogueDeleteArgs>(args: SelectSubset<T, PedagogueDeleteArgs<ExtArgs>>): Prisma__PedagogueClient<$Result.GetResult<Prisma.$PedagoguePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedagogue.
     * @param {PedagogueUpdateArgs} args - Arguments to update one Pedagogue.
     * @example
     * // Update one Pedagogue
     * const pedagogue = await prisma.pedagogue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedagogueUpdateArgs>(args: SelectSubset<T, PedagogueUpdateArgs<ExtArgs>>): Prisma__PedagogueClient<$Result.GetResult<Prisma.$PedagoguePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedagogues.
     * @param {PedagogueDeleteManyArgs} args - Arguments to filter Pedagogues to delete.
     * @example
     * // Delete a few Pedagogues
     * const { count } = await prisma.pedagogue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedagogueDeleteManyArgs>(args?: SelectSubset<T, PedagogueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedagogues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedagogueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedagogues
     * const pedagogue = await prisma.pedagogue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedagogueUpdateManyArgs>(args: SelectSubset<T, PedagogueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedagogues and returns the data updated in the database.
     * @param {PedagogueUpdateManyAndReturnArgs} args - Arguments to update many Pedagogues.
     * @example
     * // Update many Pedagogues
     * const pedagogue = await prisma.pedagogue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedagogues and only return the `id`
     * const pedagogueWithIdOnly = await prisma.pedagogue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PedagogueUpdateManyAndReturnArgs>(args: SelectSubset<T, PedagogueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedagoguePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedagogue.
     * @param {PedagogueUpsertArgs} args - Arguments to update or create a Pedagogue.
     * @example
     * // Update or create a Pedagogue
     * const pedagogue = await prisma.pedagogue.upsert({
     *   create: {
     *     // ... data to create a Pedagogue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedagogue we want to update
     *   }
     * })
     */
    upsert<T extends PedagogueUpsertArgs>(args: SelectSubset<T, PedagogueUpsertArgs<ExtArgs>>): Prisma__PedagogueClient<$Result.GetResult<Prisma.$PedagoguePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedagogues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedagogueCountArgs} args - Arguments to filter Pedagogues to count.
     * @example
     * // Count the number of Pedagogues
     * const count = await prisma.pedagogue.count({
     *   where: {
     *     // ... the filter for the Pedagogues we want to count
     *   }
     * })
    **/
    count<T extends PedagogueCountArgs>(
      args?: Subset<T, PedagogueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedagogueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedagogue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedagogueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedagogueAggregateArgs>(args: Subset<T, PedagogueAggregateArgs>): Prisma.PrismaPromise<GetPedagogueAggregateType<T>>

    /**
     * Group by Pedagogue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedagogueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedagogueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedagogueGroupByArgs['orderBy'] }
        : { orderBy?: PedagogueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedagogueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedagogueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedagogue model
   */
  readonly fields: PedagogueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedagogue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedagogueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    occurrences<T extends Pedagogue$occurrencesArgs<ExtArgs> = {}>(args?: Subset<T, Pedagogue$occurrencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedagogue model
   */
  interface PedagogueFieldRefs {
    readonly id: FieldRef<"Pedagogue", 'String'>
    readonly userId: FieldRef<"Pedagogue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pedagogue findUnique
   */
  export type PedagogueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedagogue
     */
    select?: PedagogueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedagogue
     */
    omit?: PedagogueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedagogueInclude<ExtArgs> | null
    /**
     * Filter, which Pedagogue to fetch.
     */
    where: PedagogueWhereUniqueInput
  }

  /**
   * Pedagogue findUniqueOrThrow
   */
  export type PedagogueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedagogue
     */
    select?: PedagogueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedagogue
     */
    omit?: PedagogueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedagogueInclude<ExtArgs> | null
    /**
     * Filter, which Pedagogue to fetch.
     */
    where: PedagogueWhereUniqueInput
  }

  /**
   * Pedagogue findFirst
   */
  export type PedagogueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedagogue
     */
    select?: PedagogueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedagogue
     */
    omit?: PedagogueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedagogueInclude<ExtArgs> | null
    /**
     * Filter, which Pedagogue to fetch.
     */
    where?: PedagogueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedagogues to fetch.
     */
    orderBy?: PedagogueOrderByWithRelationInput | PedagogueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedagogues.
     */
    cursor?: PedagogueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedagogues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedagogues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedagogues.
     */
    distinct?: PedagogueScalarFieldEnum | PedagogueScalarFieldEnum[]
  }

  /**
   * Pedagogue findFirstOrThrow
   */
  export type PedagogueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedagogue
     */
    select?: PedagogueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedagogue
     */
    omit?: PedagogueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedagogueInclude<ExtArgs> | null
    /**
     * Filter, which Pedagogue to fetch.
     */
    where?: PedagogueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedagogues to fetch.
     */
    orderBy?: PedagogueOrderByWithRelationInput | PedagogueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedagogues.
     */
    cursor?: PedagogueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedagogues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedagogues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedagogues.
     */
    distinct?: PedagogueScalarFieldEnum | PedagogueScalarFieldEnum[]
  }

  /**
   * Pedagogue findMany
   */
  export type PedagogueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedagogue
     */
    select?: PedagogueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedagogue
     */
    omit?: PedagogueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedagogueInclude<ExtArgs> | null
    /**
     * Filter, which Pedagogues to fetch.
     */
    where?: PedagogueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedagogues to fetch.
     */
    orderBy?: PedagogueOrderByWithRelationInput | PedagogueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedagogues.
     */
    cursor?: PedagogueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedagogues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedagogues.
     */
    skip?: number
    distinct?: PedagogueScalarFieldEnum | PedagogueScalarFieldEnum[]
  }

  /**
   * Pedagogue create
   */
  export type PedagogueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedagogue
     */
    select?: PedagogueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedagogue
     */
    omit?: PedagogueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedagogueInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedagogue.
     */
    data: XOR<PedagogueCreateInput, PedagogueUncheckedCreateInput>
  }

  /**
   * Pedagogue createMany
   */
  export type PedagogueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedagogues.
     */
    data: PedagogueCreateManyInput | PedagogueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedagogue createManyAndReturn
   */
  export type PedagogueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedagogue
     */
    select?: PedagogueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedagogue
     */
    omit?: PedagogueOmit<ExtArgs> | null
    /**
     * The data used to create many Pedagogues.
     */
    data: PedagogueCreateManyInput | PedagogueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedagogueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedagogue update
   */
  export type PedagogueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedagogue
     */
    select?: PedagogueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedagogue
     */
    omit?: PedagogueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedagogueInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedagogue.
     */
    data: XOR<PedagogueUpdateInput, PedagogueUncheckedUpdateInput>
    /**
     * Choose, which Pedagogue to update.
     */
    where: PedagogueWhereUniqueInput
  }

  /**
   * Pedagogue updateMany
   */
  export type PedagogueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedagogues.
     */
    data: XOR<PedagogueUpdateManyMutationInput, PedagogueUncheckedUpdateManyInput>
    /**
     * Filter which Pedagogues to update
     */
    where?: PedagogueWhereInput
    /**
     * Limit how many Pedagogues to update.
     */
    limit?: number
  }

  /**
   * Pedagogue updateManyAndReturn
   */
  export type PedagogueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedagogue
     */
    select?: PedagogueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedagogue
     */
    omit?: PedagogueOmit<ExtArgs> | null
    /**
     * The data used to update Pedagogues.
     */
    data: XOR<PedagogueUpdateManyMutationInput, PedagogueUncheckedUpdateManyInput>
    /**
     * Filter which Pedagogues to update
     */
    where?: PedagogueWhereInput
    /**
     * Limit how many Pedagogues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedagogueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedagogue upsert
   */
  export type PedagogueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedagogue
     */
    select?: PedagogueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedagogue
     */
    omit?: PedagogueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedagogueInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedagogue to update in case it exists.
     */
    where: PedagogueWhereUniqueInput
    /**
     * In case the Pedagogue found by the `where` argument doesn't exist, create a new Pedagogue with this data.
     */
    create: XOR<PedagogueCreateInput, PedagogueUncheckedCreateInput>
    /**
     * In case the Pedagogue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedagogueUpdateInput, PedagogueUncheckedUpdateInput>
  }

  /**
   * Pedagogue delete
   */
  export type PedagogueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedagogue
     */
    select?: PedagogueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedagogue
     */
    omit?: PedagogueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedagogueInclude<ExtArgs> | null
    /**
     * Filter which Pedagogue to delete.
     */
    where: PedagogueWhereUniqueInput
  }

  /**
   * Pedagogue deleteMany
   */
  export type PedagogueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedagogues to delete
     */
    where?: PedagogueWhereInput
    /**
     * Limit how many Pedagogues to delete.
     */
    limit?: number
  }

  /**
   * Pedagogue.occurrences
   */
  export type Pedagogue$occurrencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occurrence
     */
    omit?: OccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceInclude<ExtArgs> | null
    where?: OccurrenceWhereInput
    orderBy?: OccurrenceOrderByWithRelationInput | OccurrenceOrderByWithRelationInput[]
    cursor?: OccurrenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OccurrenceScalarFieldEnum | OccurrenceScalarFieldEnum[]
  }

  /**
   * Pedagogue without action
   */
  export type PedagogueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedagogue
     */
    select?: PedagogueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedagogue
     */
    omit?: PedagogueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedagogueInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    shift: $Enums.GroupShift | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    shift: $Enums.GroupShift | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    shift: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    shift?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    shift?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    shift?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    shift: $Enums.GroupShift
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shift?: boolean
    students?: boolean | Group$studentsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shift?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shift?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    shift?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "shift", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Group$studentsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      shift: $Enums.GroupShift
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Group$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Group$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly shift: FieldRef<"Group", 'GroupShift'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.students
   */
  export type Group$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Occurrence
   */

  export type AggregateOccurrence = {
    _count: OccurrenceCountAggregateOutputType | null
    _min: OccurrenceMinAggregateOutputType | null
    _max: OccurrenceMaxAggregateOutputType | null
  }

  export type OccurrenceMinAggregateOutputType = {
    id: string | null
    teacherId: string | null
    authorId: string | null
    title: string | null
    description: string | null
    type: $Enums.OccurrenceType | null
    createdAt: Date | null
  }

  export type OccurrenceMaxAggregateOutputType = {
    id: string | null
    teacherId: string | null
    authorId: string | null
    title: string | null
    description: string | null
    type: $Enums.OccurrenceType | null
    createdAt: Date | null
  }

  export type OccurrenceCountAggregateOutputType = {
    id: number
    teacherId: number
    authorId: number
    title: number
    description: number
    type: number
    createdAt: number
    _all: number
  }


  export type OccurrenceMinAggregateInputType = {
    id?: true
    teacherId?: true
    authorId?: true
    title?: true
    description?: true
    type?: true
    createdAt?: true
  }

  export type OccurrenceMaxAggregateInputType = {
    id?: true
    teacherId?: true
    authorId?: true
    title?: true
    description?: true
    type?: true
    createdAt?: true
  }

  export type OccurrenceCountAggregateInputType = {
    id?: true
    teacherId?: true
    authorId?: true
    title?: true
    description?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type OccurrenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Occurrence to aggregate.
     */
    where?: OccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occurrences to fetch.
     */
    orderBy?: OccurrenceOrderByWithRelationInput | OccurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Occurrences
    **/
    _count?: true | OccurrenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OccurrenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OccurrenceMaxAggregateInputType
  }

  export type GetOccurrenceAggregateType<T extends OccurrenceAggregateArgs> = {
        [P in keyof T & keyof AggregateOccurrence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOccurrence[P]>
      : GetScalarType<T[P], AggregateOccurrence[P]>
  }




  export type OccurrenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccurrenceWhereInput
    orderBy?: OccurrenceOrderByWithAggregationInput | OccurrenceOrderByWithAggregationInput[]
    by: OccurrenceScalarFieldEnum[] | OccurrenceScalarFieldEnum
    having?: OccurrenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OccurrenceCountAggregateInputType | true
    _min?: OccurrenceMinAggregateInputType
    _max?: OccurrenceMaxAggregateInputType
  }

  export type OccurrenceGroupByOutputType = {
    id: string
    teacherId: string
    authorId: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt: Date
    _count: OccurrenceCountAggregateOutputType | null
    _min: OccurrenceMinAggregateOutputType | null
    _max: OccurrenceMaxAggregateOutputType | null
  }

  type GetOccurrenceGroupByPayload<T extends OccurrenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OccurrenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OccurrenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OccurrenceGroupByOutputType[P]>
            : GetScalarType<T[P], OccurrenceGroupByOutputType[P]>
        }
      >
    >


  export type OccurrenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    authorId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    createdAt?: boolean
    author?: boolean | PedagogueDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    attendees?: boolean | Occurrence$attendeesArgs<ExtArgs>
    students?: boolean | Occurrence$studentsArgs<ExtArgs>
    occurrenceHistories?: boolean | Occurrence$occurrenceHistoriesArgs<ExtArgs>
    attachments?: boolean | Occurrence$attachmentsArgs<ExtArgs>
    _count?: boolean | OccurrenceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["occurrence"]>

  export type OccurrenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    authorId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    createdAt?: boolean
    author?: boolean | PedagogueDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["occurrence"]>

  export type OccurrenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    authorId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    createdAt?: boolean
    author?: boolean | PedagogueDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["occurrence"]>

  export type OccurrenceSelectScalar = {
    id?: boolean
    teacherId?: boolean
    authorId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type OccurrenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherId" | "authorId" | "title" | "description" | "type" | "createdAt", ExtArgs["result"]["occurrence"]>
  export type OccurrenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | PedagogueDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    attendees?: boolean | Occurrence$attendeesArgs<ExtArgs>
    students?: boolean | Occurrence$studentsArgs<ExtArgs>
    occurrenceHistories?: boolean | Occurrence$occurrenceHistoriesArgs<ExtArgs>
    attachments?: boolean | Occurrence$attachmentsArgs<ExtArgs>
    _count?: boolean | OccurrenceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OccurrenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | PedagogueDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type OccurrenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | PedagogueDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $OccurrencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Occurrence"
    objects: {
      author: Prisma.$PedagoguePayload<ExtArgs>
      teacher: Prisma.$TeacherPayload<ExtArgs>
      attendees: Prisma.$UserPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
      occurrenceHistories: Prisma.$OccurrenceHistoryPayload<ExtArgs>[]
      attachments: Prisma.$AttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teacherId: string
      authorId: string
      title: string
      description: string
      type: $Enums.OccurrenceType
      createdAt: Date
    }, ExtArgs["result"]["occurrence"]>
    composites: {}
  }

  type OccurrenceGetPayload<S extends boolean | null | undefined | OccurrenceDefaultArgs> = $Result.GetResult<Prisma.$OccurrencePayload, S>

  type OccurrenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OccurrenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OccurrenceCountAggregateInputType | true
    }

  export interface OccurrenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Occurrence'], meta: { name: 'Occurrence' } }
    /**
     * Find zero or one Occurrence that matches the filter.
     * @param {OccurrenceFindUniqueArgs} args - Arguments to find a Occurrence
     * @example
     * // Get one Occurrence
     * const occurrence = await prisma.occurrence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OccurrenceFindUniqueArgs>(args: SelectSubset<T, OccurrenceFindUniqueArgs<ExtArgs>>): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Occurrence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OccurrenceFindUniqueOrThrowArgs} args - Arguments to find a Occurrence
     * @example
     * // Get one Occurrence
     * const occurrence = await prisma.occurrence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OccurrenceFindUniqueOrThrowArgs>(args: SelectSubset<T, OccurrenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Occurrence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceFindFirstArgs} args - Arguments to find a Occurrence
     * @example
     * // Get one Occurrence
     * const occurrence = await prisma.occurrence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OccurrenceFindFirstArgs>(args?: SelectSubset<T, OccurrenceFindFirstArgs<ExtArgs>>): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Occurrence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceFindFirstOrThrowArgs} args - Arguments to find a Occurrence
     * @example
     * // Get one Occurrence
     * const occurrence = await prisma.occurrence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OccurrenceFindFirstOrThrowArgs>(args?: SelectSubset<T, OccurrenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Occurrences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Occurrences
     * const occurrences = await prisma.occurrence.findMany()
     * 
     * // Get first 10 Occurrences
     * const occurrences = await prisma.occurrence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const occurrenceWithIdOnly = await prisma.occurrence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OccurrenceFindManyArgs>(args?: SelectSubset<T, OccurrenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Occurrence.
     * @param {OccurrenceCreateArgs} args - Arguments to create a Occurrence.
     * @example
     * // Create one Occurrence
     * const Occurrence = await prisma.occurrence.create({
     *   data: {
     *     // ... data to create a Occurrence
     *   }
     * })
     * 
     */
    create<T extends OccurrenceCreateArgs>(args: SelectSubset<T, OccurrenceCreateArgs<ExtArgs>>): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Occurrences.
     * @param {OccurrenceCreateManyArgs} args - Arguments to create many Occurrences.
     * @example
     * // Create many Occurrences
     * const occurrence = await prisma.occurrence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OccurrenceCreateManyArgs>(args?: SelectSubset<T, OccurrenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Occurrences and returns the data saved in the database.
     * @param {OccurrenceCreateManyAndReturnArgs} args - Arguments to create many Occurrences.
     * @example
     * // Create many Occurrences
     * const occurrence = await prisma.occurrence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Occurrences and only return the `id`
     * const occurrenceWithIdOnly = await prisma.occurrence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OccurrenceCreateManyAndReturnArgs>(args?: SelectSubset<T, OccurrenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Occurrence.
     * @param {OccurrenceDeleteArgs} args - Arguments to delete one Occurrence.
     * @example
     * // Delete one Occurrence
     * const Occurrence = await prisma.occurrence.delete({
     *   where: {
     *     // ... filter to delete one Occurrence
     *   }
     * })
     * 
     */
    delete<T extends OccurrenceDeleteArgs>(args: SelectSubset<T, OccurrenceDeleteArgs<ExtArgs>>): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Occurrence.
     * @param {OccurrenceUpdateArgs} args - Arguments to update one Occurrence.
     * @example
     * // Update one Occurrence
     * const occurrence = await prisma.occurrence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OccurrenceUpdateArgs>(args: SelectSubset<T, OccurrenceUpdateArgs<ExtArgs>>): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Occurrences.
     * @param {OccurrenceDeleteManyArgs} args - Arguments to filter Occurrences to delete.
     * @example
     * // Delete a few Occurrences
     * const { count } = await prisma.occurrence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OccurrenceDeleteManyArgs>(args?: SelectSubset<T, OccurrenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Occurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Occurrences
     * const occurrence = await prisma.occurrence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OccurrenceUpdateManyArgs>(args: SelectSubset<T, OccurrenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Occurrences and returns the data updated in the database.
     * @param {OccurrenceUpdateManyAndReturnArgs} args - Arguments to update many Occurrences.
     * @example
     * // Update many Occurrences
     * const occurrence = await prisma.occurrence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Occurrences and only return the `id`
     * const occurrenceWithIdOnly = await prisma.occurrence.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OccurrenceUpdateManyAndReturnArgs>(args: SelectSubset<T, OccurrenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Occurrence.
     * @param {OccurrenceUpsertArgs} args - Arguments to update or create a Occurrence.
     * @example
     * // Update or create a Occurrence
     * const occurrence = await prisma.occurrence.upsert({
     *   create: {
     *     // ... data to create a Occurrence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Occurrence we want to update
     *   }
     * })
     */
    upsert<T extends OccurrenceUpsertArgs>(args: SelectSubset<T, OccurrenceUpsertArgs<ExtArgs>>): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Occurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceCountArgs} args - Arguments to filter Occurrences to count.
     * @example
     * // Count the number of Occurrences
     * const count = await prisma.occurrence.count({
     *   where: {
     *     // ... the filter for the Occurrences we want to count
     *   }
     * })
    **/
    count<T extends OccurrenceCountArgs>(
      args?: Subset<T, OccurrenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OccurrenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Occurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OccurrenceAggregateArgs>(args: Subset<T, OccurrenceAggregateArgs>): Prisma.PrismaPromise<GetOccurrenceAggregateType<T>>

    /**
     * Group by Occurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OccurrenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OccurrenceGroupByArgs['orderBy'] }
        : { orderBy?: OccurrenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OccurrenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOccurrenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Occurrence model
   */
  readonly fields: OccurrenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Occurrence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OccurrenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends PedagogueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedagogueDefaultArgs<ExtArgs>>): Prisma__PedagogueClient<$Result.GetResult<Prisma.$PedagoguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendees<T extends Occurrence$attendeesArgs<ExtArgs> = {}>(args?: Subset<T, Occurrence$attendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Occurrence$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Occurrence$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    occurrenceHistories<T extends Occurrence$occurrenceHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Occurrence$occurrenceHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccurrenceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends Occurrence$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Occurrence$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Occurrence model
   */
  interface OccurrenceFieldRefs {
    readonly id: FieldRef<"Occurrence", 'String'>
    readonly teacherId: FieldRef<"Occurrence", 'String'>
    readonly authorId: FieldRef<"Occurrence", 'String'>
    readonly title: FieldRef<"Occurrence", 'String'>
    readonly description: FieldRef<"Occurrence", 'String'>
    readonly type: FieldRef<"Occurrence", 'OccurrenceType'>
    readonly createdAt: FieldRef<"Occurrence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Occurrence findUnique
   */
  export type OccurrenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occurrence
     */
    omit?: OccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceInclude<ExtArgs> | null
    /**
     * Filter, which Occurrence to fetch.
     */
    where: OccurrenceWhereUniqueInput
  }

  /**
   * Occurrence findUniqueOrThrow
   */
  export type OccurrenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occurrence
     */
    omit?: OccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceInclude<ExtArgs> | null
    /**
     * Filter, which Occurrence to fetch.
     */
    where: OccurrenceWhereUniqueInput
  }

  /**
   * Occurrence findFirst
   */
  export type OccurrenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occurrence
     */
    omit?: OccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceInclude<ExtArgs> | null
    /**
     * Filter, which Occurrence to fetch.
     */
    where?: OccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occurrences to fetch.
     */
    orderBy?: OccurrenceOrderByWithRelationInput | OccurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Occurrences.
     */
    cursor?: OccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Occurrences.
     */
    distinct?: OccurrenceScalarFieldEnum | OccurrenceScalarFieldEnum[]
  }

  /**
   * Occurrence findFirstOrThrow
   */
  export type OccurrenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occurrence
     */
    omit?: OccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceInclude<ExtArgs> | null
    /**
     * Filter, which Occurrence to fetch.
     */
    where?: OccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occurrences to fetch.
     */
    orderBy?: OccurrenceOrderByWithRelationInput | OccurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Occurrences.
     */
    cursor?: OccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Occurrences.
     */
    distinct?: OccurrenceScalarFieldEnum | OccurrenceScalarFieldEnum[]
  }

  /**
   * Occurrence findMany
   */
  export type OccurrenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occurrence
     */
    omit?: OccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceInclude<ExtArgs> | null
    /**
     * Filter, which Occurrences to fetch.
     */
    where?: OccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occurrences to fetch.
     */
    orderBy?: OccurrenceOrderByWithRelationInput | OccurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Occurrences.
     */
    cursor?: OccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occurrences.
     */
    skip?: number
    distinct?: OccurrenceScalarFieldEnum | OccurrenceScalarFieldEnum[]
  }

  /**
   * Occurrence create
   */
  export type OccurrenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occurrence
     */
    omit?: OccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Occurrence.
     */
    data: XOR<OccurrenceCreateInput, OccurrenceUncheckedCreateInput>
  }

  /**
   * Occurrence createMany
   */
  export type OccurrenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Occurrences.
     */
    data: OccurrenceCreateManyInput | OccurrenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Occurrence createManyAndReturn
   */
  export type OccurrenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Occurrence
     */
    omit?: OccurrenceOmit<ExtArgs> | null
    /**
     * The data used to create many Occurrences.
     */
    data: OccurrenceCreateManyInput | OccurrenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Occurrence update
   */
  export type OccurrenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occurrence
     */
    omit?: OccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Occurrence.
     */
    data: XOR<OccurrenceUpdateInput, OccurrenceUncheckedUpdateInput>
    /**
     * Choose, which Occurrence to update.
     */
    where: OccurrenceWhereUniqueInput
  }

  /**
   * Occurrence updateMany
   */
  export type OccurrenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Occurrences.
     */
    data: XOR<OccurrenceUpdateManyMutationInput, OccurrenceUncheckedUpdateManyInput>
    /**
     * Filter which Occurrences to update
     */
    where?: OccurrenceWhereInput
    /**
     * Limit how many Occurrences to update.
     */
    limit?: number
  }

  /**
   * Occurrence updateManyAndReturn
   */
  export type OccurrenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Occurrence
     */
    omit?: OccurrenceOmit<ExtArgs> | null
    /**
     * The data used to update Occurrences.
     */
    data: XOR<OccurrenceUpdateManyMutationInput, OccurrenceUncheckedUpdateManyInput>
    /**
     * Filter which Occurrences to update
     */
    where?: OccurrenceWhereInput
    /**
     * Limit how many Occurrences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Occurrence upsert
   */
  export type OccurrenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occurrence
     */
    omit?: OccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Occurrence to update in case it exists.
     */
    where: OccurrenceWhereUniqueInput
    /**
     * In case the Occurrence found by the `where` argument doesn't exist, create a new Occurrence with this data.
     */
    create: XOR<OccurrenceCreateInput, OccurrenceUncheckedCreateInput>
    /**
     * In case the Occurrence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OccurrenceUpdateInput, OccurrenceUncheckedUpdateInput>
  }

  /**
   * Occurrence delete
   */
  export type OccurrenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occurrence
     */
    omit?: OccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceInclude<ExtArgs> | null
    /**
     * Filter which Occurrence to delete.
     */
    where: OccurrenceWhereUniqueInput
  }

  /**
   * Occurrence deleteMany
   */
  export type OccurrenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Occurrences to delete
     */
    where?: OccurrenceWhereInput
    /**
     * Limit how many Occurrences to delete.
     */
    limit?: number
  }

  /**
   * Occurrence.attendees
   */
  export type Occurrence$attendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Occurrence.students
   */
  export type Occurrence$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Occurrence.occurrenceHistories
   */
  export type Occurrence$occurrenceHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccurrenceHistory
     */
    select?: OccurrenceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccurrenceHistory
     */
    omit?: OccurrenceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceHistoryInclude<ExtArgs> | null
    where?: OccurrenceHistoryWhereInput
    orderBy?: OccurrenceHistoryOrderByWithRelationInput | OccurrenceHistoryOrderByWithRelationInput[]
    cursor?: OccurrenceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OccurrenceHistoryScalarFieldEnum | OccurrenceHistoryScalarFieldEnum[]
  }

  /**
   * Occurrence.attachments
   */
  export type Occurrence$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Occurrence without action
   */
  export type OccurrenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occurrence
     */
    omit?: OccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceInclude<ExtArgs> | null
  }


  /**
   * Model OccurrenceHistory
   */

  export type AggregateOccurrenceHistory = {
    _count: OccurrenceHistoryCountAggregateOutputType | null
    _min: OccurrenceHistoryMinAggregateOutputType | null
    _max: OccurrenceHistoryMaxAggregateOutputType | null
  }

  export type OccurrenceHistoryMinAggregateOutputType = {
    id: string | null
    editorId: string | null
    occurrenceId: string | null
    createdAt: Date | null
  }

  export type OccurrenceHistoryMaxAggregateOutputType = {
    id: string | null
    editorId: string | null
    occurrenceId: string | null
    createdAt: Date | null
  }

  export type OccurrenceHistoryCountAggregateOutputType = {
    id: number
    editorId: number
    occurrenceId: number
    createdAt: number
    changedFields: number
    _all: number
  }


  export type OccurrenceHistoryMinAggregateInputType = {
    id?: true
    editorId?: true
    occurrenceId?: true
    createdAt?: true
  }

  export type OccurrenceHistoryMaxAggregateInputType = {
    id?: true
    editorId?: true
    occurrenceId?: true
    createdAt?: true
  }

  export type OccurrenceHistoryCountAggregateInputType = {
    id?: true
    editorId?: true
    occurrenceId?: true
    createdAt?: true
    changedFields?: true
    _all?: true
  }

  export type OccurrenceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccurrenceHistory to aggregate.
     */
    where?: OccurrenceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccurrenceHistories to fetch.
     */
    orderBy?: OccurrenceHistoryOrderByWithRelationInput | OccurrenceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OccurrenceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccurrenceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccurrenceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OccurrenceHistories
    **/
    _count?: true | OccurrenceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OccurrenceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OccurrenceHistoryMaxAggregateInputType
  }

  export type GetOccurrenceHistoryAggregateType<T extends OccurrenceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateOccurrenceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOccurrenceHistory[P]>
      : GetScalarType<T[P], AggregateOccurrenceHistory[P]>
  }




  export type OccurrenceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccurrenceHistoryWhereInput
    orderBy?: OccurrenceHistoryOrderByWithAggregationInput | OccurrenceHistoryOrderByWithAggregationInput[]
    by: OccurrenceHistoryScalarFieldEnum[] | OccurrenceHistoryScalarFieldEnum
    having?: OccurrenceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OccurrenceHistoryCountAggregateInputType | true
    _min?: OccurrenceHistoryMinAggregateInputType
    _max?: OccurrenceHistoryMaxAggregateInputType
  }

  export type OccurrenceHistoryGroupByOutputType = {
    id: string
    editorId: string
    occurrenceId: string
    createdAt: Date
    changedFields: string[]
    _count: OccurrenceHistoryCountAggregateOutputType | null
    _min: OccurrenceHistoryMinAggregateOutputType | null
    _max: OccurrenceHistoryMaxAggregateOutputType | null
  }

  type GetOccurrenceHistoryGroupByPayload<T extends OccurrenceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OccurrenceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OccurrenceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OccurrenceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], OccurrenceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type OccurrenceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    editorId?: boolean
    occurrenceId?: boolean
    createdAt?: boolean
    changedFields?: boolean
    Occurrence?: boolean | OccurrenceDefaultArgs<ExtArgs>
    editor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["occurrenceHistory"]>

  export type OccurrenceHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    editorId?: boolean
    occurrenceId?: boolean
    createdAt?: boolean
    changedFields?: boolean
    Occurrence?: boolean | OccurrenceDefaultArgs<ExtArgs>
    editor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["occurrenceHistory"]>

  export type OccurrenceHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    editorId?: boolean
    occurrenceId?: boolean
    createdAt?: boolean
    changedFields?: boolean
    Occurrence?: boolean | OccurrenceDefaultArgs<ExtArgs>
    editor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["occurrenceHistory"]>

  export type OccurrenceHistorySelectScalar = {
    id?: boolean
    editorId?: boolean
    occurrenceId?: boolean
    createdAt?: boolean
    changedFields?: boolean
  }

  export type OccurrenceHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "editorId" | "occurrenceId" | "createdAt" | "changedFields", ExtArgs["result"]["occurrenceHistory"]>
  export type OccurrenceHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Occurrence?: boolean | OccurrenceDefaultArgs<ExtArgs>
    editor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OccurrenceHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Occurrence?: boolean | OccurrenceDefaultArgs<ExtArgs>
    editor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OccurrenceHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Occurrence?: boolean | OccurrenceDefaultArgs<ExtArgs>
    editor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OccurrenceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OccurrenceHistory"
    objects: {
      Occurrence: Prisma.$OccurrencePayload<ExtArgs>
      editor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      editorId: string
      occurrenceId: string
      createdAt: Date
      changedFields: string[]
    }, ExtArgs["result"]["occurrenceHistory"]>
    composites: {}
  }

  type OccurrenceHistoryGetPayload<S extends boolean | null | undefined | OccurrenceHistoryDefaultArgs> = $Result.GetResult<Prisma.$OccurrenceHistoryPayload, S>

  type OccurrenceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OccurrenceHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OccurrenceHistoryCountAggregateInputType | true
    }

  export interface OccurrenceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OccurrenceHistory'], meta: { name: 'OccurrenceHistory' } }
    /**
     * Find zero or one OccurrenceHistory that matches the filter.
     * @param {OccurrenceHistoryFindUniqueArgs} args - Arguments to find a OccurrenceHistory
     * @example
     * // Get one OccurrenceHistory
     * const occurrenceHistory = await prisma.occurrenceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OccurrenceHistoryFindUniqueArgs>(args: SelectSubset<T, OccurrenceHistoryFindUniqueArgs<ExtArgs>>): Prisma__OccurrenceHistoryClient<$Result.GetResult<Prisma.$OccurrenceHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OccurrenceHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OccurrenceHistoryFindUniqueOrThrowArgs} args - Arguments to find a OccurrenceHistory
     * @example
     * // Get one OccurrenceHistory
     * const occurrenceHistory = await prisma.occurrenceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OccurrenceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, OccurrenceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OccurrenceHistoryClient<$Result.GetResult<Prisma.$OccurrenceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccurrenceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceHistoryFindFirstArgs} args - Arguments to find a OccurrenceHistory
     * @example
     * // Get one OccurrenceHistory
     * const occurrenceHistory = await prisma.occurrenceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OccurrenceHistoryFindFirstArgs>(args?: SelectSubset<T, OccurrenceHistoryFindFirstArgs<ExtArgs>>): Prisma__OccurrenceHistoryClient<$Result.GetResult<Prisma.$OccurrenceHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccurrenceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceHistoryFindFirstOrThrowArgs} args - Arguments to find a OccurrenceHistory
     * @example
     * // Get one OccurrenceHistory
     * const occurrenceHistory = await prisma.occurrenceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OccurrenceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, OccurrenceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__OccurrenceHistoryClient<$Result.GetResult<Prisma.$OccurrenceHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OccurrenceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OccurrenceHistories
     * const occurrenceHistories = await prisma.occurrenceHistory.findMany()
     * 
     * // Get first 10 OccurrenceHistories
     * const occurrenceHistories = await prisma.occurrenceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const occurrenceHistoryWithIdOnly = await prisma.occurrenceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OccurrenceHistoryFindManyArgs>(args?: SelectSubset<T, OccurrenceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccurrenceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OccurrenceHistory.
     * @param {OccurrenceHistoryCreateArgs} args - Arguments to create a OccurrenceHistory.
     * @example
     * // Create one OccurrenceHistory
     * const OccurrenceHistory = await prisma.occurrenceHistory.create({
     *   data: {
     *     // ... data to create a OccurrenceHistory
     *   }
     * })
     * 
     */
    create<T extends OccurrenceHistoryCreateArgs>(args: SelectSubset<T, OccurrenceHistoryCreateArgs<ExtArgs>>): Prisma__OccurrenceHistoryClient<$Result.GetResult<Prisma.$OccurrenceHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OccurrenceHistories.
     * @param {OccurrenceHistoryCreateManyArgs} args - Arguments to create many OccurrenceHistories.
     * @example
     * // Create many OccurrenceHistories
     * const occurrenceHistory = await prisma.occurrenceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OccurrenceHistoryCreateManyArgs>(args?: SelectSubset<T, OccurrenceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OccurrenceHistories and returns the data saved in the database.
     * @param {OccurrenceHistoryCreateManyAndReturnArgs} args - Arguments to create many OccurrenceHistories.
     * @example
     * // Create many OccurrenceHistories
     * const occurrenceHistory = await prisma.occurrenceHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OccurrenceHistories and only return the `id`
     * const occurrenceHistoryWithIdOnly = await prisma.occurrenceHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OccurrenceHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, OccurrenceHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccurrenceHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OccurrenceHistory.
     * @param {OccurrenceHistoryDeleteArgs} args - Arguments to delete one OccurrenceHistory.
     * @example
     * // Delete one OccurrenceHistory
     * const OccurrenceHistory = await prisma.occurrenceHistory.delete({
     *   where: {
     *     // ... filter to delete one OccurrenceHistory
     *   }
     * })
     * 
     */
    delete<T extends OccurrenceHistoryDeleteArgs>(args: SelectSubset<T, OccurrenceHistoryDeleteArgs<ExtArgs>>): Prisma__OccurrenceHistoryClient<$Result.GetResult<Prisma.$OccurrenceHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OccurrenceHistory.
     * @param {OccurrenceHistoryUpdateArgs} args - Arguments to update one OccurrenceHistory.
     * @example
     * // Update one OccurrenceHistory
     * const occurrenceHistory = await prisma.occurrenceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OccurrenceHistoryUpdateArgs>(args: SelectSubset<T, OccurrenceHistoryUpdateArgs<ExtArgs>>): Prisma__OccurrenceHistoryClient<$Result.GetResult<Prisma.$OccurrenceHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OccurrenceHistories.
     * @param {OccurrenceHistoryDeleteManyArgs} args - Arguments to filter OccurrenceHistories to delete.
     * @example
     * // Delete a few OccurrenceHistories
     * const { count } = await prisma.occurrenceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OccurrenceHistoryDeleteManyArgs>(args?: SelectSubset<T, OccurrenceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OccurrenceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OccurrenceHistories
     * const occurrenceHistory = await prisma.occurrenceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OccurrenceHistoryUpdateManyArgs>(args: SelectSubset<T, OccurrenceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OccurrenceHistories and returns the data updated in the database.
     * @param {OccurrenceHistoryUpdateManyAndReturnArgs} args - Arguments to update many OccurrenceHistories.
     * @example
     * // Update many OccurrenceHistories
     * const occurrenceHistory = await prisma.occurrenceHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OccurrenceHistories and only return the `id`
     * const occurrenceHistoryWithIdOnly = await prisma.occurrenceHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OccurrenceHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, OccurrenceHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccurrenceHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OccurrenceHistory.
     * @param {OccurrenceHistoryUpsertArgs} args - Arguments to update or create a OccurrenceHistory.
     * @example
     * // Update or create a OccurrenceHistory
     * const occurrenceHistory = await prisma.occurrenceHistory.upsert({
     *   create: {
     *     // ... data to create a OccurrenceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OccurrenceHistory we want to update
     *   }
     * })
     */
    upsert<T extends OccurrenceHistoryUpsertArgs>(args: SelectSubset<T, OccurrenceHistoryUpsertArgs<ExtArgs>>): Prisma__OccurrenceHistoryClient<$Result.GetResult<Prisma.$OccurrenceHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OccurrenceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceHistoryCountArgs} args - Arguments to filter OccurrenceHistories to count.
     * @example
     * // Count the number of OccurrenceHistories
     * const count = await prisma.occurrenceHistory.count({
     *   where: {
     *     // ... the filter for the OccurrenceHistories we want to count
     *   }
     * })
    **/
    count<T extends OccurrenceHistoryCountArgs>(
      args?: Subset<T, OccurrenceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OccurrenceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OccurrenceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OccurrenceHistoryAggregateArgs>(args: Subset<T, OccurrenceHistoryAggregateArgs>): Prisma.PrismaPromise<GetOccurrenceHistoryAggregateType<T>>

    /**
     * Group by OccurrenceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccurrenceHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OccurrenceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OccurrenceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: OccurrenceHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OccurrenceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOccurrenceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OccurrenceHistory model
   */
  readonly fields: OccurrenceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OccurrenceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OccurrenceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Occurrence<T extends OccurrenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OccurrenceDefaultArgs<ExtArgs>>): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    editor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OccurrenceHistory model
   */
  interface OccurrenceHistoryFieldRefs {
    readonly id: FieldRef<"OccurrenceHistory", 'String'>
    readonly editorId: FieldRef<"OccurrenceHistory", 'String'>
    readonly occurrenceId: FieldRef<"OccurrenceHistory", 'String'>
    readonly createdAt: FieldRef<"OccurrenceHistory", 'DateTime'>
    readonly changedFields: FieldRef<"OccurrenceHistory", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * OccurrenceHistory findUnique
   */
  export type OccurrenceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccurrenceHistory
     */
    select?: OccurrenceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccurrenceHistory
     */
    omit?: OccurrenceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OccurrenceHistory to fetch.
     */
    where: OccurrenceHistoryWhereUniqueInput
  }

  /**
   * OccurrenceHistory findUniqueOrThrow
   */
  export type OccurrenceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccurrenceHistory
     */
    select?: OccurrenceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccurrenceHistory
     */
    omit?: OccurrenceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OccurrenceHistory to fetch.
     */
    where: OccurrenceHistoryWhereUniqueInput
  }

  /**
   * OccurrenceHistory findFirst
   */
  export type OccurrenceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccurrenceHistory
     */
    select?: OccurrenceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccurrenceHistory
     */
    omit?: OccurrenceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OccurrenceHistory to fetch.
     */
    where?: OccurrenceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccurrenceHistories to fetch.
     */
    orderBy?: OccurrenceHistoryOrderByWithRelationInput | OccurrenceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccurrenceHistories.
     */
    cursor?: OccurrenceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccurrenceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccurrenceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccurrenceHistories.
     */
    distinct?: OccurrenceHistoryScalarFieldEnum | OccurrenceHistoryScalarFieldEnum[]
  }

  /**
   * OccurrenceHistory findFirstOrThrow
   */
  export type OccurrenceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccurrenceHistory
     */
    select?: OccurrenceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccurrenceHistory
     */
    omit?: OccurrenceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OccurrenceHistory to fetch.
     */
    where?: OccurrenceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccurrenceHistories to fetch.
     */
    orderBy?: OccurrenceHistoryOrderByWithRelationInput | OccurrenceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccurrenceHistories.
     */
    cursor?: OccurrenceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccurrenceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccurrenceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccurrenceHistories.
     */
    distinct?: OccurrenceHistoryScalarFieldEnum | OccurrenceHistoryScalarFieldEnum[]
  }

  /**
   * OccurrenceHistory findMany
   */
  export type OccurrenceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccurrenceHistory
     */
    select?: OccurrenceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccurrenceHistory
     */
    omit?: OccurrenceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OccurrenceHistories to fetch.
     */
    where?: OccurrenceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccurrenceHistories to fetch.
     */
    orderBy?: OccurrenceHistoryOrderByWithRelationInput | OccurrenceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OccurrenceHistories.
     */
    cursor?: OccurrenceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccurrenceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccurrenceHistories.
     */
    skip?: number
    distinct?: OccurrenceHistoryScalarFieldEnum | OccurrenceHistoryScalarFieldEnum[]
  }

  /**
   * OccurrenceHistory create
   */
  export type OccurrenceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccurrenceHistory
     */
    select?: OccurrenceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccurrenceHistory
     */
    omit?: OccurrenceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a OccurrenceHistory.
     */
    data: XOR<OccurrenceHistoryCreateInput, OccurrenceHistoryUncheckedCreateInput>
  }

  /**
   * OccurrenceHistory createMany
   */
  export type OccurrenceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OccurrenceHistories.
     */
    data: OccurrenceHistoryCreateManyInput | OccurrenceHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OccurrenceHistory createManyAndReturn
   */
  export type OccurrenceHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccurrenceHistory
     */
    select?: OccurrenceHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OccurrenceHistory
     */
    omit?: OccurrenceHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many OccurrenceHistories.
     */
    data: OccurrenceHistoryCreateManyInput | OccurrenceHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OccurrenceHistory update
   */
  export type OccurrenceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccurrenceHistory
     */
    select?: OccurrenceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccurrenceHistory
     */
    omit?: OccurrenceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a OccurrenceHistory.
     */
    data: XOR<OccurrenceHistoryUpdateInput, OccurrenceHistoryUncheckedUpdateInput>
    /**
     * Choose, which OccurrenceHistory to update.
     */
    where: OccurrenceHistoryWhereUniqueInput
  }

  /**
   * OccurrenceHistory updateMany
   */
  export type OccurrenceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OccurrenceHistories.
     */
    data: XOR<OccurrenceHistoryUpdateManyMutationInput, OccurrenceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which OccurrenceHistories to update
     */
    where?: OccurrenceHistoryWhereInput
    /**
     * Limit how many OccurrenceHistories to update.
     */
    limit?: number
  }

  /**
   * OccurrenceHistory updateManyAndReturn
   */
  export type OccurrenceHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccurrenceHistory
     */
    select?: OccurrenceHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OccurrenceHistory
     */
    omit?: OccurrenceHistoryOmit<ExtArgs> | null
    /**
     * The data used to update OccurrenceHistories.
     */
    data: XOR<OccurrenceHistoryUpdateManyMutationInput, OccurrenceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which OccurrenceHistories to update
     */
    where?: OccurrenceHistoryWhereInput
    /**
     * Limit how many OccurrenceHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OccurrenceHistory upsert
   */
  export type OccurrenceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccurrenceHistory
     */
    select?: OccurrenceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccurrenceHistory
     */
    omit?: OccurrenceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the OccurrenceHistory to update in case it exists.
     */
    where: OccurrenceHistoryWhereUniqueInput
    /**
     * In case the OccurrenceHistory found by the `where` argument doesn't exist, create a new OccurrenceHistory with this data.
     */
    create: XOR<OccurrenceHistoryCreateInput, OccurrenceHistoryUncheckedCreateInput>
    /**
     * In case the OccurrenceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OccurrenceHistoryUpdateInput, OccurrenceHistoryUncheckedUpdateInput>
  }

  /**
   * OccurrenceHistory delete
   */
  export type OccurrenceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccurrenceHistory
     */
    select?: OccurrenceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccurrenceHistory
     */
    omit?: OccurrenceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceHistoryInclude<ExtArgs> | null
    /**
     * Filter which OccurrenceHistory to delete.
     */
    where: OccurrenceHistoryWhereUniqueInput
  }

  /**
   * OccurrenceHistory deleteMany
   */
  export type OccurrenceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccurrenceHistories to delete
     */
    where?: OccurrenceHistoryWhereInput
    /**
     * Limit how many OccurrenceHistories to delete.
     */
    limit?: number
  }

  /**
   * OccurrenceHistory without action
   */
  export type OccurrenceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccurrenceHistory
     */
    select?: OccurrenceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccurrenceHistory
     */
    omit?: OccurrenceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    groupId: string | null
    cpf: string | null
    responsiblePhone: string | null
    responsibleEmail: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    groupId: string | null
    cpf: string | null
    responsiblePhone: string | null
    responsibleEmail: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    userId: number
    groupId: number
    cpf: number
    responsiblePhone: number
    responsibleEmail: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    cpf?: true
    responsiblePhone?: true
    responsibleEmail?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    cpf?: true
    responsiblePhone?: true
    responsibleEmail?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    cpf?: true
    responsiblePhone?: true
    responsibleEmail?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    userId: string
    groupId: string
    cpf: string
    responsiblePhone: string
    responsibleEmail: string
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    cpf?: boolean
    responsiblePhone?: boolean
    responsibleEmail?: boolean
    Occurrences?: boolean | Student$OccurrencesArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    cpf?: boolean
    responsiblePhone?: boolean
    responsibleEmail?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    cpf?: boolean
    responsiblePhone?: boolean
    responsibleEmail?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    userId?: boolean
    groupId?: boolean
    cpf?: boolean
    responsiblePhone?: boolean
    responsibleEmail?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "groupId" | "cpf" | "responsiblePhone" | "responsibleEmail", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Occurrences?: boolean | Student$OccurrencesArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      Occurrences: Prisma.$OccurrencePayload<ExtArgs>[]
      group: Prisma.$GroupPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      groupId: string
      cpf: string
      responsiblePhone: string
      responsibleEmail: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Occurrences<T extends Student$OccurrencesArgs<ExtArgs> = {}>(args?: Subset<T, Student$OccurrencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly userId: FieldRef<"Student", 'String'>
    readonly groupId: FieldRef<"Student", 'String'>
    readonly cpf: FieldRef<"Student", 'String'>
    readonly responsiblePhone: FieldRef<"Student", 'String'>
    readonly responsibleEmail: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.Occurrences
   */
  export type Student$OccurrencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occurrence
     */
    omit?: OccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceInclude<ExtArgs> | null
    where?: OccurrenceWhereInput
    orderBy?: OccurrenceOrderByWithRelationInput | OccurrenceOrderByWithRelationInput[]
    cursor?: OccurrenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OccurrenceScalarFieldEnum | OccurrenceScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherMinAggregateOutputType = {
    id: string | null
    userId: string | null
    status: $Enums.TeacherStatus | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    status: $Enums.TeacherStatus | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    _all: number
  }


  export type TeacherMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: string
    userId: string
    status: $Enums.TeacherStatus
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Occurrences?: boolean | Teacher$OccurrencesArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Occurrences?: boolean | Teacher$OccurrencesArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Occurrences: Prisma.$OccurrencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      status: $Enums.TeacherStatus
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Occurrences<T extends Teacher$OccurrencesArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$OccurrencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'String'>
    readonly userId: FieldRef<"Teacher", 'String'>
    readonly status: FieldRef<"Teacher", 'TeacherStatus'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.Occurrences
   */
  export type Teacher$OccurrencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occurrence
     */
    select?: OccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occurrence
     */
    omit?: OccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccurrenceInclude<ExtArgs> | null
    where?: OccurrenceWhereInput
    orderBy?: OccurrenceOrderByWithRelationInput | OccurrenceOrderByWithRelationInput[]
    cursor?: OccurrenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OccurrenceScalarFieldEnum | OccurrenceScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    occurrenceId: string | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    occurrenceId: string | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    title: number
    url: number
    occurrenceId: number
    _all: number
  }


  export type AttachmentMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    occurrenceId?: true
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    occurrenceId?: true
  }

  export type AttachmentCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    occurrenceId?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithAggregationInput | AttachmentOrderByWithAggregationInput[]
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: AttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    id: string
    title: string
    url: string
    occurrenceId: string
    _count: AttachmentCountAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    occurrenceId?: boolean
    Occurrence?: boolean | OccurrenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    occurrenceId?: boolean
    Occurrence?: boolean | OccurrenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    occurrenceId?: boolean
    Occurrence?: boolean | OccurrenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
    occurrenceId?: boolean
  }

  export type AttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "url" | "occurrenceId", ExtArgs["result"]["attachment"]>
  export type AttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Occurrence?: boolean | OccurrenceDefaultArgs<ExtArgs>
  }
  export type AttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Occurrence?: boolean | OccurrenceDefaultArgs<ExtArgs>
  }
  export type AttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Occurrence?: boolean | OccurrenceDefaultArgs<ExtArgs>
  }

  export type $AttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachment"
    objects: {
      Occurrence: Prisma.$OccurrencePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      url: string
      occurrenceId: string
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }

  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = $Result.GetResult<Prisma.$AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentFindUniqueArgs>(args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentFindFirstArgs>(args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttachmentFindManyArgs>(args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
     */
    create<T extends AttachmentCreateArgs>(args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachmentCreateManyArgs>(args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attachments and returns the data saved in the database.
     * @param {AttachmentCreateManyAndReturnArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
     */
    delete<T extends AttachmentDeleteArgs>(args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachmentUpdateArgs>(args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachmentUpdateManyArgs>(args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments and returns the data updated in the database.
     * @param {AttachmentUpdateManyAndReturnArgs} args - Arguments to update many Attachments.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentUpsertArgs>(args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachment model
   */
  readonly fields: AttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Occurrence<T extends OccurrenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OccurrenceDefaultArgs<ExtArgs>>): Prisma__OccurrenceClient<$Result.GetResult<Prisma.$OccurrencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attachment model
   */
  interface AttachmentFieldRefs {
    readonly id: FieldRef<"Attachment", 'String'>
    readonly title: FieldRef<"Attachment", 'String'>
    readonly url: FieldRef<"Attachment", 'String'>
    readonly occurrenceId: FieldRef<"Attachment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attachment findUnique
   */
  export type AttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findFirst
   */
  export type AttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }

  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attachment createManyAndReturn
   */
  export type AttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
  }

  /**
   * Attachment updateManyAndReturn
   */
  export type AttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }

  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number
  }

  /**
   * Attachment without action
   */
  export type AttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    temporaryPassword: 'temporaryPassword'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PedagogueScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type PedagogueScalarFieldEnum = (typeof PedagogueScalarFieldEnum)[keyof typeof PedagogueScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    shift: 'shift'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const OccurrenceScalarFieldEnum: {
    id: 'id',
    teacherId: 'teacherId',
    authorId: 'authorId',
    title: 'title',
    description: 'description',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type OccurrenceScalarFieldEnum = (typeof OccurrenceScalarFieldEnum)[keyof typeof OccurrenceScalarFieldEnum]


  export const OccurrenceHistoryScalarFieldEnum: {
    id: 'id',
    editorId: 'editorId',
    occurrenceId: 'occurrenceId',
    createdAt: 'createdAt',
    changedFields: 'changedFields'
  };

  export type OccurrenceHistoryScalarFieldEnum = (typeof OccurrenceHistoryScalarFieldEnum)[keyof typeof OccurrenceHistoryScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    groupId: 'groupId',
    cpf: 'cpf',
    responsiblePhone: 'responsiblePhone',
    responsibleEmail: 'responsibleEmail'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url',
    occurrenceId: 'occurrenceId'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'GroupShift'
   */
  export type EnumGroupShiftFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupShift'>
    


  /**
   * Reference to a field of type 'GroupShift[]'
   */
  export type ListEnumGroupShiftFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupShift[]'>
    


  /**
   * Reference to a field of type 'OccurrenceType'
   */
  export type EnumOccurrenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OccurrenceType'>
    


  /**
   * Reference to a field of type 'OccurrenceType[]'
   */
  export type ListEnumOccurrenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OccurrenceType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TeacherStatus'
   */
  export type EnumTeacherStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeacherStatus'>
    


  /**
   * Reference to a field of type 'TeacherStatus[]'
   */
  export type ListEnumTeacherStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeacherStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    temporaryPassword?: StringNullableFilter<"User"> | string | null
    students?: StudentListRelationFilter
    teacher?: TeacherListRelationFilter
    Occurrence?: OccurrenceListRelationFilter
    OccurrenceHistory?: OccurrenceHistoryListRelationFilter
    pedagogue?: PedagogueListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    temporaryPassword?: SortOrderInput | SortOrder
    students?: StudentOrderByRelationAggregateInput
    teacher?: TeacherOrderByRelationAggregateInput
    Occurrence?: OccurrenceOrderByRelationAggregateInput
    OccurrenceHistory?: OccurrenceHistoryOrderByRelationAggregateInput
    pedagogue?: PedagogueOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    temporaryPassword?: StringNullableFilter<"User"> | string | null
    students?: StudentListRelationFilter
    teacher?: TeacherListRelationFilter
    Occurrence?: OccurrenceListRelationFilter
    OccurrenceHistory?: OccurrenceHistoryListRelationFilter
    pedagogue?: PedagogueListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    temporaryPassword?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    temporaryPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PedagogueWhereInput = {
    AND?: PedagogueWhereInput | PedagogueWhereInput[]
    OR?: PedagogueWhereInput[]
    NOT?: PedagogueWhereInput | PedagogueWhereInput[]
    id?: StringFilter<"Pedagogue"> | string
    userId?: StringFilter<"Pedagogue"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    occurrences?: OccurrenceListRelationFilter
  }

  export type PedagogueOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    occurrences?: OccurrenceOrderByRelationAggregateInput
  }

  export type PedagogueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PedagogueWhereInput | PedagogueWhereInput[]
    OR?: PedagogueWhereInput[]
    NOT?: PedagogueWhereInput | PedagogueWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    occurrences?: OccurrenceListRelationFilter
  }, "id" | "userId">

  export type PedagogueOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: PedagogueCountOrderByAggregateInput
    _max?: PedagogueMaxOrderByAggregateInput
    _min?: PedagogueMinOrderByAggregateInput
  }

  export type PedagogueScalarWhereWithAggregatesInput = {
    AND?: PedagogueScalarWhereWithAggregatesInput | PedagogueScalarWhereWithAggregatesInput[]
    OR?: PedagogueScalarWhereWithAggregatesInput[]
    NOT?: PedagogueScalarWhereWithAggregatesInput | PedagogueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pedagogue"> | string
    userId?: StringWithAggregatesFilter<"Pedagogue"> | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    shift?: EnumGroupShiftFilter<"Group"> | $Enums.GroupShift
    students?: StudentListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    shift?: SortOrder
    students?: StudentOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    shift?: EnumGroupShiftFilter<"Group"> | $Enums.GroupShift
    students?: StudentListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    shift?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    shift?: EnumGroupShiftWithAggregatesFilter<"Group"> | $Enums.GroupShift
  }

  export type OccurrenceWhereInput = {
    AND?: OccurrenceWhereInput | OccurrenceWhereInput[]
    OR?: OccurrenceWhereInput[]
    NOT?: OccurrenceWhereInput | OccurrenceWhereInput[]
    id?: StringFilter<"Occurrence"> | string
    teacherId?: StringFilter<"Occurrence"> | string
    authorId?: StringFilter<"Occurrence"> | string
    title?: StringFilter<"Occurrence"> | string
    description?: StringFilter<"Occurrence"> | string
    type?: EnumOccurrenceTypeFilter<"Occurrence"> | $Enums.OccurrenceType
    createdAt?: DateTimeFilter<"Occurrence"> | Date | string
    author?: XOR<PedagogueScalarRelationFilter, PedagogueWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    attendees?: UserListRelationFilter
    students?: StudentListRelationFilter
    occurrenceHistories?: OccurrenceHistoryListRelationFilter
    attachments?: AttachmentListRelationFilter
  }

  export type OccurrenceOrderByWithRelationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    author?: PedagogueOrderByWithRelationInput
    teacher?: TeacherOrderByWithRelationInput
    attendees?: UserOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
    occurrenceHistories?: OccurrenceHistoryOrderByRelationAggregateInput
    attachments?: AttachmentOrderByRelationAggregateInput
  }

  export type OccurrenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OccurrenceWhereInput | OccurrenceWhereInput[]
    OR?: OccurrenceWhereInput[]
    NOT?: OccurrenceWhereInput | OccurrenceWhereInput[]
    teacherId?: StringFilter<"Occurrence"> | string
    authorId?: StringFilter<"Occurrence"> | string
    title?: StringFilter<"Occurrence"> | string
    description?: StringFilter<"Occurrence"> | string
    type?: EnumOccurrenceTypeFilter<"Occurrence"> | $Enums.OccurrenceType
    createdAt?: DateTimeFilter<"Occurrence"> | Date | string
    author?: XOR<PedagogueScalarRelationFilter, PedagogueWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    attendees?: UserListRelationFilter
    students?: StudentListRelationFilter
    occurrenceHistories?: OccurrenceHistoryListRelationFilter
    attachments?: AttachmentListRelationFilter
  }, "id">

  export type OccurrenceOrderByWithAggregationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: OccurrenceCountOrderByAggregateInput
    _max?: OccurrenceMaxOrderByAggregateInput
    _min?: OccurrenceMinOrderByAggregateInput
  }

  export type OccurrenceScalarWhereWithAggregatesInput = {
    AND?: OccurrenceScalarWhereWithAggregatesInput | OccurrenceScalarWhereWithAggregatesInput[]
    OR?: OccurrenceScalarWhereWithAggregatesInput[]
    NOT?: OccurrenceScalarWhereWithAggregatesInput | OccurrenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Occurrence"> | string
    teacherId?: StringWithAggregatesFilter<"Occurrence"> | string
    authorId?: StringWithAggregatesFilter<"Occurrence"> | string
    title?: StringWithAggregatesFilter<"Occurrence"> | string
    description?: StringWithAggregatesFilter<"Occurrence"> | string
    type?: EnumOccurrenceTypeWithAggregatesFilter<"Occurrence"> | $Enums.OccurrenceType
    createdAt?: DateTimeWithAggregatesFilter<"Occurrence"> | Date | string
  }

  export type OccurrenceHistoryWhereInput = {
    AND?: OccurrenceHistoryWhereInput | OccurrenceHistoryWhereInput[]
    OR?: OccurrenceHistoryWhereInput[]
    NOT?: OccurrenceHistoryWhereInput | OccurrenceHistoryWhereInput[]
    id?: StringFilter<"OccurrenceHistory"> | string
    editorId?: StringFilter<"OccurrenceHistory"> | string
    occurrenceId?: StringFilter<"OccurrenceHistory"> | string
    createdAt?: DateTimeFilter<"OccurrenceHistory"> | Date | string
    changedFields?: StringNullableListFilter<"OccurrenceHistory">
    Occurrence?: XOR<OccurrenceScalarRelationFilter, OccurrenceWhereInput>
    editor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OccurrenceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    editorId?: SortOrder
    occurrenceId?: SortOrder
    createdAt?: SortOrder
    changedFields?: SortOrder
    Occurrence?: OccurrenceOrderByWithRelationInput
    editor?: UserOrderByWithRelationInput
  }

  export type OccurrenceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OccurrenceHistoryWhereInput | OccurrenceHistoryWhereInput[]
    OR?: OccurrenceHistoryWhereInput[]
    NOT?: OccurrenceHistoryWhereInput | OccurrenceHistoryWhereInput[]
    editorId?: StringFilter<"OccurrenceHistory"> | string
    occurrenceId?: StringFilter<"OccurrenceHistory"> | string
    createdAt?: DateTimeFilter<"OccurrenceHistory"> | Date | string
    changedFields?: StringNullableListFilter<"OccurrenceHistory">
    Occurrence?: XOR<OccurrenceScalarRelationFilter, OccurrenceWhereInput>
    editor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OccurrenceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    editorId?: SortOrder
    occurrenceId?: SortOrder
    createdAt?: SortOrder
    changedFields?: SortOrder
    _count?: OccurrenceHistoryCountOrderByAggregateInput
    _max?: OccurrenceHistoryMaxOrderByAggregateInput
    _min?: OccurrenceHistoryMinOrderByAggregateInput
  }

  export type OccurrenceHistoryScalarWhereWithAggregatesInput = {
    AND?: OccurrenceHistoryScalarWhereWithAggregatesInput | OccurrenceHistoryScalarWhereWithAggregatesInput[]
    OR?: OccurrenceHistoryScalarWhereWithAggregatesInput[]
    NOT?: OccurrenceHistoryScalarWhereWithAggregatesInput | OccurrenceHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OccurrenceHistory"> | string
    editorId?: StringWithAggregatesFilter<"OccurrenceHistory"> | string
    occurrenceId?: StringWithAggregatesFilter<"OccurrenceHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OccurrenceHistory"> | Date | string
    changedFields?: StringNullableListFilter<"OccurrenceHistory">
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    userId?: StringFilter<"Student"> | string
    groupId?: StringFilter<"Student"> | string
    cpf?: StringFilter<"Student"> | string
    responsiblePhone?: StringFilter<"Student"> | string
    responsibleEmail?: StringFilter<"Student"> | string
    Occurrences?: OccurrenceListRelationFilter
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    cpf?: SortOrder
    responsiblePhone?: SortOrder
    responsibleEmail?: SortOrder
    Occurrences?: OccurrenceOrderByRelationAggregateInput
    group?: GroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    responsibleEmail?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    userId?: StringFilter<"Student"> | string
    groupId?: StringFilter<"Student"> | string
    responsiblePhone?: StringFilter<"Student"> | string
    Occurrences?: OccurrenceListRelationFilter
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "cpf" | "responsibleEmail">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    cpf?: SortOrder
    responsiblePhone?: SortOrder
    responsibleEmail?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    userId?: StringWithAggregatesFilter<"Student"> | string
    groupId?: StringWithAggregatesFilter<"Student"> | string
    cpf?: StringWithAggregatesFilter<"Student"> | string
    responsiblePhone?: StringWithAggregatesFilter<"Student"> | string
    responsibleEmail?: StringWithAggregatesFilter<"Student"> | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: StringFilter<"Teacher"> | string
    userId?: StringFilter<"Teacher"> | string
    status?: EnumTeacherStatusFilter<"Teacher"> | $Enums.TeacherStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Occurrences?: OccurrenceListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    Occurrences?: OccurrenceOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    status?: EnumTeacherStatusFilter<"Teacher"> | $Enums.TeacherStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Occurrences?: OccurrenceListRelationFilter
  }, "id" | "userId">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teacher"> | string
    userId?: StringWithAggregatesFilter<"Teacher"> | string
    status?: EnumTeacherStatusWithAggregatesFilter<"Teacher"> | $Enums.TeacherStatus
  }

  export type AttachmentWhereInput = {
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    id?: StringFilter<"Attachment"> | string
    title?: StringFilter<"Attachment"> | string
    url?: StringFilter<"Attachment"> | string
    occurrenceId?: StringFilter<"Attachment"> | string
    Occurrence?: XOR<OccurrenceScalarRelationFilter, OccurrenceWhereInput>
  }

  export type AttachmentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    occurrenceId?: SortOrder
    Occurrence?: OccurrenceOrderByWithRelationInput
  }

  export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    title?: StringFilter<"Attachment"> | string
    url?: StringFilter<"Attachment"> | string
    occurrenceId?: StringFilter<"Attachment"> | string
    Occurrence?: XOR<OccurrenceScalarRelationFilter, OccurrenceWhereInput>
  }, "id">

  export type AttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    occurrenceId?: SortOrder
    _count?: AttachmentCountOrderByAggregateInput
    _max?: AttachmentMaxOrderByAggregateInput
    _min?: AttachmentMinOrderByAggregateInput
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    OR?: AttachmentScalarWhereWithAggregatesInput[]
    NOT?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attachment"> | string
    title?: StringWithAggregatesFilter<"Attachment"> | string
    url?: StringWithAggregatesFilter<"Attachment"> | string
    occurrenceId?: StringWithAggregatesFilter<"Attachment"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    temporaryPassword?: string | null
    students?: StudentCreateNestedManyWithoutUserInput
    teacher?: TeacherCreateNestedManyWithoutUserInput
    Occurrence?: OccurrenceCreateNestedManyWithoutAttendeesInput
    OccurrenceHistory?: OccurrenceHistoryCreateNestedManyWithoutEditorInput
    pedagogue?: PedagogueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    temporaryPassword?: string | null
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    teacher?: TeacherUncheckedCreateNestedManyWithoutUserInput
    Occurrence?: OccurrenceUncheckedCreateNestedManyWithoutAttendeesInput
    OccurrenceHistory?: OccurrenceHistoryUncheckedCreateNestedManyWithoutEditorInput
    pedagogue?: PedagogueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    temporaryPassword?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentUpdateManyWithoutUserNestedInput
    teacher?: TeacherUpdateManyWithoutUserNestedInput
    Occurrence?: OccurrenceUpdateManyWithoutAttendeesNestedInput
    OccurrenceHistory?: OccurrenceHistoryUpdateManyWithoutEditorNestedInput
    pedagogue?: PedagogueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    temporaryPassword?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    teacher?: TeacherUncheckedUpdateManyWithoutUserNestedInput
    Occurrence?: OccurrenceUncheckedUpdateManyWithoutAttendeesNestedInput
    OccurrenceHistory?: OccurrenceHistoryUncheckedUpdateManyWithoutEditorNestedInput
    pedagogue?: PedagogueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    temporaryPassword?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    temporaryPassword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    temporaryPassword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PedagogueCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutPedagogueInput
    occurrences?: OccurrenceCreateNestedManyWithoutAuthorInput
  }

  export type PedagogueUncheckedCreateInput = {
    id?: string
    userId: string
    occurrences?: OccurrenceUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type PedagogueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPedagogueNestedInput
    occurrences?: OccurrenceUpdateManyWithoutAuthorNestedInput
  }

  export type PedagogueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    occurrences?: OccurrenceUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PedagogueCreateManyInput = {
    id?: string
    userId: string
  }

  export type PedagogueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PedagogueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    shift: $Enums.GroupShift
    students?: StudentCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    shift: $Enums.GroupShift
    students?: StudentUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shift?: EnumGroupShiftFieldUpdateOperationsInput | $Enums.GroupShift
    students?: StudentUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shift?: EnumGroupShiftFieldUpdateOperationsInput | $Enums.GroupShift
    students?: StudentUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    shift: $Enums.GroupShift
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shift?: EnumGroupShiftFieldUpdateOperationsInput | $Enums.GroupShift
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shift?: EnumGroupShiftFieldUpdateOperationsInput | $Enums.GroupShift
  }

  export type OccurrenceCreateInput = {
    id?: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
    author: PedagogueCreateNestedOneWithoutOccurrencesInput
    teacher: TeacherCreateNestedOneWithoutOccurrencesInput
    attendees?: UserCreateNestedManyWithoutOccurrenceInput
    students?: StudentCreateNestedManyWithoutOccurrencesInput
    occurrenceHistories?: OccurrenceHistoryCreateNestedManyWithoutOccurrenceInput
    attachments?: AttachmentCreateNestedManyWithoutOccurrenceInput
  }

  export type OccurrenceUncheckedCreateInput = {
    id?: string
    teacherId: string
    authorId: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
    attendees?: UserUncheckedCreateNestedManyWithoutOccurrenceInput
    students?: StudentUncheckedCreateNestedManyWithoutOccurrencesInput
    occurrenceHistories?: OccurrenceHistoryUncheckedCreateNestedManyWithoutOccurrenceInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutOccurrenceInput
  }

  export type OccurrenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: PedagogueUpdateOneRequiredWithoutOccurrencesNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutOccurrencesNestedInput
    attendees?: UserUpdateManyWithoutOccurrenceNestedInput
    students?: StudentUpdateManyWithoutOccurrencesNestedInput
    occurrenceHistories?: OccurrenceHistoryUpdateManyWithoutOccurrenceNestedInput
    attachments?: AttachmentUpdateManyWithoutOccurrenceNestedInput
  }

  export type OccurrenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: UserUncheckedUpdateManyWithoutOccurrenceNestedInput
    students?: StudentUncheckedUpdateManyWithoutOccurrencesNestedInput
    occurrenceHistories?: OccurrenceHistoryUncheckedUpdateManyWithoutOccurrenceNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutOccurrenceNestedInput
  }

  export type OccurrenceCreateManyInput = {
    id?: string
    teacherId: string
    authorId: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
  }

  export type OccurrenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OccurrenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OccurrenceHistoryCreateInput = {
    id?: string
    createdAt?: Date | string
    changedFields?: OccurrenceHistoryCreatechangedFieldsInput | string[]
    Occurrence: OccurrenceCreateNestedOneWithoutOccurrenceHistoriesInput
    editor: UserCreateNestedOneWithoutOccurrenceHistoryInput
  }

  export type OccurrenceHistoryUncheckedCreateInput = {
    id?: string
    editorId: string
    occurrenceId: string
    createdAt?: Date | string
    changedFields?: OccurrenceHistoryCreatechangedFieldsInput | string[]
  }

  export type OccurrenceHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedFields?: OccurrenceHistoryUpdatechangedFieldsInput | string[]
    Occurrence?: OccurrenceUpdateOneRequiredWithoutOccurrenceHistoriesNestedInput
    editor?: UserUpdateOneRequiredWithoutOccurrenceHistoryNestedInput
  }

  export type OccurrenceHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    editorId?: StringFieldUpdateOperationsInput | string
    occurrenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedFields?: OccurrenceHistoryUpdatechangedFieldsInput | string[]
  }

  export type OccurrenceHistoryCreateManyInput = {
    id?: string
    editorId: string
    occurrenceId: string
    createdAt?: Date | string
    changedFields?: OccurrenceHistoryCreatechangedFieldsInput | string[]
  }

  export type OccurrenceHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedFields?: OccurrenceHistoryUpdatechangedFieldsInput | string[]
  }

  export type OccurrenceHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    editorId?: StringFieldUpdateOperationsInput | string
    occurrenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedFields?: OccurrenceHistoryUpdatechangedFieldsInput | string[]
  }

  export type StudentCreateInput = {
    id?: string
    cpf: string
    responsiblePhone: string
    responsibleEmail: string
    Occurrences?: OccurrenceCreateNestedManyWithoutStudentsInput
    group: GroupCreateNestedOneWithoutStudentsInput
    user: UserCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    userId: string
    groupId: string
    cpf: string
    responsiblePhone: string
    responsibleEmail: string
    Occurrences?: OccurrenceUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    responsiblePhone?: StringFieldUpdateOperationsInput | string
    responsibleEmail?: StringFieldUpdateOperationsInput | string
    Occurrences?: OccurrenceUpdateManyWithoutStudentsNestedInput
    group?: GroupUpdateOneRequiredWithoutStudentsNestedInput
    user?: UserUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    responsiblePhone?: StringFieldUpdateOperationsInput | string
    responsibleEmail?: StringFieldUpdateOperationsInput | string
    Occurrences?: OccurrenceUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    userId: string
    groupId: string
    cpf: string
    responsiblePhone: string
    responsibleEmail: string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    responsiblePhone?: StringFieldUpdateOperationsInput | string
    responsibleEmail?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    responsiblePhone?: StringFieldUpdateOperationsInput | string
    responsibleEmail?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherCreateInput = {
    id?: string
    status: $Enums.TeacherStatus
    user: UserCreateNestedOneWithoutTeacherInput
    Occurrences?: OccurrenceCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: string
    userId: string
    status: $Enums.TeacherStatus
    Occurrences?: OccurrenceUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTeacherStatusFieldUpdateOperationsInput | $Enums.TeacherStatus
    user?: UserUpdateOneRequiredWithoutTeacherNestedInput
    Occurrences?: OccurrenceUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumTeacherStatusFieldUpdateOperationsInput | $Enums.TeacherStatus
    Occurrences?: OccurrenceUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: string
    userId: string
    status: $Enums.TeacherStatus
  }

  export type TeacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTeacherStatusFieldUpdateOperationsInput | $Enums.TeacherStatus
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumTeacherStatusFieldUpdateOperationsInput | $Enums.TeacherStatus
  }

  export type AttachmentCreateInput = {
    id?: string
    title: string
    url: string
    Occurrence: OccurrenceCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateInput = {
    id?: string
    title: string
    url: string
    occurrenceId: string
  }

  export type AttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    Occurrence?: OccurrenceUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    occurrenceId?: StringFieldUpdateOperationsInput | string
  }

  export type AttachmentCreateManyInput = {
    id?: string
    title: string
    url: string
    occurrenceId: string
  }

  export type AttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type AttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    occurrenceId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type TeacherListRelationFilter = {
    every?: TeacherWhereInput
    some?: TeacherWhereInput
    none?: TeacherWhereInput
  }

  export type OccurrenceListRelationFilter = {
    every?: OccurrenceWhereInput
    some?: OccurrenceWhereInput
    none?: OccurrenceWhereInput
  }

  export type OccurrenceHistoryListRelationFilter = {
    every?: OccurrenceHistoryWhereInput
    some?: OccurrenceHistoryWhereInput
    none?: OccurrenceHistoryWhereInput
  }

  export type PedagogueListRelationFilter = {
    every?: PedagogueWhereInput
    some?: PedagogueWhereInput
    none?: PedagogueWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OccurrenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OccurrenceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedagogueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    temporaryPassword?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    temporaryPassword?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    temporaryPassword?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PedagogueCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PedagogueMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PedagogueMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumGroupShiftFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupShift | EnumGroupShiftFieldRefInput<$PrismaModel>
    in?: $Enums.GroupShift[] | ListEnumGroupShiftFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupShift[] | ListEnumGroupShiftFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupShiftFilter<$PrismaModel> | $Enums.GroupShift
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shift?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shift?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shift?: SortOrder
  }

  export type EnumGroupShiftWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupShift | EnumGroupShiftFieldRefInput<$PrismaModel>
    in?: $Enums.GroupShift[] | ListEnumGroupShiftFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupShift[] | ListEnumGroupShiftFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupShiftWithAggregatesFilter<$PrismaModel> | $Enums.GroupShift
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupShiftFilter<$PrismaModel>
    _max?: NestedEnumGroupShiftFilter<$PrismaModel>
  }

  export type EnumOccurrenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OccurrenceType | EnumOccurrenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OccurrenceType[] | ListEnumOccurrenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OccurrenceType[] | ListEnumOccurrenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOccurrenceTypeFilter<$PrismaModel> | $Enums.OccurrenceType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PedagogueScalarRelationFilter = {
    is?: PedagogueWhereInput
    isNot?: PedagogueWhereInput
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type AttachmentListRelationFilter = {
    every?: AttachmentWhereInput
    some?: AttachmentWhereInput
    none?: AttachmentWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OccurrenceCountOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type OccurrenceMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type OccurrenceMinOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumOccurrenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OccurrenceType | EnumOccurrenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OccurrenceType[] | ListEnumOccurrenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OccurrenceType[] | ListEnumOccurrenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOccurrenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.OccurrenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOccurrenceTypeFilter<$PrismaModel>
    _max?: NestedEnumOccurrenceTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type OccurrenceScalarRelationFilter = {
    is?: OccurrenceWhereInput
    isNot?: OccurrenceWhereInput
  }

  export type OccurrenceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    editorId?: SortOrder
    occurrenceId?: SortOrder
    createdAt?: SortOrder
    changedFields?: SortOrder
  }

  export type OccurrenceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    editorId?: SortOrder
    occurrenceId?: SortOrder
    createdAt?: SortOrder
  }

  export type OccurrenceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    editorId?: SortOrder
    occurrenceId?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    cpf?: SortOrder
    responsiblePhone?: SortOrder
    responsibleEmail?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    cpf?: SortOrder
    responsiblePhone?: SortOrder
    responsibleEmail?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    cpf?: SortOrder
    responsiblePhone?: SortOrder
    responsibleEmail?: SortOrder
  }

  export type EnumTeacherStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TeacherStatus | EnumTeacherStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TeacherStatus[] | ListEnumTeacherStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeacherStatus[] | ListEnumTeacherStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTeacherStatusFilter<$PrismaModel> | $Enums.TeacherStatus
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
  }

  export type EnumTeacherStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeacherStatus | EnumTeacherStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TeacherStatus[] | ListEnumTeacherStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeacherStatus[] | ListEnumTeacherStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTeacherStatusWithAggregatesFilter<$PrismaModel> | $Enums.TeacherStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeacherStatusFilter<$PrismaModel>
    _max?: NestedEnumTeacherStatusFilter<$PrismaModel>
  }

  export type AttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    occurrenceId?: SortOrder
  }

  export type AttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    occurrenceId?: SortOrder
  }

  export type AttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    occurrenceId?: SortOrder
  }

  export type StudentCreateNestedManyWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type TeacherCreateNestedManyWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput> | TeacherCreateWithoutUserInput[] | TeacherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput | TeacherCreateOrConnectWithoutUserInput[]
    createMany?: TeacherCreateManyUserInputEnvelope
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
  }

  export type OccurrenceCreateNestedManyWithoutAttendeesInput = {
    create?: XOR<OccurrenceCreateWithoutAttendeesInput, OccurrenceUncheckedCreateWithoutAttendeesInput> | OccurrenceCreateWithoutAttendeesInput[] | OccurrenceUncheckedCreateWithoutAttendeesInput[]
    connectOrCreate?: OccurrenceCreateOrConnectWithoutAttendeesInput | OccurrenceCreateOrConnectWithoutAttendeesInput[]
    connect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
  }

  export type OccurrenceHistoryCreateNestedManyWithoutEditorInput = {
    create?: XOR<OccurrenceHistoryCreateWithoutEditorInput, OccurrenceHistoryUncheckedCreateWithoutEditorInput> | OccurrenceHistoryCreateWithoutEditorInput[] | OccurrenceHistoryUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: OccurrenceHistoryCreateOrConnectWithoutEditorInput | OccurrenceHistoryCreateOrConnectWithoutEditorInput[]
    createMany?: OccurrenceHistoryCreateManyEditorInputEnvelope
    connect?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
  }

  export type PedagogueCreateNestedManyWithoutUserInput = {
    create?: XOR<PedagogueCreateWithoutUserInput, PedagogueUncheckedCreateWithoutUserInput> | PedagogueCreateWithoutUserInput[] | PedagogueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PedagogueCreateOrConnectWithoutUserInput | PedagogueCreateOrConnectWithoutUserInput[]
    createMany?: PedagogueCreateManyUserInputEnvelope
    connect?: PedagogueWhereUniqueInput | PedagogueWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type TeacherUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput> | TeacherCreateWithoutUserInput[] | TeacherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput | TeacherCreateOrConnectWithoutUserInput[]
    createMany?: TeacherCreateManyUserInputEnvelope
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
  }

  export type OccurrenceUncheckedCreateNestedManyWithoutAttendeesInput = {
    create?: XOR<OccurrenceCreateWithoutAttendeesInput, OccurrenceUncheckedCreateWithoutAttendeesInput> | OccurrenceCreateWithoutAttendeesInput[] | OccurrenceUncheckedCreateWithoutAttendeesInput[]
    connectOrCreate?: OccurrenceCreateOrConnectWithoutAttendeesInput | OccurrenceCreateOrConnectWithoutAttendeesInput[]
    connect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
  }

  export type OccurrenceHistoryUncheckedCreateNestedManyWithoutEditorInput = {
    create?: XOR<OccurrenceHistoryCreateWithoutEditorInput, OccurrenceHistoryUncheckedCreateWithoutEditorInput> | OccurrenceHistoryCreateWithoutEditorInput[] | OccurrenceHistoryUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: OccurrenceHistoryCreateOrConnectWithoutEditorInput | OccurrenceHistoryCreateOrConnectWithoutEditorInput[]
    createMany?: OccurrenceHistoryCreateManyEditorInputEnvelope
    connect?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
  }

  export type PedagogueUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PedagogueCreateWithoutUserInput, PedagogueUncheckedCreateWithoutUserInput> | PedagogueCreateWithoutUserInput[] | PedagogueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PedagogueCreateOrConnectWithoutUserInput | PedagogueCreateOrConnectWithoutUserInput[]
    createMany?: PedagogueCreateManyUserInputEnvelope
    connect?: PedagogueWhereUniqueInput | PedagogueWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StudentUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutUserInput | StudentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutUserInput | StudentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutUserInput | StudentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type TeacherUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput> | TeacherCreateWithoutUserInput[] | TeacherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput | TeacherCreateOrConnectWithoutUserInput[]
    upsert?: TeacherUpsertWithWhereUniqueWithoutUserInput | TeacherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeacherCreateManyUserInputEnvelope
    set?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    disconnect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    delete?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    update?: TeacherUpdateWithWhereUniqueWithoutUserInput | TeacherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeacherUpdateManyWithWhereWithoutUserInput | TeacherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
  }

  export type OccurrenceUpdateManyWithoutAttendeesNestedInput = {
    create?: XOR<OccurrenceCreateWithoutAttendeesInput, OccurrenceUncheckedCreateWithoutAttendeesInput> | OccurrenceCreateWithoutAttendeesInput[] | OccurrenceUncheckedCreateWithoutAttendeesInput[]
    connectOrCreate?: OccurrenceCreateOrConnectWithoutAttendeesInput | OccurrenceCreateOrConnectWithoutAttendeesInput[]
    upsert?: OccurrenceUpsertWithWhereUniqueWithoutAttendeesInput | OccurrenceUpsertWithWhereUniqueWithoutAttendeesInput[]
    set?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    disconnect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    delete?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    connect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    update?: OccurrenceUpdateWithWhereUniqueWithoutAttendeesInput | OccurrenceUpdateWithWhereUniqueWithoutAttendeesInput[]
    updateMany?: OccurrenceUpdateManyWithWhereWithoutAttendeesInput | OccurrenceUpdateManyWithWhereWithoutAttendeesInput[]
    deleteMany?: OccurrenceScalarWhereInput | OccurrenceScalarWhereInput[]
  }

  export type OccurrenceHistoryUpdateManyWithoutEditorNestedInput = {
    create?: XOR<OccurrenceHistoryCreateWithoutEditorInput, OccurrenceHistoryUncheckedCreateWithoutEditorInput> | OccurrenceHistoryCreateWithoutEditorInput[] | OccurrenceHistoryUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: OccurrenceHistoryCreateOrConnectWithoutEditorInput | OccurrenceHistoryCreateOrConnectWithoutEditorInput[]
    upsert?: OccurrenceHistoryUpsertWithWhereUniqueWithoutEditorInput | OccurrenceHistoryUpsertWithWhereUniqueWithoutEditorInput[]
    createMany?: OccurrenceHistoryCreateManyEditorInputEnvelope
    set?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
    disconnect?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
    delete?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
    connect?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
    update?: OccurrenceHistoryUpdateWithWhereUniqueWithoutEditorInput | OccurrenceHistoryUpdateWithWhereUniqueWithoutEditorInput[]
    updateMany?: OccurrenceHistoryUpdateManyWithWhereWithoutEditorInput | OccurrenceHistoryUpdateManyWithWhereWithoutEditorInput[]
    deleteMany?: OccurrenceHistoryScalarWhereInput | OccurrenceHistoryScalarWhereInput[]
  }

  export type PedagogueUpdateManyWithoutUserNestedInput = {
    create?: XOR<PedagogueCreateWithoutUserInput, PedagogueUncheckedCreateWithoutUserInput> | PedagogueCreateWithoutUserInput[] | PedagogueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PedagogueCreateOrConnectWithoutUserInput | PedagogueCreateOrConnectWithoutUserInput[]
    upsert?: PedagogueUpsertWithWhereUniqueWithoutUserInput | PedagogueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PedagogueCreateManyUserInputEnvelope
    set?: PedagogueWhereUniqueInput | PedagogueWhereUniqueInput[]
    disconnect?: PedagogueWhereUniqueInput | PedagogueWhereUniqueInput[]
    delete?: PedagogueWhereUniqueInput | PedagogueWhereUniqueInput[]
    connect?: PedagogueWhereUniqueInput | PedagogueWhereUniqueInput[]
    update?: PedagogueUpdateWithWhereUniqueWithoutUserInput | PedagogueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PedagogueUpdateManyWithWhereWithoutUserInput | PedagogueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PedagogueScalarWhereInput | PedagogueScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutUserInput | StudentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutUserInput | StudentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutUserInput | StudentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type TeacherUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput> | TeacherCreateWithoutUserInput[] | TeacherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput | TeacherCreateOrConnectWithoutUserInput[]
    upsert?: TeacherUpsertWithWhereUniqueWithoutUserInput | TeacherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeacherCreateManyUserInputEnvelope
    set?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    disconnect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    delete?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    update?: TeacherUpdateWithWhereUniqueWithoutUserInput | TeacherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeacherUpdateManyWithWhereWithoutUserInput | TeacherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
  }

  export type OccurrenceUncheckedUpdateManyWithoutAttendeesNestedInput = {
    create?: XOR<OccurrenceCreateWithoutAttendeesInput, OccurrenceUncheckedCreateWithoutAttendeesInput> | OccurrenceCreateWithoutAttendeesInput[] | OccurrenceUncheckedCreateWithoutAttendeesInput[]
    connectOrCreate?: OccurrenceCreateOrConnectWithoutAttendeesInput | OccurrenceCreateOrConnectWithoutAttendeesInput[]
    upsert?: OccurrenceUpsertWithWhereUniqueWithoutAttendeesInput | OccurrenceUpsertWithWhereUniqueWithoutAttendeesInput[]
    set?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    disconnect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    delete?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    connect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    update?: OccurrenceUpdateWithWhereUniqueWithoutAttendeesInput | OccurrenceUpdateWithWhereUniqueWithoutAttendeesInput[]
    updateMany?: OccurrenceUpdateManyWithWhereWithoutAttendeesInput | OccurrenceUpdateManyWithWhereWithoutAttendeesInput[]
    deleteMany?: OccurrenceScalarWhereInput | OccurrenceScalarWhereInput[]
  }

  export type OccurrenceHistoryUncheckedUpdateManyWithoutEditorNestedInput = {
    create?: XOR<OccurrenceHistoryCreateWithoutEditorInput, OccurrenceHistoryUncheckedCreateWithoutEditorInput> | OccurrenceHistoryCreateWithoutEditorInput[] | OccurrenceHistoryUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: OccurrenceHistoryCreateOrConnectWithoutEditorInput | OccurrenceHistoryCreateOrConnectWithoutEditorInput[]
    upsert?: OccurrenceHistoryUpsertWithWhereUniqueWithoutEditorInput | OccurrenceHistoryUpsertWithWhereUniqueWithoutEditorInput[]
    createMany?: OccurrenceHistoryCreateManyEditorInputEnvelope
    set?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
    disconnect?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
    delete?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
    connect?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
    update?: OccurrenceHistoryUpdateWithWhereUniqueWithoutEditorInput | OccurrenceHistoryUpdateWithWhereUniqueWithoutEditorInput[]
    updateMany?: OccurrenceHistoryUpdateManyWithWhereWithoutEditorInput | OccurrenceHistoryUpdateManyWithWhereWithoutEditorInput[]
    deleteMany?: OccurrenceHistoryScalarWhereInput | OccurrenceHistoryScalarWhereInput[]
  }

  export type PedagogueUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PedagogueCreateWithoutUserInput, PedagogueUncheckedCreateWithoutUserInput> | PedagogueCreateWithoutUserInput[] | PedagogueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PedagogueCreateOrConnectWithoutUserInput | PedagogueCreateOrConnectWithoutUserInput[]
    upsert?: PedagogueUpsertWithWhereUniqueWithoutUserInput | PedagogueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PedagogueCreateManyUserInputEnvelope
    set?: PedagogueWhereUniqueInput | PedagogueWhereUniqueInput[]
    disconnect?: PedagogueWhereUniqueInput | PedagogueWhereUniqueInput[]
    delete?: PedagogueWhereUniqueInput | PedagogueWhereUniqueInput[]
    connect?: PedagogueWhereUniqueInput | PedagogueWhereUniqueInput[]
    update?: PedagogueUpdateWithWhereUniqueWithoutUserInput | PedagogueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PedagogueUpdateManyWithWhereWithoutUserInput | PedagogueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PedagogueScalarWhereInput | PedagogueScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPedagogueInput = {
    create?: XOR<UserCreateWithoutPedagogueInput, UserUncheckedCreateWithoutPedagogueInput>
    connectOrCreate?: UserCreateOrConnectWithoutPedagogueInput
    connect?: UserWhereUniqueInput
  }

  export type OccurrenceCreateNestedManyWithoutAuthorInput = {
    create?: XOR<OccurrenceCreateWithoutAuthorInput, OccurrenceUncheckedCreateWithoutAuthorInput> | OccurrenceCreateWithoutAuthorInput[] | OccurrenceUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: OccurrenceCreateOrConnectWithoutAuthorInput | OccurrenceCreateOrConnectWithoutAuthorInput[]
    createMany?: OccurrenceCreateManyAuthorInputEnvelope
    connect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
  }

  export type OccurrenceUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<OccurrenceCreateWithoutAuthorInput, OccurrenceUncheckedCreateWithoutAuthorInput> | OccurrenceCreateWithoutAuthorInput[] | OccurrenceUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: OccurrenceCreateOrConnectWithoutAuthorInput | OccurrenceCreateOrConnectWithoutAuthorInput[]
    createMany?: OccurrenceCreateManyAuthorInputEnvelope
    connect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPedagogueNestedInput = {
    create?: XOR<UserCreateWithoutPedagogueInput, UserUncheckedCreateWithoutPedagogueInput>
    connectOrCreate?: UserCreateOrConnectWithoutPedagogueInput
    upsert?: UserUpsertWithoutPedagogueInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPedagogueInput, UserUpdateWithoutPedagogueInput>, UserUncheckedUpdateWithoutPedagogueInput>
  }

  export type OccurrenceUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<OccurrenceCreateWithoutAuthorInput, OccurrenceUncheckedCreateWithoutAuthorInput> | OccurrenceCreateWithoutAuthorInput[] | OccurrenceUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: OccurrenceCreateOrConnectWithoutAuthorInput | OccurrenceCreateOrConnectWithoutAuthorInput[]
    upsert?: OccurrenceUpsertWithWhereUniqueWithoutAuthorInput | OccurrenceUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: OccurrenceCreateManyAuthorInputEnvelope
    set?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    disconnect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    delete?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    connect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    update?: OccurrenceUpdateWithWhereUniqueWithoutAuthorInput | OccurrenceUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: OccurrenceUpdateManyWithWhereWithoutAuthorInput | OccurrenceUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: OccurrenceScalarWhereInput | OccurrenceScalarWhereInput[]
  }

  export type OccurrenceUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<OccurrenceCreateWithoutAuthorInput, OccurrenceUncheckedCreateWithoutAuthorInput> | OccurrenceCreateWithoutAuthorInput[] | OccurrenceUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: OccurrenceCreateOrConnectWithoutAuthorInput | OccurrenceCreateOrConnectWithoutAuthorInput[]
    upsert?: OccurrenceUpsertWithWhereUniqueWithoutAuthorInput | OccurrenceUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: OccurrenceCreateManyAuthorInputEnvelope
    set?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    disconnect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    delete?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    connect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    update?: OccurrenceUpdateWithWhereUniqueWithoutAuthorInput | OccurrenceUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: OccurrenceUpdateManyWithWhereWithoutAuthorInput | OccurrenceUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: OccurrenceScalarWhereInput | OccurrenceScalarWhereInput[]
  }

  export type StudentCreateNestedManyWithoutGroupInput = {
    create?: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput> | StudentCreateWithoutGroupInput[] | StudentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGroupInput | StudentCreateOrConnectWithoutGroupInput[]
    createMany?: StudentCreateManyGroupInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput> | StudentCreateWithoutGroupInput[] | StudentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGroupInput | StudentCreateOrConnectWithoutGroupInput[]
    createMany?: StudentCreateManyGroupInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type EnumGroupShiftFieldUpdateOperationsInput = {
    set?: $Enums.GroupShift
  }

  export type StudentUpdateManyWithoutGroupNestedInput = {
    create?: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput> | StudentCreateWithoutGroupInput[] | StudentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGroupInput | StudentCreateOrConnectWithoutGroupInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutGroupInput | StudentUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: StudentCreateManyGroupInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutGroupInput | StudentUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutGroupInput | StudentUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput> | StudentCreateWithoutGroupInput[] | StudentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGroupInput | StudentCreateOrConnectWithoutGroupInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutGroupInput | StudentUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: StudentCreateManyGroupInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutGroupInput | StudentUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutGroupInput | StudentUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type PedagogueCreateNestedOneWithoutOccurrencesInput = {
    create?: XOR<PedagogueCreateWithoutOccurrencesInput, PedagogueUncheckedCreateWithoutOccurrencesInput>
    connectOrCreate?: PedagogueCreateOrConnectWithoutOccurrencesInput
    connect?: PedagogueWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutOccurrencesInput = {
    create?: XOR<TeacherCreateWithoutOccurrencesInput, TeacherUncheckedCreateWithoutOccurrencesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutOccurrencesInput
    connect?: TeacherWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutOccurrenceInput = {
    create?: XOR<UserCreateWithoutOccurrenceInput, UserUncheckedCreateWithoutOccurrenceInput> | UserCreateWithoutOccurrenceInput[] | UserUncheckedCreateWithoutOccurrenceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOccurrenceInput | UserCreateOrConnectWithoutOccurrenceInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutOccurrencesInput = {
    create?: XOR<StudentCreateWithoutOccurrencesInput, StudentUncheckedCreateWithoutOccurrencesInput> | StudentCreateWithoutOccurrencesInput[] | StudentUncheckedCreateWithoutOccurrencesInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutOccurrencesInput | StudentCreateOrConnectWithoutOccurrencesInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type OccurrenceHistoryCreateNestedManyWithoutOccurrenceInput = {
    create?: XOR<OccurrenceHistoryCreateWithoutOccurrenceInput, OccurrenceHistoryUncheckedCreateWithoutOccurrenceInput> | OccurrenceHistoryCreateWithoutOccurrenceInput[] | OccurrenceHistoryUncheckedCreateWithoutOccurrenceInput[]
    connectOrCreate?: OccurrenceHistoryCreateOrConnectWithoutOccurrenceInput | OccurrenceHistoryCreateOrConnectWithoutOccurrenceInput[]
    createMany?: OccurrenceHistoryCreateManyOccurrenceInputEnvelope
    connect?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
  }

  export type AttachmentCreateNestedManyWithoutOccurrenceInput = {
    create?: XOR<AttachmentCreateWithoutOccurrenceInput, AttachmentUncheckedCreateWithoutOccurrenceInput> | AttachmentCreateWithoutOccurrenceInput[] | AttachmentUncheckedCreateWithoutOccurrenceInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutOccurrenceInput | AttachmentCreateOrConnectWithoutOccurrenceInput[]
    createMany?: AttachmentCreateManyOccurrenceInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOccurrenceInput = {
    create?: XOR<UserCreateWithoutOccurrenceInput, UserUncheckedCreateWithoutOccurrenceInput> | UserCreateWithoutOccurrenceInput[] | UserUncheckedCreateWithoutOccurrenceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOccurrenceInput | UserCreateOrConnectWithoutOccurrenceInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutOccurrencesInput = {
    create?: XOR<StudentCreateWithoutOccurrencesInput, StudentUncheckedCreateWithoutOccurrencesInput> | StudentCreateWithoutOccurrencesInput[] | StudentUncheckedCreateWithoutOccurrencesInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutOccurrencesInput | StudentCreateOrConnectWithoutOccurrencesInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type OccurrenceHistoryUncheckedCreateNestedManyWithoutOccurrenceInput = {
    create?: XOR<OccurrenceHistoryCreateWithoutOccurrenceInput, OccurrenceHistoryUncheckedCreateWithoutOccurrenceInput> | OccurrenceHistoryCreateWithoutOccurrenceInput[] | OccurrenceHistoryUncheckedCreateWithoutOccurrenceInput[]
    connectOrCreate?: OccurrenceHistoryCreateOrConnectWithoutOccurrenceInput | OccurrenceHistoryCreateOrConnectWithoutOccurrenceInput[]
    createMany?: OccurrenceHistoryCreateManyOccurrenceInputEnvelope
    connect?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutOccurrenceInput = {
    create?: XOR<AttachmentCreateWithoutOccurrenceInput, AttachmentUncheckedCreateWithoutOccurrenceInput> | AttachmentCreateWithoutOccurrenceInput[] | AttachmentUncheckedCreateWithoutOccurrenceInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutOccurrenceInput | AttachmentCreateOrConnectWithoutOccurrenceInput[]
    createMany?: AttachmentCreateManyOccurrenceInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type EnumOccurrenceTypeFieldUpdateOperationsInput = {
    set?: $Enums.OccurrenceType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PedagogueUpdateOneRequiredWithoutOccurrencesNestedInput = {
    create?: XOR<PedagogueCreateWithoutOccurrencesInput, PedagogueUncheckedCreateWithoutOccurrencesInput>
    connectOrCreate?: PedagogueCreateOrConnectWithoutOccurrencesInput
    upsert?: PedagogueUpsertWithoutOccurrencesInput
    connect?: PedagogueWhereUniqueInput
    update?: XOR<XOR<PedagogueUpdateToOneWithWhereWithoutOccurrencesInput, PedagogueUpdateWithoutOccurrencesInput>, PedagogueUncheckedUpdateWithoutOccurrencesInput>
  }

  export type TeacherUpdateOneRequiredWithoutOccurrencesNestedInput = {
    create?: XOR<TeacherCreateWithoutOccurrencesInput, TeacherUncheckedCreateWithoutOccurrencesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutOccurrencesInput
    upsert?: TeacherUpsertWithoutOccurrencesInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutOccurrencesInput, TeacherUpdateWithoutOccurrencesInput>, TeacherUncheckedUpdateWithoutOccurrencesInput>
  }

  export type UserUpdateManyWithoutOccurrenceNestedInput = {
    create?: XOR<UserCreateWithoutOccurrenceInput, UserUncheckedCreateWithoutOccurrenceInput> | UserCreateWithoutOccurrenceInput[] | UserUncheckedCreateWithoutOccurrenceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOccurrenceInput | UserCreateOrConnectWithoutOccurrenceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOccurrenceInput | UserUpsertWithWhereUniqueWithoutOccurrenceInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOccurrenceInput | UserUpdateWithWhereUniqueWithoutOccurrenceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOccurrenceInput | UserUpdateManyWithWhereWithoutOccurrenceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutOccurrencesNestedInput = {
    create?: XOR<StudentCreateWithoutOccurrencesInput, StudentUncheckedCreateWithoutOccurrencesInput> | StudentCreateWithoutOccurrencesInput[] | StudentUncheckedCreateWithoutOccurrencesInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutOccurrencesInput | StudentCreateOrConnectWithoutOccurrencesInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutOccurrencesInput | StudentUpsertWithWhereUniqueWithoutOccurrencesInput[]
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutOccurrencesInput | StudentUpdateWithWhereUniqueWithoutOccurrencesInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutOccurrencesInput | StudentUpdateManyWithWhereWithoutOccurrencesInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type OccurrenceHistoryUpdateManyWithoutOccurrenceNestedInput = {
    create?: XOR<OccurrenceHistoryCreateWithoutOccurrenceInput, OccurrenceHistoryUncheckedCreateWithoutOccurrenceInput> | OccurrenceHistoryCreateWithoutOccurrenceInput[] | OccurrenceHistoryUncheckedCreateWithoutOccurrenceInput[]
    connectOrCreate?: OccurrenceHistoryCreateOrConnectWithoutOccurrenceInput | OccurrenceHistoryCreateOrConnectWithoutOccurrenceInput[]
    upsert?: OccurrenceHistoryUpsertWithWhereUniqueWithoutOccurrenceInput | OccurrenceHistoryUpsertWithWhereUniqueWithoutOccurrenceInput[]
    createMany?: OccurrenceHistoryCreateManyOccurrenceInputEnvelope
    set?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
    disconnect?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
    delete?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
    connect?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
    update?: OccurrenceHistoryUpdateWithWhereUniqueWithoutOccurrenceInput | OccurrenceHistoryUpdateWithWhereUniqueWithoutOccurrenceInput[]
    updateMany?: OccurrenceHistoryUpdateManyWithWhereWithoutOccurrenceInput | OccurrenceHistoryUpdateManyWithWhereWithoutOccurrenceInput[]
    deleteMany?: OccurrenceHistoryScalarWhereInput | OccurrenceHistoryScalarWhereInput[]
  }

  export type AttachmentUpdateManyWithoutOccurrenceNestedInput = {
    create?: XOR<AttachmentCreateWithoutOccurrenceInput, AttachmentUncheckedCreateWithoutOccurrenceInput> | AttachmentCreateWithoutOccurrenceInput[] | AttachmentUncheckedCreateWithoutOccurrenceInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutOccurrenceInput | AttachmentCreateOrConnectWithoutOccurrenceInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutOccurrenceInput | AttachmentUpsertWithWhereUniqueWithoutOccurrenceInput[]
    createMany?: AttachmentCreateManyOccurrenceInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutOccurrenceInput | AttachmentUpdateWithWhereUniqueWithoutOccurrenceInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutOccurrenceInput | AttachmentUpdateManyWithWhereWithoutOccurrenceInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOccurrenceNestedInput = {
    create?: XOR<UserCreateWithoutOccurrenceInput, UserUncheckedCreateWithoutOccurrenceInput> | UserCreateWithoutOccurrenceInput[] | UserUncheckedCreateWithoutOccurrenceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOccurrenceInput | UserCreateOrConnectWithoutOccurrenceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOccurrenceInput | UserUpsertWithWhereUniqueWithoutOccurrenceInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOccurrenceInput | UserUpdateWithWhereUniqueWithoutOccurrenceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOccurrenceInput | UserUpdateManyWithWhereWithoutOccurrenceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutOccurrencesNestedInput = {
    create?: XOR<StudentCreateWithoutOccurrencesInput, StudentUncheckedCreateWithoutOccurrencesInput> | StudentCreateWithoutOccurrencesInput[] | StudentUncheckedCreateWithoutOccurrencesInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutOccurrencesInput | StudentCreateOrConnectWithoutOccurrencesInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutOccurrencesInput | StudentUpsertWithWhereUniqueWithoutOccurrencesInput[]
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutOccurrencesInput | StudentUpdateWithWhereUniqueWithoutOccurrencesInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutOccurrencesInput | StudentUpdateManyWithWhereWithoutOccurrencesInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type OccurrenceHistoryUncheckedUpdateManyWithoutOccurrenceNestedInput = {
    create?: XOR<OccurrenceHistoryCreateWithoutOccurrenceInput, OccurrenceHistoryUncheckedCreateWithoutOccurrenceInput> | OccurrenceHistoryCreateWithoutOccurrenceInput[] | OccurrenceHistoryUncheckedCreateWithoutOccurrenceInput[]
    connectOrCreate?: OccurrenceHistoryCreateOrConnectWithoutOccurrenceInput | OccurrenceHistoryCreateOrConnectWithoutOccurrenceInput[]
    upsert?: OccurrenceHistoryUpsertWithWhereUniqueWithoutOccurrenceInput | OccurrenceHistoryUpsertWithWhereUniqueWithoutOccurrenceInput[]
    createMany?: OccurrenceHistoryCreateManyOccurrenceInputEnvelope
    set?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
    disconnect?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
    delete?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
    connect?: OccurrenceHistoryWhereUniqueInput | OccurrenceHistoryWhereUniqueInput[]
    update?: OccurrenceHistoryUpdateWithWhereUniqueWithoutOccurrenceInput | OccurrenceHistoryUpdateWithWhereUniqueWithoutOccurrenceInput[]
    updateMany?: OccurrenceHistoryUpdateManyWithWhereWithoutOccurrenceInput | OccurrenceHistoryUpdateManyWithWhereWithoutOccurrenceInput[]
    deleteMany?: OccurrenceHistoryScalarWhereInput | OccurrenceHistoryScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutOccurrenceNestedInput = {
    create?: XOR<AttachmentCreateWithoutOccurrenceInput, AttachmentUncheckedCreateWithoutOccurrenceInput> | AttachmentCreateWithoutOccurrenceInput[] | AttachmentUncheckedCreateWithoutOccurrenceInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutOccurrenceInput | AttachmentCreateOrConnectWithoutOccurrenceInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutOccurrenceInput | AttachmentUpsertWithWhereUniqueWithoutOccurrenceInput[]
    createMany?: AttachmentCreateManyOccurrenceInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutOccurrenceInput | AttachmentUpdateWithWhereUniqueWithoutOccurrenceInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutOccurrenceInput | AttachmentUpdateManyWithWhereWithoutOccurrenceInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type OccurrenceHistoryCreatechangedFieldsInput = {
    set: string[]
  }

  export type OccurrenceCreateNestedOneWithoutOccurrenceHistoriesInput = {
    create?: XOR<OccurrenceCreateWithoutOccurrenceHistoriesInput, OccurrenceUncheckedCreateWithoutOccurrenceHistoriesInput>
    connectOrCreate?: OccurrenceCreateOrConnectWithoutOccurrenceHistoriesInput
    connect?: OccurrenceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOccurrenceHistoryInput = {
    create?: XOR<UserCreateWithoutOccurrenceHistoryInput, UserUncheckedCreateWithoutOccurrenceHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutOccurrenceHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type OccurrenceHistoryUpdatechangedFieldsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type OccurrenceUpdateOneRequiredWithoutOccurrenceHistoriesNestedInput = {
    create?: XOR<OccurrenceCreateWithoutOccurrenceHistoriesInput, OccurrenceUncheckedCreateWithoutOccurrenceHistoriesInput>
    connectOrCreate?: OccurrenceCreateOrConnectWithoutOccurrenceHistoriesInput
    upsert?: OccurrenceUpsertWithoutOccurrenceHistoriesInput
    connect?: OccurrenceWhereUniqueInput
    update?: XOR<XOR<OccurrenceUpdateToOneWithWhereWithoutOccurrenceHistoriesInput, OccurrenceUpdateWithoutOccurrenceHistoriesInput>, OccurrenceUncheckedUpdateWithoutOccurrenceHistoriesInput>
  }

  export type UserUpdateOneRequiredWithoutOccurrenceHistoryNestedInput = {
    create?: XOR<UserCreateWithoutOccurrenceHistoryInput, UserUncheckedCreateWithoutOccurrenceHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutOccurrenceHistoryInput
    upsert?: UserUpsertWithoutOccurrenceHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOccurrenceHistoryInput, UserUpdateWithoutOccurrenceHistoryInput>, UserUncheckedUpdateWithoutOccurrenceHistoryInput>
  }

  export type OccurrenceCreateNestedManyWithoutStudentsInput = {
    create?: XOR<OccurrenceCreateWithoutStudentsInput, OccurrenceUncheckedCreateWithoutStudentsInput> | OccurrenceCreateWithoutStudentsInput[] | OccurrenceUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: OccurrenceCreateOrConnectWithoutStudentsInput | OccurrenceCreateOrConnectWithoutStudentsInput[]
    connect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
  }

  export type GroupCreateNestedOneWithoutStudentsInput = {
    create?: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutStudentsInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudentsInput = {
    create?: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentsInput
    connect?: UserWhereUniqueInput
  }

  export type OccurrenceUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<OccurrenceCreateWithoutStudentsInput, OccurrenceUncheckedCreateWithoutStudentsInput> | OccurrenceCreateWithoutStudentsInput[] | OccurrenceUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: OccurrenceCreateOrConnectWithoutStudentsInput | OccurrenceCreateOrConnectWithoutStudentsInput[]
    connect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
  }

  export type OccurrenceUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<OccurrenceCreateWithoutStudentsInput, OccurrenceUncheckedCreateWithoutStudentsInput> | OccurrenceCreateWithoutStudentsInput[] | OccurrenceUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: OccurrenceCreateOrConnectWithoutStudentsInput | OccurrenceCreateOrConnectWithoutStudentsInput[]
    upsert?: OccurrenceUpsertWithWhereUniqueWithoutStudentsInput | OccurrenceUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    disconnect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    delete?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    connect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    update?: OccurrenceUpdateWithWhereUniqueWithoutStudentsInput | OccurrenceUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: OccurrenceUpdateManyWithWhereWithoutStudentsInput | OccurrenceUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: OccurrenceScalarWhereInput | OccurrenceScalarWhereInput[]
  }

  export type GroupUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutStudentsInput
    upsert?: GroupUpsertWithoutStudentsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutStudentsInput, GroupUpdateWithoutStudentsInput>, GroupUncheckedUpdateWithoutStudentsInput>
  }

  export type UserUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentsInput
    upsert?: UserUpsertWithoutStudentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentsInput, UserUpdateWithoutStudentsInput>, UserUncheckedUpdateWithoutStudentsInput>
  }

  export type OccurrenceUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<OccurrenceCreateWithoutStudentsInput, OccurrenceUncheckedCreateWithoutStudentsInput> | OccurrenceCreateWithoutStudentsInput[] | OccurrenceUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: OccurrenceCreateOrConnectWithoutStudentsInput | OccurrenceCreateOrConnectWithoutStudentsInput[]
    upsert?: OccurrenceUpsertWithWhereUniqueWithoutStudentsInput | OccurrenceUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    disconnect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    delete?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    connect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    update?: OccurrenceUpdateWithWhereUniqueWithoutStudentsInput | OccurrenceUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: OccurrenceUpdateManyWithWhereWithoutStudentsInput | OccurrenceUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: OccurrenceScalarWhereInput | OccurrenceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeacherInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    connect?: UserWhereUniqueInput
  }

  export type OccurrenceCreateNestedManyWithoutTeacherInput = {
    create?: XOR<OccurrenceCreateWithoutTeacherInput, OccurrenceUncheckedCreateWithoutTeacherInput> | OccurrenceCreateWithoutTeacherInput[] | OccurrenceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: OccurrenceCreateOrConnectWithoutTeacherInput | OccurrenceCreateOrConnectWithoutTeacherInput[]
    createMany?: OccurrenceCreateManyTeacherInputEnvelope
    connect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
  }

  export type OccurrenceUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<OccurrenceCreateWithoutTeacherInput, OccurrenceUncheckedCreateWithoutTeacherInput> | OccurrenceCreateWithoutTeacherInput[] | OccurrenceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: OccurrenceCreateOrConnectWithoutTeacherInput | OccurrenceCreateOrConnectWithoutTeacherInput[]
    createMany?: OccurrenceCreateManyTeacherInputEnvelope
    connect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
  }

  export type EnumTeacherStatusFieldUpdateOperationsInput = {
    set?: $Enums.TeacherStatus
  }

  export type UserUpdateOneRequiredWithoutTeacherNestedInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    upsert?: UserUpsertWithoutTeacherInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherInput, UserUpdateWithoutTeacherInput>, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type OccurrenceUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<OccurrenceCreateWithoutTeacherInput, OccurrenceUncheckedCreateWithoutTeacherInput> | OccurrenceCreateWithoutTeacherInput[] | OccurrenceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: OccurrenceCreateOrConnectWithoutTeacherInput | OccurrenceCreateOrConnectWithoutTeacherInput[]
    upsert?: OccurrenceUpsertWithWhereUniqueWithoutTeacherInput | OccurrenceUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: OccurrenceCreateManyTeacherInputEnvelope
    set?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    disconnect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    delete?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    connect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    update?: OccurrenceUpdateWithWhereUniqueWithoutTeacherInput | OccurrenceUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: OccurrenceUpdateManyWithWhereWithoutTeacherInput | OccurrenceUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: OccurrenceScalarWhereInput | OccurrenceScalarWhereInput[]
  }

  export type OccurrenceUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<OccurrenceCreateWithoutTeacherInput, OccurrenceUncheckedCreateWithoutTeacherInput> | OccurrenceCreateWithoutTeacherInput[] | OccurrenceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: OccurrenceCreateOrConnectWithoutTeacherInput | OccurrenceCreateOrConnectWithoutTeacherInput[]
    upsert?: OccurrenceUpsertWithWhereUniqueWithoutTeacherInput | OccurrenceUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: OccurrenceCreateManyTeacherInputEnvelope
    set?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    disconnect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    delete?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    connect?: OccurrenceWhereUniqueInput | OccurrenceWhereUniqueInput[]
    update?: OccurrenceUpdateWithWhereUniqueWithoutTeacherInput | OccurrenceUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: OccurrenceUpdateManyWithWhereWithoutTeacherInput | OccurrenceUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: OccurrenceScalarWhereInput | OccurrenceScalarWhereInput[]
  }

  export type OccurrenceCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<OccurrenceCreateWithoutAttachmentsInput, OccurrenceUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: OccurrenceCreateOrConnectWithoutAttachmentsInput
    connect?: OccurrenceWhereUniqueInput
  }

  export type OccurrenceUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<OccurrenceCreateWithoutAttachmentsInput, OccurrenceUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: OccurrenceCreateOrConnectWithoutAttachmentsInput
    upsert?: OccurrenceUpsertWithoutAttachmentsInput
    connect?: OccurrenceWhereUniqueInput
    update?: XOR<XOR<OccurrenceUpdateToOneWithWhereWithoutAttachmentsInput, OccurrenceUpdateWithoutAttachmentsInput>, OccurrenceUncheckedUpdateWithoutAttachmentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGroupShiftFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupShift | EnumGroupShiftFieldRefInput<$PrismaModel>
    in?: $Enums.GroupShift[] | ListEnumGroupShiftFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupShift[] | ListEnumGroupShiftFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupShiftFilter<$PrismaModel> | $Enums.GroupShift
  }

  export type NestedEnumGroupShiftWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupShift | EnumGroupShiftFieldRefInput<$PrismaModel>
    in?: $Enums.GroupShift[] | ListEnumGroupShiftFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupShift[] | ListEnumGroupShiftFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupShiftWithAggregatesFilter<$PrismaModel> | $Enums.GroupShift
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupShiftFilter<$PrismaModel>
    _max?: NestedEnumGroupShiftFilter<$PrismaModel>
  }

  export type NestedEnumOccurrenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OccurrenceType | EnumOccurrenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OccurrenceType[] | ListEnumOccurrenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OccurrenceType[] | ListEnumOccurrenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOccurrenceTypeFilter<$PrismaModel> | $Enums.OccurrenceType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumOccurrenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OccurrenceType | EnumOccurrenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OccurrenceType[] | ListEnumOccurrenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OccurrenceType[] | ListEnumOccurrenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOccurrenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.OccurrenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOccurrenceTypeFilter<$PrismaModel>
    _max?: NestedEnumOccurrenceTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTeacherStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TeacherStatus | EnumTeacherStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TeacherStatus[] | ListEnumTeacherStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeacherStatus[] | ListEnumTeacherStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTeacherStatusFilter<$PrismaModel> | $Enums.TeacherStatus
  }

  export type NestedEnumTeacherStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeacherStatus | EnumTeacherStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TeacherStatus[] | ListEnumTeacherStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeacherStatus[] | ListEnumTeacherStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTeacherStatusWithAggregatesFilter<$PrismaModel> | $Enums.TeacherStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeacherStatusFilter<$PrismaModel>
    _max?: NestedEnumTeacherStatusFilter<$PrismaModel>
  }

  export type StudentCreateWithoutUserInput = {
    id?: string
    cpf: string
    responsiblePhone: string
    responsibleEmail: string
    Occurrences?: OccurrenceCreateNestedManyWithoutStudentsInput
    group: GroupCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
    cpf: string
    responsiblePhone: string
    responsibleEmail: string
    Occurrences?: OccurrenceUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type StudentCreateManyUserInputEnvelope = {
    data: StudentCreateManyUserInput | StudentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeacherCreateWithoutUserInput = {
    id?: string
    status: $Enums.TeacherStatus
    Occurrences?: OccurrenceCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutUserInput = {
    id?: string
    status: $Enums.TeacherStatus
    Occurrences?: OccurrenceUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutUserInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
  }

  export type TeacherCreateManyUserInputEnvelope = {
    data: TeacherCreateManyUserInput | TeacherCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OccurrenceCreateWithoutAttendeesInput = {
    id?: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
    author: PedagogueCreateNestedOneWithoutOccurrencesInput
    teacher: TeacherCreateNestedOneWithoutOccurrencesInput
    students?: StudentCreateNestedManyWithoutOccurrencesInput
    occurrenceHistories?: OccurrenceHistoryCreateNestedManyWithoutOccurrenceInput
    attachments?: AttachmentCreateNestedManyWithoutOccurrenceInput
  }

  export type OccurrenceUncheckedCreateWithoutAttendeesInput = {
    id?: string
    teacherId: string
    authorId: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutOccurrencesInput
    occurrenceHistories?: OccurrenceHistoryUncheckedCreateNestedManyWithoutOccurrenceInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutOccurrenceInput
  }

  export type OccurrenceCreateOrConnectWithoutAttendeesInput = {
    where: OccurrenceWhereUniqueInput
    create: XOR<OccurrenceCreateWithoutAttendeesInput, OccurrenceUncheckedCreateWithoutAttendeesInput>
  }

  export type OccurrenceHistoryCreateWithoutEditorInput = {
    id?: string
    createdAt?: Date | string
    changedFields?: OccurrenceHistoryCreatechangedFieldsInput | string[]
    Occurrence: OccurrenceCreateNestedOneWithoutOccurrenceHistoriesInput
  }

  export type OccurrenceHistoryUncheckedCreateWithoutEditorInput = {
    id?: string
    occurrenceId: string
    createdAt?: Date | string
    changedFields?: OccurrenceHistoryCreatechangedFieldsInput | string[]
  }

  export type OccurrenceHistoryCreateOrConnectWithoutEditorInput = {
    where: OccurrenceHistoryWhereUniqueInput
    create: XOR<OccurrenceHistoryCreateWithoutEditorInput, OccurrenceHistoryUncheckedCreateWithoutEditorInput>
  }

  export type OccurrenceHistoryCreateManyEditorInputEnvelope = {
    data: OccurrenceHistoryCreateManyEditorInput | OccurrenceHistoryCreateManyEditorInput[]
    skipDuplicates?: boolean
  }

  export type PedagogueCreateWithoutUserInput = {
    id?: string
    occurrences?: OccurrenceCreateNestedManyWithoutAuthorInput
  }

  export type PedagogueUncheckedCreateWithoutUserInput = {
    id?: string
    occurrences?: OccurrenceUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type PedagogueCreateOrConnectWithoutUserInput = {
    where: PedagogueWhereUniqueInput
    create: XOR<PedagogueCreateWithoutUserInput, PedagogueUncheckedCreateWithoutUserInput>
  }

  export type PedagogueCreateManyUserInputEnvelope = {
    data: PedagogueCreateManyUserInput | PedagogueCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithWhereUniqueWithoutUserInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutUserInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateManyWithWhereWithoutUserInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutUserInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    userId?: StringFilter<"Student"> | string
    groupId?: StringFilter<"Student"> | string
    cpf?: StringFilter<"Student"> | string
    responsiblePhone?: StringFilter<"Student"> | string
    responsibleEmail?: StringFilter<"Student"> | string
  }

  export type TeacherUpsertWithWhereUniqueWithoutUserInput = {
    where: TeacherWhereUniqueInput
    update: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
  }

  export type TeacherUpdateWithWhereUniqueWithoutUserInput = {
    where: TeacherWhereUniqueInput
    data: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUpdateManyWithWhereWithoutUserInput = {
    where: TeacherScalarWhereInput
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyWithoutUserInput>
  }

  export type TeacherScalarWhereInput = {
    AND?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
    OR?: TeacherScalarWhereInput[]
    NOT?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
    id?: StringFilter<"Teacher"> | string
    userId?: StringFilter<"Teacher"> | string
    status?: EnumTeacherStatusFilter<"Teacher"> | $Enums.TeacherStatus
  }

  export type OccurrenceUpsertWithWhereUniqueWithoutAttendeesInput = {
    where: OccurrenceWhereUniqueInput
    update: XOR<OccurrenceUpdateWithoutAttendeesInput, OccurrenceUncheckedUpdateWithoutAttendeesInput>
    create: XOR<OccurrenceCreateWithoutAttendeesInput, OccurrenceUncheckedCreateWithoutAttendeesInput>
  }

  export type OccurrenceUpdateWithWhereUniqueWithoutAttendeesInput = {
    where: OccurrenceWhereUniqueInput
    data: XOR<OccurrenceUpdateWithoutAttendeesInput, OccurrenceUncheckedUpdateWithoutAttendeesInput>
  }

  export type OccurrenceUpdateManyWithWhereWithoutAttendeesInput = {
    where: OccurrenceScalarWhereInput
    data: XOR<OccurrenceUpdateManyMutationInput, OccurrenceUncheckedUpdateManyWithoutAttendeesInput>
  }

  export type OccurrenceScalarWhereInput = {
    AND?: OccurrenceScalarWhereInput | OccurrenceScalarWhereInput[]
    OR?: OccurrenceScalarWhereInput[]
    NOT?: OccurrenceScalarWhereInput | OccurrenceScalarWhereInput[]
    id?: StringFilter<"Occurrence"> | string
    teacherId?: StringFilter<"Occurrence"> | string
    authorId?: StringFilter<"Occurrence"> | string
    title?: StringFilter<"Occurrence"> | string
    description?: StringFilter<"Occurrence"> | string
    type?: EnumOccurrenceTypeFilter<"Occurrence"> | $Enums.OccurrenceType
    createdAt?: DateTimeFilter<"Occurrence"> | Date | string
  }

  export type OccurrenceHistoryUpsertWithWhereUniqueWithoutEditorInput = {
    where: OccurrenceHistoryWhereUniqueInput
    update: XOR<OccurrenceHistoryUpdateWithoutEditorInput, OccurrenceHistoryUncheckedUpdateWithoutEditorInput>
    create: XOR<OccurrenceHistoryCreateWithoutEditorInput, OccurrenceHistoryUncheckedCreateWithoutEditorInput>
  }

  export type OccurrenceHistoryUpdateWithWhereUniqueWithoutEditorInput = {
    where: OccurrenceHistoryWhereUniqueInput
    data: XOR<OccurrenceHistoryUpdateWithoutEditorInput, OccurrenceHistoryUncheckedUpdateWithoutEditorInput>
  }

  export type OccurrenceHistoryUpdateManyWithWhereWithoutEditorInput = {
    where: OccurrenceHistoryScalarWhereInput
    data: XOR<OccurrenceHistoryUpdateManyMutationInput, OccurrenceHistoryUncheckedUpdateManyWithoutEditorInput>
  }

  export type OccurrenceHistoryScalarWhereInput = {
    AND?: OccurrenceHistoryScalarWhereInput | OccurrenceHistoryScalarWhereInput[]
    OR?: OccurrenceHistoryScalarWhereInput[]
    NOT?: OccurrenceHistoryScalarWhereInput | OccurrenceHistoryScalarWhereInput[]
    id?: StringFilter<"OccurrenceHistory"> | string
    editorId?: StringFilter<"OccurrenceHistory"> | string
    occurrenceId?: StringFilter<"OccurrenceHistory"> | string
    createdAt?: DateTimeFilter<"OccurrenceHistory"> | Date | string
    changedFields?: StringNullableListFilter<"OccurrenceHistory">
  }

  export type PedagogueUpsertWithWhereUniqueWithoutUserInput = {
    where: PedagogueWhereUniqueInput
    update: XOR<PedagogueUpdateWithoutUserInput, PedagogueUncheckedUpdateWithoutUserInput>
    create: XOR<PedagogueCreateWithoutUserInput, PedagogueUncheckedCreateWithoutUserInput>
  }

  export type PedagogueUpdateWithWhereUniqueWithoutUserInput = {
    where: PedagogueWhereUniqueInput
    data: XOR<PedagogueUpdateWithoutUserInput, PedagogueUncheckedUpdateWithoutUserInput>
  }

  export type PedagogueUpdateManyWithWhereWithoutUserInput = {
    where: PedagogueScalarWhereInput
    data: XOR<PedagogueUpdateManyMutationInput, PedagogueUncheckedUpdateManyWithoutUserInput>
  }

  export type PedagogueScalarWhereInput = {
    AND?: PedagogueScalarWhereInput | PedagogueScalarWhereInput[]
    OR?: PedagogueScalarWhereInput[]
    NOT?: PedagogueScalarWhereInput | PedagogueScalarWhereInput[]
    id?: StringFilter<"Pedagogue"> | string
    userId?: StringFilter<"Pedagogue"> | string
  }

  export type UserCreateWithoutPedagogueInput = {
    id?: string
    name: string
    email: string
    password: string
    temporaryPassword?: string | null
    students?: StudentCreateNestedManyWithoutUserInput
    teacher?: TeacherCreateNestedManyWithoutUserInput
    Occurrence?: OccurrenceCreateNestedManyWithoutAttendeesInput
    OccurrenceHistory?: OccurrenceHistoryCreateNestedManyWithoutEditorInput
  }

  export type UserUncheckedCreateWithoutPedagogueInput = {
    id?: string
    name: string
    email: string
    password: string
    temporaryPassword?: string | null
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    teacher?: TeacherUncheckedCreateNestedManyWithoutUserInput
    Occurrence?: OccurrenceUncheckedCreateNestedManyWithoutAttendeesInput
    OccurrenceHistory?: OccurrenceHistoryUncheckedCreateNestedManyWithoutEditorInput
  }

  export type UserCreateOrConnectWithoutPedagogueInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPedagogueInput, UserUncheckedCreateWithoutPedagogueInput>
  }

  export type OccurrenceCreateWithoutAuthorInput = {
    id?: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutOccurrencesInput
    attendees?: UserCreateNestedManyWithoutOccurrenceInput
    students?: StudentCreateNestedManyWithoutOccurrencesInput
    occurrenceHistories?: OccurrenceHistoryCreateNestedManyWithoutOccurrenceInput
    attachments?: AttachmentCreateNestedManyWithoutOccurrenceInput
  }

  export type OccurrenceUncheckedCreateWithoutAuthorInput = {
    id?: string
    teacherId: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
    attendees?: UserUncheckedCreateNestedManyWithoutOccurrenceInput
    students?: StudentUncheckedCreateNestedManyWithoutOccurrencesInput
    occurrenceHistories?: OccurrenceHistoryUncheckedCreateNestedManyWithoutOccurrenceInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutOccurrenceInput
  }

  export type OccurrenceCreateOrConnectWithoutAuthorInput = {
    where: OccurrenceWhereUniqueInput
    create: XOR<OccurrenceCreateWithoutAuthorInput, OccurrenceUncheckedCreateWithoutAuthorInput>
  }

  export type OccurrenceCreateManyAuthorInputEnvelope = {
    data: OccurrenceCreateManyAuthorInput | OccurrenceCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPedagogueInput = {
    update: XOR<UserUpdateWithoutPedagogueInput, UserUncheckedUpdateWithoutPedagogueInput>
    create: XOR<UserCreateWithoutPedagogueInput, UserUncheckedCreateWithoutPedagogueInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPedagogueInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPedagogueInput, UserUncheckedUpdateWithoutPedagogueInput>
  }

  export type UserUpdateWithoutPedagogueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    temporaryPassword?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentUpdateManyWithoutUserNestedInput
    teacher?: TeacherUpdateManyWithoutUserNestedInput
    Occurrence?: OccurrenceUpdateManyWithoutAttendeesNestedInput
    OccurrenceHistory?: OccurrenceHistoryUpdateManyWithoutEditorNestedInput
  }

  export type UserUncheckedUpdateWithoutPedagogueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    temporaryPassword?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    teacher?: TeacherUncheckedUpdateManyWithoutUserNestedInput
    Occurrence?: OccurrenceUncheckedUpdateManyWithoutAttendeesNestedInput
    OccurrenceHistory?: OccurrenceHistoryUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type OccurrenceUpsertWithWhereUniqueWithoutAuthorInput = {
    where: OccurrenceWhereUniqueInput
    update: XOR<OccurrenceUpdateWithoutAuthorInput, OccurrenceUncheckedUpdateWithoutAuthorInput>
    create: XOR<OccurrenceCreateWithoutAuthorInput, OccurrenceUncheckedCreateWithoutAuthorInput>
  }

  export type OccurrenceUpdateWithWhereUniqueWithoutAuthorInput = {
    where: OccurrenceWhereUniqueInput
    data: XOR<OccurrenceUpdateWithoutAuthorInput, OccurrenceUncheckedUpdateWithoutAuthorInput>
  }

  export type OccurrenceUpdateManyWithWhereWithoutAuthorInput = {
    where: OccurrenceScalarWhereInput
    data: XOR<OccurrenceUpdateManyMutationInput, OccurrenceUncheckedUpdateManyWithoutAuthorInput>
  }

  export type StudentCreateWithoutGroupInput = {
    id?: string
    cpf: string
    responsiblePhone: string
    responsibleEmail: string
    Occurrences?: OccurrenceCreateNestedManyWithoutStudentsInput
    user: UserCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    cpf: string
    responsiblePhone: string
    responsibleEmail: string
    Occurrences?: OccurrenceUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type StudentCreateOrConnectWithoutGroupInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput>
  }

  export type StudentCreateManyGroupInputEnvelope = {
    data: StudentCreateManyGroupInput | StudentCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithWhereUniqueWithoutGroupInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutGroupInput, StudentUncheckedUpdateWithoutGroupInput>
    create: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutGroupInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutGroupInput, StudentUncheckedUpdateWithoutGroupInput>
  }

  export type StudentUpdateManyWithWhereWithoutGroupInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutGroupInput>
  }

  export type PedagogueCreateWithoutOccurrencesInput = {
    id?: string
    user: UserCreateNestedOneWithoutPedagogueInput
  }

  export type PedagogueUncheckedCreateWithoutOccurrencesInput = {
    id?: string
    userId: string
  }

  export type PedagogueCreateOrConnectWithoutOccurrencesInput = {
    where: PedagogueWhereUniqueInput
    create: XOR<PedagogueCreateWithoutOccurrencesInput, PedagogueUncheckedCreateWithoutOccurrencesInput>
  }

  export type TeacherCreateWithoutOccurrencesInput = {
    id?: string
    status: $Enums.TeacherStatus
    user: UserCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutOccurrencesInput = {
    id?: string
    userId: string
    status: $Enums.TeacherStatus
  }

  export type TeacherCreateOrConnectWithoutOccurrencesInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutOccurrencesInput, TeacherUncheckedCreateWithoutOccurrencesInput>
  }

  export type UserCreateWithoutOccurrenceInput = {
    id?: string
    name: string
    email: string
    password: string
    temporaryPassword?: string | null
    students?: StudentCreateNestedManyWithoutUserInput
    teacher?: TeacherCreateNestedManyWithoutUserInput
    OccurrenceHistory?: OccurrenceHistoryCreateNestedManyWithoutEditorInput
    pedagogue?: PedagogueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOccurrenceInput = {
    id?: string
    name: string
    email: string
    password: string
    temporaryPassword?: string | null
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    teacher?: TeacherUncheckedCreateNestedManyWithoutUserInput
    OccurrenceHistory?: OccurrenceHistoryUncheckedCreateNestedManyWithoutEditorInput
    pedagogue?: PedagogueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOccurrenceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOccurrenceInput, UserUncheckedCreateWithoutOccurrenceInput>
  }

  export type StudentCreateWithoutOccurrencesInput = {
    id?: string
    cpf: string
    responsiblePhone: string
    responsibleEmail: string
    group: GroupCreateNestedOneWithoutStudentsInput
    user: UserCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutOccurrencesInput = {
    id?: string
    userId: string
    groupId: string
    cpf: string
    responsiblePhone: string
    responsibleEmail: string
  }

  export type StudentCreateOrConnectWithoutOccurrencesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutOccurrencesInput, StudentUncheckedCreateWithoutOccurrencesInput>
  }

  export type OccurrenceHistoryCreateWithoutOccurrenceInput = {
    id?: string
    createdAt?: Date | string
    changedFields?: OccurrenceHistoryCreatechangedFieldsInput | string[]
    editor: UserCreateNestedOneWithoutOccurrenceHistoryInput
  }

  export type OccurrenceHistoryUncheckedCreateWithoutOccurrenceInput = {
    id?: string
    editorId: string
    createdAt?: Date | string
    changedFields?: OccurrenceHistoryCreatechangedFieldsInput | string[]
  }

  export type OccurrenceHistoryCreateOrConnectWithoutOccurrenceInput = {
    where: OccurrenceHistoryWhereUniqueInput
    create: XOR<OccurrenceHistoryCreateWithoutOccurrenceInput, OccurrenceHistoryUncheckedCreateWithoutOccurrenceInput>
  }

  export type OccurrenceHistoryCreateManyOccurrenceInputEnvelope = {
    data: OccurrenceHistoryCreateManyOccurrenceInput | OccurrenceHistoryCreateManyOccurrenceInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentCreateWithoutOccurrenceInput = {
    id?: string
    title: string
    url: string
  }

  export type AttachmentUncheckedCreateWithoutOccurrenceInput = {
    id?: string
    title: string
    url: string
  }

  export type AttachmentCreateOrConnectWithoutOccurrenceInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutOccurrenceInput, AttachmentUncheckedCreateWithoutOccurrenceInput>
  }

  export type AttachmentCreateManyOccurrenceInputEnvelope = {
    data: AttachmentCreateManyOccurrenceInput | AttachmentCreateManyOccurrenceInput[]
    skipDuplicates?: boolean
  }

  export type PedagogueUpsertWithoutOccurrencesInput = {
    update: XOR<PedagogueUpdateWithoutOccurrencesInput, PedagogueUncheckedUpdateWithoutOccurrencesInput>
    create: XOR<PedagogueCreateWithoutOccurrencesInput, PedagogueUncheckedCreateWithoutOccurrencesInput>
    where?: PedagogueWhereInput
  }

  export type PedagogueUpdateToOneWithWhereWithoutOccurrencesInput = {
    where?: PedagogueWhereInput
    data: XOR<PedagogueUpdateWithoutOccurrencesInput, PedagogueUncheckedUpdateWithoutOccurrencesInput>
  }

  export type PedagogueUpdateWithoutOccurrencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPedagogueNestedInput
  }

  export type PedagogueUncheckedUpdateWithoutOccurrencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherUpsertWithoutOccurrencesInput = {
    update: XOR<TeacherUpdateWithoutOccurrencesInput, TeacherUncheckedUpdateWithoutOccurrencesInput>
    create: XOR<TeacherCreateWithoutOccurrencesInput, TeacherUncheckedCreateWithoutOccurrencesInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutOccurrencesInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutOccurrencesInput, TeacherUncheckedUpdateWithoutOccurrencesInput>
  }

  export type TeacherUpdateWithoutOccurrencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTeacherStatusFieldUpdateOperationsInput | $Enums.TeacherStatus
    user?: UserUpdateOneRequiredWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutOccurrencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumTeacherStatusFieldUpdateOperationsInput | $Enums.TeacherStatus
  }

  export type UserUpsertWithWhereUniqueWithoutOccurrenceInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOccurrenceInput, UserUncheckedUpdateWithoutOccurrenceInput>
    create: XOR<UserCreateWithoutOccurrenceInput, UserUncheckedCreateWithoutOccurrenceInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOccurrenceInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOccurrenceInput, UserUncheckedUpdateWithoutOccurrenceInput>
  }

  export type UserUpdateManyWithWhereWithoutOccurrenceInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOccurrenceInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    temporaryPassword?: StringNullableFilter<"User"> | string | null
  }

  export type StudentUpsertWithWhereUniqueWithoutOccurrencesInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutOccurrencesInput, StudentUncheckedUpdateWithoutOccurrencesInput>
    create: XOR<StudentCreateWithoutOccurrencesInput, StudentUncheckedCreateWithoutOccurrencesInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutOccurrencesInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutOccurrencesInput, StudentUncheckedUpdateWithoutOccurrencesInput>
  }

  export type StudentUpdateManyWithWhereWithoutOccurrencesInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutOccurrencesInput>
  }

  export type OccurrenceHistoryUpsertWithWhereUniqueWithoutOccurrenceInput = {
    where: OccurrenceHistoryWhereUniqueInput
    update: XOR<OccurrenceHistoryUpdateWithoutOccurrenceInput, OccurrenceHistoryUncheckedUpdateWithoutOccurrenceInput>
    create: XOR<OccurrenceHistoryCreateWithoutOccurrenceInput, OccurrenceHistoryUncheckedCreateWithoutOccurrenceInput>
  }

  export type OccurrenceHistoryUpdateWithWhereUniqueWithoutOccurrenceInput = {
    where: OccurrenceHistoryWhereUniqueInput
    data: XOR<OccurrenceHistoryUpdateWithoutOccurrenceInput, OccurrenceHistoryUncheckedUpdateWithoutOccurrenceInput>
  }

  export type OccurrenceHistoryUpdateManyWithWhereWithoutOccurrenceInput = {
    where: OccurrenceHistoryScalarWhereInput
    data: XOR<OccurrenceHistoryUpdateManyMutationInput, OccurrenceHistoryUncheckedUpdateManyWithoutOccurrenceInput>
  }

  export type AttachmentUpsertWithWhereUniqueWithoutOccurrenceInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutOccurrenceInput, AttachmentUncheckedUpdateWithoutOccurrenceInput>
    create: XOR<AttachmentCreateWithoutOccurrenceInput, AttachmentUncheckedCreateWithoutOccurrenceInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutOccurrenceInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutOccurrenceInput, AttachmentUncheckedUpdateWithoutOccurrenceInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutOccurrenceInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutOccurrenceInput>
  }

  export type AttachmentScalarWhereInput = {
    AND?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    OR?: AttachmentScalarWhereInput[]
    NOT?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    id?: StringFilter<"Attachment"> | string
    title?: StringFilter<"Attachment"> | string
    url?: StringFilter<"Attachment"> | string
    occurrenceId?: StringFilter<"Attachment"> | string
  }

  export type OccurrenceCreateWithoutOccurrenceHistoriesInput = {
    id?: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
    author: PedagogueCreateNestedOneWithoutOccurrencesInput
    teacher: TeacherCreateNestedOneWithoutOccurrencesInput
    attendees?: UserCreateNestedManyWithoutOccurrenceInput
    students?: StudentCreateNestedManyWithoutOccurrencesInput
    attachments?: AttachmentCreateNestedManyWithoutOccurrenceInput
  }

  export type OccurrenceUncheckedCreateWithoutOccurrenceHistoriesInput = {
    id?: string
    teacherId: string
    authorId: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
    attendees?: UserUncheckedCreateNestedManyWithoutOccurrenceInput
    students?: StudentUncheckedCreateNestedManyWithoutOccurrencesInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutOccurrenceInput
  }

  export type OccurrenceCreateOrConnectWithoutOccurrenceHistoriesInput = {
    where: OccurrenceWhereUniqueInput
    create: XOR<OccurrenceCreateWithoutOccurrenceHistoriesInput, OccurrenceUncheckedCreateWithoutOccurrenceHistoriesInput>
  }

  export type UserCreateWithoutOccurrenceHistoryInput = {
    id?: string
    name: string
    email: string
    password: string
    temporaryPassword?: string | null
    students?: StudentCreateNestedManyWithoutUserInput
    teacher?: TeacherCreateNestedManyWithoutUserInput
    Occurrence?: OccurrenceCreateNestedManyWithoutAttendeesInput
    pedagogue?: PedagogueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOccurrenceHistoryInput = {
    id?: string
    name: string
    email: string
    password: string
    temporaryPassword?: string | null
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    teacher?: TeacherUncheckedCreateNestedManyWithoutUserInput
    Occurrence?: OccurrenceUncheckedCreateNestedManyWithoutAttendeesInput
    pedagogue?: PedagogueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOccurrenceHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOccurrenceHistoryInput, UserUncheckedCreateWithoutOccurrenceHistoryInput>
  }

  export type OccurrenceUpsertWithoutOccurrenceHistoriesInput = {
    update: XOR<OccurrenceUpdateWithoutOccurrenceHistoriesInput, OccurrenceUncheckedUpdateWithoutOccurrenceHistoriesInput>
    create: XOR<OccurrenceCreateWithoutOccurrenceHistoriesInput, OccurrenceUncheckedCreateWithoutOccurrenceHistoriesInput>
    where?: OccurrenceWhereInput
  }

  export type OccurrenceUpdateToOneWithWhereWithoutOccurrenceHistoriesInput = {
    where?: OccurrenceWhereInput
    data: XOR<OccurrenceUpdateWithoutOccurrenceHistoriesInput, OccurrenceUncheckedUpdateWithoutOccurrenceHistoriesInput>
  }

  export type OccurrenceUpdateWithoutOccurrenceHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: PedagogueUpdateOneRequiredWithoutOccurrencesNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutOccurrencesNestedInput
    attendees?: UserUpdateManyWithoutOccurrenceNestedInput
    students?: StudentUpdateManyWithoutOccurrencesNestedInput
    attachments?: AttachmentUpdateManyWithoutOccurrenceNestedInput
  }

  export type OccurrenceUncheckedUpdateWithoutOccurrenceHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: UserUncheckedUpdateManyWithoutOccurrenceNestedInput
    students?: StudentUncheckedUpdateManyWithoutOccurrencesNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutOccurrenceNestedInput
  }

  export type UserUpsertWithoutOccurrenceHistoryInput = {
    update: XOR<UserUpdateWithoutOccurrenceHistoryInput, UserUncheckedUpdateWithoutOccurrenceHistoryInput>
    create: XOR<UserCreateWithoutOccurrenceHistoryInput, UserUncheckedCreateWithoutOccurrenceHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOccurrenceHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOccurrenceHistoryInput, UserUncheckedUpdateWithoutOccurrenceHistoryInput>
  }

  export type UserUpdateWithoutOccurrenceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    temporaryPassword?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentUpdateManyWithoutUserNestedInput
    teacher?: TeacherUpdateManyWithoutUserNestedInput
    Occurrence?: OccurrenceUpdateManyWithoutAttendeesNestedInput
    pedagogue?: PedagogueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOccurrenceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    temporaryPassword?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    teacher?: TeacherUncheckedUpdateManyWithoutUserNestedInput
    Occurrence?: OccurrenceUncheckedUpdateManyWithoutAttendeesNestedInput
    pedagogue?: PedagogueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OccurrenceCreateWithoutStudentsInput = {
    id?: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
    author: PedagogueCreateNestedOneWithoutOccurrencesInput
    teacher: TeacherCreateNestedOneWithoutOccurrencesInput
    attendees?: UserCreateNestedManyWithoutOccurrenceInput
    occurrenceHistories?: OccurrenceHistoryCreateNestedManyWithoutOccurrenceInput
    attachments?: AttachmentCreateNestedManyWithoutOccurrenceInput
  }

  export type OccurrenceUncheckedCreateWithoutStudentsInput = {
    id?: string
    teacherId: string
    authorId: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
    attendees?: UserUncheckedCreateNestedManyWithoutOccurrenceInput
    occurrenceHistories?: OccurrenceHistoryUncheckedCreateNestedManyWithoutOccurrenceInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutOccurrenceInput
  }

  export type OccurrenceCreateOrConnectWithoutStudentsInput = {
    where: OccurrenceWhereUniqueInput
    create: XOR<OccurrenceCreateWithoutStudentsInput, OccurrenceUncheckedCreateWithoutStudentsInput>
  }

  export type GroupCreateWithoutStudentsInput = {
    id?: string
    name: string
    shift: $Enums.GroupShift
  }

  export type GroupUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    shift: $Enums.GroupShift
  }

  export type GroupCreateOrConnectWithoutStudentsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
  }

  export type UserCreateWithoutStudentsInput = {
    id?: string
    name: string
    email: string
    password: string
    temporaryPassword?: string | null
    teacher?: TeacherCreateNestedManyWithoutUserInput
    Occurrence?: OccurrenceCreateNestedManyWithoutAttendeesInput
    OccurrenceHistory?: OccurrenceHistoryCreateNestedManyWithoutEditorInput
    pedagogue?: PedagogueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    email: string
    password: string
    temporaryPassword?: string | null
    teacher?: TeacherUncheckedCreateNestedManyWithoutUserInput
    Occurrence?: OccurrenceUncheckedCreateNestedManyWithoutAttendeesInput
    OccurrenceHistory?: OccurrenceHistoryUncheckedCreateNestedManyWithoutEditorInput
    pedagogue?: PedagogueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
  }

  export type OccurrenceUpsertWithWhereUniqueWithoutStudentsInput = {
    where: OccurrenceWhereUniqueInput
    update: XOR<OccurrenceUpdateWithoutStudentsInput, OccurrenceUncheckedUpdateWithoutStudentsInput>
    create: XOR<OccurrenceCreateWithoutStudentsInput, OccurrenceUncheckedCreateWithoutStudentsInput>
  }

  export type OccurrenceUpdateWithWhereUniqueWithoutStudentsInput = {
    where: OccurrenceWhereUniqueInput
    data: XOR<OccurrenceUpdateWithoutStudentsInput, OccurrenceUncheckedUpdateWithoutStudentsInput>
  }

  export type OccurrenceUpdateManyWithWhereWithoutStudentsInput = {
    where: OccurrenceScalarWhereInput
    data: XOR<OccurrenceUpdateManyMutationInput, OccurrenceUncheckedUpdateManyWithoutStudentsInput>
  }

  export type GroupUpsertWithoutStudentsInput = {
    update: XOR<GroupUpdateWithoutStudentsInput, GroupUncheckedUpdateWithoutStudentsInput>
    create: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutStudentsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutStudentsInput, GroupUncheckedUpdateWithoutStudentsInput>
  }

  export type GroupUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shift?: EnumGroupShiftFieldUpdateOperationsInput | $Enums.GroupShift
  }

  export type GroupUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shift?: EnumGroupShiftFieldUpdateOperationsInput | $Enums.GroupShift
  }

  export type UserUpsertWithoutStudentsInput = {
    update: XOR<UserUpdateWithoutStudentsInput, UserUncheckedUpdateWithoutStudentsInput>
    create: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentsInput, UserUncheckedUpdateWithoutStudentsInput>
  }

  export type UserUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    temporaryPassword?: NullableStringFieldUpdateOperationsInput | string | null
    teacher?: TeacherUpdateManyWithoutUserNestedInput
    Occurrence?: OccurrenceUpdateManyWithoutAttendeesNestedInput
    OccurrenceHistory?: OccurrenceHistoryUpdateManyWithoutEditorNestedInput
    pedagogue?: PedagogueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    temporaryPassword?: NullableStringFieldUpdateOperationsInput | string | null
    teacher?: TeacherUncheckedUpdateManyWithoutUserNestedInput
    Occurrence?: OccurrenceUncheckedUpdateManyWithoutAttendeesNestedInput
    OccurrenceHistory?: OccurrenceHistoryUncheckedUpdateManyWithoutEditorNestedInput
    pedagogue?: PedagogueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTeacherInput = {
    id?: string
    name: string
    email: string
    password: string
    temporaryPassword?: string | null
    students?: StudentCreateNestedManyWithoutUserInput
    Occurrence?: OccurrenceCreateNestedManyWithoutAttendeesInput
    OccurrenceHistory?: OccurrenceHistoryCreateNestedManyWithoutEditorInput
    pedagogue?: PedagogueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    email: string
    password: string
    temporaryPassword?: string | null
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    Occurrence?: OccurrenceUncheckedCreateNestedManyWithoutAttendeesInput
    OccurrenceHistory?: OccurrenceHistoryUncheckedCreateNestedManyWithoutEditorInput
    pedagogue?: PedagogueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeacherInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
  }

  export type OccurrenceCreateWithoutTeacherInput = {
    id?: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
    author: PedagogueCreateNestedOneWithoutOccurrencesInput
    attendees?: UserCreateNestedManyWithoutOccurrenceInput
    students?: StudentCreateNestedManyWithoutOccurrencesInput
    occurrenceHistories?: OccurrenceHistoryCreateNestedManyWithoutOccurrenceInput
    attachments?: AttachmentCreateNestedManyWithoutOccurrenceInput
  }

  export type OccurrenceUncheckedCreateWithoutTeacherInput = {
    id?: string
    authorId: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
    attendees?: UserUncheckedCreateNestedManyWithoutOccurrenceInput
    students?: StudentUncheckedCreateNestedManyWithoutOccurrencesInput
    occurrenceHistories?: OccurrenceHistoryUncheckedCreateNestedManyWithoutOccurrenceInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutOccurrenceInput
  }

  export type OccurrenceCreateOrConnectWithoutTeacherInput = {
    where: OccurrenceWhereUniqueInput
    create: XOR<OccurrenceCreateWithoutTeacherInput, OccurrenceUncheckedCreateWithoutTeacherInput>
  }

  export type OccurrenceCreateManyTeacherInputEnvelope = {
    data: OccurrenceCreateManyTeacherInput | OccurrenceCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTeacherInput = {
    update: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type UserUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    temporaryPassword?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentUpdateManyWithoutUserNestedInput
    Occurrence?: OccurrenceUpdateManyWithoutAttendeesNestedInput
    OccurrenceHistory?: OccurrenceHistoryUpdateManyWithoutEditorNestedInput
    pedagogue?: PedagogueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    temporaryPassword?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    Occurrence?: OccurrenceUncheckedUpdateManyWithoutAttendeesNestedInput
    OccurrenceHistory?: OccurrenceHistoryUncheckedUpdateManyWithoutEditorNestedInput
    pedagogue?: PedagogueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OccurrenceUpsertWithWhereUniqueWithoutTeacherInput = {
    where: OccurrenceWhereUniqueInput
    update: XOR<OccurrenceUpdateWithoutTeacherInput, OccurrenceUncheckedUpdateWithoutTeacherInput>
    create: XOR<OccurrenceCreateWithoutTeacherInput, OccurrenceUncheckedCreateWithoutTeacherInput>
  }

  export type OccurrenceUpdateWithWhereUniqueWithoutTeacherInput = {
    where: OccurrenceWhereUniqueInput
    data: XOR<OccurrenceUpdateWithoutTeacherInput, OccurrenceUncheckedUpdateWithoutTeacherInput>
  }

  export type OccurrenceUpdateManyWithWhereWithoutTeacherInput = {
    where: OccurrenceScalarWhereInput
    data: XOR<OccurrenceUpdateManyMutationInput, OccurrenceUncheckedUpdateManyWithoutTeacherInput>
  }

  export type OccurrenceCreateWithoutAttachmentsInput = {
    id?: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
    author: PedagogueCreateNestedOneWithoutOccurrencesInput
    teacher: TeacherCreateNestedOneWithoutOccurrencesInput
    attendees?: UserCreateNestedManyWithoutOccurrenceInput
    students?: StudentCreateNestedManyWithoutOccurrencesInput
    occurrenceHistories?: OccurrenceHistoryCreateNestedManyWithoutOccurrenceInput
  }

  export type OccurrenceUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    teacherId: string
    authorId: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
    attendees?: UserUncheckedCreateNestedManyWithoutOccurrenceInput
    students?: StudentUncheckedCreateNestedManyWithoutOccurrencesInput
    occurrenceHistories?: OccurrenceHistoryUncheckedCreateNestedManyWithoutOccurrenceInput
  }

  export type OccurrenceCreateOrConnectWithoutAttachmentsInput = {
    where: OccurrenceWhereUniqueInput
    create: XOR<OccurrenceCreateWithoutAttachmentsInput, OccurrenceUncheckedCreateWithoutAttachmentsInput>
  }

  export type OccurrenceUpsertWithoutAttachmentsInput = {
    update: XOR<OccurrenceUpdateWithoutAttachmentsInput, OccurrenceUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<OccurrenceCreateWithoutAttachmentsInput, OccurrenceUncheckedCreateWithoutAttachmentsInput>
    where?: OccurrenceWhereInput
  }

  export type OccurrenceUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: OccurrenceWhereInput
    data: XOR<OccurrenceUpdateWithoutAttachmentsInput, OccurrenceUncheckedUpdateWithoutAttachmentsInput>
  }

  export type OccurrenceUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: PedagogueUpdateOneRequiredWithoutOccurrencesNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutOccurrencesNestedInput
    attendees?: UserUpdateManyWithoutOccurrenceNestedInput
    students?: StudentUpdateManyWithoutOccurrencesNestedInput
    occurrenceHistories?: OccurrenceHistoryUpdateManyWithoutOccurrenceNestedInput
  }

  export type OccurrenceUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: UserUncheckedUpdateManyWithoutOccurrenceNestedInput
    students?: StudentUncheckedUpdateManyWithoutOccurrencesNestedInput
    occurrenceHistories?: OccurrenceHistoryUncheckedUpdateManyWithoutOccurrenceNestedInput
  }

  export type StudentCreateManyUserInput = {
    id?: string
    groupId: string
    cpf: string
    responsiblePhone: string
    responsibleEmail: string
  }

  export type TeacherCreateManyUserInput = {
    id?: string
    status: $Enums.TeacherStatus
  }

  export type OccurrenceHistoryCreateManyEditorInput = {
    id?: string
    occurrenceId: string
    createdAt?: Date | string
    changedFields?: OccurrenceHistoryCreatechangedFieldsInput | string[]
  }

  export type PedagogueCreateManyUserInput = {
    id?: string
  }

  export type StudentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    responsiblePhone?: StringFieldUpdateOperationsInput | string
    responsibleEmail?: StringFieldUpdateOperationsInput | string
    Occurrences?: OccurrenceUpdateManyWithoutStudentsNestedInput
    group?: GroupUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    responsiblePhone?: StringFieldUpdateOperationsInput | string
    responsibleEmail?: StringFieldUpdateOperationsInput | string
    Occurrences?: OccurrenceUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    responsiblePhone?: StringFieldUpdateOperationsInput | string
    responsibleEmail?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTeacherStatusFieldUpdateOperationsInput | $Enums.TeacherStatus
    Occurrences?: OccurrenceUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTeacherStatusFieldUpdateOperationsInput | $Enums.TeacherStatus
    Occurrences?: OccurrenceUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTeacherStatusFieldUpdateOperationsInput | $Enums.TeacherStatus
  }

  export type OccurrenceUpdateWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: PedagogueUpdateOneRequiredWithoutOccurrencesNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutOccurrencesNestedInput
    students?: StudentUpdateManyWithoutOccurrencesNestedInput
    occurrenceHistories?: OccurrenceHistoryUpdateManyWithoutOccurrenceNestedInput
    attachments?: AttachmentUpdateManyWithoutOccurrenceNestedInput
  }

  export type OccurrenceUncheckedUpdateWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutOccurrencesNestedInput
    occurrenceHistories?: OccurrenceHistoryUncheckedUpdateManyWithoutOccurrenceNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutOccurrenceNestedInput
  }

  export type OccurrenceUncheckedUpdateManyWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OccurrenceHistoryUpdateWithoutEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedFields?: OccurrenceHistoryUpdatechangedFieldsInput | string[]
    Occurrence?: OccurrenceUpdateOneRequiredWithoutOccurrenceHistoriesNestedInput
  }

  export type OccurrenceHistoryUncheckedUpdateWithoutEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    occurrenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedFields?: OccurrenceHistoryUpdatechangedFieldsInput | string[]
  }

  export type OccurrenceHistoryUncheckedUpdateManyWithoutEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    occurrenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedFields?: OccurrenceHistoryUpdatechangedFieldsInput | string[]
  }

  export type PedagogueUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    occurrences?: OccurrenceUpdateManyWithoutAuthorNestedInput
  }

  export type PedagogueUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    occurrences?: OccurrenceUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PedagogueUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type OccurrenceCreateManyAuthorInput = {
    id?: string
    teacherId: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
  }

  export type OccurrenceUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutOccurrencesNestedInput
    attendees?: UserUpdateManyWithoutOccurrenceNestedInput
    students?: StudentUpdateManyWithoutOccurrencesNestedInput
    occurrenceHistories?: OccurrenceHistoryUpdateManyWithoutOccurrenceNestedInput
    attachments?: AttachmentUpdateManyWithoutOccurrenceNestedInput
  }

  export type OccurrenceUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: UserUncheckedUpdateManyWithoutOccurrenceNestedInput
    students?: StudentUncheckedUpdateManyWithoutOccurrencesNestedInput
    occurrenceHistories?: OccurrenceHistoryUncheckedUpdateManyWithoutOccurrenceNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutOccurrenceNestedInput
  }

  export type OccurrenceUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyGroupInput = {
    id?: string
    userId: string
    cpf: string
    responsiblePhone: string
    responsibleEmail: string
  }

  export type StudentUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    responsiblePhone?: StringFieldUpdateOperationsInput | string
    responsibleEmail?: StringFieldUpdateOperationsInput | string
    Occurrences?: OccurrenceUpdateManyWithoutStudentsNestedInput
    user?: UserUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    responsiblePhone?: StringFieldUpdateOperationsInput | string
    responsibleEmail?: StringFieldUpdateOperationsInput | string
    Occurrences?: OccurrenceUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    responsiblePhone?: StringFieldUpdateOperationsInput | string
    responsibleEmail?: StringFieldUpdateOperationsInput | string
  }

  export type OccurrenceHistoryCreateManyOccurrenceInput = {
    id?: string
    editorId: string
    createdAt?: Date | string
    changedFields?: OccurrenceHistoryCreatechangedFieldsInput | string[]
  }

  export type AttachmentCreateManyOccurrenceInput = {
    id?: string
    title: string
    url: string
  }

  export type UserUpdateWithoutOccurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    temporaryPassword?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentUpdateManyWithoutUserNestedInput
    teacher?: TeacherUpdateManyWithoutUserNestedInput
    OccurrenceHistory?: OccurrenceHistoryUpdateManyWithoutEditorNestedInput
    pedagogue?: PedagogueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOccurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    temporaryPassword?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    teacher?: TeacherUncheckedUpdateManyWithoutUserNestedInput
    OccurrenceHistory?: OccurrenceHistoryUncheckedUpdateManyWithoutEditorNestedInput
    pedagogue?: PedagogueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOccurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    temporaryPassword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUpdateWithoutOccurrencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    responsiblePhone?: StringFieldUpdateOperationsInput | string
    responsibleEmail?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutStudentsNestedInput
    user?: UserUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutOccurrencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    responsiblePhone?: StringFieldUpdateOperationsInput | string
    responsibleEmail?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyWithoutOccurrencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    responsiblePhone?: StringFieldUpdateOperationsInput | string
    responsibleEmail?: StringFieldUpdateOperationsInput | string
  }

  export type OccurrenceHistoryUpdateWithoutOccurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedFields?: OccurrenceHistoryUpdatechangedFieldsInput | string[]
    editor?: UserUpdateOneRequiredWithoutOccurrenceHistoryNestedInput
  }

  export type OccurrenceHistoryUncheckedUpdateWithoutOccurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    editorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedFields?: OccurrenceHistoryUpdatechangedFieldsInput | string[]
  }

  export type OccurrenceHistoryUncheckedUpdateManyWithoutOccurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    editorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedFields?: OccurrenceHistoryUpdatechangedFieldsInput | string[]
  }

  export type AttachmentUpdateWithoutOccurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type AttachmentUncheckedUpdateWithoutOccurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type AttachmentUncheckedUpdateManyWithoutOccurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type OccurrenceUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: PedagogueUpdateOneRequiredWithoutOccurrencesNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutOccurrencesNestedInput
    attendees?: UserUpdateManyWithoutOccurrenceNestedInput
    occurrenceHistories?: OccurrenceHistoryUpdateManyWithoutOccurrenceNestedInput
    attachments?: AttachmentUpdateManyWithoutOccurrenceNestedInput
  }

  export type OccurrenceUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: UserUncheckedUpdateManyWithoutOccurrenceNestedInput
    occurrenceHistories?: OccurrenceHistoryUncheckedUpdateManyWithoutOccurrenceNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutOccurrenceNestedInput
  }

  export type OccurrenceUncheckedUpdateManyWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OccurrenceCreateManyTeacherInput = {
    id?: string
    authorId: string
    title: string
    description: string
    type: $Enums.OccurrenceType
    createdAt?: Date | string
  }

  export type OccurrenceUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: PedagogueUpdateOneRequiredWithoutOccurrencesNestedInput
    attendees?: UserUpdateManyWithoutOccurrenceNestedInput
    students?: StudentUpdateManyWithoutOccurrencesNestedInput
    occurrenceHistories?: OccurrenceHistoryUpdateManyWithoutOccurrenceNestedInput
    attachments?: AttachmentUpdateManyWithoutOccurrenceNestedInput
  }

  export type OccurrenceUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: UserUncheckedUpdateManyWithoutOccurrenceNestedInput
    students?: StudentUncheckedUpdateManyWithoutOccurrencesNestedInput
    occurrenceHistories?: OccurrenceHistoryUncheckedUpdateManyWithoutOccurrenceNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutOccurrenceNestedInput
  }

  export type OccurrenceUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOccurrenceTypeFieldUpdateOperationsInput | $Enums.OccurrenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}