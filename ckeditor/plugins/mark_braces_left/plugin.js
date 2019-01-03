$(function(){
        //Section 1 : 按鈕功能
        var action_braces_left= {
                exec:function(editor){
                        editor.insertText( '｛' );     
                }
        } ;
        //Section 2 : 建立按鈕
        name_braces_left='NewButton_braces_left';
        CKEDITOR.plugins.add('mark_braces_left',{
                init:function(editor){
                        editor.addCommand(name_braces_left,action_braces_left);
                        editor.ui.addButton('mark_braces_left',{
                                label:'braces_left',
                                icon: this.path + 'braces_left.png',
                                command:name_braces_left,
                                toolbar: 'mark,16'
                        });
                }        
        });
        
});