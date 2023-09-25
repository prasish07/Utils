let editor;
let editor2;
let jsonData;
let hideToastTimeOut;

require.config({
  paths: { vs: "https://unpkg.com/monaco-editor@latest/min/vs" },
});
require(["vs/editor/editor.main"], function () {
  let code = document
    .getElementById("editorContainer")
    .getAttribute("data-code");
  let outputCode = document
    .getElementById("editorContainer2")
    .getAttribute("data-code");
  monaco.editor.defineTheme("myTheme", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#1C2130",
    },
  });
  let submitButton;
  editor = monaco.editor.create(document.getElementById("editorContainer"), {
    value: code,
    language: "json",
    theme: "myTheme",
    readOnly: false,
    fontSize: 14,
    lineHeight: 20,
    minimap: { enabled: false },
    fontFamily: "Droid Sans Mono",
    wordWrap: "bounded",
    wordWrapColumn: 55,
  });
  editor.onDidFocusEditorWidget(() => {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, (e) => {
      document.getElementById("submit-button").click();
    });
  });

  editor2 = monaco.editor.create(document.getElementById("editorContainer2"), {
    language: "yaml",
    theme: "myTheme",
    readOnly: true,
    fontSize: 14,
    lineHeight: 20,
    minimap: { enabled: false },
    fontFamily: "Droid Sans Mono",
    wordWrap: "bounded",
    wordWrapColumn: 55,
  });
});

const showMenu = () => {
  const menu = document.querySelector(".editor__menu-content");
  menu.classList.toggle("on-off-toggle");
};

const copyCode = () => {
  clearTimeout(hideToastTimeOut);
  let code = editor2.getValue();
  navigator.clipboard.writeText(code);
  hideToastTimeOut = setTimeout(() => {
    document.querySelector(".toast").style.animation =
      "hide-toast 0.5s ease-in-out forwards";
  }, 3000);
};

const downloadCode = () => {
  let code = editor2.getValue();

  const blob = new Blob([code], { type: "application/yaml" });

  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = "output.yaml";

  document.body.appendChild(a);
  a.click();

  window.URL.revokeObjectURL(url);
};
