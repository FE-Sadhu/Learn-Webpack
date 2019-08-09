function Header() {
  const dom = document.getElementById('root');
  const div = document.createElement('div');
  div.innerText = 'Header';
  dom.append(div);
}

// export default Header; ES6方法

// CommonJs方法
module.exports = Header;