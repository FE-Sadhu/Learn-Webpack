// for css example
// import './index.css'

// var btn = document.createElement('button');
// btn.innerHTML = '新增';

// btn.onclick = function() {
//   var div = document.createElement('div');
//   div.innerHTML = 'item';
//   document.body.append(div);
// }

// document.body.append(btn);

// for js example
import Counter from './counter'
import number from './number'

Counter();
number();

if (module.hot) { // 当开启热模块更新的时候
  module.hot.accept('./number.js', () => { // 当 './number.js' 内容有变化时，触发后面的回调函数。
    document.body.removeChild(document.getElementById('number'));
    number();
  })
}
