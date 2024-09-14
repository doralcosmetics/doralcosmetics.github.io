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
const inquiryDataKey = "jessicaInquiry";



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

function getInquiryData() {
    return layui.data(inquiryDataKey);
}
function setInquiryData(data) {
    layui.data(inquiryDataKey,{
        key:"data",
        value: data,
    });
}

function addInquiryData(data) {
    let inquiryData = getInquiryData();
    let newData = [];
    if (inquiryData == null) {
        newData.push(data)
    }else {
        newData = inquiryData.data?inquiryData.data:[];
        let find = newData.find(function (item) {
            return item.id === data.id && item.color === data.color && item.volume === data.volume;
        });
        if (find) {
            find.count++
        }else {
            data.count = 1;
            newData.push(data);
        }

    }

    layui.data(inquiryDataKey,{
        key:"data",
        value: newData,
    });
}

