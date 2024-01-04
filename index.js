require('dotenv').config();

const app = require('./app');

app.listen(process.env.PORT, () => {
  console.log('Express GraphQL Server Now running On localhost:4000/graphql');
});
