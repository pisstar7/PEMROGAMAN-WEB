$(document).ready(function(){

    $('.bukutamu').show();
    $('#btnsubmit').on('click',function(){
        
        var name = $('#name').val()
        var email = $('#email').val()
        var msg = $('#msg').val()
        
        if(name==""){
        }
        else{
            $('.bukutamu').show();
            //console.log(name+email+msg);
            $(".isikom").append("<ul><li>"+name+" / "+email+"<br>"+msg+"<br><br><hr><br>");
        }
        $('#name,#email,#msg').val("") 
    })

    //FORM SEWA
    $('.formsewa').hide();
    $('.btnsewa').on('click',function(){

        $('.formsewa').show();
        var gambar = $(this).attr('alamat')
        var harga = $(this).attr('value')
        //console.log(gambar+" "+harga);
        
        $('#gambarform').attr('src',gambar)
        $('#hrgsewa').attr('value',harga)
        $('#totalhrg').attr('value','Rp. '+harga) 
        alert('Silahkan Isi Data')
    })

    $('#jmlhari').keyup(function(){

        var bilangan1 = parseInt($("#hrgsewa").val()); 
        var jmlhari = $('#jmlhari').val();

        if(jmlhari<0){
            $('#jmlhari').val('1')
        } 
        var hasil = (bilangan1 * jmlhari)
        //console.log(hasil)
        $('#totalhrg').val('Rp. '+hasil)
    })
    $('#jmlhari').on('click',function(){

        var bilangan1 = parseInt($("#hrgsewa").val()); 
        var jmlhari = $('#jmlhari').val();

        if(jmlhari<0){
            $('#jmlhari').val('1')
        } 
        var hasil = (bilangan1 * jmlhari)
        //console.log(hasil)
        $('#totalhrg').val('Rp. '+hasil)
    })
    
    $('#submitpesan').on('click',function(){
        ///console.log('Hello Sayang')
        
        var a = parseInt($("#hrgsewa").val()); 
        var b = $('#namapesan').val();
        var c = $('#nikpesan').val();
        var d = $('#alamatpesan').val();
        var e = $('#jmlhari').val();
        
        if(a=='' ||  b=='' || c=='' || d==''){
            alert('Ada yang kosong, Apakah Hatimu atau formnya ? 🤔🤔')
            console.log(a+b+c+d+e)
        }
        else{
            alert('Terimakasih Atas Kepercayaanya 😁')
            $('.formsewa').hide();

            $('#namapesan').val('');
            $('#nikpesan').val('');
            $('#alamatpesan').val('');
            $('#jmlhari').val('');
        }
        
    })
    $('#cancelpesan').on('click',function(){
        $('.formsewa').hide();

        $('#namapesan').val('');
        $('#nikpesan').val('');
        $('#alamatpesan').val('');
        $('#jmlhari').val('');

    })
    
})
