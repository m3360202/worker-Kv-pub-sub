const { createSessionId } = require('../services/method.js')
const { sendResponse } = require('../helpers.js')

function sessionController () {
  const response = createSessionId()

  return sendResponse(response)
}

function publishController(req) {
  const message = req.body;  // 获取请求中发布的消息，你可能需要将消息以请求体的形式发送
  const response = sendMessage(message);  // 发布消息
  
  return sendResponse(response); 
}

function subscribeController(req) {
  // 你可能需要从请求中取出特定的信息，如订阅者身份、订阅的主题等
  // 以下假设你将这些信息通过请求体发送
  const body = req.body;
  const subscriberId = body.subscriberId;
  const topic = body.topic;

  // 调用你的订阅服务
  const response = subscribe(subscriberId, topic);

  // 返回响应
  return sendResponse(response);
}

module.exports = { sessionController,publishController,subscribeController }
