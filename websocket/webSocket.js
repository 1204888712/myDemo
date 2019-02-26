const WebSocket = require('ws');

// 定义websocket服务器
const wsServer = new WebSocket.Server({ port: 3000 });

// 定义连接到的websocket集合
let socketSet = [];

// 连接成功后
wsServer.on('connection', (websocket, req, res) => {
  // websocket是当前连接
  // console.log(req.url);
  console.log("连接"+ req.url+"成功");
  
// url: '/5c6f1d64030a2e40c891956b',当前请求端口的地址后缀
  const userid = req.url.split('/');
  let isExist = false; // 标记当前用户是否在线
  socketSet.forEach(ws => {
    if (ws.currentId == userid[1]){ 
      isExist = true;
      if(ws.websocket != websocket){
        ws.websocket = websocket;
      }
    }
  });
  if (!isExist) {
    socketSet.push({
      websocket: websocket,
      currentId: userid[1]
    });
  }

// 服务端接收到消息
  websocket.on('message', function incoming(message) {
    console.log('received: %s', message);
    // 收到消息之后推送给目标对象
    // console.log(socketSet);
    // console.log(isExist);
    const msgObj = JSON.parse(message);
    socketSet.forEach(ws => {
      // console.log(ws);
      // 判断当前是否连接成功
      // console.log(ws.websocket.readyState == 1)//判断是否连接
      if (ws.websocket.readyState == 1) {
        if (ws.currentId == msgObj.target) {
          // 判断当前用户是否为目标对象
          ws.websocket.send(
            JSON.stringify({
              msg: msgObj.msg,
              from: msgObj.current
            })
          );
        }
      }
    });
  });
  websocket.on('close',(test,test1)=>{
    console.log('关闭')
    console.log(test,test1)
  })
  // websocket.send(
  //   JSON.stringify({
  //     msg: 'websocket连接成功'
  //   })
  // );
});
// 首次注册用户需要进行发送一次消息之后才能收到消息?
// 如果需要在用户未在线的情况下收到消息，需要在后端进行消息记录的存储

/**
readyState属性返回实例对象的当前状态，共有四种。
CONNECTING：值为0，表示正在连接。
OPEN：值为1，表示连接成功，可以通信了。
CLOSING：值为2，表示连接正在关闭。
CLOSED：值为3，表示连接已经关闭，或者打开连接失败
 */
