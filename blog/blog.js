const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}

]
const main = document.querySelector('main');

function CreateBookReview(articleArray)
{
	articleArray.forEach(item => {
		const articleElement = document.createElement('section');
		articleElement.classList.add('grid');

		articleElement.innerHTML = `<h2>${article.title}</h2>`
		+ `<p class="date">${article.date}</p>`
		+ `<img src="${article.imgSrc}" alt="${article.imgAlt}">`
		+ `<p class="description">${article.description}</p>`
		+ `<p class="ages">Ages: ${article.ages}</p>`
		+ `<p class="genre">Genre: ${article.genre}</p>`
		+ `<p class="stars">Rating: ${article.stars}</p>`;

		`<div class="info>
		<p class="date">${item.date}</p>
		<p>${item.ages}</p>
		<p>${item.genre}</p>
		<p>${item.stars}</p>
		</div>
		<div class="book">
			<h2>${item.title}</h2>
			<img src="${item.imSrc}" alt="${item.imgAlt}">
			<p>${item.description} <a href="#>Read More...</a></p>
		</div>
			<div class="filters">
			<p>Filters will go here</p>
		</div>
		`;

	


	})
}

CreateBookReview(articles);

// body {
//     --tfc-dark-mode-text-primary: #e4e4e7;
//     --tfc-dark-mode-text-secondary: #71717a;
//     --tfc-dark-mode-bg-primary: #27272a;
//     --tfc-dark-mode-bg-primary-2: #3f3f46;
//     --tfc-dark-mode-bg-secondary: #52525b;
//     --tfc-sidebar-width: 288px;
// }