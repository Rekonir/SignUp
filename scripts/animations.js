const svgAnim = new Vivus(
    'mySvg',
    {
      type: 'scenario-sync',
      duration: 500
    },
    function (obj) {
      obj.el.classList.add('finished');
    }
  );