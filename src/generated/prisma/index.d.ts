
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
 * Model Demanda
 * 
 */
export type Demanda = $Result.DefaultSelection<Prisma.$DemandaPayload>
/**
 * Model Veiculo
 * 
 */
export type Veiculo = $Result.DefaultSelection<Prisma.$VeiculoPayload>
/**
 * Model VeiculoModelo
 * 
 */
export type VeiculoModelo = $Result.DefaultSelection<Prisma.$VeiculoModeloPayload>
/**
 * Model Motorista
 * 
 */
export type Motorista = $Result.DefaultSelection<Prisma.$MotoristaPayload>
/**
 * Model Acesso
 * 
 */
export type Acesso = $Result.DefaultSelection<Prisma.$AcessoPayload>
/**
 * Model Secretaria
 * 
 */
export type Secretaria = $Result.DefaultSelection<Prisma.$SecretariaPayload>
/**
 * Model UserSecretaria
 * 
 */
export type UserSecretaria = $Result.DefaultSelection<Prisma.$UserSecretariaPayload>
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
 * Enums
 */
export namespace $Enums {
  export const OrigemDemanda: {
  EXTERNA: 'EXTERNA',
  INTERNA: 'INTERNA'
};

export type OrigemDemanda = (typeof OrigemDemanda)[keyof typeof OrigemDemanda]

}

export type OrigemDemanda = $Enums.OrigemDemanda

