 const search = document.querySelector('#search-btn');
 const searchBox = document.querySelector('.search-form');
 search.addEventListener('click', function() {
       searchBox.classList.remove('hidden');
    });
 document.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                searchBox.classList.add('hidden');
            }
        });
