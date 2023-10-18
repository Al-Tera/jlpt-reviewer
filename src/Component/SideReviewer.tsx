import { useContext, useState, useEffect, Fragment } from 'react'
import TextField from './TextField.tsx'
import { AppContext, IKanji } from '../AppContext.tsx';
import arrow from '../assets/arrow.svg'

function SideReviewer() {

    const { kanjiList, level, previousReviewBegin, setPreviousReviewBegin, reviewStatus, setReviewStatus } = useContext(AppContext)
    const [previousReviewMistakes, setPreviousReviewMistakes] = useState<Record<string, any>>({
        'n5': [],
        'n4': [],
        'n3': [],
        'n2': [],
        'n1': [],
    })
    const [fortKanji, setFortKanji] = useState({ default: '', replaced: '', unreplaced: '' })
    const [inputValidator, setInputValidator] = useState<string | null>(null)
    const header = document.querySelector('.header')
    const [kanjiDefinition, setKanjiDefinition] = useState<IKanji>()

    const getRandomUniqueInteger = (array: string[], array2: string[]) => {
        let randomValue;
        let randomKanji: any;
        do {
            randomValue = Math.floor(Math.random() * array2.length)
            randomKanji = array2[randomValue]
        } while (array.map((item: any) => item.kanji).includes(randomKanji.kanji));
        return randomKanji;
    }


    const nextReviewBegin = (firstTime = false, mistake = false) => {
        setReviewStatus('begin')

        const isMistake = mistake || header?.getAttribute('mode') === 'mistake'
        const selectedList: any = isMistake ? previousReviewMistakes[`n${level}`] : kanjiList
        const arrayOfObjects = Object.keys(selectedList).map((key) => {
            const obj = selectedList[key];
            return { ...obj };
        });
        if (previousReviewBegin.length !== arrayOfObjects.length) {
            const selectedKanji: any = getRandomUniqueInteger(previousReviewBegin, arrayOfObjects)
            setReviewStatus('begin')
            setPreviousReviewBegin(firstTime ? [selectedKanji] : [...previousReviewBegin, selectedKanji])
            setKanjiDefinition(selectedKanji)
        }
        else handleEndReview()
    }

    useEffect(() => {
        if (kanjiDefinition) combineQuestion()
    }, [kanjiDefinition])

    const handleBegin = () => {
        header?.setAttribute('mode', '')
        setPreviousReviewBegin([])
        nextReviewBegin(true)
    }
    const handleResume = () => {
        header?.setAttribute('mode', '')
        nextReviewBegin()
    }
    const handleMistakes = () => {
        console.log(previousReviewMistakes)
        if (Object.keys(previousReviewMistakes[`n${level}`]).length) {
            header?.setAttribute('mode', 'mistake')
            nextReviewBegin(true, true)
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        const input: any = formProps.input_romaji
        const inputInReadings = (kanjiDefinition?.kun_readings ? kanjiDefinition.kun_readings : kanjiDefinition?.on_readings)?.includes(input)
        const hasParen = /[\(\)]/.test(fortKanji.default)

        if (input === fortKanji.unreplaced.replace('-', '')) {
            e.target.reset()
            setInputValidator(null)
            nextReviewBegin(false)
        }
        else if (inputInReadings && !hasParen) setInputValidator('blue')
        else {
            if (kanjiDefinition && !previousReviewMistakes[`n${level}`].hasOwnProperty(kanjiDefinition.kanji)) {
                const prevMiss = { ...previousReviewMistakes }
                prevMiss[`n${level}`] = { ...prevMiss[`n${level}`], [kanjiDefinition.kanji]: kanjiDefinition }
                setPreviousReviewMistakes(prevMiss)
            }
            setInputValidator('red')
        }
    }

    const handleEndReview = () => {
        header?.setAttribute('mode', '')
        setReviewStatus('none')
        setInputValidator(null)
        setPreviousReviewBegin((list: any) => list.slice(0, -1))
    }

    const getRandomItem = (array: string[]) => {
        return array[Math.floor(Math.random() * array.length)]
    }

    const combineQuestion = () => {
        if (kanjiDefinition) {
            const kReading = kanjiDefinition.kun_readings
            const oReading: any = kanjiDefinition.on_readings
            const selectedReading = kReading ? getRandomItem(kReading) : getRandomItem(oReading)
            const regexDiverse = /([-]|[^-()]+|\([^)]+\))/g;
            const regexParMin = new RegExp(/[\(\)-]/);
            const result = selectedReading.match(regexDiverse);
            if (result) {
                const replaced = result.map(item => regexParMin.test(item) ? item : item.split('っ').map(item2 => item2 === '' ? 'っ' : kanjiDefinition.kanji).join('')).join('').replace('-', '...')
                const unreplaced = result.join('')
                setFortKanji({ default: result.join(''), replaced: replaced.replace(/[\(\)]/g, ''), unreplaced: unreplaced.replace(/[\(\)]/g, '') })
            }
        }
    }

    const getReading = (reading: string[]) => {
        if (reading) {
            return reading.map((r, i) =>
                r === fortKanji.default ?
                    <Fragment key={i}><span className='find__reading'>{r}</span>{i + 1 !== reading.length ? ', ' : ''}</Fragment>
                    :
                    `${r}${i + 1 !== reading.length ? ', ' : ''}`
            )
        }
    }


    return (
        <section className='section__reviewer'>

            <div className='reviewer__title__container'>
                <p className='title'>Reviewing: N{level}</p>
                {
                    reviewStatus !== 'none' &&
                    <button className='btn__end_review' onClick={handleEndReview}>
                        <img src={arrow} alt="end" />
                    </button>
                }
            </div>
            {
                reviewStatus === 'none' ?
                    <div className='btn__container'>
                        <button className='btn__begin' onClick={handleBegin}>Begin</button>
                        <button onClick={handleResume} className='btn__counter btn__resume' data-counter={`${previousReviewBegin.length}/${kanjiList?.length}`}>Resume</button>
                        <button onClick={handleMistakes} disabled={!Object.keys(previousReviewMistakes[`n${level}`]).length} className='btn__counter btn__mistakes' data-counter={`${`${Object.keys(previousReviewMistakes[`n${level}`]).length}`}`}>Mistakes</button>
                    </div>
                    : reviewStatus === 'begin' &&
                    <div className='section__reviewer__begin'>
                        {
                            <>
                                <p className='question'>{fortKanji.replaced}</p>
                                <p>{kanjiDefinition?.kun_readings ? 'Kun reading' : 'On reading'}</p>
                                <form onSubmit={handleSubmit} autoComplete="off">
                                    {inputValidator === 'blue' && <span className='textfield__hint'>There is another..</span>}
                                    <TextField inputValidator={inputValidator} setInputValidator={setInputValidator} />
                                </form>

                                <button className='description__container'>
                                    <p className='title'>Description</p>
                                    <div className='description__content'>
                                        <div>
                                            <p>Kanji: {kanjiDefinition?.kanji}</p>
                                            {kanjiDefinition?.kun_readings && <p>Kun reading: {getReading(kanjiDefinition.kun_readings)}</p>}
                                            {/* {kanjiDefinition?.kun_readings && <p>Kun reading: {kanjiDefinition.kun_readings.join(', ')}</p>} */}
                                            {kanjiDefinition?.on_readings && <p>On reading: {getReading(kanjiDefinition?.on_readings)}</p>}
                                            {/* <p>On reading: {kanjiDefinition?.on_readings?.join(', ')}</p> */}
                                            <p>Definition: {kanjiDefinition?.meanings}</p>
                                        </div>
                                    </div>
                                </button>
                            </>
                        }

                    </div>
            }
        </section>
    )
}

export default SideReviewer