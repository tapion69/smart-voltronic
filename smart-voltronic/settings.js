module.exports = {
  uiPort: 1880,
  userDir: "/data",
  flowFile: "/data/flows.json",

  // ✅ PAS de credentialSecret ici !
  // Avec un secret, Node-RED attend flows_cred.json CHIFFRÉ.
  // Sans secret, il le lit en JSON clair — ce que notre run.sh génère.
  // credentialSecret: false  ← inutile, simplement ne pas le définir suffit.

  nodesDir: ["/opt/node_modules"],
  editorTheme: {
    projects: { enabled: false }
  }
};
