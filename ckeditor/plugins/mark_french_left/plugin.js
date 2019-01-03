$(function(){
        //Section 1 : 按鈕功能
        var action_french_left= {
                exec:function(editor){
                        editor.insertText( '《' );     
                }
        } ;
        //Section 2 : 建立按鈕
        name_french_left='NewButton_french_left';
        CKEDITOR.plugins.add('mark_french_left',{
                init:function(editor){
                        editor.addCommand(name_french_left,action_french_left);
                        editor.ui.addButton('mark_french_left',{
                                label:'french_left',
                                icon: this.path + 'french_left.png',
                                command:name_french_left,
                                toolbar: 'mark,20'
                        });
                }        
        });
        
});