$(function(){
        //Section 1 : 按鈕功能
        var action_dot= {
                exec:function(editor){
                        editor.insertText( '.' );     
                }
        } ;
        //Section 2 : 建立按鈕
        name_dot='NewButton_dot';
        CKEDITOR.plugins.add('mark_dot',{
                init:function(editor){
                        editor.addCommand(name_dot,action_dot);
                        editor.ui.addButton('mark_dot',{
                                label:'dot',
                                icon: this.path + 'dot.png',
                                command:name_dot,
                                toolbar: 'mark,9'
                        });
                }        
        });
        
});