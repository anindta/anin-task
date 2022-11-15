function tampildata(){
    document.getElementById('tabeldata').insertrow(-1).innerHTML= `<tr>
    <td>`+$("name").val()+`</td>
    <td>`+$("am").val()+`</td>
    <td>`+$("cal").val()+`</td>
    <td>`+$("pro").val()+`</td>
    <td>`+$("da").val()+`</td>
</tr>`;
}

$(document).ready(function(){
	
	var no = 1;	
		$("button").click(function(){
			$('table tbody tr').removeClass('activ');  
		  var input = $("#name").val();
          var hi =  $("#am").val()
          var cal = $("#cal").val();
          var pro =  $("#pro").val()
          var da = $("#da").val();
        
          
		  	if(input != 0)
		    {
				$('<tr><td>'+input+'</td><td>'+hi+'</td><td>'+cal+'</td><td>'+pro+'</td><td>'+da+'</td></tr>').appendTo('table');
        
       
				}else{
				alert('Nama Tidak Boleh Kosong !');	
				}

    
      
      });

 
})
console.log()

