// ==UserScript==
// @name         禁止陶片五颜六色
// @namespace    https://github.com/chenyuan33/tampermonkey-extensions/blob/main/%E7%A6%81%E6%AD%A2%E9%99%B6%E7%89%87%E4%BA%94%E9%A2%9C%E5%85%AD%E8%89%B2
// @version      v1.0.2
// @description  删除了陶片中“授予”的绿色和“撤销”的红色
// @author       chenyuan3
// @match        https://www.luogu.com.cn/judgement
// @match        https://www.luogu.com.cn/user/setting/security
// @icon         https://www.luogu.com.cn/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let x = document.createElement('style');
    x.innerHTML = `
        .lcolor--red-3 {
            color: black !important;
        }
        .lcolor--green-3 {
            color: black !important;
        }
    `;
    document.body.appendChild(x);
})();
