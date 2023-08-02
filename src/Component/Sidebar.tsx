import { useContext } from "react"
import { AppContext } from "../AppContext"

function Sidebar() {

    const {handleKanjiListClick, handleKanjiReviewClick} = useContext(AppContext)
    const test = ['n1', 'n2', 'n3', 'n4', 'n5'].reverse()
    
  return (
    <section className='sidebar'>
        <div className='sidebar__content'>
            <button>
                <p className='title icon__accordion'>Lessons</p>
                <div className='accordion__content'>
                    <div>
                        { 
                            test.map((item,i)=><p key={i} onClick={()=>handleKanjiListClick(item[1])}>{item}</p>)
                        }
                    </div>
                </div>
            </button>
        </div>
        <div className='sidebar__content'>
            <button>
                <p className='title icon__accordion'>Reviewer</p>
                <div className='accordion__content'>
                    <div>
                        {
                            test.map((item,i)=><p key={i} onClick={()=>handleKanjiReviewClick(item[1])}>{item}</p>)
                        }
                    </div>
                </div>
            </button>
        </div>
    </section>
  )
}

export default Sidebar