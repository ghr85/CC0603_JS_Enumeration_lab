const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.get_titles = function(){
  return this.films.map(function(film){
    return film.title;
  });
};
Cinema.prototype.find_film = function(film_str){
  return this.films.filter(
     film => film_str === film.title);
 };
Cinema.prototype.find_film_by_genre = function(genre_str){
  return this.films.filter(
     film => genre_str === film.genre);
 };

module.exports = Cinema;
