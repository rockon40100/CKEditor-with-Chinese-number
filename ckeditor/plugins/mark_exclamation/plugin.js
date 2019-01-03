$(function(){
        //Section 1 : 按鈕功能
        var action_exclamation= {
                exec:function(editor){
                        editor.insertText( '！' );     
                }
        } ;
        //Section 2 : 建立按鈕
        name_exclamation='NewButton_exclamation';
        CKEDITOR.plugins.add('mark_exclamation',{
                init:function(editor){
                        editor.addCommand(name_exclamation,action_exclamation);
                        editor.ui.addButton('mark_exclamation',{
                                label:'exclamation',
                                icon: this.path + 'exclamation.png',
                                command:name_exclamation,
                                toolbar: 'mark,6'
                        });
                }        
        });
        
});