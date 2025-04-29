import { createContext, useContext, useState } from 'react'
import InformationMessage from '../Components/Login/InformationMessage/InformationMessage'

const InformationMessageContext = createContext()

export const useInformationMessage = () => useContext(InformationMessageContext)

export const InformationMessageProvider = ({children}) => {
    const [messageData, setMessageData] = useState(null)

    const showMessage = (message, type = "Success") => {
        setMessageData({message, type})

        setTimeout(() => {
            setMessageData(null)
        }, 5000)
    }

    const hideMessage = () => {
        setMessageData(null)
    }

    return(
        <InformationMessageContext.Provider value = {{showMessage}}>
            {children}
            <InformationMessage
                message={messageData?.message}
                type={messageData?.type}
                onClose={hideMessage}
            />
        </InformationMessageContext.Provider>
    )
}