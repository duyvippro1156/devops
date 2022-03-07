import bcrypt from "bcryptjs";

export const encryptPassword = async (password) => {
  try{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }catch(e){
    console.log(e);
  }
  
};

export const matchPassword = async (password, savedPassword) =>{
  try{
    await bcrypt.compare(password, savedPassword);
  }catch(e){
    console.log(e);
  }
  
}
  
