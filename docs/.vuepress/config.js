module.exports = {
    title: '轱辘UI',
    description: '一个好用的UI框架',
    base:'/vue-gulu/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: "入门",
                children:[
                    '/install/',
                    '/get-started/'
                ]
                
            },{
                title: "组件",
                children:[
                    '/components/button',
                    '/components/input',
                    '/components/layout',
                    '/components/container',
                ]
            }
            
        ]
    }
}