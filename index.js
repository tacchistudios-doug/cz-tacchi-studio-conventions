"format cjs";

var engine = require('./engine');
var tacchiStudiosConventionTypes = {
  "new": {
    "description": "when the commit introduces a new feature not available before",
    "title": "Features"
  },
  "fix": {
    "description": "when the commit fixes an error or a bug",
    "title": "Bug Fixes"
  },
  "change": {
    "description": "when the commit modifies a behaviour of an existing feature",
    "title": "Changes"
  },
  "test": {
    "description": "when adding or modifying tests without modifying any behaviour",
    "title": "Tests"
  },
  "refactor": {
    "description": "when the commit changes code without modifying any behaviour",
    "title": "Refactors"
  },
  "doc": {
    "description": "when the commit is related to comments, readme or similar documentation",
    "title": "Documentation"
  },
  "upgrade": {
    "description": "when the commit is done to change the version of project dependencies",
    "title": "Upgrades"
  }
}

module.exports = engine({
  types: tacchiStudiosConventionTypes
});
