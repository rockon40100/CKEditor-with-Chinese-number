$(function(){
        //Section 1 : 按鈕功能
        var action_brackets_left= {
                exec:function(editor){
                        editor.insertText( '〔' );     
                }
        } ;
        //Section 2 : 建立按鈕
        name_brackets_left='NewButton_brackets_left';
        CKEDITOR.plugins.add('mark_brackets_left',{
                init:function(editor){
                        editor.addCommand(name_brackets_left,action_brackets_left);
                        editor.ui.addButton('mark_brackets_left',{
                                label:'brackets_left',
                                icon: this.path + 'brackets_left.png',
                                command:name_brackets_left,
                                toolbar: 'mark,14'
                        });
                }        
        });
        
});