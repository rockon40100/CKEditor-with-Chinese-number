$(function(){
        //Section 1 : 按鈕功能
        var action_doublequotation_bottom= {
                exec:function(editor){
                        editor.insertText( '』' );  
                }
        } ;
        //Section 2 : 建立按鈕
        name_doublequotation_bottom='NewButton_doublequotation_bottom';
        CKEDITOR.plugins.add('mark_doublequotation_bottom',{
                init:function(editor){
                        editor.addCommand(name_doublequotation_bottom,action_doublequotation_bottom);
                        editor.ui.addButton('mark_doublequotation_bottom',{
                                label:'doublequotation_bottom',
                                icon: this.path + 'doublequotation_bottom.png',
                                command:name_doublequotation_bottom,
                                toolbar: 'mark,25'
                        });
                }        
        });
        
});