class Calculatrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valeurChamps: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);
  }

  handleClick(value) {
    this.setState((state) => ({ valeurChamps: state.valeurChamps + value }));
  }

  handleCalculate() {
    if (this.state.valeurChamps === '') {
      this.setState({ valeurChamps: 'error' });
      return;
    }
    try {
      this.setState((state) => ({
        valeurChamps: eval(state.valeurChamps).toString(),
      }));
    } catch (e) {
      this.setState({ valeurChamps: 'error' });
    }
  }

  handleClear() {
    this.setState((state) => ({
      valeurChamps: state.valeurChamps.slice(0, -1),
    }));
  }
  handleClearAll() {
    this.setState({
      valeurChamps: '',
    });
  }

  render() {
    return (
      <div className="d-flex mt-4 flex-column w-100 justify-content-center align-items-center alldiv">
        <div className="Calculatrice">
          <div className="div1">
            <input className="champs w-100" value={this.state.valeurChamps} />
          </div>
          <div className="Nombre d-block">
            <div className="div1">
              <button
                type="btn"
                className="nbre mx-1 my-2 bRed"
                onClick={() => {
                  this.handleClick('.');
                }}
              >
                .
              </button>
              <button
                type="btn"
                className="nbre mx-1 my-2 bRed"
                onClick={() => {
                  this.handleClick('(');
                }}
              >
                (
              </button>
              <button
                type="btn"
                className="nbre mx-1 my-2 bRed"
                onClick={() => {
                  this.handleClick(')');
                }}
              >
                )
              </button>
              <button
                type="btn"
                className="nbre mx-1 my-2 bRed"
                onClick={() => {
                  this.handleClearAll('R');
                }}
              >
                R
              </button>
            </div>

            <div className="div1">
              <button
                type="btn"
                className="nbre mx-1 my-2  "
                onClick={() => {
                  this.handleClick('1');
                }}
              >
                1
              </button>
              <button
                type="btn"
                className="nbre mx-1 my-2  "
                onClick={() => {
                  this.handleClick('2');
                }}
              >
                2
              </button>
              <button
                type="btn"
                className="nbre mx-1 my-2  "
                onClick={() => {
                  this.handleClick('3');
                }}
              >
                3
              </button>
              <button
                type="btn"
                className="nbre mx-1 my-2 bRed"
                onClick={() => {
                  this.handleClick('+');
                }}
              >
                +
              </button>
            </div>
            <div className="div1">
              <button
                type="btn"
                className="nbre mx-1 my-2  "
                onClick={() => {
                  this.handleClick('4');
                }}
              >
                4
              </button>
              <button
                type="btn"
                className="nbre mx-1 my-2  "
                onClick={() => {
                  this.handleClick('5');
                }}
              >
                5
              </button>
              <button
                type="btn"
                className="nbre mx-1 my-2  "
                onClick={() => {
                  this.handleClick('6');
                }}
              >
                6
              </button>
              <button
                type="btn"
                className="nbre mx-1 my-2 bRed"
                onClick={() => {
                  this.handleClick('-');
                }}
              >
                -
              </button>
            </div>
            <div className="div1">
              <button
                type="btn"
                className="nbre mx-1 my-2  "
                onClick={() => {
                  this.handleClick('7');
                }}
              >
                7
              </button>
              <button
                type="btn"
                className="nbre mx-1 my-2  "
                onClick={() => {
                  this.handleClick('8');
                }}
              >
                8
              </button>
              <button
                type="btn"
                className="nbre mx-1 my-2  "
                onClick={() => {
                  this.handleClick('9');
                }}
              >
                9
              </button>
              <button
                type="btn"
                className="nbre mx-1 my-2 bRed"
                onClick={() => {
                  this.handleClick('*');
                }}
              >
                *
              </button>
            </div>
            <div className="div1">
              <button
                type="btn"
                className="nbre mx-1 my-2 bRed"
                onClick={() => {
                  this.handleClick('/');
                }}
              >
                /
              </button>
              <button
                type="btn"
                className="nbre mx-1 my-2  "
                onClick={() => {
                  this.handleClick('0');
                }}
              >
                0
              </button>
              <button
                type="btn"
                className="nbre mx-1 my-2 bRed"
                onClick={() => {
                  this.handleClear('C');
                }}
              >
                C
              </button>
              <button
                type="btn"
                className="nbre mx-1 my-2 bRed"
                onClick={() => {
                  this.handleCalculate('=');
                }}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculatrice />, document.querySelector('.root'));
