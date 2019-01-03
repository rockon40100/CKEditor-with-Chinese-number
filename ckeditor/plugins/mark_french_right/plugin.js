$(function(){
        //Section 1 : 按鈕功能
        var action_french_right= {
                exec:function(editor){
                        editor.insertText( '》' );     
                }
        } ;
        //Section 2 : 建立按鈕
        name_french_right='NewButton_french_right';
        CKEDITOR.plugins.add('mark_french_right',{
                init:function(editor){
                        editor.addCommand(name_french_right,action_french_right);
                        editor.ui.addButton('mark_french_right',{
                                label:'french_right',
                                icon: this.path + 'french_right.png',
                                command:name_french_right,
                                toolbar: 'mark,21'
                        });
                }        
        });
        
});