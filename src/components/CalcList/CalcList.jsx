
import PropTypes from 'prop-types'
import Calc from "../Calc/Calc";

//Получаем props и раскрываем его в компоненте 
const CalcList = ({ film, del }) => {

    return (
        <div className="pt-1 pl-5 pr-5 pb-5">
            {/* При помощи map перебираем film и вытягиваем из него все нужные значения и передаем их в компонент Calc */}
            {film.map((item) => 
                <Calc 
                    key={item.id}
                    id={item.id}
                    position={item.position}
                    quantity={item.quantity}
                    namePosition={item.namePosition} 
                    del={del}              
                />
            )}
        </div>
    )
}

CalcList.propTypes = {
    film: PropTypes.array.isRequired,
    del: PropTypes.func.isRequired
}

export default CalcList;