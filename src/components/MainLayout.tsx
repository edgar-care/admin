import { Outlet } from 'react-router-dom';
import Header from './Header';
import SidebarMenu from './SidebarMenu';

export function MainLayout() {
    return (
        <div className={"flex-col h-screen bg-[#F1F7FD]"}>
            <Header />
            <div className={'w-full flex h-[calc(100vh-96px)]'}>
                <div className={'w-1/6 p-4 bg-[#335FC2] flex flex-col gap-6 shadow-black shadow-lg'}>
                    <SidebarMenu />
                </div>
                <div className={'p-4 w-5/6'}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default MainLayout;