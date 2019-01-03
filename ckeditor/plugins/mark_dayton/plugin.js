$(function(){
        //Section 1 : 按鈕功能
        var action_dayton= {
                exec:function(editor){
                        editor.insertText( '、' );     
                }
        } ;
        //Section 2 : 建立按鈕
        name_dayton='NewButton_dayton';
        CKEDITOR.plugins.add('mark_dayton',{
                init:function(editor){
                        editor.addCommand(name_dayton,action_dayton);
                        editor.ui.addButton('mark_dayton',{
                                label:'dayton',
                                icon: this.path + 'dayton.png',
                                command:name_dayton,
                                toolbar: 'mark,8'
                        });
                }        
        });
        
});