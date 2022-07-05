//модуль удаления всех карточек героев
import {
    deleteAllCardsHeroes
} from './helpers'
//модуль создания новой карточки
import {
    createHeroCard
} from './createHeroCard'
import {
    getMovie,
    checkData,
} from './helpers'
//функция отрисовки всей карточки героя, отфильтрованной по актёру
export const renderFilterFilms = (dbData, film) => {
    const heroesList = document.querySelectorAll('#heroes')
    let heroes = document.querySelectorAll('.hero')
    //но сначала чистим все предыдущие карточки
    deleteAllCardsHeroes()
    // отрисовываем только те карты, в которых есть выбранные фильмы
    dbData.forEach((data) => {

        let hero = document.createElement('div')
        hero.classList.add('hero')
        //убираем те карты, которые не содержат названий фильмов
        if (data.movies !== undefined) {
            for (let i = 0; i < data.movies.length; i++) {

                if (data.movies[i] === film) {
                    //функцией createHeroCard создаём карточку, потом добавляем в список карточек heroesList[0]
                    heroesList[0].append(createHeroCard(hero, data))
                }
            }
        }

    });
}