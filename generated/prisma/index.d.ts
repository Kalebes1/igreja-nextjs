
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
 * Model Igreja
 * 
 */
export type Igreja = $Result.DefaultSelection<Prisma.$IgrejaPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Noticia
 * 
 */
export type Noticia = $Result.DefaultSelection<Prisma.$NoticiaPayload>
/**
 * Model Agenda
 * 
 */
export type Agenda = $Result.DefaultSelection<Prisma.$AgendaPayload>
/**
 * Model Membro
 * 
 */
export type Membro = $Result.DefaultSelection<Prisma.$MembroPayload>
/**
 * Model Permissao
 * 
 */
export type Permissao = $Result.DefaultSelection<Prisma.$PermissaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Master: 'Master',
  Escritor: 'Escritor',
  Tesoureiro: 'Tesoureiro'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Funcao: {
  Pastor: 'Pastor',
  Evangelista: 'Evangelista',
  Presbítero: 'Presbítero',
  Diácono: 'Diácono',
  Missionário: 'Missionário',
  Auxiliar: 'Auxiliar',
  Membro: 'Membro'
};

export type Funcao = (typeof Funcao)[keyof typeof Funcao]


export const Sexo: {
  M: 'M',
  F: 'F'
};

export type Sexo = (typeof Sexo)[keyof typeof Sexo]


export const PermissaoTipo: {
  noticias_criar: 'noticias_criar',
  noticias_aprovar: 'noticias_aprovar',
  agenda_inserir: 'agenda_inserir',
  membros_crud: 'membros_crud',
  emitir_documentos: 'emitir_documentos',
  cadastrar_documentos: 'cadastrar_documentos'
};

export type PermissaoTipo = (typeof PermissaoTipo)[keyof typeof PermissaoTipo]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Funcao = $Enums.Funcao

export const Funcao: typeof $Enums.Funcao

export type Sexo = $Enums.Sexo

export const Sexo: typeof $Enums.Sexo

export type PermissaoTipo = $Enums.PermissaoTipo

