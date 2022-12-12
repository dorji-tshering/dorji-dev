import { useEffect, useRef, useState } from 'react'
import MobileHeader from '../header/MobileHeader'
import DesktopSidebar from '../header/DesktopSidebar'
import MobileMenu from '../menu/MobileMenu'
import Notice from '../Notice'
import { NoticeProvider } from '../utils/NoticeContext'
import { usePreserveScroll } from '../utils/usePreserveScroll'
import isMobile from '../utils/isMobile'

const Layout = ({ children }: { children: React.ReactElement }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [notice, showNotice] = useState(false)
    const [noticeMessage, setNoticeMessage] = useState('')
    const [success, isSuccess] = useState(false)
    const [error, isError] = useState(false)
    const [invoke, setInvoke] = useState(false)
    const ref = useRef<any>()
    const isMb = isMobile()

    // Workaround to avoid invalid hook call(solves by calling same number of hook but with different params)
    if(!invoke || isMb) {
        usePreserveScroll()
    }else {
        usePreserveScroll(ref.current)
    }

    useEffect(() => {
        !isMb && setInvoke(true)
    },[])

    const contextValue = {
        showNotice: showNotice,
        setNoticeMessage: setNoticeMessage,
        isSuccess: isSuccess,
        isError: isError,
    }
 
    return (
        <div className="flex flex-col md:flex-row md:h-screen">
            <MobileHeader onMenuClick={() => setShowMenu(true)}/>
            <DesktopSidebar/>
            <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu}/>

            <div className="overflow-y-auto relative flex-1" ref={ref}>
                <NoticeProvider value={contextValue}>
                    { 
                        notice && 
                        <Notice 
                            message={noticeMessage} 
                            success={success ? true : undefined} 
                            error={error ? true : undefined}
                            />
                    }
                    { children }
                </NoticeProvider>
            </div>
        </div> 
    );
}

export default Layout