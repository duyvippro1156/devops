export const renderUserProfile = (req, res, next) => {
  try{
    res.render("profile");
  }catch(e){
    console.log(e);
  }
  
};
