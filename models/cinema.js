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

    Cinema.prototype.has_film_by_year = function(year_int){
      const temp_film_ary = this.films.filter(
        film => year_int === film.year);
        if (temp_film_ary.length === 0){
          return false;
        } else {
          return true;
        };
      };


      Cinema.prototype.is_over_length = function(length_int){
        const temp_film_ary = this.films.filter(
          film => length_int < film.length);
          if (temp_film_ary.length === 0){
            return false;
          } else {
            return true;
          };
        };

        Cinema.prototype.total_runtime = function(){
          const total = this.films.reduce(function(running_total,film){
            return running_total + film.length;
          },0)
          return total;
        };

        Cinema.prototype.films_by_property = function(property,value){
          return this.films.filter(
            film => value === film[`${property}`]);
          };


        module.exports = Cinema;
