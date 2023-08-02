import axios from "axios";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { getKanjiDefinition } from "./common/helper_function";

export type IKanji = {
    kanji: string;
    description: string;
    on_readings: string[];
    kun_readings: string[];
    meanings: string[];
}

export interface AppContextInterface {
    kanjiDefinition: IKanji | null,
    setKanjiDefinition: Dispatch<SetStateAction<IKanji | null>>,
    kanjiList: string[],
    setKanjiList: Dispatch<SetStateAction<string[]>>,
    isLoadingList: boolean,
    setIsLoadingList: Dispatch<SetStateAction<boolean>>,
    isLoadingDefinition: boolean,
    setIsLoadingDefinition: Dispatch<SetStateAction<boolean>>,
    isLoadingReviewer: boolean,
    setIsLoadingReviewer: Dispatch<SetStateAction<boolean>>,
    getKanjiList: (level:string)=> void;
    handleKanjiListClick: (level:string)=> void;
    handleKanjiReviewClick: (level:string)=> void;
    handleClickKanji: (level:string)=> void;
    mode: string | null,
    setMode: Dispatch<SetStateAction<string | null>>,
    title: string  | null,
    setTitle: Dispatch<SetStateAction<string | null>>,
    reviewStatus: string,
    setReviewStatus: Dispatch<SetStateAction<string>>,
    previousReviewBegin: string[],
    setPreviousReviewBegin: Dispatch<SetStateAction<string[]>>,

}

const defaultState = {
    kanjiDefinition: null,
    setKanjiDefinition: () => {},
    kanjiList: [],
    setKanjiList: () => {},
    isLoadingList: false,
    setIsLoadingList: () => {},
    isLoadingDefinition: false,
    setIsLoadingDefinition: () => {},
    isLoadingReviewer: false,
    setIsLoadingReviewer: () => {},
    getKanjiList: () => {},
    handleKanjiListClick: () => {},
    handleKanjiReviewClick: () => {},
    handleClickKanji: () => {},
    mode: '',
    setMode: () => {},
    title: '',
    setTitle: () => {},
    reviewStatus: '',
    setReviewStatus: () => {},
    previousReviewBegin: [],
    setPreviousReviewBegin: () => {},

} as AppContextInterface

export const AppContext = createContext(defaultState)

type AppProviderProps = {
    children: ReactNode
}

export function useAppContext(): AppContextInterface {
    return useContext(AppContext);
  }

export default function AppProvider ({children}: AppProviderProps) {
    const [kanjiDefinition, setKanjiDefinition] = useState<IKanji | null>(null)
    const [isLoadingList, setIsLoadingList] = useState<boolean>(false)
    const [isLoadingDefinition, setIsLoadingDefinition] = useState<boolean>(false)
    const [isLoadingReviewer, setIsLoadingReviewer] = useState<boolean>(false)
    const [kanjiList, setKanjiList] = useState<string[]>([])
    const [mode, setMode] = useState<string | null>('')
    const [title, setTitle] = useState<string | null>('')
    const [reviewStatus, setReviewStatus] = useState('none')
    const [previousReviewBegin, setPreviousReviewBegin] = useState<any>([])

    const urlKanjiGrade = 'https://kanjiapi.dev/v1/kanji/grade'

    const getKanjiList = async (level: string) => {
        try{
            const response = await axios.get(`${urlKanjiGrade}-${Math.abs(parseInt(level)-6)}`)
            .then(res => res.data)
            setKanjiList(response)
        }
        catch(err){console.log(err)}
    }

    const handleClickKanji = async (kanji:string) => {
        try{
            setIsLoadingDefinition(true)
            const data = await getKanjiDefinition(kanji)
            setKanjiDefinition(data)
            setIsLoadingDefinition(false)
        }
        catch(err){console.log(err)}
    }

    const handleKanjiListClick = async (lesson:any) => {
        setMode('lessons')
        getKanjiList(lesson)
      }
    
    
      const handleKanjiReviewClick = (reviewer:any) => {
        setMode('reviewer')
        setTitle(reviewer)
        getKanjiList(reviewer)
        setReviewStatus('none')
      }

      
    const contextValue: AppContextInterface = {
        kanjiDefinition,
        setKanjiDefinition,
        kanjiList,
        setKanjiList,
        isLoadingList,
        setIsLoadingList,
        isLoadingDefinition,
        setIsLoadingDefinition,
        isLoadingReviewer, 
        setIsLoadingReviewer,
        getKanjiList,
        mode,
        setMode,
        title,
        setTitle,
        handleKanjiListClick,
        handleKanjiReviewClick,
        handleClickKanji,
        reviewStatus,
        setReviewStatus,
        previousReviewBegin,
        setPreviousReviewBegin
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children} 
        </AppContext.Provider>
    )

}