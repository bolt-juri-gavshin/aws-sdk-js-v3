// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RestXmlProtocolServiceException as __BaseException } from "./RestXmlProtocolServiceException";

/**
 * @public
 */
export interface GreetingStruct {
  hi?: string;
}

/**
 * @public
 * @enum
 */
export const FooEnum = {
  BAR: "Bar",
  BAZ: "Baz",
  FOO: "Foo",
  ONE: "1",
  ZERO: "0",
} as const;
/**
 * @public
 */
export type FooEnum = (typeof FooEnum)[keyof typeof FooEnum];

export enum IntegerEnum {
  A = 1,
  B = 2,
  C = 3,
}

/**
 * @public
 */
export interface AllQueryStringTypesInput {
  queryString?: string;
  queryStringList?: string[];
  queryStringSet?: string[];
  queryByte?: number;
  queryShort?: number;
  queryInteger?: number;
  queryIntegerList?: number[];
  queryIntegerSet?: number[];
  queryLong?: number;
  queryFloat?: number;
  queryDouble?: number;
  queryDoubleList?: number[];
  queryBoolean?: boolean;
  queryBooleanList?: boolean[];
  queryTimestamp?: Date;
  queryTimestampList?: Date[];
  queryEnum?: FooEnum;
  queryEnumList?: FooEnum[];
  queryIntegerEnum?: IntegerEnum;
  queryIntegerEnumList?: IntegerEnum[];
  queryParamsMapOfStrings?: Record<string, string>;
}

/**
 * @public
 */
export interface PayloadWithXmlName {
  name?: string;
}

/**
 * @public
 */
export interface BodyWithXmlNameInputOutput {
  nested?: PayloadWithXmlName;
}

/**
 * @public
 */
export interface ComplexNestedErrorData {
  Foo?: string;
}

/**
 * This error is thrown when a request is invalid.
 * @public
 */
