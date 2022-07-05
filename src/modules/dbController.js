//данный модуль располагает набором контроллеров по обращению к базе данных
//импорт модуля отрисовки всей базы карточек на странице
import {
    dbRender
} from './dbRender'
//импорт модуля отрисовки карточки на странице, отфильтрованной по актёру
import {
    renderFilterActor
} from './renderFilterActor'
//импорт модуля отрисовки карточки на странице, отфильтрованной по фильму
import {
    renderFilterFilms
} from './renderFilterFilms'
//импорт модуля для наполнения select для фильтрации по актёрам
import {
    filter
} from './filter'

//контроллер для обращения к полной базе данных
export const dbController = (strPathDb) => {
    fetch(strPathDb)
        .then((response) => response.json())
        .then((dataRead) => {
            //отрисовка всей базы карточек на странице
            dbRender(dataRead)
            //наполнение select для фильтрации по актёрам
            filter(dataRead)
        })
        .catch((error) => console.log(error))
}

export const dbControllerActor = (strPathDb, actor) => {
    fetch(strPathDb)
        .then((response) => response.json())
        .then((dataRead) => {
            //отрисовка карточки на странице, отфильтрованной по актёру
            renderFilterActor(dataRead, actor)

        })
        .catch((error) => console.log(error))
}

export const dbControllerFilms = (strPathDb, film) => {
    fetch(strPathDb)
        .then((response) => response.json())
        .then((dataRead) => {
            //отрисовка карточки на странице, отфильтрованной по актёру
            renderFilterFilms(dataRead, film)

        })
        .catch((error) => console.log(error))
}