import { useState } from 'react';
import './App.css'
import Form from './Components/Form/Form';

function App() {
  const [profile, setProfile] = useState(null)
  console.log(profile)

  return (
    <>
      <h1>Image upload app</h1>
      <Form setProfile={ setProfile} />
    </>
  )
}

export default App;
