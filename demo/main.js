;(function() {
  mobileScroll({
    main: '#box',
    content: '#content',
  });
  // crosswise lengthways

  mobileScroll({
    main: '#box2',
    content: '#content2',
    limit: 100,
    direction: 'lengthways',
    transition: 2,
  });
})();
