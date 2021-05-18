

//delete function
const delePost = async (event) => {
    event.preventDefault();
    const parentId = $(event.target).parent().parent().attr('id');
    const postId = parentId.split('-')
    
    const apiCall = await fetch(`/api/posts/${postId[1]}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
    if(apiCall.ok){
    document.location.reload();
    } else {
        alert(apiCall.statusText);
    }
}
//edit function
const editPost = (event) => {
    event.preventDefault(); 
}



//event listeners
$('.delete').on('click', delePost);
$('.edit').on('click', editPost);