import './index.css'

var btn = document.createElement('button');
btn.innerHTML = '新增';

btn.onclick = function() {
  var div = document.createElement('div');
  div.innerHTML = 'item';
  document.body.append(div);
}

document.body.append(btn);