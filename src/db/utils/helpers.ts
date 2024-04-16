import type {
  BuildQueryResult,
  DBQueryConfig,
  ExtractTablesWithRelations,
} from 'drizzle-orm';

import type * as schema from '../schema';

// type Schema = typeof schema;
type TablesWithRelations = ExtractTablesWithRelations<Schema>;

// export type IncludeRelation<TableName extends keyof TablesWithRelations> =
//   DBQueryConfig<
//     'one' | 'many',
//     boolean,
//     TablesWithRelations,
//     TablesWithRelations[TableName]
//   >['with'];

type Schema = typeof schema;
type TSchema = ExtractTablesWithRelations<Schema>;

export type IncludeRelation<TableName extends keyof TSchema> = DBQueryConfig<
  'one' | 'many',
  boolean,
  TSchema,
  TSchema[TableName]
>['with'];

export type InferResultType<
  TableName extends keyof TSchema,
  With extends IncludeRelation<TableName> | undefined = undefined,
> = BuildQueryResult<
  TSchema,
  TSchema[TableName],
  {
    with: With;
  }
>;

export type IncludeColumns<TableName extends keyof TablesWithRelations> =
  DBQueryConfig<
    'one' | 'many',
    boolean,
    TablesWithRelations,
    TablesWithRelations[TableName]
  >['columns'];

export type InferQueryModel<
  TableName extends keyof TablesWithRelations,
  Columns extends IncludeColumns<TableName> | undefined = undefined,
  With extends IncludeRelation<TableName> | undefined = undefined,
> = BuildQueryResult<
  TablesWithRelations,
  TablesWithRelations[TableName],
  {
    columns: Columns;
    with: With;
  }
>;
