import "./App.css"
function App() {
  const Respond = (event) => {
    event.preventDefault()
    console.log(event.target[0].value)
  }

  var name,email,gender;

  const SubmitFun = (event) => {
    event.preventDefault()
    console.log(name)
    console.log(email)
    console.log(gender)
  }

  return (
    <>
      <form className='details' onSubmit={SubmitFun}>
        <input onChange={(event) => name = event.target.value} type="text" placeholder="Enter name" id='name' name="name" /><br />
        <input onChange={(event) => email = event.target.value} type="email" placeholder='Enter email' id='email' name='email' /><br />
        <label htmlFor="gender">Gender</label><br />
        <label htmlFor="male">male</label>
        <input onChange={(event) => gender = event.target.value} type="radio" name='gender' id='male' value={'male'} />
        <label htmlFor="female">female</label>
        <input onChange={(event) => gender = event.target.value} type="radio" name='gender' id='female' value={'female'} /><br />
        <input type="submit" value={'submit'} />
        <button onClick={(event)=>Respond(event)}>Respond</button>
      </form>
    </>
  )
}

export default App
