/**

移动端使用, 需要将浏览器调整为移动端模式进行测试.
结构要求: 内容要在主体内部(这不是废话吗)...
函数名字请自行修改

使用方法:

mobileScroll({
  main: '#box2', // 容器(选择器, 字符类型), 必须
  content: '#content2', // 内容(选择器, 字符类型), 必须
  limit: 100, // 界限值(数值类型), 不传默认为 50, 单位(px)
  direction: 'lengthways', // 方向, 设置 'lengthways' 即为纵向, 不设置默认为横向
  transition: 2, // 过度时间(数值类型), 单位(秒/s), 不设置默认为 .5s
});

备注: window.resize 的时动态自适应未完成, iphone5下,纵向滚动条有bug.

*/

;(function(window) {

  function mobileScroll(options) {
    /** 容器, 要求 overflow: hidden; */
    var main = document.querySelector(options.main);
    main.style.overflow = 'hidden';
    /** 内容主体 */
    var content = document.querySelector(options.content);
    /** 根据方向来调整参数 */
    var direction = {
      client: options.direction === 'lengthways' ? 'clientY' : 'clientX',
      extent: options.direction === 'lengthways' ? 'offsetHeight' : 'offsetWidth',
      translate: options.direction === 'lengthways' ? 'translateY' : 'translateX',
    }; // direction end

    /** 如果内容小于容器, 则不触发 */
    if (content[direction.extent] <= main[direction.extent]) return false;

    /** 初始值 */
    var minLimit = options.limit || 50; // 顶部或左侧
    var maxLimit = -(content[direction.extent] - main[direction.extent] + minLimit); // 底部或右侧
    var transition = (options.transition || .5) + 's';
    var start = 0; // 起点
    var center = 0; // 中继器
    var d = 0; // 差值

    main.addEventListener('touchstart', function(e) {
      content.style.transition = 'none';
      start = e.changedTouches[0][direction.client];
    }); // touchstart end

    main.addEventListener('touchmove', function(e) {
      d = e.changedTouches[0][direction.client] - start;
      var temp = d + center;
      if (temp >= minLimit) temp = minLimit;
      if (temp <= maxLimit) temp = maxLimit;
      content.style.transform = direction.translate + '(' + temp + 'px)';
    }); // touchmove end

    main.addEventListener('touchend', function(e) {
      center = d + center;
      content.style.transition = transition;
      if (center >= 0) {
        content.style.transform = direction.translate + '(0px)';
        center = 0;
      } // if end
      if (center <= maxLimit + minLimit) {
        center = maxLimit + minLimit;
        content.style.transform = direction.translate + '(' + center + 'px)';
      } // if end
    }); // touchend end

  } // function scroll(options) end

  window.mobileScroll = mobileScroll;

})(window); // end
