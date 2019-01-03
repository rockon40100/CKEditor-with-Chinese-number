$(function(){
        //Section 1 : 按鈕功能
        var action_colon= {
                exec:function(editor){
                        editor.insertText( '：' );
                        
                }
        } ;
        //Section 2 : 建立按鈕
        name_colon='NewButton_colon';
        CKEDITOR.plugins.add('mark_colon',{
                init:function(editor){
                        editor.addCommand(name_colon,action_colon);
                        editor.ui.addButton('mark_colon',{
                                label:'colon',
                                icon: this.path + 'colon.png',
                                command:name_colon,
                                toolbar: 'mark,3'
                        });
                }        
        });
        
});