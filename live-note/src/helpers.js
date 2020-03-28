/*___________To wait for user to stop typing for a few second .When user stops , add content to the data base._______________*/
export default function debounce(a,b,c){
    var d,e;
    return function(){
      function h(){
        d=null;
        c||(e=a.apply(f,g));
      }
      var f=this,g=arguments;
      return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
    }
  }
  
/*_____________________We're using react-quill in this app. It stores html tag as well . 
                       But we don't want to show htmltags in our preview.
                       So, to get plain text . We will use the below function.___________________________*/  
  export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
  };