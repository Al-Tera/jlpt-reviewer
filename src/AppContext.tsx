import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import Kanjis from "./common/kanjiList";

export type IKanji = {
    'kanji': string;
    'description': string;
    'on_readings': string[] | null;
    'kun_readings': string[] | null;
    'meanings': string[];
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
    getKanjiList: (level: string) => void;
    handleKanjiListClick: (level: string) => void;
    handleKanjiReviewClick: (level: string) => void;
    handleClickKanji: (level: string) => void;
    mode: string | null,
    setMode: Dispatch<SetStateAction<string | null>>,
    reviewStatus: string,
    setReviewStatus: Dispatch<SetStateAction<string>>,
    previousReviewBegin: string[],
    setPreviousReviewBegin: Dispatch<SetStateAction<string[]>>,
    level: string | null,
    setLevel: Dispatch<SetStateAction<string | null>>,

}

const defaultState = {
    kanjiDefinition: null,
    setKanjiDefinition: () => { },
    kanjiList: [],
    setKanjiList: () => { },
    isLoadingList: false,
    setIsLoadingList: () => { },
    isLoadingDefinition: false,
    setIsLoadingDefinition: () => { },
    isLoadingReviewer: false,
    setIsLoadingReviewer: () => { },
    getKanjiList: () => { },
    handleKanjiListClick: () => { },
    handleKanjiReviewClick: () => { },
    handleClickKanji: () => { },
    mode: '',
    setMode: () => { },
    level: '',
    setLevel: () => { },
    reviewStatus: '',
    setReviewStatus: () => { },
    previousReviewBegin: [],
    setPreviousReviewBegin: () => { },

} as AppContextInterface

export const AppContext = createContext(defaultState)

type AppProviderProps = {
    children: ReactNode
}

export function useAppContext(): AppContextInterface {
    return useContext(AppContext);
}

export default function AppProvider({ children }: AppProviderProps) {
    const [kanjiDefinition, setKanjiDefinition] = useState<IKanji | null>(null)
    const [isLoadingList, setIsLoadingList] = useState<boolean>(false)
    const [isLoadingDefinition, setIsLoadingDefinition] = useState<boolean>(false)
    const [isLoadingReviewer, setIsLoadingReviewer] = useState<boolean>(false)
    const [kanjiList, setKanjiList] = useState<string[]>([])
    const [mode, setMode] = useState<string | null>('')
    const [level, setLevel] = useState<string | null>(null)
    const [reviewStatus, setReviewStatus] = useState('none')
    const [previousReviewBegin, setPreviousReviewBegin] = useState<any>([])

    const getKanjiList = async (checkLevel: string) => {
        const activeKanjis = Object.entries(Kanjis[`n${checkLevel}`]).map(([kanji, value]:[string, any]) => { return { ...value, kanji } })
        setKanjiList(activeKanjis)
    }

    const handleClickKanji = (kanji: string) => {
        const findKanji: Record<string, IKanji> = Kanjis[`n${level}`]
        setKanjiDefinition({ ...findKanji[kanji], kanji })
    }

    const handleKanjiListClick = async (lesson: any) => {
        setMode('lessons')
        setLevel(lesson)
    }


    const handleKanjiReviewClick = (reviewer: any) => {
        setMode('reviewer')
        setLevel(reviewer)
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
        level,
        setLevel,
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