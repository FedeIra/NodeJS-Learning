// ------------------------- Ejemplo 1 ----------------------------------
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); //Autorizo recibir solicitudes de este dominio
  res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  ); //Autorizo recibir solicitudes con dichos hedears
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
});

// ------------------------- Ejemplo 2 ----------------------------------
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// ------------------------- Ejemplo 3 ----------------------------------
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ------------------------- Ejemplo 4 ----------------------------------
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

// ------------------------- Ejemplo 5 (modularizado con router) ----------------------------------
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/api', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
