
const Header = () => {
    return (
        <div className="flex justify-between p-5">
            <h1 className="font-bold text-white text-lg">Smart Converter</h1>
            <div className="space-x-5 sm:flex">
                <button className="border border-orange-400 text-slate-200 rounded-lg px-3 py-0.5 sm:w-20">Войти</button>
                <button className="border border-orange-400 text-slate-200 rounded-lg px-3 py-0.5 sm:w-30">Создать аккаунт</button>
            </div>
        </div>
    )
}
export default Header;