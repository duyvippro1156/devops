import pool from "../database";

export const renderAddLink = (req, res) => {
  try{
    res.render("links/add");
  }catch(e){
    console.log(e);
  }
  
};

export const addLink = async (req, res) => {
  try{
    const { title, url, description } = req.body;
    const newLink = {
      title,
      url,
      description,
      user_id: req.user.id,
    };
    await pool.query("INSERT INTO links set ?", [newLink]);
    req.flash("success", "Link Saved Successfully");
    res.redirect("/links");
  }catch(e){
    console.log(e);
  }
  
};

export const renderLinks = async (req, res) => {
  try{
    const [rows] = await pool.query("SELECT * FROM links WHERE user_id = ?", [
    req.user.id,
    ]);
    res.render("links/list", { links: rows });
  }catch(e){
    console.log(e);
  }
  
};

export const deleteLink = async (req, res) => {
  try{
    const { id } = req.params;
    await pool.query("DELETE FROM links WHERE ID = ?", [id]);
    req.flash("success", "Link Removed Successfully");
    res.redirect("/links");
  }catch(e){
    console.log(e);
  }
};

export const renderEditLink = async (req, res) => {
  try{
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM links WHERE id = ?", [id]);
    res.render("links/edit", { link: rows[0] });
  }catch(e){
    console.log(e);
  }
  
};

export const editLink = async (req, res) => {
  try{
    const { id } = req.params;
    const { title, description, url } = req.body;
    const newLink = {
      title,
      description,
      url,
    };
    await pool.query("UPDATE links set ? WHERE id = ?", [newLink, id]);
    req.flash("success", "Link Updated Successfully");
    res.redirect("/links");
  }catch(e){
    console.log(e);
  }
};
