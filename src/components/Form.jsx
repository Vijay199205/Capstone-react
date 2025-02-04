/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styles from './Form.module.css';
import validateForms from '../util/validation';

function Form({
  
  name,
  setName,
  email,
  setEmail,
  username,
  setUserName,
  mobile,
  setMobile,
  error,
  setError,
  submitHandler,
}) {
    

    // const [name, setName] = useState('');
    // const [username, SetUserName] = useState('');
    // const [mobile, setMobile] = useState('');
    // const [email, setEmail] = useState('');
    // const [error, setError] = useState(false);

    
  return (
    <div className={styles.container}>

<input
    type='text'
    value={name}
    placeholder='Enter your name'
    onChange={(e)=>setName(e.target.value)}
    />
   {error?.name && <p className={styles.error}>Name is filed required</p>}

<input
    type='text'
    value={username}
    placeholder='Enter your username'
    onChange={(e)=>setUserName(e.target.value)}
    />
     {error?.username && <p className={styles.error}>User Name is filed required</p>}
    <input
    type='text'
    value={email}
    placeholder='Enter your Email'
    onChange={(e)=>setEmail(e.target.value)}
    />
     {error?.email && <p className={styles.error}>Email is filed required</p>}
    <input
    type='text'
    value={mobile}
    placeholder='Enter your mobile'
    onChange={(e)=>setMobile(e.target.value)}
    />
     {error?.mobile && <p className={styles.error}>Mobile Number is filed required</p>}
<button onClick={submitHandler}>SIGN UP</button>
     </div>
  )
}

export default Form
