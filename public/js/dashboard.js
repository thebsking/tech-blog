//new post function
const newPost = async (event) => {
    event.preventDefault();
    const postTitle = $('#title-text').val();
    const postContent = $('#post-content').val();
    console.log(`Title: ${postTitle} Content: ${postContent}`)
    const apiCall = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ postTitle, postContent }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (apiCall.ok) {
        document.location.reload();
    } else {
        console.log(apiCall)
        alert(apiCall.statusText);
    }
};

//delete function
const delePost = async (event) => {
    event.preventDefault();
    const parentId = $(event.target).parent().parent().attr('id');
    const postId = parentId.split('-')

    const apiCall = await fetch(`/api/posts/${postId[1]}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    if (apiCall.ok) {
        document.location.reload();
    } else {
        alert(apiCall.statusText);
    }
}
//edit function
// const editPost = async (event) => {
//     event.preventDefault();
//     const postUrl = $('#post-url').attr('href');
//     const currentContent = await fetch(postUrl, {

//     })
// }



//event listeners
$('.create').on('click', newPost)
$('.delete').on('click', delePost);
//$('.edit').on('click', editPost);