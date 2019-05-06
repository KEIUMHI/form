$(function () {
  'use strict';
  
  var $inputs = $('[data-rule]'),
      inputs = [],
      $from = $('#signup');
  $inputs.each(function (index, node) {
    var tmp = new Input(node);
    inputs.push(tmp);
  })
  $from.on('submit', function (e) {
    e.preventDefault();
    $inputs.trigger('blur');
    for (var i = 0; i < inputs.length; i++) {
      var item = inputs[i];
      var r = item.validator.is_valid();
      if (!r) {
        alert('invalid');
        return;
      }
    }

    alert('注册成功');
  })
});