

//delete function
const delePost = async (event) => {
    event.preventDefault();
    const parentId = $(event.target).parent().parent().attr('id');
    const postId = parentId.split('-')
    
    const apiCall = await fetch(`/api/posts/${postId[1]}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
    document.location.reload
}

$('.delete').on('click', delePost)