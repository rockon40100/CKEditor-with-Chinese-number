$(function(){
        //Section 1 : 按鈕功能
        var action_doublequotation_top= {
                exec:function(editor){
                        editor.insertText( '『' ); 
                }
        } ;
        //Section 2 : 建立按鈕
        name_doublequotation_top='NewButton_doublequotation_top';
        CKEDITOR.plugins.add('mark_doublequotation_top',{
                init:function(editor){
                        editor.addCommand(name_doublequotation_top,action_doublequotation_top);
                        editor.ui.addButton('mark_doublequotation_top',{
                                label:'doublequotation_top',
                                icon: this.path + 'doublequotation_top.png',
                                command:name_doublequotation_top,
                                toolbar: 'mark,24'
                        });
                }        
        });
        
});