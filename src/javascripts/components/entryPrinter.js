const entryPrinter = (entryArray) => {
  document.querySelector('#entries').innerHTML = `
    <div class="d-flex flex-wrap" id="entry-container"></div>
  `;

  entryArray.forEach((entry) => {
    document.querySelector('#entry-container').innerHTML += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">4${entry.date}</h5>
          <p class="card-text">${entry.body}</p>
        </div>
      </div>
    `;
  });
};

export default entryPrinter;
