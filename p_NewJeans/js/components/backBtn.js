export function backBtn() {
  const historyStack = [];

  function showContent(contentEl) {
    const current = document.querySelector(".app_content:not([hidden])");
    if (current) {
      historyStack.push(current);
      current.hidden = true;
    }
    contentEl.hidden = false;
  }

  function goBack() {
    if (historyStack.length > 0) {
      const prev = historyStack.pop();
      const current = document.querySelector(".app_content:not([hidden])");
      if (current) current.hidden = true;
      prev.hidden = false;
    }
  }

  return { showContent, goBack };
}
