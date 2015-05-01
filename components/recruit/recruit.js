angular.module('app.recruit', [])
  .controller('RecruitController', RecruitController);

function RecruitController() {
  this.name = 'Friend';
  this.kagoshima = {};
  this.kagoshima.regulars = [
    {'head': '募集職種',
     'body': 'システムエンジニア，プログラマー'},
    {'head': '募集人員',
     'body': '正社員　３名'},
    {'head': '採用条件',
     'body': '年齢：３５才まで<br>上記職種の経験が３年以上ある方'},
    {'head': '学歴・資格',
     'body': '不問'},
    {'head': '仕事内容',
     'body': '業務系ソフトウェア開発（金融，会計，行政系他）<br>＜プログラム言語＞<br>ＶＢ，ＪＡＶＡ，ＣＯＢＯＬ他'},
    {'head': '勤務地（※）',
     'body': '鹿児島市'},
    {'head': '勤務時間（※）',
     'body': '９：００　～　１８：００　（昼休み　１２：００　～　１３：００）'},
    {'head': '給与',
     'body': '経験により考慮します'},
    {'head': '休日（※）',
     'body': '日曜，土曜，祝日，年末年始休暇'},
    {'head': 'その他',
     'body': '健康保険，厚生年金，雇用保険，労災保険加入<br>交通費の上限は１０，０００円'}
  ];
}