export const OrigemDemanda: typeof $Enums.OrigemDemanda

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Demandas
 * const demandas = await prisma.demanda.findMany()
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
   * const demandas = await prisma.demanda.findMany()
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
   * `prisma.demanda`: Exposes CRUD operations for the **Demanda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Demandas
    * const demandas = await prisma.demanda.findMany()
    * ```
    */
  get demanda(): Prisma.DemandaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.veiculo`: Exposes CRUD operations for the **Veiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veiculos
    * const veiculos = await prisma.veiculo.findMany()
    * ```
    */
  get veiculo(): Prisma.VeiculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.veiculoModelo`: Exposes CRUD operations for the **VeiculoModelo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VeiculoModelos
    * const veiculoModelos = await prisma.veiculoModelo.findMany()
    * ```
    */
  get veiculoModelo(): Prisma.VeiculoModeloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.motorista`: Exposes CRUD operations for the **Motorista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Motoristas
    * const motoristas = await prisma.motorista.findMany()
    * ```
    */
  get motorista(): Prisma.MotoristaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.acesso`: Exposes CRUD operations for the **Acesso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Acessos
    * const acessos = await prisma.acesso.findMany()
    * ```
    */
  get acesso(): Prisma.AcessoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.secretaria`: Exposes CRUD operations for the **Secretaria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Secretarias
    * const secretarias = await prisma.secretaria.findMany()
    * ```
    */
  get secretaria(): Prisma.SecretariaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSecretaria`: Exposes CRUD operations for the **UserSecretaria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSecretarias
    * const userSecretarias = await prisma.userSecretaria.findMany()
    * ```
    */
  get userSecretaria(): Prisma.UserSecretariaDelegate<ExtArgs, ClientOptions>;

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
    Demanda: 'Demanda',
    Veiculo: 'Veiculo',
    VeiculoModelo: 'VeiculoModelo',
    Motorista: 'Motorista',
    Acesso: 'Acesso',
    Secretaria: 'Secretaria',
    UserSecretaria: 'UserSecretaria',
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
      modelProps: "demanda" | "veiculo" | "veiculoModelo" | "motorista" | "acesso" | "secretaria" | "userSecretaria" | "user" | "session" | "account" | "verification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Demanda: {
        payload: Prisma.$DemandaPayload<ExtArgs>
        fields: Prisma.DemandaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemandaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemandaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>
          }
          findFirst: {
            args: Prisma.DemandaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemandaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>
          }
          findMany: {
            args: Prisma.DemandaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>[]
          }
          create: {
            args: Prisma.DemandaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>
          }
          createMany: {
            args: Prisma.DemandaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DemandaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>[]
          }
          delete: {
            args: Prisma.DemandaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>
          }
          update: {
            args: Prisma.DemandaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>
          }
          deleteMany: {
            args: Prisma.DemandaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DemandaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DemandaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>[]
          }
          upsert: {
            args: Prisma.DemandaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandaPayload>
          }
          aggregate: {
            args: Prisma.DemandaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemanda>
          }
          groupBy: {
            args: Prisma.DemandaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemandaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemandaCountArgs<ExtArgs>
            result: $Utils.Optional<DemandaCountAggregateOutputType> | number
          }
        }
      }
      Veiculo: {
        payload: Prisma.$VeiculoPayload<ExtArgs>
        fields: Prisma.VeiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          findFirst: {
            args: Prisma.VeiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          findMany: {
            args: Prisma.VeiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          create: {
            args: Prisma.VeiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          createMany: {
            args: Prisma.VeiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VeiculoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          delete: {
            args: Prisma.VeiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          update: {
            args: Prisma.VeiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          deleteMany: {
            args: Prisma.VeiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VeiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VeiculoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          upsert: {
            args: Prisma.VeiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          aggregate: {
            args: Prisma.VeiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeiculo>
          }
          groupBy: {
            args: Prisma.VeiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeiculoCountArgs<ExtArgs>
            result: $Utils.Optional<VeiculoCountAggregateOutputType> | number
          }
        }
      }
      VeiculoModelo: {
        payload: Prisma.$VeiculoModeloPayload<ExtArgs>
        fields: Prisma.VeiculoModeloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeiculoModeloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoModeloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeiculoModeloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoModeloPayload>
          }
          findFirst: {
            args: Prisma.VeiculoModeloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoModeloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeiculoModeloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoModeloPayload>
          }
          findMany: {
            args: Prisma.VeiculoModeloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoModeloPayload>[]
          }
          create: {
            args: Prisma.VeiculoModeloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoModeloPayload>
          }
          createMany: {
            args: Prisma.VeiculoModeloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VeiculoModeloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoModeloPayload>[]
          }
          delete: {
            args: Prisma.VeiculoModeloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoModeloPayload>
          }
          update: {
            args: Prisma.VeiculoModeloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoModeloPayload>
          }
          deleteMany: {
            args: Prisma.VeiculoModeloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VeiculoModeloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VeiculoModeloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoModeloPayload>[]
          }
          upsert: {
            args: Prisma.VeiculoModeloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoModeloPayload>
          }
          aggregate: {
            args: Prisma.VeiculoModeloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeiculoModelo>
          }
          groupBy: {
            args: Prisma.VeiculoModeloGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeiculoModeloGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeiculoModeloCountArgs<ExtArgs>
            result: $Utils.Optional<VeiculoModeloCountAggregateOutputType> | number
          }
        }
      }
      Motorista: {
        payload: Prisma.$MotoristaPayload<ExtArgs>
        fields: Prisma.MotoristaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MotoristaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MotoristaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>
          }
          findFirst: {
            args: Prisma.MotoristaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MotoristaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>
          }
          findMany: {
            args: Prisma.MotoristaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>[]
          }
          create: {
            args: Prisma.MotoristaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>
          }
          createMany: {
            args: Prisma.MotoristaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MotoristaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>[]
          }
          delete: {
            args: Prisma.MotoristaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>
          }
          update: {
            args: Prisma.MotoristaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>
          }
          deleteMany: {
            args: Prisma.MotoristaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MotoristaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MotoristaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>[]
          }
          upsert: {
            args: Prisma.MotoristaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotoristaPayload>
          }
          aggregate: {
            args: Prisma.MotoristaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMotorista>
          }
          groupBy: {
            args: Prisma.MotoristaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MotoristaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MotoristaCountArgs<ExtArgs>
            result: $Utils.Optional<MotoristaCountAggregateOutputType> | number
          }
        }
      }
      Acesso: {
        payload: Prisma.$AcessoPayload<ExtArgs>
        fields: Prisma.AcessoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcessoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcessoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload>
          }
          findFirst: {
            args: Prisma.AcessoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcessoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload>
          }
          findMany: {
            args: Prisma.AcessoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload>[]
          }
          create: {
            args: Prisma.AcessoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload>
          }
          createMany: {
            args: Prisma.AcessoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcessoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload>[]
          }
          delete: {
            args: Prisma.AcessoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload>
          }
          update: {
            args: Prisma.AcessoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload>
          }
          deleteMany: {
            args: Prisma.AcessoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcessoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcessoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload>[]
          }
          upsert: {
            args: Prisma.AcessoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload>
          }
          aggregate: {
            args: Prisma.AcessoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcesso>
          }
          groupBy: {
            args: Prisma.AcessoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcessoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcessoCountArgs<ExtArgs>
            result: $Utils.Optional<AcessoCountAggregateOutputType> | number
          }
        }
      }
      Secretaria: {
        payload: Prisma.$SecretariaPayload<ExtArgs>
        fields: Prisma.SecretariaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecretariaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecretariaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          findFirst: {
            args: Prisma.SecretariaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecretariaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          findMany: {
            args: Prisma.SecretariaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>[]
          }
          create: {
            args: Prisma.SecretariaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          createMany: {
            args: Prisma.SecretariaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecretariaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>[]
          }
          delete: {
            args: Prisma.SecretariaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          update: {
            args: Prisma.SecretariaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          deleteMany: {
            args: Prisma.SecretariaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecretariaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecretariaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>[]
          }
          upsert: {
            args: Prisma.SecretariaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          aggregate: {
            args: Prisma.SecretariaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecretaria>
          }
          groupBy: {
            args: Prisma.SecretariaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecretariaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecretariaCountArgs<ExtArgs>
            result: $Utils.Optional<SecretariaCountAggregateOutputType> | number
          }
        }
      }
      UserSecretaria: {
        payload: Prisma.$UserSecretariaPayload<ExtArgs>
        fields: Prisma.UserSecretariaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSecretariaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecretariaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSecretariaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecretariaPayload>
          }
          findFirst: {
            args: Prisma.UserSecretariaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecretariaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSecretariaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecretariaPayload>
          }
          findMany: {
            args: Prisma.UserSecretariaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecretariaPayload>[]
          }
          create: {
            args: Prisma.UserSecretariaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecretariaPayload>
          }
          createMany: {
            args: Prisma.UserSecretariaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSecretariaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecretariaPayload>[]
          }
          delete: {
            args: Prisma.UserSecretariaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecretariaPayload>
          }
          update: {
            args: Prisma.UserSecretariaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecretariaPayload>
          }
          deleteMany: {
            args: Prisma.UserSecretariaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSecretariaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSecretariaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecretariaPayload>[]
          }
          upsert: {
            args: Prisma.UserSecretariaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecretariaPayload>
          }
          aggregate: {
            args: Prisma.UserSecretariaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSecretaria>
          }
          groupBy: {
            args: Prisma.UserSecretariaGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSecretariaGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSecretariaCountArgs<ExtArgs>
            result: $Utils.Optional<UserSecretariaCountAggregateOutputType> | number
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
    demanda?: DemandaOmit
    veiculo?: VeiculoOmit
    veiculoModelo?: VeiculoModeloOmit
    motorista?: MotoristaOmit
    acesso?: AcessoOmit
    secretaria?: SecretariaOmit
    userSecretaria?: UserSecretariaOmit
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
   * Count Type VeiculoCountOutputType
   */

  export type VeiculoCountOutputType = {
    demandas: number
  }

  export type VeiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandas?: boolean | VeiculoCountOutputTypeCountDemandasArgs
  }

  // Custom InputTypes
  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoCountOutputType
     */
    select?: VeiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeCountDemandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandaWhereInput
  }


  /**
   * Count Type VeiculoModeloCountOutputType
   */

  export type VeiculoModeloCountOutputType = {
    veiculos: number
  }

  export type VeiculoModeloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculos?: boolean | VeiculoModeloCountOutputTypeCountVeiculosArgs
  }

  // Custom InputTypes
  /**
   * VeiculoModeloCountOutputType without action
   */
  export type VeiculoModeloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoModeloCountOutputType
     */
    select?: VeiculoModeloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VeiculoModeloCountOutputType without action
   */
  export type VeiculoModeloCountOutputTypeCountVeiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoWhereInput
  }


  /**
   * Count Type MotoristaCountOutputType
   */

  export type MotoristaCountOutputType = {
    demandas: number
  }

  export type MotoristaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandas?: boolean | MotoristaCountOutputTypeCountDemandasArgs
  }

  // Custom InputTypes
  /**
   * MotoristaCountOutputType without action
   */
  export type MotoristaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotoristaCountOutputType
     */
    select?: MotoristaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MotoristaCountOutputType without action
   */
  export type MotoristaCountOutputTypeCountDemandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandaWhereInput
  }


  /**
   * Count Type AcessoCountOutputType
   */

  export type AcessoCountOutputType = {
    user: number
  }

  export type AcessoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AcessoCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * AcessoCountOutputType without action
   */
  export type AcessoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoCountOutputType
     */
    select?: AcessoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AcessoCountOutputType without action
   */
  export type AcessoCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type SecretariaCountOutputType
   */

  export type SecretariaCountOutputType = {
    demandas: number
    users: number
    veiculos: number
    motorista: number
  }

  export type SecretariaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandas?: boolean | SecretariaCountOutputTypeCountDemandasArgs
    users?: boolean | SecretariaCountOutputTypeCountUsersArgs
    veiculos?: boolean | SecretariaCountOutputTypeCountVeiculosArgs
    motorista?: boolean | SecretariaCountOutputTypeCountMotoristaArgs
  }

  // Custom InputTypes
  /**
   * SecretariaCountOutputType without action
   */
  export type SecretariaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretariaCountOutputType
     */
    select?: SecretariaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SecretariaCountOutputType without action
   */
  export type SecretariaCountOutputTypeCountDemandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandaWhereInput
  }

  /**
   * SecretariaCountOutputType without action
   */
  export type SecretariaCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSecretariaWhereInput
  }

  /**
   * SecretariaCountOutputType without action
   */
  export type SecretariaCountOutputTypeCountVeiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoWhereInput
  }

  /**
   * SecretariaCountOutputType without action
   */
  export type SecretariaCountOutputTypeCountMotoristaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotoristaWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    acesso: number
    sessions: number
    accounts: number
    veiculos: number
    secretarias: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acesso?: boolean | UserCountOutputTypeCountAcessoArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    veiculos?: boolean | UserCountOutputTypeCountVeiculosArgs
    secretarias?: boolean | UserCountOutputTypeCountSecretariasArgs
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
  export type UserCountOutputTypeCountAcessoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcessoWhereInput
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
    where?: VeiculoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSecretariasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSecretariaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Demanda
   */

  export type AggregateDemanda = {
    _count: DemandaCountAggregateOutputType | null
    _avg: DemandaAvgAggregateOutputType | null
    _sum: DemandaSumAggregateOutputType | null
    _min: DemandaMinAggregateOutputType | null
    _max: DemandaMaxAggregateOutputType | null
  }

  export type DemandaAvgAggregateOutputType = {
    lotacao: number | null
    kmRodado: number | null
  }

  export type DemandaSumAggregateOutputType = {
    lotacao: number | null
    kmRodado: number | null
  }

  export type DemandaMinAggregateOutputType = {
    id: string | null
    origemDemanda: $Enums.OrigemDemanda | null
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
    lotacao: number | null
    kmRodado: number | null
    recurso: string | null
    categoria: string | null
    veiculoId: string | null
    motoristaId: string | null
    secretariaId: string | null
  }

  export type DemandaMaxAggregateOutputType = {
    id: string | null
    origemDemanda: $Enums.OrigemDemanda | null
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
    lotacao: number | null
    kmRodado: number | null
    recurso: string | null
    categoria: string | null
    veiculoId: string | null
    motoristaId: string | null
    secretariaId: string | null
  }

  export type DemandaCountAggregateOutputType = {
    id: number
    origemDemanda: number
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
    lotacao: number
    kmRodado: number
    recurso: number
    categoria: number
    veiculoId: number
    motoristaId: number
    secretariaId: number
    _all: number
  }


  export type DemandaAvgAggregateInputType = {
    lotacao?: true
    kmRodado?: true
  }

  export type DemandaSumAggregateInputType = {
    lotacao?: true
    kmRodado?: true
  }

  export type DemandaMinAggregateInputType = {
    id?: true
    origemDemanda?: true
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
    lotacao?: true
    kmRodado?: true
    recurso?: true
    categoria?: true
    veiculoId?: true
    motoristaId?: true
    secretariaId?: true
  }

  export type DemandaMaxAggregateInputType = {
    id?: true
    origemDemanda?: true
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
    lotacao?: true
    kmRodado?: true
    recurso?: true
    categoria?: true
    veiculoId?: true
    motoristaId?: true
    secretariaId?: true
  }

  export type DemandaCountAggregateInputType = {
    id?: true
    origemDemanda?: true
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
    lotacao?: true
    kmRodado?: true
    recurso?: true
    categoria?: true
    veiculoId?: true
    motoristaId?: true
    secretariaId?: true
    _all?: true
  }

  export type DemandaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demanda to aggregate.
     */
    where?: DemandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandas to fetch.
     */
    orderBy?: DemandaOrderByWithRelationInput | DemandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemandaWhereUniqueInput
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
    _count?: true | DemandaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DemandaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DemandaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemandaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemandaMaxAggregateInputType
  }

  export type GetDemandaAggregateType<T extends DemandaAggregateArgs> = {
        [P in keyof T & keyof AggregateDemanda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemanda[P]>
      : GetScalarType<T[P], AggregateDemanda[P]>
  }




  export type DemandaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandaWhereInput
    orderBy?: DemandaOrderByWithAggregationInput | DemandaOrderByWithAggregationInput[]
    by: DemandaScalarFieldEnum[] | DemandaScalarFieldEnum
    having?: DemandaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemandaCountAggregateInputType | true
    _avg?: DemandaAvgAggregateInputType
    _sum?: DemandaSumAggregateInputType
    _min?: DemandaMinAggregateInputType
    _max?: DemandaMaxAggregateInputType
  }

  export type DemandaGroupByOutputType = {
    id: string
    origemDemanda: $Enums.OrigemDemanda
    emailSolicitante: string
    demandaDetalhe: string
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda: string
    dataHoraVolta: string
    origem: string
    contato: string
    statusDemanda: string
    createdAt: Date
    updatedAt: Date
    lotacao: number | null
    kmRodado: number | null
    recurso: string | null
    categoria: string | null
    veiculoId: string | null
    motoristaId: string | null
    secretariaId: string | null
    _count: DemandaCountAggregateOutputType | null
    _avg: DemandaAvgAggregateOutputType | null
    _sum: DemandaSumAggregateOutputType | null
    _min: DemandaMinAggregateOutputType | null
    _max: DemandaMaxAggregateOutputType | null
  }

  type GetDemandaGroupByPayload<T extends DemandaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemandaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemandaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemandaGroupByOutputType[P]>
            : GetScalarType<T[P], DemandaGroupByOutputType[P]>
        }
      >
    >


  export type DemandaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    origemDemanda?: boolean
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
    lotacao?: boolean
    kmRodado?: boolean
    recurso?: boolean
    categoria?: boolean
    veiculoId?: boolean
    motoristaId?: boolean
    secretariaId?: boolean
    veiculo?: boolean | Demanda$veiculoArgs<ExtArgs>
    motorista?: boolean | Demanda$motoristaArgs<ExtArgs>
    secretaria?: boolean | Demanda$secretariaArgs<ExtArgs>
  }, ExtArgs["result"]["demanda"]>

  export type DemandaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    origemDemanda?: boolean
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
    lotacao?: boolean
    kmRodado?: boolean
    recurso?: boolean
    categoria?: boolean
    veiculoId?: boolean
    motoristaId?: boolean
    secretariaId?: boolean
    veiculo?: boolean | Demanda$veiculoArgs<ExtArgs>
    motorista?: boolean | Demanda$motoristaArgs<ExtArgs>
    secretaria?: boolean | Demanda$secretariaArgs<ExtArgs>
  }, ExtArgs["result"]["demanda"]>

  export type DemandaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    origemDemanda?: boolean
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
    lotacao?: boolean
    kmRodado?: boolean
    recurso?: boolean
    categoria?: boolean
    veiculoId?: boolean
    motoristaId?: boolean
    secretariaId?: boolean
    veiculo?: boolean | Demanda$veiculoArgs<ExtArgs>
    motorista?: boolean | Demanda$motoristaArgs<ExtArgs>
    secretaria?: boolean | Demanda$secretariaArgs<ExtArgs>
  }, ExtArgs["result"]["demanda"]>

  export type DemandaSelectScalar = {
    id?: boolean
    origemDemanda?: boolean
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
    lotacao?: boolean
    kmRodado?: boolean
    recurso?: boolean
    categoria?: boolean
    veiculoId?: boolean
    motoristaId?: boolean
    secretariaId?: boolean
  }

  export type DemandaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "origemDemanda" | "emailSolicitante" | "demandaDetalhe" | "pessoaSolicitante" | "secretariaSolicitante" | "destino" | "dataHoraIda" | "dataHoraVolta" | "origem" | "contato" | "statusDemanda" | "createdAt" | "updatedAt" | "lotacao" | "kmRodado" | "recurso" | "categoria" | "veiculoId" | "motoristaId" | "secretariaId", ExtArgs["result"]["demanda"]>
  export type DemandaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculo?: boolean | Demanda$veiculoArgs<ExtArgs>
    motorista?: boolean | Demanda$motoristaArgs<ExtArgs>
    secretaria?: boolean | Demanda$secretariaArgs<ExtArgs>
  }
  export type DemandaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculo?: boolean | Demanda$veiculoArgs<ExtArgs>
    motorista?: boolean | Demanda$motoristaArgs<ExtArgs>
    secretaria?: boolean | Demanda$secretariaArgs<ExtArgs>
  }
  export type DemandaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculo?: boolean | Demanda$veiculoArgs<ExtArgs>
    motorista?: boolean | Demanda$motoristaArgs<ExtArgs>
    secretaria?: boolean | Demanda$secretariaArgs<ExtArgs>
  }

  export type $DemandaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Demanda"
    objects: {
      veiculo: Prisma.$VeiculoPayload<ExtArgs> | null
      motorista: Prisma.$MotoristaPayload<ExtArgs> | null
      secretaria: Prisma.$SecretariaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      origemDemanda: $Enums.OrigemDemanda
      emailSolicitante: string
      demandaDetalhe: string
      pessoaSolicitante: string
      secretariaSolicitante: string
      destino: string
      dataHoraIda: string
      dataHoraVolta: string
      origem: string
      contato: string
      statusDemanda: string
      createdAt: Date
      updatedAt: Date
      lotacao: number | null
      kmRodado: number | null
      recurso: string | null
      categoria: string | null
      veiculoId: string | null
      motoristaId: string | null
      secretariaId: string | null
    }, ExtArgs["result"]["demanda"]>
    composites: {}
  }

  type DemandaGetPayload<S extends boolean | null | undefined | DemandaDefaultArgs> = $Result.GetResult<Prisma.$DemandaPayload, S>

  type DemandaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DemandaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemandaCountAggregateInputType | true
    }

  export interface DemandaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Demanda'], meta: { name: 'Demanda' } }
    /**
     * Find zero or one Demanda that matches the filter.
     * @param {DemandaFindUniqueArgs} args - Arguments to find a Demanda
     * @example
     * // Get one Demanda
     * const demanda = await prisma.demanda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DemandaFindUniqueArgs>(args: SelectSubset<T, DemandaFindUniqueArgs<ExtArgs>>): Prisma__DemandaClient<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Demanda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DemandaFindUniqueOrThrowArgs} args - Arguments to find a Demanda
     * @example
     * // Get one Demanda
     * const demanda = await prisma.demanda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DemandaFindUniqueOrThrowArgs>(args: SelectSubset<T, DemandaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DemandaClient<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demanda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandaFindFirstArgs} args - Arguments to find a Demanda
     * @example
     * // Get one Demanda
     * const demanda = await prisma.demanda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DemandaFindFirstArgs>(args?: SelectSubset<T, DemandaFindFirstArgs<ExtArgs>>): Prisma__DemandaClient<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demanda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandaFindFirstOrThrowArgs} args - Arguments to find a Demanda
     * @example
     * // Get one Demanda
     * const demanda = await prisma.demanda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DemandaFindFirstOrThrowArgs>(args?: SelectSubset<T, DemandaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DemandaClient<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Demandas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Demandas
     * const demandas = await prisma.demanda.findMany()
     * 
     * // Get first 10 Demandas
     * const demandas = await prisma.demanda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demandaWithIdOnly = await prisma.demanda.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DemandaFindManyArgs>(args?: SelectSubset<T, DemandaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Demanda.
     * @param {DemandaCreateArgs} args - Arguments to create a Demanda.
     * @example
     * // Create one Demanda
     * const Demanda = await prisma.demanda.create({
     *   data: {
     *     // ... data to create a Demanda
     *   }
     * })
     * 
     */
    create<T extends DemandaCreateArgs>(args: SelectSubset<T, DemandaCreateArgs<ExtArgs>>): Prisma__DemandaClient<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Demandas.
     * @param {DemandaCreateManyArgs} args - Arguments to create many Demandas.
     * @example
     * // Create many Demandas
     * const demanda = await prisma.demanda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DemandaCreateManyArgs>(args?: SelectSubset<T, DemandaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Demandas and returns the data saved in the database.
     * @param {DemandaCreateManyAndReturnArgs} args - Arguments to create many Demandas.
     * @example
     * // Create many Demandas
     * const demanda = await prisma.demanda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Demandas and only return the `id`
     * const demandaWithIdOnly = await prisma.demanda.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DemandaCreateManyAndReturnArgs>(args?: SelectSubset<T, DemandaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Demanda.
     * @param {DemandaDeleteArgs} args - Arguments to delete one Demanda.
     * @example
     * // Delete one Demanda
     * const Demanda = await prisma.demanda.delete({
     *   where: {
     *     // ... filter to delete one Demanda
     *   }
     * })
     * 
     */
    delete<T extends DemandaDeleteArgs>(args: SelectSubset<T, DemandaDeleteArgs<ExtArgs>>): Prisma__DemandaClient<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Demanda.
     * @param {DemandaUpdateArgs} args - Arguments to update one Demanda.
     * @example
     * // Update one Demanda
     * const demanda = await prisma.demanda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DemandaUpdateArgs>(args: SelectSubset<T, DemandaUpdateArgs<ExtArgs>>): Prisma__DemandaClient<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Demandas.
     * @param {DemandaDeleteManyArgs} args - Arguments to filter Demandas to delete.
     * @example
     * // Delete a few Demandas
     * const { count } = await prisma.demanda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DemandaDeleteManyArgs>(args?: SelectSubset<T, DemandaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Demandas
     * const demanda = await prisma.demanda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DemandaUpdateManyArgs>(args: SelectSubset<T, DemandaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demandas and returns the data updated in the database.
     * @param {DemandaUpdateManyAndReturnArgs} args - Arguments to update many Demandas.
     * @example
     * // Update many Demandas
     * const demanda = await prisma.demanda.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Demandas and only return the `id`
     * const demandaWithIdOnly = await prisma.demanda.updateManyAndReturn({
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
    updateManyAndReturn<T extends DemandaUpdateManyAndReturnArgs>(args: SelectSubset<T, DemandaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Demanda.
     * @param {DemandaUpsertArgs} args - Arguments to update or create a Demanda.
     * @example
     * // Update or create a Demanda
     * const demanda = await prisma.demanda.upsert({
     *   create: {
     *     // ... data to create a Demanda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Demanda we want to update
     *   }
     * })
     */
    upsert<T extends DemandaUpsertArgs>(args: SelectSubset<T, DemandaUpsertArgs<ExtArgs>>): Prisma__DemandaClient<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Demandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandaCountArgs} args - Arguments to filter Demandas to count.
     * @example
     * // Count the number of Demandas
     * const count = await prisma.demanda.count({
     *   where: {
     *     // ... the filter for the Demandas we want to count
     *   }
     * })
    **/
    count<T extends DemandaCountArgs>(
      args?: Subset<T, DemandaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemandaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Demanda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DemandaAggregateArgs>(args: Subset<T, DemandaAggregateArgs>): Prisma.PrismaPromise<GetDemandaAggregateType<T>>

    /**
     * Group by Demanda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandaGroupByArgs} args - Group by arguments.
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
      T extends DemandaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemandaGroupByArgs['orderBy'] }
        : { orderBy?: DemandaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DemandaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemandaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Demanda model
   */
  readonly fields: DemandaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Demanda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemandaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    veiculo<T extends Demanda$veiculoArgs<ExtArgs> = {}>(args?: Subset<T, Demanda$veiculoArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    motorista<T extends Demanda$motoristaArgs<ExtArgs> = {}>(args?: Subset<T, Demanda$motoristaArgs<ExtArgs>>): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    secretaria<T extends Demanda$secretariaArgs<ExtArgs> = {}>(args?: Subset<T, Demanda$secretariaArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Demanda model
   */
  interface DemandaFieldRefs {
    readonly id: FieldRef<"Demanda", 'String'>
    readonly origemDemanda: FieldRef<"Demanda", 'OrigemDemanda'>
    readonly emailSolicitante: FieldRef<"Demanda", 'String'>
    readonly demandaDetalhe: FieldRef<"Demanda", 'String'>
    readonly pessoaSolicitante: FieldRef<"Demanda", 'String'>
    readonly secretariaSolicitante: FieldRef<"Demanda", 'String'>
    readonly destino: FieldRef<"Demanda", 'String'>
    readonly dataHoraIda: FieldRef<"Demanda", 'String'>
    readonly dataHoraVolta: FieldRef<"Demanda", 'String'>
    readonly origem: FieldRef<"Demanda", 'String'>
    readonly contato: FieldRef<"Demanda", 'String'>
    readonly statusDemanda: FieldRef<"Demanda", 'String'>
    readonly createdAt: FieldRef<"Demanda", 'DateTime'>
    readonly updatedAt: FieldRef<"Demanda", 'DateTime'>
    readonly lotacao: FieldRef<"Demanda", 'Int'>
    readonly kmRodado: FieldRef<"Demanda", 'Int'>
    readonly recurso: FieldRef<"Demanda", 'String'>
    readonly categoria: FieldRef<"Demanda", 'String'>
    readonly veiculoId: FieldRef<"Demanda", 'String'>
    readonly motoristaId: FieldRef<"Demanda", 'String'>
    readonly secretariaId: FieldRef<"Demanda", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Demanda findUnique
   */
  export type DemandaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * Filter, which Demanda to fetch.
     */
    where: DemandaWhereUniqueInput
  }

  /**
   * Demanda findUniqueOrThrow
   */
  export type DemandaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * Filter, which Demanda to fetch.
     */
    where: DemandaWhereUniqueInput
  }

  /**
   * Demanda findFirst
   */
  export type DemandaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * Filter, which Demanda to fetch.
     */
    where?: DemandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandas to fetch.
     */
    orderBy?: DemandaOrderByWithRelationInput | DemandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demandas.
     */
    cursor?: DemandaWhereUniqueInput
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
    distinct?: DemandaScalarFieldEnum | DemandaScalarFieldEnum[]
  }

  /**
   * Demanda findFirstOrThrow
   */
  export type DemandaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * Filter, which Demanda to fetch.
     */
    where?: DemandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandas to fetch.
     */
    orderBy?: DemandaOrderByWithRelationInput | DemandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demandas.
     */
    cursor?: DemandaWhereUniqueInput
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
    distinct?: DemandaScalarFieldEnum | DemandaScalarFieldEnum[]
  }

  /**
   * Demanda findMany
   */
  export type DemandaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * Filter, which Demandas to fetch.
     */
    where?: DemandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandas to fetch.
     */
    orderBy?: DemandaOrderByWithRelationInput | DemandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Demandas.
     */
    cursor?: DemandaWhereUniqueInput
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
    distinct?: DemandaScalarFieldEnum | DemandaScalarFieldEnum[]
  }

  /**
   * Demanda create
   */
  export type DemandaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * The data needed to create a Demanda.
     */
    data: XOR<DemandaCreateInput, DemandaUncheckedCreateInput>
  }

  /**
   * Demanda createMany
   */
  export type DemandaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Demandas.
     */
    data: DemandaCreateManyInput | DemandaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Demanda createManyAndReturn
   */
  export type DemandaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * The data used to create many Demandas.
     */
    data: DemandaCreateManyInput | DemandaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Demanda update
   */
  export type DemandaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * The data needed to update a Demanda.
     */
    data: XOR<DemandaUpdateInput, DemandaUncheckedUpdateInput>
    /**
     * Choose, which Demanda to update.
     */
    where: DemandaWhereUniqueInput
  }

  /**
   * Demanda updateMany
   */
  export type DemandaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Demandas.
     */
    data: XOR<DemandaUpdateManyMutationInput, DemandaUncheckedUpdateManyInput>
    /**
     * Filter which Demandas to update
     */
    where?: DemandaWhereInput
    /**
     * Limit how many Demandas to update.
     */
    limit?: number
  }

  /**
   * Demanda updateManyAndReturn
   */
  export type DemandaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * The data used to update Demandas.
     */
    data: XOR<DemandaUpdateManyMutationInput, DemandaUncheckedUpdateManyInput>
    /**
     * Filter which Demandas to update
     */
    where?: DemandaWhereInput
    /**
     * Limit how many Demandas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Demanda upsert
   */
  export type DemandaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * The filter to search for the Demanda to update in case it exists.
     */
    where: DemandaWhereUniqueInput
    /**
     * In case the Demanda found by the `where` argument doesn't exist, create a new Demanda with this data.
     */
    create: XOR<DemandaCreateInput, DemandaUncheckedCreateInput>
    /**
     * In case the Demanda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemandaUpdateInput, DemandaUncheckedUpdateInput>
  }

  /**
   * Demanda delete
   */
  export type DemandaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    /**
     * Filter which Demanda to delete.
     */
    where: DemandaWhereUniqueInput
  }

  /**
   * Demanda deleteMany
   */
  export type DemandaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demandas to delete
     */
    where?: DemandaWhereInput
    /**
     * Limit how many Demandas to delete.
     */
    limit?: number
  }

  /**
   * Demanda.veiculo
   */
  export type Demanda$veiculoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    where?: VeiculoWhereInput
  }

  /**
   * Demanda.motorista
   */
  export type Demanda$motoristaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorista
     */
    omit?: MotoristaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    where?: MotoristaWhereInput
  }

  /**
   * Demanda.secretaria
   */
  export type Demanda$secretariaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    where?: SecretariaWhereInput
  }

  /**
   * Demanda without action
   */
  export type DemandaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
  }


  /**
   * Model Veiculo
   */

  export type AggregateVeiculo = {
    _count: VeiculoCountAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  export type VeiculoMinAggregateOutputType = {
    id: string | null
    placaVeiculo: string | null
    chassiVeiculo: string | null
    renavamVeiculo: string | null
    proprietarioVeiculo: string | null
    crlvVeiculo: string | null
    secretariaId: string | null
    userId: string | null
    modeloId: string | null
  }

  export type VeiculoMaxAggregateOutputType = {
    id: string | null
    placaVeiculo: string | null
    chassiVeiculo: string | null
    renavamVeiculo: string | null
    proprietarioVeiculo: string | null
    crlvVeiculo: string | null
    secretariaId: string | null
    userId: string | null
    modeloId: string | null
  }

  export type VeiculoCountAggregateOutputType = {
    id: number
    placaVeiculo: number
    chassiVeiculo: number
    renavamVeiculo: number
    proprietarioVeiculo: number
    crlvVeiculo: number
    secretariaId: number
    userId: number
    modeloId: number
    _all: number
  }


  export type VeiculoMinAggregateInputType = {
    id?: true
    placaVeiculo?: true
    chassiVeiculo?: true
    renavamVeiculo?: true
    proprietarioVeiculo?: true
    crlvVeiculo?: true
    secretariaId?: true
    userId?: true
    modeloId?: true
  }

  export type VeiculoMaxAggregateInputType = {
    id?: true
    placaVeiculo?: true
    chassiVeiculo?: true
    renavamVeiculo?: true
    proprietarioVeiculo?: true
    crlvVeiculo?: true
    secretariaId?: true
    userId?: true
    modeloId?: true
  }

  export type VeiculoCountAggregateInputType = {
    id?: true
    placaVeiculo?: true
    chassiVeiculo?: true
    renavamVeiculo?: true
    proprietarioVeiculo?: true
    crlvVeiculo?: true
    secretariaId?: true
    userId?: true
    modeloId?: true
    _all?: true
  }

  export type VeiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veiculo to aggregate.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeiculoWhereUniqueInput
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
    _count?: true | VeiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeiculoMaxAggregateInputType
  }

  export type GetVeiculoAggregateType<T extends VeiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVeiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeiculo[P]>
      : GetScalarType<T[P], AggregateVeiculo[P]>
  }




  export type VeiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoWhereInput
    orderBy?: VeiculoOrderByWithAggregationInput | VeiculoOrderByWithAggregationInput[]
    by: VeiculoScalarFieldEnum[] | VeiculoScalarFieldEnum
    having?: VeiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeiculoCountAggregateInputType | true
    _min?: VeiculoMinAggregateInputType
    _max?: VeiculoMaxAggregateInputType
  }

  export type VeiculoGroupByOutputType = {
    id: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    secretariaId: string
    userId: string
    modeloId: string | null
    _count: VeiculoCountAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  type GetVeiculoGroupByPayload<T extends VeiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
            : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
        }
      >
    >


  export type VeiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placaVeiculo?: boolean
    chassiVeiculo?: boolean
    renavamVeiculo?: boolean
    proprietarioVeiculo?: boolean
    crlvVeiculo?: boolean
    secretariaId?: boolean
    userId?: boolean
    modeloId?: boolean
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    modelo?: boolean | Veiculo$modeloArgs<ExtArgs>
    demandas?: boolean | Veiculo$demandasArgs<ExtArgs>
    _count?: boolean | VeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placaVeiculo?: boolean
    chassiVeiculo?: boolean
    renavamVeiculo?: boolean
    proprietarioVeiculo?: boolean
    crlvVeiculo?: boolean
    secretariaId?: boolean
    userId?: boolean
    modeloId?: boolean
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    modelo?: boolean | Veiculo$modeloArgs<ExtArgs>
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placaVeiculo?: boolean
    chassiVeiculo?: boolean
    renavamVeiculo?: boolean
    proprietarioVeiculo?: boolean
    crlvVeiculo?: boolean
    secretariaId?: boolean
    userId?: boolean
    modeloId?: boolean
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    modelo?: boolean | Veiculo$modeloArgs<ExtArgs>
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectScalar = {
    id?: boolean
    placaVeiculo?: boolean
    chassiVeiculo?: boolean
    renavamVeiculo?: boolean
    proprietarioVeiculo?: boolean
    crlvVeiculo?: boolean
    secretariaId?: boolean
    userId?: boolean
    modeloId?: boolean
  }

  export type VeiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "placaVeiculo" | "chassiVeiculo" | "renavamVeiculo" | "proprietarioVeiculo" | "crlvVeiculo" | "secretariaId" | "userId" | "modeloId", ExtArgs["result"]["veiculo"]>
  export type VeiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    modelo?: boolean | Veiculo$modeloArgs<ExtArgs>
    demandas?: boolean | Veiculo$demandasArgs<ExtArgs>
    _count?: boolean | VeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VeiculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    modelo?: boolean | Veiculo$modeloArgs<ExtArgs>
  }
  export type VeiculoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    modelo?: boolean | Veiculo$modeloArgs<ExtArgs>
  }

  export type $VeiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Veiculo"
    objects: {
      secretaria: Prisma.$SecretariaPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      modelo: Prisma.$VeiculoModeloPayload<ExtArgs> | null
      demandas: Prisma.$DemandaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      placaVeiculo: string
      chassiVeiculo: string
      renavamVeiculo: string
      proprietarioVeiculo: string
      crlvVeiculo: string
      secretariaId: string
      userId: string
      modeloId: string | null
    }, ExtArgs["result"]["veiculo"]>
    composites: {}
  }

  type VeiculoGetPayload<S extends boolean | null | undefined | VeiculoDefaultArgs> = $Result.GetResult<Prisma.$VeiculoPayload, S>

  type VeiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VeiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeiculoCountAggregateInputType | true
    }

  export interface VeiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Veiculo'], meta: { name: 'Veiculo' } }
    /**
     * Find zero or one Veiculo that matches the filter.
     * @param {VeiculoFindUniqueArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VeiculoFindUniqueArgs>(args: SelectSubset<T, VeiculoFindUniqueArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Veiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VeiculoFindUniqueOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VeiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, VeiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindFirstArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VeiculoFindFirstArgs>(args?: SelectSubset<T, VeiculoFindFirstArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindFirstOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VeiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, VeiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Veiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veiculos
     * const veiculos = await prisma.veiculo.findMany()
     * 
     * // Get first 10 Veiculos
     * const veiculos = await prisma.veiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VeiculoFindManyArgs>(args?: SelectSubset<T, VeiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Veiculo.
     * @param {VeiculoCreateArgs} args - Arguments to create a Veiculo.
     * @example
     * // Create one Veiculo
     * const Veiculo = await prisma.veiculo.create({
     *   data: {
     *     // ... data to create a Veiculo
     *   }
     * })
     * 
     */
    create<T extends VeiculoCreateArgs>(args: SelectSubset<T, VeiculoCreateArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Veiculos.
     * @param {VeiculoCreateManyArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VeiculoCreateManyArgs>(args?: SelectSubset<T, VeiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Veiculos and returns the data saved in the database.
     * @param {VeiculoCreateManyAndReturnArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Veiculos and only return the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VeiculoCreateManyAndReturnArgs>(args?: SelectSubset<T, VeiculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Veiculo.
     * @param {VeiculoDeleteArgs} args - Arguments to delete one Veiculo.
     * @example
     * // Delete one Veiculo
     * const Veiculo = await prisma.veiculo.delete({
     *   where: {
     *     // ... filter to delete one Veiculo
     *   }
     * })
     * 
     */
    delete<T extends VeiculoDeleteArgs>(args: SelectSubset<T, VeiculoDeleteArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Veiculo.
     * @param {VeiculoUpdateArgs} args - Arguments to update one Veiculo.
     * @example
     * // Update one Veiculo
     * const veiculo = await prisma.veiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VeiculoUpdateArgs>(args: SelectSubset<T, VeiculoUpdateArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Veiculos.
     * @param {VeiculoDeleteManyArgs} args - Arguments to filter Veiculos to delete.
     * @example
     * // Delete a few Veiculos
     * const { count } = await prisma.veiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VeiculoDeleteManyArgs>(args?: SelectSubset<T, VeiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veiculos
     * const veiculo = await prisma.veiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VeiculoUpdateManyArgs>(args: SelectSubset<T, VeiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos and returns the data updated in the database.
     * @param {VeiculoUpdateManyAndReturnArgs} args - Arguments to update many Veiculos.
     * @example
     * // Update many Veiculos
     * const veiculo = await prisma.veiculo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Veiculos and only return the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.updateManyAndReturn({
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
    updateManyAndReturn<T extends VeiculoUpdateManyAndReturnArgs>(args: SelectSubset<T, VeiculoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Veiculo.
     * @param {VeiculoUpsertArgs} args - Arguments to update or create a Veiculo.
     * @example
     * // Update or create a Veiculo
     * const veiculo = await prisma.veiculo.upsert({
     *   create: {
     *     // ... data to create a Veiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veiculo we want to update
     *   }
     * })
     */
    upsert<T extends VeiculoUpsertArgs>(args: SelectSubset<T, VeiculoUpsertArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoCountArgs} args - Arguments to filter Veiculos to count.
     * @example
     * // Count the number of Veiculos
     * const count = await prisma.veiculo.count({
     *   where: {
     *     // ... the filter for the Veiculos we want to count
     *   }
     * })
    **/
    count<T extends VeiculoCountArgs>(
      args?: Subset<T, VeiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VeiculoAggregateArgs>(args: Subset<T, VeiculoAggregateArgs>): Prisma.PrismaPromise<GetVeiculoAggregateType<T>>

    /**
     * Group by Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoGroupByArgs} args - Group by arguments.
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
      T extends VeiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeiculoGroupByArgs['orderBy'] }
        : { orderBy?: VeiculoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VeiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Veiculo model
   */
  readonly fields: VeiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Veiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    secretaria<T extends SecretariaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SecretariaDefaultArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modelo<T extends Veiculo$modeloArgs<ExtArgs> = {}>(args?: Subset<T, Veiculo$modeloArgs<ExtArgs>>): Prisma__VeiculoModeloClient<$Result.GetResult<Prisma.$VeiculoModeloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    demandas<T extends Veiculo$demandasArgs<ExtArgs> = {}>(args?: Subset<T, Veiculo$demandasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Veiculo model
   */
  interface VeiculoFieldRefs {
    readonly id: FieldRef<"Veiculo", 'String'>
    readonly placaVeiculo: FieldRef<"Veiculo", 'String'>
    readonly chassiVeiculo: FieldRef<"Veiculo", 'String'>
    readonly renavamVeiculo: FieldRef<"Veiculo", 'String'>
    readonly proprietarioVeiculo: FieldRef<"Veiculo", 'String'>
    readonly crlvVeiculo: FieldRef<"Veiculo", 'String'>
    readonly secretariaId: FieldRef<"Veiculo", 'String'>
    readonly userId: FieldRef<"Veiculo", 'String'>
    readonly modeloId: FieldRef<"Veiculo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Veiculo findUnique
   */
  export type VeiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo findUniqueOrThrow
   */
  export type VeiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo findFirst
   */
  export type VeiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
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
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo findFirstOrThrow
   */
  export type VeiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
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
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo findMany
   */
  export type VeiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculos to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
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
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo create
   */
  export type VeiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a Veiculo.
     */
    data: XOR<VeiculoCreateInput, VeiculoUncheckedCreateInput>
  }

  /**
   * Veiculo createMany
   */
  export type VeiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Veiculos.
     */
    data: VeiculoCreateManyInput | VeiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Veiculo createManyAndReturn
   */
  export type VeiculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * The data used to create many Veiculos.
     */
    data: VeiculoCreateManyInput | VeiculoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Veiculo update
   */
  export type VeiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a Veiculo.
     */
    data: XOR<VeiculoUpdateInput, VeiculoUncheckedUpdateInput>
    /**
     * Choose, which Veiculo to update.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo updateMany
   */
  export type VeiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Veiculos.
     */
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyInput>
    /**
     * Filter which Veiculos to update
     */
    where?: VeiculoWhereInput
    /**
     * Limit how many Veiculos to update.
     */
    limit?: number
  }

  /**
   * Veiculo updateManyAndReturn
   */
  export type VeiculoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * The data used to update Veiculos.
     */
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyInput>
    /**
     * Filter which Veiculos to update
     */
    where?: VeiculoWhereInput
    /**
     * Limit how many Veiculos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Veiculo upsert
   */
  export type VeiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the Veiculo to update in case it exists.
     */
    where: VeiculoWhereUniqueInput
    /**
     * In case the Veiculo found by the `where` argument doesn't exist, create a new Veiculo with this data.
     */
    create: XOR<VeiculoCreateInput, VeiculoUncheckedCreateInput>
    /**
     * In case the Veiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeiculoUpdateInput, VeiculoUncheckedUpdateInput>
  }

  /**
   * Veiculo delete
   */
  export type VeiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter which Veiculo to delete.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo deleteMany
   */
  export type VeiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veiculos to delete
     */
    where?: VeiculoWhereInput
    /**
     * Limit how many Veiculos to delete.
     */
    limit?: number
  }

  /**
   * Veiculo.modelo
   */
  export type Veiculo$modeloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoModelo
     */
    select?: VeiculoModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeiculoModelo
     */
    omit?: VeiculoModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoModeloInclude<ExtArgs> | null
    where?: VeiculoModeloWhereInput
  }

  /**
   * Veiculo.demandas
   */
  export type Veiculo$demandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    where?: DemandaWhereInput
    orderBy?: DemandaOrderByWithRelationInput | DemandaOrderByWithRelationInput[]
    cursor?: DemandaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandaScalarFieldEnum | DemandaScalarFieldEnum[]
  }

  /**
   * Veiculo without action
   */
  export type VeiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
  }


  /**
   * Model VeiculoModelo
   */

  export type AggregateVeiculoModelo = {
    _count: VeiculoModeloCountAggregateOutputType | null
    _min: VeiculoModeloMinAggregateOutputType | null
    _max: VeiculoModeloMaxAggregateOutputType | null
  }

  export type VeiculoModeloMinAggregateOutputType = {
    id: string | null
    modelo: string | null
  }

  export type VeiculoModeloMaxAggregateOutputType = {
    id: string | null
    modelo: string | null
  }

  export type VeiculoModeloCountAggregateOutputType = {
    id: number
    modelo: number
    _all: number
  }


  export type VeiculoModeloMinAggregateInputType = {
    id?: true
    modelo?: true
  }

  export type VeiculoModeloMaxAggregateInputType = {
    id?: true
    modelo?: true
  }

  export type VeiculoModeloCountAggregateInputType = {
    id?: true
    modelo?: true
    _all?: true
  }

  export type VeiculoModeloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VeiculoModelo to aggregate.
     */
    where?: VeiculoModeloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoModelos to fetch.
     */
    orderBy?: VeiculoModeloOrderByWithRelationInput | VeiculoModeloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeiculoModeloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoModelos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoModelos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VeiculoModelos
    **/
    _count?: true | VeiculoModeloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeiculoModeloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeiculoModeloMaxAggregateInputType
  }

  export type GetVeiculoModeloAggregateType<T extends VeiculoModeloAggregateArgs> = {
        [P in keyof T & keyof AggregateVeiculoModelo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeiculoModelo[P]>
      : GetScalarType<T[P], AggregateVeiculoModelo[P]>
  }




  export type VeiculoModeloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoModeloWhereInput
    orderBy?: VeiculoModeloOrderByWithAggregationInput | VeiculoModeloOrderByWithAggregationInput[]
    by: VeiculoModeloScalarFieldEnum[] | VeiculoModeloScalarFieldEnum
    having?: VeiculoModeloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeiculoModeloCountAggregateInputType | true
    _min?: VeiculoModeloMinAggregateInputType
    _max?: VeiculoModeloMaxAggregateInputType
  }

  export type VeiculoModeloGroupByOutputType = {
    id: string
    modelo: string
    _count: VeiculoModeloCountAggregateOutputType | null
    _min: VeiculoModeloMinAggregateOutputType | null
    _max: VeiculoModeloMaxAggregateOutputType | null
  }

  type GetVeiculoModeloGroupByPayload<T extends VeiculoModeloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeiculoModeloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeiculoModeloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeiculoModeloGroupByOutputType[P]>
            : GetScalarType<T[P], VeiculoModeloGroupByOutputType[P]>
        }
      >
    >


  export type VeiculoModeloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
    veiculos?: boolean | VeiculoModelo$veiculosArgs<ExtArgs>
    _count?: boolean | VeiculoModeloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculoModelo"]>

  export type VeiculoModeloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
  }, ExtArgs["result"]["veiculoModelo"]>

  export type VeiculoModeloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
  }, ExtArgs["result"]["veiculoModelo"]>

  export type VeiculoModeloSelectScalar = {
    id?: boolean
    modelo?: boolean
  }

  export type VeiculoModeloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modelo", ExtArgs["result"]["veiculoModelo"]>
  export type VeiculoModeloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculos?: boolean | VeiculoModelo$veiculosArgs<ExtArgs>
    _count?: boolean | VeiculoModeloCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VeiculoModeloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VeiculoModeloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VeiculoModeloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VeiculoModelo"
    objects: {
      veiculos: Prisma.$VeiculoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      modelo: string
    }, ExtArgs["result"]["veiculoModelo"]>
    composites: {}
  }

  type VeiculoModeloGetPayload<S extends boolean | null | undefined | VeiculoModeloDefaultArgs> = $Result.GetResult<Prisma.$VeiculoModeloPayload, S>

  type VeiculoModeloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VeiculoModeloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeiculoModeloCountAggregateInputType | true
    }

  export interface VeiculoModeloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VeiculoModelo'], meta: { name: 'VeiculoModelo' } }
    /**
     * Find zero or one VeiculoModelo that matches the filter.
     * @param {VeiculoModeloFindUniqueArgs} args - Arguments to find a VeiculoModelo
     * @example
     * // Get one VeiculoModelo
     * const veiculoModelo = await prisma.veiculoModelo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VeiculoModeloFindUniqueArgs>(args: SelectSubset<T, VeiculoModeloFindUniqueArgs<ExtArgs>>): Prisma__VeiculoModeloClient<$Result.GetResult<Prisma.$VeiculoModeloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VeiculoModelo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VeiculoModeloFindUniqueOrThrowArgs} args - Arguments to find a VeiculoModelo
     * @example
     * // Get one VeiculoModelo
     * const veiculoModelo = await prisma.veiculoModelo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VeiculoModeloFindUniqueOrThrowArgs>(args: SelectSubset<T, VeiculoModeloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VeiculoModeloClient<$Result.GetResult<Prisma.$VeiculoModeloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VeiculoModelo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoModeloFindFirstArgs} args - Arguments to find a VeiculoModelo
     * @example
     * // Get one VeiculoModelo
     * const veiculoModelo = await prisma.veiculoModelo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VeiculoModeloFindFirstArgs>(args?: SelectSubset<T, VeiculoModeloFindFirstArgs<ExtArgs>>): Prisma__VeiculoModeloClient<$Result.GetResult<Prisma.$VeiculoModeloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VeiculoModelo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoModeloFindFirstOrThrowArgs} args - Arguments to find a VeiculoModelo
     * @example
     * // Get one VeiculoModelo
     * const veiculoModelo = await prisma.veiculoModelo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VeiculoModeloFindFirstOrThrowArgs>(args?: SelectSubset<T, VeiculoModeloFindFirstOrThrowArgs<ExtArgs>>): Prisma__VeiculoModeloClient<$Result.GetResult<Prisma.$VeiculoModeloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VeiculoModelos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoModeloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VeiculoModelos
     * const veiculoModelos = await prisma.veiculoModelo.findMany()
     * 
     * // Get first 10 VeiculoModelos
     * const veiculoModelos = await prisma.veiculoModelo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veiculoModeloWithIdOnly = await prisma.veiculoModelo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VeiculoModeloFindManyArgs>(args?: SelectSubset<T, VeiculoModeloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoModeloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VeiculoModelo.
     * @param {VeiculoModeloCreateArgs} args - Arguments to create a VeiculoModelo.
     * @example
     * // Create one VeiculoModelo
     * const VeiculoModelo = await prisma.veiculoModelo.create({
     *   data: {
     *     // ... data to create a VeiculoModelo
     *   }
     * })
     * 
     */
    create<T extends VeiculoModeloCreateArgs>(args: SelectSubset<T, VeiculoModeloCreateArgs<ExtArgs>>): Prisma__VeiculoModeloClient<$Result.GetResult<Prisma.$VeiculoModeloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VeiculoModelos.
     * @param {VeiculoModeloCreateManyArgs} args - Arguments to create many VeiculoModelos.
     * @example
     * // Create many VeiculoModelos
     * const veiculoModelo = await prisma.veiculoModelo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VeiculoModeloCreateManyArgs>(args?: SelectSubset<T, VeiculoModeloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VeiculoModelos and returns the data saved in the database.
     * @param {VeiculoModeloCreateManyAndReturnArgs} args - Arguments to create many VeiculoModelos.
     * @example
     * // Create many VeiculoModelos
     * const veiculoModelo = await prisma.veiculoModelo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VeiculoModelos and only return the `id`
     * const veiculoModeloWithIdOnly = await prisma.veiculoModelo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VeiculoModeloCreateManyAndReturnArgs>(args?: SelectSubset<T, VeiculoModeloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoModeloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VeiculoModelo.
     * @param {VeiculoModeloDeleteArgs} args - Arguments to delete one VeiculoModelo.
     * @example
     * // Delete one VeiculoModelo
     * const VeiculoModelo = await prisma.veiculoModelo.delete({
     *   where: {
     *     // ... filter to delete one VeiculoModelo
     *   }
     * })
     * 
     */
    delete<T extends VeiculoModeloDeleteArgs>(args: SelectSubset<T, VeiculoModeloDeleteArgs<ExtArgs>>): Prisma__VeiculoModeloClient<$Result.GetResult<Prisma.$VeiculoModeloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VeiculoModelo.
     * @param {VeiculoModeloUpdateArgs} args - Arguments to update one VeiculoModelo.
     * @example
     * // Update one VeiculoModelo
     * const veiculoModelo = await prisma.veiculoModelo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VeiculoModeloUpdateArgs>(args: SelectSubset<T, VeiculoModeloUpdateArgs<ExtArgs>>): Prisma__VeiculoModeloClient<$Result.GetResult<Prisma.$VeiculoModeloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VeiculoModelos.
     * @param {VeiculoModeloDeleteManyArgs} args - Arguments to filter VeiculoModelos to delete.
     * @example
     * // Delete a few VeiculoModelos
     * const { count } = await prisma.veiculoModelo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VeiculoModeloDeleteManyArgs>(args?: SelectSubset<T, VeiculoModeloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VeiculoModelos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoModeloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VeiculoModelos
     * const veiculoModelo = await prisma.veiculoModelo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VeiculoModeloUpdateManyArgs>(args: SelectSubset<T, VeiculoModeloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VeiculoModelos and returns the data updated in the database.
     * @param {VeiculoModeloUpdateManyAndReturnArgs} args - Arguments to update many VeiculoModelos.
     * @example
     * // Update many VeiculoModelos
     * const veiculoModelo = await prisma.veiculoModelo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VeiculoModelos and only return the `id`
     * const veiculoModeloWithIdOnly = await prisma.veiculoModelo.updateManyAndReturn({
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
    updateManyAndReturn<T extends VeiculoModeloUpdateManyAndReturnArgs>(args: SelectSubset<T, VeiculoModeloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoModeloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VeiculoModelo.
     * @param {VeiculoModeloUpsertArgs} args - Arguments to update or create a VeiculoModelo.
     * @example
     * // Update or create a VeiculoModelo
     * const veiculoModelo = await prisma.veiculoModelo.upsert({
     *   create: {
     *     // ... data to create a VeiculoModelo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VeiculoModelo we want to update
     *   }
     * })
     */
    upsert<T extends VeiculoModeloUpsertArgs>(args: SelectSubset<T, VeiculoModeloUpsertArgs<ExtArgs>>): Prisma__VeiculoModeloClient<$Result.GetResult<Prisma.$VeiculoModeloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VeiculoModelos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoModeloCountArgs} args - Arguments to filter VeiculoModelos to count.
     * @example
     * // Count the number of VeiculoModelos
     * const count = await prisma.veiculoModelo.count({
     *   where: {
     *     // ... the filter for the VeiculoModelos we want to count
     *   }
     * })
    **/
    count<T extends VeiculoModeloCountArgs>(
      args?: Subset<T, VeiculoModeloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeiculoModeloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VeiculoModelo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoModeloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VeiculoModeloAggregateArgs>(args: Subset<T, VeiculoModeloAggregateArgs>): Prisma.PrismaPromise<GetVeiculoModeloAggregateType<T>>

    /**
     * Group by VeiculoModelo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoModeloGroupByArgs} args - Group by arguments.
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
      T extends VeiculoModeloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeiculoModeloGroupByArgs['orderBy'] }
        : { orderBy?: VeiculoModeloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VeiculoModeloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeiculoModeloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VeiculoModelo model
   */
  readonly fields: VeiculoModeloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VeiculoModelo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeiculoModeloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    veiculos<T extends VeiculoModelo$veiculosArgs<ExtArgs> = {}>(args?: Subset<T, VeiculoModelo$veiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VeiculoModelo model
   */
  interface VeiculoModeloFieldRefs {
    readonly id: FieldRef<"VeiculoModelo", 'String'>
    readonly modelo: FieldRef<"VeiculoModelo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VeiculoModelo findUnique
   */
  export type VeiculoModeloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoModelo
     */
    select?: VeiculoModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeiculoModelo
     */
    omit?: VeiculoModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoModeloInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoModelo to fetch.
     */
    where: VeiculoModeloWhereUniqueInput
  }

  /**
   * VeiculoModelo findUniqueOrThrow
   */
  export type VeiculoModeloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoModelo
     */
    select?: VeiculoModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeiculoModelo
     */
    omit?: VeiculoModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoModeloInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoModelo to fetch.
     */
    where: VeiculoModeloWhereUniqueInput
  }

  /**
   * VeiculoModelo findFirst
   */
  export type VeiculoModeloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoModelo
     */
    select?: VeiculoModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeiculoModelo
     */
    omit?: VeiculoModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoModeloInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoModelo to fetch.
     */
    where?: VeiculoModeloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoModelos to fetch.
     */
    orderBy?: VeiculoModeloOrderByWithRelationInput | VeiculoModeloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VeiculoModelos.
     */
    cursor?: VeiculoModeloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoModelos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoModelos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VeiculoModelos.
     */
    distinct?: VeiculoModeloScalarFieldEnum | VeiculoModeloScalarFieldEnum[]
  }

  /**
   * VeiculoModelo findFirstOrThrow
   */
  export type VeiculoModeloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoModelo
     */
    select?: VeiculoModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeiculoModelo
     */
    omit?: VeiculoModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoModeloInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoModelo to fetch.
     */
    where?: VeiculoModeloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoModelos to fetch.
     */
    orderBy?: VeiculoModeloOrderByWithRelationInput | VeiculoModeloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VeiculoModelos.
     */
    cursor?: VeiculoModeloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoModelos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoModelos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VeiculoModelos.
     */
    distinct?: VeiculoModeloScalarFieldEnum | VeiculoModeloScalarFieldEnum[]
  }

  /**
   * VeiculoModelo findMany
   */
  export type VeiculoModeloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoModelo
     */
    select?: VeiculoModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeiculoModelo
     */
    omit?: VeiculoModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoModeloInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoModelos to fetch.
     */
    where?: VeiculoModeloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoModelos to fetch.
     */
    orderBy?: VeiculoModeloOrderByWithRelationInput | VeiculoModeloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VeiculoModelos.
     */
    cursor?: VeiculoModeloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoModelos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoModelos.
     */
    skip?: number
    distinct?: VeiculoModeloScalarFieldEnum | VeiculoModeloScalarFieldEnum[]
  }

  /**
   * VeiculoModelo create
   */
  export type VeiculoModeloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoModelo
     */
    select?: VeiculoModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeiculoModelo
     */
    omit?: VeiculoModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoModeloInclude<ExtArgs> | null
    /**
     * The data needed to create a VeiculoModelo.
     */
    data: XOR<VeiculoModeloCreateInput, VeiculoModeloUncheckedCreateInput>
  }

  /**
   * VeiculoModelo createMany
   */
  export type VeiculoModeloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VeiculoModelos.
     */
    data: VeiculoModeloCreateManyInput | VeiculoModeloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VeiculoModelo createManyAndReturn
   */
  export type VeiculoModeloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoModelo
     */
    select?: VeiculoModeloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VeiculoModelo
     */
    omit?: VeiculoModeloOmit<ExtArgs> | null
    /**
     * The data used to create many VeiculoModelos.
     */
    data: VeiculoModeloCreateManyInput | VeiculoModeloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VeiculoModelo update
   */
  export type VeiculoModeloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoModelo
     */
    select?: VeiculoModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeiculoModelo
     */
    omit?: VeiculoModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoModeloInclude<ExtArgs> | null
    /**
     * The data needed to update a VeiculoModelo.
     */
    data: XOR<VeiculoModeloUpdateInput, VeiculoModeloUncheckedUpdateInput>
    /**
     * Choose, which VeiculoModelo to update.
     */
    where: VeiculoModeloWhereUniqueInput
  }

  /**
   * VeiculoModelo updateMany
   */
  export type VeiculoModeloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VeiculoModelos.
     */
    data: XOR<VeiculoModeloUpdateManyMutationInput, VeiculoModeloUncheckedUpdateManyInput>
    /**
     * Filter which VeiculoModelos to update
     */
    where?: VeiculoModeloWhereInput
    /**
     * Limit how many VeiculoModelos to update.
     */
    limit?: number
  }

  /**
   * VeiculoModelo updateManyAndReturn
   */
  export type VeiculoModeloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoModelo
     */
    select?: VeiculoModeloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VeiculoModelo
     */
    omit?: VeiculoModeloOmit<ExtArgs> | null
    /**
     * The data used to update VeiculoModelos.
     */
    data: XOR<VeiculoModeloUpdateManyMutationInput, VeiculoModeloUncheckedUpdateManyInput>
    /**
     * Filter which VeiculoModelos to update
     */
    where?: VeiculoModeloWhereInput
    /**
     * Limit how many VeiculoModelos to update.
     */
    limit?: number
  }

  /**
   * VeiculoModelo upsert
   */
  export type VeiculoModeloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoModelo
     */
    select?: VeiculoModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeiculoModelo
     */
    omit?: VeiculoModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoModeloInclude<ExtArgs> | null
    /**
     * The filter to search for the VeiculoModelo to update in case it exists.
     */
    where: VeiculoModeloWhereUniqueInput
    /**
     * In case the VeiculoModelo found by the `where` argument doesn't exist, create a new VeiculoModelo with this data.
     */
    create: XOR<VeiculoModeloCreateInput, VeiculoModeloUncheckedCreateInput>
    /**
     * In case the VeiculoModelo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeiculoModeloUpdateInput, VeiculoModeloUncheckedUpdateInput>
  }

  /**
   * VeiculoModelo delete
   */
  export type VeiculoModeloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoModelo
     */
    select?: VeiculoModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeiculoModelo
     */
    omit?: VeiculoModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoModeloInclude<ExtArgs> | null
    /**
     * Filter which VeiculoModelo to delete.
     */
    where: VeiculoModeloWhereUniqueInput
  }

  /**
   * VeiculoModelo deleteMany
   */
  export type VeiculoModeloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VeiculoModelos to delete
     */
    where?: VeiculoModeloWhereInput
    /**
     * Limit how many VeiculoModelos to delete.
     */
    limit?: number
  }

  /**
   * VeiculoModelo.veiculos
   */
  export type VeiculoModelo$veiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    where?: VeiculoWhereInput
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    cursor?: VeiculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * VeiculoModelo without action
   */
  export type VeiculoModeloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoModelo
     */
    select?: VeiculoModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeiculoModelo
     */
    omit?: VeiculoModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoModeloInclude<ExtArgs> | null
  }


  /**
   * Model Motorista
   */

  export type AggregateMotorista = {
    _count: MotoristaCountAggregateOutputType | null
    _min: MotoristaMinAggregateOutputType | null
    _max: MotoristaMaxAggregateOutputType | null
  }

  export type MotoristaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    contato: string | null
    secretariaId: string | null
  }

  export type MotoristaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    contato: string | null
    secretariaId: string | null
  }

  export type MotoristaCountAggregateOutputType = {
    id: number
    nome: number
    contato: number
    secretariaId: number
    _all: number
  }


  export type MotoristaMinAggregateInputType = {
    id?: true
    nome?: true
    contato?: true
    secretariaId?: true
  }

  export type MotoristaMaxAggregateInputType = {
    id?: true
    nome?: true
    contato?: true
    secretariaId?: true
  }

  export type MotoristaCountAggregateInputType = {
    id?: true
    nome?: true
    contato?: true
    secretariaId?: true
    _all?: true
  }

  export type MotoristaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Motorista to aggregate.
     */
    where?: MotoristaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motoristas to fetch.
     */
    orderBy?: MotoristaOrderByWithRelationInput | MotoristaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MotoristaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Motoristas
    **/
    _count?: true | MotoristaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MotoristaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MotoristaMaxAggregateInputType
  }

  export type GetMotoristaAggregateType<T extends MotoristaAggregateArgs> = {
        [P in keyof T & keyof AggregateMotorista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMotorista[P]>
      : GetScalarType<T[P], AggregateMotorista[P]>
  }




  export type MotoristaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotoristaWhereInput
    orderBy?: MotoristaOrderByWithAggregationInput | MotoristaOrderByWithAggregationInput[]
    by: MotoristaScalarFieldEnum[] | MotoristaScalarFieldEnum
    having?: MotoristaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MotoristaCountAggregateInputType | true
    _min?: MotoristaMinAggregateInputType
    _max?: MotoristaMaxAggregateInputType
  }

  export type MotoristaGroupByOutputType = {
    id: string
    nome: string
    contato: string
    secretariaId: string
    _count: MotoristaCountAggregateOutputType | null
    _min: MotoristaMinAggregateOutputType | null
    _max: MotoristaMaxAggregateOutputType | null
  }

  type GetMotoristaGroupByPayload<T extends MotoristaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MotoristaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MotoristaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MotoristaGroupByOutputType[P]>
            : GetScalarType<T[P], MotoristaGroupByOutputType[P]>
        }
      >
    >


  export type MotoristaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    contato?: boolean
    secretariaId?: boolean
    demandas?: boolean | Motorista$demandasArgs<ExtArgs>
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
    _count?: boolean | MotoristaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motorista"]>

  export type MotoristaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    contato?: boolean
    secretariaId?: boolean
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motorista"]>

  export type MotoristaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    contato?: boolean
    secretariaId?: boolean
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motorista"]>

  export type MotoristaSelectScalar = {
    id?: boolean
    nome?: boolean
    contato?: boolean
    secretariaId?: boolean
  }

  export type MotoristaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "contato" | "secretariaId", ExtArgs["result"]["motorista"]>
  export type MotoristaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandas?: boolean | Motorista$demandasArgs<ExtArgs>
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
    _count?: boolean | MotoristaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MotoristaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
  }
  export type MotoristaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
  }

  export type $MotoristaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Motorista"
    objects: {
      demandas: Prisma.$DemandaPayload<ExtArgs>[]
      secretaria: Prisma.$SecretariaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      contato: string
      secretariaId: string
    }, ExtArgs["result"]["motorista"]>
    composites: {}
  }

  type MotoristaGetPayload<S extends boolean | null | undefined | MotoristaDefaultArgs> = $Result.GetResult<Prisma.$MotoristaPayload, S>

  type MotoristaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MotoristaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MotoristaCountAggregateInputType | true
    }

  export interface MotoristaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Motorista'], meta: { name: 'Motorista' } }
    /**
     * Find zero or one Motorista that matches the filter.
     * @param {MotoristaFindUniqueArgs} args - Arguments to find a Motorista
     * @example
     * // Get one Motorista
     * const motorista = await prisma.motorista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MotoristaFindUniqueArgs>(args: SelectSubset<T, MotoristaFindUniqueArgs<ExtArgs>>): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Motorista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MotoristaFindUniqueOrThrowArgs} args - Arguments to find a Motorista
     * @example
     * // Get one Motorista
     * const motorista = await prisma.motorista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MotoristaFindUniqueOrThrowArgs>(args: SelectSubset<T, MotoristaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Motorista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoristaFindFirstArgs} args - Arguments to find a Motorista
     * @example
     * // Get one Motorista
     * const motorista = await prisma.motorista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MotoristaFindFirstArgs>(args?: SelectSubset<T, MotoristaFindFirstArgs<ExtArgs>>): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Motorista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoristaFindFirstOrThrowArgs} args - Arguments to find a Motorista
     * @example
     * // Get one Motorista
     * const motorista = await prisma.motorista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MotoristaFindFirstOrThrowArgs>(args?: SelectSubset<T, MotoristaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Motoristas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoristaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Motoristas
     * const motoristas = await prisma.motorista.findMany()
     * 
     * // Get first 10 Motoristas
     * const motoristas = await prisma.motorista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const motoristaWithIdOnly = await prisma.motorista.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MotoristaFindManyArgs>(args?: SelectSubset<T, MotoristaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Motorista.
     * @param {MotoristaCreateArgs} args - Arguments to create a Motorista.
     * @example
     * // Create one Motorista
     * const Motorista = await prisma.motorista.create({
     *   data: {
     *     // ... data to create a Motorista
     *   }
     * })
     * 
     */
    create<T extends MotoristaCreateArgs>(args: SelectSubset<T, MotoristaCreateArgs<ExtArgs>>): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Motoristas.
     * @param {MotoristaCreateManyArgs} args - Arguments to create many Motoristas.
     * @example
     * // Create many Motoristas
     * const motorista = await prisma.motorista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MotoristaCreateManyArgs>(args?: SelectSubset<T, MotoristaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Motoristas and returns the data saved in the database.
     * @param {MotoristaCreateManyAndReturnArgs} args - Arguments to create many Motoristas.
     * @example
     * // Create many Motoristas
     * const motorista = await prisma.motorista.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Motoristas and only return the `id`
     * const motoristaWithIdOnly = await prisma.motorista.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MotoristaCreateManyAndReturnArgs>(args?: SelectSubset<T, MotoristaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Motorista.
     * @param {MotoristaDeleteArgs} args - Arguments to delete one Motorista.
     * @example
     * // Delete one Motorista
     * const Motorista = await prisma.motorista.delete({
     *   where: {
     *     // ... filter to delete one Motorista
     *   }
     * })
     * 
     */
    delete<T extends MotoristaDeleteArgs>(args: SelectSubset<T, MotoristaDeleteArgs<ExtArgs>>): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Motorista.
     * @param {MotoristaUpdateArgs} args - Arguments to update one Motorista.
     * @example
     * // Update one Motorista
     * const motorista = await prisma.motorista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MotoristaUpdateArgs>(args: SelectSubset<T, MotoristaUpdateArgs<ExtArgs>>): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Motoristas.
     * @param {MotoristaDeleteManyArgs} args - Arguments to filter Motoristas to delete.
     * @example
     * // Delete a few Motoristas
     * const { count } = await prisma.motorista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MotoristaDeleteManyArgs>(args?: SelectSubset<T, MotoristaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoristaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Motoristas
     * const motorista = await prisma.motorista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MotoristaUpdateManyArgs>(args: SelectSubset<T, MotoristaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motoristas and returns the data updated in the database.
     * @param {MotoristaUpdateManyAndReturnArgs} args - Arguments to update many Motoristas.
     * @example
     * // Update many Motoristas
     * const motorista = await prisma.motorista.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Motoristas and only return the `id`
     * const motoristaWithIdOnly = await prisma.motorista.updateManyAndReturn({
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
    updateManyAndReturn<T extends MotoristaUpdateManyAndReturnArgs>(args: SelectSubset<T, MotoristaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Motorista.
     * @param {MotoristaUpsertArgs} args - Arguments to update or create a Motorista.
     * @example
     * // Update or create a Motorista
     * const motorista = await prisma.motorista.upsert({
     *   create: {
     *     // ... data to create a Motorista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Motorista we want to update
     *   }
     * })
     */
    upsert<T extends MotoristaUpsertArgs>(args: SelectSubset<T, MotoristaUpsertArgs<ExtArgs>>): Prisma__MotoristaClient<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Motoristas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoristaCountArgs} args - Arguments to filter Motoristas to count.
     * @example
     * // Count the number of Motoristas
     * const count = await prisma.motorista.count({
     *   where: {
     *     // ... the filter for the Motoristas we want to count
     *   }
     * })
    **/
    count<T extends MotoristaCountArgs>(
      args?: Subset<T, MotoristaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MotoristaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Motorista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoristaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MotoristaAggregateArgs>(args: Subset<T, MotoristaAggregateArgs>): Prisma.PrismaPromise<GetMotoristaAggregateType<T>>

    /**
     * Group by Motorista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoristaGroupByArgs} args - Group by arguments.
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
      T extends MotoristaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MotoristaGroupByArgs['orderBy'] }
        : { orderBy?: MotoristaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MotoristaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMotoristaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Motorista model
   */
  readonly fields: MotoristaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Motorista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MotoristaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    demandas<T extends Motorista$demandasArgs<ExtArgs> = {}>(args?: Subset<T, Motorista$demandasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    secretaria<T extends SecretariaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SecretariaDefaultArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Motorista model
   */
  interface MotoristaFieldRefs {
    readonly id: FieldRef<"Motorista", 'String'>
    readonly nome: FieldRef<"Motorista", 'String'>
    readonly contato: FieldRef<"Motorista", 'String'>
    readonly secretariaId: FieldRef<"Motorista", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Motorista findUnique
   */
  export type MotoristaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorista
     */
    omit?: MotoristaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * Filter, which Motorista to fetch.
     */
    where: MotoristaWhereUniqueInput
  }

  /**
   * Motorista findUniqueOrThrow
   */
  export type MotoristaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorista
     */
    omit?: MotoristaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * Filter, which Motorista to fetch.
     */
    where: MotoristaWhereUniqueInput
  }

  /**
   * Motorista findFirst
   */
  export type MotoristaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorista
     */
    omit?: MotoristaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * Filter, which Motorista to fetch.
     */
    where?: MotoristaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motoristas to fetch.
     */
    orderBy?: MotoristaOrderByWithRelationInput | MotoristaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Motoristas.
     */
    cursor?: MotoristaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motoristas.
     */
    distinct?: MotoristaScalarFieldEnum | MotoristaScalarFieldEnum[]
  }

  /**
   * Motorista findFirstOrThrow
   */
  export type MotoristaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorista
     */
    omit?: MotoristaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * Filter, which Motorista to fetch.
     */
    where?: MotoristaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motoristas to fetch.
     */
    orderBy?: MotoristaOrderByWithRelationInput | MotoristaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Motoristas.
     */
    cursor?: MotoristaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motoristas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motoristas.
     */
    distinct?: MotoristaScalarFieldEnum | MotoristaScalarFieldEnum[]
  }

  /**
   * Motorista findMany
   */
  export type MotoristaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorista
     */
    omit?: MotoristaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * Filter, which Motoristas to fetch.
     */
    where?: MotoristaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motoristas to fetch.
     */
    orderBy?: MotoristaOrderByWithRelationInput | MotoristaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Motoristas.
     */
    cursor?: MotoristaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motoristas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motoristas.
     */
    skip?: number
    distinct?: MotoristaScalarFieldEnum | MotoristaScalarFieldEnum[]
  }

  /**
   * Motorista create
   */
  export type MotoristaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorista
     */
    omit?: MotoristaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * The data needed to create a Motorista.
     */
    data: XOR<MotoristaCreateInput, MotoristaUncheckedCreateInput>
  }

  /**
   * Motorista createMany
   */
  export type MotoristaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Motoristas.
     */
    data: MotoristaCreateManyInput | MotoristaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Motorista createManyAndReturn
   */
  export type MotoristaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Motorista
     */
    omit?: MotoristaOmit<ExtArgs> | null
    /**
     * The data used to create many Motoristas.
     */
    data: MotoristaCreateManyInput | MotoristaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Motorista update
   */
  export type MotoristaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorista
     */
    omit?: MotoristaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * The data needed to update a Motorista.
     */
    data: XOR<MotoristaUpdateInput, MotoristaUncheckedUpdateInput>
    /**
     * Choose, which Motorista to update.
     */
    where: MotoristaWhereUniqueInput
  }

  /**
   * Motorista updateMany
   */
  export type MotoristaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Motoristas.
     */
    data: XOR<MotoristaUpdateManyMutationInput, MotoristaUncheckedUpdateManyInput>
    /**
     * Filter which Motoristas to update
     */
    where?: MotoristaWhereInput
    /**
     * Limit how many Motoristas to update.
     */
    limit?: number
  }

  /**
   * Motorista updateManyAndReturn
   */
  export type MotoristaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Motorista
     */
    omit?: MotoristaOmit<ExtArgs> | null
    /**
     * The data used to update Motoristas.
     */
    data: XOR<MotoristaUpdateManyMutationInput, MotoristaUncheckedUpdateManyInput>
    /**
     * Filter which Motoristas to update
     */
    where?: MotoristaWhereInput
    /**
     * Limit how many Motoristas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Motorista upsert
   */
  export type MotoristaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorista
     */
    omit?: MotoristaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * The filter to search for the Motorista to update in case it exists.
     */
    where: MotoristaWhereUniqueInput
    /**
     * In case the Motorista found by the `where` argument doesn't exist, create a new Motorista with this data.
     */
    create: XOR<MotoristaCreateInput, MotoristaUncheckedCreateInput>
    /**
     * In case the Motorista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MotoristaUpdateInput, MotoristaUncheckedUpdateInput>
  }

  /**
   * Motorista delete
   */
  export type MotoristaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorista
     */
    omit?: MotoristaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    /**
     * Filter which Motorista to delete.
     */
    where: MotoristaWhereUniqueInput
  }

  /**
   * Motorista deleteMany
   */
  export type MotoristaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Motoristas to delete
     */
    where?: MotoristaWhereInput
    /**
     * Limit how many Motoristas to delete.
     */
    limit?: number
  }

  /**
   * Motorista.demandas
   */
  export type Motorista$demandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    where?: DemandaWhereInput
    orderBy?: DemandaOrderByWithRelationInput | DemandaOrderByWithRelationInput[]
    cursor?: DemandaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandaScalarFieldEnum | DemandaScalarFieldEnum[]
  }

  /**
   * Motorista without action
   */
  export type MotoristaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorista
     */
    omit?: MotoristaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
  }


  /**
   * Model Acesso
   */

  export type AggregateAcesso = {
    _count: AcessoCountAggregateOutputType | null
    _min: AcessoMinAggregateOutputType | null
    _max: AcessoMaxAggregateOutputType | null
  }

  export type AcessoMinAggregateOutputType = {
    id: string | null
    nivel: string | null
  }

  export type AcessoMaxAggregateOutputType = {
    id: string | null
    nivel: string | null
  }

  export type AcessoCountAggregateOutputType = {
    id: number
    nivel: number
    _all: number
  }


  export type AcessoMinAggregateInputType = {
    id?: true
    nivel?: true
  }

  export type AcessoMaxAggregateInputType = {
    id?: true
    nivel?: true
  }

  export type AcessoCountAggregateInputType = {
    id?: true
    nivel?: true
    _all?: true
  }

  export type AcessoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acesso to aggregate.
     */
    where?: AcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acessos to fetch.
     */
    orderBy?: AcessoOrderByWithRelationInput | AcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Acessos
    **/
    _count?: true | AcessoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcessoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcessoMaxAggregateInputType
  }

  export type GetAcessoAggregateType<T extends AcessoAggregateArgs> = {
        [P in keyof T & keyof AggregateAcesso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcesso[P]>
      : GetScalarType<T[P], AggregateAcesso[P]>
  }




  export type AcessoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcessoWhereInput
    orderBy?: AcessoOrderByWithAggregationInput | AcessoOrderByWithAggregationInput[]
    by: AcessoScalarFieldEnum[] | AcessoScalarFieldEnum
    having?: AcessoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcessoCountAggregateInputType | true
    _min?: AcessoMinAggregateInputType
    _max?: AcessoMaxAggregateInputType
  }

  export type AcessoGroupByOutputType = {
    id: string
    nivel: string
    _count: AcessoCountAggregateOutputType | null
    _min: AcessoMinAggregateOutputType | null
    _max: AcessoMaxAggregateOutputType | null
  }

  type GetAcessoGroupByPayload<T extends AcessoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcessoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcessoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcessoGroupByOutputType[P]>
            : GetScalarType<T[P], AcessoGroupByOutputType[P]>
        }
      >
    >


  export type AcessoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nivel?: boolean
    user?: boolean | Acesso$userArgs<ExtArgs>
    _count?: boolean | AcessoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acesso"]>

  export type AcessoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nivel?: boolean
  }, ExtArgs["result"]["acesso"]>

  export type AcessoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nivel?: boolean
  }, ExtArgs["result"]["acesso"]>

  export type AcessoSelectScalar = {
    id?: boolean
    nivel?: boolean
  }

  export type AcessoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nivel", ExtArgs["result"]["acesso"]>
  export type AcessoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Acesso$userArgs<ExtArgs>
    _count?: boolean | AcessoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AcessoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AcessoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AcessoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Acesso"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nivel: string
    }, ExtArgs["result"]["acesso"]>
    composites: {}
  }

  type AcessoGetPayload<S extends boolean | null | undefined | AcessoDefaultArgs> = $Result.GetResult<Prisma.$AcessoPayload, S>

  type AcessoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcessoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcessoCountAggregateInputType | true
    }

  export interface AcessoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Acesso'], meta: { name: 'Acesso' } }
    /**
     * Find zero or one Acesso that matches the filter.
     * @param {AcessoFindUniqueArgs} args - Arguments to find a Acesso
     * @example
     * // Get one Acesso
     * const acesso = await prisma.acesso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcessoFindUniqueArgs>(args: SelectSubset<T, AcessoFindUniqueArgs<ExtArgs>>): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Acesso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcessoFindUniqueOrThrowArgs} args - Arguments to find a Acesso
     * @example
     * // Get one Acesso
     * const acesso = await prisma.acesso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcessoFindUniqueOrThrowArgs>(args: SelectSubset<T, AcessoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acesso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoFindFirstArgs} args - Arguments to find a Acesso
     * @example
     * // Get one Acesso
     * const acesso = await prisma.acesso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcessoFindFirstArgs>(args?: SelectSubset<T, AcessoFindFirstArgs<ExtArgs>>): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acesso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoFindFirstOrThrowArgs} args - Arguments to find a Acesso
     * @example
     * // Get one Acesso
     * const acesso = await prisma.acesso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcessoFindFirstOrThrowArgs>(args?: SelectSubset<T, AcessoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Acessos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Acessos
     * const acessos = await prisma.acesso.findMany()
     * 
     * // Get first 10 Acessos
     * const acessos = await prisma.acesso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const acessoWithIdOnly = await prisma.acesso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcessoFindManyArgs>(args?: SelectSubset<T, AcessoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Acesso.
     * @param {AcessoCreateArgs} args - Arguments to create a Acesso.
     * @example
     * // Create one Acesso
     * const Acesso = await prisma.acesso.create({
     *   data: {
     *     // ... data to create a Acesso
     *   }
     * })
     * 
     */
    create<T extends AcessoCreateArgs>(args: SelectSubset<T, AcessoCreateArgs<ExtArgs>>): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Acessos.
     * @param {AcessoCreateManyArgs} args - Arguments to create many Acessos.
     * @example
     * // Create many Acessos
     * const acesso = await prisma.acesso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcessoCreateManyArgs>(args?: SelectSubset<T, AcessoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Acessos and returns the data saved in the database.
     * @param {AcessoCreateManyAndReturnArgs} args - Arguments to create many Acessos.
     * @example
     * // Create many Acessos
     * const acesso = await prisma.acesso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Acessos and only return the `id`
     * const acessoWithIdOnly = await prisma.acesso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcessoCreateManyAndReturnArgs>(args?: SelectSubset<T, AcessoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Acesso.
     * @param {AcessoDeleteArgs} args - Arguments to delete one Acesso.
     * @example
     * // Delete one Acesso
     * const Acesso = await prisma.acesso.delete({
     *   where: {
     *     // ... filter to delete one Acesso
     *   }
     * })
     * 
     */
    delete<T extends AcessoDeleteArgs>(args: SelectSubset<T, AcessoDeleteArgs<ExtArgs>>): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Acesso.
     * @param {AcessoUpdateArgs} args - Arguments to update one Acesso.
     * @example
     * // Update one Acesso
     * const acesso = await prisma.acesso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcessoUpdateArgs>(args: SelectSubset<T, AcessoUpdateArgs<ExtArgs>>): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Acessos.
     * @param {AcessoDeleteManyArgs} args - Arguments to filter Acessos to delete.
     * @example
     * // Delete a few Acessos
     * const { count } = await prisma.acesso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcessoDeleteManyArgs>(args?: SelectSubset<T, AcessoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Acessos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Acessos
     * const acesso = await prisma.acesso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcessoUpdateManyArgs>(args: SelectSubset<T, AcessoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Acessos and returns the data updated in the database.
     * @param {AcessoUpdateManyAndReturnArgs} args - Arguments to update many Acessos.
     * @example
     * // Update many Acessos
     * const acesso = await prisma.acesso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Acessos and only return the `id`
     * const acessoWithIdOnly = await prisma.acesso.updateManyAndReturn({
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
    updateManyAndReturn<T extends AcessoUpdateManyAndReturnArgs>(args: SelectSubset<T, AcessoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Acesso.
     * @param {AcessoUpsertArgs} args - Arguments to update or create a Acesso.
     * @example
     * // Update or create a Acesso
     * const acesso = await prisma.acesso.upsert({
     *   create: {
     *     // ... data to create a Acesso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Acesso we want to update
     *   }
     * })
     */
    upsert<T extends AcessoUpsertArgs>(args: SelectSubset<T, AcessoUpsertArgs<ExtArgs>>): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Acessos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoCountArgs} args - Arguments to filter Acessos to count.
     * @example
     * // Count the number of Acessos
     * const count = await prisma.acesso.count({
     *   where: {
     *     // ... the filter for the Acessos we want to count
     *   }
     * })
    **/
    count<T extends AcessoCountArgs>(
      args?: Subset<T, AcessoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcessoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Acesso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcessoAggregateArgs>(args: Subset<T, AcessoAggregateArgs>): Prisma.PrismaPromise<GetAcessoAggregateType<T>>

    /**
     * Group by Acesso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoGroupByArgs} args - Group by arguments.
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
      T extends AcessoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcessoGroupByArgs['orderBy'] }
        : { orderBy?: AcessoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AcessoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcessoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Acesso model
   */
  readonly fields: AcessoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Acesso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcessoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Acesso$userArgs<ExtArgs> = {}>(args?: Subset<T, Acesso$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Acesso model
   */
  interface AcessoFieldRefs {
    readonly id: FieldRef<"Acesso", 'String'>
    readonly nivel: FieldRef<"Acesso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Acesso findUnique
   */
  export type AcessoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acesso
     */
    omit?: AcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * Filter, which Acesso to fetch.
     */
    where: AcessoWhereUniqueInput
  }

  /**
   * Acesso findUniqueOrThrow
   */
  export type AcessoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acesso
     */
    omit?: AcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * Filter, which Acesso to fetch.
     */
    where: AcessoWhereUniqueInput
  }

  /**
   * Acesso findFirst
   */
  export type AcessoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acesso
     */
    omit?: AcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * Filter, which Acesso to fetch.
     */
    where?: AcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acessos to fetch.
     */
    orderBy?: AcessoOrderByWithRelationInput | AcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Acessos.
     */
    cursor?: AcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acessos.
     */
    distinct?: AcessoScalarFieldEnum | AcessoScalarFieldEnum[]
  }

  /**
   * Acesso findFirstOrThrow
   */
  export type AcessoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acesso
     */
    omit?: AcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * Filter, which Acesso to fetch.
     */
    where?: AcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acessos to fetch.
     */
    orderBy?: AcessoOrderByWithRelationInput | AcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Acessos.
     */
    cursor?: AcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acessos.
     */
    distinct?: AcessoScalarFieldEnum | AcessoScalarFieldEnum[]
  }

  /**
   * Acesso findMany
   */
  export type AcessoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acesso
     */
    omit?: AcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * Filter, which Acessos to fetch.
     */
    where?: AcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acessos to fetch.
     */
    orderBy?: AcessoOrderByWithRelationInput | AcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Acessos.
     */
    cursor?: AcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acessos.
     */
    skip?: number
    distinct?: AcessoScalarFieldEnum | AcessoScalarFieldEnum[]
  }

  /**
   * Acesso create
   */
  export type AcessoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acesso
     */
    omit?: AcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * The data needed to create a Acesso.
     */
    data: XOR<AcessoCreateInput, AcessoUncheckedCreateInput>
  }

  /**
   * Acesso createMany
   */
  export type AcessoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Acessos.
     */
    data: AcessoCreateManyInput | AcessoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Acesso createManyAndReturn
   */
  export type AcessoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Acesso
     */
    omit?: AcessoOmit<ExtArgs> | null
    /**
     * The data used to create many Acessos.
     */
    data: AcessoCreateManyInput | AcessoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Acesso update
   */
  export type AcessoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acesso
     */
    omit?: AcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * The data needed to update a Acesso.
     */
    data: XOR<AcessoUpdateInput, AcessoUncheckedUpdateInput>
    /**
     * Choose, which Acesso to update.
     */
    where: AcessoWhereUniqueInput
  }

  /**
   * Acesso updateMany
   */
  export type AcessoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Acessos.
     */
    data: XOR<AcessoUpdateManyMutationInput, AcessoUncheckedUpdateManyInput>
    /**
     * Filter which Acessos to update
     */
    where?: AcessoWhereInput
    /**
     * Limit how many Acessos to update.
     */
    limit?: number
  }

  /**
   * Acesso updateManyAndReturn
   */
  export type AcessoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Acesso
     */
    omit?: AcessoOmit<ExtArgs> | null
    /**
     * The data used to update Acessos.
     */
    data: XOR<AcessoUpdateManyMutationInput, AcessoUncheckedUpdateManyInput>
    /**
     * Filter which Acessos to update
     */
    where?: AcessoWhereInput
    /**
     * Limit how many Acessos to update.
     */
    limit?: number
  }

  /**
   * Acesso upsert
   */
  export type AcessoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acesso
     */
    omit?: AcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * The filter to search for the Acesso to update in case it exists.
     */
    where: AcessoWhereUniqueInput
    /**
     * In case the Acesso found by the `where` argument doesn't exist, create a new Acesso with this data.
     */
    create: XOR<AcessoCreateInput, AcessoUncheckedCreateInput>
    /**
     * In case the Acesso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcessoUpdateInput, AcessoUncheckedUpdateInput>
  }

  /**
   * Acesso delete
   */
  export type AcessoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acesso
     */
    omit?: AcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * Filter which Acesso to delete.
     */
    where: AcessoWhereUniqueInput
  }

  /**
   * Acesso deleteMany
   */
  export type AcessoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acessos to delete
     */
    where?: AcessoWhereInput
    /**
     * Limit how many Acessos to delete.
     */
    limit?: number
  }

  /**
   * Acesso.user
   */
  export type Acesso$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Acesso without action
   */
  export type AcessoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acesso
     */
    omit?: AcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoInclude<ExtArgs> | null
  }


  /**
   * Model Secretaria
   */

  export type AggregateSecretaria = {
    _count: SecretariaCountAggregateOutputType | null
    _min: SecretariaMinAggregateOutputType | null
    _max: SecretariaMaxAggregateOutputType | null
  }

  export type SecretariaMinAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type SecretariaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type SecretariaCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type SecretariaMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type SecretariaMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type SecretariaCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type SecretariaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Secretaria to aggregate.
     */
    where?: SecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariaOrderByWithRelationInput | SecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecretariaWhereUniqueInput
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
    _count?: true | SecretariaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecretariaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecretariaMaxAggregateInputType
  }

  export type GetSecretariaAggregateType<T extends SecretariaAggregateArgs> = {
        [P in keyof T & keyof AggregateSecretaria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecretaria[P]>
      : GetScalarType<T[P], AggregateSecretaria[P]>
  }




  export type SecretariaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecretariaWhereInput
    orderBy?: SecretariaOrderByWithAggregationInput | SecretariaOrderByWithAggregationInput[]
    by: SecretariaScalarFieldEnum[] | SecretariaScalarFieldEnum
    having?: SecretariaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecretariaCountAggregateInputType | true
    _min?: SecretariaMinAggregateInputType
    _max?: SecretariaMaxAggregateInputType
  }

  export type SecretariaGroupByOutputType = {
    id: string
    nome: string
    _count: SecretariaCountAggregateOutputType | null
    _min: SecretariaMinAggregateOutputType | null
    _max: SecretariaMaxAggregateOutputType | null
  }

  type GetSecretariaGroupByPayload<T extends SecretariaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecretariaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecretariaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecretariaGroupByOutputType[P]>
            : GetScalarType<T[P], SecretariaGroupByOutputType[P]>
        }
      >
    >


  export type SecretariaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    demandas?: boolean | Secretaria$demandasArgs<ExtArgs>
    users?: boolean | Secretaria$usersArgs<ExtArgs>
    veiculos?: boolean | Secretaria$veiculosArgs<ExtArgs>
    motorista?: boolean | Secretaria$motoristaArgs<ExtArgs>
    _count?: boolean | SecretariaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secretaria"]>

  export type SecretariaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["secretaria"]>

  export type SecretariaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["secretaria"]>

  export type SecretariaSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type SecretariaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["secretaria"]>
  export type SecretariaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandas?: boolean | Secretaria$demandasArgs<ExtArgs>
    users?: boolean | Secretaria$usersArgs<ExtArgs>
    veiculos?: boolean | Secretaria$veiculosArgs<ExtArgs>
    motorista?: boolean | Secretaria$motoristaArgs<ExtArgs>
    _count?: boolean | SecretariaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SecretariaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SecretariaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SecretariaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Secretaria"
    objects: {
      demandas: Prisma.$DemandaPayload<ExtArgs>[]
      users: Prisma.$UserSecretariaPayload<ExtArgs>[]
      veiculos: Prisma.$VeiculoPayload<ExtArgs>[]
      motorista: Prisma.$MotoristaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
    }, ExtArgs["result"]["secretaria"]>
    composites: {}
  }

  type SecretariaGetPayload<S extends boolean | null | undefined | SecretariaDefaultArgs> = $Result.GetResult<Prisma.$SecretariaPayload, S>

  type SecretariaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecretariaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecretariaCountAggregateInputType | true
    }

  export interface SecretariaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Secretaria'], meta: { name: 'Secretaria' } }
    /**
     * Find zero or one Secretaria that matches the filter.
     * @param {SecretariaFindUniqueArgs} args - Arguments to find a Secretaria
     * @example
     * // Get one Secretaria
     * const secretaria = await prisma.secretaria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecretariaFindUniqueArgs>(args: SelectSubset<T, SecretariaFindUniqueArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Secretaria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecretariaFindUniqueOrThrowArgs} args - Arguments to find a Secretaria
     * @example
     * // Get one Secretaria
     * const secretaria = await prisma.secretaria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecretariaFindUniqueOrThrowArgs>(args: SelectSubset<T, SecretariaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Secretaria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaFindFirstArgs} args - Arguments to find a Secretaria
     * @example
     * // Get one Secretaria
     * const secretaria = await prisma.secretaria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecretariaFindFirstArgs>(args?: SelectSubset<T, SecretariaFindFirstArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Secretaria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaFindFirstOrThrowArgs} args - Arguments to find a Secretaria
     * @example
     * // Get one Secretaria
     * const secretaria = await prisma.secretaria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecretariaFindFirstOrThrowArgs>(args?: SelectSubset<T, SecretariaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Secretarias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Secretarias
     * const secretarias = await prisma.secretaria.findMany()
     * 
     * // Get first 10 Secretarias
     * const secretarias = await prisma.secretaria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const secretariaWithIdOnly = await prisma.secretaria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecretariaFindManyArgs>(args?: SelectSubset<T, SecretariaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Secretaria.
     * @param {SecretariaCreateArgs} args - Arguments to create a Secretaria.
     * @example
     * // Create one Secretaria
     * const Secretaria = await prisma.secretaria.create({
     *   data: {
     *     // ... data to create a Secretaria
     *   }
     * })
     * 
     */
    create<T extends SecretariaCreateArgs>(args: SelectSubset<T, SecretariaCreateArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Secretarias.
     * @param {SecretariaCreateManyArgs} args - Arguments to create many Secretarias.
     * @example
     * // Create many Secretarias
     * const secretaria = await prisma.secretaria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecretariaCreateManyArgs>(args?: SelectSubset<T, SecretariaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Secretarias and returns the data saved in the database.
     * @param {SecretariaCreateManyAndReturnArgs} args - Arguments to create many Secretarias.
     * @example
     * // Create many Secretarias
     * const secretaria = await prisma.secretaria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Secretarias and only return the `id`
     * const secretariaWithIdOnly = await prisma.secretaria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecretariaCreateManyAndReturnArgs>(args?: SelectSubset<T, SecretariaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Secretaria.
     * @param {SecretariaDeleteArgs} args - Arguments to delete one Secretaria.
     * @example
     * // Delete one Secretaria
     * const Secretaria = await prisma.secretaria.delete({
     *   where: {
     *     // ... filter to delete one Secretaria
     *   }
     * })
     * 
     */
    delete<T extends SecretariaDeleteArgs>(args: SelectSubset<T, SecretariaDeleteArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Secretaria.
     * @param {SecretariaUpdateArgs} args - Arguments to update one Secretaria.
     * @example
     * // Update one Secretaria
     * const secretaria = await prisma.secretaria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecretariaUpdateArgs>(args: SelectSubset<T, SecretariaUpdateArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Secretarias.
     * @param {SecretariaDeleteManyArgs} args - Arguments to filter Secretarias to delete.
     * @example
     * // Delete a few Secretarias
     * const { count } = await prisma.secretaria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecretariaDeleteManyArgs>(args?: SelectSubset<T, SecretariaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secretarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Secretarias
     * const secretaria = await prisma.secretaria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecretariaUpdateManyArgs>(args: SelectSubset<T, SecretariaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secretarias and returns the data updated in the database.
     * @param {SecretariaUpdateManyAndReturnArgs} args - Arguments to update many Secretarias.
     * @example
     * // Update many Secretarias
     * const secretaria = await prisma.secretaria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Secretarias and only return the `id`
     * const secretariaWithIdOnly = await prisma.secretaria.updateManyAndReturn({
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
    updateManyAndReturn<T extends SecretariaUpdateManyAndReturnArgs>(args: SelectSubset<T, SecretariaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Secretaria.
     * @param {SecretariaUpsertArgs} args - Arguments to update or create a Secretaria.
     * @example
     * // Update or create a Secretaria
     * const secretaria = await prisma.secretaria.upsert({
     *   create: {
     *     // ... data to create a Secretaria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Secretaria we want to update
     *   }
     * })
     */
    upsert<T extends SecretariaUpsertArgs>(args: SelectSubset<T, SecretariaUpsertArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Secretarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaCountArgs} args - Arguments to filter Secretarias to count.
     * @example
     * // Count the number of Secretarias
     * const count = await prisma.secretaria.count({
     *   where: {
     *     // ... the filter for the Secretarias we want to count
     *   }
     * })
    **/
    count<T extends SecretariaCountArgs>(
      args?: Subset<T, SecretariaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecretariaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Secretaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecretariaAggregateArgs>(args: Subset<T, SecretariaAggregateArgs>): Prisma.PrismaPromise<GetSecretariaAggregateType<T>>

    /**
     * Group by Secretaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaGroupByArgs} args - Group by arguments.
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
      T extends SecretariaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecretariaGroupByArgs['orderBy'] }
        : { orderBy?: SecretariaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SecretariaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecretariaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Secretaria model
   */
  readonly fields: SecretariaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Secretaria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecretariaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    demandas<T extends Secretaria$demandasArgs<ExtArgs> = {}>(args?: Subset<T, Secretaria$demandasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Secretaria$usersArgs<ExtArgs> = {}>(args?: Subset<T, Secretaria$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSecretariaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    veiculos<T extends Secretaria$veiculosArgs<ExtArgs> = {}>(args?: Subset<T, Secretaria$veiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    motorista<T extends Secretaria$motoristaArgs<ExtArgs> = {}>(args?: Subset<T, Secretaria$motoristaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotoristaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Secretaria model
   */
  interface SecretariaFieldRefs {
    readonly id: FieldRef<"Secretaria", 'String'>
    readonly nome: FieldRef<"Secretaria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Secretaria findUnique
   */
  export type SecretariaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter, which Secretaria to fetch.
     */
    where: SecretariaWhereUniqueInput
  }

  /**
   * Secretaria findUniqueOrThrow
   */
  export type SecretariaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter, which Secretaria to fetch.
     */
    where: SecretariaWhereUniqueInput
  }

  /**
   * Secretaria findFirst
   */
  export type SecretariaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter, which Secretaria to fetch.
     */
    where?: SecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariaOrderByWithRelationInput | SecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Secretarias.
     */
    cursor?: SecretariaWhereUniqueInput
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
    distinct?: SecretariaScalarFieldEnum | SecretariaScalarFieldEnum[]
  }

  /**
   * Secretaria findFirstOrThrow
   */
  export type SecretariaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter, which Secretaria to fetch.
     */
    where?: SecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariaOrderByWithRelationInput | SecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Secretarias.
     */
    cursor?: SecretariaWhereUniqueInput
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
    distinct?: SecretariaScalarFieldEnum | SecretariaScalarFieldEnum[]
  }

  /**
   * Secretaria findMany
   */
  export type SecretariaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter, which Secretarias to fetch.
     */
    where?: SecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariaOrderByWithRelationInput | SecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Secretarias.
     */
    cursor?: SecretariaWhereUniqueInput
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
    distinct?: SecretariaScalarFieldEnum | SecretariaScalarFieldEnum[]
  }

  /**
   * Secretaria create
   */
  export type SecretariaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * The data needed to create a Secretaria.
     */
    data: XOR<SecretariaCreateInput, SecretariaUncheckedCreateInput>
  }

  /**
   * Secretaria createMany
   */
  export type SecretariaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Secretarias.
     */
    data: SecretariaCreateManyInput | SecretariaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Secretaria createManyAndReturn
   */
  export type SecretariaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * The data used to create many Secretarias.
     */
    data: SecretariaCreateManyInput | SecretariaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Secretaria update
   */
  export type SecretariaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * The data needed to update a Secretaria.
     */
    data: XOR<SecretariaUpdateInput, SecretariaUncheckedUpdateInput>
    /**
     * Choose, which Secretaria to update.
     */
    where: SecretariaWhereUniqueInput
  }

  /**
   * Secretaria updateMany
   */
  export type SecretariaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Secretarias.
     */
    data: XOR<SecretariaUpdateManyMutationInput, SecretariaUncheckedUpdateManyInput>
    /**
     * Filter which Secretarias to update
     */
    where?: SecretariaWhereInput
    /**
     * Limit how many Secretarias to update.
     */
    limit?: number
  }

  /**
   * Secretaria updateManyAndReturn
   */
  export type SecretariaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * The data used to update Secretarias.
     */
    data: XOR<SecretariaUpdateManyMutationInput, SecretariaUncheckedUpdateManyInput>
    /**
     * Filter which Secretarias to update
     */
    where?: SecretariaWhereInput
    /**
     * Limit how many Secretarias to update.
     */
    limit?: number
  }

  /**
   * Secretaria upsert
   */
  export type SecretariaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * The filter to search for the Secretaria to update in case it exists.
     */
    where: SecretariaWhereUniqueInput
    /**
     * In case the Secretaria found by the `where` argument doesn't exist, create a new Secretaria with this data.
     */
    create: XOR<SecretariaCreateInput, SecretariaUncheckedCreateInput>
    /**
     * In case the Secretaria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecretariaUpdateInput, SecretariaUncheckedUpdateInput>
  }

  /**
   * Secretaria delete
   */
  export type SecretariaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter which Secretaria to delete.
     */
    where: SecretariaWhereUniqueInput
  }

  /**
   * Secretaria deleteMany
   */
  export type SecretariaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Secretarias to delete
     */
    where?: SecretariaWhereInput
    /**
     * Limit how many Secretarias to delete.
     */
    limit?: number
  }

  /**
   * Secretaria.demandas
   */
  export type Secretaria$demandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demanda
     */
    select?: DemandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demanda
     */
    omit?: DemandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandaInclude<ExtArgs> | null
    where?: DemandaWhereInput
    orderBy?: DemandaOrderByWithRelationInput | DemandaOrderByWithRelationInput[]
    cursor?: DemandaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandaScalarFieldEnum | DemandaScalarFieldEnum[]
  }

  /**
   * Secretaria.users
   */
  export type Secretaria$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecretaria
     */
    select?: UserSecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecretaria
     */
    omit?: UserSecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecretariaInclude<ExtArgs> | null
    where?: UserSecretariaWhereInput
    orderBy?: UserSecretariaOrderByWithRelationInput | UserSecretariaOrderByWithRelationInput[]
    cursor?: UserSecretariaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSecretariaScalarFieldEnum | UserSecretariaScalarFieldEnum[]
  }

  /**
   * Secretaria.veiculos
   */
  export type Secretaria$veiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    where?: VeiculoWhereInput
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    cursor?: VeiculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Secretaria.motorista
   */
  export type Secretaria$motoristaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorista
     */
    select?: MotoristaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorista
     */
    omit?: MotoristaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotoristaInclude<ExtArgs> | null
    where?: MotoristaWhereInput
    orderBy?: MotoristaOrderByWithRelationInput | MotoristaOrderByWithRelationInput[]
    cursor?: MotoristaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MotoristaScalarFieldEnum | MotoristaScalarFieldEnum[]
  }

  /**
   * Secretaria without action
   */
  export type SecretariaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
  }


  /**
   * Model UserSecretaria
   */

  export type AggregateUserSecretaria = {
    _count: UserSecretariaCountAggregateOutputType | null
    _min: UserSecretariaMinAggregateOutputType | null
    _max: UserSecretariaMaxAggregateOutputType | null
  }

  export type UserSecretariaMinAggregateOutputType = {
    userId: string | null
    secretariaId: string | null
  }

  export type UserSecretariaMaxAggregateOutputType = {
    userId: string | null
    secretariaId: string | null
  }

  export type UserSecretariaCountAggregateOutputType = {
    userId: number
    secretariaId: number
    _all: number
  }


  export type UserSecretariaMinAggregateInputType = {
    userId?: true
    secretariaId?: true
  }

  export type UserSecretariaMaxAggregateInputType = {
    userId?: true
    secretariaId?: true
  }

  export type UserSecretariaCountAggregateInputType = {
    userId?: true
    secretariaId?: true
    _all?: true
  }

  export type UserSecretariaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSecretaria to aggregate.
     */
    where?: UserSecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSecretarias to fetch.
     */
    orderBy?: UserSecretariaOrderByWithRelationInput | UserSecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSecretariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSecretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSecretarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSecretarias
    **/
    _count?: true | UserSecretariaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSecretariaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSecretariaMaxAggregateInputType
  }

  export type GetUserSecretariaAggregateType<T extends UserSecretariaAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSecretaria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSecretaria[P]>
      : GetScalarType<T[P], AggregateUserSecretaria[P]>
  }




  export type UserSecretariaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSecretariaWhereInput
    orderBy?: UserSecretariaOrderByWithAggregationInput | UserSecretariaOrderByWithAggregationInput[]
    by: UserSecretariaScalarFieldEnum[] | UserSecretariaScalarFieldEnum
    having?: UserSecretariaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSecretariaCountAggregateInputType | true
    _min?: UserSecretariaMinAggregateInputType
    _max?: UserSecretariaMaxAggregateInputType
  }

  export type UserSecretariaGroupByOutputType = {
    userId: string
    secretariaId: string
    _count: UserSecretariaCountAggregateOutputType | null
    _min: UserSecretariaMinAggregateOutputType | null
    _max: UserSecretariaMaxAggregateOutputType | null
  }

  type GetUserSecretariaGroupByPayload<T extends UserSecretariaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSecretariaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSecretariaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSecretariaGroupByOutputType[P]>
            : GetScalarType<T[P], UserSecretariaGroupByOutputType[P]>
        }
      >
    >


  export type UserSecretariaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    secretariaId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSecretaria"]>

  export type UserSecretariaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    secretariaId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSecretaria"]>

  export type UserSecretariaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    secretariaId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSecretaria"]>

  export type UserSecretariaSelectScalar = {
    userId?: boolean
    secretariaId?: boolean
  }

  export type UserSecretariaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "secretariaId", ExtArgs["result"]["userSecretaria"]>
  export type UserSecretariaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
  }
  export type UserSecretariaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
  }
  export type UserSecretariaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    secretaria?: boolean | SecretariaDefaultArgs<ExtArgs>
  }

  export type $UserSecretariaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSecretaria"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      secretaria: Prisma.$SecretariaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      secretariaId: string
    }, ExtArgs["result"]["userSecretaria"]>
    composites: {}
  }

  type UserSecretariaGetPayload<S extends boolean | null | undefined | UserSecretariaDefaultArgs> = $Result.GetResult<Prisma.$UserSecretariaPayload, S>

  type UserSecretariaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSecretariaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSecretariaCountAggregateInputType | true
    }

  export interface UserSecretariaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSecretaria'], meta: { name: 'UserSecretaria' } }
    /**
     * Find zero or one UserSecretaria that matches the filter.
     * @param {UserSecretariaFindUniqueArgs} args - Arguments to find a UserSecretaria
     * @example
     * // Get one UserSecretaria
     * const userSecretaria = await prisma.userSecretaria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSecretariaFindUniqueArgs>(args: SelectSubset<T, UserSecretariaFindUniqueArgs<ExtArgs>>): Prisma__UserSecretariaClient<$Result.GetResult<Prisma.$UserSecretariaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSecretaria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSecretariaFindUniqueOrThrowArgs} args - Arguments to find a UserSecretaria
     * @example
     * // Get one UserSecretaria
     * const userSecretaria = await prisma.userSecretaria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSecretariaFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSecretariaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSecretariaClient<$Result.GetResult<Prisma.$UserSecretariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSecretaria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecretariaFindFirstArgs} args - Arguments to find a UserSecretaria
     * @example
     * // Get one UserSecretaria
     * const userSecretaria = await prisma.userSecretaria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSecretariaFindFirstArgs>(args?: SelectSubset<T, UserSecretariaFindFirstArgs<ExtArgs>>): Prisma__UserSecretariaClient<$Result.GetResult<Prisma.$UserSecretariaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSecretaria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecretariaFindFirstOrThrowArgs} args - Arguments to find a UserSecretaria
     * @example
     * // Get one UserSecretaria
     * const userSecretaria = await prisma.userSecretaria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSecretariaFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSecretariaFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSecretariaClient<$Result.GetResult<Prisma.$UserSecretariaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSecretarias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecretariaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSecretarias
     * const userSecretarias = await prisma.userSecretaria.findMany()
     * 
     * // Get first 10 UserSecretarias
     * const userSecretarias = await prisma.userSecretaria.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userSecretariaWithUserIdOnly = await prisma.userSecretaria.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserSecretariaFindManyArgs>(args?: SelectSubset<T, UserSecretariaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSecretariaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSecretaria.
     * @param {UserSecretariaCreateArgs} args - Arguments to create a UserSecretaria.
     * @example
     * // Create one UserSecretaria
     * const UserSecretaria = await prisma.userSecretaria.create({
     *   data: {
     *     // ... data to create a UserSecretaria
     *   }
     * })
     * 
     */
    create<T extends UserSecretariaCreateArgs>(args: SelectSubset<T, UserSecretariaCreateArgs<ExtArgs>>): Prisma__UserSecretariaClient<$Result.GetResult<Prisma.$UserSecretariaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSecretarias.
     * @param {UserSecretariaCreateManyArgs} args - Arguments to create many UserSecretarias.
     * @example
     * // Create many UserSecretarias
     * const userSecretaria = await prisma.userSecretaria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSecretariaCreateManyArgs>(args?: SelectSubset<T, UserSecretariaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSecretarias and returns the data saved in the database.
     * @param {UserSecretariaCreateManyAndReturnArgs} args - Arguments to create many UserSecretarias.
     * @example
     * // Create many UserSecretarias
     * const userSecretaria = await prisma.userSecretaria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSecretarias and only return the `userId`
     * const userSecretariaWithUserIdOnly = await prisma.userSecretaria.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSecretariaCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSecretariaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSecretariaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSecretaria.
     * @param {UserSecretariaDeleteArgs} args - Arguments to delete one UserSecretaria.
     * @example
     * // Delete one UserSecretaria
     * const UserSecretaria = await prisma.userSecretaria.delete({
     *   where: {
     *     // ... filter to delete one UserSecretaria
     *   }
     * })
     * 
     */
    delete<T extends UserSecretariaDeleteArgs>(args: SelectSubset<T, UserSecretariaDeleteArgs<ExtArgs>>): Prisma__UserSecretariaClient<$Result.GetResult<Prisma.$UserSecretariaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSecretaria.
     * @param {UserSecretariaUpdateArgs} args - Arguments to update one UserSecretaria.
     * @example
     * // Update one UserSecretaria
     * const userSecretaria = await prisma.userSecretaria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSecretariaUpdateArgs>(args: SelectSubset<T, UserSecretariaUpdateArgs<ExtArgs>>): Prisma__UserSecretariaClient<$Result.GetResult<Prisma.$UserSecretariaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSecretarias.
     * @param {UserSecretariaDeleteManyArgs} args - Arguments to filter UserSecretarias to delete.
     * @example
     * // Delete a few UserSecretarias
     * const { count } = await prisma.userSecretaria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSecretariaDeleteManyArgs>(args?: SelectSubset<T, UserSecretariaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSecretarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecretariaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSecretarias
     * const userSecretaria = await prisma.userSecretaria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSecretariaUpdateManyArgs>(args: SelectSubset<T, UserSecretariaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSecretarias and returns the data updated in the database.
     * @param {UserSecretariaUpdateManyAndReturnArgs} args - Arguments to update many UserSecretarias.
     * @example
     * // Update many UserSecretarias
     * const userSecretaria = await prisma.userSecretaria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSecretarias and only return the `userId`
     * const userSecretariaWithUserIdOnly = await prisma.userSecretaria.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserSecretariaUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSecretariaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSecretariaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSecretaria.
     * @param {UserSecretariaUpsertArgs} args - Arguments to update or create a UserSecretaria.
     * @example
     * // Update or create a UserSecretaria
     * const userSecretaria = await prisma.userSecretaria.upsert({
     *   create: {
     *     // ... data to create a UserSecretaria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSecretaria we want to update
     *   }
     * })
     */
    upsert<T extends UserSecretariaUpsertArgs>(args: SelectSubset<T, UserSecretariaUpsertArgs<ExtArgs>>): Prisma__UserSecretariaClient<$Result.GetResult<Prisma.$UserSecretariaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSecretarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecretariaCountArgs} args - Arguments to filter UserSecretarias to count.
     * @example
     * // Count the number of UserSecretarias
     * const count = await prisma.userSecretaria.count({
     *   where: {
     *     // ... the filter for the UserSecretarias we want to count
     *   }
     * })
    **/
    count<T extends UserSecretariaCountArgs>(
      args?: Subset<T, UserSecretariaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSecretariaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSecretaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecretariaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSecretariaAggregateArgs>(args: Subset<T, UserSecretariaAggregateArgs>): Prisma.PrismaPromise<GetUserSecretariaAggregateType<T>>

    /**
     * Group by UserSecretaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecretariaGroupByArgs} args - Group by arguments.
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
      T extends UserSecretariaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSecretariaGroupByArgs['orderBy'] }
        : { orderBy?: UserSecretariaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSecretariaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSecretariaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSecretaria model
   */
  readonly fields: UserSecretariaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSecretaria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSecretariaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    secretaria<T extends SecretariaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SecretariaDefaultArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSecretaria model
   */
  interface UserSecretariaFieldRefs {
    readonly userId: FieldRef<"UserSecretaria", 'String'>
    readonly secretariaId: FieldRef<"UserSecretaria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserSecretaria findUnique
   */
  export type UserSecretariaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecretaria
     */
    select?: UserSecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecretaria
     */
    omit?: UserSecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecretariaInclude<ExtArgs> | null
    /**
     * Filter, which UserSecretaria to fetch.
     */
    where: UserSecretariaWhereUniqueInput
  }

  /**
   * UserSecretaria findUniqueOrThrow
   */
  export type UserSecretariaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecretaria
     */
    select?: UserSecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecretaria
     */
    omit?: UserSecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecretariaInclude<ExtArgs> | null
    /**
     * Filter, which UserSecretaria to fetch.
     */
    where: UserSecretariaWhereUniqueInput
  }

  /**
   * UserSecretaria findFirst
   */
  export type UserSecretariaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecretaria
     */
    select?: UserSecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecretaria
     */
    omit?: UserSecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecretariaInclude<ExtArgs> | null
    /**
     * Filter, which UserSecretaria to fetch.
     */
    where?: UserSecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSecretarias to fetch.
     */
    orderBy?: UserSecretariaOrderByWithRelationInput | UserSecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSecretarias.
     */
    cursor?: UserSecretariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSecretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSecretarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSecretarias.
     */
    distinct?: UserSecretariaScalarFieldEnum | UserSecretariaScalarFieldEnum[]
  }

  /**
   * UserSecretaria findFirstOrThrow
   */
  export type UserSecretariaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecretaria
     */
    select?: UserSecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecretaria
     */
    omit?: UserSecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecretariaInclude<ExtArgs> | null
    /**
     * Filter, which UserSecretaria to fetch.
     */
    where?: UserSecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSecretarias to fetch.
     */
    orderBy?: UserSecretariaOrderByWithRelationInput | UserSecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSecretarias.
     */
    cursor?: UserSecretariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSecretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSecretarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSecretarias.
     */
    distinct?: UserSecretariaScalarFieldEnum | UserSecretariaScalarFieldEnum[]
  }

  /**
   * UserSecretaria findMany
   */
  export type UserSecretariaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecretaria
     */
    select?: UserSecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecretaria
     */
    omit?: UserSecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecretariaInclude<ExtArgs> | null
    /**
     * Filter, which UserSecretarias to fetch.
     */
    where?: UserSecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSecretarias to fetch.
     */
    orderBy?: UserSecretariaOrderByWithRelationInput | UserSecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSecretarias.
     */
    cursor?: UserSecretariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSecretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSecretarias.
     */
    skip?: number
    distinct?: UserSecretariaScalarFieldEnum | UserSecretariaScalarFieldEnum[]
  }

  /**
   * UserSecretaria create
   */
  export type UserSecretariaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecretaria
     */
    select?: UserSecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecretaria
     */
    omit?: UserSecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecretariaInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSecretaria.
     */
    data: XOR<UserSecretariaCreateInput, UserSecretariaUncheckedCreateInput>
  }

  /**
   * UserSecretaria createMany
   */
  export type UserSecretariaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSecretarias.
     */
    data: UserSecretariaCreateManyInput | UserSecretariaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSecretaria createManyAndReturn
   */
  export type UserSecretariaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecretaria
     */
    select?: UserSecretariaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecretaria
     */
    omit?: UserSecretariaOmit<ExtArgs> | null
    /**
     * The data used to create many UserSecretarias.
     */
    data: UserSecretariaCreateManyInput | UserSecretariaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecretariaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSecretaria update
   */
  export type UserSecretariaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecretaria
     */
    select?: UserSecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecretaria
     */
    omit?: UserSecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecretariaInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSecretaria.
     */
    data: XOR<UserSecretariaUpdateInput, UserSecretariaUncheckedUpdateInput>
    /**
     * Choose, which UserSecretaria to update.
     */
    where: UserSecretariaWhereUniqueInput
  }

  /**
   * UserSecretaria updateMany
   */
  export type UserSecretariaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSecretarias.
     */
    data: XOR<UserSecretariaUpdateManyMutationInput, UserSecretariaUncheckedUpdateManyInput>
    /**
     * Filter which UserSecretarias to update
     */
    where?: UserSecretariaWhereInput
    /**
     * Limit how many UserSecretarias to update.
     */
    limit?: number
  }

  /**
   * UserSecretaria updateManyAndReturn
   */
  export type UserSecretariaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecretaria
     */
    select?: UserSecretariaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecretaria
     */
    omit?: UserSecretariaOmit<ExtArgs> | null
    /**
     * The data used to update UserSecretarias.
     */
    data: XOR<UserSecretariaUpdateManyMutationInput, UserSecretariaUncheckedUpdateManyInput>
    /**
     * Filter which UserSecretarias to update
     */
    where?: UserSecretariaWhereInput
    /**
     * Limit how many UserSecretarias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecretariaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSecretaria upsert
   */
  export type UserSecretariaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecretaria
     */
    select?: UserSecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecretaria
     */
    omit?: UserSecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecretariaInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSecretaria to update in case it exists.
     */
    where: UserSecretariaWhereUniqueInput
    /**
     * In case the UserSecretaria found by the `where` argument doesn't exist, create a new UserSecretaria with this data.
     */
    create: XOR<UserSecretariaCreateInput, UserSecretariaUncheckedCreateInput>
    /**
     * In case the UserSecretaria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSecretariaUpdateInput, UserSecretariaUncheckedUpdateInput>
  }

  /**
   * UserSecretaria delete
   */
  export type UserSecretariaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecretaria
     */
    select?: UserSecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecretaria
     */
    omit?: UserSecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecretariaInclude<ExtArgs> | null
    /**
     * Filter which UserSecretaria to delete.
     */
    where: UserSecretariaWhereUniqueInput
  }

  /**
   * UserSecretaria deleteMany
   */
  export type UserSecretariaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSecretarias to delete
     */
    where?: UserSecretariaWhereInput
    /**
     * Limit how many UserSecretarias to delete.
     */
    limit?: number
  }

  /**
   * UserSecretaria without action
   */
  export type UserSecretariaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecretaria
     */
    select?: UserSecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecretaria
     */
    omit?: UserSecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecretariaInclude<ExtArgs> | null
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
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    emailVerified: boolean | null
    image: string | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    emailVerified: number
    image: number
    updatedAt: number
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
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    emailVerified?: true
    image?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    emailVerified?: true
    image?: true
    updatedAt?: true
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
    acesso?: boolean | User$acessoArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    veiculos?: boolean | User$veiculosArgs<ExtArgs>
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
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    emailVerified?: boolean
    image?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    emailVerified?: boolean
    image?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt" | "emailVerified" | "image" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acesso?: boolean | User$acessoArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    veiculos?: boolean | User$veiculosArgs<ExtArgs>
    secretarias?: boolean | User$secretariasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      acesso: Prisma.$AcessoPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      veiculos: Prisma.$VeiculoPayload<ExtArgs>[]
      secretarias: Prisma.$UserSecretariaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      createdAt: Date
      emailVerified: boolean
      image: string | null
      updatedAt: Date
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
    acesso<T extends User$acessoArgs<ExtArgs> = {}>(args?: Subset<T, User$acessoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    veiculos<T extends User$veiculosArgs<ExtArgs> = {}>(args?: Subset<T, User$veiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    secretarias<T extends User$secretariasArgs<ExtArgs> = {}>(args?: Subset<T, User$secretariasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSecretariaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * User.acesso
   */
  export type User$acessoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acesso
     */
    omit?: AcessoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessoInclude<ExtArgs> | null
    where?: AcessoWhereInput
    orderBy?: AcessoOrderByWithRelationInput | AcessoOrderByWithRelationInput[]
    cursor?: AcessoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcessoScalarFieldEnum | AcessoScalarFieldEnum[]
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
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    where?: VeiculoWhereInput
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    cursor?: VeiculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * User.secretarias
   */
  export type User$secretariasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecretaria
     */
    select?: UserSecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecretaria
     */
    omit?: UserSecretariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecretariaInclude<ExtArgs> | null
    where?: UserSecretariaWhereInput
    orderBy?: UserSecretariaOrderByWithRelationInput | UserSecretariaOrderByWithRelationInput[]
    cursor?: UserSecretariaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSecretariaScalarFieldEnum | UserSecretariaScalarFieldEnum[]
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


  export const DemandaScalarFieldEnum: {
    id: 'id',
    origemDemanda: 'origemDemanda',
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
    lotacao: 'lotacao',
    kmRodado: 'kmRodado',
    recurso: 'recurso',
    categoria: 'categoria',
    veiculoId: 'veiculoId',
    motoristaId: 'motoristaId',
    secretariaId: 'secretariaId'
  };

  export type DemandaScalarFieldEnum = (typeof DemandaScalarFieldEnum)[keyof typeof DemandaScalarFieldEnum]


  export const VeiculoScalarFieldEnum: {
    id: 'id',
    placaVeiculo: 'placaVeiculo',
    chassiVeiculo: 'chassiVeiculo',
    renavamVeiculo: 'renavamVeiculo',
    proprietarioVeiculo: 'proprietarioVeiculo',
    crlvVeiculo: 'crlvVeiculo',
    secretariaId: 'secretariaId',
    userId: 'userId',
    modeloId: 'modeloId'
  };

  export type VeiculoScalarFieldEnum = (typeof VeiculoScalarFieldEnum)[keyof typeof VeiculoScalarFieldEnum]


  export const VeiculoModeloScalarFieldEnum: {
    id: 'id',
    modelo: 'modelo'
  };

  export type VeiculoModeloScalarFieldEnum = (typeof VeiculoModeloScalarFieldEnum)[keyof typeof VeiculoModeloScalarFieldEnum]


  export const MotoristaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    contato: 'contato',
    secretariaId: 'secretariaId'
  };

  export type MotoristaScalarFieldEnum = (typeof MotoristaScalarFieldEnum)[keyof typeof MotoristaScalarFieldEnum]


  export const AcessoScalarFieldEnum: {
    id: 'id',
    nivel: 'nivel'
  };

  export type AcessoScalarFieldEnum = (typeof AcessoScalarFieldEnum)[keyof typeof AcessoScalarFieldEnum]


  export const SecretariaScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type SecretariaScalarFieldEnum = (typeof SecretariaScalarFieldEnum)[keyof typeof SecretariaScalarFieldEnum]


  export const UserSecretariaScalarFieldEnum: {
    userId: 'userId',
    secretariaId: 'secretariaId'
  };

  export type UserSecretariaScalarFieldEnum = (typeof UserSecretariaScalarFieldEnum)[keyof typeof UserSecretariaScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    emailVerified: 'emailVerified',
    image: 'image',
    updatedAt: 'updatedAt'
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
   * Reference to a field of type 'OrigemDemanda'
   */
  export type EnumOrigemDemandaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrigemDemanda'>
    


  /**
   * Reference to a field of type 'OrigemDemanda[]'
   */
  export type ListEnumOrigemDemandaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrigemDemanda[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DemandaWhereInput = {
    AND?: DemandaWhereInput | DemandaWhereInput[]
    OR?: DemandaWhereInput[]
    NOT?: DemandaWhereInput | DemandaWhereInput[]
    id?: StringFilter<"Demanda"> | string
    origemDemanda?: EnumOrigemDemandaFilter<"Demanda"> | $Enums.OrigemDemanda
    emailSolicitante?: StringFilter<"Demanda"> | string
    demandaDetalhe?: StringFilter<"Demanda"> | string
    pessoaSolicitante?: StringFilter<"Demanda"> | string
    secretariaSolicitante?: StringFilter<"Demanda"> | string
    destino?: StringFilter<"Demanda"> | string
    dataHoraIda?: StringFilter<"Demanda"> | string
    dataHoraVolta?: StringFilter<"Demanda"> | string
    origem?: StringFilter<"Demanda"> | string
    contato?: StringFilter<"Demanda"> | string
    statusDemanda?: StringFilter<"Demanda"> | string
    createdAt?: DateTimeFilter<"Demanda"> | Date | string
    updatedAt?: DateTimeFilter<"Demanda"> | Date | string
    lotacao?: IntNullableFilter<"Demanda"> | number | null
    kmRodado?: IntNullableFilter<"Demanda"> | number | null
    recurso?: StringNullableFilter<"Demanda"> | string | null
    categoria?: StringNullableFilter<"Demanda"> | string | null
    veiculoId?: StringNullableFilter<"Demanda"> | string | null
    motoristaId?: StringNullableFilter<"Demanda"> | string | null
    secretariaId?: StringNullableFilter<"Demanda"> | string | null
    veiculo?: XOR<VeiculoNullableScalarRelationFilter, VeiculoWhereInput> | null
    motorista?: XOR<MotoristaNullableScalarRelationFilter, MotoristaWhereInput> | null
    secretaria?: XOR<SecretariaNullableScalarRelationFilter, SecretariaWhereInput> | null
  }

  export type DemandaOrderByWithRelationInput = {
    id?: SortOrder
    origemDemanda?: SortOrder
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
    lotacao?: SortOrderInput | SortOrder
    kmRodado?: SortOrderInput | SortOrder
    recurso?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    veiculoId?: SortOrderInput | SortOrder
    motoristaId?: SortOrderInput | SortOrder
    secretariaId?: SortOrderInput | SortOrder
    veiculo?: VeiculoOrderByWithRelationInput
    motorista?: MotoristaOrderByWithRelationInput
    secretaria?: SecretariaOrderByWithRelationInput
  }

  export type DemandaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DemandaWhereInput | DemandaWhereInput[]
    OR?: DemandaWhereInput[]
    NOT?: DemandaWhereInput | DemandaWhereInput[]
    origemDemanda?: EnumOrigemDemandaFilter<"Demanda"> | $Enums.OrigemDemanda
    emailSolicitante?: StringFilter<"Demanda"> | string
    demandaDetalhe?: StringFilter<"Demanda"> | string
    pessoaSolicitante?: StringFilter<"Demanda"> | string
    secretariaSolicitante?: StringFilter<"Demanda"> | string
    destino?: StringFilter<"Demanda"> | string
    dataHoraIda?: StringFilter<"Demanda"> | string
    dataHoraVolta?: StringFilter<"Demanda"> | string
    origem?: StringFilter<"Demanda"> | string
    contato?: StringFilter<"Demanda"> | string
    statusDemanda?: StringFilter<"Demanda"> | string
    createdAt?: DateTimeFilter<"Demanda"> | Date | string
    updatedAt?: DateTimeFilter<"Demanda"> | Date | string
    lotacao?: IntNullableFilter<"Demanda"> | number | null
    kmRodado?: IntNullableFilter<"Demanda"> | number | null
    recurso?: StringNullableFilter<"Demanda"> | string | null
    categoria?: StringNullableFilter<"Demanda"> | string | null
    veiculoId?: StringNullableFilter<"Demanda"> | string | null
    motoristaId?: StringNullableFilter<"Demanda"> | string | null
    secretariaId?: StringNullableFilter<"Demanda"> | string | null
    veiculo?: XOR<VeiculoNullableScalarRelationFilter, VeiculoWhereInput> | null
    motorista?: XOR<MotoristaNullableScalarRelationFilter, MotoristaWhereInput> | null
    secretaria?: XOR<SecretariaNullableScalarRelationFilter, SecretariaWhereInput> | null
  }, "id">

  export type DemandaOrderByWithAggregationInput = {
    id?: SortOrder
    origemDemanda?: SortOrder
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
    lotacao?: SortOrderInput | SortOrder
    kmRodado?: SortOrderInput | SortOrder
    recurso?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    veiculoId?: SortOrderInput | SortOrder
    motoristaId?: SortOrderInput | SortOrder
    secretariaId?: SortOrderInput | SortOrder
    _count?: DemandaCountOrderByAggregateInput
    _avg?: DemandaAvgOrderByAggregateInput
    _max?: DemandaMaxOrderByAggregateInput
    _min?: DemandaMinOrderByAggregateInput
    _sum?: DemandaSumOrderByAggregateInput
  }

  export type DemandaScalarWhereWithAggregatesInput = {
    AND?: DemandaScalarWhereWithAggregatesInput | DemandaScalarWhereWithAggregatesInput[]
    OR?: DemandaScalarWhereWithAggregatesInput[]
    NOT?: DemandaScalarWhereWithAggregatesInput | DemandaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Demanda"> | string
    origemDemanda?: EnumOrigemDemandaWithAggregatesFilter<"Demanda"> | $Enums.OrigemDemanda
    emailSolicitante?: StringWithAggregatesFilter<"Demanda"> | string
    demandaDetalhe?: StringWithAggregatesFilter<"Demanda"> | string
    pessoaSolicitante?: StringWithAggregatesFilter<"Demanda"> | string
    secretariaSolicitante?: StringWithAggregatesFilter<"Demanda"> | string
    destino?: StringWithAggregatesFilter<"Demanda"> | string
    dataHoraIda?: StringWithAggregatesFilter<"Demanda"> | string
    dataHoraVolta?: StringWithAggregatesFilter<"Demanda"> | string
    origem?: StringWithAggregatesFilter<"Demanda"> | string
    contato?: StringWithAggregatesFilter<"Demanda"> | string
    statusDemanda?: StringWithAggregatesFilter<"Demanda"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Demanda"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Demanda"> | Date | string
    lotacao?: IntNullableWithAggregatesFilter<"Demanda"> | number | null
    kmRodado?: IntNullableWithAggregatesFilter<"Demanda"> | number | null
    recurso?: StringNullableWithAggregatesFilter<"Demanda"> | string | null
    categoria?: StringNullableWithAggregatesFilter<"Demanda"> | string | null
    veiculoId?: StringNullableWithAggregatesFilter<"Demanda"> | string | null
    motoristaId?: StringNullableWithAggregatesFilter<"Demanda"> | string | null
    secretariaId?: StringNullableWithAggregatesFilter<"Demanda"> | string | null
  }

  export type VeiculoWhereInput = {
    AND?: VeiculoWhereInput | VeiculoWhereInput[]
    OR?: VeiculoWhereInput[]
    NOT?: VeiculoWhereInput | VeiculoWhereInput[]
    id?: StringFilter<"Veiculo"> | string
    placaVeiculo?: StringFilter<"Veiculo"> | string
    chassiVeiculo?: StringFilter<"Veiculo"> | string
    renavamVeiculo?: StringFilter<"Veiculo"> | string
    proprietarioVeiculo?: StringFilter<"Veiculo"> | string
    crlvVeiculo?: StringFilter<"Veiculo"> | string
    secretariaId?: StringFilter<"Veiculo"> | string
    userId?: StringFilter<"Veiculo"> | string
    modeloId?: StringNullableFilter<"Veiculo"> | string | null
    secretaria?: XOR<SecretariaScalarRelationFilter, SecretariaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    modelo?: XOR<VeiculoModeloNullableScalarRelationFilter, VeiculoModeloWhereInput> | null
    demandas?: DemandaListRelationFilter
  }

  export type VeiculoOrderByWithRelationInput = {
    id?: SortOrder
    placaVeiculo?: SortOrder
    chassiVeiculo?: SortOrder
    renavamVeiculo?: SortOrder
    proprietarioVeiculo?: SortOrder
    crlvVeiculo?: SortOrder
    secretariaId?: SortOrder
    userId?: SortOrder
    modeloId?: SortOrderInput | SortOrder
    secretaria?: SecretariaOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    modelo?: VeiculoModeloOrderByWithRelationInput
    demandas?: DemandaOrderByRelationAggregateInput
  }

  export type VeiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    placaVeiculo?: string
    AND?: VeiculoWhereInput | VeiculoWhereInput[]
    OR?: VeiculoWhereInput[]
    NOT?: VeiculoWhereInput | VeiculoWhereInput[]
    chassiVeiculo?: StringFilter<"Veiculo"> | string
    renavamVeiculo?: StringFilter<"Veiculo"> | string
    proprietarioVeiculo?: StringFilter<"Veiculo"> | string
    crlvVeiculo?: StringFilter<"Veiculo"> | string
    secretariaId?: StringFilter<"Veiculo"> | string
    userId?: StringFilter<"Veiculo"> | string
    modeloId?: StringNullableFilter<"Veiculo"> | string | null
    secretaria?: XOR<SecretariaScalarRelationFilter, SecretariaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    modelo?: XOR<VeiculoModeloNullableScalarRelationFilter, VeiculoModeloWhereInput> | null
    demandas?: DemandaListRelationFilter
  }, "id" | "placaVeiculo">

  export type VeiculoOrderByWithAggregationInput = {
    id?: SortOrder
    placaVeiculo?: SortOrder
    chassiVeiculo?: SortOrder
    renavamVeiculo?: SortOrder
    proprietarioVeiculo?: SortOrder
    crlvVeiculo?: SortOrder
    secretariaId?: SortOrder
    userId?: SortOrder
    modeloId?: SortOrderInput | SortOrder
    _count?: VeiculoCountOrderByAggregateInput
    _max?: VeiculoMaxOrderByAggregateInput
    _min?: VeiculoMinOrderByAggregateInput
  }

  export type VeiculoScalarWhereWithAggregatesInput = {
    AND?: VeiculoScalarWhereWithAggregatesInput | VeiculoScalarWhereWithAggregatesInput[]
    OR?: VeiculoScalarWhereWithAggregatesInput[]
    NOT?: VeiculoScalarWhereWithAggregatesInput | VeiculoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Veiculo"> | string
    placaVeiculo?: StringWithAggregatesFilter<"Veiculo"> | string
    chassiVeiculo?: StringWithAggregatesFilter<"Veiculo"> | string
    renavamVeiculo?: StringWithAggregatesFilter<"Veiculo"> | string
    proprietarioVeiculo?: StringWithAggregatesFilter<"Veiculo"> | string
    crlvVeiculo?: StringWithAggregatesFilter<"Veiculo"> | string
    secretariaId?: StringWithAggregatesFilter<"Veiculo"> | string
    userId?: StringWithAggregatesFilter<"Veiculo"> | string
    modeloId?: StringNullableWithAggregatesFilter<"Veiculo"> | string | null
  }

  export type VeiculoModeloWhereInput = {
    AND?: VeiculoModeloWhereInput | VeiculoModeloWhereInput[]
    OR?: VeiculoModeloWhereInput[]
    NOT?: VeiculoModeloWhereInput | VeiculoModeloWhereInput[]
    id?: StringFilter<"VeiculoModelo"> | string
    modelo?: StringFilter<"VeiculoModelo"> | string
    veiculos?: VeiculoListRelationFilter
  }

  export type VeiculoModeloOrderByWithRelationInput = {
    id?: SortOrder
    modelo?: SortOrder
    veiculos?: VeiculoOrderByRelationAggregateInput
  }

  export type VeiculoModeloWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VeiculoModeloWhereInput | VeiculoModeloWhereInput[]
    OR?: VeiculoModeloWhereInput[]
    NOT?: VeiculoModeloWhereInput | VeiculoModeloWhereInput[]
    modelo?: StringFilter<"VeiculoModelo"> | string
    veiculos?: VeiculoListRelationFilter
  }, "id">

  export type VeiculoModeloOrderByWithAggregationInput = {
    id?: SortOrder
    modelo?: SortOrder
    _count?: VeiculoModeloCountOrderByAggregateInput
    _max?: VeiculoModeloMaxOrderByAggregateInput
    _min?: VeiculoModeloMinOrderByAggregateInput
  }

  export type VeiculoModeloScalarWhereWithAggregatesInput = {
    AND?: VeiculoModeloScalarWhereWithAggregatesInput | VeiculoModeloScalarWhereWithAggregatesInput[]
    OR?: VeiculoModeloScalarWhereWithAggregatesInput[]
    NOT?: VeiculoModeloScalarWhereWithAggregatesInput | VeiculoModeloScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VeiculoModelo"> | string
    modelo?: StringWithAggregatesFilter<"VeiculoModelo"> | string
  }

  export type MotoristaWhereInput = {
    AND?: MotoristaWhereInput | MotoristaWhereInput[]
    OR?: MotoristaWhereInput[]
    NOT?: MotoristaWhereInput | MotoristaWhereInput[]
    id?: StringFilter<"Motorista"> | string
    nome?: StringFilter<"Motorista"> | string
    contato?: StringFilter<"Motorista"> | string
    secretariaId?: StringFilter<"Motorista"> | string
    demandas?: DemandaListRelationFilter
    secretaria?: XOR<SecretariaScalarRelationFilter, SecretariaWhereInput>
  }

  export type MotoristaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    contato?: SortOrder
    secretariaId?: SortOrder
    demandas?: DemandaOrderByRelationAggregateInput
    secretaria?: SecretariaOrderByWithRelationInput
  }

  export type MotoristaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MotoristaWhereInput | MotoristaWhereInput[]
    OR?: MotoristaWhereInput[]
    NOT?: MotoristaWhereInput | MotoristaWhereInput[]
    nome?: StringFilter<"Motorista"> | string
    contato?: StringFilter<"Motorista"> | string
    secretariaId?: StringFilter<"Motorista"> | string
    demandas?: DemandaListRelationFilter
    secretaria?: XOR<SecretariaScalarRelationFilter, SecretariaWhereInput>
  }, "id">

  export type MotoristaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    contato?: SortOrder
    secretariaId?: SortOrder
    _count?: MotoristaCountOrderByAggregateInput
    _max?: MotoristaMaxOrderByAggregateInput
    _min?: MotoristaMinOrderByAggregateInput
  }

  export type MotoristaScalarWhereWithAggregatesInput = {
    AND?: MotoristaScalarWhereWithAggregatesInput | MotoristaScalarWhereWithAggregatesInput[]
    OR?: MotoristaScalarWhereWithAggregatesInput[]
    NOT?: MotoristaScalarWhereWithAggregatesInput | MotoristaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Motorista"> | string
    nome?: StringWithAggregatesFilter<"Motorista"> | string
    contato?: StringWithAggregatesFilter<"Motorista"> | string
    secretariaId?: StringWithAggregatesFilter<"Motorista"> | string
  }

  export type AcessoWhereInput = {
    AND?: AcessoWhereInput | AcessoWhereInput[]
    OR?: AcessoWhereInput[]
    NOT?: AcessoWhereInput | AcessoWhereInput[]
    id?: StringFilter<"Acesso"> | string
    nivel?: StringFilter<"Acesso"> | string
    user?: UserListRelationFilter
  }

  export type AcessoOrderByWithRelationInput = {
    id?: SortOrder
    nivel?: SortOrder
    user?: UserOrderByRelationAggregateInput
  }

  export type AcessoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AcessoWhereInput | AcessoWhereInput[]
    OR?: AcessoWhereInput[]
    NOT?: AcessoWhereInput | AcessoWhereInput[]
    nivel?: StringFilter<"Acesso"> | string
    user?: UserListRelationFilter
  }, "id">

  export type AcessoOrderByWithAggregationInput = {
    id?: SortOrder
    nivel?: SortOrder
    _count?: AcessoCountOrderByAggregateInput
    _max?: AcessoMaxOrderByAggregateInput
    _min?: AcessoMinOrderByAggregateInput
  }

  export type AcessoScalarWhereWithAggregatesInput = {
    AND?: AcessoScalarWhereWithAggregatesInput | AcessoScalarWhereWithAggregatesInput[]
    OR?: AcessoScalarWhereWithAggregatesInput[]
    NOT?: AcessoScalarWhereWithAggregatesInput | AcessoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Acesso"> | string
    nivel?: StringWithAggregatesFilter<"Acesso"> | string
  }

  export type SecretariaWhereInput = {
    AND?: SecretariaWhereInput | SecretariaWhereInput[]
    OR?: SecretariaWhereInput[]
    NOT?: SecretariaWhereInput | SecretariaWhereInput[]
    id?: StringFilter<"Secretaria"> | string
    nome?: StringFilter<"Secretaria"> | string
    demandas?: DemandaListRelationFilter
    users?: UserSecretariaListRelationFilter
    veiculos?: VeiculoListRelationFilter
    motorista?: MotoristaListRelationFilter
  }

  export type SecretariaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    demandas?: DemandaOrderByRelationAggregateInput
    users?: UserSecretariaOrderByRelationAggregateInput
    veiculos?: VeiculoOrderByRelationAggregateInput
    motorista?: MotoristaOrderByRelationAggregateInput
  }

  export type SecretariaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: SecretariaWhereInput | SecretariaWhereInput[]
    OR?: SecretariaWhereInput[]
    NOT?: SecretariaWhereInput | SecretariaWhereInput[]
    demandas?: DemandaListRelationFilter
    users?: UserSecretariaListRelationFilter
    veiculos?: VeiculoListRelationFilter
    motorista?: MotoristaListRelationFilter
  }, "id" | "nome">

  export type SecretariaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: SecretariaCountOrderByAggregateInput
    _max?: SecretariaMaxOrderByAggregateInput
    _min?: SecretariaMinOrderByAggregateInput
  }

  export type SecretariaScalarWhereWithAggregatesInput = {
    AND?: SecretariaScalarWhereWithAggregatesInput | SecretariaScalarWhereWithAggregatesInput[]
    OR?: SecretariaScalarWhereWithAggregatesInput[]
    NOT?: SecretariaScalarWhereWithAggregatesInput | SecretariaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Secretaria"> | string
    nome?: StringWithAggregatesFilter<"Secretaria"> | string
  }

  export type UserSecretariaWhereInput = {
    AND?: UserSecretariaWhereInput | UserSecretariaWhereInput[]
    OR?: UserSecretariaWhereInput[]
    NOT?: UserSecretariaWhereInput | UserSecretariaWhereInput[]
    userId?: StringFilter<"UserSecretaria"> | string
    secretariaId?: StringFilter<"UserSecretaria"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    secretaria?: XOR<SecretariaScalarRelationFilter, SecretariaWhereInput>
  }

  export type UserSecretariaOrderByWithRelationInput = {
    userId?: SortOrder
    secretariaId?: SortOrder
    user?: UserOrderByWithRelationInput
    secretaria?: SecretariaOrderByWithRelationInput
  }

  export type UserSecretariaWhereUniqueInput = Prisma.AtLeast<{
    userId_secretariaId?: UserSecretariaUserIdSecretariaIdCompoundUniqueInput
    AND?: UserSecretariaWhereInput | UserSecretariaWhereInput[]
    OR?: UserSecretariaWhereInput[]
    NOT?: UserSecretariaWhereInput | UserSecretariaWhereInput[]
    userId?: StringFilter<"UserSecretaria"> | string
    secretariaId?: StringFilter<"UserSecretaria"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    secretaria?: XOR<SecretariaScalarRelationFilter, SecretariaWhereInput>
  }, "userId_secretariaId">

  export type UserSecretariaOrderByWithAggregationInput = {
    userId?: SortOrder
    secretariaId?: SortOrder
    _count?: UserSecretariaCountOrderByAggregateInput
    _max?: UserSecretariaMaxOrderByAggregateInput
    _min?: UserSecretariaMinOrderByAggregateInput
  }

  export type UserSecretariaScalarWhereWithAggregatesInput = {
    AND?: UserSecretariaScalarWhereWithAggregatesInput | UserSecretariaScalarWhereWithAggregatesInput[]
    OR?: UserSecretariaScalarWhereWithAggregatesInput[]
    NOT?: UserSecretariaScalarWhereWithAggregatesInput | UserSecretariaScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserSecretaria"> | string
    secretariaId?: StringWithAggregatesFilter<"UserSecretaria"> | string
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
    acesso?: AcessoListRelationFilter
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    veiculos?: VeiculoListRelationFilter
    secretarias?: UserSecretariaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    acesso?: AcessoOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    veiculos?: VeiculoOrderByRelationAggregateInput
    secretarias?: UserSecretariaOrderByRelationAggregateInput
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
    acesso?: AcessoListRelationFilter
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    veiculos?: VeiculoListRelationFilter
    secretarias?: UserSecretariaListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
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

  export type DemandaCreateInput = {
    id?: string
    origemDemanda?: $Enums.OrigemDemanda
    emailSolicitante: string
    demandaDetalhe: string
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda: string
    dataHoraVolta: string
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lotacao?: number | null
    kmRodado?: number | null
    recurso?: string | null
    categoria?: string | null
    veiculo?: VeiculoCreateNestedOneWithoutDemandasInput
    motorista?: MotoristaCreateNestedOneWithoutDemandasInput
    secretaria?: SecretariaCreateNestedOneWithoutDemandasInput
  }

  export type DemandaUncheckedCreateInput = {
    id?: string
    origemDemanda?: $Enums.OrigemDemanda
    emailSolicitante: string
    demandaDetalhe: string
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda: string
    dataHoraVolta: string
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lotacao?: number | null
    kmRodado?: number | null
    recurso?: string | null
    categoria?: string | null
    veiculoId?: string | null
    motoristaId?: string | null
    secretariaId?: string | null
  }

  export type DemandaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    origemDemanda?: EnumOrigemDemandaFieldUpdateOperationsInput | $Enums.OrigemDemanda
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: StringFieldUpdateOperationsInput | string
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: StringFieldUpdateOperationsInput | string
    dataHoraVolta?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotacao?: NullableIntFieldUpdateOperationsInput | number | null
    kmRodado?: NullableIntFieldUpdateOperationsInput | number | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    veiculo?: VeiculoUpdateOneWithoutDemandasNestedInput
    motorista?: MotoristaUpdateOneWithoutDemandasNestedInput
    secretaria?: SecretariaUpdateOneWithoutDemandasNestedInput
  }

  export type DemandaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    origemDemanda?: EnumOrigemDemandaFieldUpdateOperationsInput | $Enums.OrigemDemanda
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: StringFieldUpdateOperationsInput | string
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: StringFieldUpdateOperationsInput | string
    dataHoraVolta?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotacao?: NullableIntFieldUpdateOperationsInput | number | null
    kmRodado?: NullableIntFieldUpdateOperationsInput | number | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
    motoristaId?: NullableStringFieldUpdateOperationsInput | string | null
    secretariaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemandaCreateManyInput = {
    id?: string
    origemDemanda?: $Enums.OrigemDemanda
    emailSolicitante: string
    demandaDetalhe: string
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda: string
    dataHoraVolta: string
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lotacao?: number | null
    kmRodado?: number | null
    recurso?: string | null
    categoria?: string | null
    veiculoId?: string | null
    motoristaId?: string | null
    secretariaId?: string | null
  }

  export type DemandaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    origemDemanda?: EnumOrigemDemandaFieldUpdateOperationsInput | $Enums.OrigemDemanda
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: StringFieldUpdateOperationsInput | string
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: StringFieldUpdateOperationsInput | string
    dataHoraVolta?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotacao?: NullableIntFieldUpdateOperationsInput | number | null
    kmRodado?: NullableIntFieldUpdateOperationsInput | number | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemandaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    origemDemanda?: EnumOrigemDemandaFieldUpdateOperationsInput | $Enums.OrigemDemanda
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: StringFieldUpdateOperationsInput | string
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: StringFieldUpdateOperationsInput | string
    dataHoraVolta?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotacao?: NullableIntFieldUpdateOperationsInput | number | null
    kmRodado?: NullableIntFieldUpdateOperationsInput | number | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
    motoristaId?: NullableStringFieldUpdateOperationsInput | string | null
    secretariaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoCreateInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    secretaria: SecretariaCreateNestedOneWithoutVeiculosInput
    user: UserCreateNestedOneWithoutVeiculosInput
    modelo?: VeiculoModeloCreateNestedOneWithoutVeiculosInput
    demandas?: DemandaCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUncheckedCreateInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    secretariaId: string
    userId: string
    modeloId?: string | null
    demandas?: DemandaUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    secretaria?: SecretariaUpdateOneRequiredWithoutVeiculosNestedInput
    user?: UserUpdateOneRequiredWithoutVeiculosNestedInput
    modelo?: VeiculoModeloUpdateOneWithoutVeiculosNestedInput
    demandas?: DemandaUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    secretariaId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    modeloId?: NullableStringFieldUpdateOperationsInput | string | null
    demandas?: DemandaUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoCreateManyInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    secretariaId: string
    userId: string
    modeloId?: string | null
  }

  export type VeiculoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
  }

  export type VeiculoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    secretariaId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    modeloId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoModeloCreateInput = {
    id?: string
    modelo: string
    veiculos?: VeiculoCreateNestedManyWithoutModeloInput
  }

  export type VeiculoModeloUncheckedCreateInput = {
    id?: string
    modelo: string
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutModeloInput
  }

  export type VeiculoModeloUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    veiculos?: VeiculoUpdateManyWithoutModeloNestedInput
  }

  export type VeiculoModeloUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    veiculos?: VeiculoUncheckedUpdateManyWithoutModeloNestedInput
  }

  export type VeiculoModeloCreateManyInput = {
    id?: string
    modelo: string
  }

  export type VeiculoModeloUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
  }

  export type VeiculoModeloUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
  }

  export type MotoristaCreateInput = {
    id?: string
    nome: string
    contato: string
    demandas?: DemandaCreateNestedManyWithoutMotoristaInput
    secretaria: SecretariaCreateNestedOneWithoutMotoristaInput
  }

  export type MotoristaUncheckedCreateInput = {
    id?: string
    nome: string
    contato: string
    secretariaId: string
    demandas?: DemandaUncheckedCreateNestedManyWithoutMotoristaInput
  }

  export type MotoristaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    demandas?: DemandaUpdateManyWithoutMotoristaNestedInput
    secretaria?: SecretariaUpdateOneRequiredWithoutMotoristaNestedInput
  }

  export type MotoristaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    secretariaId?: StringFieldUpdateOperationsInput | string
    demandas?: DemandaUncheckedUpdateManyWithoutMotoristaNestedInput
  }

  export type MotoristaCreateManyInput = {
    id?: string
    nome: string
    contato: string
    secretariaId: string
  }

  export type MotoristaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
  }

  export type MotoristaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    secretariaId?: StringFieldUpdateOperationsInput | string
  }

  export type AcessoCreateInput = {
    id?: string
    nivel: string
    user?: UserCreateNestedManyWithoutAcessoInput
  }

  export type AcessoUncheckedCreateInput = {
    id?: string
    nivel: string
    user?: UserUncheckedCreateNestedManyWithoutAcessoInput
  }

  export type AcessoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutAcessoNestedInput
  }

  export type AcessoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutAcessoNestedInput
  }

  export type AcessoCreateManyInput = {
    id?: string
    nivel: string
  }

  export type AcessoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
  }

  export type AcessoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
  }

  export type SecretariaCreateInput = {
    id?: string
    nome: string
    demandas?: DemandaCreateNestedManyWithoutSecretariaInput
    users?: UserSecretariaCreateNestedManyWithoutSecretariaInput
    veiculos?: VeiculoCreateNestedManyWithoutSecretariaInput
    motorista?: MotoristaCreateNestedManyWithoutSecretariaInput
  }

  export type SecretariaUncheckedCreateInput = {
    id?: string
    nome: string
    demandas?: DemandaUncheckedCreateNestedManyWithoutSecretariaInput
    users?: UserSecretariaUncheckedCreateNestedManyWithoutSecretariaInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutSecretariaInput
    motorista?: MotoristaUncheckedCreateNestedManyWithoutSecretariaInput
  }

  export type SecretariaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    demandas?: DemandaUpdateManyWithoutSecretariaNestedInput
    users?: UserSecretariaUpdateManyWithoutSecretariaNestedInput
    veiculos?: VeiculoUpdateManyWithoutSecretariaNestedInput
    motorista?: MotoristaUpdateManyWithoutSecretariaNestedInput
  }

  export type SecretariaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    demandas?: DemandaUncheckedUpdateManyWithoutSecretariaNestedInput
    users?: UserSecretariaUncheckedUpdateManyWithoutSecretariaNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutSecretariaNestedInput
    motorista?: MotoristaUncheckedUpdateManyWithoutSecretariaNestedInput
  }

  export type SecretariaCreateManyInput = {
    id?: string
    nome: string
  }

  export type SecretariaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type SecretariaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UserSecretariaCreateInput = {
    user: UserCreateNestedOneWithoutSecretariasInput
    secretaria: SecretariaCreateNestedOneWithoutUsersInput
  }

  export type UserSecretariaUncheckedCreateInput = {
    userId: string
    secretariaId: string
  }

  export type UserSecretariaUpdateInput = {
    user?: UserUpdateOneRequiredWithoutSecretariasNestedInput
    secretaria?: SecretariaUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSecretariaUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    secretariaId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSecretariaCreateManyInput = {
    userId: string
    secretariaId: string
  }

  export type UserSecretariaUpdateManyMutationInput = {

  }

  export type UserSecretariaUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    secretariaId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    acesso?: AcessoCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    veiculos?: VeiculoCreateNestedManyWithoutUserInput
    secretarias?: UserSecretariaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    acesso?: AcessoUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutUserInput
    secretarias?: UserSecretariaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acesso?: AcessoUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    veiculos?: VeiculoUpdateManyWithoutUserNestedInput
    secretarias?: UserSecretariaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acesso?: AcessoUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutUserNestedInput
    secretarias?: UserSecretariaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
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

  export type EnumOrigemDemandaFilter<$PrismaModel = never> = {
    equals?: $Enums.OrigemDemanda | EnumOrigemDemandaFieldRefInput<$PrismaModel>
    in?: $Enums.OrigemDemanda[] | ListEnumOrigemDemandaFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrigemDemanda[] | ListEnumOrigemDemandaFieldRefInput<$PrismaModel>
    not?: NestedEnumOrigemDemandaFilter<$PrismaModel> | $Enums.OrigemDemanda
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type VeiculoNullableScalarRelationFilter = {
    is?: VeiculoWhereInput | null
    isNot?: VeiculoWhereInput | null
  }

  export type MotoristaNullableScalarRelationFilter = {
    is?: MotoristaWhereInput | null
    isNot?: MotoristaWhereInput | null
  }

  export type SecretariaNullableScalarRelationFilter = {
    is?: SecretariaWhereInput | null
    isNot?: SecretariaWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DemandaCountOrderByAggregateInput = {
    id?: SortOrder
    origemDemanda?: SortOrder
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
    lotacao?: SortOrder
    kmRodado?: SortOrder
    recurso?: SortOrder
    categoria?: SortOrder
    veiculoId?: SortOrder
    motoristaId?: SortOrder
    secretariaId?: SortOrder
  }

  export type DemandaAvgOrderByAggregateInput = {
    lotacao?: SortOrder
    kmRodado?: SortOrder
  }

  export type DemandaMaxOrderByAggregateInput = {
    id?: SortOrder
    origemDemanda?: SortOrder
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
    lotacao?: SortOrder
    kmRodado?: SortOrder
    recurso?: SortOrder
    categoria?: SortOrder
    veiculoId?: SortOrder
    motoristaId?: SortOrder
    secretariaId?: SortOrder
  }

  export type DemandaMinOrderByAggregateInput = {
    id?: SortOrder
    origemDemanda?: SortOrder
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
    lotacao?: SortOrder
    kmRodado?: SortOrder
    recurso?: SortOrder
    categoria?: SortOrder
    veiculoId?: SortOrder
    motoristaId?: SortOrder
    secretariaId?: SortOrder
  }

  export type DemandaSumOrderByAggregateInput = {
    lotacao?: SortOrder
    kmRodado?: SortOrder
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

  export type EnumOrigemDemandaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrigemDemanda | EnumOrigemDemandaFieldRefInput<$PrismaModel>
    in?: $Enums.OrigemDemanda[] | ListEnumOrigemDemandaFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrigemDemanda[] | ListEnumOrigemDemandaFieldRefInput<$PrismaModel>
    not?: NestedEnumOrigemDemandaWithAggregatesFilter<$PrismaModel> | $Enums.OrigemDemanda
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrigemDemandaFilter<$PrismaModel>
    _max?: NestedEnumOrigemDemandaFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type SecretariaScalarRelationFilter = {
    is?: SecretariaWhereInput
    isNot?: SecretariaWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VeiculoModeloNullableScalarRelationFilter = {
    is?: VeiculoModeloWhereInput | null
    isNot?: VeiculoModeloWhereInput | null
  }

  export type DemandaListRelationFilter = {
    every?: DemandaWhereInput
    some?: DemandaWhereInput
    none?: DemandaWhereInput
  }

  export type DemandaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VeiculoCountOrderByAggregateInput = {
    id?: SortOrder
    placaVeiculo?: SortOrder
    chassiVeiculo?: SortOrder
    renavamVeiculo?: SortOrder
    proprietarioVeiculo?: SortOrder
    crlvVeiculo?: SortOrder
    secretariaId?: SortOrder
    userId?: SortOrder
    modeloId?: SortOrder
  }

  export type VeiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    placaVeiculo?: SortOrder
    chassiVeiculo?: SortOrder
    renavamVeiculo?: SortOrder
    proprietarioVeiculo?: SortOrder
    crlvVeiculo?: SortOrder
    secretariaId?: SortOrder
    userId?: SortOrder
    modeloId?: SortOrder
  }

  export type VeiculoMinOrderByAggregateInput = {
    id?: SortOrder
    placaVeiculo?: SortOrder
    chassiVeiculo?: SortOrder
    renavamVeiculo?: SortOrder
    proprietarioVeiculo?: SortOrder
    crlvVeiculo?: SortOrder
    secretariaId?: SortOrder
    userId?: SortOrder
    modeloId?: SortOrder
  }

  export type VeiculoListRelationFilter = {
    every?: VeiculoWhereInput
    some?: VeiculoWhereInput
    none?: VeiculoWhereInput
  }

  export type VeiculoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VeiculoModeloCountOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
  }

  export type VeiculoModeloMaxOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
  }

  export type VeiculoModeloMinOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
  }

  export type MotoristaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    contato?: SortOrder
    secretariaId?: SortOrder
  }

  export type MotoristaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    contato?: SortOrder
    secretariaId?: SortOrder
  }

  export type MotoristaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    contato?: SortOrder
    secretariaId?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AcessoCountOrderByAggregateInput = {
    id?: SortOrder
    nivel?: SortOrder
  }

  export type AcessoMaxOrderByAggregateInput = {
    id?: SortOrder
    nivel?: SortOrder
  }

  export type AcessoMinOrderByAggregateInput = {
    id?: SortOrder
    nivel?: SortOrder
  }

  export type UserSecretariaListRelationFilter = {
    every?: UserSecretariaWhereInput
    some?: UserSecretariaWhereInput
    none?: UserSecretariaWhereInput
  }

  export type MotoristaListRelationFilter = {
    every?: MotoristaWhereInput
    some?: MotoristaWhereInput
    none?: MotoristaWhereInput
  }

  export type UserSecretariaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MotoristaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SecretariaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type SecretariaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type SecretariaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type UserSecretariaUserIdSecretariaIdCompoundUniqueInput = {
    userId: string
    secretariaId: string
  }

  export type UserSecretariaCountOrderByAggregateInput = {
    userId?: SortOrder
    secretariaId?: SortOrder
  }

  export type UserSecretariaMaxOrderByAggregateInput = {
    userId?: SortOrder
    secretariaId?: SortOrder
  }

  export type UserSecretariaMinOrderByAggregateInput = {
    userId?: SortOrder
    secretariaId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AcessoListRelationFilter = {
    every?: AcessoWhereInput
    some?: AcessoWhereInput
    none?: AcessoWhereInput
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

  export type AcessoOrderByRelationAggregateInput = {
    _count?: SortOrder
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
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    updatedAt?: SortOrder
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

  export type VeiculoCreateNestedOneWithoutDemandasInput = {
    create?: XOR<VeiculoCreateWithoutDemandasInput, VeiculoUncheckedCreateWithoutDemandasInput>
    connectOrCreate?: VeiculoCreateOrConnectWithoutDemandasInput
    connect?: VeiculoWhereUniqueInput
  }

  export type MotoristaCreateNestedOneWithoutDemandasInput = {
    create?: XOR<MotoristaCreateWithoutDemandasInput, MotoristaUncheckedCreateWithoutDemandasInput>
    connectOrCreate?: MotoristaCreateOrConnectWithoutDemandasInput
    connect?: MotoristaWhereUniqueInput
  }

  export type SecretariaCreateNestedOneWithoutDemandasInput = {
    create?: XOR<SecretariaCreateWithoutDemandasInput, SecretariaUncheckedCreateWithoutDemandasInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutDemandasInput
    connect?: SecretariaWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumOrigemDemandaFieldUpdateOperationsInput = {
    set?: $Enums.OrigemDemanda
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VeiculoUpdateOneWithoutDemandasNestedInput = {
    create?: XOR<VeiculoCreateWithoutDemandasInput, VeiculoUncheckedCreateWithoutDemandasInput>
    connectOrCreate?: VeiculoCreateOrConnectWithoutDemandasInput
    upsert?: VeiculoUpsertWithoutDemandasInput
    disconnect?: VeiculoWhereInput | boolean
    delete?: VeiculoWhereInput | boolean
    connect?: VeiculoWhereUniqueInput
    update?: XOR<XOR<VeiculoUpdateToOneWithWhereWithoutDemandasInput, VeiculoUpdateWithoutDemandasInput>, VeiculoUncheckedUpdateWithoutDemandasInput>
  }

  export type MotoristaUpdateOneWithoutDemandasNestedInput = {
    create?: XOR<MotoristaCreateWithoutDemandasInput, MotoristaUncheckedCreateWithoutDemandasInput>
    connectOrCreate?: MotoristaCreateOrConnectWithoutDemandasInput
    upsert?: MotoristaUpsertWithoutDemandasInput
    disconnect?: MotoristaWhereInput | boolean
    delete?: MotoristaWhereInput | boolean
    connect?: MotoristaWhereUniqueInput
    update?: XOR<XOR<MotoristaUpdateToOneWithWhereWithoutDemandasInput, MotoristaUpdateWithoutDemandasInput>, MotoristaUncheckedUpdateWithoutDemandasInput>
  }

  export type SecretariaUpdateOneWithoutDemandasNestedInput = {
    create?: XOR<SecretariaCreateWithoutDemandasInput, SecretariaUncheckedCreateWithoutDemandasInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutDemandasInput
    upsert?: SecretariaUpsertWithoutDemandasInput
    disconnect?: SecretariaWhereInput | boolean
    delete?: SecretariaWhereInput | boolean
    connect?: SecretariaWhereUniqueInput
    update?: XOR<XOR<SecretariaUpdateToOneWithWhereWithoutDemandasInput, SecretariaUpdateWithoutDemandasInput>, SecretariaUncheckedUpdateWithoutDemandasInput>
  }

  export type SecretariaCreateNestedOneWithoutVeiculosInput = {
    create?: XOR<SecretariaCreateWithoutVeiculosInput, SecretariaUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutVeiculosInput
    connect?: SecretariaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVeiculosInput = {
    create?: XOR<UserCreateWithoutVeiculosInput, UserUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVeiculosInput
    connect?: UserWhereUniqueInput
  }

  export type VeiculoModeloCreateNestedOneWithoutVeiculosInput = {
    create?: XOR<VeiculoModeloCreateWithoutVeiculosInput, VeiculoModeloUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: VeiculoModeloCreateOrConnectWithoutVeiculosInput
    connect?: VeiculoModeloWhereUniqueInput
  }

  export type DemandaCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<DemandaCreateWithoutVeiculoInput, DemandaUncheckedCreateWithoutVeiculoInput> | DemandaCreateWithoutVeiculoInput[] | DemandaUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: DemandaCreateOrConnectWithoutVeiculoInput | DemandaCreateOrConnectWithoutVeiculoInput[]
    createMany?: DemandaCreateManyVeiculoInputEnvelope
    connect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
  }

  export type DemandaUncheckedCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<DemandaCreateWithoutVeiculoInput, DemandaUncheckedCreateWithoutVeiculoInput> | DemandaCreateWithoutVeiculoInput[] | DemandaUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: DemandaCreateOrConnectWithoutVeiculoInput | DemandaCreateOrConnectWithoutVeiculoInput[]
    createMany?: DemandaCreateManyVeiculoInputEnvelope
    connect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
  }

  export type SecretariaUpdateOneRequiredWithoutVeiculosNestedInput = {
    create?: XOR<SecretariaCreateWithoutVeiculosInput, SecretariaUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutVeiculosInput
    upsert?: SecretariaUpsertWithoutVeiculosInput
    connect?: SecretariaWhereUniqueInput
    update?: XOR<XOR<SecretariaUpdateToOneWithWhereWithoutVeiculosInput, SecretariaUpdateWithoutVeiculosInput>, SecretariaUncheckedUpdateWithoutVeiculosInput>
  }

  export type UserUpdateOneRequiredWithoutVeiculosNestedInput = {
    create?: XOR<UserCreateWithoutVeiculosInput, UserUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVeiculosInput
    upsert?: UserUpsertWithoutVeiculosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVeiculosInput, UserUpdateWithoutVeiculosInput>, UserUncheckedUpdateWithoutVeiculosInput>
  }

  export type VeiculoModeloUpdateOneWithoutVeiculosNestedInput = {
    create?: XOR<VeiculoModeloCreateWithoutVeiculosInput, VeiculoModeloUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: VeiculoModeloCreateOrConnectWithoutVeiculosInput
    upsert?: VeiculoModeloUpsertWithoutVeiculosInput
    disconnect?: VeiculoModeloWhereInput | boolean
    delete?: VeiculoModeloWhereInput | boolean
    connect?: VeiculoModeloWhereUniqueInput
    update?: XOR<XOR<VeiculoModeloUpdateToOneWithWhereWithoutVeiculosInput, VeiculoModeloUpdateWithoutVeiculosInput>, VeiculoModeloUncheckedUpdateWithoutVeiculosInput>
  }

  export type DemandaUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<DemandaCreateWithoutVeiculoInput, DemandaUncheckedCreateWithoutVeiculoInput> | DemandaCreateWithoutVeiculoInput[] | DemandaUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: DemandaCreateOrConnectWithoutVeiculoInput | DemandaCreateOrConnectWithoutVeiculoInput[]
    upsert?: DemandaUpsertWithWhereUniqueWithoutVeiculoInput | DemandaUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: DemandaCreateManyVeiculoInputEnvelope
    set?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    disconnect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    delete?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    connect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    update?: DemandaUpdateWithWhereUniqueWithoutVeiculoInput | DemandaUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: DemandaUpdateManyWithWhereWithoutVeiculoInput | DemandaUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: DemandaScalarWhereInput | DemandaScalarWhereInput[]
  }

  export type DemandaUncheckedUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<DemandaCreateWithoutVeiculoInput, DemandaUncheckedCreateWithoutVeiculoInput> | DemandaCreateWithoutVeiculoInput[] | DemandaUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: DemandaCreateOrConnectWithoutVeiculoInput | DemandaCreateOrConnectWithoutVeiculoInput[]
    upsert?: DemandaUpsertWithWhereUniqueWithoutVeiculoInput | DemandaUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: DemandaCreateManyVeiculoInputEnvelope
    set?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    disconnect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    delete?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    connect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    update?: DemandaUpdateWithWhereUniqueWithoutVeiculoInput | DemandaUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: DemandaUpdateManyWithWhereWithoutVeiculoInput | DemandaUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: DemandaScalarWhereInput | DemandaScalarWhereInput[]
  }

  export type VeiculoCreateNestedManyWithoutModeloInput = {
    create?: XOR<VeiculoCreateWithoutModeloInput, VeiculoUncheckedCreateWithoutModeloInput> | VeiculoCreateWithoutModeloInput[] | VeiculoUncheckedCreateWithoutModeloInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutModeloInput | VeiculoCreateOrConnectWithoutModeloInput[]
    createMany?: VeiculoCreateManyModeloInputEnvelope
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
  }

  export type VeiculoUncheckedCreateNestedManyWithoutModeloInput = {
    create?: XOR<VeiculoCreateWithoutModeloInput, VeiculoUncheckedCreateWithoutModeloInput> | VeiculoCreateWithoutModeloInput[] | VeiculoUncheckedCreateWithoutModeloInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutModeloInput | VeiculoCreateOrConnectWithoutModeloInput[]
    createMany?: VeiculoCreateManyModeloInputEnvelope
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
  }

  export type VeiculoUpdateManyWithoutModeloNestedInput = {
    create?: XOR<VeiculoCreateWithoutModeloInput, VeiculoUncheckedCreateWithoutModeloInput> | VeiculoCreateWithoutModeloInput[] | VeiculoUncheckedCreateWithoutModeloInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutModeloInput | VeiculoCreateOrConnectWithoutModeloInput[]
    upsert?: VeiculoUpsertWithWhereUniqueWithoutModeloInput | VeiculoUpsertWithWhereUniqueWithoutModeloInput[]
    createMany?: VeiculoCreateManyModeloInputEnvelope
    set?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    disconnect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    delete?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    update?: VeiculoUpdateWithWhereUniqueWithoutModeloInput | VeiculoUpdateWithWhereUniqueWithoutModeloInput[]
    updateMany?: VeiculoUpdateManyWithWhereWithoutModeloInput | VeiculoUpdateManyWithWhereWithoutModeloInput[]
    deleteMany?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
  }

  export type VeiculoUncheckedUpdateManyWithoutModeloNestedInput = {
    create?: XOR<VeiculoCreateWithoutModeloInput, VeiculoUncheckedCreateWithoutModeloInput> | VeiculoCreateWithoutModeloInput[] | VeiculoUncheckedCreateWithoutModeloInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutModeloInput | VeiculoCreateOrConnectWithoutModeloInput[]
    upsert?: VeiculoUpsertWithWhereUniqueWithoutModeloInput | VeiculoUpsertWithWhereUniqueWithoutModeloInput[]
    createMany?: VeiculoCreateManyModeloInputEnvelope
    set?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    disconnect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    delete?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    update?: VeiculoUpdateWithWhereUniqueWithoutModeloInput | VeiculoUpdateWithWhereUniqueWithoutModeloInput[]
    updateMany?: VeiculoUpdateManyWithWhereWithoutModeloInput | VeiculoUpdateManyWithWhereWithoutModeloInput[]
    deleteMany?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
  }

  export type DemandaCreateNestedManyWithoutMotoristaInput = {
    create?: XOR<DemandaCreateWithoutMotoristaInput, DemandaUncheckedCreateWithoutMotoristaInput> | DemandaCreateWithoutMotoristaInput[] | DemandaUncheckedCreateWithoutMotoristaInput[]
    connectOrCreate?: DemandaCreateOrConnectWithoutMotoristaInput | DemandaCreateOrConnectWithoutMotoristaInput[]
    createMany?: DemandaCreateManyMotoristaInputEnvelope
    connect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
  }

  export type SecretariaCreateNestedOneWithoutMotoristaInput = {
    create?: XOR<SecretariaCreateWithoutMotoristaInput, SecretariaUncheckedCreateWithoutMotoristaInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutMotoristaInput
    connect?: SecretariaWhereUniqueInput
  }

  export type DemandaUncheckedCreateNestedManyWithoutMotoristaInput = {
    create?: XOR<DemandaCreateWithoutMotoristaInput, DemandaUncheckedCreateWithoutMotoristaInput> | DemandaCreateWithoutMotoristaInput[] | DemandaUncheckedCreateWithoutMotoristaInput[]
    connectOrCreate?: DemandaCreateOrConnectWithoutMotoristaInput | DemandaCreateOrConnectWithoutMotoristaInput[]
    createMany?: DemandaCreateManyMotoristaInputEnvelope
    connect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
  }

  export type DemandaUpdateManyWithoutMotoristaNestedInput = {
    create?: XOR<DemandaCreateWithoutMotoristaInput, DemandaUncheckedCreateWithoutMotoristaInput> | DemandaCreateWithoutMotoristaInput[] | DemandaUncheckedCreateWithoutMotoristaInput[]
    connectOrCreate?: DemandaCreateOrConnectWithoutMotoristaInput | DemandaCreateOrConnectWithoutMotoristaInput[]
    upsert?: DemandaUpsertWithWhereUniqueWithoutMotoristaInput | DemandaUpsertWithWhereUniqueWithoutMotoristaInput[]
    createMany?: DemandaCreateManyMotoristaInputEnvelope
    set?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    disconnect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    delete?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    connect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    update?: DemandaUpdateWithWhereUniqueWithoutMotoristaInput | DemandaUpdateWithWhereUniqueWithoutMotoristaInput[]
    updateMany?: DemandaUpdateManyWithWhereWithoutMotoristaInput | DemandaUpdateManyWithWhereWithoutMotoristaInput[]
    deleteMany?: DemandaScalarWhereInput | DemandaScalarWhereInput[]
  }

  export type SecretariaUpdateOneRequiredWithoutMotoristaNestedInput = {
    create?: XOR<SecretariaCreateWithoutMotoristaInput, SecretariaUncheckedCreateWithoutMotoristaInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutMotoristaInput
    upsert?: SecretariaUpsertWithoutMotoristaInput
    connect?: SecretariaWhereUniqueInput
    update?: XOR<XOR<SecretariaUpdateToOneWithWhereWithoutMotoristaInput, SecretariaUpdateWithoutMotoristaInput>, SecretariaUncheckedUpdateWithoutMotoristaInput>
  }

  export type DemandaUncheckedUpdateManyWithoutMotoristaNestedInput = {
    create?: XOR<DemandaCreateWithoutMotoristaInput, DemandaUncheckedCreateWithoutMotoristaInput> | DemandaCreateWithoutMotoristaInput[] | DemandaUncheckedCreateWithoutMotoristaInput[]
    connectOrCreate?: DemandaCreateOrConnectWithoutMotoristaInput | DemandaCreateOrConnectWithoutMotoristaInput[]
    upsert?: DemandaUpsertWithWhereUniqueWithoutMotoristaInput | DemandaUpsertWithWhereUniqueWithoutMotoristaInput[]
    createMany?: DemandaCreateManyMotoristaInputEnvelope
    set?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    disconnect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    delete?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    connect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    update?: DemandaUpdateWithWhereUniqueWithoutMotoristaInput | DemandaUpdateWithWhereUniqueWithoutMotoristaInput[]
    updateMany?: DemandaUpdateManyWithWhereWithoutMotoristaInput | DemandaUpdateManyWithWhereWithoutMotoristaInput[]
    deleteMany?: DemandaScalarWhereInput | DemandaScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutAcessoInput = {
    create?: XOR<UserCreateWithoutAcessoInput, UserUncheckedCreateWithoutAcessoInput> | UserCreateWithoutAcessoInput[] | UserUncheckedCreateWithoutAcessoInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAcessoInput | UserCreateOrConnectWithoutAcessoInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAcessoInput = {
    create?: XOR<UserCreateWithoutAcessoInput, UserUncheckedCreateWithoutAcessoInput> | UserCreateWithoutAcessoInput[] | UserUncheckedCreateWithoutAcessoInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAcessoInput | UserCreateOrConnectWithoutAcessoInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutAcessoNestedInput = {
    create?: XOR<UserCreateWithoutAcessoInput, UserUncheckedCreateWithoutAcessoInput> | UserCreateWithoutAcessoInput[] | UserUncheckedCreateWithoutAcessoInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAcessoInput | UserCreateOrConnectWithoutAcessoInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAcessoInput | UserUpsertWithWhereUniqueWithoutAcessoInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAcessoInput | UserUpdateWithWhereUniqueWithoutAcessoInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAcessoInput | UserUpdateManyWithWhereWithoutAcessoInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAcessoNestedInput = {
    create?: XOR<UserCreateWithoutAcessoInput, UserUncheckedCreateWithoutAcessoInput> | UserCreateWithoutAcessoInput[] | UserUncheckedCreateWithoutAcessoInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAcessoInput | UserCreateOrConnectWithoutAcessoInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAcessoInput | UserUpsertWithWhereUniqueWithoutAcessoInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAcessoInput | UserUpdateWithWhereUniqueWithoutAcessoInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAcessoInput | UserUpdateManyWithWhereWithoutAcessoInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DemandaCreateNestedManyWithoutSecretariaInput = {
    create?: XOR<DemandaCreateWithoutSecretariaInput, DemandaUncheckedCreateWithoutSecretariaInput> | DemandaCreateWithoutSecretariaInput[] | DemandaUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: DemandaCreateOrConnectWithoutSecretariaInput | DemandaCreateOrConnectWithoutSecretariaInput[]
    createMany?: DemandaCreateManySecretariaInputEnvelope
    connect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
  }

  export type UserSecretariaCreateNestedManyWithoutSecretariaInput = {
    create?: XOR<UserSecretariaCreateWithoutSecretariaInput, UserSecretariaUncheckedCreateWithoutSecretariaInput> | UserSecretariaCreateWithoutSecretariaInput[] | UserSecretariaUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: UserSecretariaCreateOrConnectWithoutSecretariaInput | UserSecretariaCreateOrConnectWithoutSecretariaInput[]
    createMany?: UserSecretariaCreateManySecretariaInputEnvelope
    connect?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
  }

  export type VeiculoCreateNestedManyWithoutSecretariaInput = {
    create?: XOR<VeiculoCreateWithoutSecretariaInput, VeiculoUncheckedCreateWithoutSecretariaInput> | VeiculoCreateWithoutSecretariaInput[] | VeiculoUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutSecretariaInput | VeiculoCreateOrConnectWithoutSecretariaInput[]
    createMany?: VeiculoCreateManySecretariaInputEnvelope
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
  }

  export type MotoristaCreateNestedManyWithoutSecretariaInput = {
    create?: XOR<MotoristaCreateWithoutSecretariaInput, MotoristaUncheckedCreateWithoutSecretariaInput> | MotoristaCreateWithoutSecretariaInput[] | MotoristaUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: MotoristaCreateOrConnectWithoutSecretariaInput | MotoristaCreateOrConnectWithoutSecretariaInput[]
    createMany?: MotoristaCreateManySecretariaInputEnvelope
    connect?: MotoristaWhereUniqueInput | MotoristaWhereUniqueInput[]
  }

  export type DemandaUncheckedCreateNestedManyWithoutSecretariaInput = {
    create?: XOR<DemandaCreateWithoutSecretariaInput, DemandaUncheckedCreateWithoutSecretariaInput> | DemandaCreateWithoutSecretariaInput[] | DemandaUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: DemandaCreateOrConnectWithoutSecretariaInput | DemandaCreateOrConnectWithoutSecretariaInput[]
    createMany?: DemandaCreateManySecretariaInputEnvelope
    connect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
  }

  export type UserSecretariaUncheckedCreateNestedManyWithoutSecretariaInput = {
    create?: XOR<UserSecretariaCreateWithoutSecretariaInput, UserSecretariaUncheckedCreateWithoutSecretariaInput> | UserSecretariaCreateWithoutSecretariaInput[] | UserSecretariaUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: UserSecretariaCreateOrConnectWithoutSecretariaInput | UserSecretariaCreateOrConnectWithoutSecretariaInput[]
    createMany?: UserSecretariaCreateManySecretariaInputEnvelope
    connect?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
  }

  export type VeiculoUncheckedCreateNestedManyWithoutSecretariaInput = {
    create?: XOR<VeiculoCreateWithoutSecretariaInput, VeiculoUncheckedCreateWithoutSecretariaInput> | VeiculoCreateWithoutSecretariaInput[] | VeiculoUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutSecretariaInput | VeiculoCreateOrConnectWithoutSecretariaInput[]
    createMany?: VeiculoCreateManySecretariaInputEnvelope
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
  }

  export type MotoristaUncheckedCreateNestedManyWithoutSecretariaInput = {
    create?: XOR<MotoristaCreateWithoutSecretariaInput, MotoristaUncheckedCreateWithoutSecretariaInput> | MotoristaCreateWithoutSecretariaInput[] | MotoristaUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: MotoristaCreateOrConnectWithoutSecretariaInput | MotoristaCreateOrConnectWithoutSecretariaInput[]
    createMany?: MotoristaCreateManySecretariaInputEnvelope
    connect?: MotoristaWhereUniqueInput | MotoristaWhereUniqueInput[]
  }

  export type DemandaUpdateManyWithoutSecretariaNestedInput = {
    create?: XOR<DemandaCreateWithoutSecretariaInput, DemandaUncheckedCreateWithoutSecretariaInput> | DemandaCreateWithoutSecretariaInput[] | DemandaUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: DemandaCreateOrConnectWithoutSecretariaInput | DemandaCreateOrConnectWithoutSecretariaInput[]
    upsert?: DemandaUpsertWithWhereUniqueWithoutSecretariaInput | DemandaUpsertWithWhereUniqueWithoutSecretariaInput[]
    createMany?: DemandaCreateManySecretariaInputEnvelope
    set?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    disconnect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    delete?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    connect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    update?: DemandaUpdateWithWhereUniqueWithoutSecretariaInput | DemandaUpdateWithWhereUniqueWithoutSecretariaInput[]
    updateMany?: DemandaUpdateManyWithWhereWithoutSecretariaInput | DemandaUpdateManyWithWhereWithoutSecretariaInput[]
    deleteMany?: DemandaScalarWhereInput | DemandaScalarWhereInput[]
  }

  export type UserSecretariaUpdateManyWithoutSecretariaNestedInput = {
    create?: XOR<UserSecretariaCreateWithoutSecretariaInput, UserSecretariaUncheckedCreateWithoutSecretariaInput> | UserSecretariaCreateWithoutSecretariaInput[] | UserSecretariaUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: UserSecretariaCreateOrConnectWithoutSecretariaInput | UserSecretariaCreateOrConnectWithoutSecretariaInput[]
    upsert?: UserSecretariaUpsertWithWhereUniqueWithoutSecretariaInput | UserSecretariaUpsertWithWhereUniqueWithoutSecretariaInput[]
    createMany?: UserSecretariaCreateManySecretariaInputEnvelope
    set?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
    disconnect?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
    delete?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
    connect?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
    update?: UserSecretariaUpdateWithWhereUniqueWithoutSecretariaInput | UserSecretariaUpdateWithWhereUniqueWithoutSecretariaInput[]
    updateMany?: UserSecretariaUpdateManyWithWhereWithoutSecretariaInput | UserSecretariaUpdateManyWithWhereWithoutSecretariaInput[]
    deleteMany?: UserSecretariaScalarWhereInput | UserSecretariaScalarWhereInput[]
  }

  export type VeiculoUpdateManyWithoutSecretariaNestedInput = {
    create?: XOR<VeiculoCreateWithoutSecretariaInput, VeiculoUncheckedCreateWithoutSecretariaInput> | VeiculoCreateWithoutSecretariaInput[] | VeiculoUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutSecretariaInput | VeiculoCreateOrConnectWithoutSecretariaInput[]
    upsert?: VeiculoUpsertWithWhereUniqueWithoutSecretariaInput | VeiculoUpsertWithWhereUniqueWithoutSecretariaInput[]
    createMany?: VeiculoCreateManySecretariaInputEnvelope
    set?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    disconnect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    delete?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    update?: VeiculoUpdateWithWhereUniqueWithoutSecretariaInput | VeiculoUpdateWithWhereUniqueWithoutSecretariaInput[]
    updateMany?: VeiculoUpdateManyWithWhereWithoutSecretariaInput | VeiculoUpdateManyWithWhereWithoutSecretariaInput[]
    deleteMany?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
  }

  export type MotoristaUpdateManyWithoutSecretariaNestedInput = {
    create?: XOR<MotoristaCreateWithoutSecretariaInput, MotoristaUncheckedCreateWithoutSecretariaInput> | MotoristaCreateWithoutSecretariaInput[] | MotoristaUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: MotoristaCreateOrConnectWithoutSecretariaInput | MotoristaCreateOrConnectWithoutSecretariaInput[]
    upsert?: MotoristaUpsertWithWhereUniqueWithoutSecretariaInput | MotoristaUpsertWithWhereUniqueWithoutSecretariaInput[]
    createMany?: MotoristaCreateManySecretariaInputEnvelope
    set?: MotoristaWhereUniqueInput | MotoristaWhereUniqueInput[]
    disconnect?: MotoristaWhereUniqueInput | MotoristaWhereUniqueInput[]
    delete?: MotoristaWhereUniqueInput | MotoristaWhereUniqueInput[]
    connect?: MotoristaWhereUniqueInput | MotoristaWhereUniqueInput[]
    update?: MotoristaUpdateWithWhereUniqueWithoutSecretariaInput | MotoristaUpdateWithWhereUniqueWithoutSecretariaInput[]
    updateMany?: MotoristaUpdateManyWithWhereWithoutSecretariaInput | MotoristaUpdateManyWithWhereWithoutSecretariaInput[]
    deleteMany?: MotoristaScalarWhereInput | MotoristaScalarWhereInput[]
  }

  export type DemandaUncheckedUpdateManyWithoutSecretariaNestedInput = {
    create?: XOR<DemandaCreateWithoutSecretariaInput, DemandaUncheckedCreateWithoutSecretariaInput> | DemandaCreateWithoutSecretariaInput[] | DemandaUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: DemandaCreateOrConnectWithoutSecretariaInput | DemandaCreateOrConnectWithoutSecretariaInput[]
    upsert?: DemandaUpsertWithWhereUniqueWithoutSecretariaInput | DemandaUpsertWithWhereUniqueWithoutSecretariaInput[]
    createMany?: DemandaCreateManySecretariaInputEnvelope
    set?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    disconnect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    delete?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    connect?: DemandaWhereUniqueInput | DemandaWhereUniqueInput[]
    update?: DemandaUpdateWithWhereUniqueWithoutSecretariaInput | DemandaUpdateWithWhereUniqueWithoutSecretariaInput[]
    updateMany?: DemandaUpdateManyWithWhereWithoutSecretariaInput | DemandaUpdateManyWithWhereWithoutSecretariaInput[]
    deleteMany?: DemandaScalarWhereInput | DemandaScalarWhereInput[]
  }

  export type UserSecretariaUncheckedUpdateManyWithoutSecretariaNestedInput = {
    create?: XOR<UserSecretariaCreateWithoutSecretariaInput, UserSecretariaUncheckedCreateWithoutSecretariaInput> | UserSecretariaCreateWithoutSecretariaInput[] | UserSecretariaUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: UserSecretariaCreateOrConnectWithoutSecretariaInput | UserSecretariaCreateOrConnectWithoutSecretariaInput[]
    upsert?: UserSecretariaUpsertWithWhereUniqueWithoutSecretariaInput | UserSecretariaUpsertWithWhereUniqueWithoutSecretariaInput[]
    createMany?: UserSecretariaCreateManySecretariaInputEnvelope
    set?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
    disconnect?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
    delete?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
    connect?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
    update?: UserSecretariaUpdateWithWhereUniqueWithoutSecretariaInput | UserSecretariaUpdateWithWhereUniqueWithoutSecretariaInput[]
    updateMany?: UserSecretariaUpdateManyWithWhereWithoutSecretariaInput | UserSecretariaUpdateManyWithWhereWithoutSecretariaInput[]
    deleteMany?: UserSecretariaScalarWhereInput | UserSecretariaScalarWhereInput[]
  }

  export type VeiculoUncheckedUpdateManyWithoutSecretariaNestedInput = {
    create?: XOR<VeiculoCreateWithoutSecretariaInput, VeiculoUncheckedCreateWithoutSecretariaInput> | VeiculoCreateWithoutSecretariaInput[] | VeiculoUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutSecretariaInput | VeiculoCreateOrConnectWithoutSecretariaInput[]
    upsert?: VeiculoUpsertWithWhereUniqueWithoutSecretariaInput | VeiculoUpsertWithWhereUniqueWithoutSecretariaInput[]
    createMany?: VeiculoCreateManySecretariaInputEnvelope
    set?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    disconnect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    delete?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    update?: VeiculoUpdateWithWhereUniqueWithoutSecretariaInput | VeiculoUpdateWithWhereUniqueWithoutSecretariaInput[]
    updateMany?: VeiculoUpdateManyWithWhereWithoutSecretariaInput | VeiculoUpdateManyWithWhereWithoutSecretariaInput[]
    deleteMany?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
  }

  export type MotoristaUncheckedUpdateManyWithoutSecretariaNestedInput = {
    create?: XOR<MotoristaCreateWithoutSecretariaInput, MotoristaUncheckedCreateWithoutSecretariaInput> | MotoristaCreateWithoutSecretariaInput[] | MotoristaUncheckedCreateWithoutSecretariaInput[]
    connectOrCreate?: MotoristaCreateOrConnectWithoutSecretariaInput | MotoristaCreateOrConnectWithoutSecretariaInput[]
    upsert?: MotoristaUpsertWithWhereUniqueWithoutSecretariaInput | MotoristaUpsertWithWhereUniqueWithoutSecretariaInput[]
    createMany?: MotoristaCreateManySecretariaInputEnvelope
    set?: MotoristaWhereUniqueInput | MotoristaWhereUniqueInput[]
    disconnect?: MotoristaWhereUniqueInput | MotoristaWhereUniqueInput[]
    delete?: MotoristaWhereUniqueInput | MotoristaWhereUniqueInput[]
    connect?: MotoristaWhereUniqueInput | MotoristaWhereUniqueInput[]
    update?: MotoristaUpdateWithWhereUniqueWithoutSecretariaInput | MotoristaUpdateWithWhereUniqueWithoutSecretariaInput[]
    updateMany?: MotoristaUpdateManyWithWhereWithoutSecretariaInput | MotoristaUpdateManyWithWhereWithoutSecretariaInput[]
    deleteMany?: MotoristaScalarWhereInput | MotoristaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSecretariasInput = {
    create?: XOR<UserCreateWithoutSecretariasInput, UserUncheckedCreateWithoutSecretariasInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecretariasInput
    connect?: UserWhereUniqueInput
  }

  export type SecretariaCreateNestedOneWithoutUsersInput = {
    create?: XOR<SecretariaCreateWithoutUsersInput, SecretariaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutUsersInput
    connect?: SecretariaWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSecretariasNestedInput = {
    create?: XOR<UserCreateWithoutSecretariasInput, UserUncheckedCreateWithoutSecretariasInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecretariasInput
    upsert?: UserUpsertWithoutSecretariasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSecretariasInput, UserUpdateWithoutSecretariasInput>, UserUncheckedUpdateWithoutSecretariasInput>
  }

  export type SecretariaUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SecretariaCreateWithoutUsersInput, SecretariaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutUsersInput
    upsert?: SecretariaUpsertWithoutUsersInput
    connect?: SecretariaWhereUniqueInput
    update?: XOR<XOR<SecretariaUpdateToOneWithWhereWithoutUsersInput, SecretariaUpdateWithoutUsersInput>, SecretariaUncheckedUpdateWithoutUsersInput>
  }

  export type AcessoCreateNestedManyWithoutUserInput = {
    create?: XOR<AcessoCreateWithoutUserInput, AcessoUncheckedCreateWithoutUserInput> | AcessoCreateWithoutUserInput[] | AcessoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AcessoCreateOrConnectWithoutUserInput | AcessoCreateOrConnectWithoutUserInput[]
    connect?: AcessoWhereUniqueInput | AcessoWhereUniqueInput[]
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

  export type VeiculoCreateNestedManyWithoutUserInput = {
    create?: XOR<VeiculoCreateWithoutUserInput, VeiculoUncheckedCreateWithoutUserInput> | VeiculoCreateWithoutUserInput[] | VeiculoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutUserInput | VeiculoCreateOrConnectWithoutUserInput[]
    createMany?: VeiculoCreateManyUserInputEnvelope
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
  }

  export type UserSecretariaCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSecretariaCreateWithoutUserInput, UserSecretariaUncheckedCreateWithoutUserInput> | UserSecretariaCreateWithoutUserInput[] | UserSecretariaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSecretariaCreateOrConnectWithoutUserInput | UserSecretariaCreateOrConnectWithoutUserInput[]
    createMany?: UserSecretariaCreateManyUserInputEnvelope
    connect?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
  }

  export type AcessoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AcessoCreateWithoutUserInput, AcessoUncheckedCreateWithoutUserInput> | AcessoCreateWithoutUserInput[] | AcessoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AcessoCreateOrConnectWithoutUserInput | AcessoCreateOrConnectWithoutUserInput[]
    connect?: AcessoWhereUniqueInput | AcessoWhereUniqueInput[]
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

  export type VeiculoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VeiculoCreateWithoutUserInput, VeiculoUncheckedCreateWithoutUserInput> | VeiculoCreateWithoutUserInput[] | VeiculoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutUserInput | VeiculoCreateOrConnectWithoutUserInput[]
    createMany?: VeiculoCreateManyUserInputEnvelope
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
  }

  export type UserSecretariaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSecretariaCreateWithoutUserInput, UserSecretariaUncheckedCreateWithoutUserInput> | UserSecretariaCreateWithoutUserInput[] | UserSecretariaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSecretariaCreateOrConnectWithoutUserInput | UserSecretariaCreateOrConnectWithoutUserInput[]
    createMany?: UserSecretariaCreateManyUserInputEnvelope
    connect?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AcessoUpdateManyWithoutUserNestedInput = {
    create?: XOR<AcessoCreateWithoutUserInput, AcessoUncheckedCreateWithoutUserInput> | AcessoCreateWithoutUserInput[] | AcessoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AcessoCreateOrConnectWithoutUserInput | AcessoCreateOrConnectWithoutUserInput[]
    upsert?: AcessoUpsertWithWhereUniqueWithoutUserInput | AcessoUpsertWithWhereUniqueWithoutUserInput[]
    set?: AcessoWhereUniqueInput | AcessoWhereUniqueInput[]
    disconnect?: AcessoWhereUniqueInput | AcessoWhereUniqueInput[]
    delete?: AcessoWhereUniqueInput | AcessoWhereUniqueInput[]
    connect?: AcessoWhereUniqueInput | AcessoWhereUniqueInput[]
    update?: AcessoUpdateWithWhereUniqueWithoutUserInput | AcessoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AcessoUpdateManyWithWhereWithoutUserInput | AcessoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AcessoScalarWhereInput | AcessoScalarWhereInput[]
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

  export type VeiculoUpdateManyWithoutUserNestedInput = {
    create?: XOR<VeiculoCreateWithoutUserInput, VeiculoUncheckedCreateWithoutUserInput> | VeiculoCreateWithoutUserInput[] | VeiculoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutUserInput | VeiculoCreateOrConnectWithoutUserInput[]
    upsert?: VeiculoUpsertWithWhereUniqueWithoutUserInput | VeiculoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VeiculoCreateManyUserInputEnvelope
    set?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    disconnect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    delete?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    update?: VeiculoUpdateWithWhereUniqueWithoutUserInput | VeiculoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VeiculoUpdateManyWithWhereWithoutUserInput | VeiculoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
  }

  export type UserSecretariaUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSecretariaCreateWithoutUserInput, UserSecretariaUncheckedCreateWithoutUserInput> | UserSecretariaCreateWithoutUserInput[] | UserSecretariaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSecretariaCreateOrConnectWithoutUserInput | UserSecretariaCreateOrConnectWithoutUserInput[]
    upsert?: UserSecretariaUpsertWithWhereUniqueWithoutUserInput | UserSecretariaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSecretariaCreateManyUserInputEnvelope
    set?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
    disconnect?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
    delete?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
    connect?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
    update?: UserSecretariaUpdateWithWhereUniqueWithoutUserInput | UserSecretariaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSecretariaUpdateManyWithWhereWithoutUserInput | UserSecretariaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSecretariaScalarWhereInput | UserSecretariaScalarWhereInput[]
  }

  export type AcessoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AcessoCreateWithoutUserInput, AcessoUncheckedCreateWithoutUserInput> | AcessoCreateWithoutUserInput[] | AcessoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AcessoCreateOrConnectWithoutUserInput | AcessoCreateOrConnectWithoutUserInput[]
    upsert?: AcessoUpsertWithWhereUniqueWithoutUserInput | AcessoUpsertWithWhereUniqueWithoutUserInput[]
    set?: AcessoWhereUniqueInput | AcessoWhereUniqueInput[]
    disconnect?: AcessoWhereUniqueInput | AcessoWhereUniqueInput[]
    delete?: AcessoWhereUniqueInput | AcessoWhereUniqueInput[]
    connect?: AcessoWhereUniqueInput | AcessoWhereUniqueInput[]
    update?: AcessoUpdateWithWhereUniqueWithoutUserInput | AcessoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AcessoUpdateManyWithWhereWithoutUserInput | AcessoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AcessoScalarWhereInput | AcessoScalarWhereInput[]
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

  export type VeiculoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VeiculoCreateWithoutUserInput, VeiculoUncheckedCreateWithoutUserInput> | VeiculoCreateWithoutUserInput[] | VeiculoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutUserInput | VeiculoCreateOrConnectWithoutUserInput[]
    upsert?: VeiculoUpsertWithWhereUniqueWithoutUserInput | VeiculoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VeiculoCreateManyUserInputEnvelope
    set?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    disconnect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    delete?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    update?: VeiculoUpdateWithWhereUniqueWithoutUserInput | VeiculoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VeiculoUpdateManyWithWhereWithoutUserInput | VeiculoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
  }

  export type UserSecretariaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSecretariaCreateWithoutUserInput, UserSecretariaUncheckedCreateWithoutUserInput> | UserSecretariaCreateWithoutUserInput[] | UserSecretariaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSecretariaCreateOrConnectWithoutUserInput | UserSecretariaCreateOrConnectWithoutUserInput[]
    upsert?: UserSecretariaUpsertWithWhereUniqueWithoutUserInput | UserSecretariaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSecretariaCreateManyUserInputEnvelope
    set?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
    disconnect?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
    delete?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
    connect?: UserSecretariaWhereUniqueInput | UserSecretariaWhereUniqueInput[]
    update?: UserSecretariaUpdateWithWhereUniqueWithoutUserInput | UserSecretariaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSecretariaUpdateManyWithWhereWithoutUserInput | UserSecretariaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSecretariaScalarWhereInput | UserSecretariaScalarWhereInput[]
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

  export type NestedEnumOrigemDemandaFilter<$PrismaModel = never> = {
    equals?: $Enums.OrigemDemanda | EnumOrigemDemandaFieldRefInput<$PrismaModel>
    in?: $Enums.OrigemDemanda[] | ListEnumOrigemDemandaFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrigemDemanda[] | ListEnumOrigemDemandaFieldRefInput<$PrismaModel>
    not?: NestedEnumOrigemDemandaFilter<$PrismaModel> | $Enums.OrigemDemanda
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

  export type NestedEnumOrigemDemandaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrigemDemanda | EnumOrigemDemandaFieldRefInput<$PrismaModel>
    in?: $Enums.OrigemDemanda[] | ListEnumOrigemDemandaFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrigemDemanda[] | ListEnumOrigemDemandaFieldRefInput<$PrismaModel>
    not?: NestedEnumOrigemDemandaWithAggregatesFilter<$PrismaModel> | $Enums.OrigemDemanda
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrigemDemandaFilter<$PrismaModel>
    _max?: NestedEnumOrigemDemandaFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type VeiculoCreateWithoutDemandasInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    secretaria: SecretariaCreateNestedOneWithoutVeiculosInput
    user: UserCreateNestedOneWithoutVeiculosInput
    modelo?: VeiculoModeloCreateNestedOneWithoutVeiculosInput
  }

  export type VeiculoUncheckedCreateWithoutDemandasInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    secretariaId: string
    userId: string
    modeloId?: string | null
  }

  export type VeiculoCreateOrConnectWithoutDemandasInput = {
    where: VeiculoWhereUniqueInput
    create: XOR<VeiculoCreateWithoutDemandasInput, VeiculoUncheckedCreateWithoutDemandasInput>
  }

  export type MotoristaCreateWithoutDemandasInput = {
    id?: string
    nome: string
    contato: string
    secretaria: SecretariaCreateNestedOneWithoutMotoristaInput
  }

  export type MotoristaUncheckedCreateWithoutDemandasInput = {
    id?: string
    nome: string
    contato: string
    secretariaId: string
  }

  export type MotoristaCreateOrConnectWithoutDemandasInput = {
    where: MotoristaWhereUniqueInput
    create: XOR<MotoristaCreateWithoutDemandasInput, MotoristaUncheckedCreateWithoutDemandasInput>
  }

  export type SecretariaCreateWithoutDemandasInput = {
    id?: string
    nome: string
    users?: UserSecretariaCreateNestedManyWithoutSecretariaInput
    veiculos?: VeiculoCreateNestedManyWithoutSecretariaInput
    motorista?: MotoristaCreateNestedManyWithoutSecretariaInput
  }

  export type SecretariaUncheckedCreateWithoutDemandasInput = {
    id?: string
    nome: string
    users?: UserSecretariaUncheckedCreateNestedManyWithoutSecretariaInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutSecretariaInput
    motorista?: MotoristaUncheckedCreateNestedManyWithoutSecretariaInput
  }

  export type SecretariaCreateOrConnectWithoutDemandasInput = {
    where: SecretariaWhereUniqueInput
    create: XOR<SecretariaCreateWithoutDemandasInput, SecretariaUncheckedCreateWithoutDemandasInput>
  }

  export type VeiculoUpsertWithoutDemandasInput = {
    update: XOR<VeiculoUpdateWithoutDemandasInput, VeiculoUncheckedUpdateWithoutDemandasInput>
    create: XOR<VeiculoCreateWithoutDemandasInput, VeiculoUncheckedCreateWithoutDemandasInput>
    where?: VeiculoWhereInput
  }

  export type VeiculoUpdateToOneWithWhereWithoutDemandasInput = {
    where?: VeiculoWhereInput
    data: XOR<VeiculoUpdateWithoutDemandasInput, VeiculoUncheckedUpdateWithoutDemandasInput>
  }

  export type VeiculoUpdateWithoutDemandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    secretaria?: SecretariaUpdateOneRequiredWithoutVeiculosNestedInput
    user?: UserUpdateOneRequiredWithoutVeiculosNestedInput
    modelo?: VeiculoModeloUpdateOneWithoutVeiculosNestedInput
  }

  export type VeiculoUncheckedUpdateWithoutDemandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    secretariaId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    modeloId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MotoristaUpsertWithoutDemandasInput = {
    update: XOR<MotoristaUpdateWithoutDemandasInput, MotoristaUncheckedUpdateWithoutDemandasInput>
    create: XOR<MotoristaCreateWithoutDemandasInput, MotoristaUncheckedCreateWithoutDemandasInput>
    where?: MotoristaWhereInput
  }

  export type MotoristaUpdateToOneWithWhereWithoutDemandasInput = {
    where?: MotoristaWhereInput
    data: XOR<MotoristaUpdateWithoutDemandasInput, MotoristaUncheckedUpdateWithoutDemandasInput>
  }

  export type MotoristaUpdateWithoutDemandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    secretaria?: SecretariaUpdateOneRequiredWithoutMotoristaNestedInput
  }

  export type MotoristaUncheckedUpdateWithoutDemandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    secretariaId?: StringFieldUpdateOperationsInput | string
  }

  export type SecretariaUpsertWithoutDemandasInput = {
    update: XOR<SecretariaUpdateWithoutDemandasInput, SecretariaUncheckedUpdateWithoutDemandasInput>
    create: XOR<SecretariaCreateWithoutDemandasInput, SecretariaUncheckedCreateWithoutDemandasInput>
    where?: SecretariaWhereInput
  }

  export type SecretariaUpdateToOneWithWhereWithoutDemandasInput = {
    where?: SecretariaWhereInput
    data: XOR<SecretariaUpdateWithoutDemandasInput, SecretariaUncheckedUpdateWithoutDemandasInput>
  }

  export type SecretariaUpdateWithoutDemandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    users?: UserSecretariaUpdateManyWithoutSecretariaNestedInput
    veiculos?: VeiculoUpdateManyWithoutSecretariaNestedInput
    motorista?: MotoristaUpdateManyWithoutSecretariaNestedInput
  }

  export type SecretariaUncheckedUpdateWithoutDemandasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    users?: UserSecretariaUncheckedUpdateManyWithoutSecretariaNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutSecretariaNestedInput
    motorista?: MotoristaUncheckedUpdateManyWithoutSecretariaNestedInput
  }

  export type SecretariaCreateWithoutVeiculosInput = {
    id?: string
    nome: string
    demandas?: DemandaCreateNestedManyWithoutSecretariaInput
    users?: UserSecretariaCreateNestedManyWithoutSecretariaInput
    motorista?: MotoristaCreateNestedManyWithoutSecretariaInput
  }

  export type SecretariaUncheckedCreateWithoutVeiculosInput = {
    id?: string
    nome: string
    demandas?: DemandaUncheckedCreateNestedManyWithoutSecretariaInput
    users?: UserSecretariaUncheckedCreateNestedManyWithoutSecretariaInput
    motorista?: MotoristaUncheckedCreateNestedManyWithoutSecretariaInput
  }

  export type SecretariaCreateOrConnectWithoutVeiculosInput = {
    where: SecretariaWhereUniqueInput
    create: XOR<SecretariaCreateWithoutVeiculosInput, SecretariaUncheckedCreateWithoutVeiculosInput>
  }

  export type UserCreateWithoutVeiculosInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    acesso?: AcessoCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    secretarias?: UserSecretariaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVeiculosInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    acesso?: AcessoUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    secretarias?: UserSecretariaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVeiculosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVeiculosInput, UserUncheckedCreateWithoutVeiculosInput>
  }

  export type VeiculoModeloCreateWithoutVeiculosInput = {
    id?: string
    modelo: string
  }

  export type VeiculoModeloUncheckedCreateWithoutVeiculosInput = {
    id?: string
    modelo: string
  }

  export type VeiculoModeloCreateOrConnectWithoutVeiculosInput = {
    where: VeiculoModeloWhereUniqueInput
    create: XOR<VeiculoModeloCreateWithoutVeiculosInput, VeiculoModeloUncheckedCreateWithoutVeiculosInput>
  }

  export type DemandaCreateWithoutVeiculoInput = {
    id?: string
    origemDemanda?: $Enums.OrigemDemanda
    emailSolicitante: string
    demandaDetalhe: string
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda: string
    dataHoraVolta: string
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lotacao?: number | null
    kmRodado?: number | null
    recurso?: string | null
    categoria?: string | null
    motorista?: MotoristaCreateNestedOneWithoutDemandasInput
    secretaria?: SecretariaCreateNestedOneWithoutDemandasInput
  }

  export type DemandaUncheckedCreateWithoutVeiculoInput = {
    id?: string
    origemDemanda?: $Enums.OrigemDemanda
    emailSolicitante: string
    demandaDetalhe: string
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda: string
    dataHoraVolta: string
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lotacao?: number | null
    kmRodado?: number | null
    recurso?: string | null
    categoria?: string | null
    motoristaId?: string | null
    secretariaId?: string | null
  }

  export type DemandaCreateOrConnectWithoutVeiculoInput = {
    where: DemandaWhereUniqueInput
    create: XOR<DemandaCreateWithoutVeiculoInput, DemandaUncheckedCreateWithoutVeiculoInput>
  }

  export type DemandaCreateManyVeiculoInputEnvelope = {
    data: DemandaCreateManyVeiculoInput | DemandaCreateManyVeiculoInput[]
    skipDuplicates?: boolean
  }

  export type SecretariaUpsertWithoutVeiculosInput = {
    update: XOR<SecretariaUpdateWithoutVeiculosInput, SecretariaUncheckedUpdateWithoutVeiculosInput>
    create: XOR<SecretariaCreateWithoutVeiculosInput, SecretariaUncheckedCreateWithoutVeiculosInput>
    where?: SecretariaWhereInput
  }

  export type SecretariaUpdateToOneWithWhereWithoutVeiculosInput = {
    where?: SecretariaWhereInput
    data: XOR<SecretariaUpdateWithoutVeiculosInput, SecretariaUncheckedUpdateWithoutVeiculosInput>
  }

  export type SecretariaUpdateWithoutVeiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    demandas?: DemandaUpdateManyWithoutSecretariaNestedInput
    users?: UserSecretariaUpdateManyWithoutSecretariaNestedInput
    motorista?: MotoristaUpdateManyWithoutSecretariaNestedInput
  }

  export type SecretariaUncheckedUpdateWithoutVeiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    demandas?: DemandaUncheckedUpdateManyWithoutSecretariaNestedInput
    users?: UserSecretariaUncheckedUpdateManyWithoutSecretariaNestedInput
    motorista?: MotoristaUncheckedUpdateManyWithoutSecretariaNestedInput
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
    acesso?: AcessoUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    secretarias?: UserSecretariaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVeiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acesso?: AcessoUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    secretarias?: UserSecretariaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VeiculoModeloUpsertWithoutVeiculosInput = {
    update: XOR<VeiculoModeloUpdateWithoutVeiculosInput, VeiculoModeloUncheckedUpdateWithoutVeiculosInput>
    create: XOR<VeiculoModeloCreateWithoutVeiculosInput, VeiculoModeloUncheckedCreateWithoutVeiculosInput>
    where?: VeiculoModeloWhereInput
  }

  export type VeiculoModeloUpdateToOneWithWhereWithoutVeiculosInput = {
    where?: VeiculoModeloWhereInput
    data: XOR<VeiculoModeloUpdateWithoutVeiculosInput, VeiculoModeloUncheckedUpdateWithoutVeiculosInput>
  }

  export type VeiculoModeloUpdateWithoutVeiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
  }

  export type VeiculoModeloUncheckedUpdateWithoutVeiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
  }

  export type DemandaUpsertWithWhereUniqueWithoutVeiculoInput = {
    where: DemandaWhereUniqueInput
    update: XOR<DemandaUpdateWithoutVeiculoInput, DemandaUncheckedUpdateWithoutVeiculoInput>
    create: XOR<DemandaCreateWithoutVeiculoInput, DemandaUncheckedCreateWithoutVeiculoInput>
  }

  export type DemandaUpdateWithWhereUniqueWithoutVeiculoInput = {
    where: DemandaWhereUniqueInput
    data: XOR<DemandaUpdateWithoutVeiculoInput, DemandaUncheckedUpdateWithoutVeiculoInput>
  }

  export type DemandaUpdateManyWithWhereWithoutVeiculoInput = {
    where: DemandaScalarWhereInput
    data: XOR<DemandaUpdateManyMutationInput, DemandaUncheckedUpdateManyWithoutVeiculoInput>
  }

  export type DemandaScalarWhereInput = {
    AND?: DemandaScalarWhereInput | DemandaScalarWhereInput[]
    OR?: DemandaScalarWhereInput[]
    NOT?: DemandaScalarWhereInput | DemandaScalarWhereInput[]
    id?: StringFilter<"Demanda"> | string
    origemDemanda?: EnumOrigemDemandaFilter<"Demanda"> | $Enums.OrigemDemanda
    emailSolicitante?: StringFilter<"Demanda"> | string
    demandaDetalhe?: StringFilter<"Demanda"> | string
    pessoaSolicitante?: StringFilter<"Demanda"> | string
    secretariaSolicitante?: StringFilter<"Demanda"> | string
    destino?: StringFilter<"Demanda"> | string
    dataHoraIda?: StringFilter<"Demanda"> | string
    dataHoraVolta?: StringFilter<"Demanda"> | string
    origem?: StringFilter<"Demanda"> | string
    contato?: StringFilter<"Demanda"> | string
    statusDemanda?: StringFilter<"Demanda"> | string
    createdAt?: DateTimeFilter<"Demanda"> | Date | string
    updatedAt?: DateTimeFilter<"Demanda"> | Date | string
    lotacao?: IntNullableFilter<"Demanda"> | number | null
    kmRodado?: IntNullableFilter<"Demanda"> | number | null
    recurso?: StringNullableFilter<"Demanda"> | string | null
    categoria?: StringNullableFilter<"Demanda"> | string | null
    veiculoId?: StringNullableFilter<"Demanda"> | string | null
    motoristaId?: StringNullableFilter<"Demanda"> | string | null
    secretariaId?: StringNullableFilter<"Demanda"> | string | null
  }

  export type VeiculoCreateWithoutModeloInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    secretaria: SecretariaCreateNestedOneWithoutVeiculosInput
    user: UserCreateNestedOneWithoutVeiculosInput
    demandas?: DemandaCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUncheckedCreateWithoutModeloInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    secretariaId: string
    userId: string
    demandas?: DemandaUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoCreateOrConnectWithoutModeloInput = {
    where: VeiculoWhereUniqueInput
    create: XOR<VeiculoCreateWithoutModeloInput, VeiculoUncheckedCreateWithoutModeloInput>
  }

  export type VeiculoCreateManyModeloInputEnvelope = {
    data: VeiculoCreateManyModeloInput | VeiculoCreateManyModeloInput[]
    skipDuplicates?: boolean
  }

  export type VeiculoUpsertWithWhereUniqueWithoutModeloInput = {
    where: VeiculoWhereUniqueInput
    update: XOR<VeiculoUpdateWithoutModeloInput, VeiculoUncheckedUpdateWithoutModeloInput>
    create: XOR<VeiculoCreateWithoutModeloInput, VeiculoUncheckedCreateWithoutModeloInput>
  }

  export type VeiculoUpdateWithWhereUniqueWithoutModeloInput = {
    where: VeiculoWhereUniqueInput
    data: XOR<VeiculoUpdateWithoutModeloInput, VeiculoUncheckedUpdateWithoutModeloInput>
  }

  export type VeiculoUpdateManyWithWhereWithoutModeloInput = {
    where: VeiculoScalarWhereInput
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyWithoutModeloInput>
  }

  export type VeiculoScalarWhereInput = {
    AND?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
    OR?: VeiculoScalarWhereInput[]
    NOT?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
    id?: StringFilter<"Veiculo"> | string
    placaVeiculo?: StringFilter<"Veiculo"> | string
    chassiVeiculo?: StringFilter<"Veiculo"> | string
    renavamVeiculo?: StringFilter<"Veiculo"> | string
    proprietarioVeiculo?: StringFilter<"Veiculo"> | string
    crlvVeiculo?: StringFilter<"Veiculo"> | string
    secretariaId?: StringFilter<"Veiculo"> | string
    userId?: StringFilter<"Veiculo"> | string
    modeloId?: StringNullableFilter<"Veiculo"> | string | null
  }

  export type DemandaCreateWithoutMotoristaInput = {
    id?: string
    origemDemanda?: $Enums.OrigemDemanda
    emailSolicitante: string
    demandaDetalhe: string
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda: string
    dataHoraVolta: string
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lotacao?: number | null
    kmRodado?: number | null
    recurso?: string | null
    categoria?: string | null
    veiculo?: VeiculoCreateNestedOneWithoutDemandasInput
    secretaria?: SecretariaCreateNestedOneWithoutDemandasInput
  }

  export type DemandaUncheckedCreateWithoutMotoristaInput = {
    id?: string
    origemDemanda?: $Enums.OrigemDemanda
    emailSolicitante: string
    demandaDetalhe: string
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda: string
    dataHoraVolta: string
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lotacao?: number | null
    kmRodado?: number | null
    recurso?: string | null
    categoria?: string | null
    veiculoId?: string | null
    secretariaId?: string | null
  }

  export type DemandaCreateOrConnectWithoutMotoristaInput = {
    where: DemandaWhereUniqueInput
    create: XOR<DemandaCreateWithoutMotoristaInput, DemandaUncheckedCreateWithoutMotoristaInput>
  }

  export type DemandaCreateManyMotoristaInputEnvelope = {
    data: DemandaCreateManyMotoristaInput | DemandaCreateManyMotoristaInput[]
    skipDuplicates?: boolean
  }

  export type SecretariaCreateWithoutMotoristaInput = {
    id?: string
    nome: string
    demandas?: DemandaCreateNestedManyWithoutSecretariaInput
    users?: UserSecretariaCreateNestedManyWithoutSecretariaInput
    veiculos?: VeiculoCreateNestedManyWithoutSecretariaInput
  }

  export type SecretariaUncheckedCreateWithoutMotoristaInput = {
    id?: string
    nome: string
    demandas?: DemandaUncheckedCreateNestedManyWithoutSecretariaInput
    users?: UserSecretariaUncheckedCreateNestedManyWithoutSecretariaInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutSecretariaInput
  }

  export type SecretariaCreateOrConnectWithoutMotoristaInput = {
    where: SecretariaWhereUniqueInput
    create: XOR<SecretariaCreateWithoutMotoristaInput, SecretariaUncheckedCreateWithoutMotoristaInput>
  }

  export type DemandaUpsertWithWhereUniqueWithoutMotoristaInput = {
    where: DemandaWhereUniqueInput
    update: XOR<DemandaUpdateWithoutMotoristaInput, DemandaUncheckedUpdateWithoutMotoristaInput>
    create: XOR<DemandaCreateWithoutMotoristaInput, DemandaUncheckedCreateWithoutMotoristaInput>
  }

  export type DemandaUpdateWithWhereUniqueWithoutMotoristaInput = {
    where: DemandaWhereUniqueInput
    data: XOR<DemandaUpdateWithoutMotoristaInput, DemandaUncheckedUpdateWithoutMotoristaInput>
  }

  export type DemandaUpdateManyWithWhereWithoutMotoristaInput = {
    where: DemandaScalarWhereInput
    data: XOR<DemandaUpdateManyMutationInput, DemandaUncheckedUpdateManyWithoutMotoristaInput>
  }

  export type SecretariaUpsertWithoutMotoristaInput = {
    update: XOR<SecretariaUpdateWithoutMotoristaInput, SecretariaUncheckedUpdateWithoutMotoristaInput>
    create: XOR<SecretariaCreateWithoutMotoristaInput, SecretariaUncheckedCreateWithoutMotoristaInput>
    where?: SecretariaWhereInput
  }

  export type SecretariaUpdateToOneWithWhereWithoutMotoristaInput = {
    where?: SecretariaWhereInput
    data: XOR<SecretariaUpdateWithoutMotoristaInput, SecretariaUncheckedUpdateWithoutMotoristaInput>
  }

  export type SecretariaUpdateWithoutMotoristaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    demandas?: DemandaUpdateManyWithoutSecretariaNestedInput
    users?: UserSecretariaUpdateManyWithoutSecretariaNestedInput
    veiculos?: VeiculoUpdateManyWithoutSecretariaNestedInput
  }

  export type SecretariaUncheckedUpdateWithoutMotoristaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    demandas?: DemandaUncheckedUpdateManyWithoutSecretariaNestedInput
    users?: UserSecretariaUncheckedUpdateManyWithoutSecretariaNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutSecretariaNestedInput
  }

  export type UserCreateWithoutAcessoInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    veiculos?: VeiculoCreateNestedManyWithoutUserInput
    secretarias?: UserSecretariaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAcessoInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutUserInput
    secretarias?: UserSecretariaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAcessoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAcessoInput, UserUncheckedCreateWithoutAcessoInput>
  }

  export type UserUpsertWithWhereUniqueWithoutAcessoInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAcessoInput, UserUncheckedUpdateWithoutAcessoInput>
    create: XOR<UserCreateWithoutAcessoInput, UserUncheckedCreateWithoutAcessoInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAcessoInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAcessoInput, UserUncheckedUpdateWithoutAcessoInput>
  }

  export type UserUpdateManyWithWhereWithoutAcessoInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAcessoInput>
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
  }

  export type DemandaCreateWithoutSecretariaInput = {
    id?: string
    origemDemanda?: $Enums.OrigemDemanda
    emailSolicitante: string
    demandaDetalhe: string
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda: string
    dataHoraVolta: string
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lotacao?: number | null
    kmRodado?: number | null
    recurso?: string | null
    categoria?: string | null
    veiculo?: VeiculoCreateNestedOneWithoutDemandasInput
    motorista?: MotoristaCreateNestedOneWithoutDemandasInput
  }

  export type DemandaUncheckedCreateWithoutSecretariaInput = {
    id?: string
    origemDemanda?: $Enums.OrigemDemanda
    emailSolicitante: string
    demandaDetalhe: string
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda: string
    dataHoraVolta: string
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lotacao?: number | null
    kmRodado?: number | null
    recurso?: string | null
    categoria?: string | null
    veiculoId?: string | null
    motoristaId?: string | null
  }

  export type DemandaCreateOrConnectWithoutSecretariaInput = {
    where: DemandaWhereUniqueInput
    create: XOR<DemandaCreateWithoutSecretariaInput, DemandaUncheckedCreateWithoutSecretariaInput>
  }

  export type DemandaCreateManySecretariaInputEnvelope = {
    data: DemandaCreateManySecretariaInput | DemandaCreateManySecretariaInput[]
    skipDuplicates?: boolean
  }

  export type UserSecretariaCreateWithoutSecretariaInput = {
    user: UserCreateNestedOneWithoutSecretariasInput
  }

  export type UserSecretariaUncheckedCreateWithoutSecretariaInput = {
    userId: string
  }

  export type UserSecretariaCreateOrConnectWithoutSecretariaInput = {
    where: UserSecretariaWhereUniqueInput
    create: XOR<UserSecretariaCreateWithoutSecretariaInput, UserSecretariaUncheckedCreateWithoutSecretariaInput>
  }

  export type UserSecretariaCreateManySecretariaInputEnvelope = {
    data: UserSecretariaCreateManySecretariaInput | UserSecretariaCreateManySecretariaInput[]
    skipDuplicates?: boolean
  }

  export type VeiculoCreateWithoutSecretariaInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    user: UserCreateNestedOneWithoutVeiculosInput
    modelo?: VeiculoModeloCreateNestedOneWithoutVeiculosInput
    demandas?: DemandaCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUncheckedCreateWithoutSecretariaInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    userId: string
    modeloId?: string | null
    demandas?: DemandaUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoCreateOrConnectWithoutSecretariaInput = {
    where: VeiculoWhereUniqueInput
    create: XOR<VeiculoCreateWithoutSecretariaInput, VeiculoUncheckedCreateWithoutSecretariaInput>
  }

  export type VeiculoCreateManySecretariaInputEnvelope = {
    data: VeiculoCreateManySecretariaInput | VeiculoCreateManySecretariaInput[]
    skipDuplicates?: boolean
  }

  export type MotoristaCreateWithoutSecretariaInput = {
    id?: string
    nome: string
    contato: string
    demandas?: DemandaCreateNestedManyWithoutMotoristaInput
  }

  export type MotoristaUncheckedCreateWithoutSecretariaInput = {
    id?: string
    nome: string
    contato: string
    demandas?: DemandaUncheckedCreateNestedManyWithoutMotoristaInput
  }

  export type MotoristaCreateOrConnectWithoutSecretariaInput = {
    where: MotoristaWhereUniqueInput
    create: XOR<MotoristaCreateWithoutSecretariaInput, MotoristaUncheckedCreateWithoutSecretariaInput>
  }

  export type MotoristaCreateManySecretariaInputEnvelope = {
    data: MotoristaCreateManySecretariaInput | MotoristaCreateManySecretariaInput[]
    skipDuplicates?: boolean
  }

  export type DemandaUpsertWithWhereUniqueWithoutSecretariaInput = {
    where: DemandaWhereUniqueInput
    update: XOR<DemandaUpdateWithoutSecretariaInput, DemandaUncheckedUpdateWithoutSecretariaInput>
    create: XOR<DemandaCreateWithoutSecretariaInput, DemandaUncheckedCreateWithoutSecretariaInput>
  }

  export type DemandaUpdateWithWhereUniqueWithoutSecretariaInput = {
    where: DemandaWhereUniqueInput
    data: XOR<DemandaUpdateWithoutSecretariaInput, DemandaUncheckedUpdateWithoutSecretariaInput>
  }

  export type DemandaUpdateManyWithWhereWithoutSecretariaInput = {
    where: DemandaScalarWhereInput
    data: XOR<DemandaUpdateManyMutationInput, DemandaUncheckedUpdateManyWithoutSecretariaInput>
  }

  export type UserSecretariaUpsertWithWhereUniqueWithoutSecretariaInput = {
    where: UserSecretariaWhereUniqueInput
    update: XOR<UserSecretariaUpdateWithoutSecretariaInput, UserSecretariaUncheckedUpdateWithoutSecretariaInput>
    create: XOR<UserSecretariaCreateWithoutSecretariaInput, UserSecretariaUncheckedCreateWithoutSecretariaInput>
  }

  export type UserSecretariaUpdateWithWhereUniqueWithoutSecretariaInput = {
    where: UserSecretariaWhereUniqueInput
    data: XOR<UserSecretariaUpdateWithoutSecretariaInput, UserSecretariaUncheckedUpdateWithoutSecretariaInput>
  }

  export type UserSecretariaUpdateManyWithWhereWithoutSecretariaInput = {
    where: UserSecretariaScalarWhereInput
    data: XOR<UserSecretariaUpdateManyMutationInput, UserSecretariaUncheckedUpdateManyWithoutSecretariaInput>
  }

  export type UserSecretariaScalarWhereInput = {
    AND?: UserSecretariaScalarWhereInput | UserSecretariaScalarWhereInput[]
    OR?: UserSecretariaScalarWhereInput[]
    NOT?: UserSecretariaScalarWhereInput | UserSecretariaScalarWhereInput[]
    userId?: StringFilter<"UserSecretaria"> | string
    secretariaId?: StringFilter<"UserSecretaria"> | string
  }

  export type VeiculoUpsertWithWhereUniqueWithoutSecretariaInput = {
    where: VeiculoWhereUniqueInput
    update: XOR<VeiculoUpdateWithoutSecretariaInput, VeiculoUncheckedUpdateWithoutSecretariaInput>
    create: XOR<VeiculoCreateWithoutSecretariaInput, VeiculoUncheckedCreateWithoutSecretariaInput>
  }

  export type VeiculoUpdateWithWhereUniqueWithoutSecretariaInput = {
    where: VeiculoWhereUniqueInput
    data: XOR<VeiculoUpdateWithoutSecretariaInput, VeiculoUncheckedUpdateWithoutSecretariaInput>
  }

  export type VeiculoUpdateManyWithWhereWithoutSecretariaInput = {
    where: VeiculoScalarWhereInput
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyWithoutSecretariaInput>
  }

  export type MotoristaUpsertWithWhereUniqueWithoutSecretariaInput = {
    where: MotoristaWhereUniqueInput
    update: XOR<MotoristaUpdateWithoutSecretariaInput, MotoristaUncheckedUpdateWithoutSecretariaInput>
    create: XOR<MotoristaCreateWithoutSecretariaInput, MotoristaUncheckedCreateWithoutSecretariaInput>
  }

  export type MotoristaUpdateWithWhereUniqueWithoutSecretariaInput = {
    where: MotoristaWhereUniqueInput
    data: XOR<MotoristaUpdateWithoutSecretariaInput, MotoristaUncheckedUpdateWithoutSecretariaInput>
  }

  export type MotoristaUpdateManyWithWhereWithoutSecretariaInput = {
    where: MotoristaScalarWhereInput
    data: XOR<MotoristaUpdateManyMutationInput, MotoristaUncheckedUpdateManyWithoutSecretariaInput>
  }

  export type MotoristaScalarWhereInput = {
    AND?: MotoristaScalarWhereInput | MotoristaScalarWhereInput[]
    OR?: MotoristaScalarWhereInput[]
    NOT?: MotoristaScalarWhereInput | MotoristaScalarWhereInput[]
    id?: StringFilter<"Motorista"> | string
    nome?: StringFilter<"Motorista"> | string
    contato?: StringFilter<"Motorista"> | string
    secretariaId?: StringFilter<"Motorista"> | string
  }

  export type UserCreateWithoutSecretariasInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    acesso?: AcessoCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    veiculos?: VeiculoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSecretariasInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    acesso?: AcessoUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSecretariasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSecretariasInput, UserUncheckedCreateWithoutSecretariasInput>
  }

  export type SecretariaCreateWithoutUsersInput = {
    id?: string
    nome: string
    demandas?: DemandaCreateNestedManyWithoutSecretariaInput
    veiculos?: VeiculoCreateNestedManyWithoutSecretariaInput
    motorista?: MotoristaCreateNestedManyWithoutSecretariaInput
  }

  export type SecretariaUncheckedCreateWithoutUsersInput = {
    id?: string
    nome: string
    demandas?: DemandaUncheckedCreateNestedManyWithoutSecretariaInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutSecretariaInput
    motorista?: MotoristaUncheckedCreateNestedManyWithoutSecretariaInput
  }

  export type SecretariaCreateOrConnectWithoutUsersInput = {
    where: SecretariaWhereUniqueInput
    create: XOR<SecretariaCreateWithoutUsersInput, SecretariaUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutSecretariasInput = {
    update: XOR<UserUpdateWithoutSecretariasInput, UserUncheckedUpdateWithoutSecretariasInput>
    create: XOR<UserCreateWithoutSecretariasInput, UserUncheckedCreateWithoutSecretariasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSecretariasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSecretariasInput, UserUncheckedUpdateWithoutSecretariasInput>
  }

  export type UserUpdateWithoutSecretariasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acesso?: AcessoUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    veiculos?: VeiculoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSecretariasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acesso?: AcessoUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SecretariaUpsertWithoutUsersInput = {
    update: XOR<SecretariaUpdateWithoutUsersInput, SecretariaUncheckedUpdateWithoutUsersInput>
    create: XOR<SecretariaCreateWithoutUsersInput, SecretariaUncheckedCreateWithoutUsersInput>
    where?: SecretariaWhereInput
  }

  export type SecretariaUpdateToOneWithWhereWithoutUsersInput = {
    where?: SecretariaWhereInput
    data: XOR<SecretariaUpdateWithoutUsersInput, SecretariaUncheckedUpdateWithoutUsersInput>
  }

  export type SecretariaUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    demandas?: DemandaUpdateManyWithoutSecretariaNestedInput
    veiculos?: VeiculoUpdateManyWithoutSecretariaNestedInput
    motorista?: MotoristaUpdateManyWithoutSecretariaNestedInput
  }

  export type SecretariaUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    demandas?: DemandaUncheckedUpdateManyWithoutSecretariaNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutSecretariaNestedInput
    motorista?: MotoristaUncheckedUpdateManyWithoutSecretariaNestedInput
  }

  export type AcessoCreateWithoutUserInput = {
    id?: string
    nivel: string
  }

  export type AcessoUncheckedCreateWithoutUserInput = {
    id?: string
    nivel: string
  }

  export type AcessoCreateOrConnectWithoutUserInput = {
    where: AcessoWhereUniqueInput
    create: XOR<AcessoCreateWithoutUserInput, AcessoUncheckedCreateWithoutUserInput>
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

  export type VeiculoCreateWithoutUserInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    secretaria: SecretariaCreateNestedOneWithoutVeiculosInput
    modelo?: VeiculoModeloCreateNestedOneWithoutVeiculosInput
    demandas?: DemandaCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUncheckedCreateWithoutUserInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    secretariaId: string
    modeloId?: string | null
    demandas?: DemandaUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoCreateOrConnectWithoutUserInput = {
    where: VeiculoWhereUniqueInput
    create: XOR<VeiculoCreateWithoutUserInput, VeiculoUncheckedCreateWithoutUserInput>
  }

  export type VeiculoCreateManyUserInputEnvelope = {
    data: VeiculoCreateManyUserInput | VeiculoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSecretariaCreateWithoutUserInput = {
    secretaria: SecretariaCreateNestedOneWithoutUsersInput
  }

  export type UserSecretariaUncheckedCreateWithoutUserInput = {
    secretariaId: string
  }

  export type UserSecretariaCreateOrConnectWithoutUserInput = {
    where: UserSecretariaWhereUniqueInput
    create: XOR<UserSecretariaCreateWithoutUserInput, UserSecretariaUncheckedCreateWithoutUserInput>
  }

  export type UserSecretariaCreateManyUserInputEnvelope = {
    data: UserSecretariaCreateManyUserInput | UserSecretariaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AcessoUpsertWithWhereUniqueWithoutUserInput = {
    where: AcessoWhereUniqueInput
    update: XOR<AcessoUpdateWithoutUserInput, AcessoUncheckedUpdateWithoutUserInput>
    create: XOR<AcessoCreateWithoutUserInput, AcessoUncheckedCreateWithoutUserInput>
  }

  export type AcessoUpdateWithWhereUniqueWithoutUserInput = {
    where: AcessoWhereUniqueInput
    data: XOR<AcessoUpdateWithoutUserInput, AcessoUncheckedUpdateWithoutUserInput>
  }

  export type AcessoUpdateManyWithWhereWithoutUserInput = {
    where: AcessoScalarWhereInput
    data: XOR<AcessoUpdateManyMutationInput, AcessoUncheckedUpdateManyWithoutUserInput>
  }

  export type AcessoScalarWhereInput = {
    AND?: AcessoScalarWhereInput | AcessoScalarWhereInput[]
    OR?: AcessoScalarWhereInput[]
    NOT?: AcessoScalarWhereInput | AcessoScalarWhereInput[]
    id?: StringFilter<"Acesso"> | string
    nivel?: StringFilter<"Acesso"> | string
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

  export type VeiculoUpsertWithWhereUniqueWithoutUserInput = {
    where: VeiculoWhereUniqueInput
    update: XOR<VeiculoUpdateWithoutUserInput, VeiculoUncheckedUpdateWithoutUserInput>
    create: XOR<VeiculoCreateWithoutUserInput, VeiculoUncheckedCreateWithoutUserInput>
  }

  export type VeiculoUpdateWithWhereUniqueWithoutUserInput = {
    where: VeiculoWhereUniqueInput
    data: XOR<VeiculoUpdateWithoutUserInput, VeiculoUncheckedUpdateWithoutUserInput>
  }

  export type VeiculoUpdateManyWithWhereWithoutUserInput = {
    where: VeiculoScalarWhereInput
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSecretariaUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSecretariaWhereUniqueInput
    update: XOR<UserSecretariaUpdateWithoutUserInput, UserSecretariaUncheckedUpdateWithoutUserInput>
    create: XOR<UserSecretariaCreateWithoutUserInput, UserSecretariaUncheckedCreateWithoutUserInput>
  }

  export type UserSecretariaUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSecretariaWhereUniqueInput
    data: XOR<UserSecretariaUpdateWithoutUserInput, UserSecretariaUncheckedUpdateWithoutUserInput>
  }

  export type UserSecretariaUpdateManyWithWhereWithoutUserInput = {
    where: UserSecretariaScalarWhereInput
    data: XOR<UserSecretariaUpdateManyMutationInput, UserSecretariaUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    acesso?: AcessoCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    veiculos?: VeiculoCreateNestedManyWithoutUserInput
    secretarias?: UserSecretariaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    acesso?: AcessoUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutUserInput
    secretarias?: UserSecretariaUncheckedCreateNestedManyWithoutUserInput
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
    acesso?: AcessoUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    veiculos?: VeiculoUpdateManyWithoutUserNestedInput
    secretarias?: UserSecretariaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acesso?: AcessoUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutUserNestedInput
    secretarias?: UserSecretariaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    acesso?: AcessoCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    veiculos?: VeiculoCreateNestedManyWithoutUserInput
    secretarias?: UserSecretariaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    emailVerified?: boolean
    image?: string | null
    updatedAt?: Date | string
    acesso?: AcessoUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutUserInput
    secretarias?: UserSecretariaUncheckedCreateNestedManyWithoutUserInput
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
    acesso?: AcessoUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    veiculos?: VeiculoUpdateManyWithoutUserNestedInput
    secretarias?: UserSecretariaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acesso?: AcessoUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutUserNestedInput
    secretarias?: UserSecretariaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DemandaCreateManyVeiculoInput = {
    id?: string
    origemDemanda?: $Enums.OrigemDemanda
    emailSolicitante: string
    demandaDetalhe: string
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda: string
    dataHoraVolta: string
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lotacao?: number | null
    kmRodado?: number | null
    recurso?: string | null
    categoria?: string | null
    motoristaId?: string | null
    secretariaId?: string | null
  }

  export type DemandaUpdateWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    origemDemanda?: EnumOrigemDemandaFieldUpdateOperationsInput | $Enums.OrigemDemanda
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: StringFieldUpdateOperationsInput | string
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: StringFieldUpdateOperationsInput | string
    dataHoraVolta?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotacao?: NullableIntFieldUpdateOperationsInput | number | null
    kmRodado?: NullableIntFieldUpdateOperationsInput | number | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    motorista?: MotoristaUpdateOneWithoutDemandasNestedInput
    secretaria?: SecretariaUpdateOneWithoutDemandasNestedInput
  }

  export type DemandaUncheckedUpdateWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    origemDemanda?: EnumOrigemDemandaFieldUpdateOperationsInput | $Enums.OrigemDemanda
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: StringFieldUpdateOperationsInput | string
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: StringFieldUpdateOperationsInput | string
    dataHoraVolta?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotacao?: NullableIntFieldUpdateOperationsInput | number | null
    kmRodado?: NullableIntFieldUpdateOperationsInput | number | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    motoristaId?: NullableStringFieldUpdateOperationsInput | string | null
    secretariaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemandaUncheckedUpdateManyWithoutVeiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    origemDemanda?: EnumOrigemDemandaFieldUpdateOperationsInput | $Enums.OrigemDemanda
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: StringFieldUpdateOperationsInput | string
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: StringFieldUpdateOperationsInput | string
    dataHoraVolta?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotacao?: NullableIntFieldUpdateOperationsInput | number | null
    kmRodado?: NullableIntFieldUpdateOperationsInput | number | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    motoristaId?: NullableStringFieldUpdateOperationsInput | string | null
    secretariaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoCreateManyModeloInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    secretariaId: string
    userId: string
  }

  export type VeiculoUpdateWithoutModeloInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    secretaria?: SecretariaUpdateOneRequiredWithoutVeiculosNestedInput
    user?: UserUpdateOneRequiredWithoutVeiculosNestedInput
    demandas?: DemandaUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateWithoutModeloInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    secretariaId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    demandas?: DemandaUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateManyWithoutModeloInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    secretariaId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DemandaCreateManyMotoristaInput = {
    id?: string
    origemDemanda?: $Enums.OrigemDemanda
    emailSolicitante: string
    demandaDetalhe: string
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda: string
    dataHoraVolta: string
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lotacao?: number | null
    kmRodado?: number | null
    recurso?: string | null
    categoria?: string | null
    veiculoId?: string | null
    secretariaId?: string | null
  }

  export type DemandaUpdateWithoutMotoristaInput = {
    id?: StringFieldUpdateOperationsInput | string
    origemDemanda?: EnumOrigemDemandaFieldUpdateOperationsInput | $Enums.OrigemDemanda
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: StringFieldUpdateOperationsInput | string
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: StringFieldUpdateOperationsInput | string
    dataHoraVolta?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotacao?: NullableIntFieldUpdateOperationsInput | number | null
    kmRodado?: NullableIntFieldUpdateOperationsInput | number | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    veiculo?: VeiculoUpdateOneWithoutDemandasNestedInput
    secretaria?: SecretariaUpdateOneWithoutDemandasNestedInput
  }

  export type DemandaUncheckedUpdateWithoutMotoristaInput = {
    id?: StringFieldUpdateOperationsInput | string
    origemDemanda?: EnumOrigemDemandaFieldUpdateOperationsInput | $Enums.OrigemDemanda
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: StringFieldUpdateOperationsInput | string
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: StringFieldUpdateOperationsInput | string
    dataHoraVolta?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotacao?: NullableIntFieldUpdateOperationsInput | number | null
    kmRodado?: NullableIntFieldUpdateOperationsInput | number | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
    secretariaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemandaUncheckedUpdateManyWithoutMotoristaInput = {
    id?: StringFieldUpdateOperationsInput | string
    origemDemanda?: EnumOrigemDemandaFieldUpdateOperationsInput | $Enums.OrigemDemanda
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: StringFieldUpdateOperationsInput | string
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: StringFieldUpdateOperationsInput | string
    dataHoraVolta?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotacao?: NullableIntFieldUpdateOperationsInput | number | null
    kmRodado?: NullableIntFieldUpdateOperationsInput | number | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
    secretariaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutAcessoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    veiculos?: VeiculoUpdateManyWithoutUserNestedInput
    secretarias?: UserSecretariaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAcessoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    veiculos?: VeiculoUncheckedUpdateManyWithoutUserNestedInput
    secretarias?: UserSecretariaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAcessoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandaCreateManySecretariaInput = {
    id?: string
    origemDemanda?: $Enums.OrigemDemanda
    emailSolicitante: string
    demandaDetalhe: string
    pessoaSolicitante: string
    secretariaSolicitante: string
    destino: string
    dataHoraIda: string
    dataHoraVolta: string
    origem: string
    contato: string
    statusDemanda?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lotacao?: number | null
    kmRodado?: number | null
    recurso?: string | null
    categoria?: string | null
    veiculoId?: string | null
    motoristaId?: string | null
  }

  export type UserSecretariaCreateManySecretariaInput = {
    userId: string
  }

  export type VeiculoCreateManySecretariaInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    userId: string
    modeloId?: string | null
  }

  export type MotoristaCreateManySecretariaInput = {
    id?: string
    nome: string
    contato: string
  }

  export type DemandaUpdateWithoutSecretariaInput = {
    id?: StringFieldUpdateOperationsInput | string
    origemDemanda?: EnumOrigemDemandaFieldUpdateOperationsInput | $Enums.OrigemDemanda
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: StringFieldUpdateOperationsInput | string
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: StringFieldUpdateOperationsInput | string
    dataHoraVolta?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotacao?: NullableIntFieldUpdateOperationsInput | number | null
    kmRodado?: NullableIntFieldUpdateOperationsInput | number | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    veiculo?: VeiculoUpdateOneWithoutDemandasNestedInput
    motorista?: MotoristaUpdateOneWithoutDemandasNestedInput
  }

  export type DemandaUncheckedUpdateWithoutSecretariaInput = {
    id?: StringFieldUpdateOperationsInput | string
    origemDemanda?: EnumOrigemDemandaFieldUpdateOperationsInput | $Enums.OrigemDemanda
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: StringFieldUpdateOperationsInput | string
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: StringFieldUpdateOperationsInput | string
    dataHoraVolta?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotacao?: NullableIntFieldUpdateOperationsInput | number | null
    kmRodado?: NullableIntFieldUpdateOperationsInput | number | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
    motoristaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemandaUncheckedUpdateManyWithoutSecretariaInput = {
    id?: StringFieldUpdateOperationsInput | string
    origemDemanda?: EnumOrigemDemandaFieldUpdateOperationsInput | $Enums.OrigemDemanda
    emailSolicitante?: StringFieldUpdateOperationsInput | string
    demandaDetalhe?: StringFieldUpdateOperationsInput | string
    pessoaSolicitante?: StringFieldUpdateOperationsInput | string
    secretariaSolicitante?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    dataHoraIda?: StringFieldUpdateOperationsInput | string
    dataHoraVolta?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    statusDemanda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotacao?: NullableIntFieldUpdateOperationsInput | number | null
    kmRodado?: NullableIntFieldUpdateOperationsInput | number | null
    recurso?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    veiculoId?: NullableStringFieldUpdateOperationsInput | string | null
    motoristaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSecretariaUpdateWithoutSecretariaInput = {
    user?: UserUpdateOneRequiredWithoutSecretariasNestedInput
  }

  export type UserSecretariaUncheckedUpdateWithoutSecretariaInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSecretariaUncheckedUpdateManyWithoutSecretariaInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VeiculoUpdateWithoutSecretariaInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVeiculosNestedInput
    modelo?: VeiculoModeloUpdateOneWithoutVeiculosNestedInput
    demandas?: DemandaUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateWithoutSecretariaInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    modeloId?: NullableStringFieldUpdateOperationsInput | string | null
    demandas?: DemandaUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateManyWithoutSecretariaInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    modeloId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MotoristaUpdateWithoutSecretariaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    demandas?: DemandaUpdateManyWithoutMotoristaNestedInput
  }

  export type MotoristaUncheckedUpdateWithoutSecretariaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    demandas?: DemandaUncheckedUpdateManyWithoutMotoristaNestedInput
  }

  export type MotoristaUncheckedUpdateManyWithoutSecretariaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
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

  export type VeiculoCreateManyUserInput = {
    id?: string
    placaVeiculo: string
    chassiVeiculo: string
    renavamVeiculo: string
    proprietarioVeiculo: string
    crlvVeiculo: string
    secretariaId: string
    modeloId?: string | null
  }

  export type UserSecretariaCreateManyUserInput = {
    secretariaId: string
  }

  export type AcessoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
  }

  export type AcessoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
  }

  export type AcessoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
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

  export type VeiculoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    secretaria?: SecretariaUpdateOneRequiredWithoutVeiculosNestedInput
    modelo?: VeiculoModeloUpdateOneWithoutVeiculosNestedInput
    demandas?: DemandaUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    secretariaId?: StringFieldUpdateOperationsInput | string
    modeloId?: NullableStringFieldUpdateOperationsInput | string | null
    demandas?: DemandaUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    placaVeiculo?: StringFieldUpdateOperationsInput | string
    chassiVeiculo?: StringFieldUpdateOperationsInput | string
    renavamVeiculo?: StringFieldUpdateOperationsInput | string
    proprietarioVeiculo?: StringFieldUpdateOperationsInput | string
    crlvVeiculo?: StringFieldUpdateOperationsInput | string
    secretariaId?: StringFieldUpdateOperationsInput | string
    modeloId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSecretariaUpdateWithoutUserInput = {
    secretaria?: SecretariaUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSecretariaUncheckedUpdateWithoutUserInput = {
    secretariaId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSecretariaUncheckedUpdateManyWithoutUserInput = {
    secretariaId?: StringFieldUpdateOperationsInput | string
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