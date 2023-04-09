import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;
  //buttonタグの作成

  //[complete]
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストに追加
    const addTarget = completeButton.parentNode;
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    //
    const backBotton = document.createElement("button");
    backBotton.innerText = "戻す";
    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backBotton);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //[delete]
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除ボタンを押すと親タグであるdivを削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  //未完了リストから指定の要素を削除
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };
  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
