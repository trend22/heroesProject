//подгружаем функции помощники
import {
    getMovie,
    checkData,
} from './helpers'
// функция создания одной новой карточки
export const createHeroCard = (newHero, data) => {
    newHero.innerHTML = `<div class="card text-center">
          <img src="../db/${data.photo}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class = "card-title">Hero name: <br\><br\>${checkData(data.name)}</h5>
          </div>
          <ul class="list-group list-group-flush">
           <li class="list-group-item" style="width: 200%"><strong>Real name:</strong></strong> ${checkData(data.realName)}</li>
           <li class="list-group-item" style="width: 200%"><strong>Species:</strong> ${checkData(data.species)}</li>
           <li class="list-group-item" style="width: 200%"><strong>Сitizenship:</strong> ${checkData(data.citizenship)}</li>
           <li class="list-group-item" style="width: 200%"><strong>Gender:</strong> ${checkData(data.gender)}</li>
           <li class="list-group-item" style="width: 200%"><strong>Birth day:</strong> ${checkData(data.birthDay)}</li>
           <li class="list-group-item" style="width: 200%"><strong>Death day:</strong> ${checkData(data.deathDay)}</li>
           <li class="list-group-item" style="width: 200%"><strong>Status:</strong> ${checkData(data.status)}</li>
           <li class="list-group-item" style="width: 200%"><strong>Actors:</strong> ${checkData(data.actors)}</li>
           <li class="list-group-item" style="width: 200%"><strong>Movies:</strong> ${getMovie(data.movies)}</li>
          </ul>
        </div><br/><br/>`

    return newHero
}