$(function(){
    //Section 1 : 按鈕功能
    var action_8_2= {
        exec:function(editor){
            editorcontent = $( editor.window.getFrame().$ ).contents();
            var range = editor.getSelection().getRanges()[0];
            //設定書籤
            var bm = range.createBookmark();
            var text = [];
            var start = -1;
            var end = -1;
            //找到有書籤的內容
            for(var i=0;i<range.root.$.children.length;i++){
                if(range.root.$.children[i].outerHTML.indexOf('<span') != -1 && start == -1){
                    start = i;
                }
                else if(range.root.$.children[i].outerHTML.indexOf('<span') != -1){
                    end = i;
                }
                
            }
            if(end == -1){
                end = start;
            }
            //將start~end範圍中的內容取出，並加上class
            var j = 0;
            for(var i=start;i<=end;i++){
                if(editorcontent.find('ol').has('span').length > 0){
                    //表示整個內容都被包在ol裡
                    if(i >= range.root.$.children.length){
                        break;
                    }

                }
                text[j] = range.root.$.children[i].outerHTML;
                editorcontent.find('p:nth-child('+(i+1)+')').addClass('remove');
                editorcontent.find('ol:nth-child('+(i+1)+')').addClass('remove');
                j++;
            }
            
            //如果找不到有span的p且也沒有找到有span的ol表示是ctrl+a
            if(editorcontent.find('p').has('span').length == 0 && editorcontent.find('ol').has('span').length == 0){
                var text = [];
                //取出全部內容並分段
                text = editorcontent.find('body').children();
                for(var i=0;i<text.length;i++){
                    text[i] = text[i].outerHTML;
                }
            }
            //取代多餘的tag
            for(var i=0;i<text.length;i++){
                ol_start = text[i].indexOf('<li');
                ol_end = text[i].lastIndexOf('</li>');
                if(ol_start != -1){
                    text[i] = text[i].substring(ol_start,ol_end+5);
                }

                text[i] = text[i].replace('/<span style="display: none;" data-cke-bookmark="1">&nbsp;<\/span>/','');
                text[i] = text[i].replace(/remove/g,'');
                text[i] = text[i].replace(/ class=""/g,'');
                text[i] = text[i].replace(/<p>/g,'<li>');
                text[i] = text[i].replace(/<br><\/p>/g,'<\/li>');
                text[i] = text[i].replace(/<\/p>/g,'<\/li>');
            }
            
            var isol = 0; //第一層被選到的ol數
            editorcontent.find('body>ol').has('span').each(function(){
                if($(this).is('ol') == true){
                    isol++;
                }
            });
            
            //判斷是否為ctrl+a
            if(editorcontent.find('p').has('span').length == 0 && editorcontent.find('ol').has('span').length == 0){
                editorcontent.find('span').first().after('<ol class="labelall[2]+symbolall[1] start2 add"></ol>');
                for(var i=0;i<text.length;i++){
                    editorcontent.find('.add').append(text[i]);
                }
                editorcontent.find('p').remove();
                editorcontent.find('.remove').remove();
            }
            else{
                //判斷是否有ol
                if(editorcontent.find('ol').has('span').length > 0){
                    //如果有包到<P>
                    if(editorcontent.find('.remove').is('p') || isol > 1){
                        editorcontent.find('ol').has('span').first().attr('class','labelall[2]+symbolall[1] start2 add');
                        editorcontent.find('ol').has('span').html(text);
                        editorcontent.find('.remove').remove();    
                    }
                    //如果在OL內就只改標號不產生
                    else{
                        editorcontent.find('.remove').removeClass('remove');
                        editorcontent.find('span').parent().parent().attr('class','labelall[2]+symbolall[1] start2 add');    
                    }
                }
                //沒標號
                else{
                    editorcontent.find('ol').removeClass('remove');
                    editorcontent.find('p').has('span').first().after('<ol class="labelall[2]+symbolall[1] start2 add"></ol>');    
                    for(var i=0;i<text.length;i++){
                        editorcontent.find('.add').append(text[i]);
                    }
                    editorcontent.find('.remove').remove();
                } 
            }
            editorcontent.find('span').remove();
            var sym = symbolall[1];
            var lab = labelall[2];
            changecnnum(editor,sym,lab);
        }
    } ;
    //Section 2 : 建立按鈕
    name_8_2='NewButton_8_2';
    CKEDITOR.plugins.add('ol_8_2',{
        init:function(editor){
            editor.addCommand(name_8_2,action_8_2);
            editor.ui.addButton('ol_8_2',{
                label:'8_2',
                icon: this.path + '(丑).ico',
                command:name_8_2
            });
        }        
    });
    
});