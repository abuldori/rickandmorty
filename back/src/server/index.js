const server = require("./server");
const PORT = 3001;
const { conn } = require("../DB_connection");


server.listen(PORT, async () => {
   console.log(`Server raised in port:${PORT}`);
  
   await conn.sync({ force: true })
});




