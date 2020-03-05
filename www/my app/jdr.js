$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});

Private Shared Function ReplaceNonASCIIChars(ByVal html As String) As String
    Return Regex.Replace(html, "[^\u0000-\u007F]", "&nbsp;")
End Function