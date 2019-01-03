$(function(){
        //Section 1 : 按鈕功能
        var action_parentheses_left= {
                exec:function(editor){
                        editor.insertText( '（' );
                        
                }
        } ;
        //Section 2 : 建立按鈕
        name_parentheses_left='NewButton_parentheses_left';
        CKEDITOR.plugins.add('mark_parentheses_left',{
                init:function(editor){
                        editor.addCommand(name_parentheses_left,action_parentheses_left);
                        editor.ui.addButton('mark_parentheses_left',{
                                label:'parentheses_left',
                                icon: this.path + 'parentheses_left.png',
                                command:name_parentheses_left,
                                toolbar: 'mark,12'
                        });
                }        
        });
        
});