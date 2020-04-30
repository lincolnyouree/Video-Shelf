require('./config/database');
const Movie = require('./models/movie');
const Performer = require('./models/performer');
const data = require('./data');

const p1 = Movie.deleteMany({});
const p2 = Performer.deleteMany({});

Promise.all([p1, p2])
.then(function(results) {
  console.log(results);
  return Movie.create(data.movies)
})
.then((movies) => {
    console.log(movies, 'this is movies')
})
.then(function() {
  process.exit();
});