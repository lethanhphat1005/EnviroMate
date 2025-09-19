const express = require('express');
const app = express();
const PORT = 3000;

// Route mặc định
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
