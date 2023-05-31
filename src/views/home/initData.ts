/*
 * @Author: mengkun822 1197235402@qq.com
 * @Date: 2022-09-16 09:45:30
 * @LastEditors: mengkun822 1197235402@qq.com
 * @LastEditTime: 2022-12-09 17:19:17
 * @FilePath: \my_blog_web\src\views\home\helper.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const banerList = [
    'https://images.unsplash.com/photo-1597239451127-914cc6d50a1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGphdmFzY3JpcHR8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=60',
    'https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGphdmFzY3JpcHR8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=60',
    'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1920&q=60',
    'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1920&q=60',
    'https://images.unsplash.com/photo-1537111261224-6fa49cecda2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=60',
    'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=60',
];
const hobbyBgList = [
    'https://www.dengzhanyong.com/img/illustrations_1.29357511.svg',
    'https://www.dengzhanyong.com/img/illustrations_2.93b50dae.svg',
    'https://www.dengzhanyong.com/img/illustrations_3.b7febdf6.svg',
    'https://www.dengzhanyong.com/img/illustrations_4.bd6fb7a3.svg',
];

interface Item {
    name: string;
    proficiency: number;
    color: string;
}

const skillList: Array<Item> = [
    {
        name: 'Vue',
        proficiency: 90,
        color: 'blue',
    },
    {
        name: 'React',
        proficiency: 80,
        color: 'green',
    },
    {
        name: 'Node',
        proficiency: 87,
        color: 'red',
    },
    {
        name: '微信小程序',
        proficiency: 90,
        color: 'pink',
    },
    {
        name: 'Uni-app',
        proficiency: 86,
        color: 'yellow',
    },
];

export { banerList, hobbyBgList, skillList };
