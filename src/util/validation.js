const validateForms = (name, username, email, mobile ) =>{
  let valid = true;

  let invalid = {
    name: false,
    username: false,
    email: false,
    mobile: false

  };

    if(!name || !username || !email || !mobile){
     
      valid =  false
      invalid = {
        name : !name,
        username:!username,
        email:!email,
        mobile:!mobile
      };
      
    }
   
   const emailRegx =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const phoneRegx = /^\d{10}$/;
   if(!emailRegx.test(email) || !phoneRegx.test(mobile)){
    invalid = {
      ...invalid,
      email: !emailRegx.test(email),
      mobile: !phoneRegx.test(mobile)
    };
    valid = false
   }
   console.log(valid);
   console.log(invalid)
   return{
    valid,
    invalid
   };
   
  }
  export default validateForms;