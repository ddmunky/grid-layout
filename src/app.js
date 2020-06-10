import Content from './components/Content';

function App() {
    const template = document.createElement('template');
    template.innerHTML = `
    <div class="container">
    ${Content()}
    </div>
  `;
    // Return a new node from template
    return template.content.cloneNode(true);
}

export default App;
