/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

 CKEDITOR.editorConfig = function( config ) {
  
  //加入的plugin
  var ol_1 = 'ol_1_1,ol_1_2,ol_1_3,ol_1_4,ol_1_5,ol_1_6,ol_1_7,ol_1_8,ol_1_9,';
  var ol_2 = 'ol_2_1,ol_2_2,ol_2_3,ol_2_4,ol_2_5,ol_2_6,ol_2_7,ol_2_8,ol_2_9,';
  var ol_3 = 'ol_3_1,ol_3_2,ol_3_3,ol_3_4,ol_3_5,ol_3_6,ol_3_7,ol_3_8,ol_3_9,';
  var ol_4 = 'ol_4_1,ol_4_2,ol_4_3,ol_4_4,ol_4_5,ol_4_6,ol_4_7,ol_4_8,ol_4_9,';
  var ol_5 = 'ol_5_1,ol_5_2,ol_5_3,ol_5_4,ol_5_5,ol_5_6,ol_5_7,ol_5_8,ol_5_9,ol_5_10,';
  var ol_6 = 'ol_6_1,ol_6_2,ol_6_3,ol_6_4,ol_6_5,ol_6_6,ol_6_7,ol_6_8,ol_6_9,ol_6_10,';
  var ol_7 = 'ol_7_1,ol_7_2,ol_7_3,ol_7_4,ol_7_5,ol_7_6,ol_7_7,ol_7_8,ol_7_9,ol_7_10,ol_7_11,ol_7_12,';
  var ol_8 = 'ol_8_1,ol_8_2,ol_8_3,ol_8_4,ol_8_5,ol_8_6,ol_8_7,ol_8_8,ol_8_9,ol_8_10,ol_8_11,ol_8_12,';
  var capital_cnnum = 'capital_cnnum_1,capital_cnnum_2,capital_cnnum_3,capital_cnnum_4,capital_cnnum_5,capital_cnnum_6,capital_cnnum_7,capital_cnnum_8,capital_cnnum_9,capital_cnnum_10,';
  var mark = 'mark_colon,mark_comma,mark_period,mark_dash,mark_semicolon,mark_quotation_top,mark_quotation_bottom,mark_doublequotation_top,mark_doublequotation_bottom,mark_parentheses_left,mark_parentheses_right,mark_endoublequotation,mark_enquotation,mark_angle_left,mark_angle_right,mark_braces_left,mark_braces_right,mark_brackets_left,mark_brackets_right,mark_dayton,mark_french_left,mark_french_right,mark_exclamation,mark_question,mark_dot,';
  var nestnum = 'nestnum';
  //加入plugin
  config.extraPlugins=ol_1+ol_2+ol_3+ol_4+ol_5+ol_6+ol_7+ol_8+mark+capital_cnnum+nestnum;
  
  config.toolbarGroups = [
    { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent' ] },
    { name: 'others', groups: [ 'others' ] },
    '/',
    { name: 'mark', groups: [ mark ] }
	];

  //要移除的按鍵
  var del = 'Form,Checkbox,Radio,TextField,Select,Textarea,Button,ImageButton,HiddenField,Flash,Image,CreateDiv,Templates,Smiley,Iframe,ShowBlocks,Maximize,BulletedList,PasteFromWord,Italic,Subscript,Superscript,Strike,';

  //只留plugin選單，所以將plugin按鍵也移除
  config.removeButtons =  del+ol_1+ol_2+ol_3+ol_4+ol_5+ol_6+ol_7+ol_8+capital_cnnum;
  config.pasteFromWordRemoveFontStyles = false;
  config.pasteFromWordRemoveStyles = false;
	//config.skin = 'moono-dark';
  config.height = 350;
  config.removePlugins = 'contextmenu,liststyle,tabletools';
	//config.enterMode = CKEDITOR.ENTER_BR;config.shiftEnterMode = CKEDITOR.ENTER_P;
  //config.tabSpaces = 12;
  };

  CKEDITOR.on( 'instanceReady', function( ev ){
   with (ev.editor.dataProcessor.writer) {
     setRules("p",  {indent : false, breakBeforeOpen : false, breakAfterOpen : false, breakBeforeClose : false, breakAfterClose : false} );
     setRules("h1", {indent : false, breakBeforeOpen : false, breakAfterOpen : false, breakBeforeClose : false, breakAfterClose : false} );
     setRules("h2", {indent : false, breakBeforeOpen : false, breakAfterOpen : false, breakBeforeClose : false, breakAfterClose : false} );
     setRules("h3", {indent : false, breakBeforeOpen : false, breakAfterOpen : false, breakBeforeClose : false, breakAfterClose : false} );
     setRules("h4", {indent : false, breakBeforeOpen : false, breakAfterOpen : false, breakBeforeClose : false, breakAfterClose : false} );
     setRules("h5", {indent : false, breakBeforeOpen : false, breakAfterOpen : false, breakBeforeClose : false, breakAfterClose : false} );
     setRules("div", {indent : false, breakBeforeOpen : false, breakAfterOpen : false, breakBeforeClose : false, breakAfterClose : false} );
     setRules("table", {indent : false, breakBeforeOpen : false, breakAfterOpen : false, breakBeforeClose : false, breakAfterClose : false} );
     setRules("tr", {indent : false, breakBeforeOpen : false, breakAfterOpen : false, breakBeforeClose : false, breakAfterClose : false} );
     setRules("td", {indent : false, breakBeforeOpen : false, breakAfterOpen : false, breakBeforeClose : false, breakAfterClose : false} );
     setRules("iframe", {indent : false, breakBeforeOpen : false, breakAfterOpen : false, breakBeforeClose : false, breakAfterClose : false} );
     setRules("li", {indent : false, breakBeforeOpen : false, breakAfterOpen : false, breakBeforeClose : false, breakAfterClose : false} );
     setRules("ul", {indent : false, breakBeforeOpen : false, breakAfterOpen : false, breakBeforeClose : false, breakAfterClose : false} );
     setRules("ol", {indent : false, breakBeforeOpen : false, breakAfterOpen : false, breakBeforeClose : false, breakAfterClose : false} );
   }
 });

