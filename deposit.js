function Deposit(){
  const ctx = React.useContext(UserContext);  
  const [cunqian, setCunqian]   = React.useState('');
  const [bb, setBB] = React.useState(ctx.users[ctx.users.length - 1].balance);
  const [err, setErr] = React.useState('');
  const [good,setgood]   = React.useState('');

  function isNumeric(value) {
    return /^\d+$/.test(value);
  }

  function validate(field, label){
    if (label === 'deposit' && isNaN(String(field))) {
      setErr('Error: ' + label + ' must be number');
      setTimeout(() => setErr(''),3000);
      return false;
    }
    if (label === 'deposit' && !isNumeric(field)) {
      setErr('Error: ' + label + ' can only be a positive number');
      setTimeout(() => setErr(''),3000);
      return false;
    }
   
    return true;
}

  function save (){
    if (!validate(cunqian, 'deposit'))     return;       

    ctx.users[ctx.users.length - 1].balance = Number(cunqian) + Number(ctx.users[ctx.users.length - 1].balance)
    setBB(ctx.users[ctx.users.length - 1].balance )
    setgood('Success:$'  + cunqian + ' amount is deposited succesfully!')
    setTimeout(() => setgood(''),3000);
  }
  
  return (
    
    <div class="card text-center" id="mycard">
  <div class="card-header">
    Deposit
  </div>
  <div class="card-body">
    <h5 class="card-title">Please enter the amount you'd like to deposit</h5>
     <p class="card-text">Current Balance ${bb}</p> 
    <input  id="deposit" placeholder="deposit amount..." value={cunqian} onChange={e => setCunqian(e.currentTarget.value)}/>
  </div>
  <div class="card-footer text-muted">
  <button onClick={save} class="btn btn-primary" disabled={!cunqian}>deposit</button>
  <div>{err}{good}</div>
  </div>
</div>
  )
    
}
