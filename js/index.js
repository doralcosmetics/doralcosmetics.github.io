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
    src = src.replace(/([&?])keyword=[^&]*(&|$)/, '\$1').replace(/&$/, '').replace(/\?$/, '');
    layui.sessionData(sessionDataKey,{
        key:"url",
        value: src
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
            return item.id === data.id && item.color === data.color && item.volume === data.volume && item.scented === data.scented;
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

function copyText(text) {
    if (!navigator.clipboard) {
        parent.layer.alert("Copying to clipboard is not supported");
    } else {
        navigator.clipboard.writeText(text).then(function() {
            parent.layer.msg('the text has been copied to the clipboard',{
                icon: 1
            });
        }, function(err) {
            parent.layer.msg('the text has been copied to the clipboard',{
                icon: 2
            });
        });
    }

}

function getEmailContent() {
    const inquiryData = getInquiryData()
    let content = '';

    if (inquiryData != null && inquiryData.data && inquiryData.data.length > 0) {

        inquiryData.data.forEach(item => {
            const find = data.productList.find(it => parseInt(item.id) === it.id)
            content += `Name: ${find.title}\n Batch No:  ${find.number || '-'}`
            if (item.volume) {
                content += `\n Volume:  ${item.volume}`
            }
            if (item.color) {
                content += `\n Color:  ${item.color}`
            }
            if (item.scented) {
                content += `\n Scented: ${item.scented}`
            }
            content += `\n Number:  ${item.count}\n\n`

        })
    }
    return content
}

