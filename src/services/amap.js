function  initMap(){
    if(!window.AMap){
        return null;
    }
    let amap = new window.AMap.Map('', {
        resizeEnable: true
    });
    return amap;
}

export function getAddress() {
    let amap = initMap();

    if(!amap){
        console.log('获取定位失败')
        
    }
    let geolocation;
    amap.plugin('AMap.Geolocation', () => {
        geolocation = new window.AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            buttonOffset: new window.AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition:'RB'
        });
        geolocation.getCurrentPosition();
        window.AMap.event.addListener(geolocation, 'complete', (data)=> onComplete(data))
        window.AMap.event.addListener(geolocation, 'error', (data) => onError( data));

    })

}

function onComplete( data) {
    // dispatch(loadGeoAddressSuccess(data));
    console.log(data)
}

function onError( data){
    
    // dispatch(loadGeoAddressSuccess(data));
  }
