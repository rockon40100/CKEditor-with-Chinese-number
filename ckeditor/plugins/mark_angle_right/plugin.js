$(function(){
        //Section 1 : 按鈕功能
        var action_angle_right= {
                exec:function(editor){
                        editor.insertText( '＞' );     
                }
        } ;
        //Section 2 : 建立按鈕
        name_angle_right='NewButton_angle_right';
        CKEDITOR.plugins.add('mark_angle_right',{
                init:function(editor){
                        editor.addCommand(name_angle_right,action_angle_right);
                        editor.ui.addButton('mark_angle_right',{
                                label:'angle_right',
                                icon: this.path + 'angle_right.png',
                                command:name_angle_right,
                                toolbar: 'mark,19'
                        });
                }        
        });
        
});