import image from "../src/images/illustration-empty.svg";
import calculator from "../src/images/icon-calculator.svg";

const App = () => {
  return (
    <div className="App">
      <div className="form-container">
        <div className="header">
          <h2 className="title">Mortgage Calculator</h2>
          <a className="clear">Clear All</a>
        </div>
        <form>
          <label>Mortgage Amount</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">€</span>
            <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div className="row">
            <div className="col">
              <label>Mortgage Term</label>
              <div className="input-group">
                <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                <span className="input-group-text">years</span>
              </div>
            </div>
            <div className="col">
              <label>Interest Rate</label>
              <div className="input-group">
                <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                <span className="input-group-text">%</span>
              </div>
            </div>
          </div>
          <label>Mortgage Type</label>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label class="form-check-label" for="flexRadioDefault1">
              Repayment
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2">
            Interest Only
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            <img src={calculator}></img>
            Calculate Repayments
          </button>
        </form>
      </div >
      <div className="results-shows">
        <img src={image} />
        <h4 className="result-text">Result show here</h4>
        <p className="paragraph">Complet the form and click "calculate repayments" to see what your monthly repayments would be.</p>
      </div>
    </div >
  );
}

export default App;
