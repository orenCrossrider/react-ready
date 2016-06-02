import {blueGrey500, grey400, deepOrange600} from 'material-ui/styles/colors';
import GlobalCss from '../shared/inline_css';

const navbarHeight = 56;

export default {
    navbarHeight: navbarHeight,
    sticky: {
        zIndex: GlobalCss.zIndexes.navbar
    },
    root: {
        background: blueGrey500,
        zIndex: GlobalCss.zIndexes.navbar,
        position: "relative",
        height: `${navbarHeight}px`
    },
    navbarLink: {
        color: 'white',
        fontSize: "12px"
    },
    iconStyle: {
        color: 'white',
        padding: '15px 0 0 15px'
    },
    searchBtn: {
        color: 'white',
        padding: '15px'
    },
    searchBtnFont: {
        fontSize: '25px'
    },
    userEmailStyle: {
        paddingRight: "0px",
        fontSize: '15px',
        color: 'white'
    },
    userMoreBtnStyle: {
        marginTop: '4px',
        color: 'white'
    },
    rightSeparator: {
        backgroundColor: 'rgba(255, 255, 255, 0.175)',
        marginRight: '10px',
        marginLeft: '0px'
    },
    avatar: {
        paddingRight: "5px",
        paddingLeft: "0px"
    }
};
