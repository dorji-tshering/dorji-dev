import React, { createContext, Dispatch, SetStateAction, useContext } from 'react';

interface Props {
    children: React.ReactNode
    value: {
        showNotice: Dispatch<SetStateAction<boolean>>
        setNoticeMessage: Dispatch<SetStateAction<string>>
        isSuccess: Dispatch<SetStateAction<boolean>>
        isError: Dispatch<SetStateAction<boolean>>
    }
}

export const NoticeContext = createContext<any>(null);

export const NoticeProvider = ({ children, value }: Props) => {
    return (
        <NoticeContext.Provider value={value}>
            { children }
        </NoticeContext.Provider>
    )
}

export const useNoticeContext = () => {
    return useContext(NoticeContext);
}

