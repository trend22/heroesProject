//модуль удаления всех карточек героев
import {
    deleteAllCardsHeroes
} from './helpers'
//модуль создания новой карточки
import {
    createHeroCard
} from './createHeroCard'
//функция отрисовки всей карточки героя, отфильтрованной по актёру
export const renderFilterActor = (dbData, actor) => {
    const heroesList = document.querySelectorAll('#heroes')
    let heroes = document.querySelectorAll('.hero')
    //но сначала чистим все предыдущие карточки
    deleteAllCardsHeroes()

    dbData.forEach((data) => {

        let hero = document.createElement('div')
        hero.classList.add('hero')

        if (data.actors === actor) {
            //функцией createHeroCard создаём карточку, потом добавляем в список карточек heroesList[0]
            heroesList[0].append(createHeroCard(hero, data))
        }
    });
}