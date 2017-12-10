# 说明

移动端使用, 需要将浏览器调整为移动端模式进行测试.
结构要求: 内容要在主体内部(这不是废话吗)...
函数名字请自行修改.



# 使用方法

```javascript
mobileScroll({
  main: '#box', // 容器(选择器, 字符类型), 必须
  content: '#content', // 内容(选择器, 字符类型), 必须
  limit: 100, // 界限值(数值类型), 不传默认为 50, 单位(px)
  direction: 'lengthways', // 方向, 设置 'lengthways' 即为纵向, 不设置默认为横向
  transition: 2, // 过度时间(数值类型), 单位(秒/s), 不设置默认为 .5s
});
```



# 备注

window.resize 的时动态自适应未完成, iphone5下,纵向滚动条有bug.