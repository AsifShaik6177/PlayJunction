const express = require( 'express' );
const app = express();
const bodyParser=require( 'body-parser' );
const errorLogger = require( './Utilities/ErrorLogger' );
const requestLogger = require('./Utilities/RequestLogger');
const router = require( './routes/routes' );
const create = require( './models/dbSetup' );
const cors = require( 'cors' );
const userRoute = require('./routes/user');
const eventRoute = require('./routes/events');
const eventRatingsRouting = require('./routes/eventrating');
const userRatingsRouting = require('./routes/userrating');
const bookingRouting = require('./routes/booking');


app.use( router );

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(requestLogger);
// app.use('/', prodRoute);
app.use(errorLogger);

router.get( "/setupDB", ( req, res, next ) => {
  create.setupDB().then( response =>{
      if ( response ) res.json( { message: "Successfully inserted "+ response +" documents into database"} )
  } ).catch( error =>{
     next( error );
  } )
} );

app.use('/v1/user', userRoute);
app.use('/v1/events', eventRoute);

app.use('/v1/event-rating', eventRatingsRouting);
app.use('/v1/user-rating', userRatingsRouting);
app.use('/v1/booking', bookingRouting);


app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
