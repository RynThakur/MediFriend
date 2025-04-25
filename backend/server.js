const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

const vitalsRoute = require('/Users/aryanthakur/Desktop/mediFriend/backend/Routes/vitals.js');
app.use('/api/vitals', vitalsRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
