

// ============================== キャラクターの情報表示 ==============================
var OpCt = function(id){
	var OutputText = '<pre>'
	OutputText = OutputText + '=============== 探索者 ===============\n';
	if(character.name !== ''){
		OutputText = OutputText + '名前 : ' + character.name + '\n';
	};
	if(character.furigana !== ''){
		OutputText = OutputText + 'フリガナ : ' + character.furigana + '\n';
	};
	if(character.job !== ''){
		OutputText = OutputText + '職業 : ' + character.job + '\n';
	};
	if(character.education !== ''){
		OutputText = OutputText + '学校・学位 : ' + character.education + '\n';
	};
	if(character.from !== ''){
		OutputText = OutputText + '出身 : ' + character.from + '\n';
	};
	if(character.gender !== ''){
		OutputText = OutputText + '性別 : ' + character.gender + '\n';
	};
	if(character.age !== ''){
		OutputText = OutputText + '年齢 : ' + character.age + '\n';
	};
	OutputText = OutputText + '\n';

	OutputText = OutputText + '=============== 能力値 ===============\n';
	OutputText = OutputText + 'STR ' + character.STR + '\tDEX ' + character.DEX + '\tINT ' + character.INT + '\tアイディア ' + (character.INT*5) + '\n';
	OutputText = OutputText + 'CON ' + character.CON + '\tAPP ' + character.APP + '\tPOW ' + character.POW + '\t幸運 ' + (character.POW*5) + '\n';
	OutputText = OutputText + 'SIZ ' + character.SIZ + '\tSAN ' + (character.POW*5) + '\tEDU ' + character.EDU + '\t知識 ' + (character.EDU*5) + '\n';
	OutputText = OutputText + 'ダメージボーナス ' + character.db + '\n';
	OutputText = OutputText + '\n';

	OutputText = OutputText + '=============== 技能値 ===============\n';
	for(var i=0; i<100; i++){
		if(skills[i].SW === 1){
			OutputText = OutputText + skills[i].name + '\t' + (skills[i].initial + skills[i].add) + '%\n';
		}
	}

	OutputText = OutputText + '</pre>';
	document.getElementById(id).innerHTML = OutputText;
}






// ============================== 基本情報入力フォーム ==============================
// ----- ボタンを押した時に実行 -----
var InFc_param_f = function(){
	character.name = document.getElementById('InFc_param').name.value;
	character.furigana = document.getElementById('InFc_param').furigana.value;
	character.job = document.getElementById('InFc_param').job.value;
	character.education = document.getElementById('InFc_param').education.value;
	character.from = document.getElementById('InFc_param').from.value;
	character.gender = document.getElementById('InFc_param').gender.value;
	character.age = document.getElementById('InFc_param').age.value;

	OpCt("MainSqreen");
}

// ----- フォームの出力 -----
var InFc_param = function(id){
	var text;
	text = '<form action="#" id="InFc_param"><p>';
	text = text + '名前<br>	<input type="text" name="name"><br>';
	text = text + 'フリガナ<br>	<input type="text" name="furigana"> <br>';
	text = text + '職業<br>	<input type="text" name="job"> <br>';
	text = text + '学校・学位<br>	<input type="text" name="education"> <br>';
	text = text + '出身<br>	<input type="text" name="from"> <br>';
	text = text + '性別<br>	<input type="text" name="gender"> <br>';
	text = text + '年齢<br>	<input type="text" name="age"> <br>';
	text = text + '<button type="button" onClick="InFc_param_f();">探索者情報入力</button>';
	text = text + '</p></form>';
	document.getElementById(id).innerHTML = text;
}




// ============================== 能力値入力フォーム ==============================
// ----- ボタンを押した時に実行 -----
var InFc_ability_f = function(){
	if(document.getElementById('InFc_ability').sel_ability.value === "one"){
		character.STR = document.getElementById('InFc_ability').STR1.value;
		character.DEX = document.getElementById('InFc_ability').DEX1.value;
		character.INT = document.getElementById('InFc_ability').INT1.value;
		character.CON = document.getElementById('InFc_ability').CON1.value;
		character.APP = document.getElementById('InFc_ability').APP1.value;
		character.POW = document.getElementById('InFc_ability').POW1.value;
		character.SIZ = document.getElementById('InFc_ability').SIZ1.value;
		character.EDU = document.getElementById('InFc_ability').EDU1.value;
	}else if(document.getElementById('InFc_ability').sel_ability.value === "two"){
		character.STR = document.getElementById('InFc_ability').STR2.value;
		character.DEX = document.getElementById('InFc_ability').DEX2.value;
		character.INT = document.getElementById('InFc_ability').INT2.value;
		character.CON = document.getElementById('InFc_ability').CON2.value;
		character.APP = document.getElementById('InFc_ability').APP2.value;
		character.POW = document.getElementById('InFc_ability').POW2.value;
		character.SIZ = document.getElementById('InFc_ability').SIZ2.value;
		character.EDU = document.getElementById('InFc_ability').EDU2.value;
	}else if(document.getElementById('InFc_ability').sel_ability.value === "three"){
		character.STR = document.getElementById('InFc_ability').STR3.value;
		character.DEX = document.getElementById('InFc_ability').DEX3.value;
		character.INT = document.getElementById('InFc_ability').INT3.value;
		character.CON = document.getElementById('InFc_ability').CON3.value;
		character.APP = document.getElementById('InFc_ability').APP3.value;
		character.POW = document.getElementById('InFc_ability').POW3.value;
		character.SIZ = document.getElementById('InFc_ability').SIZ3.value;
		character.EDU = document.getElementById('InFc_ability').EDU3.value;
	}
	var StrSiz = character.STR + character.SIZ;
	if(StrSiz <= 12){
		character.db = "-1D6";
	}else if(StrSiz <= 16){
		character.db = "-1D4";
	}else if(StrSiz <= 24){
		character.db = "0";
	}else if(StrSiz <= 32){
		character.db = "+1D4";
	}else if(StrSiz <= 40){
		character.db = "+1D6";
	}else if(StrSiz <= 56){
		character.db = "+2D6";
	}else if(StrSiz <= 72){
		character.db = "+3D6";
	}

	// 能力値に依存する技能値の変更
	skills[10].initial = character.DEX *2;
	skills[72].initial = character.EDU *5;

	OpCt("MainSqreen");
}


