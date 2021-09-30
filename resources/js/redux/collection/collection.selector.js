import { createSelector } from "reselect";
import memoize from "lodash.memoize";
const COLLECTION_ID_MAP = {
    largehouseholdappliances: 1,
    smallhouseholdappliances: 2,
    itequipments: 3,
    electricaltools: 4,
    monitoringcontrolinstruments: 5
}

const selectCollection = state => state.collection;

export const selectCollectionCollections = createSelector(
    [selectCollection],
    collection => collection.collections
);

export const selectCollectionUrlParam = memoize((urlParam) =>
    createSelector(
        [selectCollectionCollections],
        (collections) => collections.find(collection => collection.id === COLLECTION_ID_MAP[urlParam])
    ))