$(function(){
        //Section 1 : 按鈕功能
        var action_braces_right= {
                exec:function(editor){
			editor.insertText( '｝' );     
                }
        } ;
        //Section 2 : 建立按鈕
        name_braces_right='NewButton_braces_right';
        CKEDITOR.plugins.add('mark_braces_right',{
                init:function(editor){
                        editor.addCommand(name_braces_right,action_braces_right);
                        editor.ui.addButton('mark_braces_right',{
                                label:'braces_right',
                                icon: this.path + 'braces_right.png',
                                command:name_braces_right,
                                toolbar: 'mark,17'
                        });
                }        
        });
        
});