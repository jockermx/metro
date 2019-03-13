const config = {};

config.host = process.env.HOST || "https://splashpagexosmos.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "d9c3Vkh9iM14QXmoUF1Zz6CF0DwCwXgJ3Sw09d72QLlhz0mDUYcRZkQi0QCyotR3dtIPG97pZAfk0XQ3DqMaOA==";
config.databaseId = "metro";
config.containerId = "user_connect";

/*if (config.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`);
}*/

module.exports = config;