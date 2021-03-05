import {
    Tabbar,
    TabbarItem,
    Button,
    TreeSelect,
    Image as VanImage,
    NavBar, 
    Col, 
    Row,
    Search
} from 'vant'
let vantUIs = [Tabbar, TabbarItem, Button, TreeSelect, VanImage, NavBar, Col, Row, Search]

export default {
    install(Vue) {
        vantUIs.forEach(vantUI => {
            Vue.component(vantUI.name, vantUI)
            // Vue.use(vantUI)    // 也可以使用 Vue.use()
        })
    }
}