// ----- フォームの出力 -----
var InFc_ability = function(id){
	var text;
	text = '<form action="#" id="InFc_ability"><table width=80px>';
	text = text + '<tr><th>STR</th><td><input type="text" name="STR1" size=1></td><td><input type="text" name="STR2" size=1></td><td><input type="text" name="STR3" size=1></td></tr>';
	text = text + '<tr><th>DEX</th><td><input type="text" name="DEX1" size=1></td><td><input type="text" name="DEX2" size=1></td><td><input type="text" name="DEX3" size=1></td></tr>';
	text = text + '<tr><th>INT</th><td><input type="text" name="INT1" size=1></td><td><input type="text" name="INT2" size=1></td><td><input type="text" name="INT3" size=1></td></tr>';
	text = text + '<tr><th>CON</th><td><input type="text" name="CON1" size=1></td><td><input type="text" name="CON2" size=1></td><td><input type="text" name="CON3" size=1></td></tr>';
	text = text + '<tr><th>APP</th><td><input type="text" name="APP1" size=1></td><td><input type="text" name="APP2" size=1></td><td><input type="text" name="APP3" size=1></td></tr>';
	text = text + '<tr><th>POW</th><td><input type="text" name="POW1" size=1></td><td><input type="text" name="POW2" size=1></td><td><input type="text" name="POW3" size=1></td></tr>';
	text = text + '<tr><th>SIZ</th><td><input type="text" name="SIZ1" size=1></td><td><input type="text" name="SIZ2" size=1></td><td><input type="text" name="SIZ3" size=1></td></tr>';
	text = text + '<tr><th>EDU</th><td><input type="text" name="EDU1" size=1></td><td><input type="text" name="EDU2" size=1></td><td><input type="text" name="EDU3" size=1></td></tr>';
	text = text + '<tr><th><button type="button" onClick="InFc_ability_f();">設定</button>';
	text = text + '<td><input type="radio" name="sel_ability" value="one" checked>';
	text = text + '<td><input type="radio" name="sel_ability" value="two">';
	text = text + '<td><input type="radio" name="sel_ability" value="three">';
	text = text + '</table></form>';
	document.getElementById(id).innerHTML = text;
}







