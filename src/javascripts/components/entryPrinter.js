const entryArray = [
  {
    date: '3/25/2021',
    body: `This week I spent my time continuing to familiarizing myself with Firebase in our restaraunt management system project. One of the main issues we kept running into was that the data in Firebase contained duplicate keys describing some of the staff objects stored in the staff node. Essentially, when trying to filter staff members by position, the dropdown menu that was being populated by the staff members positions had duplicates of waiters, cooks, etc. 
    
    The solution to removing the duplicates was to map through the array of objects and then pull out the key value pairs using dot notation, then creating a new Set using spread notation. I learned that Sets are primitive data types that cannot have duplicates, meaning that any of the staff positons the were duplicates were not passed into the Set. I then used that set to populate the dropdown list of filters.
    `,
    newConcept: 'The "Set" Data Type',
    gistLink: 'https://gist.github.com/seancrossettie/e2c69e41810263cc57d43c48a52cd549',
  },
];

const entryPrinter = (array) => {
  document.querySelector('#entries').innerHTML = `
    <div class="d-flex flex-wrap" id="entry-container"></div>
  `;

  array.forEach((entry) => {
    document.querySelector('#entry-container').innerHTML += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">4${entry.date}</h5>
          <h6>New Concept: ${entry.newConcept}</h6>
          <p class="card-text">${entry.body}</p>
        </div>
      </div>
    `;
  });
};

export { entryArray, entryPrinter };