export const PermissaoTipo: typeof $Enums.PermissaoTipo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Igrejas
 * const igrejas = await prisma.igreja.findMany()
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
   * // Fetch zero or more Igrejas
   * const igrejas = await prisma.igreja.findMany()
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
   * `prisma.igreja`: Exposes CRUD operations for the **Igreja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Igrejas
    * const igrejas = await prisma.igreja.findMany()
    * ```
    */
  get igreja(): Prisma.IgrejaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noticia`: Exposes CRUD operations for the **Noticia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Noticias
    * const noticias = await prisma.noticia.findMany()
    * ```
    */
  get noticia(): Prisma.NoticiaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agenda`: Exposes CRUD operations for the **Agenda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agenda
    * const agenda = await prisma.agenda.findMany()
    * ```
    */
  get agenda(): Prisma.AgendaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membro`: Exposes CRUD operations for the **Membro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Membros
    * const membros = await prisma.membro.findMany()
    * ```
    */
  get membro(): Prisma.MembroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permissao`: Exposes CRUD operations for the **Permissao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissaos
    * const permissaos = await prisma.permissao.findMany()
    * ```
    */
  get permissao(): Prisma.PermissaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Igreja: 'Igreja',
    Usuario: 'Usuario',
    Noticia: 'Noticia',
    Agenda: 'Agenda',
    Membro: 'Membro',
    Permissao: 'Permissao'
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
      modelProps: "igreja" | "usuario" | "noticia" | "agenda" | "membro" | "permissao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Igreja: {
        payload: Prisma.$IgrejaPayload<ExtArgs>
        fields: Prisma.IgrejaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IgrejaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgrejaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IgrejaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgrejaPayload>
          }
          findFirst: {
            args: Prisma.IgrejaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgrejaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IgrejaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgrejaPayload>
          }
          findMany: {
            args: Prisma.IgrejaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgrejaPayload>[]
          }
          create: {
            args: Prisma.IgrejaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgrejaPayload>
          }
          createMany: {
            args: Prisma.IgrejaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IgrejaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgrejaPayload>[]
          }
          delete: {
            args: Prisma.IgrejaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgrejaPayload>
          }
          update: {
            args: Prisma.IgrejaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgrejaPayload>
          }
          deleteMany: {
            args: Prisma.IgrejaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IgrejaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IgrejaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgrejaPayload>[]
          }
          upsert: {
            args: Prisma.IgrejaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgrejaPayload>
          }
          aggregate: {
            args: Prisma.IgrejaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIgreja>
          }
          groupBy: {
            args: Prisma.IgrejaGroupByArgs<ExtArgs>
            result: $Utils.Optional<IgrejaGroupByOutputType>[]
          }
          count: {
            args: Prisma.IgrejaCountArgs<ExtArgs>
            result: $Utils.Optional<IgrejaCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Noticia: {
        payload: Prisma.$NoticiaPayload<ExtArgs>
        fields: Prisma.NoticiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          findFirst: {
            args: Prisma.NoticiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          findMany: {
            args: Prisma.NoticiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>[]
          }
          create: {
            args: Prisma.NoticiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          createMany: {
            args: Prisma.NoticiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoticiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>[]
          }
          delete: {
            args: Prisma.NoticiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          update: {
            args: Prisma.NoticiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          deleteMany: {
            args: Prisma.NoticiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoticiaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>[]
          }
          upsert: {
            args: Prisma.NoticiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          aggregate: {
            args: Prisma.NoticiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoticia>
          }
          groupBy: {
            args: Prisma.NoticiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticiaCountArgs<ExtArgs>
            result: $Utils.Optional<NoticiaCountAggregateOutputType> | number
          }
        }
      }
      Agenda: {
        payload: Prisma.$AgendaPayload<ExtArgs>
        fields: Prisma.AgendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          findFirst: {
            args: Prisma.AgendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          findMany: {
            args: Prisma.AgendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>[]
          }
          create: {
            args: Prisma.AgendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          createMany: {
            args: Prisma.AgendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgendaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>[]
          }
          delete: {
            args: Prisma.AgendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          update: {
            args: Prisma.AgendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          deleteMany: {
            args: Prisma.AgendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgendaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>[]
          }
          upsert: {
            args: Prisma.AgendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          aggregate: {
            args: Prisma.AgendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgenda>
          }
          groupBy: {
            args: Prisma.AgendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendaCountArgs<ExtArgs>
            result: $Utils.Optional<AgendaCountAggregateOutputType> | number
          }
        }
      }
      Membro: {
        payload: Prisma.$MembroPayload<ExtArgs>
        fields: Prisma.MembroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>
          }
          findFirst: {
            args: Prisma.MembroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>
          }
          findMany: {
            args: Prisma.MembroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>[]
          }
          create: {
            args: Prisma.MembroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>
          }
          createMany: {
            args: Prisma.MembroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>[]
          }
          delete: {
            args: Prisma.MembroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>
          }
          update: {
            args: Prisma.MembroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>
          }
          deleteMany: {
            args: Prisma.MembroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>[]
          }
          upsert: {
            args: Prisma.MembroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>
          }
          aggregate: {
            args: Prisma.MembroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembro>
          }
          groupBy: {
            args: Prisma.MembroGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembroGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembroCountArgs<ExtArgs>
            result: $Utils.Optional<MembroCountAggregateOutputType> | number
          }
        }
      }
      Permissao: {
        payload: Prisma.$PermissaoPayload<ExtArgs>
        fields: Prisma.PermissaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          findFirst: {
            args: Prisma.PermissaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          findMany: {
            args: Prisma.PermissaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>[]
          }
          create: {
            args: Prisma.PermissaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          createMany: {
            args: Prisma.PermissaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>[]
          }
          delete: {
            args: Prisma.PermissaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          update: {
            args: Prisma.PermissaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          deleteMany: {
            args: Prisma.PermissaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>[]
          }
          upsert: {
            args: Prisma.PermissaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          aggregate: {
            args: Prisma.PermissaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissao>
          }
          groupBy: {
            args: Prisma.PermissaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissaoCountArgs<ExtArgs>
            result: $Utils.Optional<PermissaoCountAggregateOutputType> | number
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
    igreja?: IgrejaOmit
    usuario?: UsuarioOmit
    noticia?: NoticiaOmit
    agenda?: AgendaOmit
    membro?: MembroOmit
    permissao?: PermissaoOmit
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
   * Count Type IgrejaCountOutputType
   */

  export type IgrejaCountOutputType = {
    membros: number
  }

  export type IgrejaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membros?: boolean | IgrejaCountOutputTypeCountMembrosArgs
  }

  // Custom InputTypes
  /**
   * IgrejaCountOutputType without action
   */
  export type IgrejaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IgrejaCountOutputType
     */
    select?: IgrejaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IgrejaCountOutputType without action
   */
  export type IgrejaCountOutputTypeCountMembrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembroWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    noticias: number
    permissoes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    noticias?: boolean | UsuarioCountOutputTypeCountNoticiasArgs
    permissoes?: boolean | UsuarioCountOutputTypeCountPermissoesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNoticiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticiaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPermissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Igreja
   */

  export type AggregateIgreja = {
    _count: IgrejaCountAggregateOutputType | null
    _avg: IgrejaAvgAggregateOutputType | null
    _sum: IgrejaSumAggregateOutputType | null
    _min: IgrejaMinAggregateOutputType | null
    _max: IgrejaMaxAggregateOutputType | null
  }

  export type IgrejaAvgAggregateOutputType = {
    id: number | null
  }

  export type IgrejaSumAggregateOutputType = {
    id: number | null
  }

  export type IgrejaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    endereco: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    pastor_local: string | null
  }

  export type IgrejaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    endereco: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    pastor_local: string | null
  }

  export type IgrejaCountAggregateOutputType = {
    id: number
    nome: number
    endereco: number
    cidade: number
    estado: number
    cep: number
    pastor_local: number
    _all: number
  }


  export type IgrejaAvgAggregateInputType = {
    id?: true
  }

  export type IgrejaSumAggregateInputType = {
    id?: true
  }

  export type IgrejaMinAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    cidade?: true
    estado?: true
    cep?: true
    pastor_local?: true
  }

  export type IgrejaMaxAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    cidade?: true
    estado?: true
    cep?: true
    pastor_local?: true
  }

  export type IgrejaCountAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    cidade?: true
    estado?: true
    cep?: true
    pastor_local?: true
    _all?: true
  }

  export type IgrejaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Igreja to aggregate.
     */
    where?: IgrejaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Igrejas to fetch.
     */
    orderBy?: IgrejaOrderByWithRelationInput | IgrejaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IgrejaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Igrejas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Igrejas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Igrejas
    **/
    _count?: true | IgrejaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IgrejaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IgrejaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IgrejaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IgrejaMaxAggregateInputType
  }

  export type GetIgrejaAggregateType<T extends IgrejaAggregateArgs> = {
        [P in keyof T & keyof AggregateIgreja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIgreja[P]>
      : GetScalarType<T[P], AggregateIgreja[P]>
  }




  export type IgrejaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IgrejaWhereInput
    orderBy?: IgrejaOrderByWithAggregationInput | IgrejaOrderByWithAggregationInput[]
    by: IgrejaScalarFieldEnum[] | IgrejaScalarFieldEnum
    having?: IgrejaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IgrejaCountAggregateInputType | true
    _avg?: IgrejaAvgAggregateInputType
    _sum?: IgrejaSumAggregateInputType
    _min?: IgrejaMinAggregateInputType
    _max?: IgrejaMaxAggregateInputType
  }

  export type IgrejaGroupByOutputType = {
    id: number
    nome: string
    endereco: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    pastor_local: string | null
    _count: IgrejaCountAggregateOutputType | null
    _avg: IgrejaAvgAggregateOutputType | null
    _sum: IgrejaSumAggregateOutputType | null
    _min: IgrejaMinAggregateOutputType | null
    _max: IgrejaMaxAggregateOutputType | null
  }

  type GetIgrejaGroupByPayload<T extends IgrejaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IgrejaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IgrejaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IgrejaGroupByOutputType[P]>
            : GetScalarType<T[P], IgrejaGroupByOutputType[P]>
        }
      >
    >


  export type IgrejaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    pastor_local?: boolean
    membros?: boolean | Igreja$membrosArgs<ExtArgs>
    _count?: boolean | IgrejaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["igreja"]>

  export type IgrejaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    pastor_local?: boolean
  }, ExtArgs["result"]["igreja"]>

  export type IgrejaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    pastor_local?: boolean
  }, ExtArgs["result"]["igreja"]>

  export type IgrejaSelectScalar = {
    id?: boolean
    nome?: boolean
    endereco?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    pastor_local?: boolean
  }

  export type IgrejaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "endereco" | "cidade" | "estado" | "cep" | "pastor_local", ExtArgs["result"]["igreja"]>
  export type IgrejaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membros?: boolean | Igreja$membrosArgs<ExtArgs>
    _count?: boolean | IgrejaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IgrejaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IgrejaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IgrejaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Igreja"
    objects: {
      membros: Prisma.$MembroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      endereco: string | null
      cidade: string | null
      estado: string | null
      cep: string | null
      pastor_local: string | null
    }, ExtArgs["result"]["igreja"]>
    composites: {}
  }

  type IgrejaGetPayload<S extends boolean | null | undefined | IgrejaDefaultArgs> = $Result.GetResult<Prisma.$IgrejaPayload, S>

  type IgrejaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IgrejaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IgrejaCountAggregateInputType | true
    }

  export interface IgrejaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Igreja'], meta: { name: 'Igreja' } }
    /**
     * Find zero or one Igreja that matches the filter.
     * @param {IgrejaFindUniqueArgs} args - Arguments to find a Igreja
     * @example
     * // Get one Igreja
     * const igreja = await prisma.igreja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IgrejaFindUniqueArgs>(args: SelectSubset<T, IgrejaFindUniqueArgs<ExtArgs>>): Prisma__IgrejaClient<$Result.GetResult<Prisma.$IgrejaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Igreja that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IgrejaFindUniqueOrThrowArgs} args - Arguments to find a Igreja
     * @example
     * // Get one Igreja
     * const igreja = await prisma.igreja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IgrejaFindUniqueOrThrowArgs>(args: SelectSubset<T, IgrejaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IgrejaClient<$Result.GetResult<Prisma.$IgrejaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Igreja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IgrejaFindFirstArgs} args - Arguments to find a Igreja
     * @example
     * // Get one Igreja
     * const igreja = await prisma.igreja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IgrejaFindFirstArgs>(args?: SelectSubset<T, IgrejaFindFirstArgs<ExtArgs>>): Prisma__IgrejaClient<$Result.GetResult<Prisma.$IgrejaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Igreja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IgrejaFindFirstOrThrowArgs} args - Arguments to find a Igreja
     * @example
     * // Get one Igreja
     * const igreja = await prisma.igreja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IgrejaFindFirstOrThrowArgs>(args?: SelectSubset<T, IgrejaFindFirstOrThrowArgs<ExtArgs>>): Prisma__IgrejaClient<$Result.GetResult<Prisma.$IgrejaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Igrejas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IgrejaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Igrejas
     * const igrejas = await prisma.igreja.findMany()
     * 
     * // Get first 10 Igrejas
     * const igrejas = await prisma.igreja.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const igrejaWithIdOnly = await prisma.igreja.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IgrejaFindManyArgs>(args?: SelectSubset<T, IgrejaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IgrejaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Igreja.
     * @param {IgrejaCreateArgs} args - Arguments to create a Igreja.
     * @example
     * // Create one Igreja
     * const Igreja = await prisma.igreja.create({
     *   data: {
     *     // ... data to create a Igreja
     *   }
     * })
     * 
     */
    create<T extends IgrejaCreateArgs>(args: SelectSubset<T, IgrejaCreateArgs<ExtArgs>>): Prisma__IgrejaClient<$Result.GetResult<Prisma.$IgrejaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Igrejas.
     * @param {IgrejaCreateManyArgs} args - Arguments to create many Igrejas.
     * @example
     * // Create many Igrejas
     * const igreja = await prisma.igreja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IgrejaCreateManyArgs>(args?: SelectSubset<T, IgrejaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Igrejas and returns the data saved in the database.
     * @param {IgrejaCreateManyAndReturnArgs} args - Arguments to create many Igrejas.
     * @example
     * // Create many Igrejas
     * const igreja = await prisma.igreja.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Igrejas and only return the `id`
     * const igrejaWithIdOnly = await prisma.igreja.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IgrejaCreateManyAndReturnArgs>(args?: SelectSubset<T, IgrejaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IgrejaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Igreja.
     * @param {IgrejaDeleteArgs} args - Arguments to delete one Igreja.
     * @example
     * // Delete one Igreja
     * const Igreja = await prisma.igreja.delete({
     *   where: {
     *     // ... filter to delete one Igreja
     *   }
     * })
     * 
     */
    delete<T extends IgrejaDeleteArgs>(args: SelectSubset<T, IgrejaDeleteArgs<ExtArgs>>): Prisma__IgrejaClient<$Result.GetResult<Prisma.$IgrejaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Igreja.
     * @param {IgrejaUpdateArgs} args - Arguments to update one Igreja.
     * @example
     * // Update one Igreja
     * const igreja = await prisma.igreja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IgrejaUpdateArgs>(args: SelectSubset<T, IgrejaUpdateArgs<ExtArgs>>): Prisma__IgrejaClient<$Result.GetResult<Prisma.$IgrejaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Igrejas.
     * @param {IgrejaDeleteManyArgs} args - Arguments to filter Igrejas to delete.
     * @example
     * // Delete a few Igrejas
     * const { count } = await prisma.igreja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IgrejaDeleteManyArgs>(args?: SelectSubset<T, IgrejaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Igrejas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IgrejaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Igrejas
     * const igreja = await prisma.igreja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IgrejaUpdateManyArgs>(args: SelectSubset<T, IgrejaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Igrejas and returns the data updated in the database.
     * @param {IgrejaUpdateManyAndReturnArgs} args - Arguments to update many Igrejas.
     * @example
     * // Update many Igrejas
     * const igreja = await prisma.igreja.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Igrejas and only return the `id`
     * const igrejaWithIdOnly = await prisma.igreja.updateManyAndReturn({
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
    updateManyAndReturn<T extends IgrejaUpdateManyAndReturnArgs>(args: SelectSubset<T, IgrejaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IgrejaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Igreja.
     * @param {IgrejaUpsertArgs} args - Arguments to update or create a Igreja.
     * @example
     * // Update or create a Igreja
     * const igreja = await prisma.igreja.upsert({
     *   create: {
     *     // ... data to create a Igreja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Igreja we want to update
     *   }
     * })
     */
    upsert<T extends IgrejaUpsertArgs>(args: SelectSubset<T, IgrejaUpsertArgs<ExtArgs>>): Prisma__IgrejaClient<$Result.GetResult<Prisma.$IgrejaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Igrejas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IgrejaCountArgs} args - Arguments to filter Igrejas to count.
     * @example
     * // Count the number of Igrejas
     * const count = await prisma.igreja.count({
     *   where: {
     *     // ... the filter for the Igrejas we want to count
     *   }
     * })
    **/
    count<T extends IgrejaCountArgs>(
      args?: Subset<T, IgrejaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IgrejaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Igreja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IgrejaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IgrejaAggregateArgs>(args: Subset<T, IgrejaAggregateArgs>): Prisma.PrismaPromise<GetIgrejaAggregateType<T>>

    /**
     * Group by Igreja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IgrejaGroupByArgs} args - Group by arguments.
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
      T extends IgrejaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IgrejaGroupByArgs['orderBy'] }
        : { orderBy?: IgrejaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IgrejaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIgrejaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Igreja model
   */
  readonly fields: IgrejaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Igreja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IgrejaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    membros<T extends Igreja$membrosArgs<ExtArgs> = {}>(args?: Subset<T, Igreja$membrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Igreja model
   */
  interface IgrejaFieldRefs {
    readonly id: FieldRef<"Igreja", 'Int'>
    readonly nome: FieldRef<"Igreja", 'String'>
    readonly endereco: FieldRef<"Igreja", 'String'>
    readonly cidade: FieldRef<"Igreja", 'String'>
    readonly estado: FieldRef<"Igreja", 'String'>
    readonly cep: FieldRef<"Igreja", 'String'>
    readonly pastor_local: FieldRef<"Igreja", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Igreja findUnique
   */
  export type IgrejaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igreja
     */
    select?: IgrejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igreja
     */
    omit?: IgrejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgrejaInclude<ExtArgs> | null
    /**
     * Filter, which Igreja to fetch.
     */
    where: IgrejaWhereUniqueInput
  }

  /**
   * Igreja findUniqueOrThrow
   */
  export type IgrejaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igreja
     */
    select?: IgrejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igreja
     */
    omit?: IgrejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgrejaInclude<ExtArgs> | null
    /**
     * Filter, which Igreja to fetch.
     */
    where: IgrejaWhereUniqueInput
  }

  /**
   * Igreja findFirst
   */
  export type IgrejaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igreja
     */
    select?: IgrejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igreja
     */
    omit?: IgrejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgrejaInclude<ExtArgs> | null
    /**
     * Filter, which Igreja to fetch.
     */
    where?: IgrejaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Igrejas to fetch.
     */
    orderBy?: IgrejaOrderByWithRelationInput | IgrejaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Igrejas.
     */
    cursor?: IgrejaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Igrejas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Igrejas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Igrejas.
     */
    distinct?: IgrejaScalarFieldEnum | IgrejaScalarFieldEnum[]
  }

  /**
   * Igreja findFirstOrThrow
   */
  export type IgrejaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igreja
     */
    select?: IgrejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igreja
     */
    omit?: IgrejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgrejaInclude<ExtArgs> | null
    /**
     * Filter, which Igreja to fetch.
     */
    where?: IgrejaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Igrejas to fetch.
     */
    orderBy?: IgrejaOrderByWithRelationInput | IgrejaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Igrejas.
     */
    cursor?: IgrejaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Igrejas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Igrejas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Igrejas.
     */
    distinct?: IgrejaScalarFieldEnum | IgrejaScalarFieldEnum[]
  }

  /**
   * Igreja findMany
   */
  export type IgrejaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igreja
     */
    select?: IgrejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igreja
     */
    omit?: IgrejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgrejaInclude<ExtArgs> | null
    /**
     * Filter, which Igrejas to fetch.
     */
    where?: IgrejaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Igrejas to fetch.
     */
    orderBy?: IgrejaOrderByWithRelationInput | IgrejaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Igrejas.
     */
    cursor?: IgrejaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Igrejas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Igrejas.
     */
    skip?: number
    distinct?: IgrejaScalarFieldEnum | IgrejaScalarFieldEnum[]
  }

  /**
   * Igreja create
   */
  export type IgrejaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igreja
     */
    select?: IgrejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igreja
     */
    omit?: IgrejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgrejaInclude<ExtArgs> | null
    /**
     * The data needed to create a Igreja.
     */
    data: XOR<IgrejaCreateInput, IgrejaUncheckedCreateInput>
  }

  /**
   * Igreja createMany
   */
  export type IgrejaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Igrejas.
     */
    data: IgrejaCreateManyInput | IgrejaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Igreja createManyAndReturn
   */
  export type IgrejaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igreja
     */
    select?: IgrejaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Igreja
     */
    omit?: IgrejaOmit<ExtArgs> | null
    /**
     * The data used to create many Igrejas.
     */
    data: IgrejaCreateManyInput | IgrejaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Igreja update
   */
  export type IgrejaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igreja
     */
    select?: IgrejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igreja
     */
    omit?: IgrejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgrejaInclude<ExtArgs> | null
    /**
     * The data needed to update a Igreja.
     */
    data: XOR<IgrejaUpdateInput, IgrejaUncheckedUpdateInput>
    /**
     * Choose, which Igreja to update.
     */
    where: IgrejaWhereUniqueInput
  }

  /**
   * Igreja updateMany
   */
  export type IgrejaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Igrejas.
     */
    data: XOR<IgrejaUpdateManyMutationInput, IgrejaUncheckedUpdateManyInput>
    /**
     * Filter which Igrejas to update
     */
    where?: IgrejaWhereInput
    /**
     * Limit how many Igrejas to update.
     */
    limit?: number
  }

  /**
   * Igreja updateManyAndReturn
   */
  export type IgrejaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igreja
     */
    select?: IgrejaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Igreja
     */
    omit?: IgrejaOmit<ExtArgs> | null
    /**
     * The data used to update Igrejas.
     */
    data: XOR<IgrejaUpdateManyMutationInput, IgrejaUncheckedUpdateManyInput>
    /**
     * Filter which Igrejas to update
     */
    where?: IgrejaWhereInput
    /**
     * Limit how many Igrejas to update.
     */
    limit?: number
  }

  /**
   * Igreja upsert
   */
  export type IgrejaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igreja
     */
    select?: IgrejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igreja
     */
    omit?: IgrejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgrejaInclude<ExtArgs> | null
    /**
     * The filter to search for the Igreja to update in case it exists.
     */
    where: IgrejaWhereUniqueInput
    /**
     * In case the Igreja found by the `where` argument doesn't exist, create a new Igreja with this data.
     */
    create: XOR<IgrejaCreateInput, IgrejaUncheckedCreateInput>
    /**
     * In case the Igreja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IgrejaUpdateInput, IgrejaUncheckedUpdateInput>
  }

  /**
   * Igreja delete
   */
  export type IgrejaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igreja
     */
    select?: IgrejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igreja
     */
    omit?: IgrejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgrejaInclude<ExtArgs> | null
    /**
     * Filter which Igreja to delete.
     */
    where: IgrejaWhereUniqueInput
  }

  /**
   * Igreja deleteMany
   */
  export type IgrejaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Igrejas to delete
     */
    where?: IgrejaWhereInput
    /**
     * Limit how many Igrejas to delete.
     */
    limit?: number
  }

  /**
   * Igreja.membros
   */
  export type Igreja$membrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    where?: MembroWhereInput
    orderBy?: MembroOrderByWithRelationInput | MembroOrderByWithRelationInput[]
    cursor?: MembroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembroScalarFieldEnum | MembroScalarFieldEnum[]
  }

  /**
   * Igreja without action
   */
  export type IgrejaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igreja
     */
    select?: IgrejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igreja
     */
    omit?: IgrejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgrejaInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    role: $Enums.Role | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    role: $Enums.Role | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    role: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    role?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    role?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    role?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    role: $Enums.Role
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
    noticias?: boolean | Usuario$noticiasArgs<ExtArgs>
    permissoes?: boolean | Usuario$permissoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "role", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    noticias?: boolean | Usuario$noticiasArgs<ExtArgs>
    permissoes?: boolean | Usuario$permissoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      noticias: Prisma.$NoticiaPayload<ExtArgs>[]
      permissoes: Prisma.$PermissaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      role: $Enums.Role
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    noticias<T extends Usuario$noticiasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$noticiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissoes<T extends Usuario$permissoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$permissoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly role: FieldRef<"Usuario", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.noticias
   */
  export type Usuario$noticiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiaInclude<ExtArgs> | null
    where?: NoticiaWhereInput
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    cursor?: NoticiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoticiaScalarFieldEnum | NoticiaScalarFieldEnum[]
  }

  /**
   * Usuario.permissoes
   */
  export type Usuario$permissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    where?: PermissaoWhereInput
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    cursor?: PermissaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissaoScalarFieldEnum | PermissaoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Noticia
   */

  export type AggregateNoticia = {
    _count: NoticiaCountAggregateOutputType | null
    _avg: NoticiaAvgAggregateOutputType | null
    _sum: NoticiaSumAggregateOutputType | null
    _min: NoticiaMinAggregateOutputType | null
    _max: NoticiaMaxAggregateOutputType | null
  }

  export type NoticiaAvgAggregateOutputType = {
    id: number | null
    autor_id: number | null
  }

  export type NoticiaSumAggregateOutputType = {
    id: number | null
    autor_id: number | null
  }

  export type NoticiaMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    imagem: string | null
    texto: string | null
    autor_id: number | null
    data_publicacao: Date | null
    aprovado: boolean | null
  }

  export type NoticiaMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    imagem: string | null
    texto: string | null
    autor_id: number | null
    data_publicacao: Date | null
    aprovado: boolean | null
  }

  export type NoticiaCountAggregateOutputType = {
    id: number
    titulo: number
    imagem: number
    texto: number
    autor_id: number
    data_publicacao: number
    aprovado: number
    _all: number
  }


  export type NoticiaAvgAggregateInputType = {
    id?: true
    autor_id?: true
  }

  export type NoticiaSumAggregateInputType = {
    id?: true
    autor_id?: true
  }

  export type NoticiaMinAggregateInputType = {
    id?: true
    titulo?: true
    imagem?: true
    texto?: true
    autor_id?: true
    data_publicacao?: true
    aprovado?: true
  }

  export type NoticiaMaxAggregateInputType = {
    id?: true
    titulo?: true
    imagem?: true
    texto?: true
    autor_id?: true
    data_publicacao?: true
    aprovado?: true
  }

  export type NoticiaCountAggregateInputType = {
    id?: true
    titulo?: true
    imagem?: true
    texto?: true
    autor_id?: true
    data_publicacao?: true
    aprovado?: true
    _all?: true
  }

  export type NoticiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Noticia to aggregate.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Noticias
    **/
    _count?: true | NoticiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticiaMaxAggregateInputType
  }

  export type GetNoticiaAggregateType<T extends NoticiaAggregateArgs> = {
        [P in keyof T & keyof AggregateNoticia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoticia[P]>
      : GetScalarType<T[P], AggregateNoticia[P]>
  }




  export type NoticiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticiaWhereInput
    orderBy?: NoticiaOrderByWithAggregationInput | NoticiaOrderByWithAggregationInput[]
    by: NoticiaScalarFieldEnum[] | NoticiaScalarFieldEnum
    having?: NoticiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticiaCountAggregateInputType | true
    _avg?: NoticiaAvgAggregateInputType
    _sum?: NoticiaSumAggregateInputType
    _min?: NoticiaMinAggregateInputType
    _max?: NoticiaMaxAggregateInputType
  }

  export type NoticiaGroupByOutputType = {
    id: number
    titulo: string
    imagem: string | null
    texto: string
    autor_id: number | null
    data_publicacao: Date | null
    aprovado: boolean
    _count: NoticiaCountAggregateOutputType | null
    _avg: NoticiaAvgAggregateOutputType | null
    _sum: NoticiaSumAggregateOutputType | null
    _min: NoticiaMinAggregateOutputType | null
    _max: NoticiaMaxAggregateOutputType | null
  }

  type GetNoticiaGroupByPayload<T extends NoticiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticiaGroupByOutputType[P]>
            : GetScalarType<T[P], NoticiaGroupByOutputType[P]>
        }
      >
    >


  export type NoticiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    imagem?: boolean
    texto?: boolean
    autor_id?: boolean
    data_publicacao?: boolean
    aprovado?: boolean
    autor?: boolean | Noticia$autorArgs<ExtArgs>
  }, ExtArgs["result"]["noticia"]>

  export type NoticiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    imagem?: boolean
    texto?: boolean
    autor_id?: boolean
    data_publicacao?: boolean
    aprovado?: boolean
    autor?: boolean | Noticia$autorArgs<ExtArgs>
  }, ExtArgs["result"]["noticia"]>

  export type NoticiaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    imagem?: boolean
    texto?: boolean
    autor_id?: boolean
    data_publicacao?: boolean
    aprovado?: boolean
    autor?: boolean | Noticia$autorArgs<ExtArgs>
  }, ExtArgs["result"]["noticia"]>

  export type NoticiaSelectScalar = {
    id?: boolean
    titulo?: boolean
    imagem?: boolean
    texto?: boolean
    autor_id?: boolean
    data_publicacao?: boolean
    aprovado?: boolean
  }

  export type NoticiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "imagem" | "texto" | "autor_id" | "data_publicacao" | "aprovado", ExtArgs["result"]["noticia"]>
  export type NoticiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | Noticia$autorArgs<ExtArgs>
  }
  export type NoticiaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | Noticia$autorArgs<ExtArgs>
  }
  export type NoticiaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | Noticia$autorArgs<ExtArgs>
  }

  export type $NoticiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Noticia"
    objects: {
      autor: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      imagem: string | null
      texto: string
      autor_id: number | null
      data_publicacao: Date | null
      aprovado: boolean
    }, ExtArgs["result"]["noticia"]>
    composites: {}
  }

  type NoticiaGetPayload<S extends boolean | null | undefined | NoticiaDefaultArgs> = $Result.GetResult<Prisma.$NoticiaPayload, S>

  type NoticiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoticiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoticiaCountAggregateInputType | true
    }

  export interface NoticiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Noticia'], meta: { name: 'Noticia' } }
    /**
     * Find zero or one Noticia that matches the filter.
     * @param {NoticiaFindUniqueArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticiaFindUniqueArgs>(args: SelectSubset<T, NoticiaFindUniqueArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Noticia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoticiaFindUniqueOrThrowArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticiaFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Noticia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaFindFirstArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticiaFindFirstArgs>(args?: SelectSubset<T, NoticiaFindFirstArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Noticia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaFindFirstOrThrowArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticiaFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Noticias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Noticias
     * const noticias = await prisma.noticia.findMany()
     * 
     * // Get first 10 Noticias
     * const noticias = await prisma.noticia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticiaWithIdOnly = await prisma.noticia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticiaFindManyArgs>(args?: SelectSubset<T, NoticiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Noticia.
     * @param {NoticiaCreateArgs} args - Arguments to create a Noticia.
     * @example
     * // Create one Noticia
     * const Noticia = await prisma.noticia.create({
     *   data: {
     *     // ... data to create a Noticia
     *   }
     * })
     * 
     */
    create<T extends NoticiaCreateArgs>(args: SelectSubset<T, NoticiaCreateArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Noticias.
     * @param {NoticiaCreateManyArgs} args - Arguments to create many Noticias.
     * @example
     * // Create many Noticias
     * const noticia = await prisma.noticia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticiaCreateManyArgs>(args?: SelectSubset<T, NoticiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Noticias and returns the data saved in the database.
     * @param {NoticiaCreateManyAndReturnArgs} args - Arguments to create many Noticias.
     * @example
     * // Create many Noticias
     * const noticia = await prisma.noticia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Noticias and only return the `id`
     * const noticiaWithIdOnly = await prisma.noticia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoticiaCreateManyAndReturnArgs>(args?: SelectSubset<T, NoticiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Noticia.
     * @param {NoticiaDeleteArgs} args - Arguments to delete one Noticia.
     * @example
     * // Delete one Noticia
     * const Noticia = await prisma.noticia.delete({
     *   where: {
     *     // ... filter to delete one Noticia
     *   }
     * })
     * 
     */
    delete<T extends NoticiaDeleteArgs>(args: SelectSubset<T, NoticiaDeleteArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Noticia.
     * @param {NoticiaUpdateArgs} args - Arguments to update one Noticia.
     * @example
     * // Update one Noticia
     * const noticia = await prisma.noticia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticiaUpdateArgs>(args: SelectSubset<T, NoticiaUpdateArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Noticias.
     * @param {NoticiaDeleteManyArgs} args - Arguments to filter Noticias to delete.
     * @example
     * // Delete a few Noticias
     * const { count } = await prisma.noticia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticiaDeleteManyArgs>(args?: SelectSubset<T, NoticiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Noticias
     * const noticia = await prisma.noticia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticiaUpdateManyArgs>(args: SelectSubset<T, NoticiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noticias and returns the data updated in the database.
     * @param {NoticiaUpdateManyAndReturnArgs} args - Arguments to update many Noticias.
     * @example
     * // Update many Noticias
     * const noticia = await prisma.noticia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Noticias and only return the `id`
     * const noticiaWithIdOnly = await prisma.noticia.updateManyAndReturn({
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
    updateManyAndReturn<T extends NoticiaUpdateManyAndReturnArgs>(args: SelectSubset<T, NoticiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Noticia.
     * @param {NoticiaUpsertArgs} args - Arguments to update or create a Noticia.
     * @example
     * // Update or create a Noticia
     * const noticia = await prisma.noticia.upsert({
     *   create: {
     *     // ... data to create a Noticia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Noticia we want to update
     *   }
     * })
     */
    upsert<T extends NoticiaUpsertArgs>(args: SelectSubset<T, NoticiaUpsertArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaCountArgs} args - Arguments to filter Noticias to count.
     * @example
     * // Count the number of Noticias
     * const count = await prisma.noticia.count({
     *   where: {
     *     // ... the filter for the Noticias we want to count
     *   }
     * })
    **/
    count<T extends NoticiaCountArgs>(
      args?: Subset<T, NoticiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Noticia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticiaAggregateArgs>(args: Subset<T, NoticiaAggregateArgs>): Prisma.PrismaPromise<GetNoticiaAggregateType<T>>

    /**
     * Group by Noticia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaGroupByArgs} args - Group by arguments.
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
      T extends NoticiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticiaGroupByArgs['orderBy'] }
        : { orderBy?: NoticiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoticiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Noticia model
   */
  readonly fields: NoticiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Noticia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autor<T extends Noticia$autorArgs<ExtArgs> = {}>(args?: Subset<T, Noticia$autorArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Noticia model
   */
  interface NoticiaFieldRefs {
    readonly id: FieldRef<"Noticia", 'Int'>
    readonly titulo: FieldRef<"Noticia", 'String'>
    readonly imagem: FieldRef<"Noticia", 'String'>
    readonly texto: FieldRef<"Noticia", 'String'>
    readonly autor_id: FieldRef<"Noticia", 'Int'>
    readonly data_publicacao: FieldRef<"Noticia", 'DateTime'>
    readonly aprovado: FieldRef<"Noticia", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Noticia findUnique
   */
  export type NoticiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiaInclude<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia findUniqueOrThrow
   */
  export type NoticiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiaInclude<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia findFirst
   */
  export type NoticiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiaInclude<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Noticias.
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Noticias.
     */
    distinct?: NoticiaScalarFieldEnum | NoticiaScalarFieldEnum[]
  }

  /**
   * Noticia findFirstOrThrow
   */
  export type NoticiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiaInclude<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Noticias.
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Noticias.
     */
    distinct?: NoticiaScalarFieldEnum | NoticiaScalarFieldEnum[]
  }

  /**
   * Noticia findMany
   */
  export type NoticiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiaInclude<ExtArgs> | null
    /**
     * Filter, which Noticias to fetch.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Noticias.
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    distinct?: NoticiaScalarFieldEnum | NoticiaScalarFieldEnum[]
  }

  /**
   * Noticia create
   */
  export type NoticiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiaInclude<ExtArgs> | null
    /**
     * The data needed to create a Noticia.
     */
    data: XOR<NoticiaCreateInput, NoticiaUncheckedCreateInput>
  }

  /**
   * Noticia createMany
   */
  export type NoticiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Noticias.
     */
    data: NoticiaCreateManyInput | NoticiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Noticia createManyAndReturn
   */
  export type NoticiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The data used to create many Noticias.
     */
    data: NoticiaCreateManyInput | NoticiaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Noticia update
   */
  export type NoticiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiaInclude<ExtArgs> | null
    /**
     * The data needed to update a Noticia.
     */
    data: XOR<NoticiaUpdateInput, NoticiaUncheckedUpdateInput>
    /**
     * Choose, which Noticia to update.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia updateMany
   */
  export type NoticiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Noticias.
     */
    data: XOR<NoticiaUpdateManyMutationInput, NoticiaUncheckedUpdateManyInput>
    /**
     * Filter which Noticias to update
     */
    where?: NoticiaWhereInput
    /**
     * Limit how many Noticias to update.
     */
    limit?: number
  }

  /**
   * Noticia updateManyAndReturn
   */
  export type NoticiaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The data used to update Noticias.
     */
    data: XOR<NoticiaUpdateManyMutationInput, NoticiaUncheckedUpdateManyInput>
    /**
     * Filter which Noticias to update
     */
    where?: NoticiaWhereInput
    /**
     * Limit how many Noticias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Noticia upsert
   */
  export type NoticiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiaInclude<ExtArgs> | null
    /**
     * The filter to search for the Noticia to update in case it exists.
     */
    where: NoticiaWhereUniqueInput
    /**
     * In case the Noticia found by the `where` argument doesn't exist, create a new Noticia with this data.
     */
    create: XOR<NoticiaCreateInput, NoticiaUncheckedCreateInput>
    /**
     * In case the Noticia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticiaUpdateInput, NoticiaUncheckedUpdateInput>
  }

  /**
   * Noticia delete
   */
  export type NoticiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiaInclude<ExtArgs> | null
    /**
     * Filter which Noticia to delete.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia deleteMany
   */
  export type NoticiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Noticias to delete
     */
    where?: NoticiaWhereInput
    /**
     * Limit how many Noticias to delete.
     */
    limit?: number
  }

  /**
   * Noticia.autor
   */
  export type Noticia$autorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Noticia without action
   */
  export type NoticiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticiaInclude<ExtArgs> | null
  }


  /**
   * Model Agenda
   */

  export type AggregateAgenda = {
    _count: AgendaCountAggregateOutputType | null
    _avg: AgendaAvgAggregateOutputType | null
    _sum: AgendaSumAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  export type AgendaAvgAggregateOutputType = {
    id: number | null
  }

  export type AgendaSumAggregateOutputType = {
    id: number | null
  }

  export type AgendaMinAggregateOutputType = {
    id: number | null
    nome_evento: string | null
    data_evento: Date | null
  }

  export type AgendaMaxAggregateOutputType = {
    id: number | null
    nome_evento: string | null
    data_evento: Date | null
  }

  export type AgendaCountAggregateOutputType = {
    id: number
    nome_evento: number
    data_evento: number
    _all: number
  }


  export type AgendaAvgAggregateInputType = {
    id?: true
  }

  export type AgendaSumAggregateInputType = {
    id?: true
  }

  export type AgendaMinAggregateInputType = {
    id?: true
    nome_evento?: true
    data_evento?: true
  }

  export type AgendaMaxAggregateInputType = {
    id?: true
    nome_evento?: true
    data_evento?: true
  }

  export type AgendaCountAggregateInputType = {
    id?: true
    nome_evento?: true
    data_evento?: true
    _all?: true
  }

  export type AgendaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agenda to aggregate.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agenda
    **/
    _count?: true | AgendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendaMaxAggregateInputType
  }

  export type GetAgendaAggregateType<T extends AgendaAggregateArgs> = {
        [P in keyof T & keyof AggregateAgenda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgenda[P]>
      : GetScalarType<T[P], AggregateAgenda[P]>
  }




  export type AgendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendaWhereInput
    orderBy?: AgendaOrderByWithAggregationInput | AgendaOrderByWithAggregationInput[]
    by: AgendaScalarFieldEnum[] | AgendaScalarFieldEnum
    having?: AgendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendaCountAggregateInputType | true
    _avg?: AgendaAvgAggregateInputType
    _sum?: AgendaSumAggregateInputType
    _min?: AgendaMinAggregateInputType
    _max?: AgendaMaxAggregateInputType
  }

  export type AgendaGroupByOutputType = {
    id: number
    nome_evento: string
    data_evento: Date
    _count: AgendaCountAggregateOutputType | null
    _avg: AgendaAvgAggregateOutputType | null
    _sum: AgendaSumAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  type GetAgendaGroupByPayload<T extends AgendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendaGroupByOutputType[P]>
            : GetScalarType<T[P], AgendaGroupByOutputType[P]>
        }
      >
    >


  export type AgendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_evento?: boolean
    data_evento?: boolean
  }, ExtArgs["result"]["agenda"]>

  export type AgendaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_evento?: boolean
    data_evento?: boolean
  }, ExtArgs["result"]["agenda"]>

  export type AgendaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_evento?: boolean
    data_evento?: boolean
  }, ExtArgs["result"]["agenda"]>

  export type AgendaSelectScalar = {
    id?: boolean
    nome_evento?: boolean
    data_evento?: boolean
  }

  export type AgendaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_evento" | "data_evento", ExtArgs["result"]["agenda"]>

  export type $AgendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agenda"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_evento: string
      data_evento: Date
    }, ExtArgs["result"]["agenda"]>
    composites: {}
  }

  type AgendaGetPayload<S extends boolean | null | undefined | AgendaDefaultArgs> = $Result.GetResult<Prisma.$AgendaPayload, S>

  type AgendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendaCountAggregateInputType | true
    }

  export interface AgendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agenda'], meta: { name: 'Agenda' } }
    /**
     * Find zero or one Agenda that matches the filter.
     * @param {AgendaFindUniqueArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgendaFindUniqueArgs>(args: SelectSubset<T, AgendaFindUniqueArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agenda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgendaFindUniqueOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgendaFindUniqueOrThrowArgs>(args: SelectSubset<T, AgendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindFirstArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgendaFindFirstArgs>(args?: SelectSubset<T, AgendaFindFirstArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindFirstOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgendaFindFirstOrThrowArgs>(args?: SelectSubset<T, AgendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agenda
     * const agenda = await prisma.agenda.findMany()
     * 
     * // Get first 10 Agenda
     * const agenda = await prisma.agenda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendaWithIdOnly = await prisma.agenda.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgendaFindManyArgs>(args?: SelectSubset<T, AgendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agenda.
     * @param {AgendaCreateArgs} args - Arguments to create a Agenda.
     * @example
     * // Create one Agenda
     * const Agenda = await prisma.agenda.create({
     *   data: {
     *     // ... data to create a Agenda
     *   }
     * })
     * 
     */
    create<T extends AgendaCreateArgs>(args: SelectSubset<T, AgendaCreateArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agenda.
     * @param {AgendaCreateManyArgs} args - Arguments to create many Agenda.
     * @example
     * // Create many Agenda
     * const agenda = await prisma.agenda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgendaCreateManyArgs>(args?: SelectSubset<T, AgendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agenda and returns the data saved in the database.
     * @param {AgendaCreateManyAndReturnArgs} args - Arguments to create many Agenda.
     * @example
     * // Create many Agenda
     * const agenda = await prisma.agenda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agenda and only return the `id`
     * const agendaWithIdOnly = await prisma.agenda.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgendaCreateManyAndReturnArgs>(args?: SelectSubset<T, AgendaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agenda.
     * @param {AgendaDeleteArgs} args - Arguments to delete one Agenda.
     * @example
     * // Delete one Agenda
     * const Agenda = await prisma.agenda.delete({
     *   where: {
     *     // ... filter to delete one Agenda
     *   }
     * })
     * 
     */
    delete<T extends AgendaDeleteArgs>(args: SelectSubset<T, AgendaDeleteArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agenda.
     * @param {AgendaUpdateArgs} args - Arguments to update one Agenda.
     * @example
     * // Update one Agenda
     * const agenda = await prisma.agenda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgendaUpdateArgs>(args: SelectSubset<T, AgendaUpdateArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agenda.
     * @param {AgendaDeleteManyArgs} args - Arguments to filter Agenda to delete.
     * @example
     * // Delete a few Agenda
     * const { count } = await prisma.agenda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgendaDeleteManyArgs>(args?: SelectSubset<T, AgendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agenda
     * const agenda = await prisma.agenda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgendaUpdateManyArgs>(args: SelectSubset<T, AgendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda and returns the data updated in the database.
     * @param {AgendaUpdateManyAndReturnArgs} args - Arguments to update many Agenda.
     * @example
     * // Update many Agenda
     * const agenda = await prisma.agenda.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agenda and only return the `id`
     * const agendaWithIdOnly = await prisma.agenda.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgendaUpdateManyAndReturnArgs>(args: SelectSubset<T, AgendaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agenda.
     * @param {AgendaUpsertArgs} args - Arguments to update or create a Agenda.
     * @example
     * // Update or create a Agenda
     * const agenda = await prisma.agenda.upsert({
     *   create: {
     *     // ... data to create a Agenda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agenda we want to update
     *   }
     * })
     */
    upsert<T extends AgendaUpsertArgs>(args: SelectSubset<T, AgendaUpsertArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaCountArgs} args - Arguments to filter Agenda to count.
     * @example
     * // Count the number of Agenda
     * const count = await prisma.agenda.count({
     *   where: {
     *     // ... the filter for the Agenda we want to count
     *   }
     * })
    **/
    count<T extends AgendaCountArgs>(
      args?: Subset<T, AgendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgendaAggregateArgs>(args: Subset<T, AgendaAggregateArgs>): Prisma.PrismaPromise<GetAgendaAggregateType<T>>

    /**
     * Group by Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaGroupByArgs} args - Group by arguments.
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
      T extends AgendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendaGroupByArgs['orderBy'] }
        : { orderBy?: AgendaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agenda model
   */
  readonly fields: AgendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agenda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Agenda model
   */
  interface AgendaFieldRefs {
    readonly id: FieldRef<"Agenda", 'Int'>
    readonly nome_evento: FieldRef<"Agenda", 'String'>
    readonly data_evento: FieldRef<"Agenda", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agenda findUnique
   */
  export type AgendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda findUniqueOrThrow
   */
  export type AgendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda findFirst
   */
  export type AgendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Agenda findFirstOrThrow
   */
  export type AgendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Agenda findMany
   */
  export type AgendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Agenda create
   */
  export type AgendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * The data needed to create a Agenda.
     */
    data: XOR<AgendaCreateInput, AgendaUncheckedCreateInput>
  }

  /**
   * Agenda createMany
   */
  export type AgendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agenda.
     */
    data: AgendaCreateManyInput | AgendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agenda createManyAndReturn
   */
  export type AgendaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * The data used to create many Agenda.
     */
    data: AgendaCreateManyInput | AgendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agenda update
   */
  export type AgendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * The data needed to update a Agenda.
     */
    data: XOR<AgendaUpdateInput, AgendaUncheckedUpdateInput>
    /**
     * Choose, which Agenda to update.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda updateMany
   */
  export type AgendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agenda.
     */
    data: XOR<AgendaUpdateManyMutationInput, AgendaUncheckedUpdateManyInput>
    /**
     * Filter which Agenda to update
     */
    where?: AgendaWhereInput
    /**
     * Limit how many Agenda to update.
     */
    limit?: number
  }

  /**
   * Agenda updateManyAndReturn
   */
  export type AgendaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * The data used to update Agenda.
     */
    data: XOR<AgendaUpdateManyMutationInput, AgendaUncheckedUpdateManyInput>
    /**
     * Filter which Agenda to update
     */
    where?: AgendaWhereInput
    /**
     * Limit how many Agenda to update.
     */
    limit?: number
  }

  /**
   * Agenda upsert
   */
  export type AgendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * The filter to search for the Agenda to update in case it exists.
     */
    where: AgendaWhereUniqueInput
    /**
     * In case the Agenda found by the `where` argument doesn't exist, create a new Agenda with this data.
     */
    create: XOR<AgendaCreateInput, AgendaUncheckedCreateInput>
    /**
     * In case the Agenda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendaUpdateInput, AgendaUncheckedUpdateInput>
  }

  /**
   * Agenda delete
   */
  export type AgendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Filter which Agenda to delete.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda deleteMany
   */
  export type AgendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agenda to delete
     */
    where?: AgendaWhereInput
    /**
     * Limit how many Agenda to delete.
     */
    limit?: number
  }

  /**
   * Agenda without action
   */
  export type AgendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
  }


  /**
   * Model Membro
   */

  export type AggregateMembro = {
    _count: MembroCountAggregateOutputType | null
    _avg: MembroAvgAggregateOutputType | null
    _sum: MembroSumAggregateOutputType | null
    _min: MembroMinAggregateOutputType | null
    _max: MembroMaxAggregateOutputType | null
  }

  export type MembroAvgAggregateOutputType = {
    id: number | null
    igreja_id: number | null
  }

  export type MembroSumAggregateOutputType = {
    id: number | null
    igreja_id: number | null
  }

  export type MembroMinAggregateOutputType = {
    id: number | null
    nome_completo: string | null
    funcao: $Enums.Funcao | null
    data_nascimento: Date | null
    data_batismo: Date | null
    data_ingresso_ministerio: Date | null
    cidade: string | null
    estado: string | null
    telefone: string | null
    estado_civil: string | null
    naturalidade: string | null
    rg: string | null
    sexo: $Enums.Sexo | null
    ativo: boolean | null
    igreja_id: number | null
  }

  export type MembroMaxAggregateOutputType = {
    id: number | null
    nome_completo: string | null
    funcao: $Enums.Funcao | null
    data_nascimento: Date | null
    data_batismo: Date | null
    data_ingresso_ministerio: Date | null
    cidade: string | null
    estado: string | null
    telefone: string | null
    estado_civil: string | null
    naturalidade: string | null
    rg: string | null
    sexo: $Enums.Sexo | null
    ativo: boolean | null
    igreja_id: number | null
  }

  export type MembroCountAggregateOutputType = {
    id: number
    nome_completo: number
    funcao: number
    data_nascimento: number
    data_batismo: number
    data_ingresso_ministerio: number
    cidade: number
    estado: number
    telefone: number
    estado_civil: number
    naturalidade: number
    rg: number
    sexo: number
    ativo: number
    igreja_id: number
    _all: number
  }


  export type MembroAvgAggregateInputType = {
    id?: true
    igreja_id?: true
  }

  export type MembroSumAggregateInputType = {
    id?: true
    igreja_id?: true
  }

  export type MembroMinAggregateInputType = {
    id?: true
    nome_completo?: true
    funcao?: true
    data_nascimento?: true
    data_batismo?: true
    data_ingresso_ministerio?: true
    cidade?: true
    estado?: true
    telefone?: true
    estado_civil?: true
    naturalidade?: true
    rg?: true
    sexo?: true
    ativo?: true
    igreja_id?: true
  }

  export type MembroMaxAggregateInputType = {
    id?: true
    nome_completo?: true
    funcao?: true
    data_nascimento?: true
    data_batismo?: true
    data_ingresso_ministerio?: true
    cidade?: true
    estado?: true
    telefone?: true
    estado_civil?: true
    naturalidade?: true
    rg?: true
    sexo?: true
    ativo?: true
    igreja_id?: true
  }

  export type MembroCountAggregateInputType = {
    id?: true
    nome_completo?: true
    funcao?: true
    data_nascimento?: true
    data_batismo?: true
    data_ingresso_ministerio?: true
    cidade?: true
    estado?: true
    telefone?: true
    estado_civil?: true
    naturalidade?: true
    rg?: true
    sexo?: true
    ativo?: true
    igreja_id?: true
    _all?: true
  }

  export type MembroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membro to aggregate.
     */
    where?: MembroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membros to fetch.
     */
    orderBy?: MembroOrderByWithRelationInput | MembroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Membros
    **/
    _count?: true | MembroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembroMaxAggregateInputType
  }

  export type GetMembroAggregateType<T extends MembroAggregateArgs> = {
        [P in keyof T & keyof AggregateMembro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembro[P]>
      : GetScalarType<T[P], AggregateMembro[P]>
  }




  export type MembroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembroWhereInput
    orderBy?: MembroOrderByWithAggregationInput | MembroOrderByWithAggregationInput[]
    by: MembroScalarFieldEnum[] | MembroScalarFieldEnum
    having?: MembroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembroCountAggregateInputType | true
    _avg?: MembroAvgAggregateInputType
    _sum?: MembroSumAggregateInputType
    _min?: MembroMinAggregateInputType
    _max?: MembroMaxAggregateInputType
  }

  export type MembroGroupByOutputType = {
    id: number
    nome_completo: string
    funcao: $Enums.Funcao
    data_nascimento: Date | null
    data_batismo: Date | null
    data_ingresso_ministerio: Date | null
    cidade: string | null
    estado: string | null
    telefone: string | null
    estado_civil: string | null
    naturalidade: string | null
    rg: string | null
    sexo: $Enums.Sexo | null
    ativo: boolean
    igreja_id: number | null
    _count: MembroCountAggregateOutputType | null
    _avg: MembroAvgAggregateOutputType | null
    _sum: MembroSumAggregateOutputType | null
    _min: MembroMinAggregateOutputType | null
    _max: MembroMaxAggregateOutputType | null
  }

  type GetMembroGroupByPayload<T extends MembroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembroGroupByOutputType[P]>
            : GetScalarType<T[P], MembroGroupByOutputType[P]>
        }
      >
    >


  export type MembroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_completo?: boolean
    funcao?: boolean
    data_nascimento?: boolean
    data_batismo?: boolean
    data_ingresso_ministerio?: boolean
    cidade?: boolean
    estado?: boolean
    telefone?: boolean
    estado_civil?: boolean
    naturalidade?: boolean
    rg?: boolean
    sexo?: boolean
    ativo?: boolean
    igreja_id?: boolean
    igreja?: boolean | Membro$igrejaArgs<ExtArgs>
  }, ExtArgs["result"]["membro"]>

  export type MembroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_completo?: boolean
    funcao?: boolean
    data_nascimento?: boolean
    data_batismo?: boolean
    data_ingresso_ministerio?: boolean
    cidade?: boolean
    estado?: boolean
    telefone?: boolean
    estado_civil?: boolean
    naturalidade?: boolean
    rg?: boolean
    sexo?: boolean
    ativo?: boolean
    igreja_id?: boolean
    igreja?: boolean | Membro$igrejaArgs<ExtArgs>
  }, ExtArgs["result"]["membro"]>

  export type MembroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_completo?: boolean
    funcao?: boolean
    data_nascimento?: boolean
    data_batismo?: boolean
    data_ingresso_ministerio?: boolean
    cidade?: boolean
    estado?: boolean
    telefone?: boolean
    estado_civil?: boolean
    naturalidade?: boolean
    rg?: boolean
    sexo?: boolean
    ativo?: boolean
    igreja_id?: boolean
    igreja?: boolean | Membro$igrejaArgs<ExtArgs>
  }, ExtArgs["result"]["membro"]>

  export type MembroSelectScalar = {
    id?: boolean
    nome_completo?: boolean
    funcao?: boolean
    data_nascimento?: boolean
    data_batismo?: boolean
    data_ingresso_ministerio?: boolean
    cidade?: boolean
    estado?: boolean
    telefone?: boolean
    estado_civil?: boolean
    naturalidade?: boolean
    rg?: boolean
    sexo?: boolean
    ativo?: boolean
    igreja_id?: boolean
  }

  export type MembroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_completo" | "funcao" | "data_nascimento" | "data_batismo" | "data_ingresso_ministerio" | "cidade" | "estado" | "telefone" | "estado_civil" | "naturalidade" | "rg" | "sexo" | "ativo" | "igreja_id", ExtArgs["result"]["membro"]>
  export type MembroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    igreja?: boolean | Membro$igrejaArgs<ExtArgs>
  }
  export type MembroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    igreja?: boolean | Membro$igrejaArgs<ExtArgs>
  }
  export type MembroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    igreja?: boolean | Membro$igrejaArgs<ExtArgs>
  }

  export type $MembroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Membro"
    objects: {
      igreja: Prisma.$IgrejaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_completo: string
      funcao: $Enums.Funcao
      data_nascimento: Date | null
      data_batismo: Date | null
      data_ingresso_ministerio: Date | null
      cidade: string | null
      estado: string | null
      telefone: string | null
      estado_civil: string | null
      naturalidade: string | null
      rg: string | null
      sexo: $Enums.Sexo | null
      ativo: boolean
      igreja_id: number | null
    }, ExtArgs["result"]["membro"]>
    composites: {}
  }

  type MembroGetPayload<S extends boolean | null | undefined | MembroDefaultArgs> = $Result.GetResult<Prisma.$MembroPayload, S>

  type MembroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembroCountAggregateInputType | true
    }

  export interface MembroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Membro'], meta: { name: 'Membro' } }
    /**
     * Find zero or one Membro that matches the filter.
     * @param {MembroFindUniqueArgs} args - Arguments to find a Membro
     * @example
     * // Get one Membro
     * const membro = await prisma.membro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembroFindUniqueArgs>(args: SelectSubset<T, MembroFindUniqueArgs<ExtArgs>>): Prisma__MembroClient<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Membro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembroFindUniqueOrThrowArgs} args - Arguments to find a Membro
     * @example
     * // Get one Membro
     * const membro = await prisma.membro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembroFindUniqueOrThrowArgs>(args: SelectSubset<T, MembroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembroClient<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Membro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembroFindFirstArgs} args - Arguments to find a Membro
     * @example
     * // Get one Membro
     * const membro = await prisma.membro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembroFindFirstArgs>(args?: SelectSubset<T, MembroFindFirstArgs<ExtArgs>>): Prisma__MembroClient<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Membro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembroFindFirstOrThrowArgs} args - Arguments to find a Membro
     * @example
     * // Get one Membro
     * const membro = await prisma.membro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembroFindFirstOrThrowArgs>(args?: SelectSubset<T, MembroFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembroClient<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Membros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Membros
     * const membros = await prisma.membro.findMany()
     * 
     * // Get first 10 Membros
     * const membros = await prisma.membro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membroWithIdOnly = await prisma.membro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembroFindManyArgs>(args?: SelectSubset<T, MembroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Membro.
     * @param {MembroCreateArgs} args - Arguments to create a Membro.
     * @example
     * // Create one Membro
     * const Membro = await prisma.membro.create({
     *   data: {
     *     // ... data to create a Membro
     *   }
     * })
     * 
     */
    create<T extends MembroCreateArgs>(args: SelectSubset<T, MembroCreateArgs<ExtArgs>>): Prisma__MembroClient<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Membros.
     * @param {MembroCreateManyArgs} args - Arguments to create many Membros.
     * @example
     * // Create many Membros
     * const membro = await prisma.membro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembroCreateManyArgs>(args?: SelectSubset<T, MembroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Membros and returns the data saved in the database.
     * @param {MembroCreateManyAndReturnArgs} args - Arguments to create many Membros.
     * @example
     * // Create many Membros
     * const membro = await prisma.membro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Membros and only return the `id`
     * const membroWithIdOnly = await prisma.membro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembroCreateManyAndReturnArgs>(args?: SelectSubset<T, MembroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Membro.
     * @param {MembroDeleteArgs} args - Arguments to delete one Membro.
     * @example
     * // Delete one Membro
     * const Membro = await prisma.membro.delete({
     *   where: {
     *     // ... filter to delete one Membro
     *   }
     * })
     * 
     */
    delete<T extends MembroDeleteArgs>(args: SelectSubset<T, MembroDeleteArgs<ExtArgs>>): Prisma__MembroClient<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Membro.
     * @param {MembroUpdateArgs} args - Arguments to update one Membro.
     * @example
     * // Update one Membro
     * const membro = await prisma.membro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembroUpdateArgs>(args: SelectSubset<T, MembroUpdateArgs<ExtArgs>>): Prisma__MembroClient<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Membros.
     * @param {MembroDeleteManyArgs} args - Arguments to filter Membros to delete.
     * @example
     * // Delete a few Membros
     * const { count } = await prisma.membro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembroDeleteManyArgs>(args?: SelectSubset<T, MembroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Membros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Membros
     * const membro = await prisma.membro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembroUpdateManyArgs>(args: SelectSubset<T, MembroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Membros and returns the data updated in the database.
     * @param {MembroUpdateManyAndReturnArgs} args - Arguments to update many Membros.
     * @example
     * // Update many Membros
     * const membro = await prisma.membro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Membros and only return the `id`
     * const membroWithIdOnly = await prisma.membro.updateManyAndReturn({
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
    updateManyAndReturn<T extends MembroUpdateManyAndReturnArgs>(args: SelectSubset<T, MembroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Membro.
     * @param {MembroUpsertArgs} args - Arguments to update or create a Membro.
     * @example
     * // Update or create a Membro
     * const membro = await prisma.membro.upsert({
     *   create: {
     *     // ... data to create a Membro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Membro we want to update
     *   }
     * })
     */
    upsert<T extends MembroUpsertArgs>(args: SelectSubset<T, MembroUpsertArgs<ExtArgs>>): Prisma__MembroClient<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Membros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembroCountArgs} args - Arguments to filter Membros to count.
     * @example
     * // Count the number of Membros
     * const count = await prisma.membro.count({
     *   where: {
     *     // ... the filter for the Membros we want to count
     *   }
     * })
    **/
    count<T extends MembroCountArgs>(
      args?: Subset<T, MembroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Membro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembroAggregateArgs>(args: Subset<T, MembroAggregateArgs>): Prisma.PrismaPromise<GetMembroAggregateType<T>>

    /**
     * Group by Membro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembroGroupByArgs} args - Group by arguments.
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
      T extends MembroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembroGroupByArgs['orderBy'] }
        : { orderBy?: MembroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Membro model
   */
  readonly fields: MembroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Membro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    igreja<T extends Membro$igrejaArgs<ExtArgs> = {}>(args?: Subset<T, Membro$igrejaArgs<ExtArgs>>): Prisma__IgrejaClient<$Result.GetResult<Prisma.$IgrejaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Membro model
   */
  interface MembroFieldRefs {
    readonly id: FieldRef<"Membro", 'Int'>
    readonly nome_completo: FieldRef<"Membro", 'String'>
    readonly funcao: FieldRef<"Membro", 'Funcao'>
    readonly data_nascimento: FieldRef<"Membro", 'DateTime'>
    readonly data_batismo: FieldRef<"Membro", 'DateTime'>
    readonly data_ingresso_ministerio: FieldRef<"Membro", 'DateTime'>
    readonly cidade: FieldRef<"Membro", 'String'>
    readonly estado: FieldRef<"Membro", 'String'>
    readonly telefone: FieldRef<"Membro", 'String'>
    readonly estado_civil: FieldRef<"Membro", 'String'>
    readonly naturalidade: FieldRef<"Membro", 'String'>
    readonly rg: FieldRef<"Membro", 'String'>
    readonly sexo: FieldRef<"Membro", 'Sexo'>
    readonly ativo: FieldRef<"Membro", 'Boolean'>
    readonly igreja_id: FieldRef<"Membro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Membro findUnique
   */
  export type MembroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * Filter, which Membro to fetch.
     */
    where: MembroWhereUniqueInput
  }

  /**
   * Membro findUniqueOrThrow
   */
  export type MembroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * Filter, which Membro to fetch.
     */
    where: MembroWhereUniqueInput
  }

  /**
   * Membro findFirst
   */
  export type MembroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * Filter, which Membro to fetch.
     */
    where?: MembroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membros to fetch.
     */
    orderBy?: MembroOrderByWithRelationInput | MembroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Membros.
     */
    cursor?: MembroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Membros.
     */
    distinct?: MembroScalarFieldEnum | MembroScalarFieldEnum[]
  }

  /**
   * Membro findFirstOrThrow
   */
  export type MembroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * Filter, which Membro to fetch.
     */
    where?: MembroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membros to fetch.
     */
    orderBy?: MembroOrderByWithRelationInput | MembroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Membros.
     */
    cursor?: MembroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Membros.
     */
    distinct?: MembroScalarFieldEnum | MembroScalarFieldEnum[]
  }

  /**
   * Membro findMany
   */
  export type MembroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * Filter, which Membros to fetch.
     */
    where?: MembroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membros to fetch.
     */
    orderBy?: MembroOrderByWithRelationInput | MembroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Membros.
     */
    cursor?: MembroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membros.
     */
    skip?: number
    distinct?: MembroScalarFieldEnum | MembroScalarFieldEnum[]
  }

  /**
   * Membro create
   */
  export type MembroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * The data needed to create a Membro.
     */
    data: XOR<MembroCreateInput, MembroUncheckedCreateInput>
  }

  /**
   * Membro createMany
   */
  export type MembroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Membros.
     */
    data: MembroCreateManyInput | MembroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Membro createManyAndReturn
   */
  export type MembroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * The data used to create many Membros.
     */
    data: MembroCreateManyInput | MembroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membro update
   */
  export type MembroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * The data needed to update a Membro.
     */
    data: XOR<MembroUpdateInput, MembroUncheckedUpdateInput>
    /**
     * Choose, which Membro to update.
     */
    where: MembroWhereUniqueInput
  }

  /**
   * Membro updateMany
   */
  export type MembroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Membros.
     */
    data: XOR<MembroUpdateManyMutationInput, MembroUncheckedUpdateManyInput>
    /**
     * Filter which Membros to update
     */
    where?: MembroWhereInput
    /**
     * Limit how many Membros to update.
     */
    limit?: number
  }

  /**
   * Membro updateManyAndReturn
   */
  export type MembroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * The data used to update Membros.
     */
    data: XOR<MembroUpdateManyMutationInput, MembroUncheckedUpdateManyInput>
    /**
     * Filter which Membros to update
     */
    where?: MembroWhereInput
    /**
     * Limit how many Membros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membro upsert
   */
  export type MembroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * The filter to search for the Membro to update in case it exists.
     */
    where: MembroWhereUniqueInput
    /**
     * In case the Membro found by the `where` argument doesn't exist, create a new Membro with this data.
     */
    create: XOR<MembroCreateInput, MembroUncheckedCreateInput>
    /**
     * In case the Membro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembroUpdateInput, MembroUncheckedUpdateInput>
  }

  /**
   * Membro delete
   */
  export type MembroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * Filter which Membro to delete.
     */
    where: MembroWhereUniqueInput
  }

  /**
   * Membro deleteMany
   */
  export type MembroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membros to delete
     */
    where?: MembroWhereInput
    /**
     * Limit how many Membros to delete.
     */
    limit?: number
  }

  /**
   * Membro.igreja
   */
  export type Membro$igrejaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igreja
     */
    select?: IgrejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igreja
     */
    omit?: IgrejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgrejaInclude<ExtArgs> | null
    where?: IgrejaWhereInput
  }

  /**
   * Membro without action
   */
  export type MembroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
  }


  /**
   * Model Permissao
   */

  export type AggregatePermissao = {
    _count: PermissaoCountAggregateOutputType | null
    _avg: PermissaoAvgAggregateOutputType | null
    _sum: PermissaoSumAggregateOutputType | null
    _min: PermissaoMinAggregateOutputType | null
    _max: PermissaoMaxAggregateOutputType | null
  }

  export type PermissaoAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type PermissaoSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type PermissaoMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    permissao: $Enums.PermissaoTipo | null
  }

  export type PermissaoMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    permissao: $Enums.PermissaoTipo | null
  }

  export type PermissaoCountAggregateOutputType = {
    id: number
    usuario_id: number
    permissao: number
    _all: number
  }


  export type PermissaoAvgAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type PermissaoSumAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type PermissaoMinAggregateInputType = {
    id?: true
    usuario_id?: true
    permissao?: true
  }

  export type PermissaoMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    permissao?: true
  }

  export type PermissaoCountAggregateInputType = {
    id?: true
    usuario_id?: true
    permissao?: true
    _all?: true
  }

  export type PermissaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissao to aggregate.
     */
    where?: PermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissaos to fetch.
     */
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissaos
    **/
    _count?: true | PermissaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissaoMaxAggregateInputType
  }

  export type GetPermissaoAggregateType<T extends PermissaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissao[P]>
      : GetScalarType<T[P], AggregatePermissao[P]>
  }




  export type PermissaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissaoWhereInput
    orderBy?: PermissaoOrderByWithAggregationInput | PermissaoOrderByWithAggregationInput[]
    by: PermissaoScalarFieldEnum[] | PermissaoScalarFieldEnum
    having?: PermissaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissaoCountAggregateInputType | true
    _avg?: PermissaoAvgAggregateInputType
    _sum?: PermissaoSumAggregateInputType
    _min?: PermissaoMinAggregateInputType
    _max?: PermissaoMaxAggregateInputType
  }

  export type PermissaoGroupByOutputType = {
    id: number
    usuario_id: number
    permissao: $Enums.PermissaoTipo
    _count: PermissaoCountAggregateOutputType | null
    _avg: PermissaoAvgAggregateOutputType | null
    _sum: PermissaoSumAggregateOutputType | null
    _min: PermissaoMinAggregateOutputType | null
    _max: PermissaoMaxAggregateOutputType | null
  }

  type GetPermissaoGroupByPayload<T extends PermissaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissaoGroupByOutputType[P]>
            : GetScalarType<T[P], PermissaoGroupByOutputType[P]>
        }
      >
    >


  export type PermissaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    permissao?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissao"]>

  export type PermissaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    permissao?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissao"]>

  export type PermissaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    permissao?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissao"]>

  export type PermissaoSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    permissao?: boolean
  }

  export type PermissaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "permissao", ExtArgs["result"]["permissao"]>
  export type PermissaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PermissaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PermissaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PermissaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permissao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number
      permissao: $Enums.PermissaoTipo
    }, ExtArgs["result"]["permissao"]>
    composites: {}
  }

  type PermissaoGetPayload<S extends boolean | null | undefined | PermissaoDefaultArgs> = $Result.GetResult<Prisma.$PermissaoPayload, S>

  type PermissaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissaoCountAggregateInputType | true
    }

  export interface PermissaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permissao'], meta: { name: 'Permissao' } }
    /**
     * Find zero or one Permissao that matches the filter.
     * @param {PermissaoFindUniqueArgs} args - Arguments to find a Permissao
     * @example
     * // Get one Permissao
     * const permissao = await prisma.permissao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissaoFindUniqueArgs>(args: SelectSubset<T, PermissaoFindUniqueArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permissao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissaoFindUniqueOrThrowArgs} args - Arguments to find a Permissao
     * @example
     * // Get one Permissao
     * const permissao = await prisma.permissao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoFindFirstArgs} args - Arguments to find a Permissao
     * @example
     * // Get one Permissao
     * const permissao = await prisma.permissao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissaoFindFirstArgs>(args?: SelectSubset<T, PermissaoFindFirstArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoFindFirstOrThrowArgs} args - Arguments to find a Permissao
     * @example
     * // Get one Permissao
     * const permissao = await prisma.permissao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissaos
     * const permissaos = await prisma.permissao.findMany()
     * 
     * // Get first 10 Permissaos
     * const permissaos = await prisma.permissao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissaoWithIdOnly = await prisma.permissao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissaoFindManyArgs>(args?: SelectSubset<T, PermissaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permissao.
     * @param {PermissaoCreateArgs} args - Arguments to create a Permissao.
     * @example
     * // Create one Permissao
     * const Permissao = await prisma.permissao.create({
     *   data: {
     *     // ... data to create a Permissao
     *   }
     * })
     * 
     */
    create<T extends PermissaoCreateArgs>(args: SelectSubset<T, PermissaoCreateArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissaos.
     * @param {PermissaoCreateManyArgs} args - Arguments to create many Permissaos.
     * @example
     * // Create many Permissaos
     * const permissao = await prisma.permissao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissaoCreateManyArgs>(args?: SelectSubset<T, PermissaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissaos and returns the data saved in the database.
     * @param {PermissaoCreateManyAndReturnArgs} args - Arguments to create many Permissaos.
     * @example
     * // Create many Permissaos
     * const permissao = await prisma.permissao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissaos and only return the `id`
     * const permissaoWithIdOnly = await prisma.permissao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissaoCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permissao.
     * @param {PermissaoDeleteArgs} args - Arguments to delete one Permissao.
     * @example
     * // Delete one Permissao
     * const Permissao = await prisma.permissao.delete({
     *   where: {
     *     // ... filter to delete one Permissao
     *   }
     * })
     * 
     */
    delete<T extends PermissaoDeleteArgs>(args: SelectSubset<T, PermissaoDeleteArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permissao.
     * @param {PermissaoUpdateArgs} args - Arguments to update one Permissao.
     * @example
     * // Update one Permissao
     * const permissao = await prisma.permissao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissaoUpdateArgs>(args: SelectSubset<T, PermissaoUpdateArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissaos.
     * @param {PermissaoDeleteManyArgs} args - Arguments to filter Permissaos to delete.
     * @example
     * // Delete a few Permissaos
     * const { count } = await prisma.permissao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissaoDeleteManyArgs>(args?: SelectSubset<T, PermissaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissaos
     * const permissao = await prisma.permissao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissaoUpdateManyArgs>(args: SelectSubset<T, PermissaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissaos and returns the data updated in the database.
     * @param {PermissaoUpdateManyAndReturnArgs} args - Arguments to update many Permissaos.
     * @example
     * // Update many Permissaos
     * const permissao = await prisma.permissao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissaos and only return the `id`
     * const permissaoWithIdOnly = await prisma.permissao.updateManyAndReturn({
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
    updateManyAndReturn<T extends PermissaoUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permissao.
     * @param {PermissaoUpsertArgs} args - Arguments to update or create a Permissao.
     * @example
     * // Update or create a Permissao
     * const permissao = await prisma.permissao.upsert({
     *   create: {
     *     // ... data to create a Permissao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permissao we want to update
     *   }
     * })
     */
    upsert<T extends PermissaoUpsertArgs>(args: SelectSubset<T, PermissaoUpsertArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoCountArgs} args - Arguments to filter Permissaos to count.
     * @example
     * // Count the number of Permissaos
     * const count = await prisma.permissao.count({
     *   where: {
     *     // ... the filter for the Permissaos we want to count
     *   }
     * })
    **/
    count<T extends PermissaoCountArgs>(
      args?: Subset<T, PermissaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permissao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissaoAggregateArgs>(args: Subset<T, PermissaoAggregateArgs>): Prisma.PrismaPromise<GetPermissaoAggregateType<T>>

    /**
     * Group by Permissao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoGroupByArgs} args - Group by arguments.
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
      T extends PermissaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissaoGroupByArgs['orderBy'] }
        : { orderBy?: PermissaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permissao model
   */
  readonly fields: PermissaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permissao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Permissao model
   */
  interface PermissaoFieldRefs {
    readonly id: FieldRef<"Permissao", 'Int'>
    readonly usuario_id: FieldRef<"Permissao", 'Int'>
    readonly permissao: FieldRef<"Permissao", 'PermissaoTipo'>
  }
    

  // Custom InputTypes
  /**
   * Permissao findUnique
   */
  export type PermissaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissao to fetch.
     */
    where: PermissaoWhereUniqueInput
  }

  /**
   * Permissao findUniqueOrThrow
   */
  export type PermissaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissao to fetch.
     */
    where: PermissaoWhereUniqueInput
  }

  /**
   * Permissao findFirst
   */
  export type PermissaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissao to fetch.
     */
    where?: PermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissaos to fetch.
     */
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissaos.
     */
    cursor?: PermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissaos.
     */
    distinct?: PermissaoScalarFieldEnum | PermissaoScalarFieldEnum[]
  }

  /**
   * Permissao findFirstOrThrow
   */
  export type PermissaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissao to fetch.
     */
    where?: PermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissaos to fetch.
     */
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissaos.
     */
    cursor?: PermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissaos.
     */
    distinct?: PermissaoScalarFieldEnum | PermissaoScalarFieldEnum[]
  }

  /**
   * Permissao findMany
   */
  export type PermissaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissaos to fetch.
     */
    where?: PermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissaos to fetch.
     */
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissaos.
     */
    cursor?: PermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissaos.
     */
    skip?: number
    distinct?: PermissaoScalarFieldEnum | PermissaoScalarFieldEnum[]
  }

  /**
   * Permissao create
   */
  export type PermissaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Permissao.
     */
    data: XOR<PermissaoCreateInput, PermissaoUncheckedCreateInput>
  }

  /**
   * Permissao createMany
   */
  export type PermissaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissaos.
     */
    data: PermissaoCreateManyInput | PermissaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permissao createManyAndReturn
   */
  export type PermissaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * The data used to create many Permissaos.
     */
    data: PermissaoCreateManyInput | PermissaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Permissao update
   */
  export type PermissaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Permissao.
     */
    data: XOR<PermissaoUpdateInput, PermissaoUncheckedUpdateInput>
    /**
     * Choose, which Permissao to update.
     */
    where: PermissaoWhereUniqueInput
  }

  /**
   * Permissao updateMany
   */
  export type PermissaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissaos.
     */
    data: XOR<PermissaoUpdateManyMutationInput, PermissaoUncheckedUpdateManyInput>
    /**
     * Filter which Permissaos to update
     */
    where?: PermissaoWhereInput
    /**
     * Limit how many Permissaos to update.
     */
    limit?: number
  }

  /**
   * Permissao updateManyAndReturn
   */
  export type PermissaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * The data used to update Permissaos.
     */
    data: XOR<PermissaoUpdateManyMutationInput, PermissaoUncheckedUpdateManyInput>
    /**
     * Filter which Permissaos to update
     */
    where?: PermissaoWhereInput
    /**
     * Limit how many Permissaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Permissao upsert
   */
  export type PermissaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Permissao to update in case it exists.
     */
    where: PermissaoWhereUniqueInput
    /**
     * In case the Permissao found by the `where` argument doesn't exist, create a new Permissao with this data.
     */
    create: XOR<PermissaoCreateInput, PermissaoUncheckedCreateInput>
    /**
     * In case the Permissao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissaoUpdateInput, PermissaoUncheckedUpdateInput>
  }

  /**
   * Permissao delete
   */
  export type PermissaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter which Permissao to delete.
     */
    where: PermissaoWhereUniqueInput
  }

  /**
   * Permissao deleteMany
   */
  export type PermissaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissaos to delete
     */
    where?: PermissaoWhereInput
    /**
     * Limit how many Permissaos to delete.
     */
    limit?: number
  }

  /**
   * Permissao without action
   */
  export type PermissaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
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


  export const IgrejaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    endereco: 'endereco',
    cidade: 'cidade',
    estado: 'estado',
    cep: 'cep',
    pastor_local: 'pastor_local'
  };

  export type IgrejaScalarFieldEnum = (typeof IgrejaScalarFieldEnum)[keyof typeof IgrejaScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    role: 'role'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const NoticiaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    imagem: 'imagem',
    texto: 'texto',
    autor_id: 'autor_id',
    data_publicacao: 'data_publicacao',
    aprovado: 'aprovado'
  };

  export type NoticiaScalarFieldEnum = (typeof NoticiaScalarFieldEnum)[keyof typeof NoticiaScalarFieldEnum]


  export const AgendaScalarFieldEnum: {
    id: 'id',
    nome_evento: 'nome_evento',
    data_evento: 'data_evento'
  };

  export type AgendaScalarFieldEnum = (typeof AgendaScalarFieldEnum)[keyof typeof AgendaScalarFieldEnum]


  export const MembroScalarFieldEnum: {
    id: 'id',
    nome_completo: 'nome_completo',
    funcao: 'funcao',
    data_nascimento: 'data_nascimento',
    data_batismo: 'data_batismo',
    data_ingresso_ministerio: 'data_ingresso_ministerio',
    cidade: 'cidade',
    estado: 'estado',
    telefone: 'telefone',
    estado_civil: 'estado_civil',
    naturalidade: 'naturalidade',
    rg: 'rg',
    sexo: 'sexo',
    ativo: 'ativo',
    igreja_id: 'igreja_id'
  };

  export type MembroScalarFieldEnum = (typeof MembroScalarFieldEnum)[keyof typeof MembroScalarFieldEnum]


  export const PermissaoScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    permissao: 'permissao'
  };

  export type PermissaoScalarFieldEnum = (typeof PermissaoScalarFieldEnum)[keyof typeof PermissaoScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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
   * Reference to a field of type 'Funcao'
   */
  export type EnumFuncaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Funcao'>
    


  /**
   * Reference to a field of type 'Funcao[]'
   */
  export type ListEnumFuncaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Funcao[]'>
    


  /**
   * Reference to a field of type 'Sexo'
   */
  export type EnumSexoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexo'>
    


  /**
   * Reference to a field of type 'Sexo[]'
   */
  export type ListEnumSexoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexo[]'>
    


  /**
   * Reference to a field of type 'PermissaoTipo'
   */
  export type EnumPermissaoTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissaoTipo'>
    


  /**
   * Reference to a field of type 'PermissaoTipo[]'
   */
  export type ListEnumPermissaoTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissaoTipo[]'>
    


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


  export type IgrejaWhereInput = {
    AND?: IgrejaWhereInput | IgrejaWhereInput[]
    OR?: IgrejaWhereInput[]
    NOT?: IgrejaWhereInput | IgrejaWhereInput[]
    id?: IntFilter<"Igreja"> | number
    nome?: StringFilter<"Igreja"> | string
    endereco?: StringNullableFilter<"Igreja"> | string | null
    cidade?: StringNullableFilter<"Igreja"> | string | null
    estado?: StringNullableFilter<"Igreja"> | string | null
    cep?: StringNullableFilter<"Igreja"> | string | null
    pastor_local?: StringNullableFilter<"Igreja"> | string | null
    membros?: MembroListRelationFilter
  }

  export type IgrejaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    pastor_local?: SortOrderInput | SortOrder
    membros?: MembroOrderByRelationAggregateInput
  }

  export type IgrejaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IgrejaWhereInput | IgrejaWhereInput[]
    OR?: IgrejaWhereInput[]
    NOT?: IgrejaWhereInput | IgrejaWhereInput[]
    nome?: StringFilter<"Igreja"> | string
    endereco?: StringNullableFilter<"Igreja"> | string | null
    cidade?: StringNullableFilter<"Igreja"> | string | null
    estado?: StringNullableFilter<"Igreja"> | string | null
    cep?: StringNullableFilter<"Igreja"> | string | null
    pastor_local?: StringNullableFilter<"Igreja"> | string | null
    membros?: MembroListRelationFilter
  }, "id">

  export type IgrejaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    pastor_local?: SortOrderInput | SortOrder
    _count?: IgrejaCountOrderByAggregateInput
    _avg?: IgrejaAvgOrderByAggregateInput
    _max?: IgrejaMaxOrderByAggregateInput
    _min?: IgrejaMinOrderByAggregateInput
    _sum?: IgrejaSumOrderByAggregateInput
  }

  export type IgrejaScalarWhereWithAggregatesInput = {
    AND?: IgrejaScalarWhereWithAggregatesInput | IgrejaScalarWhereWithAggregatesInput[]
    OR?: IgrejaScalarWhereWithAggregatesInput[]
    NOT?: IgrejaScalarWhereWithAggregatesInput | IgrejaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Igreja"> | number
    nome?: StringWithAggregatesFilter<"Igreja"> | string
    endereco?: StringNullableWithAggregatesFilter<"Igreja"> | string | null
    cidade?: StringNullableWithAggregatesFilter<"Igreja"> | string | null
    estado?: StringNullableWithAggregatesFilter<"Igreja"> | string | null
    cep?: StringNullableWithAggregatesFilter<"Igreja"> | string | null
    pastor_local?: StringNullableWithAggregatesFilter<"Igreja"> | string | null
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    noticias?: NoticiaListRelationFilter
    permissoes?: PermissaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    noticias?: NoticiaOrderByRelationAggregateInput
    permissoes?: PermissaoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    noticias?: NoticiaListRelationFilter
    permissoes?: PermissaoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    role?: EnumRoleWithAggregatesFilter<"Usuario"> | $Enums.Role
  }

  export type NoticiaWhereInput = {
    AND?: NoticiaWhereInput | NoticiaWhereInput[]
    OR?: NoticiaWhereInput[]
    NOT?: NoticiaWhereInput | NoticiaWhereInput[]
    id?: IntFilter<"Noticia"> | number
    titulo?: StringFilter<"Noticia"> | string
    imagem?: StringNullableFilter<"Noticia"> | string | null
    texto?: StringFilter<"Noticia"> | string
    autor_id?: IntNullableFilter<"Noticia"> | number | null
    data_publicacao?: DateTimeNullableFilter<"Noticia"> | Date | string | null
    aprovado?: BoolFilter<"Noticia"> | boolean
    autor?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type NoticiaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    imagem?: SortOrderInput | SortOrder
    texto?: SortOrder
    autor_id?: SortOrderInput | SortOrder
    data_publicacao?: SortOrderInput | SortOrder
    aprovado?: SortOrder
    autor?: UsuarioOrderByWithRelationInput
  }

  export type NoticiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoticiaWhereInput | NoticiaWhereInput[]
    OR?: NoticiaWhereInput[]
    NOT?: NoticiaWhereInput | NoticiaWhereInput[]
    titulo?: StringFilter<"Noticia"> | string
    imagem?: StringNullableFilter<"Noticia"> | string | null
    texto?: StringFilter<"Noticia"> | string
    autor_id?: IntNullableFilter<"Noticia"> | number | null
    data_publicacao?: DateTimeNullableFilter<"Noticia"> | Date | string | null
    aprovado?: BoolFilter<"Noticia"> | boolean
    autor?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id">

  export type NoticiaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    imagem?: SortOrderInput | SortOrder
    texto?: SortOrder
    autor_id?: SortOrderInput | SortOrder
    data_publicacao?: SortOrderInput | SortOrder
    aprovado?: SortOrder
    _count?: NoticiaCountOrderByAggregateInput
    _avg?: NoticiaAvgOrderByAggregateInput
    _max?: NoticiaMaxOrderByAggregateInput
    _min?: NoticiaMinOrderByAggregateInput
    _sum?: NoticiaSumOrderByAggregateInput
  }

  export type NoticiaScalarWhereWithAggregatesInput = {
    AND?: NoticiaScalarWhereWithAggregatesInput | NoticiaScalarWhereWithAggregatesInput[]
    OR?: NoticiaScalarWhereWithAggregatesInput[]
    NOT?: NoticiaScalarWhereWithAggregatesInput | NoticiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Noticia"> | number
    titulo?: StringWithAggregatesFilter<"Noticia"> | string
    imagem?: StringNullableWithAggregatesFilter<"Noticia"> | string | null
    texto?: StringWithAggregatesFilter<"Noticia"> | string
    autor_id?: IntNullableWithAggregatesFilter<"Noticia"> | number | null
    data_publicacao?: DateTimeNullableWithAggregatesFilter<"Noticia"> | Date | string | null
    aprovado?: BoolWithAggregatesFilter<"Noticia"> | boolean
  }

  export type AgendaWhereInput = {
    AND?: AgendaWhereInput | AgendaWhereInput[]
    OR?: AgendaWhereInput[]
    NOT?: AgendaWhereInput | AgendaWhereInput[]
    id?: IntFilter<"Agenda"> | number
    nome_evento?: StringFilter<"Agenda"> | string
    data_evento?: DateTimeFilter<"Agenda"> | Date | string
  }

  export type AgendaOrderByWithRelationInput = {
    id?: SortOrder
    nome_evento?: SortOrder
    data_evento?: SortOrder
  }

  export type AgendaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AgendaWhereInput | AgendaWhereInput[]
    OR?: AgendaWhereInput[]
    NOT?: AgendaWhereInput | AgendaWhereInput[]
    nome_evento?: StringFilter<"Agenda"> | string
    data_evento?: DateTimeFilter<"Agenda"> | Date | string
  }, "id">

  export type AgendaOrderByWithAggregationInput = {
    id?: SortOrder
    nome_evento?: SortOrder
    data_evento?: SortOrder
    _count?: AgendaCountOrderByAggregateInput
    _avg?: AgendaAvgOrderByAggregateInput
    _max?: AgendaMaxOrderByAggregateInput
    _min?: AgendaMinOrderByAggregateInput
    _sum?: AgendaSumOrderByAggregateInput
  }

  export type AgendaScalarWhereWithAggregatesInput = {
    AND?: AgendaScalarWhereWithAggregatesInput | AgendaScalarWhereWithAggregatesInput[]
    OR?: AgendaScalarWhereWithAggregatesInput[]
    NOT?: AgendaScalarWhereWithAggregatesInput | AgendaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Agenda"> | number
    nome_evento?: StringWithAggregatesFilter<"Agenda"> | string
    data_evento?: DateTimeWithAggregatesFilter<"Agenda"> | Date | string
  }

  export type MembroWhereInput = {
    AND?: MembroWhereInput | MembroWhereInput[]
    OR?: MembroWhereInput[]
    NOT?: MembroWhereInput | MembroWhereInput[]
    id?: IntFilter<"Membro"> | number
    nome_completo?: StringFilter<"Membro"> | string
    funcao?: EnumFuncaoFilter<"Membro"> | $Enums.Funcao
    data_nascimento?: DateTimeNullableFilter<"Membro"> | Date | string | null
    data_batismo?: DateTimeNullableFilter<"Membro"> | Date | string | null
    data_ingresso_ministerio?: DateTimeNullableFilter<"Membro"> | Date | string | null
    cidade?: StringNullableFilter<"Membro"> | string | null
    estado?: StringNullableFilter<"Membro"> | string | null
    telefone?: StringNullableFilter<"Membro"> | string | null
    estado_civil?: StringNullableFilter<"Membro"> | string | null
    naturalidade?: StringNullableFilter<"Membro"> | string | null
    rg?: StringNullableFilter<"Membro"> | string | null
    sexo?: EnumSexoNullableFilter<"Membro"> | $Enums.Sexo | null
    ativo?: BoolFilter<"Membro"> | boolean
    igreja_id?: IntNullableFilter<"Membro"> | number | null
    igreja?: XOR<IgrejaNullableScalarRelationFilter, IgrejaWhereInput> | null
  }

  export type MembroOrderByWithRelationInput = {
    id?: SortOrder
    nome_completo?: SortOrder
    funcao?: SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    data_batismo?: SortOrderInput | SortOrder
    data_ingresso_ministerio?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    estado_civil?: SortOrderInput | SortOrder
    naturalidade?: SortOrderInput | SortOrder
    rg?: SortOrderInput | SortOrder
    sexo?: SortOrderInput | SortOrder
    ativo?: SortOrder
    igreja_id?: SortOrderInput | SortOrder
    igreja?: IgrejaOrderByWithRelationInput
  }

  export type MembroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MembroWhereInput | MembroWhereInput[]
    OR?: MembroWhereInput[]
    NOT?: MembroWhereInput | MembroWhereInput[]
    nome_completo?: StringFilter<"Membro"> | string
    funcao?: EnumFuncaoFilter<"Membro"> | $Enums.Funcao
    data_nascimento?: DateTimeNullableFilter<"Membro"> | Date | string | null
    data_batismo?: DateTimeNullableFilter<"Membro"> | Date | string | null
    data_ingresso_ministerio?: DateTimeNullableFilter<"Membro"> | Date | string | null
    cidade?: StringNullableFilter<"Membro"> | string | null
    estado?: StringNullableFilter<"Membro"> | string | null
    telefone?: StringNullableFilter<"Membro"> | string | null
    estado_civil?: StringNullableFilter<"Membro"> | string | null
    naturalidade?: StringNullableFilter<"Membro"> | string | null
    rg?: StringNullableFilter<"Membro"> | string | null
    sexo?: EnumSexoNullableFilter<"Membro"> | $Enums.Sexo | null
    ativo?: BoolFilter<"Membro"> | boolean
    igreja_id?: IntNullableFilter<"Membro"> | number | null
    igreja?: XOR<IgrejaNullableScalarRelationFilter, IgrejaWhereInput> | null
  }, "id">

  export type MembroOrderByWithAggregationInput = {
    id?: SortOrder
    nome_completo?: SortOrder
    funcao?: SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    data_batismo?: SortOrderInput | SortOrder
    data_ingresso_ministerio?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    estado_civil?: SortOrderInput | SortOrder
    naturalidade?: SortOrderInput | SortOrder
    rg?: SortOrderInput | SortOrder
    sexo?: SortOrderInput | SortOrder
    ativo?: SortOrder
    igreja_id?: SortOrderInput | SortOrder
    _count?: MembroCountOrderByAggregateInput
    _avg?: MembroAvgOrderByAggregateInput
    _max?: MembroMaxOrderByAggregateInput
    _min?: MembroMinOrderByAggregateInput
    _sum?: MembroSumOrderByAggregateInput
  }

  export type MembroScalarWhereWithAggregatesInput = {
    AND?: MembroScalarWhereWithAggregatesInput | MembroScalarWhereWithAggregatesInput[]
    OR?: MembroScalarWhereWithAggregatesInput[]
    NOT?: MembroScalarWhereWithAggregatesInput | MembroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Membro"> | number
    nome_completo?: StringWithAggregatesFilter<"Membro"> | string
    funcao?: EnumFuncaoWithAggregatesFilter<"Membro"> | $Enums.Funcao
    data_nascimento?: DateTimeNullableWithAggregatesFilter<"Membro"> | Date | string | null
    data_batismo?: DateTimeNullableWithAggregatesFilter<"Membro"> | Date | string | null
    data_ingresso_ministerio?: DateTimeNullableWithAggregatesFilter<"Membro"> | Date | string | null
    cidade?: StringNullableWithAggregatesFilter<"Membro"> | string | null
    estado?: StringNullableWithAggregatesFilter<"Membro"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Membro"> | string | null
    estado_civil?: StringNullableWithAggregatesFilter<"Membro"> | string | null
    naturalidade?: StringNullableWithAggregatesFilter<"Membro"> | string | null
    rg?: StringNullableWithAggregatesFilter<"Membro"> | string | null
    sexo?: EnumSexoNullableWithAggregatesFilter<"Membro"> | $Enums.Sexo | null
    ativo?: BoolWithAggregatesFilter<"Membro"> | boolean
    igreja_id?: IntNullableWithAggregatesFilter<"Membro"> | number | null
  }

  export type PermissaoWhereInput = {
    AND?: PermissaoWhereInput | PermissaoWhereInput[]
    OR?: PermissaoWhereInput[]
    NOT?: PermissaoWhereInput | PermissaoWhereInput[]
    id?: IntFilter<"Permissao"> | number
    usuario_id?: IntFilter<"Permissao"> | number
    permissao?: EnumPermissaoTipoFilter<"Permissao"> | $Enums.PermissaoTipo
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type PermissaoOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    permissao?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type PermissaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PermissaoWhereInput | PermissaoWhereInput[]
    OR?: PermissaoWhereInput[]
    NOT?: PermissaoWhereInput | PermissaoWhereInput[]
    usuario_id?: IntFilter<"Permissao"> | number
    permissao?: EnumPermissaoTipoFilter<"Permissao"> | $Enums.PermissaoTipo
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type PermissaoOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    permissao?: SortOrder
    _count?: PermissaoCountOrderByAggregateInput
    _avg?: PermissaoAvgOrderByAggregateInput
    _max?: PermissaoMaxOrderByAggregateInput
    _min?: PermissaoMinOrderByAggregateInput
    _sum?: PermissaoSumOrderByAggregateInput
  }

  export type PermissaoScalarWhereWithAggregatesInput = {
    AND?: PermissaoScalarWhereWithAggregatesInput | PermissaoScalarWhereWithAggregatesInput[]
    OR?: PermissaoScalarWhereWithAggregatesInput[]
    NOT?: PermissaoScalarWhereWithAggregatesInput | PermissaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permissao"> | number
    usuario_id?: IntWithAggregatesFilter<"Permissao"> | number
    permissao?: EnumPermissaoTipoWithAggregatesFilter<"Permissao"> | $Enums.PermissaoTipo
  }

  export type IgrejaCreateInput = {
    nome: string
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pastor_local?: string | null
    membros?: MembroCreateNestedManyWithoutIgrejaInput
  }

  export type IgrejaUncheckedCreateInput = {
    id?: number
    nome: string
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pastor_local?: string | null
    membros?: MembroUncheckedCreateNestedManyWithoutIgrejaInput
  }

  export type IgrejaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pastor_local?: NullableStringFieldUpdateOperationsInput | string | null
    membros?: MembroUpdateManyWithoutIgrejaNestedInput
  }

  export type IgrejaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pastor_local?: NullableStringFieldUpdateOperationsInput | string | null
    membros?: MembroUncheckedUpdateManyWithoutIgrejaNestedInput
  }

  export type IgrejaCreateManyInput = {
    id?: number
    nome: string
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pastor_local?: string | null
  }

  export type IgrejaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pastor_local?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IgrejaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pastor_local?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    role: $Enums.Role
    noticias?: NoticiaCreateNestedManyWithoutAutorInput
    permissoes?: PermissaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role: $Enums.Role
    noticias?: NoticiaUncheckedCreateNestedManyWithoutAutorInput
    permissoes?: PermissaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noticias?: NoticiaUpdateManyWithoutAutorNestedInput
    permissoes?: PermissaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noticias?: NoticiaUncheckedUpdateManyWithoutAutorNestedInput
    permissoes?: PermissaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role: $Enums.Role
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type NoticiaCreateInput = {
    titulo: string
    imagem?: string | null
    texto: string
    data_publicacao?: Date | string | null
    aprovado?: boolean
    autor?: UsuarioCreateNestedOneWithoutNoticiasInput
  }

  export type NoticiaUncheckedCreateInput = {
    id?: number
    titulo: string
    imagem?: string | null
    texto: string
    autor_id?: number | null
    data_publicacao?: Date | string | null
    aprovado?: boolean
  }

  export type NoticiaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    texto?: StringFieldUpdateOperationsInput | string
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    autor?: UsuarioUpdateOneWithoutNoticiasNestedInput
  }

  export type NoticiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    texto?: StringFieldUpdateOperationsInput | string
    autor_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoticiaCreateManyInput = {
    id?: number
    titulo: string
    imagem?: string | null
    texto: string
    autor_id?: number | null
    data_publicacao?: Date | string | null
    aprovado?: boolean
  }

  export type NoticiaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    texto?: StringFieldUpdateOperationsInput | string
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoticiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    texto?: StringFieldUpdateOperationsInput | string
    autor_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AgendaCreateInput = {
    nome_evento: string
    data_evento: Date | string
  }

  export type AgendaUncheckedCreateInput = {
    id?: number
    nome_evento: string
    data_evento: Date | string
  }

  export type AgendaUpdateInput = {
    nome_evento?: StringFieldUpdateOperationsInput | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_evento?: StringFieldUpdateOperationsInput | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaCreateManyInput = {
    id?: number
    nome_evento: string
    data_evento: Date | string
  }

  export type AgendaUpdateManyMutationInput = {
    nome_evento?: StringFieldUpdateOperationsInput | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_evento?: StringFieldUpdateOperationsInput | string
    data_evento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembroCreateInput = {
    nome_completo: string
    funcao: $Enums.Funcao
    data_nascimento?: Date | string | null
    data_batismo?: Date | string | null
    data_ingresso_ministerio?: Date | string | null
    cidade?: string | null
    estado?: string | null
    telefone?: string | null
    estado_civil?: string | null
    naturalidade?: string | null
    rg?: string | null
    sexo?: $Enums.Sexo | null
    ativo?: boolean
    igreja?: IgrejaCreateNestedOneWithoutMembrosInput
  }

  export type MembroUncheckedCreateInput = {
    id?: number
    nome_completo: string
    funcao: $Enums.Funcao
    data_nascimento?: Date | string | null
    data_batismo?: Date | string | null
    data_ingresso_ministerio?: Date | string | null
    cidade?: string | null
    estado?: string | null
    telefone?: string | null
    estado_civil?: string | null
    naturalidade?: string | null
    rg?: string | null
    sexo?: $Enums.Sexo | null
    ativo?: boolean
    igreja_id?: number | null
  }

  export type MembroUpdateInput = {
    nome_completo?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_batismo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_ingresso_ministerio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableEnumSexoFieldUpdateOperationsInput | $Enums.Sexo | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    igreja?: IgrejaUpdateOneWithoutMembrosNestedInput
  }

  export type MembroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_completo?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_batismo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_ingresso_ministerio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableEnumSexoFieldUpdateOperationsInput | $Enums.Sexo | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    igreja_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MembroCreateManyInput = {
    id?: number
    nome_completo: string
    funcao: $Enums.Funcao
    data_nascimento?: Date | string | null
    data_batismo?: Date | string | null
    data_ingresso_ministerio?: Date | string | null
    cidade?: string | null
    estado?: string | null
    telefone?: string | null
    estado_civil?: string | null
    naturalidade?: string | null
    rg?: string | null
    sexo?: $Enums.Sexo | null
    ativo?: boolean
    igreja_id?: number | null
  }

  export type MembroUpdateManyMutationInput = {
    nome_completo?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_batismo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_ingresso_ministerio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableEnumSexoFieldUpdateOperationsInput | $Enums.Sexo | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MembroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_completo?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_batismo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_ingresso_ministerio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableEnumSexoFieldUpdateOperationsInput | $Enums.Sexo | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    igreja_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PermissaoCreateInput = {
    permissao: $Enums.PermissaoTipo
    usuario: UsuarioCreateNestedOneWithoutPermissoesInput
  }

  export type PermissaoUncheckedCreateInput = {
    id?: number
    usuario_id: number
    permissao: $Enums.PermissaoTipo
  }

  export type PermissaoUpdateInput = {
    permissao?: EnumPermissaoTipoFieldUpdateOperationsInput | $Enums.PermissaoTipo
    usuario?: UsuarioUpdateOneRequiredWithoutPermissoesNestedInput
  }

  export type PermissaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    permissao?: EnumPermissaoTipoFieldUpdateOperationsInput | $Enums.PermissaoTipo
  }

  export type PermissaoCreateManyInput = {
    id?: number
    usuario_id: number
    permissao: $Enums.PermissaoTipo
  }

  export type PermissaoUpdateManyMutationInput = {
    permissao?: EnumPermissaoTipoFieldUpdateOperationsInput | $Enums.PermissaoTipo
  }

  export type PermissaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    permissao?: EnumPermissaoTipoFieldUpdateOperationsInput | $Enums.PermissaoTipo
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type MembroListRelationFilter = {
    every?: MembroWhereInput
    some?: MembroWhereInput
    none?: MembroWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MembroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IgrejaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    pastor_local?: SortOrder
  }

  export type IgrejaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IgrejaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    pastor_local?: SortOrder
  }

  export type IgrejaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    pastor_local?: SortOrder
  }

  export type IgrejaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NoticiaListRelationFilter = {
    every?: NoticiaWhereInput
    some?: NoticiaWhereInput
    none?: NoticiaWhereInput
  }

  export type PermissaoListRelationFilter = {
    every?: PermissaoWhereInput
    some?: PermissaoWhereInput
    none?: PermissaoWhereInput
  }

  export type NoticiaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type NoticiaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    imagem?: SortOrder
    texto?: SortOrder
    autor_id?: SortOrder
    data_publicacao?: SortOrder
    aprovado?: SortOrder
  }

  export type NoticiaAvgOrderByAggregateInput = {
    id?: SortOrder
    autor_id?: SortOrder
  }

  export type NoticiaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    imagem?: SortOrder
    texto?: SortOrder
    autor_id?: SortOrder
    data_publicacao?: SortOrder
    aprovado?: SortOrder
  }

  export type NoticiaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    imagem?: SortOrder
    texto?: SortOrder
    autor_id?: SortOrder
    data_publicacao?: SortOrder
    aprovado?: SortOrder
  }

  export type NoticiaSumOrderByAggregateInput = {
    id?: SortOrder
    autor_id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type AgendaCountOrderByAggregateInput = {
    id?: SortOrder
    nome_evento?: SortOrder
    data_evento?: SortOrder
  }

  export type AgendaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AgendaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_evento?: SortOrder
    data_evento?: SortOrder
  }

  export type AgendaMinOrderByAggregateInput = {
    id?: SortOrder
    nome_evento?: SortOrder
    data_evento?: SortOrder
  }

  export type AgendaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumFuncaoFilter<$PrismaModel = never> = {
    equals?: $Enums.Funcao | EnumFuncaoFieldRefInput<$PrismaModel>
    in?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    not?: NestedEnumFuncaoFilter<$PrismaModel> | $Enums.Funcao
  }

  export type EnumSexoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexoNullableFilter<$PrismaModel> | $Enums.Sexo | null
  }

  export type IgrejaNullableScalarRelationFilter = {
    is?: IgrejaWhereInput | null
    isNot?: IgrejaWhereInput | null
  }

  export type MembroCountOrderByAggregateInput = {
    id?: SortOrder
    nome_completo?: SortOrder
    funcao?: SortOrder
    data_nascimento?: SortOrder
    data_batismo?: SortOrder
    data_ingresso_ministerio?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    telefone?: SortOrder
    estado_civil?: SortOrder
    naturalidade?: SortOrder
    rg?: SortOrder
    sexo?: SortOrder
    ativo?: SortOrder
    igreja_id?: SortOrder
  }

  export type MembroAvgOrderByAggregateInput = {
    id?: SortOrder
    igreja_id?: SortOrder
  }

  export type MembroMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_completo?: SortOrder
    funcao?: SortOrder
    data_nascimento?: SortOrder
    data_batismo?: SortOrder
    data_ingresso_ministerio?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    telefone?: SortOrder
    estado_civil?: SortOrder
    naturalidade?: SortOrder
    rg?: SortOrder
    sexo?: SortOrder
    ativo?: SortOrder
    igreja_id?: SortOrder
  }

  export type MembroMinOrderByAggregateInput = {
    id?: SortOrder
    nome_completo?: SortOrder
    funcao?: SortOrder
    data_nascimento?: SortOrder
    data_batismo?: SortOrder
    data_ingresso_ministerio?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    telefone?: SortOrder
    estado_civil?: SortOrder
    naturalidade?: SortOrder
    rg?: SortOrder
    sexo?: SortOrder
    ativo?: SortOrder
    igreja_id?: SortOrder
  }

  export type MembroSumOrderByAggregateInput = {
    id?: SortOrder
    igreja_id?: SortOrder
  }

  export type EnumFuncaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Funcao | EnumFuncaoFieldRefInput<$PrismaModel>
    in?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    not?: NestedEnumFuncaoWithAggregatesFilter<$PrismaModel> | $Enums.Funcao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFuncaoFilter<$PrismaModel>
    _max?: NestedEnumFuncaoFilter<$PrismaModel>
  }

  export type EnumSexoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexoNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sexo | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexoNullableFilter<$PrismaModel>
    _max?: NestedEnumSexoNullableFilter<$PrismaModel>
  }

  export type EnumPermissaoTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissaoTipo | EnumPermissaoTipoFieldRefInput<$PrismaModel>
    in?: $Enums.PermissaoTipo[] | ListEnumPermissaoTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissaoTipo[] | ListEnumPermissaoTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissaoTipoFilter<$PrismaModel> | $Enums.PermissaoTipo
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type PermissaoCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    permissao?: SortOrder
  }

  export type PermissaoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type PermissaoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    permissao?: SortOrder
  }

  export type PermissaoMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    permissao?: SortOrder
  }

  export type PermissaoSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type EnumPermissaoTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissaoTipo | EnumPermissaoTipoFieldRefInput<$PrismaModel>
    in?: $Enums.PermissaoTipo[] | ListEnumPermissaoTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissaoTipo[] | ListEnumPermissaoTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissaoTipoWithAggregatesFilter<$PrismaModel> | $Enums.PermissaoTipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissaoTipoFilter<$PrismaModel>
    _max?: NestedEnumPermissaoTipoFilter<$PrismaModel>
  }

  export type MembroCreateNestedManyWithoutIgrejaInput = {
    create?: XOR<MembroCreateWithoutIgrejaInput, MembroUncheckedCreateWithoutIgrejaInput> | MembroCreateWithoutIgrejaInput[] | MembroUncheckedCreateWithoutIgrejaInput[]
    connectOrCreate?: MembroCreateOrConnectWithoutIgrejaInput | MembroCreateOrConnectWithoutIgrejaInput[]
    createMany?: MembroCreateManyIgrejaInputEnvelope
    connect?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
  }

  export type MembroUncheckedCreateNestedManyWithoutIgrejaInput = {
    create?: XOR<MembroCreateWithoutIgrejaInput, MembroUncheckedCreateWithoutIgrejaInput> | MembroCreateWithoutIgrejaInput[] | MembroUncheckedCreateWithoutIgrejaInput[]
    connectOrCreate?: MembroCreateOrConnectWithoutIgrejaInput | MembroCreateOrConnectWithoutIgrejaInput[]
    createMany?: MembroCreateManyIgrejaInputEnvelope
    connect?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MembroUpdateManyWithoutIgrejaNestedInput = {
    create?: XOR<MembroCreateWithoutIgrejaInput, MembroUncheckedCreateWithoutIgrejaInput> | MembroCreateWithoutIgrejaInput[] | MembroUncheckedCreateWithoutIgrejaInput[]
    connectOrCreate?: MembroCreateOrConnectWithoutIgrejaInput | MembroCreateOrConnectWithoutIgrejaInput[]
    upsert?: MembroUpsertWithWhereUniqueWithoutIgrejaInput | MembroUpsertWithWhereUniqueWithoutIgrejaInput[]
    createMany?: MembroCreateManyIgrejaInputEnvelope
    set?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
    disconnect?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
    delete?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
    connect?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
    update?: MembroUpdateWithWhereUniqueWithoutIgrejaInput | MembroUpdateWithWhereUniqueWithoutIgrejaInput[]
    updateMany?: MembroUpdateManyWithWhereWithoutIgrejaInput | MembroUpdateManyWithWhereWithoutIgrejaInput[]
    deleteMany?: MembroScalarWhereInput | MembroScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MembroUncheckedUpdateManyWithoutIgrejaNestedInput = {
    create?: XOR<MembroCreateWithoutIgrejaInput, MembroUncheckedCreateWithoutIgrejaInput> | MembroCreateWithoutIgrejaInput[] | MembroUncheckedCreateWithoutIgrejaInput[]
    connectOrCreate?: MembroCreateOrConnectWithoutIgrejaInput | MembroCreateOrConnectWithoutIgrejaInput[]
    upsert?: MembroUpsertWithWhereUniqueWithoutIgrejaInput | MembroUpsertWithWhereUniqueWithoutIgrejaInput[]
    createMany?: MembroCreateManyIgrejaInputEnvelope
    set?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
    disconnect?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
    delete?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
    connect?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
    update?: MembroUpdateWithWhereUniqueWithoutIgrejaInput | MembroUpdateWithWhereUniqueWithoutIgrejaInput[]
    updateMany?: MembroUpdateManyWithWhereWithoutIgrejaInput | MembroUpdateManyWithWhereWithoutIgrejaInput[]
    deleteMany?: MembroScalarWhereInput | MembroScalarWhereInput[]
  }

  export type NoticiaCreateNestedManyWithoutAutorInput = {
    create?: XOR<NoticiaCreateWithoutAutorInput, NoticiaUncheckedCreateWithoutAutorInput> | NoticiaCreateWithoutAutorInput[] | NoticiaUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: NoticiaCreateOrConnectWithoutAutorInput | NoticiaCreateOrConnectWithoutAutorInput[]
    createMany?: NoticiaCreateManyAutorInputEnvelope
    connect?: NoticiaWhereUniqueInput | NoticiaWhereUniqueInput[]
  }

  export type PermissaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PermissaoCreateWithoutUsuarioInput, PermissaoUncheckedCreateWithoutUsuarioInput> | PermissaoCreateWithoutUsuarioInput[] | PermissaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PermissaoCreateOrConnectWithoutUsuarioInput | PermissaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PermissaoCreateManyUsuarioInputEnvelope
    connect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
  }

  export type NoticiaUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<NoticiaCreateWithoutAutorInput, NoticiaUncheckedCreateWithoutAutorInput> | NoticiaCreateWithoutAutorInput[] | NoticiaUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: NoticiaCreateOrConnectWithoutAutorInput | NoticiaCreateOrConnectWithoutAutorInput[]
    createMany?: NoticiaCreateManyAutorInputEnvelope
    connect?: NoticiaWhereUniqueInput | NoticiaWhereUniqueInput[]
  }

  export type PermissaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PermissaoCreateWithoutUsuarioInput, PermissaoUncheckedCreateWithoutUsuarioInput> | PermissaoCreateWithoutUsuarioInput[] | PermissaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PermissaoCreateOrConnectWithoutUsuarioInput | PermissaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PermissaoCreateManyUsuarioInputEnvelope
    connect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NoticiaUpdateManyWithoutAutorNestedInput = {
    create?: XOR<NoticiaCreateWithoutAutorInput, NoticiaUncheckedCreateWithoutAutorInput> | NoticiaCreateWithoutAutorInput[] | NoticiaUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: NoticiaCreateOrConnectWithoutAutorInput | NoticiaCreateOrConnectWithoutAutorInput[]
    upsert?: NoticiaUpsertWithWhereUniqueWithoutAutorInput | NoticiaUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: NoticiaCreateManyAutorInputEnvelope
    set?: NoticiaWhereUniqueInput | NoticiaWhereUniqueInput[]
    disconnect?: NoticiaWhereUniqueInput | NoticiaWhereUniqueInput[]
    delete?: NoticiaWhereUniqueInput | NoticiaWhereUniqueInput[]
    connect?: NoticiaWhereUniqueInput | NoticiaWhereUniqueInput[]
    update?: NoticiaUpdateWithWhereUniqueWithoutAutorInput | NoticiaUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: NoticiaUpdateManyWithWhereWithoutAutorInput | NoticiaUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: NoticiaScalarWhereInput | NoticiaScalarWhereInput[]
  }

  export type PermissaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PermissaoCreateWithoutUsuarioInput, PermissaoUncheckedCreateWithoutUsuarioInput> | PermissaoCreateWithoutUsuarioInput[] | PermissaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PermissaoCreateOrConnectWithoutUsuarioInput | PermissaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PermissaoUpsertWithWhereUniqueWithoutUsuarioInput | PermissaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PermissaoCreateManyUsuarioInputEnvelope
    set?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    disconnect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    delete?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    connect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    update?: PermissaoUpdateWithWhereUniqueWithoutUsuarioInput | PermissaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PermissaoUpdateManyWithWhereWithoutUsuarioInput | PermissaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PermissaoScalarWhereInput | PermissaoScalarWhereInput[]
  }

  export type NoticiaUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<NoticiaCreateWithoutAutorInput, NoticiaUncheckedCreateWithoutAutorInput> | NoticiaCreateWithoutAutorInput[] | NoticiaUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: NoticiaCreateOrConnectWithoutAutorInput | NoticiaCreateOrConnectWithoutAutorInput[]
    upsert?: NoticiaUpsertWithWhereUniqueWithoutAutorInput | NoticiaUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: NoticiaCreateManyAutorInputEnvelope
    set?: NoticiaWhereUniqueInput | NoticiaWhereUniqueInput[]
    disconnect?: NoticiaWhereUniqueInput | NoticiaWhereUniqueInput[]
    delete?: NoticiaWhereUniqueInput | NoticiaWhereUniqueInput[]
    connect?: NoticiaWhereUniqueInput | NoticiaWhereUniqueInput[]
    update?: NoticiaUpdateWithWhereUniqueWithoutAutorInput | NoticiaUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: NoticiaUpdateManyWithWhereWithoutAutorInput | NoticiaUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: NoticiaScalarWhereInput | NoticiaScalarWhereInput[]
  }

  export type PermissaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PermissaoCreateWithoutUsuarioInput, PermissaoUncheckedCreateWithoutUsuarioInput> | PermissaoCreateWithoutUsuarioInput[] | PermissaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PermissaoCreateOrConnectWithoutUsuarioInput | PermissaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PermissaoUpsertWithWhereUniqueWithoutUsuarioInput | PermissaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PermissaoCreateManyUsuarioInputEnvelope
    set?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    disconnect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    delete?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    connect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    update?: PermissaoUpdateWithWhereUniqueWithoutUsuarioInput | PermissaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PermissaoUpdateManyWithWhereWithoutUsuarioInput | PermissaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PermissaoScalarWhereInput | PermissaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutNoticiasInput = {
    create?: XOR<UsuarioCreateWithoutNoticiasInput, UsuarioUncheckedCreateWithoutNoticiasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNoticiasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneWithoutNoticiasNestedInput = {
    create?: XOR<UsuarioCreateWithoutNoticiasInput, UsuarioUncheckedCreateWithoutNoticiasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNoticiasInput
    upsert?: UsuarioUpsertWithoutNoticiasInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutNoticiasInput, UsuarioUpdateWithoutNoticiasInput>, UsuarioUncheckedUpdateWithoutNoticiasInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IgrejaCreateNestedOneWithoutMembrosInput = {
    create?: XOR<IgrejaCreateWithoutMembrosInput, IgrejaUncheckedCreateWithoutMembrosInput>
    connectOrCreate?: IgrejaCreateOrConnectWithoutMembrosInput
    connect?: IgrejaWhereUniqueInput
  }

  export type EnumFuncaoFieldUpdateOperationsInput = {
    set?: $Enums.Funcao
  }

  export type NullableEnumSexoFieldUpdateOperationsInput = {
    set?: $Enums.Sexo | null
  }

  export type IgrejaUpdateOneWithoutMembrosNestedInput = {
    create?: XOR<IgrejaCreateWithoutMembrosInput, IgrejaUncheckedCreateWithoutMembrosInput>
    connectOrCreate?: IgrejaCreateOrConnectWithoutMembrosInput
    upsert?: IgrejaUpsertWithoutMembrosInput
    disconnect?: IgrejaWhereInput | boolean
    delete?: IgrejaWhereInput | boolean
    connect?: IgrejaWhereUniqueInput
    update?: XOR<XOR<IgrejaUpdateToOneWithWhereWithoutMembrosInput, IgrejaUpdateWithoutMembrosInput>, IgrejaUncheckedUpdateWithoutMembrosInput>
  }

  export type UsuarioCreateNestedOneWithoutPermissoesInput = {
    create?: XOR<UsuarioCreateWithoutPermissoesInput, UsuarioUncheckedCreateWithoutPermissoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPermissoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumPermissaoTipoFieldUpdateOperationsInput = {
    set?: $Enums.PermissaoTipo
  }

  export type UsuarioUpdateOneRequiredWithoutPermissoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutPermissoesInput, UsuarioUncheckedCreateWithoutPermissoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPermissoesInput
    upsert?: UsuarioUpsertWithoutPermissoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPermissoesInput, UsuarioUpdateWithoutPermissoesInput>, UsuarioUncheckedUpdateWithoutPermissoesInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumFuncaoFilter<$PrismaModel = never> = {
    equals?: $Enums.Funcao | EnumFuncaoFieldRefInput<$PrismaModel>
    in?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    not?: NestedEnumFuncaoFilter<$PrismaModel> | $Enums.Funcao
  }

  export type NestedEnumSexoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexoNullableFilter<$PrismaModel> | $Enums.Sexo | null
  }

  export type NestedEnumFuncaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Funcao | EnumFuncaoFieldRefInput<$PrismaModel>
    in?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    not?: NestedEnumFuncaoWithAggregatesFilter<$PrismaModel> | $Enums.Funcao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFuncaoFilter<$PrismaModel>
    _max?: NestedEnumFuncaoFilter<$PrismaModel>
  }

  export type NestedEnumSexoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexoNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sexo | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexoNullableFilter<$PrismaModel>
    _max?: NestedEnumSexoNullableFilter<$PrismaModel>
  }

  export type NestedEnumPermissaoTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissaoTipo | EnumPermissaoTipoFieldRefInput<$PrismaModel>
    in?: $Enums.PermissaoTipo[] | ListEnumPermissaoTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissaoTipo[] | ListEnumPermissaoTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissaoTipoFilter<$PrismaModel> | $Enums.PermissaoTipo
  }

  export type NestedEnumPermissaoTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissaoTipo | EnumPermissaoTipoFieldRefInput<$PrismaModel>
    in?: $Enums.PermissaoTipo[] | ListEnumPermissaoTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissaoTipo[] | ListEnumPermissaoTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissaoTipoWithAggregatesFilter<$PrismaModel> | $Enums.PermissaoTipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissaoTipoFilter<$PrismaModel>
    _max?: NestedEnumPermissaoTipoFilter<$PrismaModel>
  }

  export type MembroCreateWithoutIgrejaInput = {
    nome_completo: string
    funcao: $Enums.Funcao
    data_nascimento?: Date | string | null
    data_batismo?: Date | string | null
    data_ingresso_ministerio?: Date | string | null
    cidade?: string | null
    estado?: string | null
    telefone?: string | null
    estado_civil?: string | null
    naturalidade?: string | null
    rg?: string | null
    sexo?: $Enums.Sexo | null
    ativo?: boolean
  }

  export type MembroUncheckedCreateWithoutIgrejaInput = {
    id?: number
    nome_completo: string
    funcao: $Enums.Funcao
    data_nascimento?: Date | string | null
    data_batismo?: Date | string | null
    data_ingresso_ministerio?: Date | string | null
    cidade?: string | null
    estado?: string | null
    telefone?: string | null
    estado_civil?: string | null
    naturalidade?: string | null
    rg?: string | null
    sexo?: $Enums.Sexo | null
    ativo?: boolean
  }

  export type MembroCreateOrConnectWithoutIgrejaInput = {
    where: MembroWhereUniqueInput
    create: XOR<MembroCreateWithoutIgrejaInput, MembroUncheckedCreateWithoutIgrejaInput>
  }

  export type MembroCreateManyIgrejaInputEnvelope = {
    data: MembroCreateManyIgrejaInput | MembroCreateManyIgrejaInput[]
    skipDuplicates?: boolean
  }

  export type MembroUpsertWithWhereUniqueWithoutIgrejaInput = {
    where: MembroWhereUniqueInput
    update: XOR<MembroUpdateWithoutIgrejaInput, MembroUncheckedUpdateWithoutIgrejaInput>
    create: XOR<MembroCreateWithoutIgrejaInput, MembroUncheckedCreateWithoutIgrejaInput>
  }

  export type MembroUpdateWithWhereUniqueWithoutIgrejaInput = {
    where: MembroWhereUniqueInput
    data: XOR<MembroUpdateWithoutIgrejaInput, MembroUncheckedUpdateWithoutIgrejaInput>
  }

  export type MembroUpdateManyWithWhereWithoutIgrejaInput = {
    where: MembroScalarWhereInput
    data: XOR<MembroUpdateManyMutationInput, MembroUncheckedUpdateManyWithoutIgrejaInput>
  }

  export type MembroScalarWhereInput = {
    AND?: MembroScalarWhereInput | MembroScalarWhereInput[]
    OR?: MembroScalarWhereInput[]
    NOT?: MembroScalarWhereInput | MembroScalarWhereInput[]
    id?: IntFilter<"Membro"> | number
    nome_completo?: StringFilter<"Membro"> | string
    funcao?: EnumFuncaoFilter<"Membro"> | $Enums.Funcao
    data_nascimento?: DateTimeNullableFilter<"Membro"> | Date | string | null
    data_batismo?: DateTimeNullableFilter<"Membro"> | Date | string | null
    data_ingresso_ministerio?: DateTimeNullableFilter<"Membro"> | Date | string | null
    cidade?: StringNullableFilter<"Membro"> | string | null
    estado?: StringNullableFilter<"Membro"> | string | null
    telefone?: StringNullableFilter<"Membro"> | string | null
    estado_civil?: StringNullableFilter<"Membro"> | string | null
    naturalidade?: StringNullableFilter<"Membro"> | string | null
    rg?: StringNullableFilter<"Membro"> | string | null
    sexo?: EnumSexoNullableFilter<"Membro"> | $Enums.Sexo | null
    ativo?: BoolFilter<"Membro"> | boolean
    igreja_id?: IntNullableFilter<"Membro"> | number | null
  }

  export type NoticiaCreateWithoutAutorInput = {
    titulo: string
    imagem?: string | null
    texto: string
    data_publicacao?: Date | string | null
    aprovado?: boolean
  }

  export type NoticiaUncheckedCreateWithoutAutorInput = {
    id?: number
    titulo: string
    imagem?: string | null
    texto: string
    data_publicacao?: Date | string | null
    aprovado?: boolean
  }

  export type NoticiaCreateOrConnectWithoutAutorInput = {
    where: NoticiaWhereUniqueInput
    create: XOR<NoticiaCreateWithoutAutorInput, NoticiaUncheckedCreateWithoutAutorInput>
  }

  export type NoticiaCreateManyAutorInputEnvelope = {
    data: NoticiaCreateManyAutorInput | NoticiaCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type PermissaoCreateWithoutUsuarioInput = {
    permissao: $Enums.PermissaoTipo
  }

  export type PermissaoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    permissao: $Enums.PermissaoTipo
  }

  export type PermissaoCreateOrConnectWithoutUsuarioInput = {
    where: PermissaoWhereUniqueInput
    create: XOR<PermissaoCreateWithoutUsuarioInput, PermissaoUncheckedCreateWithoutUsuarioInput>
  }

  export type PermissaoCreateManyUsuarioInputEnvelope = {
    data: PermissaoCreateManyUsuarioInput | PermissaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type NoticiaUpsertWithWhereUniqueWithoutAutorInput = {
    where: NoticiaWhereUniqueInput
    update: XOR<NoticiaUpdateWithoutAutorInput, NoticiaUncheckedUpdateWithoutAutorInput>
    create: XOR<NoticiaCreateWithoutAutorInput, NoticiaUncheckedCreateWithoutAutorInput>
  }

  export type NoticiaUpdateWithWhereUniqueWithoutAutorInput = {
    where: NoticiaWhereUniqueInput
    data: XOR<NoticiaUpdateWithoutAutorInput, NoticiaUncheckedUpdateWithoutAutorInput>
  }

  export type NoticiaUpdateManyWithWhereWithoutAutorInput = {
    where: NoticiaScalarWhereInput
    data: XOR<NoticiaUpdateManyMutationInput, NoticiaUncheckedUpdateManyWithoutAutorInput>
  }

  export type NoticiaScalarWhereInput = {
    AND?: NoticiaScalarWhereInput | NoticiaScalarWhereInput[]
    OR?: NoticiaScalarWhereInput[]
    NOT?: NoticiaScalarWhereInput | NoticiaScalarWhereInput[]
    id?: IntFilter<"Noticia"> | number
    titulo?: StringFilter<"Noticia"> | string
    imagem?: StringNullableFilter<"Noticia"> | string | null
    texto?: StringFilter<"Noticia"> | string
    autor_id?: IntNullableFilter<"Noticia"> | number | null
    data_publicacao?: DateTimeNullableFilter<"Noticia"> | Date | string | null
    aprovado?: BoolFilter<"Noticia"> | boolean
  }

  export type PermissaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PermissaoWhereUniqueInput
    update: XOR<PermissaoUpdateWithoutUsuarioInput, PermissaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PermissaoCreateWithoutUsuarioInput, PermissaoUncheckedCreateWithoutUsuarioInput>
  }

  export type PermissaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PermissaoWhereUniqueInput
    data: XOR<PermissaoUpdateWithoutUsuarioInput, PermissaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PermissaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PermissaoScalarWhereInput
    data: XOR<PermissaoUpdateManyMutationInput, PermissaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PermissaoScalarWhereInput = {
    AND?: PermissaoScalarWhereInput | PermissaoScalarWhereInput[]
    OR?: PermissaoScalarWhereInput[]
    NOT?: PermissaoScalarWhereInput | PermissaoScalarWhereInput[]
    id?: IntFilter<"Permissao"> | number
    usuario_id?: IntFilter<"Permissao"> | number
    permissao?: EnumPermissaoTipoFilter<"Permissao"> | $Enums.PermissaoTipo
  }

  export type UsuarioCreateWithoutNoticiasInput = {
    nome: string
    email: string
    senha: string
    role: $Enums.Role
    permissoes?: PermissaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutNoticiasInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role: $Enums.Role
    permissoes?: PermissaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutNoticiasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutNoticiasInput, UsuarioUncheckedCreateWithoutNoticiasInput>
  }

  export type UsuarioUpsertWithoutNoticiasInput = {
    update: XOR<UsuarioUpdateWithoutNoticiasInput, UsuarioUncheckedUpdateWithoutNoticiasInput>
    create: XOR<UsuarioCreateWithoutNoticiasInput, UsuarioUncheckedCreateWithoutNoticiasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutNoticiasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutNoticiasInput, UsuarioUncheckedUpdateWithoutNoticiasInput>
  }

  export type UsuarioUpdateWithoutNoticiasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permissoes?: PermissaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutNoticiasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permissoes?: PermissaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type IgrejaCreateWithoutMembrosInput = {
    nome: string
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pastor_local?: string | null
  }

  export type IgrejaUncheckedCreateWithoutMembrosInput = {
    id?: number
    nome: string
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pastor_local?: string | null
  }

  export type IgrejaCreateOrConnectWithoutMembrosInput = {
    where: IgrejaWhereUniqueInput
    create: XOR<IgrejaCreateWithoutMembrosInput, IgrejaUncheckedCreateWithoutMembrosInput>
  }

  export type IgrejaUpsertWithoutMembrosInput = {
    update: XOR<IgrejaUpdateWithoutMembrosInput, IgrejaUncheckedUpdateWithoutMembrosInput>
    create: XOR<IgrejaCreateWithoutMembrosInput, IgrejaUncheckedCreateWithoutMembrosInput>
    where?: IgrejaWhereInput
  }

  export type IgrejaUpdateToOneWithWhereWithoutMembrosInput = {
    where?: IgrejaWhereInput
    data: XOR<IgrejaUpdateWithoutMembrosInput, IgrejaUncheckedUpdateWithoutMembrosInput>
  }

  export type IgrejaUpdateWithoutMembrosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pastor_local?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IgrejaUncheckedUpdateWithoutMembrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pastor_local?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioCreateWithoutPermissoesInput = {
    nome: string
    email: string
    senha: string
    role: $Enums.Role
    noticias?: NoticiaCreateNestedManyWithoutAutorInput
  }

  export type UsuarioUncheckedCreateWithoutPermissoesInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role: $Enums.Role
    noticias?: NoticiaUncheckedCreateNestedManyWithoutAutorInput
  }

  export type UsuarioCreateOrConnectWithoutPermissoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPermissoesInput, UsuarioUncheckedCreateWithoutPermissoesInput>
  }

  export type UsuarioUpsertWithoutPermissoesInput = {
    update: XOR<UsuarioUpdateWithoutPermissoesInput, UsuarioUncheckedUpdateWithoutPermissoesInput>
    create: XOR<UsuarioCreateWithoutPermissoesInput, UsuarioUncheckedCreateWithoutPermissoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPermissoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPermissoesInput, UsuarioUncheckedUpdateWithoutPermissoesInput>
  }

  export type UsuarioUpdateWithoutPermissoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noticias?: NoticiaUpdateManyWithoutAutorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPermissoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noticias?: NoticiaUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type MembroCreateManyIgrejaInput = {
    id?: number
    nome_completo: string
    funcao: $Enums.Funcao
    data_nascimento?: Date | string | null
    data_batismo?: Date | string | null
    data_ingresso_ministerio?: Date | string | null
    cidade?: string | null
    estado?: string | null
    telefone?: string | null
    estado_civil?: string | null
    naturalidade?: string | null
    rg?: string | null
    sexo?: $Enums.Sexo | null
    ativo?: boolean
  }

  export type MembroUpdateWithoutIgrejaInput = {
    nome_completo?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_batismo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_ingresso_ministerio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableEnumSexoFieldUpdateOperationsInput | $Enums.Sexo | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MembroUncheckedUpdateWithoutIgrejaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_completo?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_batismo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_ingresso_ministerio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableEnumSexoFieldUpdateOperationsInput | $Enums.Sexo | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MembroUncheckedUpdateManyWithoutIgrejaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_completo?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_batismo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_ingresso_ministerio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableEnumSexoFieldUpdateOperationsInput | $Enums.Sexo | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoticiaCreateManyAutorInput = {
    id?: number
    titulo: string
    imagem?: string | null
    texto: string
    data_publicacao?: Date | string | null
    aprovado?: boolean
  }

  export type PermissaoCreateManyUsuarioInput = {
    id?: number
    permissao: $Enums.PermissaoTipo
  }

  export type NoticiaUpdateWithoutAutorInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    texto?: StringFieldUpdateOperationsInput | string
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoticiaUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    texto?: StringFieldUpdateOperationsInput | string
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoticiaUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    texto?: StringFieldUpdateOperationsInput | string
    data_publicacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PermissaoUpdateWithoutUsuarioInput = {
    permissao?: EnumPermissaoTipoFieldUpdateOperationsInput | $Enums.PermissaoTipo
  }

  export type PermissaoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissao?: EnumPermissaoTipoFieldUpdateOperationsInput | $Enums.PermissaoTipo
  }

  export type PermissaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissao?: EnumPermissaoTipoFieldUpdateOperationsInput | $Enums.PermissaoTipo
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