// ============================== 技能選択 ==============================
// ----- ボタンを押した時に実行 -----
var InFc_skill_f = function(){
	var check = new Array();
	check[0] = document.forms.InFc_skill_1.SK0.checked;
	check[1] = document.forms.InFc_skill_1.SK1.checked;
	check[2] = document.forms.InFc_skill_1.SK2.checked;
	check[3] = document.forms.InFc_skill_1.SK3.checked;
	check[4] = document.forms.InFc_skill_1.SK4.checked;
	check[5] = document.forms.InFc_skill_1.SK5.checked;
	check[6] = document.forms.InFc_skill_1.SK6.checked;
	check[7] = document.forms.InFc_skill_1.SK7.checked;
	check[8] = document.forms.InFc_skill_1.SK8.checked;
	check[9] = document.forms.InFc_skill_1.SK9.checked;
	check[10] = document.forms.InFc_skill_1.SK10.checked;
	check[11] = document.forms.InFc_skill_1.SK11.checked;
	check[12] = document.forms.InFc_skill_1.SK12.checked;
	check[13] = document.forms.InFc_skill_1.SK13.checked;
	check[14] = document.forms.InFc_skill_1.SK14.checked;
	check[15] = document.forms.InFc_skill_1.SK15.checked;
	check[16] = document.forms.InFc_skill_1.SK16.checked;
	check[17] = document.forms.InFc_skill_1.SK17.checked;
	check[18] = document.forms.InFc_skill_1.SK18.checked;
	check[19] = document.forms.InFc_skill_1.SK19.checked;
	check[20] = document.forms.InFc_skill_1.SK20.checked;
	check[21] = document.forms.InFc_skill_1.SK21.checked;
	check[22] = document.forms.InFc_skill_1.SK22.checked;
	check[23] = document.forms.InFc_skill_1.SK23.checked;
	check[24] = document.forms.InFc_skill_1.SK24.checked;
	check[25] = document.forms.InFc_skill_1.SK25.checked;
	check[26] = document.forms.InFc_skill_1.SK26.checked;
	check[27] = document.forms.InFc_skill_1.SK27.checked;
	check[28] = document.forms.InFc_skill_1.SK28.checked;
	check[29] = document.forms.InFc_skill_1.SK29.checked;
	check[30] = document.forms.InFc_skill_1.SK30.checked;
	check[31] = document.forms.InFc_skill_1.SK31.checked;
	check[32] = document.forms.InFc_skill_2.SK32.checked;
	check[33] = document.forms.InFc_skill_2.SK33.checked;
	check[34] = document.forms.InFc_skill_2.SK34.checked;
	check[35] = document.forms.InFc_skill_2.SK35.checked;
	check[36] = document.forms.InFc_skill_2.SK36.checked;
	check[37] = document.forms.InFc_skill_2.SK37.checked;
	check[38] = document.forms.InFc_skill_2.SK38.checked;
	check[39] = document.forms.InFc_skill_2.SK39.checked;
	check[40] = document.forms.InFc_skill_2.SK40.checked;
	check[41] = document.forms.InFc_skill_2.SK41.checked;
	check[42] = document.forms.InFc_skill_2.SK42.checked;
	check[43] = document.forms.InFc_skill_2.SK43.checked;
	check[44] = document.forms.InFc_skill_2.SK44.checked;
	check[45] = document.forms.InFc_skill_2.SK45.checked;
	check[46] = document.forms.InFc_skill_2.SK46.checked;
	check[47] = document.forms.InFc_skill_2.SK47.checked;
	check[48] = document.forms.InFc_skill_2.SK48.checked;
	check[49] = document.forms.InFc_skill_2.SK49.checked;
	check[50] = document.forms.InFc_skill_2.SK50.checked;
	check[51] = document.forms.InFc_skill_2.SK51.checked;
	check[52] = document.forms.InFc_skill_2.SK52.checked;
	check[53] = document.forms.InFc_skill_2.SK53.checked;
	check[54] = document.forms.InFc_skill_2.SK54.checked;
	check[55] = document.forms.InFc_skill_2.SK55.checked;
	check[56] = document.forms.InFc_skill_2.SK56.checked;
	check[57] = document.forms.InFc_skill_2.SK57.checked;
	check[58] = document.forms.InFc_skill_2.SK58.checked;
	check[59] = document.forms.InFc_skill_2.SK59.checked;
	check[60] = document.forms.InFc_skill_2.SK60.checked;
	check[61] = document.forms.InFc_skill_2.SK61.checked;
	check[62] = document.forms.InFc_skill_2.SK62.checked;
	check[63] = document.forms.InFc_skill_2.SK63.checked;
	check[64] = document.forms.InFc_skill_2.SK64.checked;
	check[65] = document.forms.InFc_skill_2.SK65.checked;
	check[66] = document.forms.InFc_skill_2.SK66.checked;
	check[67] = document.forms.InFc_skill_3.SK67.checked;
	check[68] = document.forms.InFc_skill_3.SK68.checked;
	check[69] = document.forms.InFc_skill_3.SK69.checked;
	check[70] = document.forms.InFc_skill_3.SK70.checked;
	check[71] = document.forms.InFc_skill_3.SK71.checked;
	check[72] = document.forms.InFc_skill_3.SK72.checked;
	check[73] = document.forms.InFc_skill_3.SK73.checked;
	check[74] = document.forms.InFc_skill_3.SK74.checked;
	check[75] = document.forms.InFc_skill_3.SK75.checked;
	check[76] = document.forms.InFc_skill_3.SK76.checked;
	check[77] = document.forms.InFc_skill_3.SK77.checked;
	check[78] = document.forms.InFc_skill_3.SK78.checked;
	check[79] = document.forms.InFc_skill_3.SK79.checked;
	check[80] = document.forms.InFc_skill_3.SK80.checked;
	check[81] = document.forms.InFc_skill_3.SK81.checked;
	check[82] = document.forms.InFc_skill_3.SK82.checked;
	check[83] = document.forms.InFc_skill_3.SK83.checked;
	check[84] = document.forms.InFc_skill_3.SK84.checked;
	check[85] = document.forms.InFc_skill_3.SK85.checked;
	check[86] = document.forms.InFc_skill_3.SK86.checked;
	check[87] = document.forms.InFc_skill_3.SK87.checked;
	check[88] = document.forms.InFc_skill_3.SK88.checked;
	check[89] = document.forms.InFc_skill_3.SK89.checked;
	check[90] = document.forms.InFc_skill_3.SK90.checked;
	check[91] = document.forms.InFc_skill_3.SK91.checked;
	check[92] = document.forms.InFc_skill_3.SK92.checked;
	check[93] = document.forms.InFc_skill_3.SK93.checked;
	check[94] = document.forms.InFc_skill_3.SK94.checked;
	check[95] = document.forms.InFc_skill_3.SK95.checked;
	
	for(var i=0; i<100; i++){
		if(check[i] === true){
			skills[i].SW = 1;
		}else{
			skills[i].SW = 0;
		}
	}

	skills[4].name = '運転(' + document.getElementById('InFc_skill_1').SK4_text.value + ')';
	skills[5].name = '運転(' + document.getElementById('InFc_skill_1').SK5_text.value + ')';
	skills[6].name = '運転(' + document.getElementById('InFc_skill_1').SK6_text.value + ')';
	skills[7].name = '運転(' + document.getElementById('InFc_skill_1').SK7_text.value + ')';
	skills[18].name = '芸術(' + document.getElementById('InFc_skill_1').SK18_text.value + ')';
	skills[19].name = '芸術(' + document.getElementById('InFc_skill_1').SK19_text.value + ')';
	skills[20].name = '芸術(' + document.getElementById('InFc_skill_1').SK20_text.value + ')';
	skills[21].name = '芸術(' + document.getElementById('InFc_skill_1').SK21_text.value + ')';
	skills[22].name = '芸術(' + document.getElementById('InFc_skill_1').SK22_text.value + ')';
	skills[34].name = '製作(' + document.getElementById('InFc_skill_2').SK34_text.value + ')';
	skills[35].name = '製作(' + document.getElementById('InFc_skill_2').SK35_text.value + ')';
	skills[36].name = '製作(' + document.getElementById('InFc_skill_2').SK36_text.value + ')';
	skills[37].name = '製作(' + document.getElementById('InFc_skill_2').SK37_text.value + ')';
	skills[38].name = '製作(' + document.getElementById('InFc_skill_2').SK38_text.value + ')';
	skills[42].name = '操縦(' + document.getElementById('InFc_skill_2').SK42_text.value + ')';
	skills[43].name = '操縦(' + document.getElementById('InFc_skill_2').SK43_text.value + ')';
	skills[44].name = '操縦(' + document.getElementById('InFc_skill_2').SK44_text.value + ')';
	skills[45].name = '操縦(' + document.getElementById('InFc_skill_2').SK45_text.value + ')';
	skills[46].name = '操縦(' + document.getElementById('InFc_skill_2').SK46_text.value + ')';
	skills[60].name = '武道(' + document.getElementById('InFc_skill_2').SK60_text.value + ')';
	skills[61].name = '武道(' + document.getElementById('InFc_skill_2').SK61_text.value + ')';
	skills[62].name = '武道(' + document.getElementById('InFc_skill_2').SK62_text.value + ')';
	skills[63].name = '武道(' + document.getElementById('InFc_skill_2').SK63_text.value + ')';
	skills[64].name = '武道(' + document.getElementById('InFc_skill_2').SK64_text.value + ')';
	skills[67].name = 'ほかの言語(' + document.getElementById('InFc_skill_3').SK67_text.value + ')';
	skills[68].name = 'ほかの言語(' + document.getElementById('InFc_skill_3').SK68_text.value + ')';
	skills[69].name = 'ほかの言語(' + document.getElementById('InFc_skill_3').SK69_text.value + ')';
	skills[70].name = 'ほかの言語(' + document.getElementById('InFc_skill_3').SK70_text.value + ')';
	skills[71].name = 'ほかの言語(' + document.getElementById('InFc_skill_3').SK71_text.value + ')';
	skills[76].name =  document.getElementById('InFc_skill_3').SK76_text.value;
	skills[77].name =  document.getElementById('InFc_skill_3').SK77_text.value;
	skills[78].name =  document.getElementById('InFc_skill_3').SK78_text.value;
	skills[79].name =  document.getElementById('InFc_skill_3').SK79_text.value;
	skills[80].name =  document.getElementById('InFc_skill_3').SK80_text.value;
	skills[81].name =  document.getElementById('InFc_skill_3').SK81_text.value;
	skills[82].name =  document.getElementById('InFc_skill_3').SK82_text.value;
	skills[83].name =  document.getElementById('InFc_skill_3').SK83_text.value;
	skills[84].name =  document.getElementById('InFc_skill_3').SK84_text.value;
	skills[85].name =  document.getElementById('InFc_skill_3').SK85_text.value;
	skills[91].name =  document.getElementById('InFc_skill_3').SK91_text.value;
	skills[92].name =  document.getElementById('InFc_skill_3').SK92_text.value;
	skills[93].name =  document.getElementById('InFc_skill_3').SK93_text.value;
	skills[94].name =  document.getElementById('InFc_skill_3').SK94_text.value;
	skills[95].name =  document.getElementById('InFc_skill_3').SK95_text.value;



	

	InFc_skill_point("form_skill_point");
	OpCt("MainSqreen");
}

