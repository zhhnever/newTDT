/* 全图 */
function allMap() {
    $(".downtown").fadeOut();
    $(".citySel .county").fadeOut();
    $(".mapPot span").text("湖南省");
    var bounds = new SuperMap.Bounds(111.01830338208, 27.45066750293, 113.65502213208, 28.785506370118);
    map.zoomToExtent(bounds, true);
}

/* 清除 */
function clearElements() {
    $("#mCSB_1_container").html(' ');
    $(".resultPane .resultCont").css("bottom", "0px"); //让结果面板距离底部距离恢复为0
    $("#Pagination").hide(); //隐藏分页按钮
    $(".resultPane").fadeOut();
    vectorLayer.removeAllFeatures();
    markerLayer.clearMarkers();
    startChooise = -1, endChooise = -1;
    start.onclick = function () { //恢复起点被再次点击的功能
        chooseStart("start");
    }
    end.onclick = function () { //恢复终点被再次点击的功能
        chooseStart("end");
    }
}