//здесь создан набор повторяющихся функций в коде
//функция проверяет, есть ли фильмы у героя и выводит их в карточку в удобном виде
export const getMovie = (movies) => {
    let result = ''

    if (!movies) {
        return ' - '
    }
    for (let i = 0; i < movies.length; i++) {
        if (i < movies.length - 1) {
            result += movies[i] + ', <br/>'
        }
        if (i === movies.length - 1) {
            result += movies[i]
        }
    }
    return result
}
//функция проверяет, есть ли свойство у героя. Если нет, то ставит прочерк
export const checkData = (name) => {
    if (name) {
        return name
    } else return ' - '
}
//функция обнуляет карточки героев
export const deleteAllCardsHeroes = () => {
    let heroes = document.querySelectorAll('.hero')

    heroes.forEach((hero) => {
        hero.remove()
    })
}

//функция обнуляет select актёров
export const deleteAllActors = () => {
    let actors = document.querySelectorAll('.actor-option')

    actors.forEach((actor) => {
        actor.remove()
    })
}
//функция обнуляет select фильмов
export const deleteAllFilms = () => {
    let films = document.querySelectorAll('.film-option')

    films.forEach((film) => {
        film.remove()
    })
}