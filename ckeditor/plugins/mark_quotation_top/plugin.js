$(function(){
        //Section 1 : 按鈕功能
        var action_quotation_top= {
                exec:function(editor){
                        editor.insertText( '「' );
                }
        } ;
        //Section 2 : 建立按鈕
        name_quotation_top='NewButton_quotation_top';
        CKEDITOR.plugins.add('mark_quotation_top',{
                init:function(editor){
                        editor.addCommand(name_quotation_top,action_quotation_top);
                        editor.ui.addButton('mark_quotation_top',{
                                label:'quotation_top',
                                icon: this.path + 'quotation_top.png',
                                command:name_quotation_top,
                                toolbar: 'mark,22'
                        });
                }        
        });
        
});