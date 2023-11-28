import { useEffect, useState } from "react";
import CalcList from "../CalcList/CalcList";
import { nanoid } from "nanoid";


const ListFilm = () => {

    //Состояние с позицией 
    const [position, setPosition] = useState('40') 

    //Состояние с колличеством
    const [quantity, setQuantity] = useState('')

    //Состояние с название позиции
    const [namePosition, setNamePosition] = useState('Джин Классический 20г')

    //Состояние с обьектом состоящим из предыдущих 3 состояний и id и так же возвращаем эти данные из localStora для их сохранения или вернет пустой массив
    const [value, setValue] = useState(() => {
        return JSON.parse(localStorage.getItem('films-data')) || []
    })

    //Записываем данные из state в наш localStorage
    useEffect(() => {
        localStorage.setItem('films-data', JSON.stringify(value))
    },[value])

    //Получаем позицию и текс опции и записываем в state
    const handlerPosition = (event) => {
        setPosition(event.target.value)
        setNamePosition(event.target.options[event.target.selectedIndex].text)
    }

    //Получаем колличество блоков и записываем в state
    const handlerQuantity = (event) => {
        setQuantity(event.target.value)
    }

    //Функция удаления выбранной заметки по id
    const delFilm = (id) => {
        const newFilm = value.filter((item) => item.id !== id)
        setValue(newFilm)
    }

    //Функция добавления нового обьекта в state value
    const addFilm = (position, quantity) => {
        const newFilm = {
            id: nanoid(),
            quantity: quantity,
            position: position,
            namePosition: namePosition 
        }
        const newFilms = [...value, newFilm]
        setValue(newFilms)
    }
 
    return (
        <div className="mb-9">
            <label className="p-5 text-white">Выберите позицию:</label>
            <div className="flex p-5 justify-between sm:flex-col">
                <div className="flex">
                    {/*Получаем данные из select и отправляем в state */}
                    <select value={position} onChange={handlerPosition}  className="text-center w-50 rounded-lg px-5 py-1 sm:w-full mb-3 md:w-66">
                        <option value="40">Джин Классический 20г</option>
                        <option value="60">Джин Классический 35г</option>
                        <option value="150">Джин Классический 70г</option>
                        <option value="240">Джин Классический 140г</option>
                        <option value="410">Джин Классический 250г</option>
                        <option value="470">Джин Классический 350г</option>
                        <option value="40">Джин Соленый 20г</option>
                        <option value="50">Джин Соленый 35г</option>
                        <option value="150">Джин Соленый 70г</option>
                        <option value="240">Джин Соленый 140г</option>
                        <option value="410">Джин Соленый 250г</option>
                        <option value="470">Джин Соленый 350г</option>
                        <option value="220">Джин Солнечный Великан 100г</option>
                        <option value="400">Джин Солнечный Великан 200г</option>
                        <option value="430">Джин Солнечный Великан 300г</option>
                        <option value="40">Джин Солнечный Великан Соль 100г</option>
                        <option value="40">Джин Солнечный Великан Соль 200</option>
                        <option value="40">Джин Солнечный Великан Соль 300г</option>
                        <option value="40">Белочка 20г</option>
                        <option value="50">Белочка 35г</option>
                        <option value="150">Белочка 70г</option>
                        <option value="240">Белочка 140г</option>
                        <option value="410">Белочка 250г</option>
                        <option value="470">Белочка 350г</option>
                        <option value="40">Белочка Соль 20г</option>
                        <option value="50">Белочка Соль 35г</option>
                        <option value="150">Белочка Соль 70г</option>
                        <option value="240">Белочка Соль 140г</option>
                        <option value="410">Белочка Соль 250г</option>
                        <option value="470">Белочка Соль 350г</option>
                        <option value="220">Белочка XL 100г</option>
                        <option value="400">Бeлочка XL 200г</option>
                        <option value="430">Белочка XL 300г</option>
                        <option value="220">Белочка XL Соль 100г</option>
                        <option value="400">Белочка XL Соль 200г</option>
                        <option value="430">Белочка XL Соль 300г</option>
                        <option value="40">Мастер жарки 20г</option>
                        <option value="60">Мастер жарки 35г</option>
                        <option value="150">Мастер жарки 70г</option>
                        <option value="240">Мастер жарки 140г</option>
                        <option value="410">Мастер жарки 250г</option>
                        <option value="470">Мастер жарки 350г</option>
                    </select>
                </div>
                <input type="number" onChange={handlerQuantity} value={quantity} className="text-center w-36 px-3 py-1 outline-none rounded-lg sm:w-full mb-3 md:w-16" />
                <button onClick={() => addFilm(position, quantity)} className="bg-orange-400 text-white text-lg rounded-lg px-5 h-8 sm:mt-2">Рассчитать</button>
            </div>
            <hr className="my-8 sm:my-4"/>
            <div>
            {/* Передаем значение state value в компонент CalcList */}
                <CalcList 
                    film={value}
                    del={delFilm}
                /> 
            </div>
        </div>
    )
}
export default ListFilm;   

