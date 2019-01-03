
/*  
 *  變數：
 *  array  cn           => 標號一、二、三
 *  array  cn2          => 標號甲、乙、丙
 *  array  cn3          => 標號子、丑、寅
 *  array  capital_cnnum=> 標號壹、貳、?
 *  array  num          => 甲乙丙/子丑寅大於10/12轉換用
 *  array  num2         => 甲乙丙/子丑寅大於10/12轉換用
 *  array  nestnum      => 空值，做為識別該項目符號為巢狀數字的標籤用
 *  array  labelall     => 標號陣列，將cn,cn2,cn3存為陣列
 *  array  symbol_1     => 頓號 
 *  array  symbol_2     => 括號 
 *  array  symbolall    => 符號陣列，將symbol_1,symbol_2存為陣列 
 *  int    count        => 計數器
 *  int    ckn          => 第X個編輯器
 *  int    nowck        => 現在的編輯器編號
 *  int    olnum        => 第一層的ol數
 *  int    cursorlv     => 輸入游標在哪一層
 *  char   hasclass     => 是否有class
 *  int    highest      => 第X個OL的最高層
 *  array  highestall   => 最高層陣列
 *  array  sym1~8       => 第一~八層的符號
 *  array  lab1~8       => 第一~八層的標號
 *  array  symsheet     => 第幾組OL的符號表
 *	array  symsheetall  => 第幾組OL的符號表陣列
 *  array  cksymsheetall=> 第幾個編輯器的符號表陣列
 *  array  labsheet     => 第幾組OL的標號表
 *  array  labsheetall	=> 第幾組OL的標號表陣列
 *  array  cklabsheetall=> 第幾個編輯器的標號表陣列
 */

//標號
var cn = ['\u4E00','\u4E8C','\u4E09','\u56DB','\u4E94','\u516D','\u4E03','\u516B','\u4E5D','\u5341','　']; //一二三
var cn2 = ['\u7532','\u4E59','\u4E19','\u4E01','\u620A','\u5DF1','\u5E9A','\u8F9B','\u58EC','\u7678',''];//甲乙丙
var cn3 = ['\u5b50','\u4e11','\u5bc5','\u536f','\u8fb0','\u5df3','\u5348','\u672a','\u7533','\u9149','\u620c','\u4ea5'];//子丑寅
var capital_cnnum = ['\u58f9','\u8cb3','\u53c2','\u8086','\u4f0d','\u9678','\u67d2','\u634c','\u7396','\u62fe','　'];//壹貳?
var num = [1,2,3,4,5,6,7,8,9,1,'']; //甲乙丙/子丑寅大於10/12轉換用
var num2 = [1,2,3,4,5,6,7,8,9,'','']; //甲乙丙/子丑寅大於10/12轉換用
var nestnum = []; //巢狀數字標籤
var labelall = [cn,cn2,cn3,capital_cnnum,nestnum]; //標號陣列

//符號
var symbol_1 = ['','\u3001']; //頓號
var symbol_2 = ['(',')']; //括號
var symbolall = [symbol_1,symbol_2]; //符號陣列

//計數
var count = 1; //計數器
var ckn = 1; //第X個編輯器
var nowck = 1; //現在的編輯器編號
var olnum = 0; //第一層ol個數
var cursorlv = 0; //輸入游標在哪一層
var hasclass = false; //是否有class
var highest = 1; //第X個OL的最高層
var highestall = []; //最高層陣列

/*  樣式表
 *  一個symsheet/labsheet裡面包含了1~8層ol的符號/標號
 *  一個symsheetall/labsheetall裡面包含1~多個的symsheet/labsheet
 *  一個cksymsheetall/cklabsheetall裡面包含1~多個的symsheetall/labsheetall
 */
var sym1 = symbolall[0];
var lab1 = labelall[0];
var sym2 = symbolall[1];
var lab2 = labelall[0];
var sym3 = symbolall[0];
var lab3 = num;
var sym4 = symbolall[1];
var lab4 = num;
var sym5 = symbolall[0];
var lab5 = labelall[1];
var sym6 = symbolall[1];
var lab6 = labelall[1];
var sym7 = symbolall[0];
var lab7 = labelall[2];
var sym8 = symbolall[1];
var lab8 = labelall[2];

var symsheet = [sym1,sym2,sym3,sym4,sym5,sym6,sym7,sym8]; //每一層OL的符號表
var symsheetall = []; //第幾組OL的符號表
var cksymsheetall = []; //第幾個編輯器的符號表陣列

