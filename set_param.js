// ==================== 技能の構造体 ====================
function skill(name,initial,add,growth,job,SW){
	this.name = name;
	this.initial = initial;
	this.add = add;
	this.growth = growth;
	this.job = job;
	this.SW = SW;
}




var character={
// ---------- 基本情報 ----------
name : 'name', furigana : 'furigana',
job : 'job', education : 'edu', from : 'from',
gender : 'gender', age : '0',

// ---------- 能力値 ----------
STR : 0, DEX : 0, INT : 0,
CON : 0, APP : 0, POW : 0,
SIZ : 0, EDU : 0,
db : 0
};


// ==================== 技能値 ====================
var skills = new Array();
skills[0] = new skill('居合',1,0,0,0,0);
skills[1] = new skill('言いくるめ',5,0,0,0,0);
skills[2] = new skill('医学',5,0,0,0,0);
skills[3] = new skill('運転(自動車)',20,0,0,0,0);
skills[4] = new skill('運転(その他)',20,0,0,0,0);
skills[5] = new skill('運転(その他)',20,0,0,0,0);
skills[6] = new skill('運転(その他)',20,0,0,0,0);
skills[7] = new skill('運転(その他)',20,0,0,0,0);
skills[8] = new skill('応急手当',30,0,0,0,0);
skills[9] = new skill('オカルト',5,0,0,0,0);
skills[10] = new skill('回避',character.DEX*2,0,0,0,0);
skills[11] = new skill('化学',1,0,0,0,0);
skills[12] = new skill('鍵開け',1,0,0,0,0);
skills[13] = new skill('隠す',15,0,0,0,0);
skills[14] = new skill('隠れる',10,0,0,0,0);
skills[15] = new skill('機械修理',20,0,0,0,0);
skills[16] = new skill('聞き耳',25,0,0,0,0);
skills[17] = new skill('クトゥルフ神話',0,0,0,0,0);
skills[18] = new skill('芸術',5,0,0,0,0);
skills[19] = new skill('芸術',5,0,0,0,0);
skills[20] = new skill('芸術',5,0,0,0,0);
skills[21] = new skill('芸術',5,0,0,0,0);
skills[22] = new skill('芸術',5,0,0,0,0);
skills[23] = new skill('経理',10,0,0,0,0);
skills[24] = new skill('考古学',1,0,0,0,0);
skills[25] = new skill('コンピューター',1,0,0,0,0);
skills[26] = new skill('忍び歩き',10,0,0,0,0);
skills[27] = new skill('写真術',10,0,0,0,0);
skills[28] = new skill('重機械操作',1,0,0,0,0);
skills[29] = new skill('乗馬',5,0,0,0,0);
skills[30] = new skill('信用',15,0,0,0,0);
skills[31] = new skill('心理学',5,0,0,0,0);
skills[32] = new skill('人類学',1,0,0,0,0);
skills[33] = new skill('水泳',25,0,0,0,0);
skills[34] = new skill('製作',5,0,0,0,0);
skills[35] = new skill('製作',5,0,0,0,0);
skills[36] = new skill('製作',5,0,0,0,0);
skills[37] = new skill('製作',5,0,0,0,0);
skills[38] = new skill('製作',5,0,0,0,0);
skills[39] = new skill('精神分析',1,0,0,0,0);
skills[40] = new skill('生物学',1,0,0,0,0);
skills[41] = new skill('説得',15,0,0,0,0);
skills[42] = new skill('操縦',1,0,0,0,0);
skills[43] = new skill('操縦',1,0,0,0,0);
skills[44] = new skill('操縦',1,0,0,0,0);
skills[45] = new skill('操縦',1,0,0,0,0);
skills[46] = new skill('操縦',1,0,0,0,0);
skills[47] = new skill('地質学',1,0,0,0,0);
skills[48] = new skill('跳躍',25,0,0,0,0);
skills[49] = new skill('追跡',10,0,0,0,0);
skills[50] = new skill('電気修理',10,0,0,0,0);
skills[51] = new skill('電子工学',1,0,0,0,0);
skills[52] = new skill('天文学',1,0,0,0,0);
skills[53] = new skill('投擲',25,0,0,0,0);
skills[54] = new skill('登攀',40,0,0,0,0);
skills[55] = new skill('図書館',25,0,0,0,0);
skills[56] = new skill('ナビゲート',10,0,0,0,0);
skills[57] = new skill('値切り',5,0,0,0,0);
skills[58] = new skill('博物学',10,0,0,0,0);
skills[59] = new skill('物理学',1,0,0,0,0);
skills[60] = new skill('武道',1,0,0,0,0);
skills[61] = new skill('武道',1,0,0,0,0);
skills[62] = new skill('武道',1,0,0,0,0);
skills[63] = new skill('武道',1,0,0,0,0);
skills[64] = new skill('武道',1,0,0,0,0);
skills[65] = new skill('変装',1,0,0,0,0);
skills[66] = new skill('法律',5,0,0,0,0);
skills[67] = new skill('ほかの言語',1,0,0,0,0);
skills[68] = new skill('ほかの言語',1,0,0,0,0);
skills[69] = new skill('ほかの言語',1,0,0,0,0);
skills[70] = new skill('ほかの言語',1,0,0,0,0);
skills[71] = new skill('ほかの言語',1,0,0,0,0);
skills[72] = new skill('母国語',character.EDU*5,0,0,0,0);
skills[73] = new skill('目星',25,0,0,0,0);
skills[74] = new skill('薬学',1,0,0,0,0);
skills[75] = new skill('歴史',20,0,0,0,0);
skills[76] = new skill('オリジナル',1,0,0,0,0);
skills[77] = new skill('オリジナル',1,0,0,0,0);
skills[78] = new skill('オリジナル',1,0,0,0,0);
skills[79] = new skill('オリジナル',1,0,0,0,0);
skills[80] = new skill('オリジナル',1,0,0,0,0);
skills[81] = new skill('オリジナル',1,0,0,0,0);
skills[82] = new skill('オリジナル',1,0,0,0,0);
skills[83] = new skill('オリジナル',1,0,0,0,0);
skills[84] = new skill('オリジナル',1,0,0,0,0);
skills[85] = new skill('オリジナル',1,0,0,0,0);
skills[86] = new skill('拳銃',20,0,0,0,0);
skills[87] = new skill('サブマシンガン',15,0,0,0,0);
skills[88] = new skill('ショットガン',30,0,0,0,0);
skills[89] = new skill('マシンガン',15,0,0,0,0);
skills[90] = new skill('ライフル',25,0,0,0,0);
skills[91] = new skill('オリジナル火器',1,0,0,0,0);
skills[92] = new skill('オリジナル火器',1,0,0,0,0);
skills[93] = new skill('オリジナル火器',1,0,0,0,0);
skills[94] = new skill('オリジナル火器',1,0,0,0,0);
skills[95] = new skill('オリジナル火器',1,0,0,0,0);
skills[96] = new skill('',1,0,0,0,0);
skills[97] = new skill('',1,0,0,0,0);
skills[98] = new skill('',1,0,0,0,0);
skills[99] = new skill('',1,0,0,0,0);
