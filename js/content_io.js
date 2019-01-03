/*
 * 傳入編輯器內容的標號處理
 *
 * 
 */
var editorid = [];
var txt = []

var getckcontent = function(){ 
	//編輯器ID陣列
	var ckeditorID = [];
	for(g=1;g<=$('#ckeditor_number').val();g++){
		ckeditorID[g-1] = "ckcontent"+g;
	}
	//每個編輯器執行一次標號處理
	for(h=0;h<ckeditorID.length;h++){
		var ckdata = CKEDITOR.instances[ckeditorID[h]].getData();
		//分割字串
		editorid[h] = ckeditorID[h];
		txt[h] = ckdata;	
		//轉碼
		if(txt.indexOf("&lt;")!= -1){
			txt = txt.replace(/&lt;/g,"<");
			txt = txt.replace(/&gt;/g,">");
			txt = txt.replace(/&quot;/g,"'");
		}
		change_content(h);
	}
};


var change_content = function(idnum){
	//第X個編輯器載入完後，將第X個編輯器的物件值改成和輸出一樣
	CKEDITOR.instances[editorid[idnum]].on('instanceReady', function(e){

		var editorcontent = $( CKEDITOR.instances[editorid[idnum]].window.getFrame().$ ).contents(); 
		var symsheetall = []; //第幾組OL的符號表//不能用全域
		var labsheetall = []; //第幾組OL的標號表//不能用全域
		var ckn = idnum; //第幾個編輯器
		var txtsplit = txt[idnum].split('"'); //用來取出class的字串切割
		var olstyle = []; //存放label和symbol
		var olnum = 0;
		var count = 0; //計數器
		var i = 0;
		var j = 0;
		
		//將切完的字串傳至編輯器
		editorcontent.find('body').html(txt[idnum]);
		for(i=0;i<txtsplit.length;i++){
			//找出有含label和symbol的項目
			if(txtsplit[i].indexOf("labelall") != -1){
				olstyle[count] = txtsplit[i].substring(txtsplit[i].indexOf("labelall"),txtsplit[i].indexOf("start")).split("+");
				count++;
			}
			//找出有含num的項目
			else if(txtsplit[i].indexOf("num") != -1){
				olstyle[count] = txtsplit[i].substring(txtsplit[i].indexOf("num"),txtsplit[i].indexOf("start")).split("+");
				count++;
			}
			//若不含則設為0
			else if(txtsplit[i].indexOf("start") != -1){
				olstyle[count] = 0;
				count++;
			}
		}
		//取得第一層ol個數
		if(olnum < editorcontent.find('.cke_editable > ol').length){
			olnum = editorcontent.find('.cke_editable > ol').length;
		}

		symsheet = [sym1,sym2,sym3,sym4,sym5,sym6,sym7,sym8]; //每一層OL的符號表(預設)
		labsheet = [lab1,lab2,lab3,lab4,lab5,lab6,lab7,lab8]; //每一層OL的標號表(預設)
		count = 0; //計數器歸零

		//將有自選標號的項目改為非預設標號
		for(oln=0;oln<olnum;oln++){
			for(j=0;j<=editorcontent.find('.cke_editable > ol:eq('+oln+')').find('ol').length;j++){ 
				if(olstyle[count] != 0){
					//如果olstyle[count][1]是空(針對1.處理)
					if(olstyle[count][1] == ' '){
						symsheet[j] = '';
						labsheet[j] = eval(olstyle[count][0]);
					}
					//如果eval(olstyle[count][1])有"."(針對巢狀數字符號處理)
					else if(olstyle[count][1].indexOf('.') == 1){
						symsheet[j] = olstyle[count][1];
						labsheet[j] = eval(olstyle[count][0]);
					}
					//如果eval(olstyle[count][1])是數字
					else if(!isNaN(eval(olstyle[count][1]))){
						symsheet[j] = olstyle[count][1];
						labsheet[j] = eval(olstyle[count][0]);
					}
					//其他
					else{
						symsheet[j] = eval(olstyle[count][1]);
						labsheet[j] = eval(olstyle[count][0]);
					}
				}
				count++;
			}

			//建立labsheetall、symsheetall
			symsheetall[oln] = symsheet;
			labsheetall[oln] = labsheet;
			cksymsheetall[ckn-1] = symsheetall;
			cklabsheetall[ckn-1] = labsheetall;
			//將建好的labsheetall、symsheetall傳入create_sheet
			create_sheet(oln,ckn,ckn,labsheetall,symsheetall);	
		}
		
		
	});
}

getckcontent();



