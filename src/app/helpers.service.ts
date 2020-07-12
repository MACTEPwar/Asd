import { Injectable } from '@angular/core';
import { MainMenu } from './model/mein-menu';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  getMainMenu(): MainMenu[] {
    const menu: MainMenu[] = [
      {
        id: 1,
        name: 'Справочники',
        url: '',
        image: '',
        level: 1,
        children: [
          {
            id: 4,
            name: 'Банки',
            url: '/banks',
            image: './assets/maintheme/images/icons/test.svg',
            level: 2,
            parentId: 1,
            children: [],
          },
          {
            id: 5,
            name: 'Валюты',
            url: '/currency',
            image: './assets/maintheme/images/icons/test.svg',
            level: 2,
            parentId: 1,
            children: [],
          },
          {
            id: 6,
            name: 'Местоположения',
            url: '/location',
            image: './assets/maintheme/images/icons/test.svg',
            level: 2,
            parentId: 1,
            children: [],
          },
          {
            id: 17,
            name: 'Контрагенты',
            url: '/contractor',
            image: './assets/maintheme/images/icons/test.svg',
            level: 2,
            parentId: 1,
            children: [],
          },
          {
            id: 14,
            name: 'Сотрудники',
            url: '/employee',
            image: './assets/maintheme/images/icons/test.svg',
            level: 2,
            parentId: 1,
            children: [],
          },
          {
            id: 15,
            name: 'Профессии',
            url: '/posts',
            image: './assets/maintheme/images/icons/test.svg',
            level: 2,
            parentId: 1,
            children: [],
          },
          {
            id: 16,
            name: 'Подразделения',
            url: '/store',
            image: './assets/maintheme/images/icons/test.svg',
            level: 2,
            parentId: 1,
            children: [],
          },
        ],
      },
      {
        id: 2,
        name: 'Test2',
        url: 'google.com',
        image: '',
        level: 1,
        children: [
          {
            id: 7,
            name: 'Test2.1',
            url: 'google.com',
            image: '',
            level: 2,
            parentId: 2,
            children: [
              {
                id: 13,
                name: 'Test2.1.1',
                url: '',
                image: '',
                level: 3,
                parentId: 7,
                children: [],
              },
            ],
          },
          {
            id: 8,
            name: 'Test2.2',
            url: 'google.com',
            image: '',
            level: 2,
            parentId: 2,
            children: [],
          },
          {
            id: 9,
            name: 'Test2.3',
            url: 'google.com',
            image: '',
            level: 2,
            parentId: 2,
            children: [],
          },
        ],
      },
      {
        id: 3,
        name: 'Test3',
        url: 'google.com',
        image: '',
        level: 1,
        children: [
          {
            id: 10,
            name: 'Test3.1',
            url: '',
            image: '',
            level: 2,
            parentId: 3,
            children: [
              {
                id: 111,
                name: 'Test3.1.1',
                url: 'google.com',
                image: '',
                level: 3,
                parentId: 10,
                children: [],
              },
              {
                id: 112,
                name: 'Test3.1.2',
                url: 'google.com',
                image: '',
                level: 3,
                parentId: 10,
                children: [],
              },
            ],
          },
          {
            id: 11,
            name: 'Test3.2',
            url: 'google.com',
            image: '',
            level: 2,
            parentId: 3,
            children: [],
          },
          {
            id: 12,
            name: 'Test3.3',
            url: 'google.com',
            image: '',
            level: 2,
            parentId: 3,
            children: [],
          },
          {
            id: 13,
            name: 'Test3.4',
            url: 'google.com',
            image: '',
            level: 2,
            parentId: 3,
            children: [],
          },
          {
            id: 14,
            name: 'Test3.5',
            url: 'google.com',
            image: '',
            level: 2,
            parentId: 3,
            children: [],
          },
          {
            id: 15,
            name: 'Test3.6',
            url: '',
            image: '',
            level: 2,
            parentId: 3,
            children: 
            [
              {
                id: 1222,
                name: 'Test3.6.1',
                url: '',
                image: '',
                level: 3,
                parentId: 15,
                children: [
                  {
                    id: 122,
                    name: 'Test3.6.1.1',
                    url: 'google.com',
                    image: '',
                    level: 4,
                    parentId: 1222,
                    children: [],
                  },
                  {
                    id: 1333,
                    name: 'Test3.6.1.2',
                    url: 'google.com',
                    image: '',
                    level: 4,
                    parentId: 1222,
                    children: [],
                  }
                ],
              },
              {
                id: 133,
                name: 'Test3.6.2',
                url: 'google.com',
                image: '',
                level: 3,
                parentId: 15,
                children: [],
              },
            ],
          },
        ],
      },
    ];
    return menu;
  }
}
