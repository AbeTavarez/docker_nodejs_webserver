const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let data = 'user data';

// middlewares
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
  res.send(`
  <html>
      <head>
        
      </head>
      <body>
        <section>
          <h2>My Course Goal</h2>
          <p>${data}</p>
        </section>
        <form action="/store-data" method="POST">
          <div class="form-control">
            <label>Get user data</label>
            <input type="text" name="data">
          </div>
          <button>Send Data</button>
        </form>
      </body>
    </html>
  `);
});
