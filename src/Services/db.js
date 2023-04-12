class DBService {
  constructor(dbName, storeName) {
    this.dbName = dbName;
    this.storeName = storeName;
  }

  _openDB() {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(this.dbName);

      request.onerror = () => {
        reject("Failed to open database");
      };

      request.onsuccess = () => {
        const db = request.result;
        resolve(db);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore(this.storeName);
      };
    });
  }

  createItem(key, value) {
    return this._openDB().then((db) => {
      const transaction = db.transaction([this.storeName], "readwrite");
      const store = transaction.objectStore(this.storeName);
      store.put(value, key);
      transaction.oncomplete = () => {
        db.close();
      };
    });
  }

  readItem(key) {
    return new Promise((resolve, reject) => {
      this._openDB().then((db) => {
        const transaction = db.transaction([this.storeName], "readonly");
        const store = transaction.objectStore(this.storeName);
        const request = store.get(key);
        request.onerror = () => {
          reject("Failed to read item");
        };
        request.onsuccess = () => {
          resolve(request.result);
        };
        transaction.oncomplete = () => {
          db.close();
        };
      });
    });
  }

  updateItem(key, value) {
    this._openDB().then((db) => {
      const transaction = db.transaction([this.storeName], "readwrite");
      const store = transaction.objectStore(this.storeName);
      store.put(value, key);
      transaction.oncomplete = () => {
        db.close();
      };
    });
  }

  deleteItem(key) {
    this._openDB().then((db) => {
      const transaction = db.transaction([this.storeName], "readwrite");
      const store = transaction.objectStore(this.storeName);
      store.delete(key);
      transaction.oncomplete = () => {
        db.close();
      };
    });
  }  
}

export default DBService;
