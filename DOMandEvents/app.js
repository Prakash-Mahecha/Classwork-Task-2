/*
let btns = document.querySelectorAll('#movie-list .delete');
btns.forEach(btn =>{
    btn.addEventListener('click', (e) =>{
        const li = e.target.parentElement;
        //console.log(li);
        li.parentNode.removeChild(li);
    });
})
*/
// Event Bubbling 
// Delete the list Item 
const list = document.querySelector('#movie-list ul');
list.addEventListener('click', (e) => {
    if(e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// Add a new Movie
const addMovieForm = document.forms['add-movie'];
addMovieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addMovieForm.querySelector("input[type='text']").value;
    //console.log(value);
    const li = document.createElement('li');
    const movieName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    deleteBtn.textContent = 'delete';
    movieName.textContent = value;
    deleteBtn.classList.add('delete');
    movieName.classList.add('name');
    li.appendChild(movieName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})

const searchMovieForm = document.forms['search-movies'];

searchMovieForm.addEventListener('keyup',(e) => {
    let movieList = document.querySelectorAll('#movie-list ul li');
    
    movieList.forEach( movie => {
        if(! movie.querySelector('.name').textContent.toLowerCase().includes(searchMovieForm.querySelector('input').value.toLowerCase())){
            movie.style.display = 'none';
        }else{
            movie.style.display = 'block';
        }
    }

    );
    
})
/*
let hideList = document.querySelector('input [type="checkbox"]');

hideList.addEventListener('click', (e) => {
    if(e.target.className == 'movies') {
        const ul = e.target.parentElement;
        hideList.removeChild(ul);
    }
});
*/