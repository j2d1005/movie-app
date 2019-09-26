import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    /*리셋*/
    html, body, div, span, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    abbr, address, cite, code,
    del, dfn, em, img, ins, kbd, q, samp,
    small, strong, sub, sup, var,
    b, i,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section, summary,
    time, mark, audio, video {
        margin:0; padding:0; box-sizing:border-box;
    }

    a{box-sizing:border-box;color:#000;}

    article,aside,details,figcaption,figure,
    footer,header,hgroup,menu,nav,section {
        display:block;
    }


    body {
        font-family:'Noto Sans CJKkr';
        font-size:18px;
        letter-spacing:-0.01em; line-height:1.4; -webkit-font-smoothing : antialiased;
        color:#000;
    }

    nav ul {
        list-style:none;
    }

    blockquote, q {
        quotes:none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content:'';
        content:none;
    }
    /* change colours to suit your needs */
    ins {
        background-color:#ff9;
        color:#000;
        text-decoration:none;
    }

    /* change colours to suit your needs */
    mark {
        background-color:#ff9;
        color:#000;
        font-style:italic;
        font-weight:bold;
    }

    del {
        text-decoration: line-through;
    }

    abbr[title], dfn[title] {
        border-bottom:1px dotted;
        cursor:help;
    }

    table {
        border-collapse:collapse;
        border:0 none;
    }

    /* change border colour to suit your needs */
    hr {
        display:block;
        height:1px;
        border:0;
        border-top:1px solid #cccccc;
        margin:1em 0;
        padding:0;
    }
    input, select, textarea {
        vertical-align:middle;
        box-sizing:border-box;
        border-radius:0;
        font-family:'Noto Sans CJKkr';
    }
    input{
        margin:0;
    }
    img, fieldset {
        border:0;
    }
    ul, ol, li{
        list-style-type:none;
    }
    li img{
        vertical-align:top;
    }
    button {
        font-family:'Noto Sans CJKkr';
        box-sizing:border-box;
        padding:0;
        border:0;
        background:transparent;
        cursor:pointer
    }
    a{
        text-decoration:none;
    }
    img{
        vertical-align:middle;
        font-size:0;
    }


    @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700");
    @import url("https://cdn.jsdelivr.net/gh/theeluwin/NotoSansKR-Hestia@master/stylesheets/NotoSansKR-Hestia.css");
    @import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');
    *{
        box-sizing:border-box;
    }
    html{height:100%; overflow: auto;}
    body{
        height:100%;
        background:rgba(2,0,36,1);
        font-family:"Roboto", "Noto Sans Korean", sans-serif;
        font-size:16px;
        letter-spacing:-0.01em; line-height:1.4; -webkit-font-smoothing : antialiased;
    }
    input, select, textarea {
        vertical-align:middle;
        box-sizing:border-box;
        border-radius:0;
        font-family:"Roboto", "Noto Sans Korean", sans-serif;
        font-size:16px;
    }
    button {
        font-family:"Roboto", "Noto Sans Korean", sans-serif;
        box-sizing:border-box;
        padding:0;
        border:0;
        background:transparent;
        cursor:pointer
    }
    /* #root {
         position: absolute;
         min-height: 100%;
         width: 100%;
         left: 0;
         top: 0;
    } */
    .wrapper{
        position: absolute;
        width: 100%;
        min-height: 100%;
        top: 0;
        left: 0;
        padding-left:200px;
        background: linear-gradient(90deg, rgba(2,0,36,1) 40%, rgba(31,30,48,1) 62%, rgba(74,74,74,1) 100%);
        @media(max-width:768px){
            padding-left:0;
        }
    }
`;

export default GlobalStyled;