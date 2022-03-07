import passport from "passport";

export const renderSignUp = (req, res) => {
  try{
    res.render("auth/signup");
  }catch(e){
    console.log(e);
  }
};

export const signUp = passport.authenticate("local.signup", {
    successRedirect: "/profile",
    failureRedirect: "/signup",
    failureFlash: true,
});

export const renderSignIn = (req, res, next) => {
  try{
    res.render("auth/signin");
  }catch(e){
    console.log(e);
  }
};

export const signIn = passport.authenticate("local.signin", {
  successRedirect: "/profile",
  failureRedirect: "/signin",
  failureFlash: true,
});

export const logout = (req, res, next) => {
  req.logout();
  res.redirect("/");
};
