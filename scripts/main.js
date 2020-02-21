$(document).ready(() => {

  function update_magnitude(register, mag1) {
    register.removeClass('start');
    let prob1 = mag1 * mag1;
    let prob0 = 1.0 - prob1;
    let mag0 = Math.sqrt(prob0);

    register.find('.prob0').text(prob0.toFixed(3));
    register.find('.prob1').text(prob1.toFixed(3));
    register.find('.mag0').text(mag0.toFixed(3));
    register.find('.mag1').text(mag1.toFixed(3));

    let circle0 = register.find('.amplitude-0 .inner');
    if (circle0) {
      circle0.removeClass('start');
      let diam0 = 60 * mag0;
      let r0 = diam0 / 2;
      circle0.css('height', diam0);
      circle0.css('width', diam0);
      circle0.css('margin', `-${r0}px 0px 0px -${r0}px`);
      let line0 = register.find('.amplitude-0 .line');
      if (line0) {
        line0.css('height', `${r0}px`);
      }
    }

    let circle1 = register.find('.amplitude-1 .inner');
    if (circle1) {
      circle1.removeClass('start');
      let diam1 = 60 * mag1;
      let r1 = diam1 / 2;
      circle1.css('height', diam1);
      circle1.css('width', diam1);
      circle1.css('margin', `-${r1}px 0px 0px -${r1}px`);

      let line1 = register.find('.amplitude-1 .line');
      if (line1) {
        line1.css('height', `${r1}px`);
      }
    }
  }

  $('.register.one-qubit .slider-magnitude').change(evt => {
    let register = $(evt.target).closest('.register');
    let mag1 = evt.target.value / 100;
    update_magnitude(register, mag1);
  });

  $('.register.one-qubit .slider.probability').change(evt => {
    let register = $(evt.target).closest('.register');
    let prob1 = event.target.value / 100;
    let mag1 = Math.sqrt(prob1);
    update_magnitude(register, mag1);
  });

  $('.register.one-qubit .slider.phase').change((evt) => {
    let phase = evt.target.value;
    let register = $(evt.target).closest('.register');
    let line1 = register.find('.amplitude-1 .line');
    if (line1) {
      line1.css('transform', `translateX(29.5px) translateY(30px) rotate(${180-phase}deg)`);
    }
    register.find('.arg1').text((phase * Math.PI/180).toFixed(3) + ' i')
  });

});
