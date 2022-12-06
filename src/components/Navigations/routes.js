import { FiActivity, FiEdit, FiHome, FiImage, FiMapPin, FiTool, FiInbox, FiUser, FiLayers, FiMonitor, FiSliders, FiDollarSign, FiSunrise  } from 'react-icons/fi';

export const MenuCoBranding = () => { 
    const userLevel = localStorage.getItem('userLevel');
    const cobrandComId = localStorage.getItem('cobrandComId') ?? ''
    let gma = JSON.parse(localStorage.getItem('userData')).groupMitraAsuhId ?? ''
    let sch = JSON.parse(localStorage.getItem('userData')).sekolah ?? ''
    // console.log('User level', userLevel);
    var routeArray = [
        {
            path: '/',
            pathName: 'Dashboard',
            icon: <FiHome className="Aside__Nav_item-icon" />
        }
    ]
    if(cobrandComId === '' && gma === '' && sch === '') { 
        if(userLevel === 'Admin' || userLevel === 'Reporter') {
            routeArray.push(
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
                            pathName: 'Report Artikel',
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
                            pathName: 'Monitoring Artikel',
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
                    ]
                })
        }
        else if(userLevel === 'user') {
            routeArray.push(
                {
                    path: '/report',
                    pathName: 'Report',
                    icon: <FiEdit className="Aside__Nav_item-icon" />,
                    children: [
                        {
                            path: '/user',
                            pathName: 'Report Pengguna',
                            icon: <FiUser className="Aside__Nav_item-icon" />
                        }
                    ]
                })
        }
        else if(userLevel === 'Super Admin') {
            routeArray.push(
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
                            pathName: 'Report Artikel',
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
                            pathName: 'Monitoring Artikel',
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
                })
        }

        if(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor') {
            routeArray.push(
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
                            pathName: 'Artikel',
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
                        {
                            path: '/praytime-message', //tadinya content, nanti tolong routenya diganti
                            pathName: 'Hadits/Pesan Waktu Sholat',
                            icon: <FiSunrise className="Aside__Nav_item-icon" />
                        },
                    ]
                })
        }
        // else if(userLevel === 'Admin') {
        //     routeArray.push(
        //         {
        //             path: '/cms',
        //             pathName: 'Manajemen Data',
        //             icon: <FiImage className="Aside__Nav_item-icon" />,
        //             children: [
        //                 {
        //                     path: '/user',
        //                     pathName: 'Pengguna',
        //                     icon: <FiUser className="Aside__Nav_item-icon" />
        //                 },
        //                 {
        //                     path: '/notifications', //tadinya content, nanti tolong routenya diganti
        //                     pathName: 'Notifikasi',
        //                     icon: <FiInbox className="Aside__Nav_item-icon" />
        //                 },
        //             ]
        //         })
        // }
        else if(userLevel === 'Reporter') {
            routeArray.push(
                {
                    path: '/cms',
                    pathName: 'Manajemen Data',
                    icon: <FiImage className="Aside__Nav_item-icon" />,
                    children: [
                        {
                            path: '/notifications', //tadinya content, nanti tolong routenya diganti
                            pathName: 'Notifikasi',
                            icon: <FiInbox className="Aside__Nav_item-icon" />
                        }
                    ]
                })
        }
        if(userLevel === 'Super Admin' || userLevel === 'Admin') {
            routeArray.push({
                path: '/tools',
                pathName: 'Tools',
                icon: <FiTool className="Aside__Nav_item-icon" />,
                children: [
                    {
                        path: '/admin-staff',
                        pathName: 'Manajemen Admin & Staff',
                        icon: <FiUser className="Aside__Nav_item-icon" />
                    },
        
                    {
                        path: '/setting',
                        pathName: 'Pengaturan',
                        icon: <FiTool className="Aside__Nav_item-icon" />,
                        children: [
                            {
                                path: '/topic',
                                pathName: 'Topik Artikel',
                                icon: <FiImage className="Aside__Nav_item-icon" />
                            },
                            {
                                path: '/komunitas',
                                pathName: 'Daftar Komunitas',
                                icon: <FiImage className="Aside__Nav_item-icon" />
                            },
                            {
                                path: '/school-group',
                                pathName: 'Daftar Kelompok Mitra Asuh',
                                icon: <FiUser className="Aside__Nav_item-icon" />
                            },
                            {
                                path: '/program-category',
                                pathName: 'Kategori Program',
                                icon: <FiActivity className="Aside__Nav_item-icon" />
                            },
                            {
                                path: '/target-audience',
                                pathName: 'Target Pembaca',
                                icon: <FiLayers className="Aside__Nav_item-icon" />
                            },
                            {
                                path: '/notification-category',
                                pathName: 'Kategori Notifikasi',
                                icon: <FiInbox className="Aside__Nav_item-icon" />
                            },
                        
                            {
                                path: '/screentime',
                                pathName: 'Standar Screen Time',
                                icon: <FiMonitor className="Aside__Nav_item-icon" />
                            }
                        ]
                    },
                ]
            })
        }
        // else if(userLevel === 'Admin') {
        //     routeArray.push({
        //         path: '/tools',
        //         pathName: 'Tools',
        //         icon: <FiTool className="Aside__Nav_item-icon" />,
        //         children: [

        //             {
        //                 path: '/admin-staff',
        //                 pathName: 'Manajemen Admin & Staff',
        //                 icon: <FiUser className="Aside__Nav_item-icon" />
        //             },
        //             // {
        //             //     path: '/setting',
        //             //     pathName: 'Pengaturan',
        //             //     icon: <FiTool className="Aside__Nav_item-icon" />,
        //             //     children: [
        //             //         {
        //             //             path: '/topic',
        //             //             pathName: 'Topik Artikel',
        //             //             icon: <FiImage className="Aside__Nav_item-icon" />
        //             //         },
        //             //         {
        //             //             path: '/komunitas',
        //             //             pathName: 'Daftar Komunitas',
        //             //             icon: <FiImage className="Aside__Nav_item-icon" />
        //             //         },
        //             //         {
        //             //             path: '/school-group',
        //             //             pathName: 'Daftar Kelompok Mitra Asuh',
        //             //             icon: <FiUser className="Aside__Nav_item-icon" />
        //             //         },
        //             //         {
        //             //             path: '/program-category',
        //             //             pathName: 'Kategori Program',
        //             //             icon: <FiActivity className="Aside__Nav_item-icon" />
        //             //         },
        //             //         {
        //             //             path: '/target-audience',
        //             //             pathName: 'Target Pembaca',
        //             //             icon: <FiLayers className="Aside__Nav_item-icon" />
        //             //         },
        //             //         {
        //             //             path: '/notification-category',
        //             //             pathName: 'Kategori Notifikasi',
        //             //             icon: <FiInbox className="Aside__Nav_item-icon" />
        //             //         },
                        
        //             //         {
        //             //             path: '/screentime',
        //             //             pathName: 'Standar Screen Time',
        //             //             icon: <FiMonitor className="Aside__Nav_item-icon" />
        //             //         }
        //             //     ]
        //             // },
        //         ]
        //     })
        // }
    }
    else {
        if(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Reporter') {
            if(sch !== '') {
                routeArray.push(
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
                                pathName: 'Report Artikel',
                                icon: <FiImage className="Aside__Nav_item-icon" />
                            },
                            {
                                path: '/program',
                                pathName: 'Report Program',
                                icon: <FiActivity className="Aside__Nav_item-icon" />
                            },
                            {
                                path: '/monitoring-content', //tadinya content, nanti tolong routenya diganti
                                pathName: 'Monitoring Artikel',
                                icon: <FiMonitor className="Aside__Nav_item-icon" />
                            },
                            {
                                path: '/monitoring-program', //tadinya content, nanti tolong routenya diganti
                                pathName: 'Monitoring Program',
                                icon: <FiMonitor className="Aside__Nav_item-icon" />
                            },
                        ]
                    })
            }
            else routeArray.push(
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
                            pathName: 'Report Artikel',
                            icon: <FiImage className="Aside__Nav_item-icon" />
                        },
                        {
                            path: '/monitoring-content', //tadinya content, nanti tolong routenya diganti
                            pathName: 'Monitoring Artikel',
                            icon: <FiMonitor className="Aside__Nav_item-icon" />
                        },
                    ]
                })
        }
        else if(userLevel === 'user') {
            routeArray.push(
                {
                    path: '/report',
                    pathName: 'Report',
                    icon: <FiEdit className="Aside__Nav_item-icon" />,
                    children: [
                        {
                            path: '/user',
                            pathName: 'Report Pengguna',
                            icon: <FiUser className="Aside__Nav_item-icon" />
                        }
                    ]
                })
        }
        
        if(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor') {
            if(sch === '')
            routeArray.push(
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
                            path: '/content', //tadinya content, nanti tolong routenya diganti
                            pathName: 'Artikel',
                            icon: <FiImage className="Aside__Nav_item-icon" />
                        },
                        {
                            path: '/notifications', //tadinya content, nanti tolong routenya diganti
                            pathName: 'Notifikasi',
                            icon: <FiInbox className="Aside__Nav_item-icon" />
                        },
                    ]
                })
            else
            routeArray.push(
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
                            pathName: 'Artikel',
                            icon: <FiImage className="Aside__Nav_item-icon" />
                        },
                        {
                            path: '/notifications', //tadinya content, nanti tolong routenya diganti
                            pathName: 'Notifikasi',
                            icon: <FiInbox className="Aside__Nav_item-icon" />
                        },
                    ]
                })
        }
        // else if(userLevel === 'Admin') {
        //     routeArray.push(
        //         {
        //             path: '/cms',
        //             pathName: 'Manajemen Data',
        //             icon: <FiImage className="Aside__Nav_item-icon" />,
        //             children: [
        //                 {
        //                     path: '/user',
        //                     pathName: 'Pengguna',
        //                     icon: <FiUser className="Aside__Nav_item-icon" />
        //                 },
        //                 {
        //                     path: '/notifications', //tadinya content, nanti tolong routenya diganti
        //                     pathName: 'Notifikasi',
        //                     icon: <FiInbox className="Aside__Nav_item-icon" />
        //                 }
        //             ]
        //         })
        // }
        else if(userLevel === 'Reporter') {
            routeArray.push(
                {
                    path: '/cms',
                    pathName: 'Manajemen Data',
                    icon: <FiImage className="Aside__Nav_item-icon" />,
                    children: [
                        {
                            path: '/notifications', //tadinya content, nanti tolong routenya diganti
                            pathName: 'Notifikasi',
                            icon: <FiInbox className="Aside__Nav_item-icon" />
                        }
                    ]
                })
        }
        if(userLevel === 'Super Admin' || userLevel === 'Admin') {
            if(sch !== '') {
                routeArray.push({
                    path: '/tools',
                    pathName: 'Tools',
                    icon: <FiTool className="Aside__Nav_item-icon" />,
                    children: [
                        {
                            path: '/admin-staff',
                            pathName: 'Manajemen Admin & Staff',
                            icon: <FiUser className="Aside__Nav_item-icon" />
                        },
                        {
                            path: '/school-control',
                            pathName: 'Pengaturan Jadwal Sekolah',
                            icon: <FiUser className="Aside__Nav_item-icon" />
                        }
                    ]
                })
            }
            else {
                routeArray.push({
                    path: '/tools',
                    pathName: 'Tools',
                    icon: <FiTool className="Aside__Nav_item-icon" />,
                    children: [
                        {
                            path: '/admin-staff',
                            pathName: 'Manajemen Admin & Staff',
                            icon: <FiUser className="Aside__Nav_item-icon" />
                        }
                    ]
                })
            }
        }
        // if(userLevel === 'Super Admin') {
        //     routeArray.push({
        //         path: '/tools',
        //         pathName: 'Tools',
        //         icon: <FiTool className="Aside__Nav_item-icon" />,
        //         children: [
        //             {
        //                 path: '/admin-staff',
        //                 pathName: 'Manajemen Admin & Staff',
        //                 icon: <FiUser className="Aside__Nav_item-icon" />
        //             },
        
        //             {
        //                 path: '/setting',
        //                 pathName: 'Pengaturan',
        //                 icon: <FiTool className="Aside__Nav_item-icon" />,
        //                 children: [
        //                     {
        //                         path: '/topic',
        //                         pathName: 'Topik Artikel',
        //                         icon: <FiImage className="Aside__Nav_item-icon" />
        //                     },
        //                     {
        //                         path: '/komunitas',
        //                         pathName: 'Daftar Komunitas',
        //                         icon: <FiImage className="Aside__Nav_item-icon" />
        //                     },
        //                     {
        //                         path: '/target-audience',
        //                         pathName: 'Target Pembaca',
        //                         icon: <FiLayers className="Aside__Nav_item-icon" />
        //                     },
        //                     {
        //                         path: '/notification-category',
        //                         pathName: 'Kategori Notifikasi',
        //                         icon: <FiInbox className="Aside__Nav_item-icon" />
        //                     },
        //                 ]
        //             },
        //         ]
        //     })
        // }
        // else if(userLevel === 'Admin') {
        //     routeArray.push({
        //         path: '/tools',
        //         pathName: 'Tools',
        //         icon: <FiTool className="Aside__Nav_item-icon" />,
        //         children: [
        //             {
        //                 path: '/setting',
        //                 pathName: 'Pengaturan',
        //                 icon: <FiTool className="Aside__Nav_item-icon" />,
        //                 children: [
        //                     {
        //                         path: '/topic',
        //                         pathName: 'Topik Artikel',
        //                         icon: <FiImage className="Aside__Nav_item-icon" />
        //                     },
        //                     {
        //                         path: '/komunitas',
        //                         pathName: 'Daftar Komunitas',
        //                         icon: <FiImage className="Aside__Nav_item-icon" />
        //                     },
        //                     {
        //                         path: '/target-audience',
        //                         pathName: 'Target Pembaca',
        //                         icon: <FiLayers className="Aside__Nav_item-icon" />
        //                     },
        //                     {
        //                         path: '/notification-category',
        //                         pathName: 'Kategori Notifikasi',
        //                         icon: <FiInbox className="Aside__Nav_item-icon" />
        //                     },
        //                 ]
        //             },
        //         ]
        //     })
        // }
    }
    // console.log('Route Array', routeArray);
    return routeArray;
