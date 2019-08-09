function Sidebar() {
  const dom = document.getElementById('root');
  const div = document.createElement('div');
  div.innerText = 'Sidebar';
  dom.append(div);
}

// export default Sidebar;

module.exports = Sidebar;