var labsheet = [lab1,lab2,lab3,lab4,lab5,lab6,lab7,lab8]; //每一層OL的標號表
var labsheetall = []; //第幾組OL的標號表
var cklabsheetall = []; //第幾個編輯器的標號表陣列

/*
 * 建立標號表陣列(labsheetall)、符號表陣列(symsheetall)
 * 若切換編輯器時cklabsheetall、cksymsheetall沒有值，
   則清空標號表重新建立labsheetall、symsheetall，
   反之則直接套用cklabsheetall、cksymsheetall
 *
 * 輸入參數 :
 * @param int   num       => 第幾組OL
 * @param int   cknum     => 編輯器編號，從content_io.js執行時才會傳入
 * @param int   nowcknum  => 現在的編輯器編號，從content_io.js執行時才會傳入
 * @param array labss     => labsheetall，從content_io.js執行時才會傳入
 * @param array symss     => symsheetall，從content_io.js執行時才會傳入
 */

 var create_sheet = function(num,cknum,nowcknum,labss,symss){
 	labsheet = [lab1,lab2,lab3,lab4,lab5,lab6,lab7,lab8];
 	symsheet = [sym1,sym2,sym3,sym4,sym5,sym6,sym7,sym8];
	//如果cknum!=undefined則將ckn,nowck,labsheetall,symsheetall設定為傳入的參數值
	//反之則為預設值
	if(cknum != undefined){
		ckn = cknum;
		nowck = nowcknum;
		labsheetall = labss;
		symsheetall = symss;
	}
	else{
		cknum = ckn;
		nowcknum = nowck;
	} 
	//若現在的編輯器編號不等於ckn時，labsheetall、symsheetall帶入對應的cklabsheetall、cksymsheetall
	//若cklabsheetall、cksymsheetall沒有值則清空標號表
 	if(nowck != ckn){
 		if(cklabsheetall[ckn-1] != undefined){
 			labsheetall = cklabsheetall[ckn-1];
 			symsheetall = cksymsheetall[ckn-1];
 		}
 		else{
 			labsheetall = [];
 			symsheetall = [];
 		}
 		nowck = ckn;
 	}
 	//重新建立labsheetall、symsheetall
 	if(labsheetall[num] == undefined || cklabsheetall[ckn-1] == undefined){
 		labsheetall[num] = labsheet;
 		symsheetall[num] = symsheet;
 	}
 	cklabsheetall[ckn-1] = labsheetall;
 	cksymsheetall[ckn-1] = symsheetall;
 }