// ----- フォームの出力 -----
var InFc_skill_1 = function(id){
	var text;
	text = '<form action="#" id="InFc_skill_1"><p>';
		text = text + '<input type="checkbox" id="SK0">居合い(' +skills[0].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK1">言いくるめ(' +skills[1].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK2">医学(' +skills[2].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK3">運転(自動車)(' +skills[3].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK4">運転(<input type="text" name="SK4_text" size=5>)(' +skills[4].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK5">運転(<input type="text" name="SK5_text" size=5>)(' +skills[5].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK6">運転(<input type="text" name="SK6_text" size=5>)(' +skills[6].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK7">運転(<input type="text" name="SK7_text" size=5>)(' +skills[7].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK8">応急手当(' +skills[8].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK9">オカルト(' +skills[9].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK10">回避(' +skills[10].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK11">化学(' +skills[11].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK12">鍵開け(' +skills[12].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK13">隠す(' +skills[13].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK14">隠れる(' +skills[14].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK15">機械修理(' +skills[15].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK16">聞き耳(' +skills[16].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK17">クトゥルフ神話(' +skills[17].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK18">芸術(<input type="text" name="SK18_text" size=5>)(' +skills[18].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK19">芸術(<input type="text" name="SK19_text" size=5>)(' +skills[19].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK20">芸術(<input type="text" name="SK20_text" size=5>)(' +skills[20].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK21">芸術(<input type="text" name="SK21_text" size=5>)(' +skills[21].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK22">芸術(<input type="text" name="SK22_text" size=5>)(' +skills[22].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK23">経理(' +skills[23].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK24">考古学(' +skills[24].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK25">コンピューター(' +skills[25].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK26">忍び歩き(' +skills[26].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK27">写真術(' +skills[27].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK28">重機械操作(' +skills[28].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK29">乗馬(' +skills[29].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK30">信用(' +skills[30].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK31">心理学(' +skills[31].initial+ '%)<br>';
	text = text + '</p></form>';
	document.getElementById(id).innerHTML = text;
}

var InFc_skill_2 = function(id){
	var text;
	text = '<form action="#" id="InFc_skill_2"><p>';
		text = text + '<input type="checkbox" id="SK32">人類学(' +skills[32].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK33">水泳(' +skills[33].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK34">製作(<input type="text" name="SK34_text" size=5>)(' +skills[34].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK35">製作(<input type="text" name="SK35_text" size=5>)(' +skills[35].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK36">製作(<input type="text" name="SK36_text" size=5>)(' +skills[36].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK37">製作(<input type="text" name="SK37_text" size=5>)(' +skills[37].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK38">製作(<input type="text" name="SK38_text" size=5>)(' +skills[38].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK39">精神分析(' +skills[39].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK40">生物学(' +skills[40].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK41">説得(' +skills[41].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK42">操縦(<input type="text" name="SK42_text" size=5>)(' +skills[42].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK43">操縦(<input type="text" name="SK43_text" size=5>)(' +skills[43].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK44">操縦(<input type="text" name="SK44_text" size=5>)(' +skills[44].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK45">操縦(<input type="text" name="SK45_text" size=5>)(' +skills[45].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK46">操縦(<input type="text" name="SK46_text" size=5>)(' +skills[46].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK47">地質学(' +skills[47].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK48">跳躍(' +skills[48].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK49">追跡(' +skills[49].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK50">電気修理(' +skills[50].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK51">電子工学(' +skills[51].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK52">天文学(' +skills[52].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK53">投擲(' +skills[53].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK54">登攀(' +skills[54].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK55">図書館(' +skills[55].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK56">ナビゲート(' +skills[56].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK57">値切り(' +skills[57].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK58">博物学(' +skills[58].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK59">物理学(' +skills[59].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK60">武道(<input type="text" name="SK60_text" size=5>)(' +skills[60].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK61">武道(<input type="text" name="SK61_text" size=5>)(' +skills[61].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK62">武道(<input type="text" name="SK62_text" size=5>)(' +skills[62].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK63">武道(<input type="text" name="SK63_text" size=5>)(' +skills[63].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK64">武道(<input type="text" name="SK64_text" size=5>)(' +skills[64].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK65">変装(' +skills[65].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK66">法律(' +skills[66].initial+ '%)<br>';
	text = text + '</p></form>';
	document.getElementById(id).innerHTML = text;
}

var InFc_skill_3 = function(id){
	var text;
	text = '<form action="#" id="InFc_skill_3"><p>';
		text = text + '<input type="checkbox" id="SK67">ほかの言語(<input type="text" name="SK67_text" size=5>)(' +skills[67].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK68">ほかの言語(<input type="text" name="SK68_text" size=5>)(' +skills[68].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK69">ほかの言語(<input type="text" name="SK69_text" size=5>)(' +skills[69].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK70">ほかの言語(<input type="text" name="SK70_text" size=5>)(' +skills[70].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK71">ほかの言語(<input type="text" name="SK71_text" size=5>)(' +skills[71].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK72">母国語(' +skills[72].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK73">目星(' +skills[73].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK74">薬学(' +skills[74].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK75">歴史(' +skills[75].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK76"><input type="text" name="SK76_text" size=5>(' +skills[76].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK77"><input type="text" name="SK77_text" size=5>(' +skills[77].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK78"><input type="text" name="SK78_text" size=5>(' +skills[78].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK79"><input type="text" name="SK79_text" size=5>(' +skills[79].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK80"><input type="text" name="SK80_text" size=5>(' +skills[80].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK81"><input type="text" name="SK81_text" size=5>(' +skills[81].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK82"><input type="text" name="SK82_text" size=5>(' +skills[82].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK83"><input type="text" name="SK83_text" size=5>(' +skills[83].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK84"><input type="text" name="SK84_text" size=5>(' +skills[84].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK85"><input type="text" name="SK85_text" size=5>(' +skills[85].initial+ '%)<br>';
		text = text + '----- 火器 -----<br>';
		text = text + '<input type="checkbox" id="SK86">拳銃(' +skills[86].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK87">サブマシンガン(' +skills[87].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK88">ショットガン(' +skills[88].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK89">マシンガン(' +skills[89].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK90">ライフル(' +skills[90].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK91"><input type="text" name="SK91_text" size=5>(' +skills[91].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK92"><input type="text" name="SK92_text" size=5>(' +skills[92].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK93"><input type="text" name="SK93_text" size=5>(' +skills[93].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK94"><input type="text" name="SK94_text" size=5>(' +skills[94].initial+ '%)<br>';
		text = text + '<input type="checkbox" id="SK95"><input type="text" name="SK95_text" size=5>(' +skills[95].initial+ '%)<br>';
	text = text + '<button type="button" onClick="InFc_skill_f();">技能選択</button>';
	text = text + '</p></form>';
	document.getElementById(id).innerHTML = text;
}


// ============================== 技能値変更フォーム ==============================
// ----- ボタンを押した時に実行 -----
var InFc_skill_point_f = function(){
	if(skills[0].SW === 1)skills[0].add = parseInt(document.getElementById('InFc_skill_point').SK0point.value);
	if(skills[1].SW === 1)skills[1].add = parseInt(document.getElementById('InFc_skill_point').SK1point.value);
	if(skills[2].SW === 1)skills[2].add = parseInt(document.getElementById('InFc_skill_point').SK2point.value);
	if(skills[3].SW === 1)skills[3].add = parseInt(document.getElementById('InFc_skill_point').SK3point.value);
	if(skills[4].SW === 1)skills[4].add = parseInt(document.getElementById('InFc_skill_point').SK4point.value);
	if(skills[5].SW === 1)skills[5].add = parseInt(document.getElementById('InFc_skill_point').SK5point.value);
	if(skills[6].SW === 1)skills[6].add = parseInt(document.getElementById('InFc_skill_point').SK6point.value);
	if(skills[7].SW === 1)skills[7].add = parseInt(document.getElementById('InFc_skill_point').SK7point.value);
	if(skills[8].SW === 1)skills[8].add = parseInt(document.getElementById('InFc_skill_point').SK8point.value);
	if(skills[9].SW === 1)skills[9].add = parseInt(document.getElementById('InFc_skill_point').SK9point.value);
	if(skills[10].SW === 1)skills[10].add = parseInt(document.getElementById('InFc_skill_point').SK10point.value);
	if(skills[11].SW === 1)skills[11].add = parseInt(document.getElementById('InFc_skill_point').SK11point.value);
	if(skills[12].SW === 1)skills[12].add = parseInt(document.getElementById('InFc_skill_point').SK12point.value);
	if(skills[13].SW === 1)skills[13].add = parseInt(document.getElementById('InFc_skill_point').SK13point.value);
	if(skills[14].SW === 1)skills[14].add = parseInt(document.getElementById('InFc_skill_point').SK14point.value);
	if(skills[15].SW === 1)skills[15].add = parseInt(document.getElementById('InFc_skill_point').SK15point.value);
	if(skills[16].SW === 1)skills[16].add = parseInt(document.getElementById('InFc_skill_point').SK16point.value);
	if(skills[17].SW === 1)skills[17].add = parseInt(document.getElementById('InFc_skill_point').SK17point.value);
	if(skills[18].SW === 1)skills[18].add = parseInt(document.getElementById('InFc_skill_point').SK18point.value);
	if(skills[19].SW === 1)skills[19].add = parseInt(document.getElementById('InFc_skill_point').SK19point.value);
	if(skills[20].SW === 1)skills[20].add = parseInt(document.getElementById('InFc_skill_point').SK20point.value);
	if(skills[21].SW === 1)skills[21].add = parseInt(document.getElementById('InFc_skill_point').SK21point.value);
	if(skills[22].SW === 1)skills[22].add = parseInt(document.getElementById('InFc_skill_point').SK22point.value);
	if(skills[23].SW === 1)skills[23].add = parseInt(document.getElementById('InFc_skill_point').SK23point.value);
	if(skills[24].SW === 1)skills[24].add = parseInt(document.getElementById('InFc_skill_point').SK24point.value);
	if(skills[25].SW === 1)skills[25].add = parseInt(document.getElementById('InFc_skill_point').SK25point.value);
	if(skills[26].SW === 1)skills[26].add = parseInt(document.getElementById('InFc_skill_point').SK26point.value);
	if(skills[27].SW === 1)skills[27].add = parseInt(document.getElementById('InFc_skill_point').SK27point.value);
	if(skills[28].SW === 1)skills[28].add = parseInt(document.getElementById('InFc_skill_point').SK28point.value);
	if(skills[29].SW === 1)skills[29].add = parseInt(document.getElementById('InFc_skill_point').SK29point.value);
	if(skills[30].SW === 1)skills[30].add = parseInt(document.getElementById('InFc_skill_point').SK30point.value);
	if(skills[31].SW === 1)skills[31].add = parseInt(document.getElementById('InFc_skill_point').SK31point.value);
	if(skills[32].SW === 1)skills[32].add = parseInt(document.getElementById('InFc_skill_point').SK32point.value);
	if(skills[33].SW === 1)skills[33].add = parseInt(document.getElementById('InFc_skill_point').SK33point.value);
	if(skills[34].SW === 1)skills[34].add = parseInt(document.getElementById('InFc_skill_point').SK34point.value);
	if(skills[35].SW === 1)skills[35].add = parseInt(document.getElementById('InFc_skill_point').SK35point.value);
	if(skills[36].SW === 1)skills[36].add = parseInt(document.getElementById('InFc_skill_point').SK36point.value);
	if(skills[37].SW === 1)skills[37].add = parseInt(document.getElementById('InFc_skill_point').SK37point.value);
	if(skills[38].SW === 1)skills[38].add = parseInt(document.getElementById('InFc_skill_point').SK38point.value);
	if(skills[39].SW === 1)skills[39].add = parseInt(document.getElementById('InFc_skill_point').SK39point.value);
	if(skills[40].SW === 1)skills[40].add = parseInt(document.getElementById('InFc_skill_point').SK40point.value);
	if(skills[41].SW === 1)skills[41].add = parseInt(document.getElementById('InFc_skill_point').SK41point.value);
	if(skills[42].SW === 1)skills[42].add = parseInt(document.getElementById('InFc_skill_point').SK42point.value);
	if(skills[43].SW === 1)skills[43].add = parseInt(document.getElementById('InFc_skill_point').SK43point.value);
	if(skills[44].SW === 1)skills[44].add = parseInt(document.getElementById('InFc_skill_point').SK44point.value);
	if(skills[45].SW === 1)skills[45].add = parseInt(document.getElementById('InFc_skill_point').SK45point.value);
	if(skills[46].SW === 1)skills[46].add = parseInt(document.getElementById('InFc_skill_point').SK46point.value);
	if(skills[47].SW === 1)skills[47].add = parseInt(document.getElementById('InFc_skill_point').SK47point.value);
	if(skills[48].SW === 1)skills[48].add = parseInt(document.getElementById('InFc_skill_point').SK48point.value);
	if(skills[49].SW === 1)skills[49].add = parseInt(document.getElementById('InFc_skill_point').SK49point.value);
	if(skills[50].SW === 1)skills[50].add = parseInt(document.getElementById('InFc_skill_point').SK50point.value);
	if(skills[51].SW === 1)skills[51].add = parseInt(document.getElementById('InFc_skill_point').SK51point.value);
	if(skills[52].SW === 1)skills[52].add = parseInt(document.getElementById('InFc_skill_point').SK52point.value);
	if(skills[53].SW === 1)skills[53].add = parseInt(document.getElementById('InFc_skill_point').SK53point.value);
	if(skills[54].SW === 1)skills[54].add = parseInt(document.getElementById('InFc_skill_point').SK54point.value);
	if(skills[55].SW === 1)skills[55].add = parseInt(document.getElementById('InFc_skill_point').SK55point.value);
	if(skills[56].SW === 1)skills[56].add = parseInt(document.getElementById('InFc_skill_point').SK56point.value);
	if(skills[57].SW === 1)skills[57].add = parseInt(document.getElementById('InFc_skill_point').SK57point.value);
	if(skills[58].SW === 1)skills[58].add = parseInt(document.getElementById('InFc_skill_point').SK58point.value);
	if(skills[59].SW === 1)skills[59].add = parseInt(document.getElementById('InFc_skill_point').SK59point.value);
	if(skills[60].SW === 1)skills[60].add = parseInt(document.getElementById('InFc_skill_point').SK60point.value);
	if(skills[61].SW === 1)skills[61].add = parseInt(document.getElementById('InFc_skill_point').SK61point.value);
	if(skills[62].SW === 1)skills[62].add = parseInt(document.getElementById('InFc_skill_point').SK62point.value);
	if(skills[63].SW === 1)skills[63].add = parseInt(document.getElementById('InFc_skill_point').SK63point.value);
	if(skills[64].SW === 1)skills[64].add = parseInt(document.getElementById('InFc_skill_point').SK64point.value);
	if(skills[65].SW === 1)skills[65].add = parseInt(document.getElementById('InFc_skill_point').SK65point.value);
	if(skills[66].SW === 1)skills[66].add = parseInt(document.getElementById('InFc_skill_point').SK66point.value);
	if(skills[67].SW === 1)skills[67].add = parseInt(document.getElementById('InFc_skill_point').SK67point.value);
	if(skills[68].SW === 1)skills[68].add = parseInt(document.getElementById('InFc_skill_point').SK68point.value);
	if(skills[69].SW === 1)skills[69].add = parseInt(document.getElementById('InFc_skill_point').SK69point.value);
	if(skills[70].SW === 1)skills[70].add = parseInt(document.getElementById('InFc_skill_point').SK70point.value);
	if(skills[71].SW === 1)skills[71].add = parseInt(document.getElementById('InFc_skill_point').SK71point.value);
	if(skills[72].SW === 1)skills[72].add = parseInt(document.getElementById('InFc_skill_point').SK72point.value);
	if(skills[73].SW === 1)skills[73].add = parseInt(document.getElementById('InFc_skill_point').SK73point.value);
	if(skills[74].SW === 1)skills[74].add = parseInt(document.getElementById('InFc_skill_point').SK74point.value);
	if(skills[75].SW === 1)skills[75].add = parseInt(document.getElementById('InFc_skill_point').SK75point.value);
	if(skills[76].SW === 1)skills[76].add = parseInt(document.getElementById('InFc_skill_point').SK76point.value);
	if(skills[77].SW === 1)skills[77].add = parseInt(document.getElementById('InFc_skill_point').SK77point.value);
	if(skills[78].SW === 1)skills[78].add = parseInt(document.getElementById('InFc_skill_point').SK78point.value);
	if(skills[79].SW === 1)skills[79].add = parseInt(document.getElementById('InFc_skill_point').SK79point.value);
	if(skills[80].SW === 1)skills[80].add = parseInt(document.getElementById('InFc_skill_point').SK80point.value);
	if(skills[81].SW === 1)skills[81].add = parseInt(document.getElementById('InFc_skill_point').SK81point.value);
	if(skills[82].SW === 1)skills[82].add = parseInt(document.getElementById('InFc_skill_point').SK82point.value);
	if(skills[83].SW === 1)skills[83].add = parseInt(document.getElementById('InFc_skill_point').SK83point.value);
	if(skills[84].SW === 1)skills[84].add = parseInt(document.getElementById('InFc_skill_point').SK84point.value);
	if(skills[85].SW === 1)skills[85].add = parseInt(document.getElementById('InFc_skill_point').SK85point.value);
	if(skills[86].SW === 1)skills[86].add = parseInt(document.getElementById('InFc_skill_point').SK86point.value);
	if(skills[87].SW === 1)skills[87].add = parseInt(document.getElementById('InFc_skill_point').SK87point.value);
	if(skills[88].SW === 1)skills[88].add = parseInt(document.getElementById('InFc_skill_point').SK88point.value);
	if(skills[89].SW === 1)skills[89].add = parseInt(document.getElementById('InFc_skill_point').SK89point.value);
	if(skills[90].SW === 1)skills[90].add = parseInt(document.getElementById('InFc_skill_point').SK90point.value);
	if(skills[91].SW === 1)skills[91].add = parseInt(document.getElementById('InFc_skill_point').SK91point.value);
	if(skills[92].SW === 1)skills[92].add = parseInt(document.getElementById('InFc_skill_point').SK92point.value);
	if(skills[93].SW === 1)skills[93].add = parseInt(document.getElementById('InFc_skill_point').SK93point.value);
	if(skills[94].SW === 1)skills[94].add = parseInt(document.getElementById('InFc_skill_point').SK94point.value);
	if(skills[95].SW === 1)skills[95].add = parseInt(document.getElementById('InFc_skill_point').SK95point.value);
	if(skills[96].SW === 1)skills[96].add = parseInt(document.getElementById('InFc_skill_point').SK96point.value);
	if(skills[97].SW === 1)skills[97].add = parseInt(document.getElementById('InFc_skill_point').SK97point.value);
	if(skills[98].SW === 1)skills[98].add = parseInt(document.getElementById('InFc_skill_point').SK98point.value);
	if(skills[99].SW === 1)skills[99].add = parseInt(document.getElementById('InFc_skill_point').SK99point.value);



	InFc_skill_point("form_skill_point");
	OpCt("MainSqreen");
}

// ----- フォームの出力 -----
var InFc_skill_point = function(id){
	var SumPoint = 0;
	var text;
	text = '<form action="#" id="InFc_skill_point"><p>';
	text = text + "職業技能ポイント : " + (character.EDU*20) + '<br>';
	text = text + "興味技能ポイント : " + (character.INT*10) + '<br>';
	text = text + "分配済ポイント : " + SumPoint + '<br>';
	text = text + "未分配ポイント : " + (character.EDU*20 + character.INT*10 - SumPoint) + '<br><br>';
	for(var i=0; i<100; i++){
		if(skills[i].SW === 1){
			text = text + skills[i].name + '<input type="text" name="SK' + i + 'point" size=1 value=' + skills[i].add + '><br>';
			SumPoint = SumPoint + skills[i].add;
		}
	}
	text = text + '<button type="button" onClick="InFc_skill_point_f();">技能値更新</button>';
	text = text + '</p></form>';
	document.getElementById(id).innerHTML = text;
}
