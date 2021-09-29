import { createSelector } from "reselect";

const selectCollection = state => state.collection;

export const selectCollectionCollections = createSelector(
    [selectCollection],
    collection => collection.collections
);