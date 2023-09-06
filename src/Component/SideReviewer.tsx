import { useContext, useState } from 'react'
import TextField from './TextField.tsx'
import { getKanjiDefinition } from '../common/helper_function.ts'
import { AppContext } from '../AppContext.tsx';
import arrow from '../assets/arrow.svg'

function SideReviewer() {

    const { kanjiList, title, previousReviewBegin, setPreviousReviewBegin, isLoadingReviewer, setIsLoadingReviewer, reviewStatus, setReviewStatus } = useContext(AppContext)
    // const [previousReviewResume, setPreviousReviewResume] = useState([])
    const [previousReviewMistakes, setPreviousReviewMistakes] = useState<string[]>([])
    const {kanjiDefinition, setKanjiDefinition} = useContext(AppContext)
    const [mode, setMode] = useState('')
    // const [heightenedKanji, setHeightenedKanji] = useState('') 
    const [inputValidator, setInputValidator] = useState(false)
    
    const nextReviewBegin = async (firstTime: boolean, mode?:string) => {
        setReviewStatus('begin')
        // console.log("mode:",mode)
        console.log("previous:",previousReviewBegin)
        const isMistakeMode = mode==='mistake' ? previousReviewMistakes : kanjiList
        const randomValue = Math.floor(Math.random() * isMistakeMode.length)
        const selectedKanji = isMistakeMode[randomValue]

        if(previousReviewBegin.length !== isMistakeMode.length){
                if(previousReviewBegin.includes(selectedKanji)){
                    nextReviewBegin(firstTime,mode)
                }
                else{
                    setPreviousReviewBegin(firstTime ? [selectedKanji] : [...previousReviewBegin, selectedKanji])
                    setIsLoadingReviewer(true)
                    try{
                        const data = await getKanjiDefinition(selectedKanji)
                        setKanjiDefinition(data)
                        setIsLoadingReviewer(false)
                    }
                    catch(err){
                        console.log(err)
                    }
                }
            }
            else{
                setPreviousReviewBegin([])
                setReviewStatus('none')
            }
    }
    
    const handleBegin = () => {
        setMode('')
        setPreviousReviewBegin([])
        nextReviewBegin(true)
    }
    const handleResume = () => {
        setMode('')
        nextReviewBegin(false)
    }
    const handleMistakes = () => {
        setMode('mistake')
        if(previousReviewMistakes.length)
            nextReviewBegin(true, 'mistake')

    }

    const getFirstReading = (reading:any) => {
        return reading.join(',').replaceAll('-','').split(/[.,]/g)[0]
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        e.target.reset()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        const kun_readings = kanjiDefinition?.kun_readings
        const on_readings = kanjiDefinition?.on_readings
        const kun_reading = getFirstReading(kun_readings)
        const on_reading = getFirstReading(on_readings)
        const readings = kun_readings?.length ? kun_reading : on_reading
        // console.log(`${formProps.input_romaji} === ${readings}`)
        if(formProps.input_romaji===readings){
            setInputValidator(false)
            nextReviewBegin(false, mode)
        }
        else{
            // console.log(formProps.input_romaji)

            if(kanjiDefinition && !previousReviewMistakes.includes(kanjiDefinition.kanji)){
                const previousMistakes = [...previousReviewMistakes, kanjiDefinition?.kanji]
                setPreviousReviewMistakes(previousMistakes)

            }
            // previousMistakes.push(kanjiDefinition?.kanji)
            // setPreviousReviewMistakes(mistakes=>mistakes.concat(previousMistakes))

            setInputValidator(true)
        }
        // formData.set(formProps.input_romaji, 'awdaa')
    }
    
    const handleEndReview = () => {
        setReviewStatus('none')
        setInputValidator(false)
        setPreviousReviewBegin((list:any) => list.slice(0,-1))
        // setKanjiDefinition(defaultState.kanjiDefinition)
    }

    return (
        <section className='section__reviewer'>
            
            {
            reviewStatus !== 'none' && 
            <button className='btn__end_review' onClick={handleEndReview}>
                <img src={arrow} alt="end" />
            </button>
            }
            <p className='title'>Reviewing: N{title}</p>
            {
                reviewStatus === 'none' ?
                <div className='btn__container'>
                    <button className='btn__begin' onClick={handleBegin}>Begin</button>
                    <button onClick={handleResume} className='btn__counter btn__resume' data-counter={`${previousReviewBegin.length}/${kanjiList?.length}`}>Resume</button>
                    <button onClick={handleMistakes} disabled={!previousReviewMistakes.length} className='btn__counter btn__mistakes' data-counter={`${`${previousReviewMistakes.length}`}`}>Mistakes</button>
                </div>
            : reviewStatus === 'begin' && isLoadingReviewer ?
                <span className='loader' />
                :
                <div className='section__reviewer__begin'>
                    {
                        <>
                            <p>{kanjiDefinition?.kanji}</p>
                            <p>{kanjiDefinition?.kun_readings.length ? 'Kun reading' : 'On reading'}</p>
                            <TextField inputValidator={inputValidator} setInputValidator={setInputValidator} handleSubmit={handleSubmit} />
                            {
                                inputValidator &&
                                <p className='validator'>wrong</p>
                            }
                            {/* <button className='btn__end_review' onClick={handleEndReview}>End Review</button> */}
                        </>
                    }
                    
                </div>
            }
            {/* <TextField /> */}
        </section>
    )
}

export default SideReviewer