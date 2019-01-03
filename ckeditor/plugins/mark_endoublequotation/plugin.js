$(function(){
        //Section 1 : 按鈕功能
        var action_endoublequotation= {
                exec:function(editor){
                        editor.insertText( '〞' );     
                }
        } ;
        //Section 2 : 建立按鈕
        name_endoublequotation='NewButton_endoublequotation';
        CKEDITOR.plugins.add('mark_endoublequotation',{
                init:function(editor){
                        editor.addCommand(name_endoublequotation,action_endoublequotation);
                        editor.ui.addButton('mark_endoublequotation',{
                                label:'endoublequotation',
                                icon: this.path + 'endoublequotation.png',
                                command:name_endoublequotation,
                                toolbar: 'mark,11'
                        });
                }        
        });
        
});