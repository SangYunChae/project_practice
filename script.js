const guestbookForm = document.getElementById('guestbook-form');
const guestbookEntries = document.getElementById('guestbook-entries');

guestbookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const time = new Date().toLocaleString();

    const entryDiv = document.createElement('div');
    entryDiv.classList.add('guestbook-entry');

    entryDiv.innerHTML = `
            <div class="entry-content">
                <div class="entry-text">
                    <strong>${name}</strong><br>
                    ${message}<br>
                    <small>${time}</small>
                </div>
                <button class="delete-button">삭제</button>
            </div>
        `;

    guestbookEntries.appendChild(entryDiv);

    document.getElementById('name').value = '';
    document.getElementById('message').value = '';

    entryDiv.querySelector('.delete-button').addEventListener('click', () => {
        guestbookEntries.removeChild(entryDiv);
    });
});
//https://www.geeksforgeeks.org/create-a-guestbook-using-html-css-and-javascript/