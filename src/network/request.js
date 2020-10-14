import axios from 'axios'

// config是一个对象，可以传入请求地址，请求参数等内容
export function request( config ){
    //创建axios请求实例
    const instance = axios.create({
        baseURL:'10.22.24.56/8000',       //请求服务器的ip地址
        timeout: 5000       //请求超时设置
    });

    //请求拦截
    instance.interceptors.request.use( config =>{
        //config是请求成功后拦截请求参数，一下是引用场景：
        //1.config参数有一些信息不符合服务器的需求，所以需要在这里修改
        //2.请求参数时可以在这里展示一个请求等待的图标，请求成功后再将其隐藏
        //3.某些网络请求（比如登录（token）），必须携带一些特殊的信息，如果没有可以将其拦截

        return config;  //必须返回config，不然不执行后续代码
    }, err =>{
        console.log(err);
    });

    //响应拦截
    instance.interceptors.response.use( res => {
        //拦截服务器返回的数据

        return res.data     // 必须返回res参数,不然不执行后续代码
    }, err => {
        console.log(err); 
    });

    //发送真正的网络请求
    return instance(config);
}

// 使用实例
// request({
//     url:'/act/event/prize',      //请求地址
//     userId: '123456'             //请求参数
// }).then( res => {                //请求成功后处理参数
//     console.log(res);
//     success(res);
// }).catch( err => {               //请求失败后处理
//     console.log(err);
//     failure(err);
// });