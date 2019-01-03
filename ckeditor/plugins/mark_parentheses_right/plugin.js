$(function(){
        //Section 1 : 按鈕功能
        var action_parentheses_right= {
                exec:function(editor){
                        editor.insertText( '）' );
                        
                }
        } ;
        //Section 2 : 建立按鈕
        name_parentheses_right='NewButton_parentheses_right';
        CKEDITOR.plugins.add('mark_parentheses_right',{
                init:function(editor){
                        editor.addCommand(name_parentheses_right,action_parentheses_right);
                        editor.ui.addButton('mark_parentheses_right',{
                                label:'parentheses_right',
                                icon: this.path + 'parentheses_right.png',
                                command:name_parentheses_right,
                                toolbar: 'mark,13'
                        });
                }        
        });
        
});