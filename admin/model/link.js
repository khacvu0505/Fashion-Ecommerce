const db = require("../util/database");

module.exports = class Link {
  constructor(link) {
    this.link = link;
  }
  save() {
    return db.execute("update link set link=(?) where id=1", [this.link]);
  }

  static fetchAll() {
    return db.execute("select * from link");
  }

  static deleteById(id) {}
};
