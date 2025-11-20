
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
 * Model Demandas
 * 
 */
export type Demandas = $Result.DefaultSelection<Prisma.$DemandasPayload>
/**
 * Model Veiculos
 * 
 */
export type Veiculos = $Result.DefaultSelection<Prisma.$VeiculosPayload>
/**
 * Model Secretarias
 * 
 */
export type Secretarias = $Result.DefaultSelection<Prisma.$SecretariasPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Demandas
 * const demandas = await prisma.demandas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Demandas
   * const demandas = await prisma.demandas.findMany()
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
   * `prisma.demandas`: Exposes CRUD operations for the **Demandas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Demandas
    * const demandas = await prisma.demandas.findMany()
    * ```
    */
  get demandas(): Prisma.DemandasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.veiculos`: Exposes CRUD operations for the **Veiculos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veiculos
    * const veiculos = await prisma.veiculos.findMany()
    * ```
    */
  get veiculos(): Prisma.VeiculosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.secretarias`: Exposes CRUD operations for the **Secretarias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Secretarias
    * const secretarias = await prisma.secretarias.findMany()
    * ```
    */
  get secretarias(): Prisma.SecretariasDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
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
    Demandas: 'Demandas',
    Veiculos: 'Veiculos',
    Secretarias: 'Secretarias',
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification'
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
      modelProps: "demandas" | "veiculos" | "secretarias" | "user" | "session" | "account" | "verification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Demandas: {
        payload: Prisma.$DemandasPayload<ExtArgs>
        fields: Prisma.DemandasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemandasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemandasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandasPayload>
          }
          findFirst: {
            args: Prisma.DemandasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemandasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandasPayload>
          }
          findMany: {
            args: Prisma.DemandasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandasPayload>[]
          }
          create: {
            args: Prisma.DemandasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandasPayload>
          }
          createMany: {
            args: Prisma.DemandasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DemandasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandasPayload>[]
          }
          delete: {
            args: Prisma.DemandasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandasPayload>
          }
          update: {
            args: Prisma.DemandasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandasPayload>
          }
          deleteMany: {
            args: Prisma.DemandasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DemandasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DemandasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandasPayload>[]
          }
          upsert: {
            args: Prisma.DemandasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandasPayload>
          }
          aggregate: {
            args: Prisma.DemandasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemandas>
          }
          groupBy: {
            args: Prisma.DemandasGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemandasGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemandasCountArgs<ExtArgs>
            result: $Utils.Optional<DemandasCountAggregateOutputType> | number
          }
        }
      }
      Veiculos: {
        payload: Prisma.$VeiculosPayload<ExtArgs>
        fields: Prisma.VeiculosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeiculosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeiculosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculosPayload>
          }
          findFirst: {
            args: Prisma.VeiculosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeiculosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculosPayload>
          }
          findMany: {
            args: Prisma.VeiculosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculosPayload>[]
          }
          create: {
            args: Prisma.VeiculosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculosPayload>
          }
          createMany: {
            args: Prisma.VeiculosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VeiculosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculosPayload>[]
          }
          delete: {
            args: Prisma.VeiculosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculosPayload>
          }
          update: {
            args: Prisma.VeiculosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculosPayload>
          }
          deleteMany: {
            args: Prisma.VeiculosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VeiculosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VeiculosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculosPayload>[]
          }
          upsert: {
            args: Prisma.VeiculosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculosPayload>
          }
          aggregate: {
            args: Prisma.VeiculosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeiculos>
          }
          groupBy: {
            args: Prisma.VeiculosGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeiculosGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeiculosCountArgs<ExtArgs>
            result: $Utils.Optional<VeiculosCountAggregateOutputType> | number
          }
        }
      }
      Secretarias: {
        payload: Prisma.$SecretariasPayload<ExtArgs>
        fields: Prisma.SecretariasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecretariasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecretariasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariasPayload>
          }
          findFirst: {
            args: Prisma.SecretariasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecretariasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariasPayload>
          }
          findMany: {
            args: Prisma.SecretariasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariasPayload>[]
          }
          create: {
            args: Prisma.SecretariasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariasPayload>
          }
          createMany: {
            args: Prisma.SecretariasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecretariasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariasPayload>[]
          }
          delete: {
            args: Prisma.SecretariasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariasPayload>
          }
          update: {
            args: Prisma.SecretariasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariasPayload>
          }
          deleteMany: {
            args: Prisma.SecretariasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecretariasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecretariasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariasPayload>[]
          }
          upsert: {
            args: Prisma.SecretariasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariasPayload>
          }
          aggregate: {
            args: Prisma.SecretariasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecretarias>
          }
          groupBy: {
            args: Prisma.SecretariasGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecretariasGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecretariasCountArgs<ExtArgs>
            result: $Utils.Optional<SecretariasCountAggregateOutputType> | number
          }
        }
      }
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    demandas?: DemandasOmit
    veiculos?: VeiculosOmit
    secretarias?: SecretariasOmit
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type VeiculosCountOutputType
   */

  export type VeiculosCountOutputType = {
    demandas: number
  }

  export type VeiculosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandas?: boolean | VeiculosCountOutputTypeCountDemandasArgs
  }

  // Custom InputTypes
  /**
   * VeiculosCountOutputType without action
   */
  export type VeiculosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculosCountOutputType
     */
    select?: VeiculosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VeiculosCountOutputType without action
   */
  export type VeiculosCountOutputTypeCountDemandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandasWhereInput
  }


  /**
   * Count Type SecretariasCountOutputType
   */

  export type SecretariasCountOutputType = {
    Veiculos: number
    Demandas: number
    Users: number
  }

  export type SecretariasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Veiculos?: boolean | SecretariasCountOutputTypeCountVeiculosArgs
    Demandas?: boolean | SecretariasCountOutputTypeCountDemandasArgs
    Users?: boolean | SecretariasCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * SecretariasCountOutputType without action
   */
  export type SecretariasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretariasCountOutputType
     */
    select?: SecretariasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SecretariasCountOutputType without action
   */
  export type SecretariasCountOutputTypeCountVeiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculosWhereInput
  }

  /**
   * SecretariasCountOutputType without action
   */
  export type SecretariasCountOutputTypeCountDemandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandasWhereInput
  }

  /**
   * SecretariasCountOutputType without action
   */
  export type SecretariasCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    veiculos: number
    demandas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    veiculos?: boolean | UserCountOutputTypeCountVeiculosArgs
    demandas?: boolean | UserCountOutputTypeCountDemandasArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVeiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculosWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDemandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Demandas
   */

  export type AggregateDemandas = {
    _count: DemandasCountAggregateOutputType | null
    _min: DemandasMinAggregateOutputType | null
    _max: DemandasMaxAggregateOutputType | null
  }

  export type DemandasMinAggregateOutputType = {
    id: string | null
    emailSolicitante: string | null
    demandaDetalhe: string | null
    pessoaSolicitante: string | null
    secretariaSolicitante: string | null
    destino: string | null
    dataHoraIda: string | null
    dataHoraVolta: string | null
    origem: string | null
    contato: string | null
    statusDemanda: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    veiculoId: string | null
    secretariasId: string | null
  }

  export type DemandasMaxAggregateOutputType = {
    id: string | null
    emailSolicitante: string | null
    demandaDetalhe: string | null
    pessoaSolicitante: string | null
    secretariaSolicitante: string | null
    destino: string | null
    dataHoraIda: string | null
    dataHoraVolta: string | null
    origem: string | null
    contato: string | null
    statusDemanda: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    veiculoId: string | null
    secretariasId: string | null
  }

  export type DemandasCountAggregateOutputType = {
    id: number
    emailSolicitante: number
    demandaDetalhe: number
    pessoaSolicitante: number
    secretariaSolicitante: number
    destino: number
    dataHoraIda: number
    dataHoraVolta: number
    origem: number
    contato: number
    statusDemanda: number
    createdAt: number
    updatedAt: number
    userId: number
    veiculoId: number
    secretariasId: number
    _all: number
  }


  export type DemandasMinAggregateInputType = {
    id?: true
    emailSolicitante?: true
    demandaDetalhe?: true
    pessoaSolicitante?: true
    secretariaSolicitante?: true
    destino?: true
    dataHoraIda?: true
    dataHoraVolta?: true
    origem?: true
    contato?: true
    statusDemanda?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    veiculoId?: true
    secretariasId?: true
  }

  export type DemandasMaxAggregateInputType = {
    id?: true
    emailSolicitante?: true
    demandaDetalhe?: true
    pessoaSolicitante?: true
    secretariaSolicitante?: true
    destino?: true
    dataHoraIda?: true
    dataHoraVolta?: true
    origem?: true
    contato?: true
    statusDemanda?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    veiculoId?: true
    secretariasId?: true
  }

  export type DemandasCountAggregateInputType = {
    id?: true
    emailSolicitante?: true
    demandaDetalhe?: true
    pessoaSolicitante?: true
    secretariaSolicitante?: true
    destino?: true
    dataHoraIda?: true
    dataHoraVolta?: true
    origem?: true
    contato?: true
    statusDemanda?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    veiculoId?: true
    secretariasId?: true
    _all?: true
  }

  export type DemandasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demandas to aggregate.
     */
    where?: DemandasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandas to fetch.
     */
    orderBy?: DemandasOrderByWithRelationInput | DemandasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemandasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Demandas
    **/
    _count?: true | DemandasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemandasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemandasMaxAggregateInputType
  }

  export type GetDemandasAggregateType<T extends DemandasAggregateArgs> = {
        [P in keyof T & keyof AggregateDemandas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemandas[P]>
      : GetScalarType<T[P], AggregateDemandas[P]>
  }




  export type DemandasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandasWhereInput
    orderBy?: DemandasOrderByWithAggregationInput | DemandasOrderByWithAggregationInput[]
    by: DemandasScalarFieldEnum[] | DemandasScalarFieldEnum
    having?: DemandasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemandasCountAggregateInputType | true
    _min?: DemandasMinAggregateInputType
    _max?: DemandasMaxAggregateInputType
  }

  export type DemandasGroupByOutputType = {
    id: string
    emailSolicitante: string
    demandaDetalhe: string | null
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda: string | null
    dataHoraVolta: string | null
    origem: string
    contato: string
    statusDemanda: string
    createdAt: Date
    updatedAt: Date
    userId: string
    veiculoId: string | null
    secretariasId: string | null
    _count: DemandasCountAggregateOutputType | null
    _min: DemandasMinAggregateOutputType | null
    _max: DemandasMaxAggregateOutputType | null
  }

  type GetDemandasGroupByPayload<T extends DemandasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemandasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemandasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemandasGroupByOutputType[P]>
            : GetScalarType<T[P], DemandasGroupByOutputType[P]>
        }
      >
    >


  export type DemandasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailSolicitante?: boolean
    demandaDetalhe?: boolean
    pessoaSolicitante?: boolean
    secretariaSolicitante?: boolean
    destino?: boolean
    dataHoraIda?: boolean
    dataHoraVolta?: boolean
    origem?: boolean
    contato?: boolean
    statusDemanda?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    veiculoId?: boolean
    secretariasId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    veiculo?: boolean | Demandas$veiculoArgs<ExtArgs>
    secretarias?: boolean | Demandas$secretariasArgs<ExtArgs>
  }, ExtArgs["result"]["demandas"]>

  export type DemandasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailSolicitante?: boolean
    demandaDetalhe?: boolean
    pessoaSolicitante?: boolean
    secretariaSolicitante?: boolean
    destino?: boolean
    dataHoraIda?: boolean
    dataHoraVolta?: boolean
    origem?: boolean
    contato?: boolean
    statusDemanda?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    veiculoId?: boolean
    secretariasId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    veiculo?: boolean | Demandas$veiculoArgs<ExtArgs>
    secretarias?: boolean | Demandas$secretariasArgs<ExtArgs>
  }, ExtArgs["result"]["demandas"]>

  export type DemandasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailSolicitante?: boolean
    demandaDetalhe?: boolean
    pessoaSolicitante?: boolean
    secretariaSolicitante?: boolean
    destino?: boolean
    dataHoraIda?: boolean
    dataHoraVolta?: boolean
    origem?: boolean
    contato?: boolean
    statusDemanda?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    veiculoId?: boolean
    secretariasId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    veiculo?: boolean | Demandas$veiculoArgs<ExtArgs>
    secretarias?: boolean | Demandas$secretariasArgs<ExtArgs>
  }, ExtArgs["result"]["demandas"]>

  export type DemandasSelectScalar = {
    id?: boolean
    emailSolicitante?: boolean
    demandaDetalhe?: boolean
    pessoaSolicitante?: boolean
    secretariaSolicitante?: boolean
    destino?: boolean
    dataHoraIda?: boolean
    dataHoraVolta?: boolean
    origem?: boolean
    contato?: boolean
    statusDemanda?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    veiculoId?: boolean
    secretariasId?: boolean
  }

  export type DemandasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "emailSolicitante" | "demandaDetalhe" | "pessoaSolicitante" | "secretariaSolicitante" | "destino" | "dataHoraIda" | "dataHoraVolta" | "origem" | "contato" | "statusDemanda" | "createdAt" | "updatedAt" | "userId" | "veiculoId" | "secretariasId", ExtArgs["result"]["demandas"]>
  export type DemandasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    veiculo?: boolean | Demandas$veiculoArgs<ExtArgs>
    secretarias?: boolean | Demandas$secretariasArgs<ExtArgs>
  }
  export type DemandasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    veiculo?: boolean | Demandas$veiculoArgs<ExtArgs>
    secretarias?: boolean | Demandas$secretariasArgs<ExtArgs>
  }
  export type DemandasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    veiculo?: boolean | Demandas$veiculoArgs<ExtArgs>
    secretarias?: boolean | Demandas$secretariasArgs<ExtArgs>
  }

  export type $DemandasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Demandas"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      veiculo: Prisma.$VeiculosPayload<ExtArgs> | null
      secretarias: Prisma.$SecretariasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      emailSolicitante: string
      demandaDetalhe: string | null
      pessoaSolicitante: string
      secretariaSolicitante: string
      destino: string
      dataHoraIda: string | null
      dataHoraVolta: string | null
      origem: string
      contato: string
      statusDemanda: string
      createdAt: Date
      updatedAt: Date
      userId: string
      veiculoId: string | null
      secretariasId: string | null
    }, ExtArgs["result"]["demandas"]>
    composites: {}
  }

  type DemandasGetPayload<S extends boolean | null | undefined | DemandasDefaultArgs> = $Result.GetResult<Prisma.$DemandasPayload, S>

  type DemandasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DemandasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemandasCountAggregateInputType | true
    }

  export interface DemandasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Demandas'], meta: { name: 'Demandas' } }
    /**
     * Find zero or one Demandas that matches the filter.
     * @param {DemandasFindUniqueArgs} args - Arguments to find a Demandas
     * @example
     * // Get one Demandas
     * const demandas = await prisma.demandas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DemandasFindUniqueArgs>(args: SelectSubset<T, DemandasFindUniqueArgs<ExtArgs>>): Prisma__DemandasClient<$Result.GetResult<Prisma.$DemandasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Demandas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DemandasFindUniqueOrThrowArgs} args - Arguments to find a Demandas
     * @example
     * // Get one Demandas
     * const demandas = await prisma.demandas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DemandasFindUniqueOrThrowArgs>(args: SelectSubset<T, DemandasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DemandasClient<$Result.GetResult<Prisma.$DemandasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demandas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandasFindFirstArgs} args - Arguments to find a Demandas
     * @example
     * // Get one Demandas
     * const demandas = await prisma.demandas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DemandasFindFirstArgs>(args?: SelectSubset<T, DemandasFindFirstArgs<ExtArgs>>): Prisma__DemandasClient<$Result.GetResult<Prisma.$DemandasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demandas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandasFindFirstOrThrowArgs} args - Arguments to find a Demandas
     * @example
     * // Get one Demandas
     * const demandas = await prisma.demandas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DemandasFindFirstOrThrowArgs>(args?: SelectSubset<T, DemandasFindFirstOrThrowArgs<ExtArgs>>): Prisma__DemandasClient<$Result.GetResult<Prisma.$DemandasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Demandas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Demandas
     * const demandas = await prisma.demandas.findMany()
     * 
     * // Get first 10 Demandas
     * const demandas = await prisma.demandas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demandasWithIdOnly = await prisma.demandas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DemandasFindManyArgs>(args?: SelectSubset<T, DemandasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Demandas.
     * @param {DemandasCreateArgs} args - Arguments to create a Demandas.
     * @example
     * // Create one Demandas
     * const Demandas = await prisma.demandas.create({
     *   data: {
     *     // ... data to create a Demandas
     *   }
     * })
     * 
     */
    create<T extends DemandasCreateArgs>(args: SelectSubset<T, DemandasCreateArgs<ExtArgs>>): Prisma__DemandasClient<$Result.GetResult<Prisma.$DemandasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Demandas.
     * @param {DemandasCreateManyArgs} args - Arguments to create many Demandas.
     * @example
     * // Create many Demandas
     * const demandas = await prisma.demandas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DemandasCreateManyArgs>(args?: SelectSubset<T, DemandasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Demandas and returns the data saved in the database.
     * @param {DemandasCreateManyAndReturnArgs} args - Arguments to create many Demandas.
     * @example
     * // Create many Demandas
     * const demandas = await prisma.demandas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Demandas and only return the `id`
     * const demandasWithIdOnly = await prisma.demandas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DemandasCreateManyAndReturnArgs>(args?: SelectSubset<T, DemandasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Demandas.
     * @param {DemandasDeleteArgs} args - Arguments to delete one Demandas.
     * @example
     * // Delete one Demandas
     * const Demandas = await prisma.demandas.delete({
     *   where: {
     *     // ... filter to delete one Demandas
     *   }
     * })
     * 
     */
    delete<T extends DemandasDeleteArgs>(args: SelectSubset<T, DemandasDeleteArgs<ExtArgs>>): Prisma__DemandasClient<$Result.GetResult<Prisma.$DemandasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Demandas.
     * @param {DemandasUpdateArgs} args - Arguments to update one Demandas.
     * @example
     * // Update one Demandas
     * const demandas = await prisma.demandas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DemandasUpdateArgs>(args: SelectSubset<T, DemandasUpdateArgs<ExtArgs>>): Prisma__DemandasClient<$Result.GetResult<Prisma.$DemandasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Demandas.
     * @param {DemandasDeleteManyArgs} args - Arguments to filter Demandas to delete.
     * @example
     * // Delete a few Demandas
     * const { count } = await prisma.demandas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DemandasDeleteManyArgs>(args?: SelectSubset<T, DemandasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Demandas
     * const demandas = await prisma.demandas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DemandasUpdateManyArgs>(args: SelectSubset<T, DemandasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demandas and returns the data updated in the database.
     * @param {DemandasUpdateManyAndReturnArgs} args - Arguments to update many Demandas.
     * @example
     * // Update many Demandas
     * const demandas = await prisma.demandas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Demandas and only return the `id`
     * const demandasWithIdOnly = await prisma.demandas.updateManyAndReturn({
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
    updateManyAndReturn<T extends DemandasUpdateManyAndReturnArgs>(args: SelectSubset<T, DemandasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Demandas.
     * @param {DemandasUpsertArgs} args - Arguments to update or create a Demandas.
     * @example
     * // Update or create a Demandas
     * const demandas = await prisma.demandas.upsert({
     *   create: {
     *     // ... data to create a Demandas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Demandas we want to update
     *   }
     * })
     */
    upsert<T extends DemandasUpsertArgs>(args: SelectSubset<T, DemandasUpsertArgs<ExtArgs>>): Prisma__DemandasClient<$Result.GetResult<Prisma.$DemandasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Demandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandasCountArgs} args - Arguments to filter Demandas to count.
     * @example
     * // Count the number of Demandas
     * const count = await prisma.demandas.count({
     *   where: {
     *     // ... the filter for the Demandas we want to count
     *   }
     * })
    **/
    count<T extends DemandasCountArgs>(
      args?: Subset<T, DemandasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemandasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Demandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DemandasAggregateArgs>(args: Subset<T, DemandasAggregateArgs>): Prisma.PrismaPromise<GetDemandasAggregateType<T>>

    /**
     * Group by Demandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandasGroupByArgs} args - Group by arguments.
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
      T extends DemandasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemandasGroupByArgs['orderBy'] }
        : { orderBy?: DemandasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DemandasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemandasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Demandas model
   */
  readonly fields: DemandasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Demandas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemandasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    veiculo<T extends Demandas$veiculoArgs<ExtArgs> = {}>(args?: Subset<T, Demandas$veiculoArgs<ExtArgs>>): Prisma__VeiculosClient<$Result.GetResult<Prisma.$VeiculosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    secretarias<T extends Demandas$secretariasArgs<ExtArgs> = {}>(args?: Subset<T, Demandas$secretariasArgs<ExtArgs>>): Prisma__SecretariasClient<$Result.GetResult<Prisma.$SecretariasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Demandas model
   */
  interface DemandasFieldRefs {
    readonly id: FieldRef<"Demandas", 'String'>
    readonly emailSolicitante: FieldRef<"Demandas", 'String'>
    readonly demandaDetalhe: FieldRef<"Demandas", 'String'>
    readonly pessoaSolicitante: FieldRef<"Demandas", 'String'>
    readonly secretariaSolicitante: FieldRef<"Demandas", 'String'>
    readonly destino: FieldRef<"Demandas", 'String'>
    readonly dataHoraIda: FieldRef<"Demandas", 'String'>
    readonly dataHoraVolta: FieldRef<"Demandas", 'String'>
    readonly origem: FieldRef<"Demandas", 'String'>
    readonly contato: FieldRef<"Demandas", 'String'>
    readonly statusDemanda: FieldRef<"Demandas", 'String'>
    readonly createdAt: FieldRef<"Demandas", 'DateTime'>
    readonly updatedAt: FieldRef<"Demandas", 'DateTime'>
    readonly userId: FieldRef<"Demandas", 'String'>
    readonly veiculoId: FieldRef<"Demandas", 'String'>
    readonly secretariasId: FieldRef<"Demandas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Demandas findUnique
   */
  export type DemandasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demandas
     */
    select?: DemandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demandas
     */
    omit?: DemandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandasInclude<ExtArgs> | null
    /**
     * Filter, which Demandas to fetch.
     */
    where: DemandasWhereUniqueInput
  }

  /**
   * Demandas findUniqueOrThrow
   */
  export type DemandasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demandas
     */
    select?: DemandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demandas
     */
    omit?: DemandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandasInclude<ExtArgs> | null
    /**
     * Filter, which Demandas to fetch.
     */
    where: DemandasWhereUniqueInput
  }

  /**
   * Demandas findFirst
   */
  export type DemandasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demandas
     */
    select?: DemandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demandas
     */
    omit?: DemandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandasInclude<ExtArgs> | null
    /**
     * Filter, which Demandas to fetch.
     */
    where?: DemandasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandas to fetch.
     */
    orderBy?: DemandasOrderByWithRelationInput | DemandasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demandas.
     */
    cursor?: DemandasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demandas.
     */
    distinct?: DemandasScalarFieldEnum | DemandasScalarFieldEnum[]
  }

  /**
   * Demandas findFirstOrThrow
   */
  export type DemandasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demandas
     */
    select?: DemandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demandas
     */
    omit?: DemandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandasInclude<ExtArgs> | null
    /**
     * Filter, which Demandas to fetch.
     */
    where?: DemandasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandas to fetch.
     */
    orderBy?: DemandasOrderByWithRelationInput | DemandasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demandas.
     */
    cursor?: DemandasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demandas.
     */
    distinct?: DemandasScalarFieldEnum | DemandasScalarFieldEnum[]
  }

  /**
   * Demandas findMany
   */
  export type DemandasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demandas
     */
    select?: DemandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demandas
     */
    omit?: DemandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandasInclude<ExtArgs> | null
    /**
     * Filter, which Demandas to fetch.
     */
    where?: DemandasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandas to fetch.
     */
    orderBy?: DemandasOrderByWithRelationInput | DemandasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Demandas.
     */
    cursor?: DemandasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandas.
     */
    skip?: number
    distinct?: DemandasScalarFieldEnum | DemandasScalarFieldEnum[]
  }

  /**
   * Demandas create
   */
  export type DemandasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demandas
     */
    select?: DemandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demandas
     */
    omit?: DemandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandasInclude<ExtArgs> | null
    /**
     * The data needed to create a Demandas.
     */
    data: XOR<DemandasCreateInput, DemandasUncheckedCreateInput>
  }

  /**
   * Demandas createMany
   */
  export type DemandasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Demandas.
     */
    data: DemandasCreateManyInput | DemandasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Demandas createManyAndReturn
   */
  export type DemandasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demandas
     */
    select?: DemandasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Demandas
     */
    omit?: DemandasOmit<ExtArgs> | null
    /**
     * The data used to create many Demandas.
     */
    data: DemandasCreateManyInput | DemandasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Demandas update
   */
  export type DemandasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demandas
     */
    select?: DemandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demandas
     */
    omit?: DemandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandasInclude<ExtArgs> | null
    /**
     * The data needed to update a Demandas.
     */
    data: XOR<DemandasUpdateInput, DemandasUncheckedUpdateInput>
    /**
     * Choose, which Demandas to update.
     */
    where: DemandasWhereUniqueInput
  }

  /**
   * Demandas updateMany
   */
  export type DemandasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Demandas.
     */
    data: XOR<DemandasUpdateManyMutationInput, DemandasUncheckedUpdateManyInput>
    /**
     * Filter which Demandas to update
     */
    where?: DemandasWhereInput
    /**
     * Limit how many Demandas to update.
     */
    limit?: number
  }

  /**
   * Demandas updateManyAndReturn
   */
  export type DemandasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demandas
     */
    select?: DemandasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Demandas
     */
    omit?: DemandasOmit<ExtArgs> | null
    /**
     * The data used to update Demandas.
     */
    data: XOR<DemandasUpdateManyMutationInput, DemandasUncheckedUpdateManyInput>
    /**
     * Filter which Demandas to update
     */
    where?: DemandasWhereInput
    /**
     * Limit how many Demandas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Demandas upsert
   */
  export type DemandasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demandas
     */
    select?: DemandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demandas
     */
    omit?: DemandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandasInclude<ExtArgs> | null
    /**
     * The filter to search for the Demandas to update in case it exists.
     */
    where: DemandasWhereUniqueInput
    /**
     * In case the Demandas found by the `where` argument doesn't exist, create a new Demandas with this data.
     */
    create: XOR<DemandasCreateInput, DemandasUncheckedCreateInput>
    /**
     * In case the Demandas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemandasUpdateInput, DemandasUncheckedUpdateInput>
  }

  /**
   * Demandas delete
   */
  export type DemandasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demandas
     */
    select?: DemandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demandas
     */
    omit?: DemandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandasInclude<ExtArgs> | null
    /**
     * Filter which Demandas to delete.
     */
    where: DemandasWhereUniqueInput
  }

  /**
   * Demandas deleteMany
   */
  export type DemandasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demandas to delete
     */
    where?: DemandasWhereInput
    /**
     * Limit how many Demandas to delete.
     */
    limit?: number
  }

  /**
   * Demandas.veiculo
   */
  export type Demandas$veiculoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculos
     */
    select?: VeiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculos
     */
    omit?: VeiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculosInclude<ExtArgs> | null
    where?: VeiculosWhereInput
  }

  /**
   * Demandas.secretarias
   */
  export type Demandas$secretariasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretarias
     */
    select?: SecretariasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretarias
     */
    omit?: SecretariasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariasInclude<ExtArgs> | null
    where?: SecretariasWhereInput
  }

  /**
   * Demandas without action
   */
  export type DemandasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demandas
     */
    select?: DemandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demandas
     */
    omit?: DemandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandasInclude<ExtArgs> | null
  }


  /**
   * Model Veiculos
   */

  export type AggregateVeiculos = {
    _count: VeiculosCountAggregateOutputType | null
    _min: VeiculosMinAggregateOutputType | null
    _max: VeiculosMaxAggregateOutputType | null
  }

  export type VeiculosMinAggregateOutputType = {
    id: string | null
    placaVeiculo: string | null
    chassiVeiculo: string | null
    renavamVeiculo: string | null
    proprietarioVeiculo: string | null
    crlvVeiculo: string | null
    userId: string | null
    secretariasId: string | null
  }

  export type VeiculosMaxAggregateOutputType = {
    id: string | null
    placaVeiculo: string | null
    chassiVeiculo: string | null
    renavamVeiculo: string | null
    proprietarioVeiculo: string | null
    crlvVeiculo: string | null
    userId: string | null
    secretariasId: string | null
  }

  export type VeiculosCountAggregateOutputType = {
    id: number
    placaVeiculo: number
    chassiVeiculo: number
    renavamVeiculo: number
    proprietarioVeiculo: number
    crlvVeiculo: number
    userId: number
    secretariasId: number
    _all: number
  }


  export type VeiculosMinAggregateInputType = {
    id?: true
    placaVeiculo?: true
    chassiVeiculo?: true
    renavamVeiculo?: true
    proprietarioVeiculo?: true
    crlvVeiculo?: true
    userId?: true
    secretariasId?: true
  }

  export type VeiculosMaxAggregateInputType = {
    id?: true
    placaVeiculo?: true
    chassiVeiculo?: true
    renavamVeiculo?: true
    proprietarioVeiculo?: true
    crlvVeiculo?: true
    userId?: true
    secretariasId?: true
  }

  export type VeiculosCountAggregateInputType = {
    id?: true
    placaVeiculo?: true
    chassiVeiculo?: true
    renavamVeiculo?: true
    proprietarioVeiculo?: true
    crlvVeiculo?: true
    userId?: true
    secretariasId?: true
    _all?: true
  }

  export type VeiculosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veiculos to aggregate.
     */
    where?: VeiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculosOrderByWithRelationInput | VeiculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Veiculos
    **/
    _count?: true | VeiculosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeiculosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeiculosMaxAggregateInputType
  }

  export type GetVeiculosAggregateType<T extends VeiculosAggregateArgs> = {
        [P in keyof T & keyof AggregateVeiculos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeiculos[P]>
      : GetScalarType<T[P], AggregateVeiculos[P]>
  }




  export type VeiculosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculosWhereInput
    orderBy?: VeiculosOrderByWithAggregationInput | VeiculosOrderByWithAggregationInput[]
    by: VeiculosScalarFieldEnum[] | VeiculosScalarFieldEnum
    having?: VeiculosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeiculosCountAggregateInputType | true
    _min?: VeiculosMinAggregateInputType
    _max?: VeiculosMaxAggregateInputType
  }

  export type VeiculosGroupByOutputType = {
    id: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    userId: string
    secretariasId: string | null
    _count: VeiculosCountAggregateOutputType | null
    _min: VeiculosMinAggregateOutputType | null
    _max: VeiculosMaxAggregateOutputType | null
  }

  type GetVeiculosGroupByPayload<T extends VeiculosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeiculosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeiculosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeiculosGroupByOutputType[P]>
            : GetScalarType<T[P], VeiculosGroupByOutputType[P]>
        }
      >
    >


  export type VeiculosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placaVeiculo?: boolean
    chassiVeiculo?: boolean
    renavamVeiculo?: boolean
    proprietarioVeiculo?: boolean
    crlvVeiculo?: boolean
    userId?: boolean
    secretariasId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    demandas?: boolean | Veiculos$demandasArgs<ExtArgs>
    secretarias?: boolean | Veiculos$secretariasArgs<ExtArgs>
    _count?: boolean | VeiculosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculos"]>

  export type VeiculosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placaVeiculo?: boolean
    chassiVeiculo?: boolean
    renavamVeiculo?: boolean
    proprietarioVeiculo?: boolean
    crlvVeiculo?: boolean
    userId?: boolean
    secretariasId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    secretarias?: boolean | Veiculos$secretariasArgs<ExtArgs>
  }, ExtArgs["result"]["veiculos"]>

  export type VeiculosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placaVeiculo?: boolean
    chassiVeiculo?: boolean
    renavamVeiculo?: boolean
    proprietarioVeiculo?: boolean
    crlvVeiculo?: boolean
    userId?: boolean
    secretariasId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    secretarias?: boolean | Veiculos$secretariasArgs<ExtArgs>
  }, ExtArgs["result"]["veiculos"]>

  export type VeiculosSelectScalar = {
    id?: boolean
    placaVeiculo?: boolean
    chassiVeiculo?: boolean
    renavamVeiculo?: boolean
    proprietarioVeiculo?: boolean
    crlvVeiculo?: boolean
    userId?: boolean
    secretariasId?: boolean
  }

  export type VeiculosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "placaVeiculo" | "chassiVeiculo" | "renavamVeiculo" | "proprietarioVeiculo" | "crlvVeiculo" | "userId" | "secretariasId", ExtArgs["result"]["veiculos"]>
  export type VeiculosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    demandas?: boolean | Veiculos$demandasArgs<ExtArgs>
    secretarias?: boolean | Veiculos$secretariasArgs<ExtArgs>
    _count?: boolean | VeiculosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VeiculosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    secretarias?: boolean | Veiculos$secretariasArgs<ExtArgs>
  }
  export type VeiculosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    secretarias?: boolean | Veiculos$secretariasArgs<ExtArgs>
  }

  export type $VeiculosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Veiculos"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      demandas: Prisma.$DemandasPayload<ExtArgs>[]
      secretarias: Prisma.$SecretariasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      placaVeiculo: string
      chassiVeiculo: string
      renavamVeiculo: string
      proprietarioVeiculo: string
      crlvVeiculo: string
      userId: string
      secretariasId: string | null
    }, ExtArgs["result"]["veiculos"]>
    composites: {}
  }

  type VeiculosGetPayload<S extends boolean | null | undefined | VeiculosDefaultArgs> = $Result.GetResult<Prisma.$VeiculosPayload, S>

  type VeiculosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VeiculosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeiculosCountAggregateInputType | true
    }

  export interface VeiculosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Veiculos'], meta: { name: 'Veiculos' } }
    /**
     * Find zero or one Veiculos that matches the filter.
     * @param {VeiculosFindUniqueArgs} args - Arguments to find a Veiculos
     * @example
     * // Get one Veiculos
     * const veiculos = await prisma.veiculos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VeiculosFindUniqueArgs>(args: SelectSubset<T, VeiculosFindUniqueArgs<ExtArgs>>): Prisma__VeiculosClient<$Result.GetResult<Prisma.$VeiculosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Veiculos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VeiculosFindUniqueOrThrowArgs} args - Arguments to find a Veiculos
     * @example
     * // Get one Veiculos
     * const veiculos = await prisma.veiculos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VeiculosFindUniqueOrThrowArgs>(args: SelectSubset<T, VeiculosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VeiculosClient<$Result.GetResult<Prisma.$VeiculosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculosFindFirstArgs} args - Arguments to find a Veiculos
     * @example
     * // Get one Veiculos
     * const veiculos = await prisma.veiculos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VeiculosFindFirstArgs>(args?: SelectSubset<T, VeiculosFindFirstArgs<ExtArgs>>): Prisma__VeiculosClient<$Result.GetResult<Prisma.$VeiculosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veiculos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculosFindFirstOrThrowArgs} args - Arguments to find a Veiculos
     * @example
     * // Get one Veiculos
     * const veiculos = await prisma.veiculos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VeiculosFindFirstOrThrowArgs>(args?: SelectSubset<T, VeiculosFindFirstOrThrowArgs<ExtArgs>>): Prisma__VeiculosClient<$Result.GetResult<Prisma.$VeiculosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Veiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veiculos
     * const veiculos = await prisma.veiculos.findMany()
     * 
     * // Get first 10 Veiculos
     * const veiculos = await prisma.veiculos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veiculosWithIdOnly = await prisma.veiculos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VeiculosFindManyArgs>(args?: SelectSubset<T, VeiculosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Veiculos.
     * @param {VeiculosCreateArgs} args - Arguments to create a Veiculos.
     * @example
     * // Create one Veiculos
     * const Veiculos = await prisma.veiculos.create({
     *   data: {
     *     // ... data to create a Veiculos
     *   }
     * })
     * 
     */
    create<T extends VeiculosCreateArgs>(args: SelectSubset<T, VeiculosCreateArgs<ExtArgs>>): Prisma__VeiculosClient<$Result.GetResult<Prisma.$VeiculosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Veiculos.
     * @param {VeiculosCreateManyArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculos = await prisma.veiculos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VeiculosCreateManyArgs>(args?: SelectSubset<T, VeiculosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Veiculos and returns the data saved in the database.
     * @param {VeiculosCreateManyAndReturnArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculos = await prisma.veiculos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Veiculos and only return the `id`
     * const veiculosWithIdOnly = await prisma.veiculos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VeiculosCreateManyAndReturnArgs>(args?: SelectSubset<T, VeiculosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Veiculos.
     * @param {VeiculosDeleteArgs} args - Arguments to delete one Veiculos.
     * @example
     * // Delete one Veiculos
     * const Veiculos = await prisma.veiculos.delete({
     *   where: {
     *     // ... filter to delete one Veiculos
     *   }
     * })
     * 
     */
    delete<T extends VeiculosDeleteArgs>(args: SelectSubset<T, VeiculosDeleteArgs<ExtArgs>>): Prisma__VeiculosClient<$Result.GetResult<Prisma.$VeiculosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Veiculos.
     * @param {VeiculosUpdateArgs} args - Arguments to update one Veiculos.
     * @example
     * // Update one Veiculos
     * const veiculos = await prisma.veiculos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VeiculosUpdateArgs>(args: SelectSubset<T, VeiculosUpdateArgs<ExtArgs>>): Prisma__VeiculosClient<$Result.GetResult<Prisma.$VeiculosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Veiculos.
     * @param {VeiculosDeleteManyArgs} args - Arguments to filter Veiculos to delete.
     * @example
     * // Delete a few Veiculos
     * const { count } = await prisma.veiculos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VeiculosDeleteManyArgs>(args?: SelectSubset<T, VeiculosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veiculos
     * const veiculos = await prisma.veiculos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VeiculosUpdateManyArgs>(args: SelectSubset<T, VeiculosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos and returns the data updated in the database.
     * @param {VeiculosUpdateManyAndReturnArgs} args - Arguments to update many Veiculos.
     * @example
     * // Update many Veiculos
     * const veiculos = await prisma.veiculos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Veiculos and only return the `id`
     * const veiculosWithIdOnly = await prisma.veiculos.updateManyAndReturn({
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
    updateManyAndReturn<T extends VeiculosUpdateManyAndReturnArgs>(args: SelectSubset<T, VeiculosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Veiculos.
     * @param {VeiculosUpsertArgs} args - Arguments to update or create a Veiculos.
     * @example
     * // Update or create a Veiculos
     * const veiculos = await prisma.veiculos.upsert({
     *   create: {
     *     // ... data to create a Veiculos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veiculos we want to update
     *   }
     * })
     */
    upsert<T extends VeiculosUpsertArgs>(args: SelectSubset<T, VeiculosUpsertArgs<ExtArgs>>): Prisma__VeiculosClient<$Result.GetResult<Prisma.$VeiculosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculosCountArgs} args - Arguments to filter Veiculos to count.
     * @example
     * // Count the number of Veiculos
     * const count = await prisma.veiculos.count({
     *   where: {
     *     // ... the filter for the Veiculos we want to count
     *   }
     * })
    **/
    count<T extends VeiculosCountArgs>(
      args?: Subset<T, VeiculosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeiculosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VeiculosAggregateArgs>(args: Subset<T, VeiculosAggregateArgs>): Prisma.PrismaPromise<GetVeiculosAggregateType<T>>

    /**
     * Group by Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculosGroupByArgs} args - Group by arguments.
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
      T extends VeiculosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeiculosGroupByArgs['orderBy'] }
        : { orderBy?: VeiculosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VeiculosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeiculosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Veiculos model
   */
  readonly fields: VeiculosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Veiculos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeiculosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    demandas<T extends Veiculos$demandasArgs<ExtArgs> = {}>(args?: Subset<T, Veiculos$demandasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    secretarias<T extends Veiculos$secretariasArgs<ExtArgs> = {}>(args?: Subset<T, Veiculos$secretariasArgs<ExtArgs>>): Prisma__SecretariasClient<$Result.GetResult<Prisma.$SecretariasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Veiculos model
   */
  interface VeiculosFieldRefs {
    readonly id: FieldRef<"Veiculos", 'String'>
    readonly placaVeiculo: FieldRef<"Veiculos", 'String'>
    readonly chassiVeiculo: FieldRef<"Veiculos", 'String'>
    readonly renavamVeiculo: FieldRef<"Veiculos", 'String'>
    readonly proprietarioVeiculo: FieldRef<"Veiculos", 'String'>
    readonly crlvVeiculo: FieldRef<"Veiculos", 'String'>
    readonly userId: FieldRef<"Veiculos", 'String'>
    readonly secretariasId: FieldRef<"Veiculos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Veiculos findUnique
   */
  export type VeiculosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculos
     */
    select?: VeiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculos
     */
    omit?: VeiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculosInclude<ExtArgs> | null
    /**
     * Filter, which Veiculos to fetch.
     */
    where: VeiculosWhereUniqueInput
  }

  /**
   * Veiculos findUniqueOrThrow
   */
  export type VeiculosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculos
     */
    select?: VeiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculos
     */
    omit?: VeiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculosInclude<ExtArgs> | null
    /**
     * Filter, which Veiculos to fetch.
     */
    where: VeiculosWhereUniqueInput
  }

  /**
   * Veiculos findFirst
   */
  export type VeiculosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculos
     */
    select?: VeiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculos
     */
    omit?: VeiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculosInclude<ExtArgs> | null
    /**
     * Filter, which Veiculos to fetch.
     */
    where?: VeiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculosOrderByWithRelationInput | VeiculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veiculos.
     */
    cursor?: VeiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veiculos.
     */
    distinct?: VeiculosScalarFieldEnum | VeiculosScalarFieldEnum[]
  }

  /**
   * Veiculos findFirstOrThrow
   */
  export type VeiculosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculos
     */
    select?: VeiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculos
     */
    omit?: VeiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculosInclude<ExtArgs> | null
    /**
     * Filter, which Veiculos to fetch.
     */
    where?: VeiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculosOrderByWithRelationInput | VeiculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veiculos.
     */
    cursor?: VeiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veiculos.
     */
    distinct?: VeiculosScalarFieldEnum | VeiculosScalarFieldEnum[]
  }

  /**
   * Veiculos findMany
   */
  export type VeiculosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculos
     */
    select?: VeiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculos
     */
    omit?: VeiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculosInclude<ExtArgs> | null
    /**
     * Filter, which Veiculos to fetch.
     */
    where?: VeiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculosOrderByWithRelationInput | VeiculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Veiculos.
     */
    cursor?: VeiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    distinct?: VeiculosScalarFieldEnum | VeiculosScalarFieldEnum[]
  }

  /**
   * Veiculos create
   */
  export type VeiculosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculos
     */
    select?: VeiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculos
     */
    omit?: VeiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculosInclude<ExtArgs> | null
    /**
     * The data needed to create a Veiculos.
     */
    data: XOR<VeiculosCreateInput, VeiculosUncheckedCreateInput>
  }

  /**
   * Veiculos createMany
   */
  export type VeiculosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Veiculos.
     */
    data: VeiculosCreateManyInput | VeiculosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Veiculos createManyAndReturn
   */
  export type VeiculosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculos
     */
    select?: VeiculosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculos
     */
    omit?: VeiculosOmit<ExtArgs> | null
    /**
     * The data used to create many Veiculos.
     */
    data: VeiculosCreateManyInput | VeiculosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Veiculos update
   */
  export type VeiculosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculos
     */
    select?: VeiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculos
     */
    omit?: VeiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculosInclude<ExtArgs> | null
    /**
     * The data needed to update a Veiculos.
     */
    data: XOR<VeiculosUpdateInput, VeiculosUncheckedUpdateInput>
    /**
     * Choose, which Veiculos to update.
     */
    where: VeiculosWhereUniqueInput
  }

  /**
   * Veiculos updateMany
   */
  export type VeiculosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Veiculos.
     */
    data: XOR<VeiculosUpdateManyMutationInput, VeiculosUncheckedUpdateManyInput>
    /**
     * Filter which Veiculos to update
     */
    where?: VeiculosWhereInput
    /**
     * Limit how many Veiculos to update.
     */
    limit?: number
  }

  /**
   * Veiculos updateManyAndReturn
   */
  export type VeiculosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculos
     */
    select?: VeiculosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculos
     */
    omit?: VeiculosOmit<ExtArgs> | null
    /**
     * The data used to update Veiculos.
     */
    data: XOR<VeiculosUpdateManyMutationInput, VeiculosUncheckedUpdateManyInput>
    /**
     * Filter which Veiculos to update
     */
    where?: VeiculosWhereInput
    /**
     * Limit how many Veiculos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Veiculos upsert
   */
  export type VeiculosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculos
     */
    select?: VeiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculos
     */
    omit?: VeiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculosInclude<ExtArgs> | null
    /**
     * The filter to search for the Veiculos to update in case it exists.
     */
    where: VeiculosWhereUniqueInput
    /**
     * In case the Veiculos found by the `where` argument doesn't exist, create a new Veiculos with this data.
     */
    create: XOR<VeiculosCreateInput, VeiculosUncheckedCreateInput>
    /**
     * In case the Veiculos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeiculosUpdateInput, VeiculosUncheckedUpdateInput>
  }

  /**
   * Veiculos delete
   */
  export type VeiculosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculos
     */
    select?: VeiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculos
     */
    omit?: VeiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculosInclude<ExtArgs> | null
    /**
     * Filter which Veiculos to delete.
     */
    where: VeiculosWhereUniqueInput
  }

  /**
   * Veiculos deleteMany
   */
  export type VeiculosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veiculos to delete
     */
    where?: VeiculosWhereInput
    /**
     * Limit how many Veiculos to delete.
     */
    limit?: number
  }

  /**
   * Veiculos.demandas
   */
  export type Veiculos$demandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demandas
     */
    select?: DemandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demandas
     */
    omit?: DemandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandasInclude<ExtArgs> | null
    where?: DemandasWhereInput
    orderBy?: DemandasOrderByWithRelationInput | DemandasOrderByWithRelationInput[]
    cursor?: DemandasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandasScalarFieldEnum | DemandasScalarFieldEnum[]
  }

  /**
   * Veiculos.secretarias
   */
  export type Veiculos$secretariasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretarias
     */
    select?: SecretariasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretarias
     */
    omit?: SecretariasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariasInclude<ExtArgs> | null
    where?: SecretariasWhereInput
  }

  /**
   * Veiculos without action
   */
  export type VeiculosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculos
     */
    select?: VeiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculos
     */
    omit?: VeiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculosInclude<ExtArgs> | null
  }


  /**
   * Model Secretarias
   */

  export type AggregateSecretarias = {
    _count: SecretariasCountAggregateOutputType | null
    _min: SecretariasMinAggregateOutputType | null
    _max: SecretariasMaxAggregateOutputType | null
  }

  export type SecretariasMinAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type SecretariasMaxAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type SecretariasCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type SecretariasMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type SecretariasMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type SecretariasCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type SecretariasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Secretarias to aggregate.
     */
    where?: SecretariasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariasOrderByWithRelationInput | SecretariasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecretariasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Secretarias
    **/
    _count?: true | SecretariasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecretariasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecretariasMaxAggregateInputType
  }

  export type GetSecretariasAggregateType<T extends SecretariasAggregateArgs> = {
        [P in keyof T & keyof AggregateSecretarias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecretarias[P]>
      : GetScalarType<T[P], AggregateSecretarias[P]>
  }




  export type SecretariasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecretariasWhereInput
    orderBy?: SecretariasOrderByWithAggregationInput | SecretariasOrderByWithAggregationInput[]
    by: SecretariasScalarFieldEnum[] | SecretariasScalarFieldEnum
    having?: SecretariasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecretariasCountAggregateInputType | true
    _min?: SecretariasMinAggregateInputType
    _max?: SecretariasMaxAggregateInputType
  }

  export type SecretariasGroupByOutputType = {
    id: string
    nome: string
    _count: SecretariasCountAggregateOutputType | null
    _min: SecretariasMinAggregateOutputType | null
    _max: SecretariasMaxAggregateOutputType | null
  }

  type GetSecretariasGroupByPayload<T extends SecretariasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecretariasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecretariasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecretariasGroupByOutputType[P]>
            : GetScalarType<T[P], SecretariasGroupByOutputType[P]>
        }
      >
    >


  export type SecretariasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    Veiculos?: boolean | Secretarias$VeiculosArgs<ExtArgs>
    Demandas?: boolean | Secretarias$DemandasArgs<ExtArgs>
    Users?: boolean | Secretarias$UsersArgs<ExtArgs>
    _count?: boolean | SecretariasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secretarias"]>

  export type SecretariasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["secretarias"]>

  export type SecretariasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["secretarias"]>

  export type SecretariasSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type SecretariasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["secretarias"]>
  export type SecretariasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Veiculos?: boolean | Secretarias$VeiculosArgs<ExtArgs>
    Demandas?: boolean | Secretarias$DemandasArgs<ExtArgs>
    Users?: boolean | Secretarias$UsersArgs<ExtArgs>
    _count?: boolean | SecretariasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SecretariasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SecretariasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SecretariasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Secretarias"
    objects: {
      Veiculos: Prisma.$VeiculosPayload<ExtArgs>[]
      Demandas: Prisma.$DemandasPayload<ExtArgs>[]
      Users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
    }, ExtArgs["result"]["secretarias"]>
    composites: {}
  }

  type SecretariasGetPayload<S extends boolean | null | undefined | SecretariasDefaultArgs> = $Result.GetResult<Prisma.$SecretariasPayload, S>

  type SecretariasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecretariasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecretariasCountAggregateInputType | true
    }

  export interface SecretariasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Secretarias'], meta: { name: 'Secretarias' } }
    /**
     * Find zero or one Secretarias that matches the filter.
     * @param {SecretariasFindUniqueArgs} args - Arguments to find a Secretarias
     * @example
     * // Get one Secretarias
     * const secretarias = await prisma.secretarias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecretariasFindUniqueArgs>(args: SelectSubset<T, SecretariasFindUniqueArgs<ExtArgs>>): Prisma__SecretariasClient<$Result.GetResult<Prisma.$SecretariasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Secretarias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecretariasFindUniqueOrThrowArgs} args - Arguments to find a Secretarias
     * @example
     * // Get one Secretarias
     * const secretarias = await prisma.secretarias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecretariasFindUniqueOrThrowArgs>(args: SelectSubset<T, SecretariasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecretariasClient<$Result.GetResult<Prisma.$SecretariasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Secretarias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariasFindFirstArgs} args - Arguments to find a Secretarias
     * @example
     * // Get one Secretarias
     * const secretarias = await prisma.secretarias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecretariasFindFirstArgs>(args?: SelectSubset<T, SecretariasFindFirstArgs<ExtArgs>>): Prisma__SecretariasClient<$Result.GetResult<Prisma.$SecretariasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Secretarias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariasFindFirstOrThrowArgs} args - Arguments to find a Secretarias
     * @example
     * // Get one Secretarias
     * const secretarias = await prisma.secretarias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecretariasFindFirstOrThrowArgs>(args?: SelectSubset<T, SecretariasFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecretariasClient<$Result.GetResult<Prisma.$SecretariasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Secretarias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Secretarias
     * const secretarias = await prisma.secretarias.findMany()
     * 
     * // Get first 10 Secretarias
     * const secretarias = await prisma.secretarias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const secretariasWithIdOnly = await prisma.secretarias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecretariasFindManyArgs>(args?: SelectSubset<T, SecretariasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretariasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Secretarias.
     * @param {SecretariasCreateArgs} args - Arguments to create a Secretarias.
     * @example
     * // Create one Secretarias
     * const Secretarias = await prisma.secretarias.create({
     *   data: {
     *     // ... data to create a Secretarias
     *   }
     * })
     * 
     */
    create<T extends SecretariasCreateArgs>(args: SelectSubset<T, SecretariasCreateArgs<ExtArgs>>): Prisma__SecretariasClient<$Result.GetResult<Prisma.$SecretariasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Secretarias.
     * @param {SecretariasCreateManyArgs} args - Arguments to create many Secretarias.
     * @example
     * // Create many Secretarias
     * const secretarias = await prisma.secretarias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecretariasCreateManyArgs>(args?: SelectSubset<T, SecretariasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Secretarias and returns the data saved in the database.
     * @param {SecretariasCreateManyAndReturnArgs} args - Arguments to create many Secretarias.
     * @example
     * // Create many Secretarias
     * const secretarias = await prisma.secretarias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Secretarias and only return the `id`
     * const secretariasWithIdOnly = await prisma.secretarias.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecretariasCreateManyAndReturnArgs>(args?: SelectSubset<T, SecretariasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretariasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Secretarias.
     * @param {SecretariasDeleteArgs} args - Arguments to delete one Secretarias.
     * @example
     * // Delete one Secretarias
     * const Secretarias = await prisma.secretarias.delete({
     *   where: {
     *     // ... filter to delete one Secretarias
     *   }
     * })
     * 
     */
    delete<T extends SecretariasDeleteArgs>(args: SelectSubset<T, SecretariasDeleteArgs<ExtArgs>>): Prisma__SecretariasClient<$Result.GetResult<Prisma.$SecretariasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Secretarias.
     * @param {SecretariasUpdateArgs} args - Arguments to update one Secretarias.
     * @example
     * // Update one Secretarias
     * const secretarias = await prisma.secretarias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecretariasUpdateArgs>(args: SelectSubset<T, SecretariasUpdateArgs<ExtArgs>>): Prisma__SecretariasClient<$Result.GetResult<Prisma.$SecretariasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Secretarias.
     * @param {SecretariasDeleteManyArgs} args - Arguments to filter Secretarias to delete.
     * @example
     * // Delete a few Secretarias
     * const { count } = await prisma.secretarias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecretariasDeleteManyArgs>(args?: SelectSubset<T, SecretariasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secretarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Secretarias
     * const secretarias = await prisma.secretarias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecretariasUpdateManyArgs>(args: SelectSubset<T, SecretariasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secretarias and returns the data updated in the database.
     * @param {SecretariasUpdateManyAndReturnArgs} args - Arguments to update many Secretarias.
     * @example
     * // Update many Secretarias
     * const secretarias = await prisma.secretarias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Secretarias and only return the `id`
     * const secretariasWithIdOnly = await prisma.secretarias.updateManyAndReturn({
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
    updateManyAndReturn<T extends SecretariasUpdateManyAndReturnArgs>(args: SelectSubset<T, SecretariasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretariasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Secretarias.
     * @param {SecretariasUpsertArgs} args - Arguments to update or create a Secretarias.
     * @example
     * // Update or create a Secretarias
     * const secretarias = await prisma.secretarias.upsert({
     *   create: {
     *     // ... data to create a Secretarias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Secretarias we want to update
     *   }
     * })
     */
    upsert<T extends SecretariasUpsertArgs>(args: SelectSubset<T, SecretariasUpsertArgs<ExtArgs>>): Prisma__SecretariasClient<$Result.GetResult<Prisma.$SecretariasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Secretarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariasCountArgs} args - Arguments to filter Secretarias to count.
     * @example
     * // Count the number of Secretarias
     * const count = await prisma.secretarias.count({
     *   where: {
     *     // ... the filter for the Secretarias we want to count
     *   }
     * })
    **/
    count<T extends SecretariasCountArgs>(
      args?: Subset<T, SecretariasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecretariasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Secretarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecretariasAggregateArgs>(args: Subset<T, SecretariasAggregateArgs>): Prisma.PrismaPromise<GetSecretariasAggregateType<T>>

    /**
     * Group by Secretarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariasGroupByArgs} args - Group by arguments.
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
      T extends SecretariasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecretariasGroupByArgs['orderBy'] }
        : { orderBy?: SecretariasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SecretariasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecretariasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Secretarias model
   */
  readonly fields: SecretariasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Secretarias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecretariasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Veiculos<T extends Secretarias$VeiculosArgs<ExtArgs> = {}>(args?: Subset<T, Secretarias$VeiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Demandas<T extends Secretarias$DemandasArgs<ExtArgs> = {}>(args?: Subset<T, Secretarias$DemandasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Users<T extends Secretarias$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Secretarias$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Secretarias model
   */
  interface SecretariasFieldRefs {
    readonly id: FieldRef<"Secretarias", 'String'>
    readonly nome: FieldRef<"Secretarias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Secretarias findUnique
   */
  export type SecretariasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretarias
     */
    select?: SecretariasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretarias
     */
    omit?: SecretariasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariasInclude<ExtArgs> | null
    /**
     * Filter, which Secretarias to fetch.
     */
    where: SecretariasWhereUniqueInput
  }

  /**
   * Secretarias findUniqueOrThrow
   */
  export type SecretariasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretarias
     */
    select?: SecretariasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretarias
     */
    omit?: SecretariasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariasInclude<ExtArgs> | null
    /**
     * Filter, which Secretarias to fetch.
     */
    where: SecretariasWhereUniqueInput
  }

  /**
   * Secretarias findFirst
   */
  export type SecretariasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretarias
     */
    select?: SecretariasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretarias
     */
    omit?: SecretariasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariasInclude<ExtArgs> | null
    /**
     * Filter, which Secretarias to fetch.
     */
    where?: SecretariasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariasOrderByWithRelationInput | SecretariasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Secretarias.
     */
    cursor?: SecretariasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Secretarias.
     */
    distinct?: SecretariasScalarFieldEnum | SecretariasScalarFieldEnum[]
  }

  /**
   * Secretarias findFirstOrThrow
   */
  export type SecretariasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretarias
     */
    select?: SecretariasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretarias
     */
    omit?: SecretariasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariasInclude<ExtArgs> | null
    /**
     * Filter, which Secretarias to fetch.
     */
    where?: SecretariasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariasOrderByWithRelationInput | SecretariasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Secretarias.
     */
    cursor?: SecretariasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Secretarias.
     */
    distinct?: SecretariasScalarFieldEnum | SecretariasScalarFieldEnum[]
  }

  /**
   * Secretarias findMany
   */
  export type SecretariasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretarias
     */
    select?: SecretariasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretarias
     */
    omit?: SecretariasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariasInclude<ExtArgs> | null
    /**
     * Filter, which Secretarias to fetch.
     */
    where?: SecretariasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariasOrderByWithRelationInput | SecretariasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Secretarias.
     */
    cursor?: SecretariasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarias.
     */
    skip?: number
    distinct?: SecretariasScalarFieldEnum | SecretariasScalarFieldEnum[]
  }

  /**
   * Secretarias create
   */
  export type SecretariasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretarias
     */
    select?: SecretariasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretarias
     */
    omit?: SecretariasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariasInclude<ExtArgs> | null
    /**
     * The data needed to create a Secretarias.
     */
    data: XOR<SecretariasCreateInput, SecretariasUncheckedCreateInput>
  }

  /**
   * Secretarias createMany
   */
  export type SecretariasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Secretarias.
     */
    data: SecretariasCreateManyInput | SecretariasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Secretarias createManyAndReturn
   */
  export type SecretariasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretarias
     */
    select?: SecretariasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Secretarias
     */
    omit?: SecretariasOmit<ExtArgs> | null
    /**
     * The data used to create many Secretarias.
     */
    data: SecretariasCreateManyInput | SecretariasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Secretarias update
   */
  export type SecretariasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretarias
     */
    select?: SecretariasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretarias
     */
    omit?: SecretariasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariasInclude<ExtArgs> | null
    /**
     * The data needed to update a Secretarias.
     */
    data: XOR<SecretariasUpdateInput, SecretariasUncheckedUpdateInput>
    /**
     * Choose, which Secretarias to update.
     */
    where: SecretariasWhereUniqueInput
  }

  /**
   * Secretarias updateMany
   */
  export type SecretariasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Secretarias.
     */
    data: XOR<SecretariasUpdateManyMutationInput, SecretariasUncheckedUpdateManyInput>
    /**
     * Filter which Secretarias to update
     */
    where?: SecretariasWhereInput
    /**
     * Limit how many Secretarias to update.
     */
    limit?: number
  }

  /**
   * Secretarias updateManyAndReturn
   */
  export type SecretariasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretarias
     */
    select?: SecretariasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Secretarias
     */
    omit?: SecretariasOmit<ExtArgs> | null
    /**
     * The data used to update Secretarias.
     */
    data: XOR<SecretariasUpdateManyMutationInput, SecretariasUncheckedUpdateManyInput>
    /**
     * Filter which Secretarias to update
     */
    where?: SecretariasWhereInput
    /**
     * Limit how many Secretarias to update.
     */
    limit?: number
  }

  /**
   * Secretarias upsert
   */
  export type SecretariasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretarias
     */
    select?: SecretariasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretarias
     */
    omit?: SecretariasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariasInclude<ExtArgs> | null
    /**
     * The filter to search for the Secretarias to update in case it exists.
     */
    where: SecretariasWhereUniqueInput
    /**
     * In case the Secretarias found by the `where` argument doesn't exist, create a new Secretarias with this data.
     */
    create: XOR<SecretariasCreateInput, SecretariasUncheckedCreateInput>
    /**
     * In case the Secretarias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecretariasUpdateInput, SecretariasUncheckedUpdateInput>
  }

  /**
   * Secretarias delete
   */
  export type SecretariasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretarias
     */
    select?: SecretariasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretarias
     */
    omit?: SecretariasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariasInclude<ExtArgs> | null
    /**
     * Filter which Secretarias to delete.
     */
    where: SecretariasWhereUniqueInput
  }

  /**
   * Secretarias deleteMany
   */
  export type SecretariasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Secretarias to delete
     */
    where?: SecretariasWhereInput
    /**
     * Limit how many Secretarias to delete.
     */
    limit?: number
  }

  /**
   * Secretarias.Veiculos
   */
  export type Secretarias$VeiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculos
     */
    select?: VeiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculos
     */
    omit?: VeiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculosInclude<ExtArgs> | null
    where?: VeiculosWhereInput
    orderBy?: VeiculosOrderByWithRelationInput | VeiculosOrderByWithRelationInput[]
    cursor?: VeiculosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeiculosScalarFieldEnum | VeiculosScalarFieldEnum[]
  }

  /**
   * Secretarias.Demandas
   */
  export type Secretarias$DemandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demandas
     */
    select?: DemandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demandas
     */
    omit?: DemandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandasInclude<ExtArgs> | null
    where?: DemandasWhereInput
    orderBy?: DemandasOrderByWithRelationInput | DemandasOrderByWithRelationInput[]
    cursor?: DemandasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandasScalarFieldEnum | DemandasScalarFieldEnum[]
  }

  /**
   * Secretarias.Users
   */
  export type Secretarias$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Secretarias without action
   */
  export type SecretariasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretarias
     */
    select?: SecretariasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretarias
     */
    omit?: SecretariasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariasInclude<ExtArgs> | null
  }


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
    createdAt: Date | null
    emailVerified: boolean | null
    image: string | null
    updatedAt: Date | null
    secretariasId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    emailVerified: boolean | null
    image: string | null
    updatedAt: Date | null
    secretariasId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    emailVerified: number
    image: number
    updatedAt: number
    secretariasId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    emailVerified?: true
    image?: true
    updatedAt?: true
    secretariasId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    emailVerified?: true
    image?: true
    updatedAt?: true
    secretariasId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    emailVerified?: true
    image?: true
    updatedAt?: true
    secretariasId?: true
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
    createdAt: Date
    emailVerified: boolean
    image: string | null
    updatedAt: Date
    secretariasId: string | null
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
    createdAt?: boolean
    emailVerified?: boolean
    image?: boolean
    updatedAt?: boolean
    secretariasId?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    veiculos?: boolean | User$veiculosArgs<ExtArgs>
    demandas?: boolean | User$demandasArgs<ExtArgs>
    secretarias?: boolean | User$secretariasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    emailVerified?: boolean
    image?: boolean
    updatedAt?: boolean
    secretariasId?: boolean
    secretarias?: boolean | User$secretariasArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    emailVerified?: boolean
    image?: boolean
    updatedAt?: boolean
    secretariasId?: boolean
    secretarias?: boolean | User$secretariasArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    emailVerified?: boolean
    image?: boolean
    updatedAt?: boolean
    secretariasId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt" | "emailVerified" | "image" | "updatedAt" | "secretariasId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    veiculos?: boolean | User$veiculosArgs<ExtArgs>
    demandas?: boolean | User$demandasArgs<ExtArgs>
    secretarias?: boolean | User$secretariasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secretarias?: boolean | User$secretariasArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secretarias?: boolean | User$secretariasArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      veiculos: Prisma.$VeiculosPayload<ExtArgs>[]
      demandas: Prisma.$DemandasPayload<ExtArgs>[]
      secretarias: Prisma.$SecretariasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      createdAt: Date
      emailVerified: boolean
      image: string | null
      updatedAt: Date
      secretariasId: string | null
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
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    veiculos<T extends User$veiculosArgs<ExtArgs> = {}>(args?: Subset<T, User$veiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    demandas<T extends User$demandasArgs<ExtArgs> = {}>(args?: Subset<T, User$demandasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    secretarias<T extends User$secretariasArgs<ExtArgs> = {}>(args?: Subset<T, User$secretariasArgs<ExtArgs>>): Prisma__SecretariasClient<$Result.GetResult<Prisma.$SecretariasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly secretariasId: FieldRef<"User", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.veiculos
   */
  export type User$veiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculos
     */
    select?: VeiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculos
     */
    omit?: VeiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculosInclude<ExtArgs> | null
    where?: VeiculosWhereInput
    orderBy?: VeiculosOrderByWithRelationInput | VeiculosOrderByWithRelationInput[]
    cursor?: VeiculosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeiculosScalarFieldEnum | VeiculosScalarFieldEnum[]
  }

  /**
   * User.demandas
   */
  export type User$demandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demandas
     */
    select?: DemandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demandas
     */
    omit?: DemandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandasInclude<ExtArgs> | null
    where?: DemandasWhereInput
    orderBy?: DemandasOrderByWithRelationInput | DemandasOrderByWithRelationInput[]
    cursor?: DemandasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandasScalarFieldEnum | DemandasScalarFieldEnum[]
  }

  /**
   * User.secretarias
   */
  export type User$secretariasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretarias
     */
    select?: SecretariasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretarias
     */
    omit?: SecretariasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariasInclude<ExtArgs> | null
    where?: SecretariasWhereInput
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
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
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


  export const DemandasScalarFieldEnum: {
    id: 'id',
    emailSolicitante: 'emailSolicitante',
    demandaDetalhe: 'demandaDetalhe',
    pessoaSolicitante: 'pessoaSolicitante',
    secretariaSolicitante: 'secretariaSolicitante',
    destino: 'destino',
    dataHoraIda: 'dataHoraIda',
    dataHoraVolta: 'dataHoraVolta',
    origem: 'origem',
    contato: 'contato',
    statusDemanda: 'statusDemanda',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    veiculoId: 'veiculoId',
    secretariasId: 'secretariasId'
  };

  export type DemandasScalarFieldEnum = (typeof DemandasScalarFieldEnum)[keyof typeof DemandasScalarFieldEnum]


  export const VeiculosScalarFieldEnum: {
    id: 'id',
    placaVeiculo: 'placaVeiculo',
    chassiVeiculo: 'chassiVeiculo',
    renavamVeiculo: 'renavamVeiculo',
    proprietarioVeiculo: 'proprietarioVeiculo',
    crlvVeiculo: 'crlvVeiculo',
    userId: 'userId',
    secretariasId: 'secretariasId'
  };

  export type VeiculosScalarFieldEnum = (typeof VeiculosScalarFieldEnum)[keyof typeof VeiculosScalarFieldEnum]


  export const SecretariasScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type SecretariasScalarFieldEnum = (typeof SecretariasScalarFieldEnum)[keyof typeof SecretariasScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    emailVerified: 'emailVerified',
    image: 'image',
    updatedAt: 'updatedAt',
    secretariasId: 'secretariasId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type DemandasWhereInput = {
    AND?: DemandasWhereInput | DemandasWhereInput[]
    OR?: DemandasWhereInput[]
    NOT?: DemandasWhereInput | DemandasWhereInput[]
    id?: StringFilter<"Demandas"> | string
    emailSolicitante?: StringFilter<"Demandas"> | string
    demandaDetalhe?: StringNullableFilter<"Demandas"> | string | null
    pessoaSolicitante?: StringFilter<"Demandas"> | string
    secretariaSolicitante?: StringFilter<"Demandas"> | string
    destino?: StringFilter<"Demandas"> | string
    dataHoraIda?: StringNullableFilter<"Demandas"> | string | null
    dataHoraVolta?: StringNullableFilter<"Demandas"> | string | null
    origem?: StringFilter<"Demandas"> | string
    contato?: StringFilter<"Demandas"> | string
    statusDemanda?: StringFilter<"Demandas"> | string
    createdAt?: DateTimeFilter<"Demandas"> | Date | string
    updatedAt?: DateTimeFilter<"Demandas"> | Date | string
    userId?: StringFilter<"Demandas"> | string
    veiculoId?: StringNullableFilter<"Demandas"> | string | null
    secretariasId?: StringNullableFilter<"Demandas"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    veiculo?: XOR<VeiculosNullableScalarRelationFilter, VeiculosWhereInput> | null
    secretarias?: XOR<SecretariasNullableScalarRelationFilter, SecretariasWhereInput> | null
  }

  export type DemandasOrderByWithRelationInput = {
    id?: SortOrder
    emailSolicitante?: SortOrder
    demandaDetalhe?: SortOrderInput | SortOrder
    pessoaSolicitante?: SortOrder
    secretariaSolicitante?: SortOrder
    destino?: SortOrder
    dataHoraIda?: SortOrderInput | SortOrder
    dataHoraVolta?: SortOrderInput | SortOrder
    origem?: SortOrder
    contato?: SortOrder
    statusDemanda?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    veiculoId?: SortOrderInput | SortOrder
    secretariasId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    veiculo?: VeiculosOrderByWithRelationInput
    secretarias?: SecretariasOrderByWithRelationInput
  }

  export type DemandasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    emailSolicitante?: string
    AND?: DemandasWhereInput | DemandasWhereInput[]
    OR?: DemandasWhereInput[]
    NOT?: DemandasWhereInput | DemandasWhereInput[]
    demandaDetalhe?: StringNullableFilter<"Demandas"> | string | null
    pessoaSolicitante?: StringFilter<"Demandas"> | string
    secretariaSolicitante?: StringFilter<"Demandas"> | string
    destino?: StringFilter<"Demandas"> | string
    dataHoraIda?: StringNullableFilter<"Demandas"> | string | null
    dataHoraVolta?: StringNullableFilter<"Demandas"> | string | null
    origem?: StringFilter<"Demandas"> | string
    contato?: StringFilter<"Demandas"> | string
    statusDemanda?: StringFilter<"Demandas"> | string
    createdAt?: DateTimeFilter<"Demandas"> | Date | string
    updatedAt?: DateTimeFilter<"Demandas"> | Date | string
    userId?: StringFilter<"Demandas"> | string
    veiculoId?: StringNullableFilter<"Demandas"> | string | null
    secretariasId?: StringNullableFilter<"Demandas"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    veiculo?: XOR<VeiculosNullableScalarRelationFilter, VeiculosWhereInput> | null
    secretarias?: XOR<SecretariasNullableScalarRelationFilter, SecretariasWhereInput> | null
  }, "id" | "emailSolicitante">

  export type DemandasOrderByWithAggregationInput = {
    id?: SortOrder
    emailSolicitante?: SortOrder
    demandaDetalhe?: SortOrderInput | SortOrder
    pessoaSolicitante?: SortOrder
    secretariaSolicitante?: SortOrder
    destino?: SortOrder
    dataHoraIda?: SortOrderInput | SortOrder
    dataHoraVolta?: SortOrderInput | SortOrder
    origem?: SortOrder
    contato?: SortOrder
    statusDemanda?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    veiculoId?: SortOrderInput | SortOrder
    secretariasId?: SortOrderInput | SortOrder
    _count?: DemandasCountOrderByAggregateInput
    _max?: DemandasMaxOrderByAggregateInput
    _min?: DemandasMinOrderByAggregateInput
  }

  export type DemandasScalarWhereWithAggregatesInput = {
    AND?: DemandasScalarWhereWithAggregatesInput | DemandasScalarWhereWithAggregatesInput[]
    OR?: DemandasScalarWhereWithAggregatesInput[]
    NOT?: DemandasScalarWhereWithAggregatesInput | DemandasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Demandas"> | string
    emailSolicitante?: StringWithAggregatesFilter<"Demandas"> | string
    demandaDetalhe?: StringNullableWithAggregatesFilter<"Demandas"> | string | null
    pessoaSolicitante?: StringWithAggregatesFilter<"Demandas"> | string
    secretariaSolicitante?: StringWithAggregatesFilter<"Demandas"> | string
    destino?: StringWithAggregatesFilter<"Demandas"> | string
    dataHoraIda?: StringNullableWithAggregatesFilter<"Demandas"> | string | null
    dataHoraVolta?: StringNullableWithAggregatesFilter<"Demandas"> | string | null
    origem?: StringWithAggregatesFilter<"Demandas"> | string
    contato?: StringWithAggregatesFilter<"Demandas"> | string
    statusDemanda?: StringWithAggregatesFilter<"Demandas"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Demandas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Demandas"> | Date | string
    userId?: StringWithAggregatesFilter<"Demandas"> | string
    veiculoId?: StringNullableWithAggregatesFilter<"Demandas"> | string | null
    secretariasId?: StringNullableWithAggregatesFilter<"Demandas"> | string | null
  }

  export type VeiculosWhereInput = {
    AND?: VeiculosWhereInput | VeiculosWhereInput[]
    OR?: VeiculosWhereInput[]
    NOT?: VeiculosWhereInput | VeiculosWhereInput[]
    id?: StringFilter<"Veiculos"> | string
    placaVeiculo?: StringFilter<"Veiculos"> | string
    chassiVeiculo?: StringFilter<"Veiculos"> | string
    renavamVeiculo?: StringFilter<"Veiculos"> | string
    proprietarioVeiculo?: StringFilter<"Veiculos"> | string
    crlvVeiculo?: StringFilter<"Veiculos"> | string
    userId?: StringFilter<"Veiculos"> | string
    secretariasId?: StringNullableFilter<"Veiculos"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    demandas?: DemandasListRelationFilter
    secretarias?: XOR<SecretariasNullableScalarRelationFilter, SecretariasWhereInput> | null
  }

  export type VeiculosOrderByWithRelationInput = {
    id?: SortOrder
    placaVeiculo?: SortOrder
    chassiVeiculo?: SortOrder
    renavamVeiculo?: SortOrder
    proprietarioVeiculo?: SortOrder
    crlvVeiculo?: SortOrder
    userId?: SortOrder
    secretariasId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    demandas?: DemandasOrderByRelationAggregateInput
    secretarias?: SecretariasOrderByWithRelationInput
  }

  export type VeiculosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VeiculosWhereInput | VeiculosWhereInput[]
    OR?: VeiculosWhereInput[]
    NOT?: VeiculosWhereInput | VeiculosWhereInput[]
    placaVeiculo?: StringFilter<"Veiculos"> | string
    chassiVeiculo?: StringFilter<"Veiculos"> | string
    renavamVeiculo?: StringFilter<"Veiculos"> | string
    proprietarioVeiculo?: StringFilter<"Veiculos"> | string
    crlvVeiculo?: StringFilter<"Veiculos"> | string
    userId?: StringFilter<"Veiculos"> | string
    secretariasId?: StringNullableFilter<"Veiculos"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    demandas?: DemandasListRelationFilter
    secretarias?: XOR<SecretariasNullableScalarRelationFilter, SecretariasWhereInput> | null
  }, "id">

  export type VeiculosOrderByWithAggregationInput = {
    id?: SortOrder
    placaVeiculo?: SortOrder
    chassiVeiculo?: SortOrder
    renavamVeiculo?: SortOrder
    proprietarioVeiculo?: SortOrder
    crlvVeiculo?: SortOrder
    userId?: SortOrder
    secretariasId?: SortOrderInput | SortOrder
    _count?: VeiculosCountOrderByAggregateInput
    _max?: VeiculosMaxOrderByAggregateInput
    _min?: VeiculosMinOrderByAggregateInput
  }

  export type VeiculosScalarWhereWithAggregatesInput = {
    AND?: VeiculosScalarWhereWithAggregatesInput | VeiculosScalarWhereWithAggregatesInput[]
    OR?: VeiculosScalarWhereWithAggregatesInput[]
    NOT?: VeiculosScalarWhereWithAggregatesInput | VeiculosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Veiculos"> | string
    placaVeiculo?: StringWithAggregatesFilter<"Veiculos"> | string
    chassiVeiculo?: StringWithAggregatesFilter<"Veiculos"> | string
    renavamVeiculo?: StringWithAggregatesFilter<"Veiculos"> | string
    proprietarioVeiculo?: StringWithAggregatesFilter<"Veiculos"> | string
    crlvVeiculo?: StringWithAggregatesFilter<"Veiculos"> | string
    userId?: StringWithAggregatesFilter<"Veiculos"> | string
    secretariasId?: StringNullableWithAggregatesFilter<"Veiculos"> | string | null
  }

  export type SecretariasWhereInput = {
    AND?: SecretariasWhereInput | SecretariasWhereInput[]
    OR?: SecretariasWhereInput[]
    NOT?: SecretariasWhereInput | SecretariasWhereInput[]
    id?: StringFilter<"Secretarias"> | string
    nome?: StringFilter<"Secretarias"> | string
    Veiculos?: VeiculosListRelationFilter
    Demandas?: DemandasListRelationFilter
    Users?: UserListRelationFilter
  }

  export type SecretariasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    Veiculos?: VeiculosOrderByRelationAggregateInput
    Demandas?: DemandasOrderByRelationAggregateInput
    Users?: UserOrderByRelationAggregateInput
  }

  export type SecretariasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: SecretariasWhereInput | SecretariasWhereInput[]
    OR?: SecretariasWhereInput[]
    NOT?: SecretariasWhereInput | SecretariasWhereInput[]
    Veiculos?: VeiculosListRelationFilter
    Demandas?: DemandasListRelationFilter
    Users?: UserListRelationFilter
  }, "id" | "nome">

  export type SecretariasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: SecretariasCountOrderByAggregateInput
    _max?: SecretariasMaxOrderByAggregateInput
    _min?: SecretariasMinOrderByAggregateInput
  }

  export type SecretariasScalarWhereWithAggregatesInput = {
    AND?: SecretariasScalarWhereWithAggregatesInput | SecretariasScalarWhereWithAggregatesInput[]
    OR?: SecretariasScalarWhereWithAggregatesInput[]
    NOT?: SecretariasScalarWhereWithAggregatesInput | SecretariasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Secretarias"> | string
    nome?: StringWithAggregatesFilter<"Secretarias"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    updatedAt?: DateTimeFilter<"User"> | Date | string
    secretariasId?: StringNullableFilter<"User"> | string | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    veiculos?: VeiculosListRelationFilter
    demandas?: DemandasListRelationFilter
    secretarias?: XOR<SecretariasNullableScalarRelationFilter, SecretariasWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    secretariasId?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    veiculos?: VeiculosOrderByRelationAggregateInput
    demandas?: DemandasOrderByRelationAggregateInput
    secretarias?: SecretariasOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    updatedAt?: DateTimeFilter<"User"> | Date | string
    secretariasId?: StringNullableFilter<"User"> | string | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    veiculos?: VeiculosListRelationFilter
    demandas?: DemandasListRelationFilter
    secretarias?: XOR<SecretariasNullableScalarRelationFilter, SecretariasWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    secretariasId?: SortOrderInput | SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    secretariasId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type DemandasCreateInput = {
    id?: string
    emailSolicitante: string
    demandaDetalhe?: string | null
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda?: string | null
    dataHoraVolta?: string | null
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDemandasInput
    veiculo?: VeiculosCreateNestedOneWithoutDemandasInput
    secretarias?: SecretariasCreateNestedOneWithoutDemandasInput
  }

  export type DemandasUncheckedCreateInput = {
    id?: string
    emailSolicitante: string
    demandaDetalhe?: string | null
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda?: string | null
    dataHoraVolta?: string | null
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    veiculoId?: string | null
    secretariasId?: string | null
  }

  export type DemandasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: NullableStringFieldUpdateOperationsInput | string | null
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: NullableStringFieldUpdateOperationsInput | string | null
    dataHoraVolta?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDemandasNestedInput
    veiculo?: VeiculosUpdateOneWithoutDemandasNestedInput
    secretarias?: SecretariasUpdateOneWithoutDemandasNestedInput
  }

  export type DemandasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: NullableStringFieldUpdateOperationsInput | string | null
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: NullableStringFieldUpdateOperationsInput | string | null
    dataHoraVolta?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemandasCreateManyInput = {
    id?: string
    emailSolicitante: string
    demandaDetalhe?: string | null
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda?: string | null
    dataHoraVolta?: string | null
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    veiculoId?: string | null
    secretariasId?: string | null
  }

  export type DemandasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: NullableStringFieldUpdateOperationsInput | string | null
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: NullableStringFieldUpdateOperationsInput | string | null
    dataHoraVolta?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: NullableStringFieldUpdateOperationsInput | string | null
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: NullableStringFieldUpdateOperationsInput | string | null
    dataHoraVolta?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculosCreateInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    user: UserCreateNestedOneWithoutVeiculosInput
    demandas?: DemandasCreateNestedManyWithoutVeiculoInput
    secretarias?: SecretariasCreateNestedOneWithoutVeiculosInput
  }

  export type VeiculosUncheckedCreateInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    userId: string
    secretariasId?: string | null
    demandas?: DemandasUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVeiculosNestedInput
    demandas?: DemandasUpdateManyWithoutVeiculoNestedInput
    secretarias?: SecretariasUpdateOneWithoutVeiculosNestedInput
  }

  export type VeiculosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
    demandas?: DemandasUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculosCreateManyInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    userId: string
    secretariasId?: string | null
  }

  export type VeiculosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
  }

  export type VeiculosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SecretariasCreateInput = {
    id?: string
    nome: string
    Veiculos?: VeiculosCreateNestedManyWithoutSecretariasInput
    Demandas?: DemandasCreateNestedManyWithoutSecretariasInput
    Users?: UserCreateNestedManyWithoutSecretariasInput
  }

  export type SecretariasUncheckedCreateInput = {
    id?: string
    nome: string
    Veiculos?: VeiculosUncheckedCreateNestedManyWithoutSecretariasInput
    Demandas?: DemandasUncheckedCreateNestedManyWithoutSecretariasInput
    Users?: UserUncheckedCreateNestedManyWithoutSecretariasInput
  }

  export type SecretariasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Veiculos?: VeiculosUpdateManyWithoutSecretariasNestedInput
    Demandas?: DemandasUpdateManyWithoutSecretariasNestedInput
    Users?: UserUpdateManyWithoutSecretariasNestedInput
  }

  export type SecretariasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Veiculos?: VeiculosUncheckedUpdateManyWithoutSecretariasNestedInput
    Demandas?: DemandasUncheckedUpdateManyWithoutSecretariasNestedInput
    Users?: UserUncheckedUpdateManyWithoutSecretariasNestedInput
  }

  export type SecretariasCreateManyInput = {
    id?: string
    nome: string
  }

  export type SecretariasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type SecretariasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    veiculos?: VeiculosCreateNestedManyWithoutUserInput
    demandas?: DemandasCreateNestedManyWithoutUserInput
    secretarias?: SecretariasCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    secretariasId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    veiculos?: VeiculosUncheckedCreateNestedManyWithoutUserInput
    demandas?: DemandasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    veiculos?: VeiculosUpdateManyWithoutUserNestedInput
    demandas?: DemandasUpdateManyWithoutUserNestedInput
    secretarias?: SecretariasUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    veiculos?: VeiculosUncheckedUpdateManyWithoutUserNestedInput
    demandas?: DemandasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    secretariasId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VeiculosNullableScalarRelationFilter = {
    is?: VeiculosWhereInput | null
    isNot?: VeiculosWhereInput | null
  }

  export type SecretariasNullableScalarRelationFilter = {
    is?: SecretariasWhereInput | null
    isNot?: SecretariasWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DemandasCountOrderByAggregateInput = {
    id?: SortOrder
    emailSolicitante?: SortOrder
    demandaDetalhe?: SortOrder
    pessoaSolicitante?: SortOrder
    secretariaSolicitante?: SortOrder
    destino?: SortOrder
    dataHoraIda?: SortOrder
    dataHoraVolta?: SortOrder
    origem?: SortOrder
    contato?: SortOrder
    statusDemanda?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    veiculoId?: SortOrder
    secretariasId?: SortOrder
  }

  export type DemandasMaxOrderByAggregateInput = {
    id?: SortOrder
    emailSolicitante?: SortOrder
    demandaDetalhe?: SortOrder
    pessoaSolicitante?: SortOrder
    secretariaSolicitante?: SortOrder
    destino?: SortOrder
    dataHoraIda?: SortOrder
    dataHoraVolta?: SortOrder
    origem?: SortOrder
    contato?: SortOrder
    statusDemanda?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    veiculoId?: SortOrder
    secretariasId?: SortOrder
  }

  export type DemandasMinOrderByAggregateInput = {
    id?: SortOrder
    emailSolicitante?: SortOrder
    demandaDetalhe?: SortOrder
    pessoaSolicitante?: SortOrder
    secretariaSolicitante?: SortOrder
    destino?: SortOrder
    dataHoraIda?: SortOrder
    dataHoraVolta?: SortOrder
    origem?: SortOrder
    contato?: SortOrder
    statusDemanda?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    veiculoId?: SortOrder
    secretariasId?: SortOrder
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

  export type DemandasListRelationFilter = {
    every?: DemandasWhereInput
    some?: DemandasWhereInput
    none?: DemandasWhereInput
  }

  export type DemandasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VeiculosCountOrderByAggregateInput = {
    id?: SortOrder
    placaVeiculo?: SortOrder
    chassiVeiculo?: SortOrder
    renavamVeiculo?: SortOrder
    proprietarioVeiculo?: SortOrder
    crlvVeiculo?: SortOrder
    userId?: SortOrder
    secretariasId?: SortOrder
  }

  export type VeiculosMaxOrderByAggregateInput = {
    id?: SortOrder
    placaVeiculo?: SortOrder
    chassiVeiculo?: SortOrder
    renavamVeiculo?: SortOrder
    proprietarioVeiculo?: SortOrder
    crlvVeiculo?: SortOrder
    userId?: SortOrder
    secretariasId?: SortOrder
  }

  export type VeiculosMinOrderByAggregateInput = {
    id?: SortOrder
    placaVeiculo?: SortOrder
    chassiVeiculo?: SortOrder
    renavamVeiculo?: SortOrder
    proprietarioVeiculo?: SortOrder
    crlvVeiculo?: SortOrder
    userId?: SortOrder
    secretariasId?: SortOrder
  }

  export type VeiculosListRelationFilter = {
    every?: VeiculosWhereInput
    some?: VeiculosWhereInput
    none?: VeiculosWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type VeiculosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SecretariasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type SecretariasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type SecretariasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    updatedAt?: SortOrder
    secretariasId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    updatedAt?: SortOrder
    secretariasId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    updatedAt?: SortOrder
    secretariasId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutDemandasInput = {
    create?: XOR<UserCreateWithoutDemandasInput, UserUncheckedCreateWithoutDemandasInput>
    connectOrCreate?: UserCreateOrConnectWithoutDemandasInput
    connect?: UserWhereUniqueInput
  }

  export type VeiculosCreateNestedOneWithoutDemandasInput = {
    create?: XOR<VeiculosCreateWithoutDemandasInput, VeiculosUncheckedCreateWithoutDemandasInput>
    connectOrCreate?: VeiculosCreateOrConnectWithoutDemandasInput
    connect?: VeiculosWhereUniqueInput
  }

  export type SecretariasCreateNestedOneWithoutDemandasInput = {
    create?: XOR<SecretariasCreateWithoutDemandasInput, SecretariasUncheckedCreateWithoutDemandasInput>
    connectOrCreate?: SecretariasCreateOrConnectWithoutDemandasInput
    connect?: SecretariasWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutDemandasNestedInput = {
    create?: XOR<UserCreateWithoutDemandasInput, UserUncheckedCreateWithoutDemandasInput>
    connectOrCreate?: UserCreateOrConnectWithoutDemandasInput
    upsert?: UserUpsertWithoutDemandasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDemandasInput, UserUpdateWithoutDemandasInput>, UserUncheckedUpdateWithoutDemandasInput>
  }

  export type VeiculosUpdateOneWithoutDemandasNestedInput = {
    create?: XOR<VeiculosCreateWithoutDemandasInput, VeiculosUncheckedCreateWithoutDemandasInput>
    connectOrCreate?: VeiculosCreateOrConnectWithoutDemandasInput
    upsert?: VeiculosUpsertWithoutDemandasInput
    disconnect?: VeiculosWhereInput | boolean
    delete?: VeiculosWhereInput | boolean
    connect?: VeiculosWhereUniqueInput
    update?: XOR<XOR<VeiculosUpdateToOneWithWhereWithoutDemandasInput, VeiculosUpdateWithoutDemandasInput>, VeiculosUncheckedUpdateWithoutDemandasInput>
  }

  export type SecretariasUpdateOneWithoutDemandasNestedInput = {
    create?: XOR<SecretariasCreateWithoutDemandasInput, SecretariasUncheckedCreateWithoutDemandasInput>
    connectOrCreate?: SecretariasCreateOrConnectWithoutDemandasInput
    upsert?: SecretariasUpsertWithoutDemandasInput
    disconnect?: SecretariasWhereInput | boolean
    delete?: SecretariasWhereInput | boolean
    connect?: SecretariasWhereUniqueInput
    update?: XOR<XOR<SecretariasUpdateToOneWithWhereWithoutDemandasInput, SecretariasUpdateWithoutDemandasInput>, SecretariasUncheckedUpdateWithoutDemandasInput>
  }

  export type UserCreateNestedOneWithoutVeiculosInput = {
    create?: XOR<UserCreateWithoutVeiculosInput, UserUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVeiculosInput
    connect?: UserWhereUniqueInput
  }

  export type DemandasCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<DemandasCreateWithoutVeiculoInput, DemandasUncheckedCreateWithoutVeiculoInput> | DemandasCreateWithoutVeiculoInput[] | DemandasUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: DemandasCreateOrConnectWithoutVeiculoInput | DemandasCreateOrConnectWithoutVeiculoInput[]
    createMany?: DemandasCreateManyVeiculoInputEnvelope
    connect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
  }

  export type SecretariasCreateNestedOneWithoutVeiculosInput = {
    create?: XOR<SecretariasCreateWithoutVeiculosInput, SecretariasUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: SecretariasCreateOrConnectWithoutVeiculosInput
    connect?: SecretariasWhereUniqueInput
  }

  export type DemandasUncheckedCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<DemandasCreateWithoutVeiculoInput, DemandasUncheckedCreateWithoutVeiculoInput> | DemandasCreateWithoutVeiculoInput[] | DemandasUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: DemandasCreateOrConnectWithoutVeiculoInput | DemandasCreateOrConnectWithoutVeiculoInput[]
    createMany?: DemandasCreateManyVeiculoInputEnvelope
    connect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutVeiculosNestedInput = {
    create?: XOR<UserCreateWithoutVeiculosInput, UserUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVeiculosInput
    upsert?: UserUpsertWithoutVeiculosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVeiculosInput, UserUpdateWithoutVeiculosInput>, UserUncheckedUpdateWithoutVeiculosInput>
  }

  export type DemandasUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<DemandasCreateWithoutVeiculoInput, DemandasUncheckedCreateWithoutVeiculoInput> | DemandasCreateWithoutVeiculoInput[] | DemandasUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: DemandasCreateOrConnectWithoutVeiculoInput | DemandasCreateOrConnectWithoutVeiculoInput[]
    upsert?: DemandasUpsertWithWhereUniqueWithoutVeiculoInput | DemandasUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: DemandasCreateManyVeiculoInputEnvelope
    set?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    disconnect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    delete?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    connect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    update?: DemandasUpdateWithWhereUniqueWithoutVeiculoInput | DemandasUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: DemandasUpdateManyWithWhereWithoutVeiculoInput | DemandasUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: DemandasScalarWhereInput | DemandasScalarWhereInput[]
  }

  export type SecretariasUpdateOneWithoutVeiculosNestedInput = {
    create?: XOR<SecretariasCreateWithoutVeiculosInput, SecretariasUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: SecretariasCreateOrConnectWithoutVeiculosInput
    upsert?: SecretariasUpsertWithoutVeiculosInput
    disconnect?: SecretariasWhereInput | boolean
    delete?: SecretariasWhereInput | boolean
    connect?: SecretariasWhereUniqueInput
    update?: XOR<XOR<SecretariasUpdateToOneWithWhereWithoutVeiculosInput, SecretariasUpdateWithoutVeiculosInput>, SecretariasUncheckedUpdateWithoutVeiculosInput>
  }

  export type DemandasUncheckedUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<DemandasCreateWithoutVeiculoInput, DemandasUncheckedCreateWithoutVeiculoInput> | DemandasCreateWithoutVeiculoInput[] | DemandasUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: DemandasCreateOrConnectWithoutVeiculoInput | DemandasCreateOrConnectWithoutVeiculoInput[]
    upsert?: DemandasUpsertWithWhereUniqueWithoutVeiculoInput | DemandasUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: DemandasCreateManyVeiculoInputEnvelope
    set?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    disconnect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    delete?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    connect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    update?: DemandasUpdateWithWhereUniqueWithoutVeiculoInput | DemandasUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: DemandasUpdateManyWithWhereWithoutVeiculoInput | DemandasUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: DemandasScalarWhereInput | DemandasScalarWhereInput[]
  }

  export type VeiculosCreateNestedManyWithoutSecretariasInput = {
    create?: XOR<VeiculosCreateWithoutSecretariasInput, VeiculosUncheckedCreateWithoutSecretariasInput> | VeiculosCreateWithoutSecretariasInput[] | VeiculosUncheckedCreateWithoutSecretariasInput[]
    connectOrCreate?: VeiculosCreateOrConnectWithoutSecretariasInput | VeiculosCreateOrConnectWithoutSecretariasInput[]
    createMany?: VeiculosCreateManySecretariasInputEnvelope
    connect?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
  }

  export type DemandasCreateNestedManyWithoutSecretariasInput = {
    create?: XOR<DemandasCreateWithoutSecretariasInput, DemandasUncheckedCreateWithoutSecretariasInput> | DemandasCreateWithoutSecretariasInput[] | DemandasUncheckedCreateWithoutSecretariasInput[]
    connectOrCreate?: DemandasCreateOrConnectWithoutSecretariasInput | DemandasCreateOrConnectWithoutSecretariasInput[]
    createMany?: DemandasCreateManySecretariasInputEnvelope
    connect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutSecretariasInput = {
    create?: XOR<UserCreateWithoutSecretariasInput, UserUncheckedCreateWithoutSecretariasInput> | UserCreateWithoutSecretariasInput[] | UserUncheckedCreateWithoutSecretariasInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSecretariasInput | UserCreateOrConnectWithoutSecretariasInput[]
    createMany?: UserCreateManySecretariasInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type VeiculosUncheckedCreateNestedManyWithoutSecretariasInput = {
    create?: XOR<VeiculosCreateWithoutSecretariasInput, VeiculosUncheckedCreateWithoutSecretariasInput> | VeiculosCreateWithoutSecretariasInput[] | VeiculosUncheckedCreateWithoutSecretariasInput[]
    connectOrCreate?: VeiculosCreateOrConnectWithoutSecretariasInput | VeiculosCreateOrConnectWithoutSecretariasInput[]
    createMany?: VeiculosCreateManySecretariasInputEnvelope
    connect?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
  }

  export type DemandasUncheckedCreateNestedManyWithoutSecretariasInput = {
    create?: XOR<DemandasCreateWithoutSecretariasInput, DemandasUncheckedCreateWithoutSecretariasInput> | DemandasCreateWithoutSecretariasInput[] | DemandasUncheckedCreateWithoutSecretariasInput[]
    connectOrCreate?: DemandasCreateOrConnectWithoutSecretariasInput | DemandasCreateOrConnectWithoutSecretariasInput[]
    createMany?: DemandasCreateManySecretariasInputEnvelope
    connect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSecretariasInput = {
    create?: XOR<UserCreateWithoutSecretariasInput, UserUncheckedCreateWithoutSecretariasInput> | UserCreateWithoutSecretariasInput[] | UserUncheckedCreateWithoutSecretariasInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSecretariasInput | UserCreateOrConnectWithoutSecretariasInput[]
    createMany?: UserCreateManySecretariasInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type VeiculosUpdateManyWithoutSecretariasNestedInput = {
    create?: XOR<VeiculosCreateWithoutSecretariasInput, VeiculosUncheckedCreateWithoutSecretariasInput> | VeiculosCreateWithoutSecretariasInput[] | VeiculosUncheckedCreateWithoutSecretariasInput[]
    connectOrCreate?: VeiculosCreateOrConnectWithoutSecretariasInput | VeiculosCreateOrConnectWithoutSecretariasInput[]
    upsert?: VeiculosUpsertWithWhereUniqueWithoutSecretariasInput | VeiculosUpsertWithWhereUniqueWithoutSecretariasInput[]
    createMany?: VeiculosCreateManySecretariasInputEnvelope
    set?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
    disconnect?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
    delete?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
    connect?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
    update?: VeiculosUpdateWithWhereUniqueWithoutSecretariasInput | VeiculosUpdateWithWhereUniqueWithoutSecretariasInput[]
    updateMany?: VeiculosUpdateManyWithWhereWithoutSecretariasInput | VeiculosUpdateManyWithWhereWithoutSecretariasInput[]
    deleteMany?: VeiculosScalarWhereInput | VeiculosScalarWhereInput[]
  }

  export type DemandasUpdateManyWithoutSecretariasNestedInput = {
    create?: XOR<DemandasCreateWithoutSecretariasInput, DemandasUncheckedCreateWithoutSecretariasInput> | DemandasCreateWithoutSecretariasInput[] | DemandasUncheckedCreateWithoutSecretariasInput[]
    connectOrCreate?: DemandasCreateOrConnectWithoutSecretariasInput | DemandasCreateOrConnectWithoutSecretariasInput[]
    upsert?: DemandasUpsertWithWhereUniqueWithoutSecretariasInput | DemandasUpsertWithWhereUniqueWithoutSecretariasInput[]
    createMany?: DemandasCreateManySecretariasInputEnvelope
    set?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    disconnect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    delete?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    connect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    update?: DemandasUpdateWithWhereUniqueWithoutSecretariasInput | DemandasUpdateWithWhereUniqueWithoutSecretariasInput[]
    updateMany?: DemandasUpdateManyWithWhereWithoutSecretariasInput | DemandasUpdateManyWithWhereWithoutSecretariasInput[]
    deleteMany?: DemandasScalarWhereInput | DemandasScalarWhereInput[]
  }

  export type UserUpdateManyWithoutSecretariasNestedInput = {
    create?: XOR<UserCreateWithoutSecretariasInput, UserUncheckedCreateWithoutSecretariasInput> | UserCreateWithoutSecretariasInput[] | UserUncheckedCreateWithoutSecretariasInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSecretariasInput | UserCreateOrConnectWithoutSecretariasInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSecretariasInput | UserUpsertWithWhereUniqueWithoutSecretariasInput[]
    createMany?: UserCreateManySecretariasInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSecretariasInput | UserUpdateWithWhereUniqueWithoutSecretariasInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSecretariasInput | UserUpdateManyWithWhereWithoutSecretariasInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type VeiculosUncheckedUpdateManyWithoutSecretariasNestedInput = {
    create?: XOR<VeiculosCreateWithoutSecretariasInput, VeiculosUncheckedCreateWithoutSecretariasInput> | VeiculosCreateWithoutSecretariasInput[] | VeiculosUncheckedCreateWithoutSecretariasInput[]
    connectOrCreate?: VeiculosCreateOrConnectWithoutSecretariasInput | VeiculosCreateOrConnectWithoutSecretariasInput[]
    upsert?: VeiculosUpsertWithWhereUniqueWithoutSecretariasInput | VeiculosUpsertWithWhereUniqueWithoutSecretariasInput[]
    createMany?: VeiculosCreateManySecretariasInputEnvelope
    set?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
    disconnect?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
    delete?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
    connect?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
    update?: VeiculosUpdateWithWhereUniqueWithoutSecretariasInput | VeiculosUpdateWithWhereUniqueWithoutSecretariasInput[]
    updateMany?: VeiculosUpdateManyWithWhereWithoutSecretariasInput | VeiculosUpdateManyWithWhereWithoutSecretariasInput[]
    deleteMany?: VeiculosScalarWhereInput | VeiculosScalarWhereInput[]
  }

  export type DemandasUncheckedUpdateManyWithoutSecretariasNestedInput = {
    create?: XOR<DemandasCreateWithoutSecretariasInput, DemandasUncheckedCreateWithoutSecretariasInput> | DemandasCreateWithoutSecretariasInput[] | DemandasUncheckedCreateWithoutSecretariasInput[]
    connectOrCreate?: DemandasCreateOrConnectWithoutSecretariasInput | DemandasCreateOrConnectWithoutSecretariasInput[]
    upsert?: DemandasUpsertWithWhereUniqueWithoutSecretariasInput | DemandasUpsertWithWhereUniqueWithoutSecretariasInput[]
    createMany?: DemandasCreateManySecretariasInputEnvelope
    set?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    disconnect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    delete?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    connect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    update?: DemandasUpdateWithWhereUniqueWithoutSecretariasInput | DemandasUpdateWithWhereUniqueWithoutSecretariasInput[]
    updateMany?: DemandasUpdateManyWithWhereWithoutSecretariasInput | DemandasUpdateManyWithWhereWithoutSecretariasInput[]
    deleteMany?: DemandasScalarWhereInput | DemandasScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSecretariasNestedInput = {
    create?: XOR<UserCreateWithoutSecretariasInput, UserUncheckedCreateWithoutSecretariasInput> | UserCreateWithoutSecretariasInput[] | UserUncheckedCreateWithoutSecretariasInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSecretariasInput | UserCreateOrConnectWithoutSecretariasInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSecretariasInput | UserUpsertWithWhereUniqueWithoutSecretariasInput[]
    createMany?: UserCreateManySecretariasInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSecretariasInput | UserUpdateWithWhereUniqueWithoutSecretariasInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSecretariasInput | UserUpdateManyWithWhereWithoutSecretariasInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type VeiculosCreateNestedManyWithoutUserInput = {
    create?: XOR<VeiculosCreateWithoutUserInput, VeiculosUncheckedCreateWithoutUserInput> | VeiculosCreateWithoutUserInput[] | VeiculosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VeiculosCreateOrConnectWithoutUserInput | VeiculosCreateOrConnectWithoutUserInput[]
    createMany?: VeiculosCreateManyUserInputEnvelope
    connect?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
  }

  export type DemandasCreateNestedManyWithoutUserInput = {
    create?: XOR<DemandasCreateWithoutUserInput, DemandasUncheckedCreateWithoutUserInput> | DemandasCreateWithoutUserInput[] | DemandasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DemandasCreateOrConnectWithoutUserInput | DemandasCreateOrConnectWithoutUserInput[]
    createMany?: DemandasCreateManyUserInputEnvelope
    connect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
  }

  export type SecretariasCreateNestedOneWithoutUsersInput = {
    create?: XOR<SecretariasCreateWithoutUsersInput, SecretariasUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SecretariasCreateOrConnectWithoutUsersInput
    connect?: SecretariasWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type VeiculosUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VeiculosCreateWithoutUserInput, VeiculosUncheckedCreateWithoutUserInput> | VeiculosCreateWithoutUserInput[] | VeiculosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VeiculosCreateOrConnectWithoutUserInput | VeiculosCreateOrConnectWithoutUserInput[]
    createMany?: VeiculosCreateManyUserInputEnvelope
    connect?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
  }

  export type DemandasUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DemandasCreateWithoutUserInput, DemandasUncheckedCreateWithoutUserInput> | DemandasCreateWithoutUserInput[] | DemandasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DemandasCreateOrConnectWithoutUserInput | DemandasCreateOrConnectWithoutUserInput[]
    createMany?: DemandasCreateManyUserInputEnvelope
    connect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type VeiculosUpdateManyWithoutUserNestedInput = {
    create?: XOR<VeiculosCreateWithoutUserInput, VeiculosUncheckedCreateWithoutUserInput> | VeiculosCreateWithoutUserInput[] | VeiculosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VeiculosCreateOrConnectWithoutUserInput | VeiculosCreateOrConnectWithoutUserInput[]
    upsert?: VeiculosUpsertWithWhereUniqueWithoutUserInput | VeiculosUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VeiculosCreateManyUserInputEnvelope
    set?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
    disconnect?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
    delete?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
    connect?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
    update?: VeiculosUpdateWithWhereUniqueWithoutUserInput | VeiculosUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VeiculosUpdateManyWithWhereWithoutUserInput | VeiculosUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VeiculosScalarWhereInput | VeiculosScalarWhereInput[]
  }

  export type DemandasUpdateManyWithoutUserNestedInput = {
    create?: XOR<DemandasCreateWithoutUserInput, DemandasUncheckedCreateWithoutUserInput> | DemandasCreateWithoutUserInput[] | DemandasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DemandasCreateOrConnectWithoutUserInput | DemandasCreateOrConnectWithoutUserInput[]
    upsert?: DemandasUpsertWithWhereUniqueWithoutUserInput | DemandasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DemandasCreateManyUserInputEnvelope
    set?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    disconnect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    delete?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    connect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    update?: DemandasUpdateWithWhereUniqueWithoutUserInput | DemandasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DemandasUpdateManyWithWhereWithoutUserInput | DemandasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DemandasScalarWhereInput | DemandasScalarWhereInput[]
  }

  export type SecretariasUpdateOneWithoutUsersNestedInput = {
    create?: XOR<SecretariasCreateWithoutUsersInput, SecretariasUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SecretariasCreateOrConnectWithoutUsersInput
    upsert?: SecretariasUpsertWithoutUsersInput
    disconnect?: SecretariasWhereInput | boolean
    delete?: SecretariasWhereInput | boolean
    connect?: SecretariasWhereUniqueInput
    update?: XOR<XOR<SecretariasUpdateToOneWithWhereWithoutUsersInput, SecretariasUpdateWithoutUsersInput>, SecretariasUncheckedUpdateWithoutUsersInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type VeiculosUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VeiculosCreateWithoutUserInput, VeiculosUncheckedCreateWithoutUserInput> | VeiculosCreateWithoutUserInput[] | VeiculosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VeiculosCreateOrConnectWithoutUserInput | VeiculosCreateOrConnectWithoutUserInput[]
    upsert?: VeiculosUpsertWithWhereUniqueWithoutUserInput | VeiculosUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VeiculosCreateManyUserInputEnvelope
    set?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
    disconnect?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
    delete?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
    connect?: VeiculosWhereUniqueInput | VeiculosWhereUniqueInput[]
    update?: VeiculosUpdateWithWhereUniqueWithoutUserInput | VeiculosUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VeiculosUpdateManyWithWhereWithoutUserInput | VeiculosUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VeiculosScalarWhereInput | VeiculosScalarWhereInput[]
  }

  export type DemandasUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DemandasCreateWithoutUserInput, DemandasUncheckedCreateWithoutUserInput> | DemandasCreateWithoutUserInput[] | DemandasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DemandasCreateOrConnectWithoutUserInput | DemandasCreateOrConnectWithoutUserInput[]
    upsert?: DemandasUpsertWithWhereUniqueWithoutUserInput | DemandasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DemandasCreateManyUserInputEnvelope
    set?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    disconnect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    delete?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    connect?: DemandasWhereUniqueInput | DemandasWhereUniqueInput[]
    update?: DemandasUpdateWithWhereUniqueWithoutUserInput | DemandasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DemandasUpdateManyWithWhereWithoutUserInput | DemandasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DemandasScalarWhereInput | DemandasScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutDemandasInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    veiculos?: VeiculosCreateNestedManyWithoutUserInput
    secretarias?: SecretariasCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutDemandasInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    secretariasId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    veiculos?: VeiculosUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDemandasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDemandasInput, UserUncheckedCreateWithoutDemandasInput>
  }

  export type VeiculosCreateWithoutDemandasInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    user: UserCreateNestedOneWithoutVeiculosInput
    secretarias?: SecretariasCreateNestedOneWithoutVeiculosInput
  }

  export type VeiculosUncheckedCreateWithoutDemandasInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    userId: string
    secretariasId?: string | null
  }

  export type VeiculosCreateOrConnectWithoutDemandasInput = {
    where: VeiculosWhereUniqueInput
    create: XOR<VeiculosCreateWithoutDemandasInput, VeiculosUncheckedCreateWithoutDemandasInput>
  }

  export type SecretariasCreateWithoutDemandasInput = {
    id?: string
    nome: string
    Veiculos?: VeiculosCreateNestedManyWithoutSecretariasInput
    Users?: UserCreateNestedManyWithoutSecretariasInput
  }

  export type SecretariasUncheckedCreateWithoutDemandasInput = {
    id?: string
    nome: string
    Veiculos?: VeiculosUncheckedCreateNestedManyWithoutSecretariasInput
    Users?: UserUncheckedCreateNestedManyWithoutSecretariasInput
  }

  export type SecretariasCreateOrConnectWithoutDemandasInput = {
    where: SecretariasWhereUniqueInput
    create: XOR<SecretariasCreateWithoutDemandasInput, SecretariasUncheckedCreateWithoutDemandasInput>
  }

  export type UserUpsertWithoutDemandasInput = {
    update: XOR<UserUpdateWithoutDemandasInput, UserUncheckedUpdateWithoutDemandasInput>
    create: XOR<UserCreateWithoutDemandasInput, UserUncheckedCreateWithoutDemandasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDemandasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDemandasInput, UserUncheckedUpdateWithoutDemandasInput>
  }

  export type UserUpdateWithoutDemandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    veiculos?: VeiculosUpdateManyWithoutUserNestedInput
    secretarias?: SecretariasUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutDemandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    veiculos?: VeiculosUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VeiculosUpsertWithoutDemandasInput = {
    update: XOR<VeiculosUpdateWithoutDemandasInput, VeiculosUncheckedUpdateWithoutDemandasInput>
    create: XOR<VeiculosCreateWithoutDemandasInput, VeiculosUncheckedCreateWithoutDemandasInput>
    where?: VeiculosWhereInput
  }

  export type VeiculosUpdateToOneWithWhereWithoutDemandasInput = {
    where?: VeiculosWhereInput
    data: XOR<VeiculosUpdateWithoutDemandasInput, VeiculosUncheckedUpdateWithoutDemandasInput>
  }

  export type VeiculosUpdateWithoutDemandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVeiculosNestedInput
    secretarias?: SecretariasUpdateOneWithoutVeiculosNestedInput
  }

  export type VeiculosUncheckedUpdateWithoutDemandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SecretariasUpsertWithoutDemandasInput = {
    update: XOR<SecretariasUpdateWithoutDemandasInput, SecretariasUncheckedUpdateWithoutDemandasInput>
    create: XOR<SecretariasCreateWithoutDemandasInput, SecretariasUncheckedCreateWithoutDemandasInput>
    where?: SecretariasWhereInput
  }

  export type SecretariasUpdateToOneWithWhereWithoutDemandasInput = {
    where?: SecretariasWhereInput
    data: XOR<SecretariasUpdateWithoutDemandasInput, SecretariasUncheckedUpdateWithoutDemandasInput>
  }

  export type SecretariasUpdateWithoutDemandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Veiculos?: VeiculosUpdateManyWithoutSecretariasNestedInput
    Users?: UserUpdateManyWithoutSecretariasNestedInput
  }

  export type SecretariasUncheckedUpdateWithoutDemandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Veiculos?: VeiculosUncheckedUpdateManyWithoutSecretariasNestedInput
    Users?: UserUncheckedUpdateManyWithoutSecretariasNestedInput
  }

  export type UserCreateWithoutVeiculosInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    demandas?: DemandasCreateNestedManyWithoutUserInput
    secretarias?: SecretariasCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutVeiculosInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    secretariasId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    demandas?: DemandasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVeiculosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVeiculosInput, UserUncheckedCreateWithoutVeiculosInput>
  }

  export type DemandasCreateWithoutVeiculoInput = {
    id?: string
    emailSolicitante: string
    demandaDetalhe?: string | null
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda?: string | null
    dataHoraVolta?: string | null
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDemandasInput
    secretarias?: SecretariasCreateNestedOneWithoutDemandasInput
  }

  export type DemandasUncheckedCreateWithoutVeiculoInput = {
    id?: string
    emailSolicitante: string
    demandaDetalhe?: string | null
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda?: string | null
    dataHoraVolta?: string | null
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    secretariasId?: string | null
  }

  export type DemandasCreateOrConnectWithoutVeiculoInput = {
    where: DemandasWhereUniqueInput
    create: XOR<DemandasCreateWithoutVeiculoInput, DemandasUncheckedCreateWithoutVeiculoInput>
  }

  export type DemandasCreateManyVeiculoInputEnvelope = {
    data: DemandasCreateManyVeiculoInput | DemandasCreateManyVeiculoInput[]
    skipDuplicates?: boolean
  }

  export type SecretariasCreateWithoutVeiculosInput = {
    id?: string
    nome: string
    Demandas?: DemandasCreateNestedManyWithoutSecretariasInput
    Users?: UserCreateNestedManyWithoutSecretariasInput
  }

  export type SecretariasUncheckedCreateWithoutVeiculosInput = {
    id?: string
    nome: string
    Demandas?: DemandasUncheckedCreateNestedManyWithoutSecretariasInput
    Users?: UserUncheckedCreateNestedManyWithoutSecretariasInput
  }

  export type SecretariasCreateOrConnectWithoutVeiculosInput = {
    where: SecretariasWhereUniqueInput
    create: XOR<SecretariasCreateWithoutVeiculosInput, SecretariasUncheckedCreateWithoutVeiculosInput>
  }

  export type UserUpsertWithoutVeiculosInput = {
    update: XOR<UserUpdateWithoutVeiculosInput, UserUncheckedUpdateWithoutVeiculosInput>
    create: XOR<UserCreateWithoutVeiculosInput, UserUncheckedCreateWithoutVeiculosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVeiculosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVeiculosInput, UserUncheckedUpdateWithoutVeiculosInput>
  }

  export type UserUpdateWithoutVeiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    demandas?: DemandasUpdateManyWithoutUserNestedInput
    secretarias?: SecretariasUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutVeiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    demandas?: DemandasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DemandasUpsertWithWhereUniqueWithoutVeiculoInput = {
    where: DemandasWhereUniqueInput
    update: XOR<DemandasUpdateWithoutVeiculoInput, DemandasUncheckedUpdateWithoutVeiculoInput>
    create: XOR<DemandasCreateWithoutVeiculoInput, DemandasUncheckedCreateWithoutVeiculoInput>
  }

  export type DemandasUpdateWithWhereUniqueWithoutVeiculoInput = {
    where: DemandasWhereUniqueInput
    data: XOR<DemandasUpdateWithoutVeiculoInput, DemandasUncheckedUpdateWithoutVeiculoInput>
  }

  export type DemandasUpdateManyWithWhereWithoutVeiculoInput = {
    where: DemandasScalarWhereInput
    data: XOR<DemandasUpdateManyMutationInput, DemandasUncheckedUpdateManyWithoutVeiculoInput>
  }

  export type DemandasScalarWhereInput = {
    AND?: DemandasScalarWhereInput | DemandasScalarWhereInput[]
    OR?: DemandasScalarWhereInput[]
    NOT?: DemandasScalarWhereInput | DemandasScalarWhereInput[]
    id?: StringFilter<"Demandas"> | string
    emailSolicitante?: StringFilter<"Demandas"> | string
    demandaDetalhe?: StringNullableFilter<"Demandas"> | string | null
    pessoaSolicitante?: StringFilter<"Demandas"> | string
    secretariaSolicitante?: StringFilter<"Demandas"> | string
    destino?: StringFilter<"Demandas"> | string
    dataHoraIda?: StringNullableFilter<"Demandas"> | string | null
    dataHoraVolta?: StringNullableFilter<"Demandas"> | string | null
    origem?: StringFilter<"Demandas"> | string
    contato?: StringFilter<"Demandas"> | string
    statusDemanda?: StringFilter<"Demandas"> | string
    createdAt?: DateTimeFilter<"Demandas"> | Date | string
    updatedAt?: DateTimeFilter<"Demandas"> | Date | string
    userId?: StringFilter<"Demandas"> | string
    veiculoId?: StringNullableFilter<"Demandas"> | string | null
    secretariasId?: StringNullableFilter<"Demandas"> | string | null
  }

  export type SecretariasUpsertWithoutVeiculosInput = {
    update: XOR<SecretariasUpdateWithoutVeiculosInput, SecretariasUncheckedUpdateWithoutVeiculosInput>
    create: XOR<SecretariasCreateWithoutVeiculosInput, SecretariasUncheckedCreateWithoutVeiculosInput>
    where?: SecretariasWhereInput
  }

  export type SecretariasUpdateToOneWithWhereWithoutVeiculosInput = {
    where?: SecretariasWhereInput
    data: XOR<SecretariasUpdateWithoutVeiculosInput, SecretariasUncheckedUpdateWithoutVeiculosInput>
  }

  export type SecretariasUpdateWithoutVeiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Demandas?: DemandasUpdateManyWithoutSecretariasNestedInput
    Users?: UserUpdateManyWithoutSecretariasNestedInput
  }

  export type SecretariasUncheckedUpdateWithoutVeiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Demandas?: DemandasUncheckedUpdateManyWithoutSecretariasNestedInput
    Users?: UserUncheckedUpdateManyWithoutSecretariasNestedInput
  }

  export type VeiculosCreateWithoutSecretariasInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    user: UserCreateNestedOneWithoutVeiculosInput
    demandas?: DemandasCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculosUncheckedCreateWithoutSecretariasInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    userId: string
    demandas?: DemandasUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculosCreateOrConnectWithoutSecretariasInput = {
    where: VeiculosWhereUniqueInput
    create: XOR<VeiculosCreateWithoutSecretariasInput, VeiculosUncheckedCreateWithoutSecretariasInput>
  }

  export type VeiculosCreateManySecretariasInputEnvelope = {
    data: VeiculosCreateManySecretariasInput | VeiculosCreateManySecretariasInput[]
    skipDuplicates?: boolean
  }

  export type DemandasCreateWithoutSecretariasInput = {
    id?: string
    emailSolicitante: string
    demandaDetalhe?: string | null
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda?: string | null
    dataHoraVolta?: string | null
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDemandasInput
    veiculo?: VeiculosCreateNestedOneWithoutDemandasInput
  }

  export type DemandasUncheckedCreateWithoutSecretariasInput = {
    id?: string
    emailSolicitante: string
    demandaDetalhe?: string | null
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda?: string | null
    dataHoraVolta?: string | null
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    veiculoId?: string | null
  }

  export type DemandasCreateOrConnectWithoutSecretariasInput = {
    where: DemandasWhereUniqueInput
    create: XOR<DemandasCreateWithoutSecretariasInput, DemandasUncheckedCreateWithoutSecretariasInput>
  }

  export type DemandasCreateManySecretariasInputEnvelope = {
    data: DemandasCreateManySecretariasInput | DemandasCreateManySecretariasInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSecretariasInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    veiculos?: VeiculosCreateNestedManyWithoutUserInput
    demandas?: DemandasCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSecretariasInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    veiculos?: VeiculosUncheckedCreateNestedManyWithoutUserInput
    demandas?: DemandasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSecretariasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSecretariasInput, UserUncheckedCreateWithoutSecretariasInput>
  }

  export type UserCreateManySecretariasInputEnvelope = {
    data: UserCreateManySecretariasInput | UserCreateManySecretariasInput[]
    skipDuplicates?: boolean
  }

  export type VeiculosUpsertWithWhereUniqueWithoutSecretariasInput = {
    where: VeiculosWhereUniqueInput
    update: XOR<VeiculosUpdateWithoutSecretariasInput, VeiculosUncheckedUpdateWithoutSecretariasInput>
    create: XOR<VeiculosCreateWithoutSecretariasInput, VeiculosUncheckedCreateWithoutSecretariasInput>
  }

  export type VeiculosUpdateWithWhereUniqueWithoutSecretariasInput = {
    where: VeiculosWhereUniqueInput
    data: XOR<VeiculosUpdateWithoutSecretariasInput, VeiculosUncheckedUpdateWithoutSecretariasInput>
  }

  export type VeiculosUpdateManyWithWhereWithoutSecretariasInput = {
    where: VeiculosScalarWhereInput
    data: XOR<VeiculosUpdateManyMutationInput, VeiculosUncheckedUpdateManyWithoutSecretariasInput>
  }

  export type VeiculosScalarWhereInput = {
    AND?: VeiculosScalarWhereInput | VeiculosScalarWhereInput[]
    OR?: VeiculosScalarWhereInput[]
    NOT?: VeiculosScalarWhereInput | VeiculosScalarWhereInput[]
    id?: StringFilter<"Veiculos"> | string
    placaVeiculo?: StringFilter<"Veiculos"> | string
    chassiVeiculo?: StringFilter<"Veiculos"> | string
    renavamVeiculo?: StringFilter<"Veiculos"> | string
    proprietarioVeiculo?: StringFilter<"Veiculos"> | string
    crlvVeiculo?: StringFilter<"Veiculos"> | string
    userId?: StringFilter<"Veiculos"> | string
    secretariasId?: StringNullableFilter<"Veiculos"> | string | null
  }

  export type DemandasUpsertWithWhereUniqueWithoutSecretariasInput = {
    where: DemandasWhereUniqueInput
    update: XOR<DemandasUpdateWithoutSecretariasInput, DemandasUncheckedUpdateWithoutSecretariasInput>
    create: XOR<DemandasCreateWithoutSecretariasInput, DemandasUncheckedCreateWithoutSecretariasInput>
  }

  export type DemandasUpdateWithWhereUniqueWithoutSecretariasInput = {
    where: DemandasWhereUniqueInput
    data: XOR<DemandasUpdateWithoutSecretariasInput, DemandasUncheckedUpdateWithoutSecretariasInput>
  }

  export type DemandasUpdateManyWithWhereWithoutSecretariasInput = {
    where: DemandasScalarWhereInput
    data: XOR<DemandasUpdateManyMutationInput, DemandasUncheckedUpdateManyWithoutSecretariasInput>
  }

  export type UserUpsertWithWhereUniqueWithoutSecretariasInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSecretariasInput, UserUncheckedUpdateWithoutSecretariasInput>
    create: XOR<UserCreateWithoutSecretariasInput, UserUncheckedCreateWithoutSecretariasInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSecretariasInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSecretariasInput, UserUncheckedUpdateWithoutSecretariasInput>
  }

  export type UserUpdateManyWithWhereWithoutSecretariasInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSecretariasInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    updatedAt?: DateTimeFilter<"User"> | Date | string
    secretariasId?: StringNullableFilter<"User"> | string | null
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VeiculosCreateWithoutUserInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    demandas?: DemandasCreateNestedManyWithoutVeiculoInput
    secretarias?: SecretariasCreateNestedOneWithoutVeiculosInput
  }

  export type VeiculosUncheckedCreateWithoutUserInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    secretariasId?: string | null
    demandas?: DemandasUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculosCreateOrConnectWithoutUserInput = {
    where: VeiculosWhereUniqueInput
    create: XOR<VeiculosCreateWithoutUserInput, VeiculosUncheckedCreateWithoutUserInput>
  }

  export type VeiculosCreateManyUserInputEnvelope = {
    data: VeiculosCreateManyUserInput | VeiculosCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DemandasCreateWithoutUserInput = {
    id?: string
    emailSolicitante: string
    demandaDetalhe?: string | null
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda?: string | null
    dataHoraVolta?: string | null
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    veiculo?: VeiculosCreateNestedOneWithoutDemandasInput
    secretarias?: SecretariasCreateNestedOneWithoutDemandasInput
  }

  export type DemandasUncheckedCreateWithoutUserInput = {
    id?: string
    emailSolicitante: string
    demandaDetalhe?: string | null
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda?: string | null
    dataHoraVolta?: string | null
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    veiculoId?: string | null
    secretariasId?: string | null
  }

  export type DemandasCreateOrConnectWithoutUserInput = {
    where: DemandasWhereUniqueInput
    create: XOR<DemandasCreateWithoutUserInput, DemandasUncheckedCreateWithoutUserInput>
  }

  export type DemandasCreateManyUserInputEnvelope = {
    data: DemandasCreateManyUserInput | DemandasCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SecretariasCreateWithoutUsersInput = {
    id?: string
    nome: string
    Veiculos?: VeiculosCreateNestedManyWithoutSecretariasInput
    Demandas?: DemandasCreateNestedManyWithoutSecretariasInput
  }

  export type SecretariasUncheckedCreateWithoutUsersInput = {
    id?: string
    nome: string
    Veiculos?: VeiculosUncheckedCreateNestedManyWithoutSecretariasInput
    Demandas?: DemandasUncheckedCreateNestedManyWithoutSecretariasInput
  }

  export type SecretariasCreateOrConnectWithoutUsersInput = {
    where: SecretariasWhereUniqueInput
    create: XOR<SecretariasCreateWithoutUsersInput, SecretariasUncheckedCreateWithoutUsersInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type VeiculosUpsertWithWhereUniqueWithoutUserInput = {
    where: VeiculosWhereUniqueInput
    update: XOR<VeiculosUpdateWithoutUserInput, VeiculosUncheckedUpdateWithoutUserInput>
    create: XOR<VeiculosCreateWithoutUserInput, VeiculosUncheckedCreateWithoutUserInput>
  }

  export type VeiculosUpdateWithWhereUniqueWithoutUserInput = {
    where: VeiculosWhereUniqueInput
    data: XOR<VeiculosUpdateWithoutUserInput, VeiculosUncheckedUpdateWithoutUserInput>
  }

  export type VeiculosUpdateManyWithWhereWithoutUserInput = {
    where: VeiculosScalarWhereInput
    data: XOR<VeiculosUpdateManyMutationInput, VeiculosUncheckedUpdateManyWithoutUserInput>
  }

  export type DemandasUpsertWithWhereUniqueWithoutUserInput = {
    where: DemandasWhereUniqueInput
    update: XOR<DemandasUpdateWithoutUserInput, DemandasUncheckedUpdateWithoutUserInput>
    create: XOR<DemandasCreateWithoutUserInput, DemandasUncheckedCreateWithoutUserInput>
  }

  export type DemandasUpdateWithWhereUniqueWithoutUserInput = {
    where: DemandasWhereUniqueInput
    data: XOR<DemandasUpdateWithoutUserInput, DemandasUncheckedUpdateWithoutUserInput>
  }

  export type DemandasUpdateManyWithWhereWithoutUserInput = {
    where: DemandasScalarWhereInput
    data: XOR<DemandasUpdateManyMutationInput, DemandasUncheckedUpdateManyWithoutUserInput>
  }

  export type SecretariasUpsertWithoutUsersInput = {
    update: XOR<SecretariasUpdateWithoutUsersInput, SecretariasUncheckedUpdateWithoutUsersInput>
    create: XOR<SecretariasCreateWithoutUsersInput, SecretariasUncheckedCreateWithoutUsersInput>
    where?: SecretariasWhereInput
  }

  export type SecretariasUpdateToOneWithWhereWithoutUsersInput = {
    where?: SecretariasWhereInput
    data: XOR<SecretariasUpdateWithoutUsersInput, SecretariasUncheckedUpdateWithoutUsersInput>
  }

  export type SecretariasUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Veiculos?: VeiculosUpdateManyWithoutSecretariasNestedInput
    Demandas?: DemandasUpdateManyWithoutSecretariasNestedInput
  }

  export type SecretariasUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Veiculos?: VeiculosUncheckedUpdateManyWithoutSecretariasNestedInput
    Demandas?: DemandasUncheckedUpdateManyWithoutSecretariasNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    veiculos?: VeiculosCreateNestedManyWithoutUserInput
    demandas?: DemandasCreateNestedManyWithoutUserInput
    secretarias?: SecretariasCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    secretariasId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    veiculos?: VeiculosUncheckedCreateNestedManyWithoutUserInput
    demandas?: DemandasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    veiculos?: VeiculosUpdateManyWithoutUserNestedInput
    demandas?: DemandasUpdateManyWithoutUserNestedInput
    secretarias?: SecretariasUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    veiculos?: VeiculosUncheckedUpdateManyWithoutUserNestedInput
    demandas?: DemandasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    veiculos?: VeiculosCreateNestedManyWithoutUserInput
    demandas?: DemandasCreateNestedManyWithoutUserInput
    secretarias?: SecretariasCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    secretariasId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    veiculos?: VeiculosUncheckedCreateNestedManyWithoutUserInput
    demandas?: DemandasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    veiculos?: VeiculosUpdateManyWithoutUserNestedInput
    demandas?: DemandasUpdateManyWithoutUserNestedInput
    secretarias?: SecretariasUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    veiculos?: VeiculosUncheckedUpdateManyWithoutUserNestedInput
    demandas?: DemandasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DemandasCreateManyVeiculoInput = {
    id?: string
    emailSolicitante: string
    demandaDetalhe?: string | null
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda?: string | null
    dataHoraVolta?: string | null
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    secretariasId?: string | null
  }

  export type DemandasUpdateWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: NullableStringFieldUpdateOperationsInput | string | null
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: NullableStringFieldUpdateOperationsInput | string | null
    dataHoraVolta?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDemandasNestedInput
    secretarias?: SecretariasUpdateOneWithoutDemandasNestedInput
  }

  export type DemandasUncheckedUpdateWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: NullableStringFieldUpdateOperationsInput | string | null
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: NullableStringFieldUpdateOperationsInput | string | null
    dataHoraVolta?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemandasUncheckedUpdateManyWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: NullableStringFieldUpdateOperationsInput | string | null
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: NullableStringFieldUpdateOperationsInput | string | null
    dataHoraVolta?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculosCreateManySecretariasInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    userId: string
  }

  export type DemandasCreateManySecretariasInput = {
    id?: string
    emailSolicitante: string
    demandaDetalhe?: string | null
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda?: string | null
    dataHoraVolta?: string | null
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    veiculoId?: string | null
  }

  export type UserCreateManySecretariasInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
  }

  export type VeiculosUpdateWithoutSecretariasInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVeiculosNestedInput
    demandas?: DemandasUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculosUncheckedUpdateWithoutSecretariasInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    demandas?: DemandasUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculosUncheckedUpdateManyWithoutSecretariasInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DemandasUpdateWithoutSecretariasInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: NullableStringFieldUpdateOperationsInput | string | null
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: NullableStringFieldUpdateOperationsInput | string | null
    dataHoraVolta?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDemandasNestedInput
    veiculo?: VeiculosUpdateOneWithoutDemandasNestedInput
  }

  export type DemandasUncheckedUpdateWithoutSecretariasInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: NullableStringFieldUpdateOperationsInput | string | null
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: NullableStringFieldUpdateOperationsInput | string | null
    dataHoraVolta?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemandasUncheckedUpdateManyWithoutSecretariasInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: NullableStringFieldUpdateOperationsInput | string | null
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: NullableStringFieldUpdateOperationsInput | string | null
    dataHoraVolta?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutSecretariasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    veiculos?: VeiculosUpdateManyWithoutUserNestedInput
    demandas?: DemandasUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSecretariasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    veiculos?: VeiculosUncheckedUpdateManyWithoutUserNestedInput
    demandas?: DemandasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSecretariasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VeiculosCreateManyUserInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    secretariasId?: string | null
  }

  export type DemandasCreateManyUserInput = {
    id?: string
    emailSolicitante: string
    demandaDetalhe?: string | null
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda?: string | null
    dataHoraVolta?: string | null
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    veiculoId?: string | null
    secretariasId?: string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeiculosUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    demandas?: DemandasUpdateManyWithoutVeiculoNestedInput
    secretarias?: SecretariasUpdateOneWithoutVeiculosNestedInput
  }

  export type VeiculosUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
    demandas?: DemandasUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculosUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemandasUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: NullableStringFieldUpdateOperationsInput | string | null
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: NullableStringFieldUpdateOperationsInput | string | null
    dataHoraVolta?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    veiculo?: VeiculosUpdateOneWithoutDemandasNestedInput
    secretarias?: SecretariasUpdateOneWithoutDemandasNestedInput
  }

  export type DemandasUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: NullableStringFieldUpdateOperationsInput | string | null
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: NullableStringFieldUpdateOperationsInput | string | null
    dataHoraVolta?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemandasUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: NullableStringFieldUpdateOperationsInput | string | null
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: NullableStringFieldUpdateOperationsInput | string | null
    dataHoraVolta?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
    secretariasId?: NullableStringFieldUpdateOperationsInput | string | null
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