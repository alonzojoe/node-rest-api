
const pool = require("../database/index")
const postsController = {

    getAll: async (req, res) => {
        try {
          const [rows, fields] = await pool.query("SELECT * FROM posts");
          res.status(200).json({
            data: rows,
            status: 200,
            message: "get all data"
          });
        } catch (error) {
          console.log(error);
          res.status(500).json({
            status: 500,
            error: "Internal Server Error",
          });
        }
    },
    getByID: async (req, res) => {
        try {
          const { id } = req.params;
          const [rows, fields] = await pool.query("SELECT * FROM posts WHERE id = ?", [id]);
          if (rows.length === 0) {
            res.status(404).json({
              status: 404,
              error: "Post not found",
            });
          } else {
            res.status(200).json({
              data: rows,
              status: 200,
              message: "1 post retrieved"
            });
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({
            status: 500,
            error: "Internal Server Error",
          });
        }
    },
    createPost: async (req, res) => {
        try {
            const { title, body } = req.body
            const sql = "INSERT INTO posts(title,body) VALUES(?, ?)"
            const [rows, fields] = await pool.query(sql, [title, body])
            res.json({
                data: rows,
                status: 201,
                message: "resource created"
            })
        } catch (error) {
            res.status(500).json({
                status: 500,
                error: "Internal Server Error",
            });
        }
    },
    updatePost: async (req, res) => {
        try {
            const { title, body } = req.body
            const { id } = req.params
            const sql = "UPDATE posts SET title = ?, body = ? WHERE ID = ?"
            const [rows, fields] = await pool.query(sql, [title, body, id])
            res.json({
                data: rows,
                status: 200,
                message: "resource updated"
            })
        } catch (error) {
            res.status(500).json({
                status: 500,
                error: "Internal Server Error",
            });
        }
    },
    deletePost: async (req,res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("DELETE FROM posts WHERE ID = ?", [id])
            res.json({
                data: rows,
                status: 200,
                message: "resource deleted"
            })
        } catch (error) {
            res.status(500).json({
                status: 500,
                error: "Internal Server Error",
            });
        }
    } 

}

module.exports = postsController
