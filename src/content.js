function Content() {
  const dom = document.getElementById('root');
  const div = document.createElement('div');
  div.innerText = 'Content';
  dom.append(div);
}

// export default Content;

module.exports = Content;
