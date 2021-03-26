const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navigation"></div>
    <div id="main-container">
      <div id="entries"></div>
    </div>
  `;
};

export default domBuilder;
