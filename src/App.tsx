import { useContext } from 'react'
import Header from './Component/Header';
import { AppContext } from './AppContext';
import SideLesson from './Component/SideLesson';
import SideReviewer from './Component/SideReviewer';

function App() {

  const { mode } = useContext(AppContext)

  return (
    <article className="App">
      <Header />
      <div className='reviewer__container'>
        {
          mode === 'lesson' ? <SideLesson /> :
            mode === 'review' && <SideReviewer />
        }
      </div>
    </article>
  )
}

export default App
