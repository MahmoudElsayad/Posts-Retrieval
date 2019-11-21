const isNotArchived = archivedIds => post =>
    archivedIds.indexOf(post.id) === -1;

const getReadablePosts = ({ postsState, archiveState }) =>
    postsState.posts.filter(isNotArchived(archiveState));

export {
    getReadablePosts
};