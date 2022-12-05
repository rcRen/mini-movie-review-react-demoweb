import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaFilm />,
        cName: 'nav-text'
    },
    {
        title: 'Popular',
        path: '/popular',
        icon: <FaIcons.FaRegHeart />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaRegAddressCard />,
        cName: 'nav-text'
    },
    {
        title: 'Movie1',
        path: '/recommend1',
        icon: <FaIcons.FaRegThumbsUp />,
        cName: 'nav-text'
    },
    {
        title: 'Movie2',
        path: '/recommend2',
        icon: <FaIcons.FaRegThumbsUp />,
        cName: 'nav-text'
    },
    {
        title: 'Movie3',
        path: '/recommend3',
        icon: <FaIcons.FaRegThumbsUp />,
        cName: 'nav-text'
    }
]