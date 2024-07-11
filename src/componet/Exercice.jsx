import React,{useState} from 'react'

const Exercice = () => {
    const [inputNom, setInputNom] = useState('');
    const handeleNomChange=(event)=> {
        setInputNom(event.target.value);
      };
      const [inputEmail, setInputEmail] = useState('');
      const handeleEmailChange=(event)=> {
          setInputEmail(event.target.value);
        };
        const [inputAge, setInputAge] = useState('');
        const handeleAgeChange=(event)=> {
            setInputAge(event.target.value);
          };
          const [envoyer, setEnvoyer] =useState()


  return (
    <div>
        <form >
            <input value={inputNom}onChange={handeleNomChange} type="text" id="name"  place holder="Ecrire votre nom"/>
            <p>C'est ça votre nom BRO :{inputNom} </p>
        </form>
        <form className='email'>
            <input value={inputEmail}onChange={handeleEmailChange} type="email" id="email"  place holder="Ecrire votre email"/>
            <p>C'est ça votre email BRO :{inputEmail} </p>
        </form>
        <form className='age'>
            <input min="10" max="100"value={inputAge}onChange={handeleAgeChange} type="number" id="age"  place holder="Ecrire votre age"/>
            <p>C'est ça votre age BRO :{inputAge} </p>
        </form>
        <button onClick={()=>setEnvoyer('Soumission Réussie MERCI')}>
            Envoyer
        </button>
        {envoyer && <p>Soumission Réussie MERCI</p>}
        <button onClick={()=>{setInputAge('');setInputEmail('');setInputNom('')}}>Cancel</button>
       
    </div>
  )
}

export default Exercice