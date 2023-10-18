import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import Kanjis from "./common/kanjiList";

export type IKanji = {
    kanji: string;
    description: string;
    on_readings: string[] | null;
    kun_readings: string[] | null;
    meanings: string[];
}

export interface AppContextInterface {
    kanjiDefinition: IKanji | null,
    setKanjiDefinition: Dispatch<SetStateAction<IKanji | null>>,
    previousMistakes: Record<string, any>,
    setPreviousMistakes: Dispatch<SetStateAction<Record<string,any>>>,
    kanjiList: string[],
    setKanjiList: Dispatch<SetStateAction<string[]>>,
    getKanjiList: (level: string) => void;
    handleHeaderClick: (level: string, toMode: string) => void;
    handleKanjiClick: (level: string) => void;
    mode: string,
    setMode: Dispatch<SetStateAction<string>>,
    reviewStatus: string,
    setReviewStatus: Dispatch<SetStateAction<string>>,
    level: string | null,
    setLevel: Dispatch<SetStateAction<string | null>>,

}

const defaultState = {
    kanjiDefinition: null,
    setKanjiDefinition: () => { },
    previousMistakes: [],
    setPreviousMistakes: () => { },
    kanjiList: [],
    setKanjiList: () => { },
    getKanjiList: () => { },
    handleHeaderClick: () => { },
    handleKanjiClick: () => { },
    mode: '',
    setMode: () => { },
    level: '',
    setLevel: () => { },
    reviewStatus: '',
    setReviewStatus: () => { },

} as AppContextInterface

type AppProviderProps = { children: ReactNode }
export const AppContext = createContext(defaultState)
export const useAppContext = (): AppContextInterface => useContext(AppContext);

export default function AppProvider({ children }: AppProviderProps) {
    const [kanjiDefinition, setKanjiDefinition] = useState<IKanji | null>(null)
    const [kanjiList, setKanjiList] = useState<string[]>([])
    const [mode, setMode] = useState<string>('')
    const [level, setLevel] = useState<string | null>(null)
    const [reviewStatus, setReviewStatus] = useState('none')
    const [previousMistakes, setPreviousMistakes] = useState<Record<string,any>>({
        'n5': [],
        'n4': [],
        'n3': [],
        'n2': [],
        'n1': [],
    })

    const getKanjiList = (checkLevel: string) => {
        const activeKanjis = Object.entries(Kanjis[`n${checkLevel}`]).map(([kanji, value]: [string, any]) => { return { ...value, kanji } })
        setKanjiList(activeKanjis)
    }

    const handleKanjiClick = (kanji: string) => {
        const findKanji: Record<string, IKanji> = Kanjis[`n${level}`]
        setKanjiDefinition({ ...findKanji[kanji], kanji })
    }

    const handleHeaderClick = (level: string, toMode: string) => {
        setMode(toMode)
        setLevel(level)
        setReviewStatus('none')
        if(toMode === 'review') getKanjiList(level)
    }

    const contextValue: AppContextInterface = {
        kanjiDefinition,
        setKanjiDefinition,
        previousMistakes,
        setPreviousMistakes,
        kanjiList,
        setKanjiList,
        getKanjiList,
        mode,
        setMode,
        level,
        setLevel,
        handleHeaderClick,
        handleKanjiClick,
        reviewStatus,
        setReviewStatus,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )

}