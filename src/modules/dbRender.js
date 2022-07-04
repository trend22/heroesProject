//модуль удаления всех карточек героев
import {
    deleteAllCardsHeroes
} from './helpers'
//модуль создания новой карточки
import {
    createHeroCard
} from './createHeroCard'
//функция отрисовки всей базы карточек героев
export const dbRender = (dbData) => {
    //находим блок div, в него вставляем далее карточки
    const heroesList = document.querySelectorAll('#heroes')
    //но сначала чистим все предыдущие карточки
    deleteAllCardsHeroes()
    //по базе данных находим все карточки
    dbData.forEach((data) => {

        let hero = document.createElement('div')
        hero.classList.add('hero')
        //функцией createHeroCard создаём карточку, потом добавляем в список карточек heroesList[0]
        heroesList[0].append(createHeroCard(hero, data))
    });
}