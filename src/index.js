//модуль start выполняет начальную загрузку из базы данных без фильтрации
import {
    start
} from './modules/start'
//модуль dbControllerActor выполняет загрузку из базы данных карточки героя по выбранному актёру
import {
    dbControllerActor
} from './modules/dbController'
//модуль dbControllerActor выполняет загрузку из базы данных карточки героя по выбранному фильму
import {
    dbControllerFilms
} from './modules/dbController'
//путь к базе данных
const pathDb = '../db/dbHeroes.json'
//элемент select, состоящий из актёров
const selectActors = document.querySelector('.form-select.actor')
const selectFilms = document.querySelector('.form-select.films')
//------------------------------------------------
//запуск приложения
start(pathDb)
//вешаем событие на выбранного актёра из списка select
selectActors.addEventListener('input', (e) => {
    //если выбран option 'выберите актёра', то идёт начальная загрузка всей базы карточек
    if (e.target.selectedIndex === 0) {
        start(pathDb)
    } else {
        //запуск контроллера обращения к базе данных по выбранному актёру
        dbControllerActor(pathDb, selectActors[e.target.selectedIndex].value)
    }
})
//вешаем событие на выбранный фильм из списка select
selectFilms.addEventListener('input', (e) => {
    //если выбран option 'выберите фильм', то идёт начальная загрузка всей базы карточек
    if (e.target.selectedIndex === 0) {
        start(pathDb)
    } else {
        //запуск контроллера обращения к базе данных по выбранному актёру
        dbControllerFilms(pathDb, selectFilms[e.target.selectedIndex].value)
    }
})