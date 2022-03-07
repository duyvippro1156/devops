export const isLoggedIn = (req, res, next) => {
  try{
    if (req.isAuthenticated()) return next();
    res.redirect("/signin");
  }catch(e){
    console.log(e);
  }
  
};
