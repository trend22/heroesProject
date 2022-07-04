//модуль контроллера обращения к полной базе данных карточек
import {
    dbController
} from '../modules/dbController'
//запуск контроллера обращения к базе данных всех карточек героев
export const start = (strPathDb) => {
    dbController(strPathDb)
}