export const renderIndex = (req, res) => {
  try{
    res.render("index");
  }catch(e){
    console.log(e);
  }
  
};
