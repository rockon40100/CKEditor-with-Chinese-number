/*  
 *  變數：
 *
 *  object  moreButtons_1~8 => 1~8選單的項目
 *	object  moreItems_1~8   => 1~8選單的項目內容
 *	object  moreButtons_9   => 國字大寫數字選單內容
 *  array   moreButtonsAll  => 按鍵陣列，存放moreButtons_X的陣列
 *  array   moreItemsAll    => 存放moreItems_X的陣列
 *  array   icon            => 存放選單的顯示icon
 *  array   ckeditorID      => 存放textarea ID，也就是編輯器ID
 */

var moreButtons_1 = {
    NewButton_1_1:'一、',
    NewButton_1_2:'二、',
    NewButton_1_3:'三、',
    NewButton_1_4:'四、',
    NewButton_1_5:'五、',
    NewButton_1_6:'六、',
    NewButton_1_7:'七、',
    NewButton_1_8:'八、',
    NewButton_1_9:'九、'
}, moreItems_1 = {};
var moreButtons_2 = {
    NewButton_2_1:'(一)',
    NewButton_2_2:'(二)',
    NewButton_2_3:'(三)',
    NewButton_2_4:'(四)',
    NewButton_2_5:'(五)',
    NewButton_2_6:'(六)',
    NewButton_2_7:'(七)',
    NewButton_2_8:'(八)',
    NewButton_2_9:'(九)'
}, moreItems_2 = {};
var moreButtons_3 = {
    NewButton_3_1:'1、',
    NewButton_3_2:'2、',
    NewButton_3_3:'3、',
    NewButton_3_4:'4、',
    NewButton_3_5:'5、',
    NewButton_3_6:'6、',
    NewButton_3_7:'7、',
    NewButton_3_8:'8、',
    NewButton_3_9:'9、'
}, moreItems_3 = {};
var moreButtons_4 = {
    NewButton_4_1:'(1)',
    NewButton_4_2:'(2)',
    NewButton_4_3:'(3)',
    NewButton_4_4:'(4)',
    NewButton_4_5:'(5)',
    NewButton_4_6:'(6)',
    NewButton_4_7:'(7)',
    NewButton_4_8:'(8)',
    NewButton_4_9:'(9)'
}, moreItems_4 = {};
var moreButtons_5 = {
    NewButton_5_1:'甲、',
    NewButton_5_2:'乙、',
    NewButton_5_3:'丙、',
    NewButton_5_4:'丁、',
    NewButton_5_5:'戊、',
    NewButton_5_6:'己、',
    NewButton_5_7:'庚、',
    NewButton_5_8:'辛、',
    NewButton_5_9:'壬、',
    NewButton_5_10:'癸、'
}, moreItems_5 = {};
var moreButtons_6 = {
    NewButton_6_1:'(甲)',
    NewButton_6_2:'(乙)',
    NewButton_6_3:'(丙)',
    NewButton_6_4:'(丁)',
    NewButton_6_5:'(戊)',
    NewButton_6_6:'(己)',
    NewButton_6_7:'(庚)',
    NewButton_6_8:'(辛)',
    NewButton_6_9:'(壬)',
    NewButton_6_10:'(癸)',
}, moreItems_6 = {};
//因為在chrome上的順序會有奇怪的順序
if(!!window.ActiveXObject || "ActiveXObject" in window){
	var moreButtons_7 = {
		NewButton_7_1:'子、',
		NewButton_7_2:'丑、',
		NewButton_7_3:'寅、',
	    NewButton_7_4:'卯、',
	    NewButton_7_5:'辰、',
	    NewButton_7_6:'巳、',
	    NewButton_7_7:'午、',
	    NewButton_7_8:'未、',
	    NewButton_7_9:'申、',
	    NewButton_7_10:'酉、',
	    NewButton_7_11:'戌、',
		NewButton_7_12:'亥、'
	}, moreItems_7 = {};
	var moreButtons_8 = {
	    NewButton_8_1:'(子)',
	    NewButton_8_2:'(丑)',
	    NewButton_8_3:'(寅)',
	    NewButton_8_4:'(卯)',
	    NewButton_8_5:'(辰)',
	    NewButton_8_6:'(巳)',
	    NewButton_8_7:'(午)',
	    NewButton_8_8:'(未)',
	    NewButton_8_9:'(申)',
	    NewButton_8_10:'(酉)',
	    NewButton_8_11:'(戌)',
		NewButton_8_12:'(亥)'
	}, moreItems_8 = {};
}
else{
	var moreButtons_7 = {
		NewButton_7_2:'丑、',
	    NewButton_7_7:'午、',
	    NewButton_7_3:'寅、',
	    NewButton_7_4:'卯、',
	    NewButton_7_5:'辰、',
	    NewButton_7_6:'巳、',
	    NewButton_7_1:'子、',
	    NewButton_7_8:'未、',
	    NewButton_7_9:'申、',
	    NewButton_7_10:'酉、',
	    NewButton_7_11:'戌、',
		NewButton_7_12:'亥、'
	}, moreItems_7 = {};
	var moreButtons_8 = {
	    NewButton_8_2:'(丑)',
	    NewButton_8_7:'(午)',
	    NewButton_8_3:'(寅)',
	    NewButton_8_4:'(卯)',
	    NewButton_8_5:'(辰)',
	    NewButton_8_6:'(巳)',
	    NewButton_8_1:'(子)',
	    NewButton_8_8:'(未)',
	    NewButton_8_9:'(申)',
	    NewButton_8_10:'(酉)',
	    NewButton_8_11:'(戌)',
		NewButton_8_12:'(亥)'
	}, moreItems_8 = {};	
}
var moreButtons_9 = {
    NewButton_capital_cnnum_1:'壹、',
    NewButton_capital_cnnum_2:'貳、',
    NewButton_capital_cnnum_3:'?、',
    NewButton_capital_cnnum_4:'肆、',
    NewButton_capital_cnnum_5:'伍、',
    NewButton_capital_cnnum_6:'陸、',
    NewButton_capital_cnnum_7:'柒、',
    NewButton_capital_cnnum_8:'捌、',
    NewButton_capital_cnnum_9:'玖、',
    NewButton_capital_cnnum_10:'拾、'
}, moreItems_9 = {};
//按鍵陣列
var moreButtonsAll = [moreButtons_1,moreButtons_2,moreButtons_3,moreButtons_4,moreButtons_5,moreButtons_6,moreButtons_7,moreButtons_8,moreButtons_9];
//item陣列
var moreItemsAll = [moreItems_1,moreItems_2,moreItems_3,moreItems_4,moreItems_5,moreItems_6,moreItems_7,moreItems_8,moreItems_9];
//icon陣列
var icon = ['plugins/ol_1_1/一、.ico','plugins/ol_2_1/(一).ico','plugins/ol_3_1/1、.ico','plugins/ol_4_1/(1).ico','plugins/ol_5_1/甲、.ico','plugins/ol_6_1/(甲).ico','plugins/ol_7_1/子、.ico','plugins/ol_8_1/(子).ico','plugins/capital_cnnum_1/壹、.png']
//ID陣列
var ckeditorID = [];
for(g=1;g<=$('#ckeditor_number').val();g++){
	ckeditorID[g-1] = "ckcontent"+g;
}