/*
 * 呼叫改變標號函數(setol)，改變各層標號
 *
 * 輸入參數 :
 * @param object  editornum   => 編輯器編號(第幾個編輯器)，內容等於CKEDITOR.instances['ID']
 * @param array   sym         => 符號陣列，使用自選標號時才會傳入
 * @param array   lab         => 標號陣列，使用自選標號時才會傳入
 */
 var changecnnum = function(editornum,sym,lab){ 
 	setTimeout(function(){
 		editorcontent = $( editornum.window.getFrame().$ ).contents();
 		editorcontent.find('li').each(function(){
 			var content = $(this).html();
 			if($(this).html().substring(0,4) == '<br>'){
 				content = content.substring(4);
 				$(this).html(content);
 			}
 		})
		//取得第一層ol個數
		if(olnum < editorcontent.find('.cke_editable > ol').length){
			olnum = editorcontent.find('.cke_editable > ol').length; 	
		}
		cursorlv = $('#cke_'+ckn+'_path .cke_path_item[title*="ol"]').length;
		//讓第一層的每個ol都個別執行setol
		for(oln=0;oln<olnum;oln++){
			create_sheet(oln);
			
			if(highestall[oln] == undefined){
				highestall[oln] = cursorlv;
			}
			else if(cursorlv > highestall[oln]){
				highestall[oln] = $('#cke_'+ckn+'_path .cke_path_item[title*="ol"]').length;
			}
			//按自訂按鍵
			if(sym != undefined){
				//在最高層時
				if(editorcontent.find('.add').next().html() == "<br>" && cursorlv != 1){
					editorcontent.find('.add').next().remove('p');
					cursorlv = $('#cke_'+ckn+'_path .cke_path_item[title*="ol"]').length + 1;
					highestall[oln] = $('#cke_'+ckn+'_path .cke_path_item[title*="ol"]').length + 1;
				}
				else{
					cursorlv = $('#cke_'+ckn+'_path .cke_path_item[title*="ol"]').length;
				}
				if(cursorlv>=1){
					cursorlv = cursorlv -1;
				}
			}
			hasclass = editorcontent.find('.cke_editable > ol:eq('+oln+')').hasClass('add');
			//如果新增的ol有class表示為按鍵新增的，並更改樣式
			if(hasclass != false || editorcontent.find('.cke_editable > ol:eq('+oln+') ol').hasClass('add')){
				symsheetall[oln][cursorlv] = sym;
				labsheetall[oln][cursorlv] = lab;
				
			}

			//刷新該階層及前後二階的標號 EX:第三層刷新同時也會刷新第一二層和第四五層
			switch(cursorlv){
				case 1: 
				if(editorcontent.find('.cke_editable > ol:eq('+oln+')').hasClass('add') == true){
					symsheetall[oln][0] = sym;
					labsheetall[oln][0] = lab;
				}
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+')'),symsheetall[oln][0],labsheetall[oln][0]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol '),symsheetall[oln][1],labsheetall[oln][1]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol'),symsheetall[oln][2],labsheetall[oln][2]);
				break;
				case 2: 
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+')'),symsheetall[oln][0],labsheetall[oln][0]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol'),symsheetall[oln][1],labsheetall[oln][1]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol'),symsheetall[oln][2],labsheetall[oln][2]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol'),symsheetall[oln][3],labsheetall[oln][3]);
				break;
				case 3: 
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+')'),symsheetall[oln][0],labsheetall[oln][0]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol'),symsheetall[oln][1],labsheetall[oln][1]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol'),symsheetall[oln][2],labsheetall[oln][2]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol'),symsheetall[oln][3],labsheetall[oln][3]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][4],labsheetall[oln][4]);
				break;
				case 4: 
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol'),symsheetall[oln][1],labsheetall[oln][1]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol'),symsheetall[oln][2],labsheetall[oln][2]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol'),symsheetall[oln][3],labsheetall[oln][3]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][4],labsheetall[oln][4]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][5],labsheetall[oln][5]);
				break;
				case 5:
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol'),symsheetall[oln][2],labsheetall[oln][2]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol'),symsheetall[oln][3],labsheetall[oln][3]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][4],labsheetall[oln][4]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][5],labsheetall[oln][5]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][6],labsheetall[oln][6]);
				break;
				case 6:
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol'),symsheetall[oln][3],labsheetall[oln][3]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][4],labsheetall[oln][4]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][5],labsheetall[oln][5]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][6],labsheetall[oln][6]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][7],labsheetall[oln][7]);
				break;
				case 7:
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][4],labsheetall[oln][4]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][5],labsheetall[oln][5]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][6],labsheetall[oln][6]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][7],labsheetall[oln][7]);
				break;
				case 8:
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][5],labsheetall[oln][5]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][6],labsheetall[oln][6]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol > li > ol > li > ol > li > ol > li > ol > li > ol'),symsheetall[oln][7],labsheetall[oln][7]);
				break;					
				default :
				if(editorcontent.find('.cke_editable > ol:eq('+oln+')').hasClass('add') == true){
					symsheetall[oln][0] = sym;
					labsheetall[oln][0] = lab;
				}

				setol(editorcontent.find('.cke_editable > ol:eq('+oln+')'),symsheetall[oln][0],labsheetall[oln][0]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol '),symsheetall[oln][1],labsheetall[oln][1]);
				setol(editorcontent.find('.cke_editable > ol:eq('+oln+') > li > ol > li > ol'),symsheetall[oln][2],labsheetall[oln][2]);
				break;
			};
		}
		//移除class add
		editorcontent.find('.add').removeClass('add');
	},10);
}