export class ComplexError extends __BaseException {
  readonly name: "ComplexError" = "ComplexError";
  readonly $fault: "client" = "client";
  Header?: string;
  TopLevel?: string;
  Nested?: ComplexNestedErrorData;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ComplexError, __BaseException>) {
    super({
      name: "ComplexError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ComplexError.prototype);
    this.Header = opts.Header;
    this.TopLevel = opts.TopLevel;
    this.Nested = opts.Nested;
  }
}

/**
 * @public
 */
export interface ConstantAndVariableQueryStringInput {
  baz?: string;
  maybeSet?: string;
}

/**
 * @public
 */
export interface ConstantQueryStringInput {
  hello: string | undefined;
}

/**
 * @public
 */
export interface DatetimeOffsetsOutput {
  datetime?: Date;
}

/**
 * @public
 */
export interface EmptyInputAndEmptyOutputInput {}

/**
 * @public
 */
export interface EmptyInputAndEmptyOutputOutput {}

/**
 * @public
 */
export interface HostLabelHeaderInput {
  accountId: string | undefined;
}

/**
 * @public
 */
export interface EndpointWithHostLabelOperationRequest {
  label: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StringEnum = {
  V: "enumvalue",
} as const;
/**
 * @public
 */
export type StringEnum = (typeof StringEnum)[keyof typeof StringEnum];

/**
 * @public
 */
export interface EnumPayloadInput {
  payload?: StringEnum;
}

/**
 * @public
 */
export interface FlattenedXmlMapRequest {
  myMap?: Record<string, FooEnum>;
}

/**
 * @public
 */
export interface FlattenedXmlMapResponse {
  myMap?: Record<string, FooEnum>;
}

/**
 * @public
 */
export interface FlattenedXmlMapWithXmlNameRequest {
  myMap?: Record<string, string>;
}

/**
 * @public
 */
export interface FlattenedXmlMapWithXmlNameResponse {
  myMap?: Record<string, string>;
}

/**
 * @public
 */
export interface FlattenedXmlMapWithXmlNamespaceOutput {
  myMap?: Record<string, string>;
}

/**
 * @public
 */
export interface FractionalSecondsOutput {
  datetime?: Date;
}

/**
 * @public
 */
export interface GreetingWithErrorsOutput {
  greeting?: string;
}

/**
 * This error is thrown when an invalid greeting value is provided.
 * @public
 */
export class InvalidGreeting extends __BaseException {
  readonly name: "InvalidGreeting" = "InvalidGreeting";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGreeting, __BaseException>) {
    super({
      name: "InvalidGreeting",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGreeting.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface HttpPayloadTraitsInputOutput {
  foo?: string;
  blob?: Uint8Array;
}

/**
 * @public
 */
export interface HttpPayloadTraitsWithMediaTypeInputOutput {
  foo?: string;
  blob?: Uint8Array;
}

/**
 * @public
 */
export interface HttpPayloadWithMemberXmlNameInputOutput {
  nested?: PayloadWithXmlName;
}

/**
 * @public
 */
export interface NestedPayload {
  greeting?: string;
  name?: string;
}

/**
 * @public
 */
export interface HttpPayloadWithStructureInputOutput {
  nested?: NestedPayload;
}

/**
 * @public
 */
export type UnionPayload = UnionPayload.GreetingMember | UnionPayload.$UnknownMember;

/**
 * @public
 */
export namespace UnionPayload {
  export interface GreetingMember {
    greeting: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    greeting?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    greeting: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UnionPayload, visitor: Visitor<T>): T => {
    if (value.greeting !== undefined) return visitor.greeting(value.greeting);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface HttpPayloadWithUnionInputOutput {
  nested?: UnionPayload;
}

/**
 * @public
 */
export interface HttpPayloadWithXmlNameInputOutput {
  nested?: PayloadWithXmlName;
}

/**
 * @public
 */
export interface PayloadWithXmlNamespace {
  name?: string;
}

/**
 * @public
 */
export interface HttpPayloadWithXmlNamespaceInputOutput {
  nested?: PayloadWithXmlNamespace;
}

/**
 * @public
 */
export interface PayloadWithXmlNamespaceAndPrefix {
  name?: string;
}

/**
 * @public
 */
export interface HttpPayloadWithXmlNamespaceAndPrefixInputOutput {
  nested?: PayloadWithXmlNamespaceAndPrefix;
}

/**
 * @public
 */
export interface HttpPrefixHeadersInputOutput {
  foo?: string;
  fooMap?: Record<string, string>;
}

/**
 * @public
 */
export interface HttpRequestWithFloatLabelsInput {
  float: number | undefined;
  double: number | undefined;
}

/**
 * @public
 */
export interface HttpRequestWithGreedyLabelInPathInput {
  foo: string | undefined;
  baz: string | undefined;
}

/**
 * @public
 */
export interface HttpRequestWithLabelsInput {
  string: string | undefined;
  short: number | undefined;
  integer: number | undefined;
  long: number | undefined;
  float: number | undefined;
  double: number | undefined;
  /**
   * Serialized in the path as true or false.
   * @public
   */
  boolean: boolean | undefined;

  /**
   * Note that this member has no format, so it's serialized as an RFC 3399 date-time.
   * @public
   */
  timestamp: Date | undefined;
}

/**
 * @public
 */
export interface HttpRequestWithLabelsAndTimestampFormatInput {
  memberEpochSeconds: Date | undefined;
  memberHttpDate: Date | undefined;
  memberDateTime: Date | undefined;
  defaultFormat: Date | undefined;
  targetEpochSeconds: Date | undefined;
  targetHttpDate: Date | undefined;
  targetDateTime: Date | undefined;
}

/**
 * @public
 */
export interface HttpResponseCodeOutput {
  Status?: number;
}

/**
 * @public
 */
export interface StringPayloadInput {
  payload?: string;
}

/**
 * @public
 */
export interface IgnoreQueryParamsInResponseOutput {
  baz?: string;
}

/**
 * @public
 */
export interface InputAndOutputWithHeadersIO {
  headerString?: string;
  headerByte?: number;
  headerShort?: number;
  headerInteger?: number;
  headerLong?: number;
  headerFloat?: number;
  headerDouble?: number;
  headerTrueBool?: boolean;
  headerFalseBool?: boolean;
  headerStringList?: string[];
  headerStringSet?: string[];
  headerIntegerList?: number[];
  headerBooleanList?: boolean[];
  headerTimestampList?: Date[];
  headerEnum?: FooEnum;
  headerEnumList?: FooEnum[];
}

/**
 * @public
 */
export interface NestedXmlMapsRequest {
  nestedMap?: Record<string, Record<string, FooEnum>>;
  flatNestedMap?: Record<string, Record<string, FooEnum>>;
}

/**
 * @public
 */
export interface NestedXmlMapsResponse {
  nestedMap?: Record<string, Record<string, FooEnum>>;
  flatNestedMap?: Record<string, Record<string, FooEnum>>;
}

/**
 * @public
 */
export interface NoInputAndOutputOutput {}

/**
 * @public
 */
export interface NullAndEmptyHeadersIO {
  a?: string;
  b?: string;
  c?: string[];
}

/**
 * @public
 */
export interface OmitsNullSerializesEmptyStringInput {
  nullValue?: string;
  emptyString?: string;
}

/**
 * @public
 */
export interface PutWithContentEncodingInput {
  encoding?: string;
  data?: string;
}

/**
 * @public
 */
export interface QueryIdempotencyTokenAutoFillInput {
  token?: string;
}

/**
 * @public
 */
export interface QueryParamsAsStringListMapInput {
  qux?: string;
  foo?: Record<string, string[]>;
}

/**
 * @public
 */
export interface QueryPrecedenceInput {
  foo?: string;
  baz?: Record<string, string>;
}

/**
 * @public
 */
export interface SimpleScalarPropertiesRequest {
  foo?: string;
  stringValue?: string;
  trueBooleanValue?: boolean;
  falseBooleanValue?: boolean;
  byteValue?: number;
  shortValue?: number;
  integerValue?: number;
  longValue?: number;
  floatValue?: number;
  doubleValue?: number;
}

/**
 * @public
 */
export interface SimpleScalarPropertiesResponse {
  foo?: string;
  stringValue?: string;
  trueBooleanValue?: boolean;
  falseBooleanValue?: boolean;
  byteValue?: number;
  shortValue?: number;
  integerValue?: number;
  longValue?: number;
  floatValue?: number;
  doubleValue?: number;
}

/**
 * @public
 */
export interface TimestampFormatHeadersIO {
  memberEpochSeconds?: Date;
  memberHttpDate?: Date;
  memberDateTime?: Date;
  defaultFormat?: Date;
  targetEpochSeconds?: Date;
  targetHttpDate?: Date;
  targetDateTime?: Date;
}

/**
 * @public
 */
export interface XmlAttributesRequest {
  foo?: string;
  attr?: string;
}

/**
 * @public
 */
export interface XmlAttributesResponse {
  foo?: string;
  attr?: string;
}

/**
 * @public
 */
export interface XmlAttributesPayloadRequest {
  foo?: string;
  attr?: string;
}

/**
 * @public
 */
export interface XmlAttributesOnPayloadRequest {
  payload?: XmlAttributesPayloadRequest;
}

/**
 * @public
 */
export interface XmlAttributesPayloadResponse {
  foo?: string;
  attr?: string;
}

/**
 * @public
 */
export interface XmlAttributesOnPayloadResponse {
  payload?: XmlAttributesPayloadResponse;
}

/**
 * @public
 */
export interface XmlBlobsRequest {
  data?: Uint8Array;
}

/**
 * @public
 */
export interface XmlBlobsResponse {
  data?: Uint8Array;
}

/**
 * @public
 */
export interface XmlEmptyBlobsRequest {
  data?: Uint8Array;
}

/**
 * @public
 */
export interface XmlEmptyBlobsResponse {
  data?: Uint8Array;
}

/**
 * @public
 */
export interface StructureListMember {
  a?: string;
  b?: string;
}

/**
 * @public
 */
export interface XmlEmptyListsRequest {
  stringList?: string[];
  stringSet?: string[];
  integerList?: number[];
  booleanList?: boolean[];
  timestampList?: Date[];
  enumList?: FooEnum[];
  intEnumList?: IntegerEnum[];
  /**
   * A list of lists of strings.
   * @public
   */
  nestedStringList?: string[][];

  renamedListMembers?: string[];
  flattenedList?: string[];
  flattenedList2?: string[];
  flattenedListWithMemberNamespace?: string[];
  flattenedListWithNamespace?: string[];
  structureList?: StructureListMember[];
  flattenedStructureList?: StructureListMember[];
}

/**
 * @public
 */
export interface XmlEmptyListsResponse {
  stringList?: string[];
  stringSet?: string[];
  integerList?: number[];
  booleanList?: boolean[];
  timestampList?: Date[];
  enumList?: FooEnum[];
  intEnumList?: IntegerEnum[];
  /**
   * A list of lists of strings.
   * @public
   */
  nestedStringList?: string[][];

  renamedListMembers?: string[];
  flattenedList?: string[];
  flattenedList2?: string[];
  flattenedListWithMemberNamespace?: string[];
  flattenedListWithNamespace?: string[];
  structureList?: StructureListMember[];
  flattenedStructureList?: StructureListMember[];
}

/**
 * @public
 */
export interface XmlEmptyMapsRequest {
  myMap?: Record<string, GreetingStruct>;
}

/**
 * @public
 */
export interface XmlEmptyMapsResponse {
  myMap?: Record<string, GreetingStruct>;
}

/**
 * @public
 */
export interface XmlEmptyStringsRequest {
  emptyString?: string;
}

/**
 * @public
 */
export interface XmlEmptyStringsResponse {
  emptyString?: string;
}

/**
 * @public
 */
export interface XmlEnumsRequest {
  fooEnum1?: FooEnum;
  fooEnum2?: FooEnum;
  fooEnum3?: FooEnum;
  fooEnumList?: FooEnum[];
  fooEnumSet?: FooEnum[];
  fooEnumMap?: Record<string, FooEnum>;
}

/**
 * @public
 */
export interface XmlEnumsResponse {
  fooEnum1?: FooEnum;
  fooEnum2?: FooEnum;
  fooEnum3?: FooEnum;
  fooEnumList?: FooEnum[];
  fooEnumSet?: FooEnum[];
  fooEnumMap?: Record<string, FooEnum>;
}

/**
 * @public
 */
export interface XmlIntEnumsRequest {
  intEnum1?: IntegerEnum;
  intEnum2?: IntegerEnum;
  intEnum3?: IntegerEnum;
  intEnumList?: IntegerEnum[];
  intEnumSet?: IntegerEnum[];
  intEnumMap?: Record<string, IntegerEnum>;
}

/**
 * @public
 */
export interface XmlIntEnumsResponse {
  intEnum1?: IntegerEnum;
  intEnum2?: IntegerEnum;
  intEnum3?: IntegerEnum;
  intEnumList?: IntegerEnum[];
  intEnumSet?: IntegerEnum[];
  intEnumMap?: Record<string, IntegerEnum>;
}

/**
 * @public
 */
export interface XmlListsRequest {
  stringList?: string[];
  stringSet?: string[];
  integerList?: number[];
  booleanList?: boolean[];
  timestampList?: Date[];
  enumList?: FooEnum[];
  intEnumList?: IntegerEnum[];
  /**
   * A list of lists of strings.
   * @public
   */
  nestedStringList?: string[][];

  renamedListMembers?: string[];
  flattenedList?: string[];
  flattenedList2?: string[];
  flattenedListWithMemberNamespace?: string[];
  flattenedListWithNamespace?: string[];
  structureList?: StructureListMember[];
  flattenedStructureList?: StructureListMember[];
}

/**
 * @public
 */
export interface XmlListsResponse {
  stringList?: string[];
  stringSet?: string[];
  integerList?: number[];
  booleanList?: boolean[];
  timestampList?: Date[];
  enumList?: FooEnum[];
  intEnumList?: IntegerEnum[];
  /**
   * A list of lists of strings.
   * @public
   */
  nestedStringList?: string[][];

  renamedListMembers?: string[];
  flattenedList?: string[];
  flattenedList2?: string[];
  flattenedListWithMemberNamespace?: string[];
  flattenedListWithNamespace?: string[];
  structureList?: StructureListMember[];
  flattenedStructureList?: StructureListMember[];
}

/**
 * @public
 */
export interface XmlMapsRequest {
  myMap?: Record<string, GreetingStruct>;
}

/**
 * @public
 */
export interface XmlMapsResponse {
  myMap?: Record<string, GreetingStruct>;
}

/**
 * @public
 */
export interface XmlMapsXmlNameRequest {
  myMap?: Record<string, GreetingStruct>;
}

/**
 * @public
 */
export interface XmlMapsXmlNameResponse {
  myMap?: Record<string, GreetingStruct>;
}

/**
 * @public
 */
export interface XmlMapWithXmlNamespaceRequest {
  myMap?: Record<string, string>;
}

/**
 * @public
 */
export interface XmlMapWithXmlNamespaceResponse {
  myMap?: Record<string, string>;
}

/**
 * @public
 */
export interface XmlNamespaceNested {
  foo?: string;
  values?: string[];
}

/**
 * @public
 */
export interface XmlNamespacesRequest {
  nested?: XmlNamespaceNested;
}

/**
 * @public
 */
export interface XmlNamespacesResponse {
  nested?: XmlNamespaceNested;
}

/**
 * @public
 */
export interface XmlTimestampsRequest {
  normal?: Date;
  dateTime?: Date;
  dateTimeOnTarget?: Date;
  epochSeconds?: Date;
  epochSecondsOnTarget?: Date;
  httpDate?: Date;
  httpDateOnTarget?: Date;
}

/**
 * @public
 */
export interface XmlTimestampsResponse {
  normal?: Date;
  dateTime?: Date;
  dateTimeOnTarget?: Date;
  epochSeconds?: Date;
  epochSecondsOnTarget?: Date;
  httpDate?: Date;
  httpDateOnTarget?: Date;
}

/**
 * @public
 */
export interface XmlNestedUnionStruct {
  stringValue?: string;
  booleanValue?: boolean;
  byteValue?: number;
  shortValue?: number;
  integerValue?: number;
  longValue?: number;
  floatValue?: number;
  doubleValue?: number;
}

/**
 * @public
 */
export type XmlUnionShape =
  | XmlUnionShape.BooleanValueMember
  | XmlUnionShape.ByteValueMember
  | XmlUnionShape.DoubleValueMember
  | XmlUnionShape.FloatValueMember
  | XmlUnionShape.IntegerValueMember
  | XmlUnionShape.LongValueMember
  | XmlUnionShape.ShortValueMember
  | XmlUnionShape.StringValueMember
  | XmlUnionShape.StructValueMember
  | XmlUnionShape.UnionValueMember
  | XmlUnionShape.$UnknownMember;

/**
 * @public
 */
export namespace XmlUnionShape {
  export interface StringValueMember {
    stringValue: string;
    booleanValue?: never;
    byteValue?: never;
    shortValue?: never;
    integerValue?: never;
    longValue?: never;
    floatValue?: never;
    doubleValue?: never;
    unionValue?: never;
    structValue?: never;
    $unknown?: never;
  }

  export interface BooleanValueMember {
    stringValue?: never;
    booleanValue: boolean;
    byteValue?: never;
    shortValue?: never;
    integerValue?: never;
    longValue?: never;
    floatValue?: never;
    doubleValue?: never;
    unionValue?: never;
    structValue?: never;
    $unknown?: never;
  }

  export interface ByteValueMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue: number;
    shortValue?: never;
    integerValue?: never;
    longValue?: never;
    floatValue?: never;
    doubleValue?: never;
    unionValue?: never;
    structValue?: never;
    $unknown?: never;
  }

  export interface ShortValueMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue?: never;
    shortValue: number;
    integerValue?: never;
    longValue?: never;
    floatValue?: never;
    doubleValue?: never;
    unionValue?: never;
    structValue?: never;
    $unknown?: never;
  }

  export interface IntegerValueMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue?: never;
    shortValue?: never;
    integerValue: number;
    longValue?: never;
    floatValue?: never;
    doubleValue?: never;
    unionValue?: never;
    structValue?: never;
    $unknown?: never;
  }

  export interface LongValueMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue?: never;
    shortValue?: never;
    integerValue?: never;
    longValue: number;
    floatValue?: never;
    doubleValue?: never;
    unionValue?: never;
    structValue?: never;
    $unknown?: never;
  }

  export interface FloatValueMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue?: never;
    shortValue?: never;
    integerValue?: never;
    longValue?: never;
    floatValue: number;
    doubleValue?: never;
    unionValue?: never;
    structValue?: never;
    $unknown?: never;
  }

  export interface DoubleValueMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue?: never;
    shortValue?: never;
    integerValue?: never;
    longValue?: never;
    floatValue?: never;
    doubleValue: number;
    unionValue?: never;
    structValue?: never;
    $unknown?: never;
  }

  export interface UnionValueMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue?: never;
    shortValue?: never;
    integerValue?: never;
    longValue?: never;
    floatValue?: never;
    doubleValue?: never;
    unionValue: XmlUnionShape;
    structValue?: never;
    $unknown?: never;
  }

  export interface StructValueMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue?: never;
    shortValue?: never;
    integerValue?: never;
    longValue?: never;
    floatValue?: never;
    doubleValue?: never;
    unionValue?: never;
    structValue: XmlNestedUnionStruct;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValue?: never;
    booleanValue?: never;
    byteValue?: never;
    shortValue?: never;
    integerValue?: never;
    longValue?: never;
    floatValue?: never;
    doubleValue?: never;
    unionValue?: never;
    structValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    stringValue: (value: string) => T;
    booleanValue: (value: boolean) => T;
    byteValue: (value: number) => T;
    shortValue: (value: number) => T;
    integerValue: (value: number) => T;
    longValue: (value: number) => T;
    floatValue: (value: number) => T;
    doubleValue: (value: number) => T;
    unionValue: (value: XmlUnionShape) => T;
    structValue: (value: XmlNestedUnionStruct) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: XmlUnionShape, visitor: Visitor<T>): T => {
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.booleanValue !== undefined) return visitor.booleanValue(value.booleanValue);
    if (value.byteValue !== undefined) return visitor.byteValue(value.byteValue);
    if (value.shortValue !== undefined) return visitor.shortValue(value.shortValue);
    if (value.integerValue !== undefined) return visitor.integerValue(value.integerValue);
    if (value.longValue !== undefined) return visitor.longValue(value.longValue);
    if (value.floatValue !== undefined) return visitor.floatValue(value.floatValue);
    if (value.doubleValue !== undefined) return visitor.doubleValue(value.doubleValue);
    if (value.unionValue !== undefined) return visitor.unionValue(value.unionValue);
    if (value.structValue !== undefined) return visitor.structValue(value.structValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface RecursiveShapesInputOutputNested1 {
  foo?: string;
  nested?: RecursiveShapesInputOutputNested2;
}

/**
 * @public
 */
export interface RecursiveShapesInputOutputNested2 {
  bar?: string;
  recursiveMember?: RecursiveShapesInputOutputNested1;
}

/**
 * @public
 */
export interface XmlUnionsRequest {
  unionValue?: XmlUnionShape;
}

/**
 * @public
 */
export interface XmlUnionsResponse {
  unionValue?: XmlUnionShape;
}

/**
 * @public
 */
export interface RecursiveShapesRequest {
  nested?: RecursiveShapesInputOutputNested1;
}

/**
 * @public
 */
export interface RecursiveShapesResponse {
  nested?: RecursiveShapesInputOutputNested1;
}
