import { MenuProps } from 'antd';
import * as Styled from './SideMenu.styles';
import { sideMenuItems } from '../../utils/constants';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setCurrentPage } from '@/store/appSlice';
import { AppState } from '@/store/types';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';
import { NAV_URLS } from '@/utils/constants';

const SideMenu = () => {
    const currentPage = useAppSelector((state) => state.app.currentPage);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        const pageToNavigate =
            e.key === 'characters' ? NAV_URLS.characters : e.key;
        navigate(`${pageToNavigate}`);
        dispatch(setCurrentPage(e.key as AppState['currentPage']));
    };

    return (
        <Styled.Menu
            onClick={onClick}
            selectedKeys={[currentPage ? currentPage : 'characters']}
            mode="vertical"
            items={sideMenuItems}
        />
    );
};

export default SideMenu;
