import {getContentData, getSortedContentData} from "@/lib/data";

const postsDirectory = 'projects';

export function getSortedPostsData() {
    const posts = getSortedContentData(postsDirectory)
      .filter(post => !post.hidden);
    return posts.sort((a, b) => {
        // Featured projects first
        if (a.featured && !b.featured) {
            return -1;
        }
        if (!a.featured && b.featured) {
            return 1;
        }
        // Then sort by status (active before archived)
        if (a.status === 'active' && b.status === 'archived') {
            return -1;
        }
        if (a.status === 'archived' && b.status === 'active') {
            return 1;
        }
        return 0;
    });
}

export function getPostData(slug) {
    return getContentData(postsDirectory, slug);
}
