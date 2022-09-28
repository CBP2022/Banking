function AllData(){
  const ctx = React.useContext(UserContext);
  console.log(ctx)

  const divStyle = {
    color: 'blue',
    width: '18rem',
    background:'yellow'
  };
  const listItems = ctx.users.map((user) => 
    <div className="card-body">
      This is some text within a card body.
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{String(user.name)}</li>
        <li className="list-group-item">{String(user.email)}</li>
        <li className="list-group-item">{String(user.password)}</li>
        <li className="list-group-item">{String(user.balance)}</li>
      </ul>
    </div>
  );
  console.log(listItems)
  return (
   
    <div className="card" style={divStyle}>
      {listItems}
    </div>
  );
}
