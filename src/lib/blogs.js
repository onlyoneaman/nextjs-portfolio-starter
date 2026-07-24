import {getContentData, getSortedContentData} from "@/lib/data";

const postsDirectory = 'blogs';

export function getSortedPostsData() {
    const allPosts = getSortedContentData(postsDirectory);
    // Only include indexable posts
    return allPosts.filter(post => !post.private && !post.hidden && post.slug !== 'template');
}

export function getPostData(slug) {
    return getContentData(postsDirectory, slug);
}
