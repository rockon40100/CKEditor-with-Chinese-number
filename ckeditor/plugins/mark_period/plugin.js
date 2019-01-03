$(function(){
        //Section 1 : 按鈕功能
        var action_period= {
                exec:function(editor){
                        editor.insertText( '。' );      
                }
        } ;
        //Section 2 : 建立按鈕
        name_period='NewButton_period';
        CKEDITOR.plugins.add('mark_period',{
                init:function(editor){
                        editor.addCommand(name_period,action_period);
                        editor.ui.addButton('mark_period',{
                                label:'period',
                                icon: this.path + 'period.png',
                                command:name_period,
                                toolbar: 'mark,2'
                        });
                }        
        });
        
});