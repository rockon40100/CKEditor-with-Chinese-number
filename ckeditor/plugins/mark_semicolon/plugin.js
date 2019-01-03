$(function(){
        //Section 1 : 按鈕功能
        var action_semicolon= {
                exec:function(editor){
                        editor.insertText( '；' );     
                }
        } ;
        //Section 2 : 建立按鈕
        name_semicolon='NewButton_semicolon';
        CKEDITOR.plugins.add('mark_semicolon',{
                init:function(editor){
                        editor.addCommand(name_semicolon,action_semicolon);
                        editor.ui.addButton('mark_semicolon',{
                                label:'semicolon',
                                icon: this.path + 'semicolon.png',
                                command:name_semicolon,
                                toolbar: 'mark,4'
                        });
                }        
        });
        
});