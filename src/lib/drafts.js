import {getContentData, getSortedContentData} from "@/lib/data";

const draftsDirectory = 'drafts';

export function getSortedDraftsData() {
    return getSortedContentData(draftsDirectory);
}

export function getDraftData(slug) {
    return getContentData(draftsDirectory, slug);
}
