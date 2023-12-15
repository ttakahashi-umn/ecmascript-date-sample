// 今日の日付を取得できるnew Dateを格納
const today = new Date();

// todayの１ヶ月後を計算する
today.setMonth(today.getMonth() + 1);

// 計算した日付をYYYYMMDD形式の文字列にする
const y = today.getFullYear();
const m = today.getMonth() + 1;
const d = today.getDate();

const yyyy = y.toString();
const mm = ("00" + m).slice(-2);
const dd = ("00" + d).slice(-2);

const one_month_later = yyyy + mm + dd;

// ゴール: 今日から数えて１ヶ月後の日付をYYYYYMMDDで表す文字列を表示したい。
console.log(one_month_later);
