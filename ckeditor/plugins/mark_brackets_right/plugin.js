$(function(){
        //Section 1 : 按鈕功能
        var action_brackets_right= {
                exec:function(editor){
                        editor.insertText( '〕' );     
                }
        } ;
        //Section 2 : 建立按鈕
        name_brackets_right='NewButton_brackets_right';
        CKEDITOR.plugins.add('mark_brackets_right',{
                init:function(editor){
                        editor.addCommand(name_brackets_right,action_brackets_right);
                        editor.ui.addButton('mark_brackets_right',{
                                label:'brackets_right',
                                icon: this.path + 'brackets_right.png',
                                command:name_brackets_right,
                                toolbar: 'mark,15'
                        });
                }        
        });
        
});