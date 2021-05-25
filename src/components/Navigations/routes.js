import { FiActivity, FiEdit, FiHome, FiImage, FiMapPin, FiTool  } from 'react-icons/fi';

export const MenuCoBranding = [
    {
        path: '/',
        pathName: 'Dashboard',
        icon: <FiHome className="Aside__Nav_item-icon" />
    },
    {
        path: '/report',
        pathName: 'Report',
        icon: <FiEdit className="Aside__Nav_item-icon" />
    },
    {
        path: '/program',
        pathName: 'Program',
        icon: <FiActivity className="Aside__Nav_item-icon" />
    },
    {
        path: '/content',
        pathName: 'Content',
        icon: <FiImage className="Aside__Nav_item-icon" />
    },
    {
        path: '/redzone',
        pathName: 'Redzone',
        icon: <FiMapPin className="Aside__Nav_item-icon" />
    },
    {
        path: '/setting',
        pathName: 'Setting',
        icon: <FiTool className="Aside__Nav_item-icon" />
    }
]