function Withdraw(){
  
    const ctx = React.useContext(UserContext);  
    const [error,seterror] = React.useState('')
    const [naqian, setnaqian]   = React.useState('');
    const [takemoney, settakemoney] = React.useState(ctx.users[ctx.users.length-1].balance);
    const [Success,setSuccess]   = React.useState('');
    function isNumeric(value) {
      return /^\d+$/.test(value);
    }

    function validate(field, label){
      if (label === 'Withdraw' && isNaN(String(field))) {
        seterror('Error: ' + label + ' must be number');
        setTimeout(() => seterror(''),3000);
        return false;
      }
      if (label === 'Withdraw' && !isNumeric(field)) {
        seterror('Error: ' + label + ' can only be a positive number');
        setTimeout(() => seterror(''),3000);
        return false;
      }
      if (Number(naqian)>Number(ctx.users[ctx.users.length - 1].balance)) {
        seterror('Error: ' + label + ' can only smaller than current balance');
        setTimeout(() => seterror(''),3000);
        return false;
      }
     
      return true;
      
  }

    function takeout (){
      if (!validate(naqian, 'Withdraw'))     return;
      ctx.users[ctx.users.length-1].balance = Number(ctx.users[ctx.users.length-1].balance)-Number(naqian)
      settakemoney(ctx.users[ctx.users.length-1].balance )
      setSuccess('Success:$'  + naqian + ' amount is withdrawn succesfully!');
      setTimeout(() => setSuccess(''),3000);
    }
    
    return (
      <div class="card text-center" id="mycard">
    <div class="card-header">
      Withdraw
    </div>
    <div class="card-body">
      <h5 class="card-title">Please enter the amount you'd like to deposit</h5>
       <p class="card-text">Current Balance ${takemoney}</p> 
      <input id="withdraw" placeholder="withdraw amount..." value={naqian} onChange={e => setnaqian(e.currentTarget.value)}/>
    </div>
    <div class="card-footer text-muted">
    <button onClick={takeout} class="btn btn-primary" disabled={!naqian}>Withdraw</button>
    </div>
    <div>{error}{Success}</div>
  </div>
    )
  }
  
