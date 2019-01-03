$(function(){
        //Section 1 : 按鈕功能
        var action_quotation_bottom= {
                exec:function(editor){
                        editor.insertText( '」' );       
                }
        } ;
        //Section 2 : 建立按鈕
        name_quotation_bottom='NewButton_quotation_bottom';
        CKEDITOR.plugins.add('mark_quotation_bottom',{
                init:function(editor){
                        editor.addCommand(name_quotation_bottom,action_quotation_bottom);
                        editor.ui.addButton('mark_quotation_bottom',{
                                label:'quotation_bottom',
                                icon: this.path + 'quotation_bottom.png',
                                command:name_quotation_bottom,
                                toolbar: 'mark,23'
                        });
                }        
        });
        
});