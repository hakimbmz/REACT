import "./Model.css";

function Model(props) {
  const okay=()=>{
    props.onClick();
    props.removeModel(); 
  }
  return (
    <div>
      <div className="backdrop" onClick={props.removeModel} />
      <div className="ui segment model ">
        <h2 className="title">{props.title}</h2>
        <div className="message">
          <p>{props.message}</p>
        </div>
        <footer className="footer">
          <button className="ui primary button" onClick={okay}> Okay</button>
          <button  className="ui secondary button" onClick={props.removeModel}>Cancel</button>
        </footer>
      </div>
    </div>
  );
}

export default Model;
