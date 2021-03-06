import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("places.db");

export const init = () => {
  const resultInit = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);",
        [],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });
  return resultInit;
};

export const insertPlace = (title, imageUri, address, lat, lng) => {
  const resultInsert = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?);",
        [title, imageUri, address, lat, lng],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return resultInsert;
};

export const fetchPlaces = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM places",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
};
