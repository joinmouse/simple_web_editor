import './index.css'

const createElement = (
    tagName: string,
    text: string,
    click: Function
  ): HTMLElement => {
    const element = document.createElement(tagName);
    element.onclick = function (this: GlobalEventHandlers, ev: MouseEvent) {
        click && click(this)
    }
    element.innerText = text
    return element
}

interface EditorOptions {
    el: string;
    width?: number;
    height?: number;
}

class Editor {
  private options: EditorOptions;
  private dom: HTMLDivElement | null;
  private selection: Selection | null | undefined;
  private range: Range | undefined;

  constructor(options: EditorOptions) {
    this.options = options;
    const { el } = options;
    this.dom = document.querySelector(el);
    this.selection = window.getSelection();
    this.init();
  }

  attr(key: string, value: string) {
    this.dom?.setAttribute(key, value);
  }

  exec(cmd: string, showUI: boolean = false, value: string = "") {
    document.execCommand(cmd, showUI, value);
  }

  setRange() {
    const { selection } = this;
    if (selection && !selection?.isCollapsed) {
      const range = selection?.getRangeAt(0);
      console.log("selection", selection?.toString(), selection, range);
      this.range = range;
    }
  }

  recoverRange() {
    const { selection, range } = this;

    if (selection && range) {
      if (selection.rangeCount > 0) selection.removeAllRanges();
      selection?.addRange(range.cloneRange());
    }
  }

  init() {
    const that = this;

    that.attr("contenteditable", "true");
    that.attr("class", "KEditor");

    that.dom?.before(
      createElement("button", "加粗", that.setBold.bind(that)),
      createElement("button", "字体颜色", that.setColor.bind(that)),
      createElement("button", "背景颜色", that.setBgColor.bind(that))
    );

    that.dom?.addEventListener("blur", () => {
      that.setRange();
    });
  }

  setBold() {
    this.recoverRange();
    this.exec("bold");
  }

  setColor() {
    this.recoverRange();
    const color = prompt("请输入颜色") ?? "#000";
    this.exec("foreColor", false, color);
  }

  setBgColor() {
    this.recoverRange();
    const color = prompt("请输入颜色") ?? "#000";
    this.exec("backColor", true, color);
    console.log("setBgColor", color);
  }
}

new Editor({
    el: "#app",
})
