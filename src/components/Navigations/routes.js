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
                pathName: 'Report Pengguna',
                icon: <FiUser className="Aside__Nav_item-icon" />
            },
            {
                path: '/content',
                pathName: 'Report Konten',
                icon: <FiImage className="Aside__Nav_item-icon" />
            },
            {
                path: '/program',
                pathName: 'Report Program',
                icon: <FiActivity className="Aside__Nav_item-icon" />
            },
            {
                path: '/redzone',
                pathName: 'Report Redzone',
                icon: <FiMapPin className="Aside__Nav_item-icon" />
            },
            {
                path: '/monitoring-content', //tadinya content, nanti tolong routenya diganti
                pathName: 'Monitoring Konten',
                icon: <FiMonitor className="Aside__Nav_item-icon" />
            },
            {
                path: '/monitoring-program', //tadinya content, nanti tolong routenya diganti
                pathName: 'Monitoring Program',
                icon: <FiMonitor className="Aside__Nav_item-icon" />
            },
            {
                path: '/monitoring-status', //tadinya content, nanti tolong routenya diganti
                pathName: 'Monitoring Aktivitas',
                icon: <FiMonitor className="Aside__Nav_item-icon" />
            },
            {
                path: '/controlling-status', //tadinya content, nanti tolong routenya diganti
                pathName: 'Controlling Status',
                icon: <FiSliders className="Aside__Nav_item-icon" />
            },
            {
                path: '/commercial', //tadinya content, nanti tolong routenya diganti
                pathName: 'Laporan Keuangan Terestimasi',
                icon: <FiDollarSign className="Aside__Nav_item-icon" />
            },
        ]
    },
    {
        path: '/cms',
        pathName: 'Manajemen Data',
        icon: <FiImage className="Aside__Nav_item-icon" />,
        children: [
            {
                path: '/user',
                pathName: 'Pengguna',
                icon: <FiUser className="Aside__Nav_item-icon" />
            },
            {
                path: '/program', //tadinya program, nanti tolong routenya diganti
                pathName: 'Program',
                icon: <FiActivity className="Aside__Nav_item-icon" />
            },
            {
                path: '/content', //tadinya content, nanti tolong routenya diganti
                pathName: 'Konten',
                icon: <FiImage className="Aside__Nav_item-icon" />
            },
            {
                path: '/redzone',
                pathName: 'Redzone',
                icon: <FiMapPin className="Aside__Nav_item-icon" />
            },

            {
                path: '/notifications', //tadinya content, nanti tolong routenya diganti
                pathName: 'Notifikasi',
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
                pathName: 'Manajemen Admin & Staff',
                icon: <FiUser className="Aside__Nav_item-icon" />
            },

            {
                path: '/setting',
                pathName: 'Pengaturan',
                icon: <FiTool className="Aside__Nav_item-icon" />
            },
            {
                path: '/setting-topik',
                pathName: 'Topik Content',
                icon: <FiImage className="Aside__Nav_item-icon" />
            },
            {
                path: '/setting-list-kateProgram',
                pathName: 'Kategori Program',
                icon: <FiActivity className="Aside__Nav_item-icon" />
            },
            {
                path: '/setting-add',
                pathName: 'Target Pembaca',
                icon: <FiLayers className="Aside__Nav_item-icon" />
            },
            {
                path: '/setting-list-kateNotif',
                pathName: 'Kategori Notifikasi',
                icon: <FiInbox className="Aside__Nav_item-icon" />
            },
        
            {
                path: '/setting-list-screentime',
                pathName: 'Standart Screen Time',
                icon: <FiMonitor className="Aside__Nav_item-icon" />
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