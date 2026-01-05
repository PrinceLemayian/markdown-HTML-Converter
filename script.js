function convertMarkdown() {
  const input = document.getElementById('markdown-input');
  const text = input ? input.value : '';

  let html = text.replace(/^\s*(#{1,3})\s+(.*)$/gm, (match, hashes, content) => {
    const level = hashes.length;
    return `<h${level}>${content}</h${level}>`;
  });

  html = html.replace(/^\s*>\s+(.*)$/gm, '<blockquote>$1</blockquote>');

  html = html.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');

  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  html = html.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');

  html = html.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');

  return html;
}

const textarea = document.getElementById('markdown-input');
if (textarea) {
  const update = () => {
    const html = convertMarkdown();
    document.getElementById('html-output').textContent = html;
    document.getElementById('preview').innerHTML = html;
  };

  textarea.addEventListener('input', update);
  update();
}