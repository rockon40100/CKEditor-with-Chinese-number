$(function(){
        //Section 1 : 按鈕功能
        var action_angle_left= {
                exec:function(editor){
                        editor.insertText( '＜' );     
                }
        } ;
        //Section 2 : 建立按鈕
        name_angle_left='NewButton_angle_left';
        CKEDITOR.plugins.add('mark_angle_left',{
                init:function(editor){
                        editor.addCommand(name_angle_left,action_angle_left);
                        editor.ui.addButton('mark_angle_left',{
                                label:'angle_left',
                                icon: this.path + 'angle_left.png',
                                command:name_angle_left,
                                toolbar: 'mark,18'
                        });
                }        
        });
        
});