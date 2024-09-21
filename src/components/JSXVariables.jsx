const name = 'Kim';
const thoughts = 'this is my testing variable line';

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          <h2>Hi! My name is {name}</h2>
          <h2>My name has {name.length} letters</h2>
          <h2>{thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
