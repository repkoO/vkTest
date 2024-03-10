import { TableColumnsType } from "antd";
import { Group } from "../../../types/GroupsTypes";


export const columns: TableColumnsType<Group> = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Котики',
          value: 'Котики',
        },
        {
          text: 'Собачки',
          value: 'Собачки',
        },
        {
          text: 'Бабочки',
          value: 'Бабочки',
        },
        {
          text: 'Утята',
          value: 'Утята',
        },
        {
          text: 'Мишки',
          value: 'Мишки',
        },
        {
          text: 'Улитки',
          value: 'Улитки',
        },
        {
          text: 'Выдры',
          value: 'Выдры',
        },
        {
          text: 'Зайки',
          value: 'Зайки',
        },
        {
          text: 'Кролики',
          value: 'Кролики',
        },
        {
          text: 'Куропатки',
          value: 'Куропатки',
        },
        {
          text: 'Козлики',
          value: 'Козлики',
        },
        {
          text: 'Тигры',
          value: 'Тигры',
        },
        {
          text: 'Птички',
          value: 'Птички',
        }
        // {
        //   text: 'Submenu',
        //   value: 'Submenu',
        //   children: [
        //     {
        //       text: 'Green',
        //       value: 'Green',
        //     },
        //     {
        //       text: 'Black',
        //       value: 'Black',
        //     },
        //   ],
        // },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar_color',
      filters: [
        {
          text: 'red',
          value: 'red',
        },
        {
          text: 'green',
          value: 'green',
        },
        {
          text: 'yellow',
          value: 'yellow',
        },
        {
          text: 'blue',
          value: 'blue',
        },
        {
          text: 'purple',
          value: 'purple',
        },
        {
          text: 'white',
          value: 'white',
        },
      ],
      onFilter: (value: string, record) => record.avatar_color?.indexOf(value) === 0,
    },
    {
      title: 'Closed',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value: string, record) => record.address.indexOf(value) === 0,
    },
    {
      title: 'Members',
      dataIndex: 'members_count'
    },
    // {
    //   title: 'Friends',
    //   dataIndex: 'friends',
    // }
  ];
