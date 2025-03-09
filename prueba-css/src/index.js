var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `
  <section class="header">
    <h1 class="title">Unique Element Challenge</h1>
    <img src="./src/assets/logo.svg" alt="Logo" class="image"/>
  </section>
  <div class="container">
    <section class="instructions_section">
      <div class="section-content">
        <h2 class="section-title">Target</h2>
        <span class="">Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</span>
      </div>
      <div class="section-content">
        <h2 class="section-title">Considerations</h2>
        <ul class="list">
          <li>Values are duplicated only twice.</li>
          <li>There is only one non duplicate value.</li>
          <li>The non duplicate value can be placed anywhere on the array.</li>
          <li>The result must be an integer.</li>
        </ul>
      </div>
    </section>
    <section class="results-section">
      <div class="test-data-box">
        <h3 class="results-title">Test data</h3>
        <span>${arrayTest}</span>
      </div>
      <section class="results">
        <div class="expected-result">
          <h3 class="results-title">Expected result</h3>
          <span>4</span>
        </div>
        <div class="your-result">
          <h3 class="results-title">Your result</h3>
          <span>4</span>
        </div>
      </section>
    </section>
  </div>
</div>

`;