//     return [
//     {
//         path: '/',
//         pathName: 'Dashboard',
//         icon: <FiHome className="Aside__Nav_item-icon" />
//     },
//     {
//         path: '/report',
//         pathName: 'Report',
//         icon: <FiEdit className="Aside__Nav_item-icon" />,
//         children: [
//             {
//                 path: '/user',
//                 pathName: 'Report Pengguna',
//                 icon: <FiUser className="Aside__Nav_item-icon" />
//             },
//             {
//                 path: '/content',
//                 pathName: 'Report Artikel',
//                 icon: <FiImage className="Aside__Nav_item-icon" />
//             },
//             {
//                 path: '/program',
//                 pathName: 'Report Program',
//                 icon: <FiActivity className="Aside__Nav_item-icon" />
//             },
//             {
//                 path: '/redzone',
//                 pathName: 'Report Redzone',
//                 icon: <FiMapPin className="Aside__Nav_item-icon" />
//             },
//             {
//                 path: '/monitoring-content', //tadinya content, nanti tolong routenya diganti
//                 pathName: 'Monitoring Artikel',
//                 icon: <FiMonitor className="Aside__Nav_item-icon" />
//             },
//             {
//                 path: '/monitoring-program', //tadinya content, nanti tolong routenya diganti
//                 pathName: 'Monitoring Program',
//                 icon: <FiMonitor className="Aside__Nav_item-icon" />
//             },
//             {
//                 path: '/monitoring-status', //tadinya content, nanti tolong routenya diganti
//                 pathName: 'Monitoring Aktivitas',
//                 icon: <FiMonitor className="Aside__Nav_item-icon" />
//             },
//             {
//                 path: '/controlling-status', //tadinya content, nanti tolong routenya diganti
//                 pathName: 'Controlling Status',
//                 icon: <FiSliders className="Aside__Nav_item-icon" />
//             },
//             {
//                 path: '/commercial', //tadinya content, nanti tolong routenya diganti
//                 pathName: 'Laporan Keuangan Terestimasi',
//                 icon: <FiDollarSign className="Aside__Nav_item-icon" />
//             },
//         ]
//     },
//     {
//         path: '/cms',
//         pathName: 'Manajemen Data',
//         icon: <FiImage className="Aside__Nav_item-icon" />,
//         children: [
//             {
//                 path: '/user',
//                 pathName: 'Pengguna',
//                 icon: <FiUser className="Aside__Nav_item-icon" />
//             },
//             {
//                 path: '/program', //tadinya program, nanti tolong routenya diganti
//                 pathName: 'Program',
//                 icon: <FiActivity className="Aside__Nav_item-icon" />
//             },
//             {
//                 path: '/content', //tadinya content, nanti tolong routenya diganti
//                 pathName: 'Artikel',
//                 icon: <FiImage className="Aside__Nav_item-icon" />
//             },
//             {
//                 path: '/redzone',
//                 pathName: 'Redzone',
//                 icon: <FiMapPin className="Aside__Nav_item-icon" />
//             },

