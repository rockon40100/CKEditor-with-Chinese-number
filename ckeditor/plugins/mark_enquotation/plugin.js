$(function(){
        //Section 1 : 按鈕功能
        var action_enquotation= {
                exec:function(editor){
                        editor.insertText( "』" );     
                }
        } ;
        //Section 2 : 建立按鈕
        name_enquotation='NewButton_enquotation';
        CKEDITOR.plugins.add('mark_enquotation',{
                init:function(editor){
                        editor.addCommand(name_enquotation,action_enquotation);
                        editor.ui.addButton('mark_enquotation',{
                                label:'enquotation',
                                icon: this.path + 'enquotation.png',
                                command:name_enquotation,
                                toolbar: 'mark,10'
                        });
                }        
        });
        
});