setTimeout(function(){

	/*
	 * 點擊「插入/移除清單鍵」、「增加縮排鍵」、「減少縮排鍵」時觸發changecnnum()
	 *
	 * 輸入參數 :
	 * @param object  editornum   => 編輯器編號(第幾個編輯器)
	 * 
	 */

	 var clickevent = function(editornum){
		//點擊插入/移除清單鍵
		$('.cke_button__numberedlist').unbind('click').bind('click',function(){
			changecnnum(editornum);
		});
		//點擊增加縮排鍵
		$('.cke_button__indent').unbind('click').bind('click',function(){
			changecnnum(editornum);
		});
		//點擊增減少縮排鍵
		$('.cke_button__outdent').unbind('click').bind('click',function(){
			changecnnum(editornum);
		});
	};

	/*
	 * 依據編輯器數量給各編輯器按鍵事件及點擊事件
	 *
	 */
	 for(i=0;i<ckeditorID.length;i++){
 		/*
		 * 按鍵事件，按任意鍵觸發changecnnum()。
		 *
		 */

		var ID = ckeditorID[i];
	 	CKEDITOR.instances[ID].on('key', function (e) {
	 		var editornum = this;
	 		ckn = editornum.id.substring(4);
	 		changecnnum(this);
	 	});

		/*
		 * 載入事件，js載入完成時呼叫編輯器點擊事件，當點擊到編輯器時呼叫clickevent()，同時改變ckn值。
		 * 
		 */

	 	CKEDITOR.instances[ID].on('instanceReady', function(e){
	 		var editornum = this;
	 		$( this.window.getFrame().$ ).contents().on('mousedown', function (event) {
	 			clickevent(editornum);
	 			ckn = editornum.id.substring(4);
	 		});
	 		$( '#cke_ckcontent'+editornum.id.substring(4)+'').on('mousedown', function (event) {
	 			clickevent(editornum);
	 		});

	 	});
	 }

},20);

/*
 * 設定標號，將li的data-content屬性改成標號。
 *
 * @param object  e      => 第幾層ol
 * @param array   symbol => 標號要用哪個符號，若label是nestnum則symbol是前幾階的數字，EX:2.3.1，symbol就是2.3.(取到點)
 * @param array   label  => 要用哪個標號
 */
 var setol = function(e,symbol,label){
	//每一層ol
	$(e).each(function(){
		count = 1;
		var a = 0; //個
		var b = 0; //十	

		var start = $(this).attr('class'); //取得class
		//透過切class字串取得起始編號
		if( start != undefined  && start.substring(start.indexOf("start")+5,start.indexOf("start")+7) <= 10){
			count = start.substring(start.indexOf("start")+5,start.indexOf("start")+7);
			var a = start.substring(start.indexOf("start")+5,start.indexOf("start")+7) - 1; //個
		}
		else if(start != undefined && start.substring(start.indexOf("start")+5,start.indexOf("start")+7) >= 10){
			count = start.substring(start.indexOf("start")+5,start.indexOf("start")+7);
			var a = start.substring(start.indexOf("start")+6,start.indexOf("start")+7) - 1; //個
		}
		else if(start == undefined){
			$(this).attr('class','start1');
		}
		
		$(this).children().each(function(){
			switch(label){
				//標號是數字
				case num:
					$(this).attr('data-content',''+symbol[0]+parseInt(count)+symbol[1]+'');
					break;
				//標號是巢狀列，這裡的symbol是1.1.1的1.1.，EX:2.3.1，symbol就是2.3.
				case nestnum:
					$(this).attr('data-content',''+symbol+parseInt(count)+'');
					break;
				//其他標號
				default :
					//標號小於10時
					if ( 10 >= count ){
						//改變data-content屬性
						$(this).attr('data-content',''+symbol[0]+label[a]+symbol[1]+'');
						a++;
					}
					//標號小於100時
					else if ( 100 > count ){
						if ( 9 <= a ){
							a=0;
						}
						//標號為10的倍數時
						if ( 0 == count%10 ){
							//如果是甲乙丙，大於10時會轉為數字
							if(label==num || label==num2){
								num2[9] = 0;
								label = num2;
							}
							$(this).attr('data-content',''+symbol[0]+label[count/10-1]+label[9]+symbol[1]+'');
							b++;
						}
						//標號小於20時
						else if ( 20 > count ){
							if(label==cn2){
								label = num;
							}
							//如果是子丑寅，大於12時會轉為數字
							if(label==cn3){
								if(12 >= count){
									$(this).attr('data-content',''+symbol[0]+label[count-1]+symbol[1]+'');
								}
								else{
									label = num;
									$(this).attr('data-content',''+symbol[0]+label[9]+label[a]+symbol[1]+'');
								}
							}
							//其他
							else{
								$(this).attr('data-content',''+symbol[0]+label[9]+label[a]+symbol[1]+'');
							}
							a++;
						}
						//標號大於20時
						else if ( 20 <= count ){
							if(label==num2){
								num2[9] = '';
								label = num2;
							}
							$(this).attr('data-content',''+symbol[0]+label[b]+label[9]+label[a]+symbol[1]+'');
							a++;
						}
					}
					break;		
				}
				count++;
			});
	});

};