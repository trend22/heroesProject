import {
    getMovie
    // checkData,
} from './helpers'
//Здесь создан набор модулей для фильтраций
export const filter = (dbData) => {
    const selectActor = document.querySelector('.form-select.actor')
    const selectFilm = document.querySelector('.form-select.films')
    //часть модуля выполняет наполнение селекта '.form-select actor' актёрами   
    dbData.forEach(data => {
        let option = document.createElement('option')

        option.innerHTML = `<option class="actor" value="${data.actors}">${data.actors}</option>`

        selectActor.append(option)
    });
    //часть модуля выполняет наполнение селекта '.form-select films' актёрами   
    let arrFilms = []
    let count = 0
    //фильтрация фильмов без повторений названий, складываем в массив arrFilms
    dbData.forEach(data => {
        let option = document.createElement('option')

        if (data.movies) {
            count = 0
            for (let i = 0; i < data.movies.length; i++) {

                let nameFilm = ''
                nameFilm = data.movies[i]

                for (let j = 0; j < arrFilms.length; j++) {

                    if (nameFilm === arrFilms[j]) {
                        count++
                    }
                }

                if (count === 0) {
                    arrFilms.push(nameFilm)

                }
            }
        }

    });
    //сортировка фильмов по алфавиту
    arrFilms.sort()
    //запись в select названия фильмов без повторений
    for (let i = 0; i < arrFilms.length; i++) {
        let option = document.createElement('option')

        option.innerHTML = `<option class="actor" value="${arrFilms[i]}">${arrFilms[i]}</option>`

        selectFilm.append(option)
    }


}