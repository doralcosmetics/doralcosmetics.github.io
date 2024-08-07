// 判断是否是移动端
function isMobileDevice() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

const parentFrame = parent.document.getElementById('ID-frame');
const parentNavItem = parent.document.getElementsByClassName('layui-nav-item');
let $ = null;

layui.use(['jquery'], function () {
    $ = layui.jquery;
});


const sessionDataKey = "jessicaConfig";

function changeFrameSrc(src) {
    $(parentFrame).attr("src", src)
    // 改变导航栏
    for (let i = 0; i < parentNavItem.length; i++) {
        parentNavItem[i].classList.remove('layui-this');
        if (src.includes($(parentNavItem[i]).find('a').attr('lay-href'))) {
            parentNavItem[i].classList.add('layui-this');
        }
    }

    layui.sessionData(sessionDataKey,{
        key:"url",
        value: src,
    })
}
