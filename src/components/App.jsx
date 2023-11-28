import Header from "./Header/Header"
import ListFilm from "./ListFilm/ListFilm"


function App() {
  return (
    <div className="h-full mx-auto w-1/2 sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-3/4">
      <Header/>
      <ListFilm/>
    </div>
  )
}
export default App
