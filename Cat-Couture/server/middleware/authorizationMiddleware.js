const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");

// This middleware checks if the JWT is valid and has the correct scopes
const checkJwt = auth({
  audience: "https://catcouture.co.nz",
  issuerBaseURL: "https://dev-gx32ay1mp1zopqmb.us.auth0.com/",
});

// Defined scope for the API to check read access to reports
const checkScopes = requiredScopes("read:reports");

module.exports = {
  checkJwt,
  checkScopes,
};
