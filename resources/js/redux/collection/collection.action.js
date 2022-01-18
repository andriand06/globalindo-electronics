import { collection } from 'firebase/firestore'
import { CollectionActionTypes} from './collection.types'

const selectCollectionsForPreview = () => ({
    type: CollectionActionTypes.SELECT_COLLECTION_FOR_PREVIEW,
});

export default selectCollectionsForPreview;