//             {
//                 path: '/notifications', //tadinya content, nanti tolong routenya diganti
//                 pathName: 'Notifikasi',
//                 icon: <FiInbox className="Aside__Nav_item-icon" />
//             },
//             {
//                 path: '/forum-moderator', //tadinya content, nanti tolong routenya diganti
//                 pathName: 'Forum Moderator',
//                 icon: <FiLayers className="Aside__Nav_item-icon" />
//             },
//         ]
//     },
//     {
//         path: '/tools',
//         pathName: 'Tools',
//         icon: <FiTool className="Aside__Nav_item-icon" />,
//         children: [
//             {
//                 path: '/admin-staff',
//                 pathName: 'Manajemen Admin & Staff',
//                 icon: <FiUser className="Aside__Nav_item-icon" />
//             },

//             {
//                 path: '/setting',
//                 pathName: 'Pengaturan',
//                 icon: <FiTool className="Aside__Nav_item-icon" />,
//                 children: [
//                     {
//                         path: '/topic',
//                         pathName: 'Topik Artikel',
//                         icon: <FiImage className="Aside__Nav_item-icon" />
//                     },
//                     {
//                         path: '/program-category',
//                         pathName: 'Kategori Program',
//                         icon: <FiActivity className="Aside__Nav_item-icon" />
//                     },
//                     {
//                         path: '/target-audience',
//                         pathName: 'Target Pembaca',
//                         icon: <FiLayers className="Aside__Nav_item-icon" />
//                     },
//                     {
//                         path: '/notification-category',
//                         pathName: 'Kategori Notifikasi',
//                         icon: <FiInbox className="Aside__Nav_item-icon" />
//                     },
                
//                     {
//                         path: '/screentime',
//                         pathName: 'Standar Screen Time',
//                         icon: <FiMonitor className="Aside__Nav_item-icon" />
//                     }
//                 ]
//             },
//         ]
//     }
    
// ]
}

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