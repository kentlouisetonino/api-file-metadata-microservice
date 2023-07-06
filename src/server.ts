require('dotenv').config();
import app from './app';

const PORT = process.env.PORT;

// * Server listener.
app.listen(PORT, function () {
  console.log('Server is live at http://localhost:' + PORT);
});
