## 📦 Data Storage

- Data storage is the process where we save user-related information.
- To store data in a structured and retrievable way, **we use databases**.

---

## 🗃️ Types of Databases

- **SQL (Structured Query Language)**
- **NoSQL (Non-Structured Query Language)**

---

## 🧱 SQL

- SQL databases store data in **tabular format** (rows and columns).
- Examples: MySQL, PostgreSQL, Oracle

---

## 📂 NoSQL

- NoSQL databases store data in **object/document** form.
- It is more flexible than SQL and better suited for unstructured or semi-structured data.
- We will focus on **MongoDB**, a popular NoSQL database.

---

## ❓ What and Why?

- Databases are used to **store data efficiently**, securely, and in a way that can be easily accessed and managed by applications.

---

## 🧠 Terminologies

In backend development, we deal with two types of servers:

1. **Application Server** – Runs your backend code (e.g., Node.js, Express)
2. **Database Server** – Stores and manages your data (e.g., MongoDB, MySQL)

In **MongoDB**, the structure is:

```
Database → Collections → Documents
```

- **Database**: The main container for data
- **Collection**: A group of related documents (like a table in SQL)
- **Document**: A single record (in JSON/BSON format)

---

## 🧑‍💻 Code Flow with Mongoose

```js
// 1. Connect to the database
mongoose.connect('mongodb://localhost:27017/myDatabase');

// 2. Create a schema and model (model = collection)
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const User = mongoose.model('User', UserSchema);

// 3. Create a document (record)
const newUser = new User({
  name: 'John Doe',
  email: 'john@example.com',
});

newUser.save(); // Save the document to the collection
```
