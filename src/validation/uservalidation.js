

export const validationuserdata =(user)=>{
    let errors={}
    if(user.name.trim()==""){
        errors.name="username is required";}
    
    else if(user.name.trim().length<3){
        errors.name="username must be at least 9 charactres";
    }
    if(user.email.trim()==""){
        errors.email="email is required";}
    
    else if(user.name.trim().length<2){
        errors.email="email must be at least 2 characters";
    }
    if(user.password.trim()==""){
        errors.password="password is required";}
    
    else if(user.password.trim().length<3){
        errors.password="password must be at least 3 char";
    }
  return errors;}


