import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerNOTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NOTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly note: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNOTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NOTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly note: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NOTE = LazyLoading extends LazyLoadingDisabled ? EagerNOTE : LazyNOTE

export declare const NOTE: (new (init: ModelInit<NOTE>) => NOTE) & {
  copyOf(source: NOTE, mutator: (draft: MutableModel<NOTE>) => MutableModel<NOTE> | void): NOTE;
}