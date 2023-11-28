import PropTypes from 'prop-types'
import Delete from '../../assets/delete.svg'


const Calc = ({id, position, quantity, namePosition, del}) => {
    return (
        <div className='w-full flex mt-5 justify-between'>
            {quantity ? 
                <>
                    <div className='text-white text-xl w-72 sm:text-lg'>{namePosition}:</div>
                    <div className='text-white text-2xl px-5 sm:text-xl'>{Math.ceil(quantity / position)}</div>
                </> : 
                <div className='border px-5 text-xl rounded-lg text-white border-red-500'>Ошибка!!! Введите колличество блоков для правильного рассчета.</div>}
            <img onClick={() => del(id)} src={Delete} alt="delete" className='w-8 h-8 cursor-pointer'/>
        </div>
    )
}

Calc.propTypes = {
    position: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    namePosition:PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    del: PropTypes.func.isRequired
}

export default Calc;