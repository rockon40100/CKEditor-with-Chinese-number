$(function(){
        //Section 1 : 按鈕功能
        var action_comma= {
                exec:function(editor){
                        editor.insertText( '，' );
                        
                }
        } ;
        //Section 2 : 建立按鈕
        name_comma='NewButton_comma';
        CKEDITOR.plugins.add('mark_comma',{
                init:function(editor){
                        editor.addCommand(name_comma,action_comma);
                        editor.ui.addButton('mark_comma',{
                                label:'comma',
                                icon: this.path + 'comma.png',
                                command:name_comma,
                                toolbar: 'mark,1'
                        });
                }        
        });
        
});