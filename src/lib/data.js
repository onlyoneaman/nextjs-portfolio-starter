import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getSortedContentData(folderName) {
    const folder = path.join(contentDirectory, folderName);

    // Get file names under the specified folder
    const fileNames = fs.readdirSync(folder);
    const allContentData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(folder, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the content metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        // For listing, ensure slug and at least date/title for sorting, but do not enforce all Blog fields here
        return {
            slug,
            ...matterResult.data,
        };
    });

    // Sort content by date
    return allContentData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getContentData(folderName, slug) {
    const fullPath = path.join(contentDirectory, folderName, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the content metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    // Ensure all required Blog fields are present
    return {
        slug,
        content: matterResult.content || "",
        title: matterResult.data.title || "",
        description: matterResult.data.description || "",
        date: matterResult.data.date || "",
        type: matterResult.data.type || "other",
        // Spread any additional frontmatter fields
        ...matterResult.data,
    };
}
