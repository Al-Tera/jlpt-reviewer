import { useContext } from 'react'
import Header from './Component/Header';
import { AppContext } from './AppContext';
import SideLesson from './Component/SideLesson';
import SideReviewer from './Component/SideReviewer';

function App() {
  
  const { isLoadingList, mode } = useContext(AppContext)

  return (
    <article className="App">
      <Header />
      <div className='reviewer__container'>
        {
          isLoadingList &&
          <div className='loader__list'>
            <p>Loading</p>
            <span />
          </div>
        }
        {
          mode === 'lessons' ? <SideLesson /> : 
          mode === 'reviewer' && <SideReviewer />
        }
      </div>
    </article>
  )
}

export default App
