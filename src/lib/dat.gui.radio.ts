// source is: https://gist.github.com/mootari/bfbf01320da6c14f9cba186c581d507d

function urlToColors(url) {
      return url.split('/').pop().split('-').map(function(c) {
      return '#' + c;
    });
}

function ColorDecToHEX(colorDec) {
    let result = colorDec.substring(1, colorDec.length)
    if (result.substring(1,0) !== '#' ) {
        result = '#' + parseInt(result).toString(16);
        result = result === '#0' ? '#000000' : result;
    }
    return result;
}

function colorLabel(label) {
  function gradient(colors) {
    function stops(color, i) {
       color = ColorDecToHEX(color);
       return color + ' ' + (i * 100) + '%'
         + ',' + color + ' ' + ((i+1) * 100) + '%';
      }
    return 'linear-gradient(90deg,' + colors.map(stops) + ')';
  }

  label.style.display = 'inline-block';
  var radio = label.children[0];
  radio.nextSibling.remove();
  var span = document.createElement('span');
  span.style.background = gradient(urlToColors(radio.value));
  span.style.paddingRight = '3.5em';
  span.style.marginRight = '.5em';
  label.appendChild(span);
}

export function selectToRadios(controller) {
  var wrapper = controller.domElement;
  var select = wrapper.children[0];
  
  controller.__radios = Array.prototype.map.call(select.children, function(option, i) {
    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = option.name;
    radio.value = option.value;
    radio.checked = option.selected;
    (radio as any).controller = controller;

    radio.addEventListener('change', function(e) {
      option.selected = true;
      (this as any).controller.__select.dispatchEvent(new (e as any).constructor(e.type, e));
    });

    let parentNode = controller.domElement.parentNode.parentNode.parentNode;
    controller.domElement.parentNode.parentNode.parentNode.addEventListener('click', () => { 
        if (parentNode.className === 'closed') {
            wrapper.parentNode.parentNode.style = null;
        } else {
            wrapper.parentNode.parentNode.style.height = 'auto';
        }
    }, false);
    
    var label = document.createElement('label');
    label.appendChild(radio);
    label.appendChild(document.createTextNode(option.innerText));
    wrapper.appendChild(label);
    return label;
  });
  wrapper.removeChild(select);
  controller.__radios.map(colorLabel);
  return controller;
}