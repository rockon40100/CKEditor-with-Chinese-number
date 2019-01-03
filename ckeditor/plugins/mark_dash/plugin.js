$(function(){
        //Section 1 : 按鈕功能
        var action_dash= {
                exec:function(editor){
                        editor.insertText( '─' );
                        
                }
        } ;
        //Section 2 : 建立按鈕
        name_dash='NewButton_dash';
        CKEDITOR.plugins.add('mark_dash',{
                init:function(editor){
                        editor.addCommand(name_dash,action_dash);
                        editor.ui.addButton('mark_dash',{
                                label:'dash',
                                icon: this.path + 'dash.png',
                                command:name_dash,
                                toolbar: 'mark,7'
                        });
                }        
        });
        
});