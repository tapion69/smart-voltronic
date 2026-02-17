module.exports = {
  uiPort: 1880,
  userDir: "/data",
  flowFile: "/data/flows.json",

  // ✅ false = Node-RED lit flows_cred.json en JSON clair (pas de chiffrement)
  // Supprime les warnings "system-generated key" et "Encrypted credentials not found"
  credentialSecret: false,

  nodesDir: ["/opt/node_modules"],
  editorTheme: {
    projects: { enabled: false }
  }
};
