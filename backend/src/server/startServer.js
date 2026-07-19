require("dotenv").config();
const StartServer = async (app) => {
  const PORT = process.env.PORT || 3000;

  const server = app.listen(PORT, () => {
    console.log(
      `Server is running on port ${PORT} [${process.env.NODE_ENV || "development"}]`,
    );
  });

  return server;
};

module.exports = StartServer;