//CKEDITOR.replace('textarea的ID',function(){}) => 將textarea取代成編輯器

/*
 * 將textarea取代成編輯器，同時建立選單
 * 
 */

//編輯器
for(h=0;h<ckeditorID.length;h++){
	var editor =CKEDITOR.replace(ckeditorID[h], {
	    on: {
	        pluginsLoaded: function () {
	            var editor = this,
	                config = CKEDITOR.config;
	            var more_Group = 'More_Group';
	            editor.addMenuGroup(more_Group);
	            /*
				 * 產生選單內容(label,name,icon,modes)
				 * 展開選單時產生選單選項
				 *
				 * 輸入參數 :
				 * @param int  num  => 第幾個選單
				 *
				 * 輸出值：
				 * object active => moreItemsAll的內容
				 */
				var menu = function(num){
				    editor.ui.add('More'+num, CKEDITOR.UI_MENUBUTTON, {
				    label: 'More'+num,
				    name: 'More'+num,
				    icon: icon[num],
				    modes: {
				        wysiwyg: 1
				    },
				        onMenu: function () {
				            var active = {};
				            for (var p in moreItemsAll[num]){
				            	active[p] = null;
				            }
				            return active;
				        }
				    });
				}            
	            for(var i in moreButtonsAll){	
		            for (var j in moreButtonsAll[i]) {
		                var v = moreButtonsAll[i][j];
		                moreItemsAll[i][j.toLowerCase()] = {
		                    label: v,
		                    group: more_Group,
		                    command: j,
		                    order: 1
		                };
		            }
		            editor.addMenuItems( moreItemsAll[i] );
		            menu(i);
				}
	            
	        }
	    }
	});	
}

