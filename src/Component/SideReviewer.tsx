import { useContext, useState, useEffect, Fragment } from 'react'
import TextField from './TextField.tsx'
import { AppContext, IKanji } from '../AppContext.tsx';
import arrow from '../assets/arrow.svg'

function SideReviewer() {

    const { previousMistakes, setPreviousMistakes, kanjiList, level, reviewStatus, setReviewStatus } = useContext(AppContext)

    const [fortKanji, setFortKanji] = useState({ default: '', replaced: '', unreplaced: '' })
    const [inputValidator, setInputValidator] = useState<string>('')
    const header = document.querySelector('.header')
    const [kanjiDefinition, setKanjiDefinition] = useState<IKanji>()
    const [previousReviewBegin, setPreviousReviewBegin] = useState<IKanji[]>([])

    const getRandomUniqueInteger = (fromArray: IKanji[], toArray: IKanji[]) => {
        let randomValue, randomKanji;
        do {
            randomValue = Math.floor(Math.random() * toArray.length);
            randomKanji = toArray[randomValue];
        } while (fromArray.map((item) => item.kanji).includes(randomKanji.kanji));
        return randomKanji;
    }

    const nextReviewBegin = (firstTime = false, mistake = false) => {
        setReviewStatus('begin')

        const isMistake = mistake || header?.getAttribute('mode') === 'mistake'
        const selectedList = isMistake ? previousMistakes[`n${level}`] : kanjiList
        const arrayOfObjects = Object.keys(selectedList).map((key) => ({ ...selectedList[key] }));

        if (previousReviewBegin.length !== arrayOfObjects.length) {
            setReviewStatus('begin')
            const selectedKanji: IKanji = getRandomUniqueInteger(previousReviewBegin, arrayOfObjects)
            setPreviousReviewBegin(firstTime ? [selectedKanji] : [...previousReviewBegin, selectedKanji])
            setKanjiDefinition(selectedKanji)
        }
        else handleEndReview()
    }

    useEffect(() => { if (kanjiDefinition) combineQuestion() }, [kanjiDefinition])

    const handleStart = (resume = false) => {
        header?.setAttribute('mode', '')
        if (resume) nextReviewBegin()
        else {
            setPreviousReviewBegin([])
            nextReviewBegin(true)
        }

    }

    const handleMistakes = () => {
        if (Object.keys(previousMistakes[`n${level}`]).length) {
            header?.setAttribute('mode', 'mistake')
            nextReviewBegin(true, true)
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const formProps = Object.fromEntries(formData)
        const input = formProps.input_romaji.toString()
        const inputInReadings = (kanjiDefinition?.kun_readings ? kanjiDefinition.kun_readings : kanjiDefinition?.on_readings)?.includes(input)
        const hasParen = /[\(\)]/.test(fortKanji.default)

        if (input === fortKanji.unreplaced.replace('-', '')) {
            e.currentTarget.reset()
            setInputValidator('')
            nextReviewBegin(false)
        }
        else if (inputInReadings && !hasParen) setInputValidator('blue')
        else {
            if (kanjiDefinition && !previousMistakes[`n${level}`].hasOwnProperty(kanjiDefinition.kanji)) {
                const prevMiss = { ...previousMistakes }
                prevMiss[`n${level}`] = { ...prevMiss[`n${level}`], [kanjiDefinition.kanji]: kanjiDefinition }
                setPreviousMistakes(prevMiss)
            }
            setInputValidator('red')
        }
    }

    const handleEndReview = () => {
        header?.setAttribute('mode', '')
        setReviewStatus('none')
        setInputValidator('')
        setPreviousReviewBegin((list) => list.slice(0, -1))
    }

    const getRandomItem = (array: string[]) => {
        return array[Math.floor(Math.random() * array.length)]
    }

    const combineQuestion = () => {
        if (kanjiDefinition) {
            const kReading = kanjiDefinition.kun_readings
            const oReading = kanjiDefinition.on_readings || []
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
                        <button className='btn__begin' onClick={() => handleStart()}>Begin</button>
                        <button onClick={() => handleStart(true)} className='btn__counter btn__resume' data-counter={`${previousReviewBegin.length}/${kanjiList?.length}`}>Resume</button>
                        <button onClick={handleMistakes} disabled={!Object.keys(previousMistakes[`n${level}`]).length} className='btn__counter btn__mistakes' data-counter={`${`${Object.keys(previousMistakes[`n${level}`]).length}`}`}>Mistakes</button>
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