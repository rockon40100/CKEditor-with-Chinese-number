$(function(){
        //Section 1 : 按鈕功能
        var action_question= {
                exec:function(editor){
                        editor.insertText( '？' );     
                }
        } ;
        //Section 2 : 建立按鈕
        name_question='NewButton_question';
        CKEDITOR.plugins.add('mark_question',{
                init:function(editor){
                        editor.addCommand(name_question,action_question);
                        editor.ui.addButton('mark_question',{
                                label:'question',
                                icon: this.path + 'question.png',
                                command:name_question,
                                toolbar: 'mark,5'
                        });
                }        
        });
        
});