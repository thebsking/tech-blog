const addComment = async (event) => {
    event.preventDefault();
    const postUrl = window.location.pathname;
    const post_id = parseInt(postUrl.split('/')[2])
    const comment = $('#new-comment').val();
    
    const apiCall = await fetch('/api/comments/', {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (apiCall.ok) {
        document.location.reload();
    } else {
        alert(apiCall.statusText)
    }
};

$('#add-comment').on('submit', addComment)