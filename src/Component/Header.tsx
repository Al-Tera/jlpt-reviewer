import { useContext } from "react"
import { AppContext } from "../AppContext"

function Header() {

    const { handleHeaderClick } = useContext(AppContext)
    const kanjiLevels = ['n1', 'n2', 'n3', 'n4', 'n5'].reverse()

    return (
        <header className='header'>
            <div className='header__content'>
                <button>
                    <p className='title icon__accordion'>Lessons</p>
                    <div className='accordion__content'>
                        <div>
                            {
                                kanjiLevels.map((item, i) => <p key={i} onClick={() => handleHeaderClick(item[1], 'lesson')}>{item}</p>)
                            }
                        </div>
                    </div>
                </button>
            </div>
            <div className='header__content'>
                <button>
                    <p className='title icon__accordion'>Reviewer</p>
                    <div className='accordion__content'>
                        <div>
                            {
                                kanjiLevels.map((item, i) => <p key={i} onClick={() => handleHeaderClick(item[1], 'review')}>{item}</p>)
                            }
                        </div>
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header