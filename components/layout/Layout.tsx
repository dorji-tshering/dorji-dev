import { useState } from 'react';
import MobileHeader from '../header/MobileHeader';
import DesktopSidebar from '../header/DesktopSidebar';
import MobileMenu from '../menu/MobileMenu';
import Notice from '../Notice';
import { NoticeProvider } from '../utils/NoticeContext';

const Layout = ({ children }: { children: React.ReactElement }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [notice, showNotice] = useState(false);
    const [noticeMessage, setNoticeMessage] = useState('');

    const contextValue = {
        showNotice: showNotice,
        setNoticeMessage: setNoticeMessage
    }
 
    return (
        <div className="flex flex-col md:flex-row md:h-screen bg-black">
            <MobileHeader onMenuClick={() => setShowMenu(true)}/>
            <DesktopSidebar/>
            <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
            { notice && <Notice message={noticeMessage}/>}

            <div className="overflow-y-auto flex-1">
                <NoticeProvider value={contextValue}>
                    { children }
                </NoticeProvider>
            </div>
        </div> 
    );
}

export default Layout;