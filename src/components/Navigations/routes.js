import { FiActivity, FiEdit, FiHome, FiImage, FiMapPin, FiTool, FiInbox, FiUser, FiLayers, FiMonitor, FiSliders, FiDollarSign  } from 'react-icons/fi';

export const MenuCoBranding = [
    {
        path: '/',
        pathName: 'Dashboard',
        icon: <FiHome className="Aside__Nav_item-icon" />
    },
    {
        path: '/report',
        pathName: 'Report',
        icon: <FiEdit className="Aside__Nav_item-icon" />,
        children: [
            {
                path: '/user',
                pathName: 'User Report',
                icon: <FiUser className="Aside__Nav_item-icon" />
            },
            {
                path: '/content',
                pathName: 'Content Report',
                icon: <FiImage className="Aside__Nav_item-icon" />
            },
            {
                path: '/program',
                pathName: 'Program Report',
                icon: <FiActivity className="Aside__Nav_item-icon" />
            },
            {
                path: '/redzone',
                pathName: 'Redzone Report',
                icon: <FiMapPin className="Aside__Nav_item-icon" />
            },
            {
                path: '/monitoring-content', //tadinya content, nanti tolong routenya diganti
                pathName: 'Monitoring Content',
                icon: <FiMonitor className="Aside__Nav_item-icon" />
            },
            {
                path: '/monitoring-program', //tadinya content, nanti tolong routenya diganti
                pathName: 'Monitoring Program',
                icon: <FiMonitor className="Aside__Nav_item-icon" />
            },
            {
                path: '/monitoring-status', //tadinya content, nanti tolong routenya diganti
                pathName: 'Monitoring Activity',
                icon: <FiMonitor className="Aside__Nav_item-icon" />
            },
            {
                path: '/controlling-status', //tadinya content, nanti tolong routenya diganti
                pathName: 'Controlling Status',
                icon: <FiSliders className="Aside__Nav_item-icon" />
            },
            {
                path: '/commercial', //tadinya content, nanti tolong routenya diganti
                pathName: 'Estimated Commercial Report',
                icon: <FiDollarSign className="Aside__Nav_item-icon" />
            },
        ]
    },
    {
        path: '/cms',
        pathName: 'Content Management System',
        icon: <FiImage className="Aside__Nav_item-icon" />,
        children: [
            {
                path: '/user',
                pathName: 'User',
                icon: <FiUser className="Aside__Nav_item-icon" />
            },
            {
                path: '/program', //tadinya program, nanti tolong routenya diganti
                pathName: 'Program',
                icon: <FiActivity className="Aside__Nav_item-icon" />
            },
            {
                path: '/content', //tadinya content, nanti tolong routenya diganti
                pathName: 'Content',
                icon: <FiImage className="Aside__Nav_item-icon" />
            },
            {
                path: '/redzone',
                pathName: 'Redzone',
                icon: <FiMapPin className="Aside__Nav_item-icon" />
            },

            {
                path: '/messaging', //tadinya content, nanti tolong routenya diganti
                pathName: 'Notification',
                icon: <FiInbox className="Aside__Nav_item-icon" />
            },
            {
                path: '/forum-moderator', //tadinya content, nanti tolong routenya diganti
                pathName: 'Forum Moderator',
                icon: <FiLayers className="Aside__Nav_item-icon" />
            },
        ]
    },
    {
        path: '/tools',
        pathName: 'Tools',
        icon: <FiTool className="Aside__Nav_item-icon" />,
        children: [
            {
                path: '/admin-staff-management',
                pathName: 'Admin & Staff Management',
                icon: <FiTool className="Aside__Nav_item-icon" />
            },

            {
                path: '/setting',
                pathName: 'Settings',
                icon: <FiTool className="Aside__Nav_item-icon" />
            }
        ]
    }
    
]

export const MenuCs = [
    {
        path: '/',
        pathName: 'Dashboard',
        icon: <FiHome className="Aside__Nav_item-icon" />
    },
    {
        path: '/helpdesk',
        pathName: 'Helpdesk',
        icon: <FiEdit className="Aside__Nav_item-icon" />
    },
    {
        path: '/top-content',
        pathName: 'Top Content',
        icon: <FiActivity className="Aside__Nav_item-icon" />
    },
    {
        path: '/cobranding',
        pathName: 'Co Branding',
        icon: <FiImage className="Aside__Nav_item-icon" />
    },
    {
        path: '/ticket',
        pathName: 'Ticket',
        icon: <FiTool className="Aside__Nav_item-icon" />
    },
    
];